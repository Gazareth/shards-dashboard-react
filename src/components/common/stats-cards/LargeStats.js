import React from "react";
import PropTypes from "prop-types";
import DataCard from "./DataCard";

import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Col,
	FormSelect,
	Row,
} from "shards-react";

//Charts
import Chart from "../../../utils/charts/chartPicker"


import RangeDatePicker from "../RangeDatePicker";

//Wrapper for a small or large data card on the dashboard.
//	Handles loading/fetching data & displays the appropriate graph afterwards
//
//	Large (line, pie) or small (line - simplified) data presentation card available
//	Configurable with a drop down in the footer, or a date range selector below the title
class LargeStats extends DataCard {
	constructor(props) {
		super(props);
		this.state = {...this.state, cardSize: "large"}
	}
	
	drawGraph(){
		const pieHeight = 250 - (this.props.footerConfig ? 30 : 0) - (this.props.bodyConfig ? 30 : 0);
		
		let ChartStuff = {
			type: this.props.chartType,
			height: (this.props.chartType === "pie" ? pieHeight : 120),
			data: this.props.chartData,
			cutoutPercentage: this.props.cutoutPct
		};

		return Chart(ChartStuff);
	}

	
	render() {
		/****************
		/* PREPARATION
		/****************/
		const cardStyle = this.state.error ? {backgroundColor: "#F0F0F0"} : {};
		const bodyClasses = this.props.bodyConfig ? "pt-0" : "d-flex py-0";

		
		const bodyConfig = (
			<Row className="border-bottom py-2 bg-light">
				<Col sm="6" className="d-flex mb-2 mb-sm-0">
					<RangeDatePicker />
				</Col>
				<Col>
					<Button
					size="sm"
					className="d-flex btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0"
					>
					View Full Report &rarr;
					</Button>
				</Col>
			</Row>
		);
		
		const footerConfig = (
			<CardFooter className="border-top">
				<Row>
					<Col>
						<FormSelect
							size="sm"
							value={this.state.timeframe}
							style={{ maxWidth: "130px" }}
							onChange={(event) => {this.setState({...this.state, timeframe: event.target.value})}}
							>
							  {this.props.configOptions.map((e,i)=> <option key={i} value={e[0]}>{e[1]}</option>)}
						</FormSelect>
					</Col>
					<Col className="text-right view-report">
						{/* eslint-disable-next-line */}
						<a href="#">View full report &rarr;</a>
					</Col>
				</Row>
			</CardFooter>
		);
		
		//const bodyConfig = this.props.bodyConfig ? bodyConfig_component : "";
		//const footerConfig = ( ? footerConfig_component : "");

		/****************
		/* RENDER
		/****************/
		return (
			<Card small className="h-100" style={cardStyle}>
				{/* header for title */}
				<CardHeader className="border-bottom">
					<h6 className="m-0">{this.props.title}</h6>
				</CardHeader>
				<CardBody className={bodyClasses}>
					{/*row for datepicker and link*/}
					{this.props.bodyConfig && bodyConfig}
					{this.loaded(this.drawGraph())}
					{this.loaded(this.loadingSpinner(),false)}
				</CardBody>
				{/*footer for timeframe option selection*/}
				{this.props.footerConfig && footerConfig}
			</Card>
		);
	}
}

LargeStats.propTypes = {
	title: PropTypes.string,
	bodyConfig: PropTypes.bool,
	footerConfig: PropTypes.bool,
	chartData: PropTypes.object,
	configOptions: PropTypes.array,
	cutoutPct: PropTypes.number
};


LargeStats.defaultProps = {
	title: "Chart Title",
	bodyConfig: false,
	footerConfig: false,
	chartData: {},
	configOptions: [
	  ["last-week", "Last Week"],
	  ["today", "Today"],
	  ["last-week", "Last Month"],
	  ["last-year", "Last Year"]
	],
	cutoutPct: 0,
};


export default LargeStats;