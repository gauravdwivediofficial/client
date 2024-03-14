import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
