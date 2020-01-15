export default (state = [], action) => {
  let currentLists = [...state];
  switch (action.type) {
    case "ADD_LIST":
      return [
        ...state,
        {
          title: action.payload.title,
          listId: action.payload.listId,
          archived: false
        }
      ];
    case "ARCHIVE_LIST":
      currentLists.forEach(list => {
        if (list.listId === action.payload) {
          list.archived = true;
        }
      });
      return currentLists;
    case "RESTORE_LIST":
      currentLists.forEach(list => {
        if (list.listId === action.payload) {
          list.archived = false;
        }
      });
      return currentLists;
    default:
      return state;
  }
};
