import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Banner from "./components/Banner"


class App extends Component {
  render(){
    return (
      <Router basename="/">
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
        </div>
      </Router>
    )
  }
}

export default App;
