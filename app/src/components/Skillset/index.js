import React from "react";
import {Container, Row, Col} from "../Grid";
import "./style.css"

let Skillset = (props) =>{


    return (
        <div class="skillset">
            <div class="front">
                <h1>{props.title}</h1>
            </div>
            <div class="back">
                {    
                    props.skills.map(skill =>{
                        return (
                            <img class="skills" src={skill} />
                        )
                    })}
            </div>
        </div>
    )
}

export default Skillset;