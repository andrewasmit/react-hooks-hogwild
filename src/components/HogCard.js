import React from "react";
import HogInfo from "./HogInfo";

function HogCard({ 
    image, 
    name, 
    greased, 
    highestMedal, 
    weight, 
    specialty,
    isHidden,
    setIsHidden
}){


    function hideClickHandler(e){
        setIsHidden(!isHidden);
    }

const hogInfoToDisplay= isHidden ? 
        null : <HogInfo 
                    highestMedal={highestMedal}
                    weight={weight}
                    specialty={specialty}
                    isHidden={isHidden}
                    setIsHidden={setIsHidden}
                />

    return(
        <div 
            onClick={hideClickHandler} 
            className="hog-card" 
        >
            <h2>{name}</h2>
            <img src= {image} alt="A hog"></img>
            <h4>{greased}</h4>
            {hogInfoToDisplay}
        </div>
    )
}

export default HogCard;