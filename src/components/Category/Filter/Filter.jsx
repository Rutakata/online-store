import React from "react";
import { HiFilter } from "react-icons/hi";
import style from "./Filter.module.css";


const Filter = (props) => {
    return <div className={style.container}>
        <h3 className={style.container__header}>
            <HiFilter size={30} />
            Filter
        </h3>
        <div className="container__filter">
            <h4>Company</h4>
            <div className={style.container__filter}>
                {props.companies.map(company => (
                    <div className={style.container__filter_item}>{company}</div>
                ))}
            </div>
        </div>
        <div className="container__filter">
            <h4>Material</h4>
            <div className={style.container__filter}>
                {props.materials.map(company => (
                    <div className={style.container__filter_item}>{company}</div>
                ))}
            </div>
        </div>
        <div className="container__filter">
            <h4>Size</h4>
            <div className={style.container__filter}>
                {props.sizes.map(company => (
                    <div className={style.container__filter_item}>{company}</div>
                ))}
            </div>
        </div>
        <div className="container__filter">
            <h4>Type</h4>
            <div className={style.container__filter}>
                {props.types.map(company => (
                    <div className={style.container__filter_item}>{company}</div>
                ))}
            </div>
        </div>
    </div>
}

export default Filter;