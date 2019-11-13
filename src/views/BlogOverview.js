import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";
//import SmallStatsOrig from "./../components/common/SmallStats_Orig";
import StatsCard from "./../components/common/stats-cards/StatsCard";
import SmallStats from "./../components/common/stats-cards/SmallStats";

//chart data
import PieData from "./../store/dataExamples/pieData";
import LineData from "./../store/dataExamples/lineData";


//import MyFavouritePies from "./../components/blog/MyFavouritePies";
import UsersOverview from "./../components/blog/UsersOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";
import NewDraft from "./../components/blog/NewDraft";
import Discussions from "./../components/blog/Discussions";
import TopReferrals from "./../components/common/TopReferrals";

const BlogOverview = ({ smallStats }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Blog Overview" subtitle="Dashboard" className="text-sm-left mb-3" />
    </Row>

    {/* Small Stats Blocks */}
    <Row>
      {smallStats.slice(0,4).map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <StatsCard
            id={`small-stats-1${idx}`}
			cardType='small'
            variation="0"
			{...stats}
          />
        </Col>
      ))}
    </Row>

		{<Row>
      {smallStats.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-2${idx}`}
            variation="1"
			{...stats}
          />
        </Col>
      ))}
    </Row>}
		
    <Row>
  	  { /* Data Card */ }
      <Col lg="8" md="12" sm="12" className="mb-4">
        <StatsCard cardType="large" title="Data Card!" chartType="line" chartData={LineData} bodyConfig={true} footerConfig={false} />
      </Col>
		
		  	  {/* My Favourite Pies */}
      <Col lg="4" md="12" sm="12" className="mb-4">
        <StatsCard cardType='large' title="My Favourite Pies" chartType="pie" chartData={PieData} footerConfig={true} bodyConfig={false} />
      </Col>
		{console.log("about to do smallstats grp #3...")}
		<Col>
		<Row>
		{smallStats.slice(0,4).map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-3${idx}`}
            variation="1"
			{...stats}
          />
        </Col>
      ))}
</Row>
			
					<Row>
		{smallStats.map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-4${idx}`}
            variation="1"
			{...stats}
          />
        </Col>
      ))}
</Row>
								<Row>
		{smallStats.slice(0,3).map((stats, idx) => (
        <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
          <SmallStats
            id={`small-stats-5${idx}`}
            variation="1"
			{...stats}
          />
        </Col>
      ))}
</Row>
			</Col>
			
  	  {/* My Favourite Pies */}
      <Col lg="4" md="12" sm="12" className="mb-4">
        <StatsCard cardType='large' title="My Favourite Pies" chartType="pie" chartData={PieData} footerConfig={true} bodyConfig={false} />
      </Col>

		
      {/* Users Overview */}
      <Col lg="8" md="12" sm="12" className="mb-4">
        <UsersOverview />
      </Col>

      {/* Users by Device */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <UsersByDevice />
      </Col>

      {/* New Draft */}
      <Col lg="4" md="6" sm="12" className="mb-4">
        <NewDraft />
      </Col>

      {/* Discussions */}
      <Col lg="5" md="12" sm="12" className="mb-4">
        <Discussions />
      </Col>

      {/* Top Referrals */}
      <Col lg="3" md="12" sm="12" className="mb-4">
        <TopReferrals />
      </Col>
    </Row>
  </Container>
);

BlogOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  smallStats: PropTypes.array
};

BlogOverview.defaultProps = {
  smallStats: [
    {
      label: "Posts",
      value: "2,390",
      percentage: "4.7%",
      increase: true,
      chartLabels: new Array(7).fill(null),
      attrs: { md: "6", sm: "6" },
      chartData: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(0, 184, 216, 0.1)",
          borderColor: "rgb(0, 184, 216)",
          data: [1, 2, 1, 3, 5, 4, 7]
        }
      ]
    },
    {
      label: "Pages",
      value: "182",
      percentage: "12.4",
      increase: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "6", sm: "6" },
      chartData: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(23,198,113,0.1)",
          borderColor: "rgb(23,198,113)",
          data: [1, 2, 3, 3, 3, 4, 4]
        }
      ]
    },
    {
      label: "Comments",
      value: "8,147",
      percentage: "3.8%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      chartData: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,180,0,0.1)",
          borderColor: "rgb(255,180,0)",
          data: [2, 3, 3, 3, 4, 3, 3]
        }
      ]
    },
    {
      label: "New Customers",
      value: "29",
      percentage: "2.71%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      chartData: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgb(255,65,105)",
          data: [1, 7, 1, 3, 1, 4, 8]
        }
      ]
    },
    {
      label: "Subscribers",
      value: "17,281",
      percentage: "2.4%",
      increase: false,
      decrease: true,
      chartLabels: [null, null, null, null, null, null, null],
      attrs: { md: "4", sm: "6" },
      chartData: [
        {
          label: "Today",
          fill: "start",
          borderWidth: 1.5,
          backgroundColor: "rgb(0,123,255,0.1)",
          borderColor: "rgb(0,123,255)",
          data: [3, 2, 3, 2, 4, 5, 4]
        }
      ]
    }
  ]
};

export default BlogOverview;
