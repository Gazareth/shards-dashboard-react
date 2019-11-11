import PieChart from "./pie";
import LineChart from "./line";
import SmallLineChart from "./linesmall";

const Chart = (props) => {
	let Chart = 0;
	switch(props.type) {
		case "line":
			Chart = LineChart(props);
			break;
		case "pie":
			Chart = PieChart(props);
			break;
		case "small":
			Chart = SmallLineChart(props);
			break;
		default:
			break;
	}
	return Chart;
};

export default Chart;