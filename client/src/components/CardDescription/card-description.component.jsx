import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

import { updateCardDescription } from "../../redux/cards/cards.actions";

import "./card-description.styles.scss";

export class CardDescription extends React.Component {
  state = {
    descriptionInput: "",
    mode: "prompt"
  };

  componentDidMount() {
    this.setState({ descriptionInput: this.props.card.description });
  }

  toggleMode = () => {
    if (this.state.mode === "prompt") {
      this.setState({ mode: "input" });
    } else if (this.state.mode === "input") {
      this.setState({ mode: "prompt" });
    }
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.updateCardDescription(
      this.props.cardId,
      this.state.descriptionInput
    );
    this.setState({ mode: "prompt" });
  };

  handleChange = e => {
    this.setState({ descriptionInput: e.target.value });
  };

  descriptionExists = () =>
    this.state.descriptionInput && this.state.descriptionInput !== "\n";

  renderDescription = () =>
    this.descriptionExists() ? (
      <div className="description__display">{this.props.card.description}</div>
    ) : (
      <button className="description__prompt" onClick={this.toggleMode}>
        Add a description...
      </button>
    );

  renderEditButton = () =>
    this.descriptionExists() && this.state.mode === "prompt" ? (
      <button onClick={this.toggleMode} className="widget-heading__button">
        Edit
      </button>
    ) : null;

  render() {
    const descriptionInputForm = (
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
    );

    return (
      <div className="description">
        <div className="widget-heading">
          <FontAwesomeIcon
            icon={faAlignLeft}
            className="widget-heading__icon"
          />
          <h3 className="widget-heading__text">Description</h3>
          {this.renderEditButton()}
        </div>
        {this.state.mode === "prompt"
          ? this.renderDescription()
          : descriptionInputForm}
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
