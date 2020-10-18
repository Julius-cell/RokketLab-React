import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/Navbar';
import Posts from './components/Posts';
// import PostDetails from './PostDetails';



const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
        <Route path="/" exact component={Home}/>
        {/* <Route path="/Posts" exact component={Posts}/> */}
        <Route path="/Posts/:id" exact component={Posts}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;