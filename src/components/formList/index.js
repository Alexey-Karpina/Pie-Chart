import React, { Component } from "react";
import { connect } from "react-redux";

import FormListItem from "../formListItem";
import AddFromButton from "../../containers/addFromButton";

import { formAddedToList } from "../../actions";
const FormList = ({ list, onAdd }) => {
    console.log("List: ", list);
  return (
    <>
      <ul>
        From List
        {list.map((item) => {
            console.log("Item", item);
          return (
            <li key={item.id}>
              <FormListItem list={item} />
            </li>
          );
        })}
      </ul>
      <AddFromButton onAdd={() => onAdd()} />
    </>
  );
};

// function FromListContainer(props) {
//   const { list, onAdd } = props;

//   useEffect((props) => {
//     props.formAddedToList();
//   }, []);
//   return <FormList list={list} onAdd={onAdd} />;
// };

class FromListContainer extends Component {
  componentDidMount() {
    this.props.formAddedToList();
  }

  shouldComponentUpdate(nextProps) {
      return this.props.list.length !== nextProps.list.length;
  }
  render() {
    const { list, onAdd } = this.props;
    return <FormList list={list} onAdd={onAdd} />;
  }
}

const mapStateToProps = (state) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch) => {
  return {
    formAddedToList: () => dispatch(formAddedToList()),
    onAdd: () => dispatch(formAddedToList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FromListContainer);
