import React from 'react';
import LargeStats from './LargeStats';
import SmallStats from './SmallStats';

//simple selection between large & small stats card
const StatsCard = (props)=>{
	console.log("coming into statscard... type is: ",props.cardtype);
	return (props.cardType === "large" ? <LargeStats {...props}/> : <SmallStats {...props}/>);
};

export default StatsCard