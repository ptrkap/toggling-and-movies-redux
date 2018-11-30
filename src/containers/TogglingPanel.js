import React, {Component} from 'react';
import '../style/TogglingPanel.css';

export default class TogglingPanel extends Component{

  constructor() {
    super();
    this.state = {
      checked: false
    }
  }

  toggle() {
    this.setState({checked: !this.state.checked});
  }

  getCheckboxState() {
    return this.state.checked ? "Checked" : "Unchecked";
  }

  render() {
    return (
      <div id="togglingPanel">
        <h2 id="togglingPanelTitle">Toggling</h2>
        <div id="checkboxSection">
          <input type="checkbox" checked={this.state.checked} onChange={this.toggle.bind(this)}></input>
          <span id="checkboxState">{this.getCheckboxState()}</span>
        </div>
      </div>
    );
  }
}