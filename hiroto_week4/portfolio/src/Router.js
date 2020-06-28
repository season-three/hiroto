import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "./Top";
import { Opera } from "./Opera";
import { Music } from "./Music";
// import { Totebag } from "./Totebag";

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">about</Route>
        <Route path="/users">users</Route>
        <Route path="/profile">
          <div>profile</div>
        </Route>
        <Route path="/opera">
          <div>opera</div>
        </Route>
        <Route path="/music">
          <Music />
        </Route>
        <Route path="/totebag">
          <div>totebag</div>
        </Route>
        <Route path="/diet">
          <div>diet</div>
        </Route>
        <Route path="/Typography">
          <div>diet</div>
        </Route>
        <Route path="/https://note.com/hirohirotootoo/m/mf3954f6cb87b">
          <div></div>
        </Route>
        <Route path="/">
          <Top />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
