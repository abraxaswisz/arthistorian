import React from "react";
import Question from "./Question";
import { question } from "../questions";
import { randomNumber } from "../helpers";
import QuestionTest from "./QuestionTest";
class App extends React.Component {
  state = {
    showNextQuestion: false
  };
  render() {
    return (
      <React.Fragment>
        <h2>Hello {this.props.match.params.userId}</h2>
        <Question question={question} />
        <QuestionTest
          question={question[randomNumber(question)]}
          showNextQuestion={this.state.showNextQuestion}
        />
      </React.Fragment>
    );
  }
}

export default App;
