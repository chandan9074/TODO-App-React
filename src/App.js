import './App.css';
import React, { Component } from 'react';
import InputTodo from './components/input-todo.js';


class App extends Component {
  state = { 
    first_keys: Object.keys(localStorage)
   }

  render() { 
    return ( 
      <div className="App1">
        <h4 className="heading">ToDo</h4>
        <div>
          <InputTodo first_keys={this.state.first_keys} />
        </div>
      </div>
     );
  }
}
 
export default App;