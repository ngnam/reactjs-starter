import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Product from './Views/Product/Product';
import ExampleCounter from './Views/Home/Components/ExampleCounter';

function App() {
  return (
    <div className="relative min-h-screen pb-10">
      <Router>
        <Header></Header>
        <div className="mx-auto p-3">
          <Switch>
            <Route exact path="/" component={() => <Home />}></Route>
            <Route exact path="/about" component={() => <About />}></Route>
            <Route
              exact
              path="/product/:id"
              component={() => <Product />}
            ></Route>
            <Route exact path="/example" component={() => <ExampleCounter />}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
