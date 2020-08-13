import React from 'react';
import logo from '../logo.svg';
import './CSS.css';
import {Card, Col, Row} from "antd";
import BackButton from "./BackButton";

function CSS() {
  return (
    <div className="listing-container">
      <h1 className="listing-header">Pure CSS Animation</h1>
      <div className="listing-cards-container">
        <Row>
          <Col xs={24} lg={12}>
            <Card
              className="card-container"
              title="Rotate"
            >
              <div className="logo-header">
                <img src={logo} className="logo" alt="logo"/>
              </div>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card
              className="card-container"
              title="Color Gradient"
            >
              <div className="gradient">
                Colorful
              </div>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card
              className="card-container"
              title="Linear Move"
            >
              <div className="move-container">
              </div>
            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card
              className="card-container"
              title="Ease Move"
            >
              <div className="ease-move-container">
              </div>
            </Card>
          </Col>
        </Row>
      </div>
      <BackButton/>
    </div>
  );
}

export default CSS;
