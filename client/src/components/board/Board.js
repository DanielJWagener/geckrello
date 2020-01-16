import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { connect } from "react-redux";

import AddList from "./AddList";
import List from "./list/List";
import MenuBar from "./menu-bar/MenuBar";

class Board extends React.Component {
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
    return (
      <div>
        <MenuBar />
        <DndProvider backend={HTML5Backend}>
          <div className="board" id="board">
            {this.listsArray()}
            <AddList />
          </div>
        </DndProvider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { lists: state.lists };
};

export default connect(mapStateToProps)(Board);
