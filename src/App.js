import React from 'react';
import { HashRouter  as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Posts from './components/Posts';


const App = () => {
  return (
    <Router>
      <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Posts/:id" exact component={Posts} />
          </Switch>
      </div>
    </Router>
  )
};

export default App;