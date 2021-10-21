import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
// import Github from "../api/Github";
import Home from "./Home";
import GithubPersonalInfo from "./GithubPersonalInfo";

import history from "../history";

const App = () => {
  // const [userName, setUserName] = useState("");

  // const onUserNameSubmit = async (userName) => {
  //   setUserName(userName);
  //   await fetchUserData(userName);
  // };

  // const fetchUserData = async (userName) => {
  //   const response = await Github.get(`/${userName}`);
  //   console.log(response.data);
  // };

  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={Home} />
        {/* <Home userName={userName} onUserNameSubmit={onUserNameSubmit} /> */}
        <Route
          path="/githubpersonalinfo/:userName"
          exact
          component={GithubPersonalInfo}
        />
      </Router>
    </div>
  );
};

export default App;
