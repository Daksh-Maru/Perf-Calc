import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Round from '../pages/Round';
import Slot from '../pages/Slot';
import Square from '../pages/Square';
import Diamond from '../pages/Diamond';
import HerringBone from '../pages/HerringBone';
import Hexagonal from '../pages/Hexagonal';
import Home from '../pages/Home.jsx';
import { NavLink } from 'react-router-dom';

function NavigBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top" style={{ zIndex: 1 }}>
        <Container>
          <Navbar.Brand as={NavLink} to="/Perf-Calc">Kaushik</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/Perf-Calc/round">Round</Nav.Link>
              <Nav.Link as={NavLink} to="/Perf-Calc/slot">Slot</Nav.Link>
              <Nav.Link as={NavLink} to="/Perf-Calc/square">Square</Nav.Link>
              <Nav.Link as={NavLink} to="/Perf-Calc/diamond">Diamond</Nav.Link>
              <Nav.Link as={NavLink} to="/Perf-Calc/herringbone">HerringBone</Nav.Link>
              <Nav.Link as={NavLink} to="/Perf-Calc/hexagonal">Hexagonal</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Page Routes */}
      <Routes>
        <Route path="/Perf-Calc" element={<Home />} />
        <Route path="/Perf-Calc/round" element={<Round />} />
        <Route path="/Perf-Calc/slot" element={<Slot />} />
        <Route path="/Perf-Calc/square" element={<Square />} />
        <Route path="/Perf-Calc/diamond" element={<Diamond />} />
        <Route path="/Perf-Calc/herringbone" element={<HerringBone />} />
        <Route path="/Perf-Calc/hexagonal" element={<Hexagonal />} />
      </Routes>
    </>
  );
}

export default NavigBar;