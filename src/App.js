import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component{
  state = {
    todos: [
      {
        id:1,
        title:'Take the trash',
        completed:false
      },
      {
       id:2,
       title:'Complete studying',
       completed:false
     },
     {
       id:3,
       title:'Learn Something new',
       completed:true
     }
    ]
  };
  
render() {

 
  console.log(this.state.todos);
  return (
    <div className="App">
     <Todos />
    </div>
  );
}
}
export default App;
