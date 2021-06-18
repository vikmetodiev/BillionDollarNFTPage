import React from "react";
import Sign from "./comps/Sign";
import Login from "./comps/Login";
import Home from "./comps/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Auth";
import User from "./comps/user";
import SideBar from "./comps/SideBar";
import Top from "./comps/Top";
import About from "./comps/About";
function App() {
  return (
    <AuthProvider>
      <SideBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/Sign">
            <Sign />
          </Route>
          <Route exact path="/User">
            <User />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Top">
            <Top />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
