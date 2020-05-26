import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";

import {Store} from "../../../config/redux";

import Dashboard from "../dashboard";
import Login from "../login";
import Register from "../register";

import './App.css';

function Index() {
  return (
      <Provider store={Store}>
          <Router>
              <div>
                  {/*<nav>*/}
                  {/*  <ul>*/}
                  {/*    <li>*/}
                  {/*      <Link to="/">Home</Link>*/}
                  {/*    </li>*/}
                  {/*    <li>*/}
                  {/*      <Link to="/login">Login</Link>*/}
                  {/*    </li>*/}
                  {/*    <li>*/}
                  {/*      <Link to="/register">Register</Link>*/}
                  {/*    </li>*/}
                  {/*  </ul>*/}
                  {/*</nav>*/}

                  <Route path="/" exact component={Dashboard} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register}/>
              </div>
          </Router>
      </Provider>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/Index.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default Index;
