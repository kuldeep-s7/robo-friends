import React  from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { robots } from './robots';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots : robots , 
            searchField : ''
        }
    }

    onSearchChange = (event) =>{
        this.setState({searchField : event.target.value}) 
    }
    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
         return (  
            <div className= 'tc'>
                <h1 className = 'f1'> Robo-Friends</h1>
                <Searchbox searchChange = {this.onSearchChange}/>
                <CardList robots = {filterRobots}/>
           </div>
           )

    }
};

export default App ;