import React from "react";
import { mixArray } from "../helpers";
import shuffle from "shuffle-array";

class Question extends React.Component {
  state = {
    answerClicked: false,
    disabled: null,
    isCorrectAnswer: null
  };

  handleClick = e => {
    const { correctAnswer } = this.props.question;
    if (e.target.textContent === correctAnswer) {
      this.props.addScore();
      this.setState({
        isCorrectAnswer: true
      });
      e.target.style.color = "green";
    } else {
      e.target.style.color = "red";
      this.setState({
        isCorrectAnswer: false
      });
    }
    this.setState({
      answerClicked: !this.state.answerClicked,
      disabled: "disabled"
    });
  };
  renderAnswers = key => {
    return (
      <button
        key={key}
        className={`btn list-group-item text-center ${this.state.disabled}`}
        onClick={this.handleClick}
        disabled={this.state.disabled}
      >
        {key}
      </button>
    );
  };
  showQuestion = () => {
    this.setState({
      answerClicked: !this.state.answerClicked,
      disabled: null,
      isCorrectAnswer: null
    });
    this.props.changeQuestion();
  };

  render() {
    const { ask, img } = this.props.question;
    let answers = shuffle(this.props.question.answers);
    return (
      <React.Fragment>
        <div className="card text-center p-4 w-50 m-auto">
          <img
            src={img}
            alt="imgquestion"
            className="m-auto img-fluid"
            style={{ maxWidth: "500px", maxHeight: "300px" }}
          />
          <h3 className="text-center my-2">
            {this.props.name + ", "}
            {ask}
          </h3>
          <div className="list-group list-group-flush">
            {answers.map(this.renderAnswers)}
          </div>
          {this.state.answerClicked && (
            <button onClick={this.showQuestion}>Show Next Question</button>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Question;
