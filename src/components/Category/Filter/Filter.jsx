import React from "react";
import { HiFilter } from "react-icons/hi";
import style from "./Filter.module.css";


const Filter = (props) => {
    return <div className={style.container}>
        <h3 className={style.container__header}>
            <HiFilter size={30} />
            Filter
        </h3>
        <div className="container__companies">
            <h4>Company</h4>
            {props.companies.map(company => (
                <div>{company}</div>
            ))}
        </div>
        <div className="container__material">
            <h4>Material</h4>
            {props.materials.map(material => (
                <div>{material}</div>
            ))}
        </div>
        <div className="container__material">
            <h4>Size</h4>
            {props.sizes.map(size => (
                <div>{size}</div>
            ))}
        </div>
        <div className="container__types">
            <h4>Type</h4>
            {props.types.map(type => (
                <div>{type}</div>
            ))}
        </div>
    </div>
}

export default Filter;