import React from 'react';

import './App.css';
import { Counter } from "./components/Counter/Counter";

export const App: React.FC = () => (
  <div className="App">
    <main>
      <Counter/>
    </main>
  </div>
);
