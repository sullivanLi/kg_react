import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Careers from "./pages/Careers";
import Career from "./pages/Career";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Landing} />
      <Route path="careers" component={Careers} />
      <Route path="/careers/:id" component={Career} />
    </Route>
  </Router>,
app);
