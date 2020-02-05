import React from "react";
import { Row, Col } from "shards-react";

import StatsCard from "./../../components/common/stats-cards/StatsCard";
import {SmallProps} from "./../charts/linesmall";

/******************************************************************************
* === LAYOUT RESOLVER ===
* - Recursive function which accepts array looking like this:
* 	cardLayout: [
*		["smallStats-0,","smallStats-1","smallStats-2"],
*		["smallStats-0","smallStats-1","smallStats-2","smallStats-4"],
*		[["smallStats-0","smallStats-1","smallStats-2"],"smallStats-4"],
*	]
*
*******************************************************************************/
const resolveLayout = (layout,level=0)=>{
	const indent = new Array(level).fill("     ").join();
	console.log(indent+"got layout!",layout);
	const reactLayout = layout.map((l,i)=>{
		console.log(indent+"level: ",level," performing map on l: ",l);
		if(Array.isArray(l)) {
			console.log(indent+"is array so becoming ",level % 2 ? "col" : "row"," because of level ",level);
			return level % 2 ? <Col>{resolveLayout(l,level+1)}</Col> : <Row>{resolveLayout(l,level+1)}</Row>;
		} else if( l.includes("smallStats") ) {	//SMALL STATS (Line)
			console.log(indent+"is smallStats!")
			const smallStatsId = parseInt(l.split("-")[1]);
			const smallStatsProps = SmallProps(smallStatsId);
			console.log(indent+ "Retrieved smallstats props: ",smallStatsProps);
			return (<Col className="col-lg mb-4" {...(smallStatsProps.attrs)}>
				          <StatsCard
            		//id={`small-stats-1${i}`}
					cardType='small'
            		variation="0"
					{...smallStatsProps}
          /></Col>);
		} else if( l.includes("largeStats")) {	//LARGE STATS (Line, Pie)
			return console.log("resolveLayout: Found largeStats! TODO!!!");
		} else return null;
	});
	return reactLayout;
};

export default resolveLayout;