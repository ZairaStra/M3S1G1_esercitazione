import { Component } from "react";

class Main extends Component {
  render() {
    return <div className="general-container">{this.props.children}</div>;
  }
}

export default Main;
