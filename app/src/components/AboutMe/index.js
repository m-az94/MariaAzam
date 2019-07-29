import React from "react";
import { Link } from "react-router-dom";
import "./style.css"

let AboutMe = () => {
    return (
        <div>
            <h1 id="welcome"> maria azam</h1>
            {/* <h5 id="joke1">"i'm just a girl... standing infront of a computer screen... asking... 'where am i missing a semi-colon'?!" </h5> */}
            <p id="blurb">My name is Maria and I am a Fullstack Developer.
             I have a background in Chemistry. 
             However, the world of Web Developement was too enticing to pass up.
            I enjoy working with ReactJS and AngularJS. 
            </p>
            <div class="snakeBTN">
                <Link to="/projects">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <h6> view my work </h6>
                </Link>
            </div>
            <div id="jokeCircle">
                <h5 id="joke">"I'm just a girl... standing infront of a computer screen... asking... 'Where am I missing a semi-colon'?!" </h5>
            </div>
        </div>
    )
}
export default AboutMe;