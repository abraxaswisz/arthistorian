import React from "react";
import BackToHomepage from "./BackToHomepage";
class CreateName extends React.Component {
  nameRef = React.createRef();
  nameRefForQuiz = React.createRef();
  quizTitle = React.createRef();
  createName = e => {
    e.preventDefault();
    const username = this.nameRef.current.value;
    this.props.history.push(`/username/${username}`);
  };
  createQuiz = e => {
    e.preventDefault();
    const username = this.nameRefForQuiz.current.value;
    const quizTitle = this.quizTitle.current.value;
    this.props.history.push(`/username/${username}/${quizTitle}`);
  };
  render() {
    return (
      <div className="d-flex h-100">
        <div className="background" />
        <div className="align-self-center mx-auto text-center">
          <form onSubmit={this.createName}>
            <h3>Please write your name to start</h3>
            <input
              type="text"
              required
              placeholder="Write Your Name"
              ref={this.nameRef}
            />
            <button type="submit">Confirm</button>
          </form>
          <form onSubmit={this.createQuiz}>
            <h3>...or create your own quiz</h3>
            <input
              type="text"
              required
              placeholder="Write Your Name"
              ref={this.nameRefForQuiz}
            />
            <br />
            <br />
            <input
              type="text"
              required
              placeholder="Write quiz title"
              ref={this.quizTitle}
            />
            <br />
            <button type="submit">Confirm</button>
          </form>
          <BackToHomepage />
        </div>
      </div>
    );
  }
}

export default CreateName;
