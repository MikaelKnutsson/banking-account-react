import React from "react";
import InputField from "./InputField";
import { Panel } from "react-bootstrap";

const InputForm = props => {
  console.log(props.bankAccount);
  return (
    <div className="App">
      <Panel>
        <Panel.Heading>Överföring</Panel.Heading>
        <Panel.Body>
          <InputField
            accountName={props.accountName}
            onChange={props.handleChange}
          />
        </Panel.Body>
      </Panel>
    </div>
  );
};

export default InputForm;
