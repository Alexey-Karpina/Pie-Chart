import { v4 as uuidv4 } from "uuid";

export const formAddedToList = () => {
  return {
    type: "FORM_ADDED_TO_LIST",
    payload: {
      name: "",
      number: null,
      id: uuidv4(),
    },
  };
};

export const formChangedValues = (name, number, id) => {
  return {
    type: "FORM_CHANGED_VALUES",
    payload: {
      name,
      number,
      id,
    },
  };
};
