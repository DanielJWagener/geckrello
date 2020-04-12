import {
  FETCH_BOARD_DATA,
  UNLOAD_BOARD,
  ADD_CARD,
  ADD_CARD_SUCCESS,
  ARCHIVE_CARD,
  UPDATE_CHECKLIST,
  MOVE_CARD,
  UPDATE_CARD_DESCRIPTION,
  RESTORE_CARD,
  COPY_CARD
} from "../types";

import cardsReducer from "./cards.reducer";

describe("cards reducer", () => {
  const initialState = {};
  it("should return initial state", () => {
    expect(cardsReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle FETCH_BOARD_DATA", () => {
    expect(
      cardsReducer(initialState, {
        type: FETCH_BOARD_DATA,
        payload: {
          board: { title: "Board 1" },
          cards: ["Card 1", "Card 2"],
          lists: ["List 1", "List 2"]
        }
      })
    ).toEqual(["Card 1", "Card 2"]);
  });

  it("should handle UNLOAD_BOARD", () => {
    expect(cardsReducer(["so many cards"], { type: UNLOAD_BOARD })).toEqual(
      initialState
    );
  });

  it("should handle ADD_CARD", () => {
    const action = {
      type: ADD_CARD,
      payload: { tempId: "2", title: "Card 2" }
    };

    const newState = cardsReducer(
      {
        1: {
          tempId: "1",
          title: "Card 1"
        }
      },
      action
    );

    expect(newState).toEqual({
      1: {
        tempId: "1",
        title: "Card 1"
      },
      2: {
        tempId: "2",
        title: "Card 2"
      }
    });
  });

  it("should handle ADD_CARD_SUCCESS", () => {
    const action = {
      type: ADD_CARD_SUCCESS,
      payload: {
        newId: "12345",
        tempId: "1"
      }
    };

    const newState = cardsReducer(
      {
        1: {
          tempId: "1",
          title: "Card 1"
        }
      },
      action
    );

    expect(newState).toEqual({
      12345: {
        tempId: "1",
        _id: "12345",
        title: "Card 1"
      }
    });
  });

  it("should handle MOVE_CARD", () => {
    const action = {
      type: MOVE_CARD,
      payload: {
        cardId: "1",
        newListHome: "List 2"
      }
    };

    const newState = cardsReducer(
      {
        1: { _id: "1", title: "Card 1", listHome: "List 1" },
        2: { _id: "2", title: "Card 2", listHome: "List 1" }
      },
      action
    );

    expect(newState).toEqual({
      1: { _id: "1", title: "Card 1", listHome: "List 2" },
      2: { _id: "2", title: "Card 2", listHome: "List 1" }
    });
  });

  it("should handle COPY_CARD", () => {
    const action = {
      type: COPY_CARD,
      payload: {
        sourceCardId: "1",
        tempId: "zzz",
        newListHome: "20",
        checklistTempIds: ["yy1", "yy2"]
      }
    };

    const newState = cardsReducer(
      {
        1: {
          _id: "1",
          title: "Card 1",
          listHome: "10",
          checklist: {
            1: { _id: "1", label: "Item 1" },
            2: { _id: "2", label: "Item 2" }
          }
        }
      },
      action
    );

    expect(newState).toEqual({
      1: {
        _id: "1",
        title: "Card 1",
        listHome: "10",
        checklist: {
          1: { _id: "1", label: "Item 1" },
          2: { _id: "2", label: "Item 2" }
        }
      },
      zzz: {
        _id: "",
        tempId: "zzz",
        title: "Card 1",
        listHome: "20",
        checklist: {
          yy1: { _id: "", tempId: "yy1", label: "Item 1" },
          yy2: { _id: "", tempId: "yy2", label: "Item 2" }
        }
      }
    });
  });

  it("should handle ARCHIVE_CARD", () => {
    const action = {
      type: ARCHIVE_CARD,
      payload: "1"
    };

    const newState = cardsReducer(
      {
        1: { _id: "1", title: "Card 1", archived: false },
        2: { _id: "2", title: "Card 2", archived: false }
      },
      action
    );

    expect(newState).toEqual({
      1: { _id: "1", title: "Card 1", archived: true },
      2: { _id: "2", title: "Card 2", archived: false }
    });
  });

  it("should handle RESTORE_CARD", () => {
    const action = {
      type: RESTORE_CARD,
      payload: "1"
    };

    const newState = cardsReducer(
      {
        1: { _id: "1", title: "Card 1", archived: true },
        2: { _id: "2", title: "Card 2", archived: true }
      },
      action
    );

    expect(newState).toEqual({
      1: { _id: "1", title: "Card 1", archived: false },
      2: { _id: "2", title: "Card 2", archived: true }
    });
  });

  it("should handle UPDATE_CARD_DESCRIPTION", () => {
    const action = {
      type: UPDATE_CARD_DESCRIPTION,
      payload: {
        cardId: "1",
        descriptionInput: "new description"
      }
    };

    const newState = cardsReducer(
      {
        1: { _id: "1", title: "Card 1", description: "" },
        2: { _id: "2", title: "Card 2", description: "" }
      },
      action
    );

    expect(newState).toEqual({
      1: { _id: "1", title: "Card 1", description: "new description" },
      2: { _id: "2", title: "Card 2", description: "" }
    });
  });

  it("should handle UPDATE_CHECKLIST", () => {
    expect(
      cardsReducer(
        [
          { _id: "1", title: "Card 1", checklist: [] },
          { _id: "2", title: "Card 2", checklist: [] }
        ],
        {
          type: UPDATE_CHECKLIST,
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
