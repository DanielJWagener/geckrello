import React, { Component } from "react";
import { connect } from "react-redux";

import { updateBoard } from "../../../actions";

class BoardTitle extends Component {
  state = {
    inputText: "",
    titleText: ""
  };

  // Initially sets size of input and page title
  componentDidMount() {
    this.setInputSize(this.state.titleText.length);
    this.setPageTitle();
    this.setState({
      inputText: this.props.board.title || "",
      titleText: this.props.board.title || ""
    });
  }

  // Sets page title and input size every time state is updated
  componentDidUpdate() {
    this.setPageTitle();
    this.setInputSize();
  }

  // Updates state on user input
  inputHandler = event => {
    const inputText = event.target.value;

    this.setState({
      inputText: inputText
    });
  };

  // When user input hears Enter or Escape, calls checkEmptyInput
  keyDownHandler = event => {
    const newTitle = event.target.value;

    if (event.key === "Enter" || event.key === "Escape") {
      this.checkEmptyInput(newTitle);
    }
  };

  // Calls checkEmptyInput when input loses focus
  onBlurHandler = event => {
    const newTitle = event.target.value;

    event.target.className = "menu-bar__input";

    this.checkEmptyInput(newTitle);
  };

  // Changes input styling on focus, and selects all input text
  onFocusHandler = event => {
    event.target.className = "menu-bar__input menu-bar__input--infocus";

    event.target.select();
  };

  // Changes input styling on mouse over
  onMouseOverHandler = event => {
    document.activeElement === event.target
      ? (event.target.className = "menu-bar__input menu-bar__input--infocus")
      : (event.target.className = "menu-bar__input menu-bar__input--hover");
  };

  // Changes input styling on mouse out
  onMouseOutHandler = event => {
    document.activeElement === event.target
      ? (event.target.className = "menu-bar__input menu-bar__input--infocus")
      : (event.target.className = "menu-bar__input");
  };

  // If user input is empty, resets value to most recently saved value of titleText
  // Otherwise, value of titleText set to current input value
  checkEmptyInput = newTitle => {
    if (newTitle === "") {
      this.setState({
        inputText: this.state.titleText
      });
    } else {
      this.setState({
        titleText: newTitle
      });
      this.props.updateBoard(this.props.board._id, { title: newTitle });
    }
  };

  // Changes input width dynamically
  setInputSize = () => {
    const input = document.querySelector("input");

    input.style.width = `${this.state.inputText.length * 10 + 30}px`;
  };

  // Changes page title dynamically
  setPageTitle = () => {
    document.title = `${this.state.inputText} - Geckrello, a Trello Front-End Clone`;
  };

  render() {
    return (
      <div>
        <input
          className="menu-bar__input"
          value={this.state.inputText}
          onChange={this.inputHandler}
          onKeyDown={this.keyDownHandler}
          onBlur={this.onBlurHandler}
          onFocus={this.onFocusHandler}
          onMouseOver={this.onMouseOverHandler}
          onMouseOut={this.onMouseOutHandler}
        ></input>
      </div>
    );
  }
}

const mapStateToProps = ({ board }) => {
  return board;
};

export default connect(mapStateToProps, { updateBoard })(BoardTitle);
