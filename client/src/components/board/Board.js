import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { connect } from "react-redux";

import AddList from "./AddList";
import List from "./list/List";
import MenuBar from "./menu-bar/MenuBar";
import { fetchBoard, unloadBoard } from "../../actions";

class Board extends React.Component {
  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.id);
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
          key={list.listId}
          listTitle={list.title}
          listId={list.listId}
          cards={[]}
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
              <AddList />
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

export default connect(mapStateToProps, { fetchBoard, unloadBoard })(Board);
