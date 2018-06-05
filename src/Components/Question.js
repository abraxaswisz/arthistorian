import React from "react";

class Question extends React.Component {
  state = {
    answerClicked: false,
    disabled: null,
    isCorrectAnswer: null
  };

  handleClick = e => {
    const { answers, correctAnswer } = this.props.question;
    if (e.target.textContent === answers[correctAnswer]) {
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
    const { ask, img, answers } = this.props.question;
    return (
      <React.Fragment>
        <div className="card text-center p-4">
          <img
            src={img}
            alt="imgquestion"
            className="m-auto"
            style={{ maxWidth: "500px" }}
          />
          <h1 className="text-center my-3">{ask}</h1>
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
