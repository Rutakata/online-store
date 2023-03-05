import React from "react";
import style from "../ClothesDetails.module.css";


const ParamsItem = ({param, value, children, handleParamChange = null, classType}) => {
    return <div className={style[classType]}
                onClick={() => handleParamChange(param, value)}
                style={param === 'color' ? {backgroundColor: "#"+ value}: null}>
        {param === "size" ? children : null}
    </div>
}

export default ParamsItem;