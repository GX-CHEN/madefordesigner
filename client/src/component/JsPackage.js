import React from 'react';
import './Gif.css';
import {Card, Col, Row} from "antd";
import BackButton from "./BackButton";

function JsPackages() {
  return (
    <div className="listing-container">
      <h1 className="listing-header">Third Party Library</h1>
      <div className="listing-cards-container">
        <Row>
          <Col xs={24} lg={12}>
            <Card
              className="card-container"
              title="Pose/Framer Motion"
            >
              <p>Support neat non-linear motion</p>
              <p>Have ready to use design</p>
              <p>Need designer's input to match theme</p>
              <p><a href="https://popmotion.io/pose/">React Pose</a>, <a href="https://www.framer.com/motion/">Framer
                Motion</a></p>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card
              className="card-container"
              title="D3.js"
            >
              <p>Advanced Data Visualization Library</p>
              <p>Highly customizable, take time to learn</p>
              <p>For simple use, we should go for simpler libraries</p>
              <p><a href="https://observablehq.com/@d3/gallery">D3 Examples</a></p>
            </Card>
          </Col>
        </Row>
      </div>
      <BackButton/>
    </div>
  );
}

export default JsPackages;
