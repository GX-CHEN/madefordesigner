import React from 'react';
import {ArrowLeftOutlined} from "@ant-design/icons";
import './BackButton.css';
import {Button} from "antd";

function BackButton() {
  return (
    <a href="/">
      <Button
        type="primary"
        shape="circle"
        size="large"
        className="back-button"
      >
        <ArrowLeftOutlined/>
      </Button>
    </a>
  );
}

export default BackButton;



