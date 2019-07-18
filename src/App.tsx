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
import { ChecklistRoute } from './components/ChecklistRoute/ChecklistRoute';
import { checklistsIndex } from './utils/data/checklists-index';

const links = [
  { to: '/', label: 'Home' },
  { to: '/counter', label: 'Counter' },
  ...checklistsIndex.map(item => ({
    to: `/checklist/${item.slug}`,
    label: item.name,
  })),
];

export const App: React.FC = () => (
  <Router>
    <div className="App">
      <nav className="App__nav">
        {links.map(link => (
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
            <Route path="/checklist/:slug" component={ChecklistRoute} />
          </Switch>
        </main>
      </div>
    </div>
  </Router>
);
