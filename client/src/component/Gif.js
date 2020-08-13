import React from 'react';
import './Gif.css';
import {Card, Col, Row} from "antd";
import BackButton from "./BackButton";

function Gif() {
  return (
    <div className="listing-container">
      <h1 className="listing-header">Gif Animated Image</h1>
      <div className="listing-cards-container">
        <Row>
          <Col xs={24} lg={12}>
            <Card
              className="card-container"
              title="Party Owl"
            >
              <div className="gif-container">
                <img src="./image/spakling-owl.gif" className="gif-image" alt="logo"/>
              </div>

            </Card>
          </Col>
          <Col xs={24} lg={12}>
            <Card
              className="card-container"
              title="Twinkle Owl"
            >
              <div className="gif-container">
                <img src="./image/twinkle-owl.gif" className="gif-image" alt="logo"/>
              </div>

            </Card>
          </Col>
        </Row>
      </div>
      <BackButton/>
    </div>
  );
}

export default Gif;
