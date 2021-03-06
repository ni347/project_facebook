import React, {useState, useEffect} from "react";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";

import Home from "./components/homeStatic/home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import {auth } from "./firebase";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Signin />
          </Route>

          <Route path="/Signup">
            <Signup />
          </Route>

          {/* <Route path="/Home">
            <Home  user={user}/>
            <div className="app__page">
              <Sidebarleft user={user} />
              <div className="app__posts">
              <Posts user={user} />
              </div>
            </div>
            <SidebarRight user={user} />
          </Route> */}

          <Route path="/Home">
            <Home user={user}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
