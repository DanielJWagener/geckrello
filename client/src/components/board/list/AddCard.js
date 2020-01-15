import React from "react";
import { connect } from "react-redux";
import { addCard } from "../../../actions";

class AddCard extends React.Component {
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

    this.promptHeight = this.addCardPromptRef.current.clientHeight;
  }

  // Mode and height toggle
  toggleMode = () => {
    if (this.state.mode === "prompt") {
      this.setState({ mode: "input" });
    } else {
      this.setState({ mode: "prompt" });
    }

    let currentHeight =
      this.state.mode === "input" ? this.promptHeight : this.inputHeight;
    this.props.setSpansUpdate(currentHeight);
  };

  // Card sumbit handler
  onFormSubmit = e => {
    e.preventDefault();

    // Validate input
    if (!this.state.cardTitle) {
      alert("Please enter a card title.");
      return false;
    }

    // Generate a unique key and cardId in the event of duplicate card titles
    const generateCardId = inputId => {
      if (!this.props.cards.find(card => card.cardId === inputId)) {
        return inputId;
      } else {
        inputId = `${inputId}-duplicate`;
        return generateCardId(inputId);
      }
    };
    let cardId = generateCardId(this.state.cardTitle);

    // Call addCard redux action if user has entered a card title
    if (this.state.cardTitle) {
      this.props.addCard(this.state.cardTitle, cardId, this.props.listHome);

      // Clear input, change mode
      this.setState({ cardTitle: "", mode: "prompt", borderColor: "#555" });
      this.props.setSpansUpdateForCard(this.promptHeight);
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
          className="list__addCard list__addCard-prompt"
          style={{ backgroundColor: this.state.backgroundColor }}
          onMouseOver={this.hoverBackground}
          onMouseLeave={this.resetBackground}
          onClick={this.toggleMode}
          ref={this.addCardPromptRef}
        >
          <span className="list__addCard-prompt--plus">+</span>
          <span className="list__addCard-prompt--label">Add new card</span>
        </div>
      );
    } else {
      return (
        <div
          className="list__addCard list__addCard-form"
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

const mapStateToProps = state => {
  return { cards: state.cards };
};

export default connect(
  mapStateToProps,
  { addCard }
)(AddCard);
