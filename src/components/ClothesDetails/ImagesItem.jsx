import React from "react";


const ImagesItem = (props) => {
    return <img src={props.link} onMouseEnter={() => props.setCurrentImage(props.link)} alt={props.name} />
}

export default ImagesItem; 