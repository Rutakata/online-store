import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilters } from "../../../store/filterReducer";
import Filter from "./Filter";


const FilterContainer = () => {
    const { companies, materials, sizes, types, isLoading } = useSelector(state => state.filtersReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilters());
    }, [dispatch])

    return !isLoading ? <Filter companies={companies} materials={materials} sizes={sizes} types={types} />
    : <div>Loading...</div>
}

export default FilterContainer;