import {
  FETCH_BOARD_DATA,
  UNLOAD_BOARD,
  ADD_LIST,
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
    expect(
      listsReducer(["List 1", "List 2"], {
        type: ADD_LIST,
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
          type: ARCHIVE_LIST,
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
          type: RESTORE_LIST,
          payload: "1"
        }
      )
    ).toEqual([
      { _id: "1", title: "List 1", archived: false },
      { _id: "2", title: "List 2", archived: false }
    ]);
  });
});
