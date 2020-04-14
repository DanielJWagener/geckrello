import {
  FETCH_BOARD_DATA,
  UNLOAD_BOARD,
  ADD_LIST,
  ADD_LIST_SUCCESS,
  ARCHIVE_LIST,
  RESTORE_LIST
} from "../types";
import listsReducer from "./lists.reducer";

describe("lists reducer", () => {
  it("should return initial state", () => {
    expect(listsReducer(undefined, {})).toEqual({});
  });

  it("should handle FETCH_BOARD_DATA", () => {
    expect(
      listsReducer([], {
        type: FETCH_BOARD_DATA,
        payload: {
          board: { title: "Board 1" },
          cards: ["Card 1", "Card 2"],
          lists: ["List 1", "List 2"]
        }
      })
    ).toEqual(["List 1", "List 2"]);
  });

  it("should handle UNLOAD_BOARD", () => {
    expect(listsReducer(["List 1", "List 2"], { type: UNLOAD_BOARD })).toEqual(
      {}
    );
  });

  it("should handle ADD_LIST", () => {
    const action = {
      type: ADD_LIST,
      payload: {
        _id: "",
        tempId: "zzz2",
        title: "List 2",
        boardHome: "Board 1",
        archived: false
      }
    };

    const newState = listsReducer(
      {
        1: {
          _id: "1",
          title: "List 1",
          boardHome: "Board 1",
          archived: false
        }
      },
      action
    );

    expect(newState).toEqual({
      1: {
        _id: "1",
        title: "List 1",
        boardHome: "Board 1",
        archived: false
      },
      zzz2: {
        _id: "",
        tempId: "zzz2",
        title: "List 2",
        boardHome: "Board 1",
        archived: false
      }
    });
  });

  it("should handle ADD_LIST_SUCCESS", () => {
    const action = {
      type: ADD_LIST_SUCCESS,
      payload: {
        newId: "2",
        tempId: "zzz2"
      }
    };

    const newState = listsReducer(
      {
        1: {
          _id: "1",
          title: "List 1",
          boardHome: "Board 1",
          archived: false
        },
        zzz2: {
          _id: "",
          tempId: "zzz2",
          title: "List 2",
          boardHome: "Board 1",
          archived: false
        }
      },
      action
    );

    expect(newState).toEqual({
      1: {
        _id: "1",
        title: "List 1",
        boardHome: "Board 1",
        archived: false
      },
      2: {
        _id: "2",
        tempId: "zzz2",
        title: "List 2",
        boardHome: "Board 1",
        archived: false
      }
    });
  });

  it("should handle ARCHIVE_LIST", () => {
    const action = {
      type: ARCHIVE_LIST,
      payload: "1"
    };

    const newState = listsReducer(
      {
        1: { _id: "1", title: "List 1", archived: false },
        2: { _id: "2", title: "List 2", archived: false }
      },
      action
    );

    expect(newState).toEqual({
      1: { _id: "1", title: "List 1", archived: true },
      2: { _id: "2", title: "List 2", archived: false }
    });
  });

  it("should handle RESTORE_LIST", () => {
    const action = {
      type: RESTORE_LIST,
      payload: "1"
    };

    const newState = listsReducer(
      {
        1: { _id: "1", title: "List 1", archived: true },
        2: { _id: "2", title: "List 2", archived: false }
      },
      action
    );

    expect(newState).toEqual({
      1: { _id: "1", title: "List 1", archived: false },
      2: { _id: "2", title: "List 2", archived: false }
    });
  });
});
