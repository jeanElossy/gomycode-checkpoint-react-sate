import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
      };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.evolution(),
      2000
    );
  }

  evolution() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <strong>{this.state.date.toLocaleTimeString()}.</strong>
      </div>
    );
  }
}

export default Time;
