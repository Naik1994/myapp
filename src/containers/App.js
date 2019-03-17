import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchRobots from '../components/SearchRobots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfilter : ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfilter: event.target.value });
  }

  render () {
    const { robots, searchfilter } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfilter.toLowerCase());
    });

      return !robots.length ?
      <h1 className = 'tc'>Loading...</h1>
    :
      (
        <div className = "tc">
          <h1 className = "f1">ROBOFRIENDS</h1>
          < SearchRobots SearchChange = {this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              < CardList robots = { filteredRobots } />
            </ErrorBoundary>  
          </Scroll>
        </div>
      );
    }
}

export default App;
