import React, {Component} from "react";
import {Container, Row, Col} from "../../components/Grid";
import Banner from "../../components/Banner"
import API from "../../utils/API";
import "./style.css";

class Projects extends Component {
    state = {
        value: ""
    };

    render(){
        return(
            <Banner>
                <h1> This page is currently under construction</h1>
            </Banner>
        )
    } 

};

export default Projects;