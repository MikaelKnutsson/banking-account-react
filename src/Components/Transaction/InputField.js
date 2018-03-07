import React from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

class InputField extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Från Konto</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">tessst</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Till konto</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="select">select</option>
              <option value="other">...</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Summa</ControlLabel>
            <FormControl type="text" placeholder="Enter texts" name="balance" />
            <FormControl.Feedback />
          </FormGroup>
          <Button bsStyle="success" type="submit">
            Överför
          </Button>
        </form>;
      </div>
    );
  }
}

export default InputField;
