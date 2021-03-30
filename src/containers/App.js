import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  onSearchChange: (event) => dispatch(setSearchField(event.target.value))
}
}


  class App extends Component {

    constructor(){
      super()
      this.state = {
        robots: []
      }
    }
  
    componentDidMount(){
      fetch('http://jsonplaceholder.typicode.com/users')
      .then(response =>{return response.json();})
      .then(users=>{this.setState({ robots: users})})
    }
  
  
    render() {
      const { robots } = this.state;
      const { searchField, onSearchChange } = this.props;
      const filteredRobot = robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase())
      })
      if(!this.state.robots.length){
        return <h1>Loading...</h1>
      } else {
      return (
        <div className='tc'>
        <h1 className="f1">My Friends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
        <CardList robots={filteredRobot} />
        </Scroll>
        </div>
      )
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);