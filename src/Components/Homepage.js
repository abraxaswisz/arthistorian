import React from "react";
import Weather from "./Weather";

class Homepage extends React.Component {
  goToCreateName = () => {
    this.props.history.push("/username");
  };
  render() {
    return (
      <React.Fragment>
        <div className="background" />
        <div className="welcome d-flex h-100">
          <div className="align-self-center mx-auto text-center">
            <h1>Hello Stranger</h1>
            <Weather />
            <h3>Welcome to my Quiz! </h3>
            <p>To continue click button below</p>
            <button onClick={this.goToCreateName}>Click me</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
