import React from "react";
import Banner from "../../components/Banner";
import API from "../../utils/API";
import {Container, Row, Col } from "../../components/Grid";
import Skillset from "../../components/Skillset";
import testimonial from "../../utils/images/testimonial.png"
import "./style.css";

let Skills = () =>{
    return (
        <Banner>
            <h1 class="ttl">skillset</h1>
            {
                API.skillset.map( skills =>{
                    return(
                            <Skillset key={skills._id} title={skills.category} skills={skills.skills} />
                    )
                })
            }
            <h1 class="ttl">testimonials</h1>
            <img class="test" src={testimonial} />
        </Banner>
    )
}

export default Skills;