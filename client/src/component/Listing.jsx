import React from "react";
import {Row, Col, Card, Button} from "antd";
import {RightOutlined} from "@ant-design/icons";
import "./Listing.css";

class Listing extends React.Component {
  render() {
    return (
      <div className="listing-container">
        <h1 className="listing-header">Different Ways For Animation</h1>
        <div className="listing-cards-container">
          <Row>
            <Col xs={24} lg={12}>
              <Card
                className="card-container"
                title="GIF approach"
                extra={
                  <a href="/gif-approach">
                    <Button type="primary" shape="circle">
                      <RightOutlined/>
                    </Button>
                  </a>
                }
              >
                <p>Use Gif Images for animation</p>
                <p>Minimal code is needed</p>
                <p>Require designer to provide these</p>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card
                className="card-container"
                title="Pure CSS animation"
                extra={
                  <a href="/css-approach">
                    <Button type="primary" shape="circle">
                      <RightOutlined/>
                    </Button>
                  </a>
                }
              >
                <p>Use CSS for animation</p>
                <p>Medium CSS code is needed</p>
                <p>Require intermediate-high CSS</p>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card
                className="card-container"
                title="Chart/Graph Lib approach"
                extra={
                  <a href="/chart-approach">
                    <Button type="primary" shape="circle">
                      <RightOutlined/>
                    </Button>
                  </a>
                }
              >
                <p>Use/edit animation from re-render chart</p>
                <p>Medium JS code is needed</p>
                <p>For dev, easier than CSS approach</p>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card
                className="card-container"
                title="3-party animation libs"
                extra={
                  <a href="/js-lib-approach">
                    <Button type="primary" shape="circle">
                      <RightOutlined/>
                    </Button>
                  </a>
                }
              >
                <p>Use dedicated animation JS libraries</p>
                <p>Can achieve best & most customized result</p>
                <p>Can take more work than other approaches</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Listing;
