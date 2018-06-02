import React from "react";
import { Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h6>
          Back to <Link to="/"> Homepage </Link>
        </h6>
      </React.Fragment>
    );
  }
}

export default App;
