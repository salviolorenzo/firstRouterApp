import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// Router watches the URL for changes
// Route renders components based on the specific URL
// Link changes the URL

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <nav>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
          </nav>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/users' component={Users} />
        </div>
      </Router>
    );
  }
}

export default App;
