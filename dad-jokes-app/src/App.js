import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Joke from './components/Joke';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="container mx-auto">
          <Route path="/" exact component={Joke} />
          <Route path="/about" exact component={About} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
