import react from "react";
import "./style.css";

const Card = (props) =>{
    return (
        <div class="card">
            <div class="front">
                <img src={props.image} />            
            </div>
            <div class="back">
                <div class="details">
                    <p class="description">{props.description}</p>
                    <a href={props.github}><button>Github</button></a>
                    <a href={props.deployed}><button>Website</button></a>

                </div>
            </div>
        </div>
    )
}

export default Card;