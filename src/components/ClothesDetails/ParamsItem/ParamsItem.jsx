import React from "react";
import style from "../ClothesDetails.module.css";


const ParamsItem = ({param, value, children, handleParamChange, classType}) => {
    return <div className={style[classType]}
                onClick={() => handleParamChange(param, value)}
                style={param === 'color' ? {backgroundColor: "#"+ value}: null}>
        {children}
    </div>
}

export default ParamsItem;