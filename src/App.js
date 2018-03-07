import React, { Component } from "react";
import "./App.css";
import TabBar from "./Components/Tabs";
import { Col } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div>
        <Col xs={6} md={4}>
          <TabBar />
        </Col>
      </div>
    );
  }
}

export default App;
