import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashbord";
import Expense from "./components/settings/Expense";

function App() {
  return (
    <Router>
      <React.Fragment>
      <Route exact path="/" component={Dashboard} />
      <Route path="/settings/expenses" component={Expense} />
      </React.Fragment>
    </Router>
  );
}

export default App;
