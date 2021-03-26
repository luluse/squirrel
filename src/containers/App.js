import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {

  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response =>{return response.json();})
    .then(users=>{this.setState({ robots: users})})
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const filteredRobot = this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className='tc'>
      <h1 className="f1">My Friends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
      <CardList robots={filteredRobot} />
      </Scroll>
      </div>
    )
  }
}

export default App;