import React from "react";
import "./style.css";

let SnakeButton = (props) => {
    return (
        <div class="snakeBTN">
            <a value={props.value} onClick={props.handleSelectType}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h6>{props.name}</h6>
            </a>
        </div>
    )
};

export default SnakeButton;