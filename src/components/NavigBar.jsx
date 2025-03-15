import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Round from '../pages/Round'
import Slot from '../pages/Slot'
import Square from '../pages/Square'
import Diamond from '../pages/Diamond'
import HerringBone from '../pages/HerringBone'
import Hexagonal from '../pages/Hexagonal'
import Home from '../pages/Home.jsx'
import { NavLink } from 'react-router-dom';

function NavigBar() {
  return (
    <>
          <Navbar bg="primary" variant="dark" expand="lg" fixed="top" style={{zIndex: 1}}>
          <Container>
            <Navbar.Brand as={NavLink} to="/">Kaushik</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/round">Round</Nav.Link>
              <Nav.Link as={NavLink} to="/slot">Slot</Nav.Link>
              <Nav.Link as={NavLink} to="/square">Square</Nav.Link>
              <Nav.Link as={NavLink} to="/diamond">Diamond</Nav.Link>
              <Nav.Link as={NavLink} to="/herringbone">HerringBone</Nav.Link>
              <Nav.Link as={NavLink} to="/hexagonal">Hexagonal</Nav.Link>
              </Nav>
          </Container>
          </Navbar>


          {/* Page Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/round" element={<Round />} />
              <Route path="/slot" element={<Slot />} />
              <Route path="/square" element={<Square />} />
              <Route path="/diamond" element={<Diamond />} />
              <Route path="/herringbone" element={<HerringBone />} />
              <Route path="/hexagonal" element={<Hexagonal />} />
          </Routes>
    </>
  )
}

export default NavigBar