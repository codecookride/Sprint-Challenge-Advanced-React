import React from 'react';
import './App.css';
import Navbar from "./Navbar"

class App extends React.Component {
  state ={
  info:[]
  };
 


  componentDidMount() {
  
    fetch(`http://localhost:5000/api/players`)
    .then(res => res.json())
      .then (info =>{
        console.log(info);
       this.setState({info:info});
       })
  };
  
  render() {
    console.log(this.state)
    return (
     
      <div>
         <Navbar/>
        {this.state.info.map (item => {
         return(
        <div key={item.id}>
          <h1>{item.name}</h1>
          <h2>{item.country}</h2>
          <h4>{item.searches}</h4>
          </div>
         )
  })}
 
      </div>
    );
  }
}

export default App;