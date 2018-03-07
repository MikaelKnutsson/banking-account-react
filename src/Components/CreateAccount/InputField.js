import React from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Table
} from "react-bootstrap";

class InputField extends React.Component {
  state = {
    accountName: "",
    balance: "",
    account: { accountName: "test", balance: "test" },
    bankAccount: [{ accountName: "", balance: "" }],
    items: []
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState(prevState => ({
      account: {
        ...prevState.account,
        accountName: this.state.accountName,
        balance: this.state.balance
      }
    }));
    this.setState({
      items: [...this.state.items, this.state.accountName, this.state.balance]
    });
    this.setState({
      bankAccount: this.state.bankAccount.concat([
        { accountName: this.state.accountName, balance: this.state.balance }
      ])
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formBasicText" role="form">
            <ControlLabel>Namn</ControlLabel>
            <FormControl
              type="text"
              value={this.state.accountName}
              placeholder="Enter text"
              onChange={this.handleChange}
              name="accountName"
            />
            <FormControl.Feedback />
          </FormGroup>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Saldo</ControlLabel>
            <FormControl
              type="text"
              value={this.state.balance}
              placeholder="Enter texts"
              onChange={this.handleChange}
              name="balance"
            />
            <FormControl.Feedback />
          </FormGroup>
          <Button bsStyle="success" type="submit">
            Skapa konto
          </Button>
        </form>
        <h4 style={{ textAlign: "left", backgroundColor: "lightGray" }}>
          Mina konton
        </h4>
        <Table responsive>
          <thead>
            <tr>
              <th>Namn</th>
              <th>Saldo</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bankAccount.map(item => {
              return (
                <tr key={item.accountName}>
                  <td>{item.accountName}</td>
                  <td>{item.balance}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default InputField;
