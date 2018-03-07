import React from "react";
import { Button } from "react-bootstrap";

const SubmitButton = props => {
  return (
    <div>
      <Button bsStyle="success">{props.text}</Button>
    </div>
  );
};

export default SubmitButton;
