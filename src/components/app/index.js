import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Header from "../header";
import { FormPage, ChartPage } from "../pages";
import reducer from "../../reducers";
const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={FormPage} exact />
          <Route path="/chart" component={ChartPage} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
