import actionTypes from "../types";

import cardsReducer from "./cards.reducer";

describe("cards reducer", () => {
  const initialState = [];
  it("should return initial state", () => {
    expect(cardsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_BOARD_DATA", () => {
    expect(
      cardsReducer(initialState, {
        type: actionTypes.FETCH_BOARD_DATA,
        payload: {
          board: { title: "Board 1" },
          cards: ["Card 1", "Card 2"],
          lists: ["List 1", "List 2"]
        }
      })
    ).toEqual(["Card 1", "Card 2"]);
  });

  it("should handle UNLOAD_BOARD", () => {
    expect(
      cardsReducer(["so many cards"], { type: actionTypes.UNLOAD_BOARD })
    ).toEqual(initialState);
  });

  it("should handle ADD_CARD", () => {
    expect(
      cardsReducer(["Card 1"], {
        type: actionTypes.ADD_CARD,
        payload: "Card 2"
      })
    ).toEqual(["Card 1", "Card 2"]);
  });

  it("should handle MOVE_CARD", () => {
    expect(
      cardsReducer(
        [
          { _id: "1", title: "Card 1", listHome: "List 1" },
          { _id: "2", title: "Card 2", listHome: "List 1" }
        ],
        {
          type: actionTypes.MOVE_CARD,
          payload: {
            cardId: "1",
            newListHome: "List 2"
          }
        }
      )
    ).toEqual([
      { _id: "1", title: "Card 1", listHome: "List 2" },
      { _id: "2", title: "Card 2", listHome: "List 1" }
    ]);
  });

  it("should handle ARCHIVE_CARD", () => {
    expect(
      cardsReducer(
        [
          { _id: "1", title: "Card 1", archived: false },
          { _id: "2", title: "Card 2", archived: false }
        ],
        {
          type: actionTypes.ARCHIVE_CARD,
          payload: "1"
        }
      )
    ).toEqual([
      { _id: "1", title: "Card 1", archived: true },
      { _id: "2", title: "Card 2", archived: false }
    ]);
  });

  it("should handle RESTORE_CARD", () => {
    expect(
      cardsReducer(
        [
          { _id: "1", title: "Card 1", archived: true },
          { _id: "2", title: "Card 2", archived: false }
        ],
        {
          type: actionTypes.RESTORE_CARD,
          payload: "1"
        }
      )
    ).toEqual([
      { _id: "1", title: "Card 1", archived: false },
      { _id: "2", title: "Card 2", archived: false }
    ]);
  });

  it("should handle UPDATE_CARD_DESCRIPTION", () => {
    expect(
      cardsReducer(
        [
          { _id: "1", title: "Card 1", description: "" },
          { _id: "2", title: "Card 2", description: "" }
        ],
        {
          type: actionTypes.UPDATE_CARD_DESCRIPTION,
          payload: {
            cardId: "1",
            descriptionInput: "new description"
          }
        }
      )
    ).toEqual([
      { _id: "1", title: "Card 1", description: "new description" },
      { _id: "2", title: "Card 2", description: "" }
    ]);
  });

  it("should handle UPDATE_CHECKLIST", () => {
    expect(
      cardsReducer(
        [
          { _id: "1", title: "Card 1", checklist: [] },
          { _id: "2", title: "Card 2", checklist: [] }
        ],
        {
          type: actionTypes.UPDATE_CHECKLIST,
          payload: {
            cardId: "1",
            checklist: ["new checklist"]
          }
        }
      )
    ).toEqual([
      { _id: "1", title: "Card 1", checklist: ["new checklist"] },
      { _id: "2", title: "Card 2", checklist: [] }
    ]);
  });
});
