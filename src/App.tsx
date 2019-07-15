import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import './App.css';
import { IndexPage } from "./components/IndexPage/IndexPage";
import { Counter } from "./components/Counter/Counter";

const links = [
  { to: '/', label: 'Home' },
  { to: '/counter', label: 'Counter' },
];

export const App: React.FC = () => (
  <Router>
    <div className="App">
      <nav className="App__nav">
        <ul>
          {links.map(link => (
            <li key={link.label}>
              <NavLink to={link.to} className={"link"} activeClassName={"link--active"}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="App__container">
      <main className="App__content">
        <Switch>
          <Route path="/" exact component={IndexPage}/>
          <Route path="/counter/" component={Counter}/>
        </Switch>
      </main>
      </div>
    </div>
  </Router>
);
