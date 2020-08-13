import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import firebase from "firebase/app";
import "firebase/auth"
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Context } from './Context/Context';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Notfound from './Pages/Notfound';
import Header from './Components/Header';
import firebaseConfig from "./Config/Firebase";


firebase.initializeApp(firebaseConfig)

function App() {

  const[user,setUser]=useState(null);

  return (
    
      <Router>
        <ToastContainer></ToastContainer>
        <Context.Provider value={{user, setUser}}>
        <Header></Header>
          <Switch>
            <Route exact path="/github/" component={Home}></Route>
            <Route exact path="/github/signin" component={Signin}></Route>
            <Route exact path="/github/signup" component={Signup}></Route>
            <Route exact path="*" component={Notfound}></Route>
          </Switch>
        </Context.Provider>
      </Router>
   
  );
}

export default App;