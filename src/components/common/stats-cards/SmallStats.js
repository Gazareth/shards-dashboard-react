import React from "react";
import PropTypes from "prop-types";
import DataCard from "./DataCard";

import classNames from "classnames";
import { Card, CardBody } from "shards-react";

import Chart from "../../../utils/charts/chartPicker";

class SmallStats extends DataCard {
  constructor(props) {
    super(props);

	this.state = {...this.state, cardSize: "small", variation: this.props.variation};

	this.canvasRef = React.createRef();
	  
	this.switchVariation = this.switchVariation.bind(this);
	//this.drawGraph = this.drawGraph.bind(this);
  }

	switchVariation() {
		this.setState(state=>({...state, variation: (state.variation === "1" ? "0" : "1")}));
	}
	
	drawGraph(){
		let ChartStuff = {
			type: "small",
			data: {
				labels: new Array(this.props.chartData[0].data.length).fill(null),
				datasets: this.props.chartData
			},
			cutoutPercentage: this.props.cutoutPct,
			chartOptions: this.props.chartOptions
		};
		
		return Chart(ChartStuff);
	}

	
  render() {
  
	  
	  const { label, value, percentage, increase } = this.props;
	  const variation = this.state.variation;
	  
	  const cardStyle = this.state.error ? {backgroundColor: "#F0F0F0"} : {};
	  
	const cardClasses = classNames(
	  "stats-small",
	  variation && `stats-small--${variation}`
	);

	const cardBodyClasses = classNames(
	  variation === "3" ? "p-0 d-flex" : "px-0 pb-0",
	);
	const innerWrapperClasses = classNames(
	  "d-flex",
	  variation === "1" ? "flex-column m-auto" : "px-3",
	);

	const dataFieldClasses = classNames(
	  "stats-small__data",
	  variation === "1" && "text-center"
	);

	const labelClasses = classNames(
	  "stats-small__label",
	  "text-uppercase",
	  variation !== "1" && "mb-1"
	);

	const valueClasses = classNames(
	  "stats-small__value",
	  "count",
	  variation === "1" ? "my-3" : "m-0"
	);

	const innerDataFieldClasses = classNames(
	  "stats-small__data",
	  variation !== "1" && "text-right align-items-center"
	);

	const percentageClasses = classNames(
	  "stats-small__percentage",
	  `stats-small__percentage--${increase ? "increase" : "decrease"}`
	);
	  
	  
    return (
      <Card small className={cardClasses} onClick={this.switchVariation} style={cardStyle}>
        <CardBody className={cardBodyClasses}>
          {this.loaded(<div className={innerWrapperClasses}>
		  	<div className={dataFieldClasses}>
              <span className={labelClasses}>{label}</span>
              <h6 className={valueClasses}>{value}</h6>
            </div>
            <div className={innerDataFieldClasses}>
				{this.loaded(<span className={percentageClasses}>{percentage}</span>)}
            </div>
          </div>)}
		{this.loaded(this.drawGraph())}
		{this.loaded(this.loadingSpinner(),false)}
        </CardBody>
      </Card>
    );
  }
}

SmallStats.propTypes = {
  /**
   * The Small Stats variation.
   */
  variation: PropTypes.string,
  /**
   * The label.
   */
  label: PropTypes.string,
  /**
   * The value.
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * The percentage number or string.
   */
  percentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Whether is a value increase, or not.
   */
  increase: PropTypes.bool,
  /**
   * The Chart.js configuration object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options object.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.array.isRequired,
  /**
   * The chart labels.
   */
  chartLabels: PropTypes.array
};

SmallStats.defaultProps = {
  increase: true,
  percentage: 0,
  value: 0,
  label: "Label",
  chartOptions: Object.create(null),
  chartConfig: Object.create(null),
  chartData: [],
  chartLabels: []
};

export default SmallStats;
