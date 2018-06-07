import React from "react";
import Question from "./Question";
import { questions } from "../questions";
import { randomNumber } from "../helpers";
class Test extends React.Component {
  state = {
    stateQuestions: questions,
    score: 0,
    questionNumber: 0,
    questionsLength: questions.length
  };

  componentWillMount() {
    console.log("mounting");
    this.setState({ questionNumber: randomNumber(this.state.stateQuestions) });
  }
  addScore = () => {
    this.setState({ score: this.state.score + 1 });
  };

  randomizeNumber = () => {
    this.state.stateQuestions.splice(this.state.questionNumber, 1);
    this.setState({ questionNumber: randomNumber(this.state.stateQuestions) });
  };

  render() {
    return (
      <React.Fragment>
        {!(this.state.stateQuestions.length === 0) && (
          <Question
            name={this.props.name}
            question={this.state.stateQuestions[this.state.questionNumber]}
            changeQuestion={this.randomizeNumber}
            addScore={this.addScore}
            renderNewQuestion={this.renderNewQuestion}
          />
        )}
        {this.state.stateQuestions.length === 0 && (
          <p className="text-center">
            No more questions. Your Score is {this.state.score}/{
              this.state.questionsLength
            }
          </p>
        )}
      </React.Fragment>
    );
  }
}

export default Test;
