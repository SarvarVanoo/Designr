import './App.css';
import Login from "./components/Login";
import React, { Component } from 'react'
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import {Route, Switch} from "react-router-dom"; 

//Modal.setAppElement('#root')


class App extends Component {

  
 
render()
{
  return (
    
    <div className="App" >
    <Switch>
      <Route exact path="/" component={Welcome}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      </Switch>
    </div> 
  ); 
}
} 

export default App;
