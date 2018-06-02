import React from "react";
import { randomNumber } from "../helpers";

class Question extends React.Component {
  state = {
    getRandomNumber: randomNumber(this.props.question),
    showLinkToAnotherQuestion: false
  };

  checkAnswer = e => {
    const { answers, correctAnswer } = this.props.question[
      this.state.getRandomNumber
    ];
    if (e.target.textContent === answers[correctAnswer]) {
      console.log("dobrze");
      e.target.style.color = "green";
      this.setState({
        showLinkToAnotherQuestion: true
      });
    } else {
      console.log("źle");
      e.target.style.color = "red";
    }
  };

  showNewQuestion = () => {
    this.props.question.splice(this.state.getRandomNumber, 1);
    this.setState({
      showLinkToAnotherQuestion: false,
      getRandomNumber: randomNumber(this.props.question)
    });
  };
  componentWillUnmount() {
    console.log("unmounting");
  }
  componentWillUpdate() {
    console.log("updating");
  }

  render() {
    const { ask, answers, img, correctAnswer } = this.props.question[
      this.state.getRandomNumber
    ];

    return (
      <React.Fragment>
        <h1>{ask}</h1>
        <img src={img} alt={img} style={{ maxWidth: "500px" }} />
        <ul>
          {answers.map(answer => (
            <li key={answer} onClick={this.checkAnswer}>
              {answer}
            </li>
          ))}
        </ul>
        {this.props.question.length > 1 &&
          (this.state.showLinkToAnotherQuestion && (
            <button onClick={this.showNewQuestion}>Continue</button>
          ))}
        <p>{answers[correctAnswer]}</p>
      </React.Fragment>
    );
  }
}

export default Question;
