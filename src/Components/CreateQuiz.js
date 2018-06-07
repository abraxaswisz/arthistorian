import React from "react";

class CreateQuiz extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="question" />
        <input type="text" name="img" />
        <input type="text" name="answerone" />
        <input type="text" name="answertwo" />
        <input type="text" name="answerthree" />
        <input type="text" name="answerfour" />
        <button type="submit">Submit Question</button>
      </form>
    );
  }
}

export default CreateQuiz;
