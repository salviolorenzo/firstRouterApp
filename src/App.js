import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import OneUser from './OneUser';
import Friends from './Friends';
// Router watches the URL for changes
// Route renders components based on the specific URL
// Link changes the URL

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: {
        Jeff: ['jeff@mail.com'],
        Lorenzo: ['lorenzo@mail.com'],
        Joan: ['joan@aol.com'],
        Esmerelda: ['esme@relda.com']
      },
      userFriends: {
        Jeff: ['John', 'Joan', 'Jesus'],
        Lorenzo: ['Jeff', 'Esmerelda', 'Jan'],
        Joan: ['Raymond', 'Jeff'],
        Esmerelda: ['Lorenzo', 'Raymond']
      }
    };
  }
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route
            path='/users'
            render={props => {
              return (
                <Users userList={Object.keys(this.state.userList)} {...props} />
              );
            }}
          />
          <Route
            path='/users/:name'
            render={props => {
              return <OneUser array={this.state.userList} {...props} />;
            }}
          />
          <Route
            path='/users/:name/friends'
            render={props => {
              return (
                <Friends userFriends={this.state.userFriends} {...props} />
              );
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
