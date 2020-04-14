import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { connect } from "react-redux";

import AddList from "../../components/AddList/add-list.component";
import List from "../../components/List/list.component";
import BoardHeader from "../../components/BoardHeader/board-header.component";
import { unloadBoard, fetchBoardData } from "../../redux/boards/boards.actions";
import colorThemes from "../../utilities/colorThemes";
import updateBackgroundColor from "../../utilities/updateBackgroundColor";
import Spinner from "../../components/Spinner/spinner.component";
import { selectUnarchivedLists } from "../../redux/lists/lists.selectors";

import "./board.styles.scss";

export class Board extends React.Component {
  componentDidMount() {
    this.props.board &&
      updateBackgroundColor(colorThemes[this.props.board.background]);

    this.props.fetchBoardData(this.props.match.params.id);
  }

  componentDidUpdate() {
    if (this.props.board) {
      const theme = colorThemes[this.props.board.background];

      updateBackgroundColor(theme);
    }
  }

  componentWillUnmount() {
    this.props.unloadBoard();
  }

  // Iterate over every list in state, return the non-archived ones, and make an array of List components out of them
  listsArray = () =>
    this.props.lists.map(list => (
      <List
        key={list._id}
        listTitle={list.title}
        listId={list._id}
        cards={[]}
        archived={list.archived}
      />
    ));

  render() {
    if (this.props.board && !this.props.board.isPending) {
      return (
        <>
          <DndProvider backend={HTML5Backend}>
            <div className="board" id="board">
              <BoardHeader board={this.props.board} />
              <div className="board__lists-container">
                {this.listsArray()}
                <AddList boardId={this.props.match.params.id} />
              </div>
            </div>
          </DndProvider>
        </>
      );
    } else {
      return <Spinner />;
    }
  }
}

const mapStateToProps = state => {
  return {
    board: state.board,
    lists: selectUnarchivedLists(state)
  };
};

export default connect(mapStateToProps, {
  unloadBoard,
  fetchBoardData
})(Board);
