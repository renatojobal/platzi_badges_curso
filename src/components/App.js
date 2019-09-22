import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";

import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/bages" component={Badges} />
        <Route path="/bages/new" component={BadgeNew} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
