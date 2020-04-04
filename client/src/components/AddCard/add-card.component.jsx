import React from "react";
import { connect } from "react-redux";
import { addCard } from "../../actions";

import "./add-card.styles.scss";

export class AddCard extends React.Component {
  // This component has two modes: "prompt" and "input." The "prompt" mode is the initial mode, basically a button with a label like "add new card." When the user clicks that button, the mode changes to "input," and the user can input and submit a new card and title.
  state = {
    mode: "prompt",
    backgroundColor: "",
    cardTitle: "",
    borderColor: "#555"
  };

  // Hover effect (CSS's :hover pseudoselector wasn't creating the desired effect)
  backgroundColor = {
    default: "#e0e4ff",
    hover: "#9093ad"
  };

  hoverBackground = () => {
    this.setState({ backgroundColor: this.backgroundColor.hover });
  };

  resetBackground = () => {
    this.setState({ backgroundColor: this.backgroundColor.default });
  };

  // Set initial background color, get height for this.promptHeight
  addCardPromptRef = React.createRef();
  addCardInputRef = React.createRef();

  promptHeight = 0;
  inputHeight = 96; // TODO: don't hardcode this value

  componentDidMount() {
    this.setState({
      backgroundColor: this.backgroundColor.default
    });
  }

  // Mode and height toggle
  toggleMode = () => {
    if (this.state.mode === "prompt") {
      this.setState({ mode: "input" });
      this.resetBackground();
    } else {
      this.setState({ mode: "prompt" });
    }
  };

  // Card sumbit handler
  onFormSubmit = e => {
    e.preventDefault();

    // Validate input
    if (!this.state.cardTitle) {
      alert("Please enter a card title.");
      return false;
    }

    // Call addCard redux action if user has entered a card title
    if (this.state.cardTitle) {
      this.props.addCard(
        this.state.cardTitle,
        this.props.listHome,
        this.props.boardHome
      );

      // Clear input, change mode
      this.setState({ cardTitle: "", mode: "prompt", borderColor: "#555" });
    } else {
      return false;
    }
  };

  // Controlled input handler
  handleChange = e => {
    this.setState({ cardTitle: e.target.value });

    e.target.value
      ? this.setState({ borderColor: "#4fa644" })
      : this.setState({ borderColor: "red" });
  };

  render() {
    if (this.state.mode === "prompt") {
      return (
        <div
          className="add-card add-card__prompt"
          style={{ backgroundColor: this.state.backgroundColor }}
          onMouseOver={this.hoverBackground}
          onTouchStart={this.hoverBackground}
          onMouseLeave={this.resetBackground}
          onTouchMove={this.resetBackground}
          onClick={this.toggleMode}
          ref={this.addCardPromptRef}
        >
          <span className="add-card__prompt--plus">+</span>
          <span className="add-card__prompt--label">Add new card</span>
        </div>
      );
    } else {
      return (
        <div
          className="add-card add-card__form"
          style={{ backgroundColor: this.backgroundColor.default }}
          ref={this.addCardInputRef}
        >
          <form onSubmit={this.onFormSubmit} className="form">
            <div className="form__group">
              <input
                type="text"
                className="form form__input form__input--validation"
                value={this.state.cardTitle}
                onChange={this.handleChange}
                style={{ borderBottomColor: this.state.borderColor }}
                placeholder="New card title..."
                autoFocus
              />
            </div>
            <div className="form__group">
              <input type="submit" className="form__submit" value="Add Card" />
              <button className="form__cancel" onClick={this.toggleMode}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ cards, board }) => {
  const boardHome = board ? board._id : "";
  return { boardHome, cards };
};

export default connect(mapStateToProps, { addCard })(AddCard);
