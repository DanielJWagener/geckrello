import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  archiveCard,
  moveCard,
  copyCard
} from "../../redux/cards/cards.actions";
import CardUtiltitesPanel from "./card-utilties-panel.component";
import { selectListHomebyCardId } from "../../redux/cards/cards.selectors";

import "./card-utilities.styles.scss";

export class CardUtilities extends React.Component {
  state = { panel: "", listTarget: this.props.listHome };

  openMoveCardPanel = () => {
    this.setState({ panel: "move" });
  };

  openCopyCardPanel = () => {
    this.setState({ panel: "copy" });
  };

  closePanel = () => {
    this.setState({ panel: "" });
  };

  archiveCard = () => {
    this.props.archiveCard(this.props.cardId);
    this.setState({ panel: "" });
    this.props.history.goBack();
  };

  handleChange = e => {
    this.setState({ listTarget: e.target.value });
  };

  onMoveSubmit = e => {
    e.preventDefault();
    this.props.moveCard(this.props.cardId, this.state.listTarget);
    this.setState({ panel: "", value: this.props.listHome });
    this.props.history.goBack();
  };

  onCopySubmit = e => {
    e.preventDefault();

    this.props.copyCard(this.props.cardId, this.state.listTarget);

    this.setState({ panel: "", value: this.props.listHome });
    this.props.history.goBack();
  };

  listOptionsArray = () =>
    this.props.lists
      .filter(list => !list.archived)
      .map(list => (
        <option key={list._id} value={list._id}>
          {list.title}
        </option>
      ));

  render() {
    const renderPanel = panelState => {
      switch (panelState) {
        case "move":
          return (
            <CardUtiltitesPanel
              heading="Move Card"
              closePanel={this.closePanel}
              listTarget={this.state.listTarget}
              handleSubmit={this.onMoveSubmit}
              handleChange={this.handleChange}
              listOptions={this.listOptionsArray}
              submitValue="Move"
            />
          );
        case "copy":
          return (
            <CardUtiltitesPanel
              heading="Copy Card"
              closePanel={this.closePanel}
              listTarget={this.state.listTarget}
              handleSubmit={this.onCopySubmit}
              handleChange={this.handleChange}
              listOptions={this.listOptionsArray}
              submitValue="Copy"
            />
          );
        default:
          return null;
      }
    };

    const renderButtons = () => {
      const buttons = [
        { label: "Move Card", onClick: this.openMoveCardPanel },
        { label: "Copy Card", onClick: this.openCopyCardPanel },
        { label: "Archive Card", onClick: this.archiveCard }
      ];

      return buttons.map(button => (
        <button
          key={button.label}
          className="card-utilities__button"
          onClick={button.onClick}
        >
          {button.label.split(" ")[0]}
          <br />
          {button.label.split(" ")[1]}
        </button>
      ));
    };

    return (
      <div className="card-utilities">
        {renderButtons()}
        {renderPanel(this.state.panel)}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  lists: state.lists,
  listHome: selectListHomebyCardId(ownProps.cardId)(state)
});

export default withRouter(
  connect(mapStateToProps, { archiveCard, moveCard, copyCard })(CardUtilities)
);
