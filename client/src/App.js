import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Listing from "./component/Listing";
import CSS from "./component/CSS"
import "./App.css";
import Chart from "./component/Chart";
import Gif from "./component/Gif";
import JsPackage from "./component/JsPackage";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Listing}/>
        <Route exact path="/css-approach" component={CSS}/>
        <Route exact path="/js-lib-approach" component={JsPackage}/>
        <Route exact path="/gif-approach" component={Gif}/>
        <Route exact path="/chart-approach" component={Chart}/>
        <Route render={() => <div>No Match</div>}/>
      </Switch>
    </BrowserRouter>
  </div>
)

export default App;
