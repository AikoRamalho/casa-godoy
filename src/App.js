import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './Appbar'
import * as V from 'victory';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

class App extends Component {
  
  render() {
    const data = [
      {x: 1, y: 13000},
      {x: 2, y: 16500},
      {x: 3, y: 14250},
      {x: 4, y: 19000}
    ];
    return (
      <div class="wrapper">
        <header class="header">
          <SimpleAppBar/>
        </header>
        <article class="main">
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
          <VictoryChart
            theme={VictoryTheme.material}
          >
            <VictoryLine data={data}/>
          </VictoryChart>
        </article>
        <footer class="footer">Footer</footer>
      </div>
    );
  }
}

export default App;
