import React, {useState} from "react";
import HogCard from "./HogCard";

function CardBox({ props }){

    const [isHidden, setIsHidden] = useState(true)


    const hogsToDisplay= props.map((hog, index)=>{
        return <HogCard 
                    greased={hog.greased}
                    highestMedal={hog['highest medal achieved']}
                    specialty={hog.specialty}
                    name={hog.name}
                    image={hog.image}
                    weight={hog.weight}
                    key={index}
                    isHidden={isHidden}
                    setIsHidden={setIsHidden}
                />
    })


    return(
        <div id="cardBox">
            {hogsToDisplay}
        </div>
    )
}

export default CardBox;