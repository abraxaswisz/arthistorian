import React from "react";
import BackToHomepage from "./BackToHomepage";
class CreateName extends React.Component {
  nameRef = React.createRef();
  createName = e => {
    e.preventDefault();
    const username = this.nameRef.current.value;
    this.props.history.push(`/username/${username}`);
  };
  render() {
    return (
      <div className="container m-auto text-center">
        <form onSubmit={this.createName}>
          <h3>Please write your Name to Start</h3>
          <input
            type="text"
            required
            placeholder="Write Your Name"
            ref={this.nameRef}
          />
          <button type="submit">Confirm</button>
        </form>
        <BackToHomepage />
      </div>
    );
  }
}

export default CreateName;
