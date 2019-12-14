import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchInput: ''
        }
    }

    // Component Life Cycle Methods (no arrow functions)
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    // Use arrow functions for created functions
    // Allows for the this to refer to "parent" this
    onSearchChange = (event) => {
        this.setState({ searchInput: event.target.value })
    }

    render() {
        const { robots, searchInput } = this.state;
        const filterRobots = robots.filter(robot => {
            return (
                robot.name.toLowerCase().includes(searchInput.toLowerCase())
            )
        })

        return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filterRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );
    }
}

export default App;