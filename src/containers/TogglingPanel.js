import React, {Component} from 'react';
import '../style/TogglingPanel.css';
import {connect} from 'react-redux';

class TogglingPanel extends Component{

  toggle() {
    this.props.setChecked(!this.props.checked);
  }

  getCheckboxState() {
    return this.props.checked ? "Checked" : "Unchecked";
  }

  render() {
    return (
      <div id="togglingPanel">
        <h2 id="togglingPanelTitle">Toggling</h2>
        <div id="checkboxSection">
          <input type="checkbox" checked={this.checked} onChange={this.toggle.bind(this)}></input>
          <span id="checkboxState">{this.getCheckboxState()}</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    checked: state.togglingPanelReducer.checked
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setChecked: function(checked) {
      return dispatch({
        type: "TOGGLING_SET_CHECKED",
        checked: checked
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TogglingPanel);