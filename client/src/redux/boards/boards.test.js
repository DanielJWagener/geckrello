import actionTypes from "../types";
import boardsReducer from "./boards.reducer";

describe("boards reducer", () => {
  it("should return initial state", () => {
    expect(boardsReducer(undefined, {})).toEqual(null);
  });

  it("should handle FETCH_BOARD_DATA", () => {
    expect(
      boardsReducer(null, {
        type: actionTypes.FETCH_BOARD_DATA,
        payload: {
          board: { title: "Board 1" },
          cards: ["Card 1", "Card 2"],
          lists: ["List 1", "List 2"]
        }
      })
    ).toEqual({ title: "Board 1" });
  });

  it("should handle PENDING_BOARD_BACKGROUND", () => {
    expect(
      boardsReducer(null, {
        type: actionTypes.PENDING_BOARD_BACKGROUND,
        payload: {
          isPending: true,
          background: "blue"
        }
      })
    ).toEqual({
      isPending: true,
      background: "blue"
    });
  });

  it("should handle UNLOAD_BOARD", () => {
    expect(
      boardsReducer({ title: "Board 1" }, { type: actionTypes.UNLOAD_BOARD })
    ).toEqual(null);
  });

  it("should handle UPDATE_BOARD", () => {
    expect(
      boardsReducer(
        { title: "Board 1" },
        { type: actionTypes.UPDATE_BOARD, payload: { title: "Board One" } }
      )
    ).toEqual({ title: "Board One" });
  });
});
