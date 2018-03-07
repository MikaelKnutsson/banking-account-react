import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import Transaction from "../Transaction";
import CreateAccount from "../CreateAccount";

class TabBar extends Component {
  render() {
    return (
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Skapa konto">
          <CreateAccount />
        </Tab>
        <Tab eventKey={2} title="Transaktioner">
          <Transaction bankAccount={this.bankAccount} />
        </Tab>
        <Tab eventKey={3} title="Historik">
          Tab 3 content
        </Tab>
      </Tabs>
    );
  }
}

export default TabBar;
