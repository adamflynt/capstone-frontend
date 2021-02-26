import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeNavbar from "./components/HomeNavbar";
import Navbar from "./components/Navbar";
import Accounts from './components/pages/accounts/Accounts';
import CloseAccounts from "./components/pages/close/CloseAccounts";
import Forbidden from "./components/pages/Forbidden";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import OpenAccounts from "./components/pages/openAccount/OpenAccounts";
import Settings from './components/pages/Settings';
import SignUp from "./components/pages/SignUp";
import CDAccount from "./components/pages/transactions/cdaccount/CDAccount";
import Checking from "./components/pages/transactions/checking/Checking";
import DBAChecking from "./components/pages/transactions/dbachecking/DBAChecking";
import Deposit from "./components/pages/transactions/deposit/Deposit";
import IRA from "./components/pages/transactions/ira/IRA";
import RolloverIRA from "./components/pages/transactions/rolloverira/RolloverIRA";
import RothIRA from "./components/pages/transactions/rothira/RothIRA";
import Savings from "./components/pages/transactions/savings/Savings";
import Transfer from "./components/pages/transactions/transfer/Transfer";


const HomeContainer = () => (
  <div className='App'>
    <HomeNavbar />
    <Route path='/' exact component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/sign-up' component={SignUp} />
    <Route path='/forbidden' component={Forbidden} />
  </div>
);

const DefaultContainer = () => (
  <div className="App">
    <Navbar />
    <Route path='/accounts' exact component={Accounts} />
    <Route path='/openaccounts' exact component={OpenAccounts} />
    <Route path='/settings' component={Settings} />
    <Route path='/accounts/checking' component={Checking} />
    <Route path='/accounts/savings' component={Savings} />
    <Route path='/accounts/cdaccount' component={CDAccount} />
    <Route path='/accounts/dbachecking' component={DBAChecking} />
    <Route path='/accounts/ira' component={IRA} />
    <Route path='/accounts/rolloverira' component={RolloverIRA} />
    <Route path='/accounts/rothira' component={RothIRA} />
    <Route path='/deposits' component={Deposit} />
    <Route path='/transfers' component={Transfer} />
    <Route path='/closeaccounts' component={CloseAccounts} />
  </div>
);

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path={['/', '/login', '/sign-up', '/forbidden']} exact component=
            {HomeContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
