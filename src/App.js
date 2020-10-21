import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import HeaderLogin from './components/HeaderLogin/HeaderLogin';
import Login from './components/Login/Login';
import GmailFBLogin from './components/Login/GmailFBLogin';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Destination from './components/Destination/Destination';

export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  const [city,setCity] = useState();

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <HeaderLogin></HeaderLogin>
            <Login></Login>
            <GmailFBLogin></GmailFBLogin>
          </Route>
          <Route path="/register">
            <HeaderLogin></HeaderLogin>
            <Register></Register>
            <GmailFBLogin></GmailFBLogin>
          </Route>
          <PrivateRoute path="/destination">
            <Destination city={city}></Destination>
          </PrivateRoute>
          <Route exact path="/">
            <Header></Header>
            <Home setCity={setCity}></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
