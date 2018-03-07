import React from "react";
import { Panel } from "react-bootstrap";
import TabBar from "../Tabs";

const InputForm = ({ props }) => {
  return (
    <div>
      <Panel>
        <Panel.Heading>Skapa Konto</Panel.Heading>
        <TabBar />
      </Panel>
    </div>
  );
};

export default InputForm;
