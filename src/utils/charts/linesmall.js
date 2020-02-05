import React from 'react';
import {Line} from 'react-chartjs-2';

const SmallLineChart = ({ data, chartOptions }) => {
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

