import React from 'react';
import {Line} from 'react-chartjs-2';

import smallStatsData from "./../../store/dataExamples/smallLineData";

//hard-coded arrays to be inserted into above function to produce a fully-complete SmallStats react component
const smallStats = [
		["Posts","2,390","4.7%",true,{md: "6", sm: "6"}, [0, "rgba(0, 184, 216, 0.1)", "rgb(0, 184, 216)"] ],
		["Pages","182","12.4%",true,{md: "6", sm: "6"}, [1, "rgba(23,198,113,0.1)", "rgb(23,198,113)"] ],
		["Comments","8,147","3.8%",false,{md: "6", sm: "6"}, [2, "rgba(255,180,0,0.1)", "rgb(255,180,0)"] ],
		["New Customers","29","2.71%",false,{md: "6", sm: "6"}, [3, "rgba(255,65,105,0.1)", "rgb(255,65,105)"] ],
		["Subscribers","17,281","2.4%",false,{md: "6", sm: "6"}, [3, "rgb(0,123,255,0.1)", "rgb(0,123,255)"] ],
		];



//helper function to create SmallStats react component
const prepareSmallStatsProps = (label,value,percentage,isIncrease,layout,chartDataInfo)=> {
		console.log("smallDataOptions... chartDataInfo: ",chartDataInfo);
		return ({
			label,
			value,
			percentage,
			increase: isIncrease,
			attrs: layout,
			chartData: smallStatsData(...chartDataInfo)
		})
};





//Generates full object of small chart props (including data and style) to be passed into template below
export const SmallProps = (index)=>{
	if( index < 0 || index >= smallStats.length ) console.log("getSmallStatsProps -- index out of range!!");
	return prepareSmallStatsProps(...smallStats[index]);
}


//All smallLineCharts inherit this template
export const SmallTemplate = ({ data, chartOptions }) => {
	const chartConfig = {
		type: "line",
		data,
		options: {
			...chartOptions,
			maintainAspectRatio: false,
			responsive: true,
			legend: {
				display: false
			},
			tooltips: {
				enabled: false,
				custom: false
			},
			elements: {
				point: {
					radius: 0
				},
				line: {
				tension: 0.33
				}
			},
			scales: {
				xAxes: [{
			  		gridLines: false,
			  		ticks: {
						display: false
			  		}
				}],
				yAxes: [{
					gridLines: false,
					scaleLabel: false,
					ticks: {
						display: false,
						isplay: false,
						// Avoid getting the graph line cut of at the top of the canvas.
						// Chart.js bug link: https://github.com/chartjs/Chart.js/issues/4790
						suggestedMax: Math.max(...data.datasets[0].data) + Math.max(...data.datasets[0].data)*.15
					}
				}]
			}
		}
	}
	return <Line {...chartConfig}/>
	};

