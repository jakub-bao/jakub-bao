import React from "react";
import {DedupeModel} from "../models/dedupe.model";
import ResultsTable from "./resultsTable.component";
import {Typography} from "@material-ui/core";

const styles = {
    info: {
        margin: '30px 5px'
    }
};

export default function Results({filteredDedupes, onUpdateDedupe, resolveDedupe}:{
    filteredDedupes: DedupeModel[],
    onUpdateDedupe: (DedupeModel)=>void,
    resolveDedupe: (DedupeModel)=>void
}) {
    if (!filteredDedupes) return <Typography style={styles.info}>Start by selecting filters on the left...</Typography>;
    if (filteredDedupes.length===0) return <Typography style={styles.info}>No duplicates found matching the selected criteria</Typography>
    return <ResultsTable filteredDedupes={filteredDedupes} onUpdateDedupe={onUpdateDedupe} resolveDedupe={resolveDedupe}/>;
}