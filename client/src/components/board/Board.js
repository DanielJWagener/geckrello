import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { connect } from "react-redux";

import AddList from "./AddList";
import List from "./list/List";
import MenuBar from "./menu-bar/MenuBar";
import {
  fetchBoard,
  unloadBoard,
  fetchLists,
  fetchBoardData
} from "../../actions";
import colorThemes from "../../utilities/colorThemes";

class Board extends React.Component {
  componentDidMount() {
    // this.props.fetchBoard(this.props.match.params.id);
    // this.props.fetchLists(this.props.match.params.id);

    this.props.fetchBoardData(this.props.match.params.id);
  }

  componentDidUpdate() {
    let root = document.documentElement;

    if (this.props.board) {
      const theme = colorThemes[this.props.board.background];

      root.style.setProperty("--color-primary", theme.base);
      root.style.setProperty("--color-primary-lightest", theme.lightest);
      root.style.setProperty("--color-primary-lighter", theme.lighter);
      root.style.setProperty("--color-primary-light", theme.light);
      root.style.setProperty("--color-primary-dark", theme.dark);
      root.style.setProperty("--color-primary-darker", theme.darker);
      root.style.setProperty("--color-primary-darkest", theme.darkest);
    }
  }

  componentWillUnmount() {
    this.props.unloadBoard();
  }

  // Iterate over every list in state, return the non-archived ones, and make and array of List components out of them
  listsArray = () =>
    this.props.lists
      .filter(list => !list.archived)
      .map(list => (
        <List
          key={list._id}
          listTitle={list.title}
          listId={list._id}
          cards={[]}
          archived={list.archived}
        />
      ));

  render() {
    if (this.props.board) {
      return (
        <div>
          <MenuBar board={this.props.board} />
          <DndProvider backend={HTML5Backend}>
            <div className="board" id="board">
              {this.listsArray()}
              <AddList boardId={this.props.match.params.id} />
            </div>
          </DndProvider>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

const mapStateToProps = ({ board, lists, cards }) => {
  return { board, lists, cards };
};

export default connect(mapStateToProps, {
  fetchBoard,
  unloadBoard,
  fetchLists,
  fetchBoardData
})(Board);
