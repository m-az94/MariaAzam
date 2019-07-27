import React from "react";
import {Container, Row, Col} from "../Grid";
import { Link } from "react-router-dom";
import "./style.css";

import logo from "../../utils/images/MA.png"

let NavbarTop = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div id="topOfNav">
                <a class="navbar-brand" href="#"> maria azam </a>

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
                        <button class="navBTN" type="button" value="Skills"> skills </button>
                        </Link>
                    </li>
                </ul>
                <div class="hamburger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <div id="gradientBorder"></div>
            </div>
            <div id="bottomOfNav">
                {props.children}
            </div>
        </nav>
    )
}

export default NavbarTop;
