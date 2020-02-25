import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

import { updateCardDescription } from "../../actions";

import "./card-description.styles.scss";

class CardDescription extends React.Component {
  state = {
    descriptionInput: "",
    mode: "prompt"
  };

  toggleMode = () => {
    if (this.state.mode === "prompt") {
      this.setState({ mode: "input" });
    } else if (this.state.mode === "input") {
      this.setState({ mode: "prompt" });
    }
  };

  onFormSubmit = e => {
    e.preventDefault();
    /*
    if (!this.state.descriptionInput) {
      return false;
    }
    */

    this.props.updateCardDescription(
      this.props.cardId,
      this.state.descriptionInput
    );
    this.setState({ mode: "prompt" });
  };

  handleChange = e => {
    this.setState({ descriptionInput: e.target.value });
  };

  render() {
    const descriptionPromptAdd = (
      <>
        <div className="widget-heading">
          <FontAwesomeIcon
            icon={faAlignLeft}
            className="widget-heading__icon"
          />
          <h3 className="widget-heading__text">Description</h3>
        </div>
        <button className="description__prompt" onClick={this.toggleMode}>
          Add a description...
        </button>
      </>
    );

    const descriptionPromptEdit = (
      <>
        <div className="widget-heading">
          <FontAwesomeIcon
            icon={faAlignLeft}
            className="widget-heading__icon"
          />
          <h3 className="widget-heading__text">Description</h3>
          <button onClick={this.toggleMode} className="widget-heading__button">
            Edit
          </button>
        </div>

        <div className="description__display">
          {this.props.card.description}
        </div>
      </>
    );
    const descriptionPrompt =
      !this.props.card.description || this.props.card.description === "\n"
        ? descriptionPromptAdd
        : descriptionPromptEdit;

    const descriptionInput = (
      <>
        <div className="widget-heading">
          <FontAwesomeIcon
            icon={faAlignLeft}
            className="widget-heading__icon"
          />
          <h3 className="widget-heading__text">Description</h3>
        </div>
        <form onSubmit={this.onFormSubmit} className="modal-form">
          <div className="modal-form__group">
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className="modal-form__textarea"
              placeholder="Add a description..."
              onChange={this.handleChange}
              value={this.state.descriptionInput}
            ></textarea>
          </div>
          <div className="modal-form__group">
            <input type="submit" className="modal-form__submit" value="Save" />
            <button className="modal-form__cancel" onClick={this.toggleMode}>
              Cancel
            </button>
          </div>
        </form>
      </>
    );

    return (
      <div className="description">
        {this.state.mode === "prompt" ? descriptionPrompt : descriptionInput}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { cardId } = ownProps;
  const allCards = state.cards;
  const card = state.cards.filter(card => card._id === cardId)[0];
  return { card, allCards };
};

export default connect(mapStateToProps, { updateCardDescription })(
  CardDescription
);
