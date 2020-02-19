import React from "react";
import { connect } from "react-redux";
import { addList } from "../../actions";

import "./add-list.styles.scss";

class AddList extends React.Component {
  state = {
    mode: "prompt",
    listTitle: "",
    borderColor: "#555",
    spans: 0
  };

  // Inialize element height on grid. Its grid height is based on CSS grid spans, so we fetch that value from the DOM and set the number of spans accordingly
  addListRef = React.createRef();

  setSpans = () => {
    const height = this.addListRef.current.clientHeight;

    const spans = Math.floor(height / 10);

    this.setState({ spans: spans });
  };

  componentDidMount() {
    this.setSpans();
  }

  // Mode toggle. This component has two modes: "prompt" and "input." The "prompt" mode is the initial mode, basically a button with a label like "add new list." When the user clicks that button, the mode changes to "input," and the user can input and submit a new list and title.
  toggleMode = () => {
    if (this.state.mode === "prompt") {
      this.setState({ mode: "input" });
    } else {
      this.setState({ mode: "prompt" });
    }
  };

  // Submit handlers
  onFormSubmit = event => {
    event.preventDefault();

    // Validate input
    if (!this.state.listTitle) {
      alert("Please enter a title.");
      return false;
    }

    // Submit input
    this.props.addList(this.state.listTitle, this.props.boardId);

    // Clear input
    this.setState({ listTitle: "", inputValid: false, borderColor: "#555" });

    // Change mode back to "prompt"
    this.toggleMode();
  };

  // Controlled input and validation to ensure unique list titles
  handleChange = e => {
    this.setState({
      listTitle: e.target.value
    });

    e.target.value
      ? this.setState({ borderColor: "#4fa644" })
      : this.setState({ borderColor: "red" });
  };

  render() {
    if (this.state.mode === "prompt") {
      return (
        <div ref={this.addListRef} className="addList addList__prompt">
          <button onClick={this.toggleMode} className="addList__prompt-button">
            <span className="addList__prompt-plus">+</span>
            <span className="addList__prompt-label"> Add new list</span>
          </button>
        </div>
      );
    } else {
      return (
        <div
          className="addList addList__input"
          ref={this.addListRef}
          style={{ gridRowEnd: `span ${this.state.spans}` }}
        >
          <div className="addList__form">
            <form onSubmit={this.onFormSubmit} className="form">
              <div className="form__group">
                <input
                  type="text"
                  className="form form__input form__input--validation"
                  value={this.state.listTitle}
                  onChange={this.handleChange}
                  style={{ borderBottomColor: this.state.borderColor }}
                  placeholder="New list title..."
                  autoFocus
                />
              </div>
              <div className="form__group">
                <input
                  type="submit"
                  className="form__submit"
                  value="Add List"
                />
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { lists: state.lists };
};

export default connect(mapStateToProps, { addList })(AddList);
