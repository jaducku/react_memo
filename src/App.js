import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,Fab,AddIcon} from '@material-ui/core';
import Contact from './component/Contact';

class App extends Component {
  render() {
    return (
        <Contact/>
    );
  }
}

export default App;
