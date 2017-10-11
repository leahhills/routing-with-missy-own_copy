import React, { Component } from 'react';
import './App.css';
import router from './router'
import { Link } from 'react-router-dom';


class App extends Component { //not using state dont need constructor or super
  //initilaizing /create class object
    //call constructor method inside of component class
   

  

  render() {
    
    return (
      <div className="App">
       
         <div>
           <Link to='/'> Home </Link>
           <Link to='/about'> About </Link>
           <Link to='/products'> Products </Link>
         {router}

         </div>
       
      </div>
    );
  }
}

export default App;
