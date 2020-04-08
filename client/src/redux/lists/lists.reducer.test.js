import actionTypes from "../types";
import listsReducer from "./lists.reducer";

describe("lists reducer", () => {
  it("should return initial state", () => {
    expect(listsReducer(undefined, {})).toEqual([]);
  });

  it("should handle FETCH_BOARD_DATA", () => {
    expect(
      listsReducer([], {
        type: actionTypes.FETCH_BOARD_DATA,
        payload: {
          board: { title: "Board 1" },
          cards: ["Card 1", "Card 2"],
          lists: ["List 1", "List 2"]
        }
      })
    ).toEqual(["List 1", "List 2"]);
  });

  it("should handle UNLOAD_BOARD", () => {
    expect(
      listsReducer(["List 1", "List 2"], { type: actionTypes.UNLOAD_BOARD })
    ).toEqual([]);
  });

  it("should handle ADD_LIST", () => {
    expect(
      listsReducer(["List 1", "List 2"], {
        type: actionTypes.ADD_LIST,
        payload: "List 3"
      })
    ).toEqual(["List 1", "List 2", "List 3"]);
  });

  it("should handle ARCHIVE_LIST", () => {
    expect(
      listsReducer(
        [
          { _id: "1", title: "List 1", archived: false },
          { _id: "2", title: "List 2", archived: false }
        ],
        {
          type: actionTypes.ARCHIVE_LIST,
          payload: "1"
        }
      )
    ).toEqual([
      { _id: "1", title: "List 1", archived: true },
      { _id: "2", title: "List 2", archived: false }
    ]);
  });

  it("should handle RESTORE_LIST", () => {
    expect(
      listsReducer(
        [
          { _id: "1", title: "List 1", archived: true },
          { _id: "2", title: "List 2", archived: false }
        ],
        {
          type: actionTypes.RESTORE_LIST,
          payload: "1"
        }
      )
    ).toEqual([
      { _id: "1", title: "List 1", archived: false },
      { _id: "2", title: "List 2", archived: false }
    ]);
  });
});
