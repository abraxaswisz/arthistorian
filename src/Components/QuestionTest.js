import React from "react";

class QuestionTest extends React.Component {
  state = {
    rightAnswer: 1,
    noClicked: true
  };
  checkAnswer = e => {
    this.setState({
      noClicked: null
    });
    delete e.target.onClick;
    const { answers, correctAnswer } = this.props.question;
    const listItems = [...this.listRef.current.childNodes];
    listItems.map(item => {
      item.style.color = "blue";
    });
    if (e.target.textContent === answers[correctAnswer]) {
      console.log("dobrze");
      e.target.style.color = "green";
      this.setState({
        rightAnswer: true
      });
    } else {
      console.log("źle");
      e.target.style.color = "red";
      this.setState({
        rightAnswer: false
      });
    }
  };

  listRef = React.createRef();
  render() {
    const { ask, answers, img, correctAnswer } = this.props.question;

    return (
      <React.Fragment>
        <h1>TESTING NEW COMPONENT</h1>
        <h1>{ask}</h1>
        <img src={img} alt={img} style={{ maxWidth: "500px" }} />
        <ul ref={this.listRef}>
          {answers.map(answer => (
            <li key={answer} onClick={this.state.noClicked && this.checkAnswer}>
              {answer}
            </li>
          ))}
        </ul>
        <p>
          {this.state.rightAnswer === true ? (
            <strong>Dobrze!</strong>
          ) : (
            <strong>Źle!</strong>
          )}
        </p>
      </React.Fragment>
    );
  }
}

export default QuestionTest;
