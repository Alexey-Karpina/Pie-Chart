const initialState = {
  list: [],
  currentForm: "",
};

const addToList = (state, newItem) => {
  const { list } = state;
  return [
    ...list,
    {
      name: newItem.name,
      number: newItem.number,
      id: newItem.id,
    },
  ];
};

const changeList = (state, newItem) => {
  const { list } = state;
  return list.map((item) => {
    if (item.id === newItem.id) {
      item.name = newItem.name;
      item.number = newItem.number;
    }
    return item;
  });
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FORM_ADDED_TO_LIST":
        const newItem = payload;
        console.log("Add From: ",state);
      return {
        ...state,
        list: addToList(state, newItem),
      };

    case "FORM_CHANGED_VALUES":
        const changedItem = payload;
        console.log("Change From: ",state);
      return {
        ...state,
        list: changeList(state, changedItem),
      };

    default:
      return state;
  }
};

export default reducer;
