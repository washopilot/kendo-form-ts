import React, { Component } from 'react';
import '@progress/kendo-theme-default/dist/all.css';
import './App.css';
import { Calendar } from '@progress/kendo-react-dateinputs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello KendoReact!</h1>
        <Calendar />
      </div>
    );
  }
}

export default App;
