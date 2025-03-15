import React, { useState } from "react";
import { Form, Button, Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap";

function Round() {
  const [hole60, setHole60] = useState("");
  const [pitch60, setPitch60] = useState("");
  const [holes60, setHoles60] = useState("");
  const [openArea60, setOpenArea60] = useState("");

  const [hole45, setHole45] = useState("");
  const [pitch45, setPitch45] = useState("");
  const [holes45, setHoles45] = useState("");
  const [openArea45, setOpenArea45] = useState("");

  const [unitHole60, setUnitHole60] = useState("mm"); // Unit toggle for hole60
  const [unitPitch60, setUnitPitch60] = useState("mm"); // Unit toggle for pitch60
  const [unitHole45, setUnitHole45] = useState("mm"); // Unit toggle for hole45
  const [unitPitch45, setUnitPitch45] = useState("mm"); // Unit toggle for pitch45

  const convertToMM = (value, unit) => {
    return unit === "mm" ? parseFloat(value) : parseFloat(value) * 25.4;
  };

  const calculateResults = (angle) => {
    if (angle === 60) {
      const holeSizeMM = convertToMM(hole60, unitHole60);
      const pitchSizeMM = convertToMM(pitch60, unitPitch60);
      const holes = pitchSizeMM !== 0 ? (745 / (pitchSizeMM ** 2)).toFixed(3) : 0;
      const openArea =
        holeSizeMM && pitchSizeMM
          ? ((holeSizeMM ** 2) / (pitchSizeMM ** 2) * 90.69).toFixed(3)
          : 0;
      setHoles60(holes);
      setOpenArea60(openArea);
    } else if (angle === 45) {
      const holeSizeMM = convertToMM(hole45, unitHole45);
      const pitchSizeMM = convertToMM(pitch45, unitPitch45);
      const holes = pitchSizeMM !== 0 ? (745 / (pitchSizeMM ** 2)).toFixed(3) : 0;
      const openArea =
        holeSizeMM && pitchSizeMM
          ? ((holeSizeMM ** 2) / (pitchSizeMM ** 2) * 78.54).toFixed(3)
          : 0;

      setHoles45(holes);
      setOpenArea45(openArea);
    }
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      {/* 60 Degree Form */}
      <Row className="mb-5">
        <Col>
          <h3 className="fw-bold">60 Degrees</h3>
          <Form>
            <Form.Group controlId="hole60">
              <Form.Label>Hole:</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    type="number"
                    value={hole60}
                    onChange={(e) => setHole60(e.target.value)}
                  />
                </Col>
                <Col>
                  <DropdownButton
                    title={unitHole60}
                    onSelect={(e) => setUnitHole60(e)}
                  >
                    <Dropdown.Item eventKey="mm">Millimeters (mm)</Dropdown.Item>
                    <Dropdown.Item eventKey="inch">Inches</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group controlId="pitch60" className="mt-3">
              <Form.Label>Pitch:</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    type="number"
                    value={pitch60}
                    onChange={(e) => setPitch60(e.target.value)}
                  />
                </Col>
                <Col>
                  <DropdownButton
                    title={unitPitch60}
                    onSelect={(e) => setUnitPitch60(e)}
                  >
                    <Dropdown.Item eventKey="mm">Millimeters (mm)</Dropdown.Item>
                    <Dropdown.Item eventKey="inch">Inches</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Form.Group>
            <Button
              className="mt-3"
              variant="primary"
              onClick={() => calculateResults(60)}
            >
              Calculate
            </Button>
          </Form>
          
          <p className="mt-3 fs-4 fw-bold">Hole Per Square Inch: {holes60}</p>
          <p className="fs-4 fw-bold">Open Area: {openArea60}%</p>
        </Col>
      </Row>
      <hr/>
      {/* 45 Degree Form */}
      <Row>
        <Col>
          <h3 className="fw-bold">45 Degrees</h3>
          <Form>
            <Form.Group controlId="hole45">
              <Form.Label>Hole:</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    type="number"
                    value={hole45}
                    onChange={(e) => setHole45(e.target.value)}
                  />
                </Col>
                <Col>
                  <DropdownButton
                    title={unitHole45}
                    onSelect={(e) => setUnitHole45(e)}
                  >
                    <Dropdown.Item eventKey="mm">Millimeters (mm)</Dropdown.Item>
                    <Dropdown.Item eventKey="inch">Inches</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group controlId="pitch45" className="mt-3">
              <Form.Label>Pitch:</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    type="number"
                    value={pitch45}
                    onChange={(e) => setPitch45(e.target.value)}
                  />
                </Col>
                <Col>
                  <DropdownButton
                    title={unitPitch45}
                    onSelect={(e) => setUnitPitch45(e)}
                  >
                    <Dropdown.Item eventKey="mm">Millimeters (mm)</Dropdown.Item>
                    <Dropdown.Item eventKey="inch">Inches</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Form.Group>
            <Button
              className="mt-3"
              variant="primary"
              onClick={() => calculateResults(45)}
            >
              Calculate
            </Button>
          </Form>
          <p className="mt-3 fs-4 fw-bold">Hole Per Square Inch: {holes45}</p>
          <p className="fs-4 fw-bold">Open Area: {openArea45}%</p>
        </Col>
      </Row>
    </Container>
  );
}
  
export default Round;