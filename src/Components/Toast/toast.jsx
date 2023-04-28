import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

export default function Toasty() {
  const [showA, setShowA] = useState(true);

  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <Col className="mb-2">
        <Button onClick={toggleShowA} className="mb-2">
          Click me
        </Button>
      </Col>
    </Row>
  );
}
