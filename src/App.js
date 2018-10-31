import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './Appbar'

class App extends Component {
  render() {
    return (
      <div class="wrapper">
        <header class="header">
          <SimpleAppBar/>
        </header>
        <article class="main">
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
        </article>
        <footer class="footer">Footer</footer>
      </div>
    );
  }
}

export default App;
