import React from "react";
import Test from "./Test";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container m-auto">
          <h2>Hello {this.props.match.params.userId}</h2>
          <Test />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
