import React, { Component } from 'react';
import './App.css';
import FeatureList from './FeatureList';
import MainNav from './MainNav';
import Opening from './Opening';

class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <Opening />
        <FeatureList/>
      </div>
    )
  }
}

export default App