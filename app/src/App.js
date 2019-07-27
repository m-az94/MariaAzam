import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Banner from './components/Banner';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";


class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Banner />
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
        </div>
      </Router>
    )
  }
}

export default App;
