import React from "react";
import PropTypes from "prop-types";
import {
  Row,
  Col,
  FormSelect,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from "shards-react";

import PieChart from "../../utils/charts/pie";

class MyFavouritePies extends React.Component {
  constructor(props) {
    super(props);
	this.state = {timeframe: "last-week"}

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
	  PieChart({canvasRef: this.canvasRef, chartData: this.props.chartData, cutoutPercentage: 0});
  }

  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">
          <canvas
            height="220"
            ref={this.canvasRef}
            className="blog-users-by-device m-auto"
          />
        </CardBody>
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
      </Card>
    );
  }
}

MyFavouritePies.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart config object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.object
};

MyFavouritePies.defaultProps = {
  configOptions: [
	  ["last-week", "Last Week"],
	  ["today", "Today"],
	  ["last-week", "Last Month"],
	  ["last-year", "Last Year"]
  ],
  title: "My favourite Pies",
  chartData: {
    datasets: [
      {
        hoverBorderColor: "#ffffff",
        data: [68.3, 24.2, 7.5],
        backgroundColor: [
          "rgba(77, 44, 31, 1)",
          "rgba(255, 229, 82, 1)",
          "rgba(150, 190, 75, 1)"
        ]
      }
    ],
    labels: ["Steak", "Chicken", "Apple"]
  }
};

export default MyFavouritePies;
