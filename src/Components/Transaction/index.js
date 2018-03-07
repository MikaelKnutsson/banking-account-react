import React from "react";
import { Panel } from "react-bootstrap";
import InputField from "./InputField";

const InputForm = ({ props }) => {
  return (
    <div>
      <Panel>
        <Panel.Heading>Överföring</Panel.Heading>
        <Panel.Body>
          <InputField bankAccount={"test"} />
        </Panel.Body>
      </Panel>
    </div>
  );
};

export default InputForm;
