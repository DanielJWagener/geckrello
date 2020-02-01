import React from "react";
import { connect } from "react-redux";
import { updateCardDescription } from "../../../../actions";

class Description extends React.Component {
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
    if (this.state.mode === "prompt") {
      if (
        !this.props.card.description ||
        this.props.card.description === "\n"
      ) {
        return (
          <div className="description">
            <h3 className="modal__widget-heading">Description</h3>
            <button className="description__prompt" onClick={this.toggleMode}>
              Add a description...
            </button>
          </div>
        );
      } else {
        return (
          <div className="description">
            <h3 className="modal__widget-heading">Description</h3>
            <button className="modal__button--inline" onClick={this.toggleMode}>
              Edit
            </button>
            <div className="description__display">
              {this.props.card.description}
            </div>
          </div>
        );
      }
    } else if (this.state.mode === "input") {
      return (
        <div className="description description__input">
          <h3 className="modal__widget-heading">Description</h3>
          <form onSubmit={this.onFormSubmit} className="form">
            <div className="form__group">
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                className="description__textarea"
                placeholder="Add a description..."
                onChange={this.handleChange}
                value={this.state.descriptionInput}
              ></textarea>
            </div>
            <div className="form__group">
              <input type="submit" className="form__submit" value="Save" />
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

const mapStateToProps = (state, ownProps) => {
  const { cardId } = ownProps;
  const card = state.cards.filter(card => card._id === cardId)[0];
  return { card };
};

export default connect(mapStateToProps, { updateCardDescription })(Description);
