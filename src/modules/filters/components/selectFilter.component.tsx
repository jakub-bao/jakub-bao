import React, {ChangeEvent} from "react";
import {InputLabel, MenuItem, Select} from "@material-ui/core";
import {FilterType, idName} from "../models/filters.model";
import {camelCaseToHuman} from "../../shared/services/camelCase.service";


export default function SelectFilter({filterType, filterValue, onFilterSelect, filterOptions}:{
    filterType:FilterType,
    filterValue:string,
    onFilterSelect:(filterValue:string)=>void,
    filterOptions: idName[]
}) {
    return <React.Fragment>
        <InputLabel id={`selectFilter_${filterType}`}>{camelCaseToHuman(filterType)}</InputLabel>
        <Select
            labelId={`selectFilter_${filterType}`}
            id={`cypress_filter_${filterType}`}
            value={filterValue||''}
            onChange={(event:ChangeEvent<any>)=>onFilterSelect(event.target.value)}
        >
            {filterOptions.map(option=><MenuItem value={option.id} key={option.id}>{option.name}</MenuItem>)}
        </Select>
    </React.Fragment>;
}