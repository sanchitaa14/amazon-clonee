import React, {useEffect, dispatch} from "react";
import './App.css';
import Header from './HEAder';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route}
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from './firebase'
import Paisa from './Paisa';
function App() {
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
  
    <Router>
      <div className="app">
        <Routes>
          
          <Route path = "/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path = "/login" element={<Login />} />
          <Route path="/paisa" element={[<Header />, <Paisa />]}/>
          
        </Routes>
      </div>
    </Router>
    
  
  );
}

export default App;
