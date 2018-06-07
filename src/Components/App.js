import React from "react";
import Test from "./Test";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="background" />
        <div className="container m-auto">
          <Test name={this.props.match.params.userId} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
