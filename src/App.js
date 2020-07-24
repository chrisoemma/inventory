import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Login from "./components/auth/Login";
import Dashboard from "./components/Dashbord";
import Expense from "./components/settings/Expense";
import ExpenseCategory from "./components/settings/ExpenseCategory";
import Vendor from "./components/settings/vendors";
import Outlet from "./components/settings/Outlets";

function App() {
  return (
    <Router>
      <React.Fragment>
      <Route exact path="/" component={Dashboard} />
      <Route path="/settings/expenses" component={Expense} />
      <Route path="/settings/expenses_categories" component={ExpenseCategory} />
      <Route path="/settings/vendors" component={Vendor} />
      <Route path="/settings/outlets" component={Outlet} />
      </React.Fragment>
    </Router>
  );
}

export default App;
