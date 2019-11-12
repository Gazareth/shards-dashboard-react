import React from 'react';
import {Pie} from 'react-chartjs-2';

const PieChart = ({ chartData, height, cutoutPercentage }) => {
   const chartConfig = {
      type: "pie",
      data: chartData,
	  height: height,
      options: {
        ...{
		  layout: {
			//padding: height*0.15,
			margin: "auto",
		  },
          legend: {
            position: "bottom",
            labels: {
              padding: 25,
              boxWidth: 20
            }
          },
          cutoutPercentage,
          tooltips: {
            custom: false,
            mode: "index",
            position: "nearest"
          }
        },
      }
    };

    return <Pie {...chartConfig}/>;
	}

export default PieChart;