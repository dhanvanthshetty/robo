import React,{Component} from "react";
import Cardlist from "../components/Cardlist";
import Scroll from "../components/Scroll";
import Searchbox from "../components/Searchbox";
import './App.css';
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component{
    constructor(){
       super()
        this.state={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( responce=>responce.json())
       .then(users=>  this.setState({robots: [...users]}))
        //users === is also [...users]
       
    }


    onsearchchange = (event) => {
        this.setState({ searchfield: event.target.value })
       
        // this.setState({ searchfield: event.target.value })
        
    }
    render(){
        const filteredrobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
if (!this.state.robots.length){
    // in condition we can also include this.state.robots.length===0
    return <h1>Loading....</h1>
}
else{
        return (
        <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <Searchbox searchChange={this.onsearchchange}  />
        <Scroll>
           <ErrorBoundry>
        <Cardlist robots={filteredrobots} />
        </ErrorBoundry>
        </Scroll>
        </div>
    );
   
}
}}
export default App