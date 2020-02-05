import React from 'react'
import Line from 'react-chartjs-2';

const LineChart = ({ data, height }) => {
	const chartConfig = {
		type: "LineWithLine",
		data,
		height: 120,
		options: {
			responsive: true,
			legend: {
				position: "top"
			},
			elements: {
				line: {
					// A higher value makes the line look skewed at this ratio.
					tension: 0.3
				},
				point: {
					radius: 0
				}
			},
			scales: {
				xAxes: [
					{
						gridLines: false,
						ticks: {
						callback(tick, index) {
							// Jump every 7 values on the X axis labels to avoid clutter.
							return index % 7 !== 0 ? "" : tick;
							}
						}
					}
				],
				yAxes: [
					{
						ticks: {
						suggestedMax: 45,
						callback(tick) {
							if (tick === 0) {
								return tick;
							}
							// Format the amounts using Ks for thousands.
							return tick > 999 ? `${(tick / 1000).toFixed(1)}K` : tick;
							}
						}
					}
				]
			},
			hover: {
				mode: "nearest",
				intersect: false
			},
			tooltips: {
				custom: false,
				mode: "nearest",
				intersect: false
			}
		}
	};

    return <Line {...chartConfig}/>;
	}

export default LineChart;