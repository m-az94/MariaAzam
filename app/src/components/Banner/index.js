import React from "react";
import {Container, Row, Col} from "../Grid";
import { Link } from "react-router-dom";
import SnakeButton from "../SnakeButton"
import "./style.css";

let Banner = (props) =>{
    return (
        <div class="banner">
            <div class="navIcon">
                <input type="checkbox" class="toggle"/>
                <div class="burger">
                    <div class="s-line"></div>
                    <div class="m-line"></div>
                    <div class="s-line"></div>
                </div>
                <div class="menu">
                    <div class="transition">
                        <ul class="navbar-nav">
                            <li class="nav-item" id="home">
                                <Link to="/"> 
                                    <button class="navBTN" type="button" value="Home"> home </button>
                                </Link>
                            </li> 
                            <li class="nav-item" id="projects">
                                <Link to="/projects">
                                <button class="navBTN" type="button" value="Projects"> projects </button>
                                </Link>
                            </li>
                            <li class="nav-item" id="skills">
                                <Link to="/skills">
                                <button class="navBTN" type="button" value="Skills"> skillset </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="mainContent">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Banner;