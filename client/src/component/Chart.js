import React from 'react';
import './Chart.css';
import {Card, Col, Row} from "antd";
import BackButton from "./BackButton";
import Timer from "./Timer";

function Chart() {
  return (
    <div className="listing-container">
      <h1 className="listing-header">Pure CSS Animation</h1>
      <div className="listing-cards-container">
        <Row>
          <Col xs={24} lg={12}>
            <Card
              className="card-container chart-card-container"
              title="Pie Chart Animation"
            >
              <Timer />
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card
              className="card-container chart-card-container"
              title="Twinkle Owl"
            >

            </Card>
          </Col>
        </Row>
      </div>
      <BackButton/>
    </div>
  );
}

export default Chart;
