import React, { useState } from "react";
import { connect } from "react-redux";
import {formChangedValues} from '../../actions';

const FormListItem = ({ list, dispatch }) => {
  const { id } = list;
  const [state, setState] = useState({ name: "", number: null, id: id });

  const handleChange = (e) => {
      if (e.target.name === "number") {
        setState({ ...state, [e.target.name]: +e.target.value });
        dispatch(formChangedValues(state.name, state.number, state.id));
        return;
      }
    setState({ ...state, [e.target.name]: e.target.value });
    console.log("State: ",state);
    dispatch(formChangedValues(state.name, state.number, state.id));
  };

  return (
    <form>
      <label>Name</label>
      <input
        name="name"
        type="text"
        placeholder="Enter name"
        onChange={(e) => handleChange(e)}
      />

      <label>Number</label>
      <input
        name="number"
        type="text"
        placeholder="Enter number"
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
};
export default connect()(FormListItem);
