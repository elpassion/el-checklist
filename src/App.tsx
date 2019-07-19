import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';

import './App.css';
import { IndexPage } from './components/IndexPage/IndexPage';
import { Counter } from './components/Counter/Counter';
import { ChecklistsIndexRoute } from './components/ChecklistsIndexRoute/ChecklistsIndexRoute';
import { ChecklistRoute } from './components/ChecklistRoute/ChecklistRoute';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/counter', label: 'Counter' },
  { to: '/checklists', label: 'Checklists' },
];

export const App: React.FC = () => (
  <Router>
    <div className="App">
      <nav className="App__nav">
        {navLinks.map(link => (
          <NavLink
            key={link.label}
            to={link.to}
            className="link"
            activeClassName="link--active"
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="App__container">
        <main className="App__content">
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/counter/" component={Counter} />
            <Route path="/checklists" component={ChecklistsIndexRoute} />
            <Route path="/checklist/:id" component={ChecklistRoute} />
          </Switch>
        </main>
      </div>
    </div>
  </Router>
);
