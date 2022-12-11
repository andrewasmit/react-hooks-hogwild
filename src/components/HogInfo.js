import React from "react";

function HogInfo({ highestMedal, specialty, weight }){


    return (
        <div className= "hog-info">
            <h3>Highest Medal Achieved: {highestMedal}</h3>
            <h3>Specialty: {specialty}</h3>
            <h3>Weight: {weight}</h3>
    </div>
    )
}

export default HogInfo;