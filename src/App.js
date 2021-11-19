import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider";
import About from './Pages/About/About';
import Appointment from "./Pages/Appointment/Appointment";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from "./Pages/Register/Register";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <PrivateRoute exact path='/appointment'>
            <Appointment></Appointment>
          </PrivateRoute>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route exact path='/signup'>
            <Register></Register>
          </Route>
          <PrivateRoute path='/dashboard'>
            <Dashboard></Dashboard>
          </PrivateRoute>
        </Switch>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
