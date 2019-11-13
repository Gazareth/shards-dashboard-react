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
import smallStatsData from "./../store/dataExamples/smallLineData";


//import MyFavouritePies from "./../components/blog/MyFavouritePies";
import UsersOverview from "./../components/blog/UsersOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";
import NewDraft from "./../components/blog/NewDraft";
import Discussions from "./../components/blog/Discussions";
import TopReferrals from "./../components/common/TopReferrals";

const BlogOverview = ({ smallStats, cardLayout }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Data Health" subtitle="Dashboard" className="text-sm-left mb-3" />
    </Row>

	{resolveLayout(cardLayout)}
		
    {/* Small Stats Blocks */console.log("RESLVED LAYOUT: ",resolveLayout(cardLayout))}
    <Row>
      {smallStats.map((stats, idx) => (
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

const smallDataOptions = (idx,label,value,percentage,isIncrease,layout,chartDataInfo)=> {
		return ({
			label,
			value,
			percentage,
			increase: isIncrease,
			attrs: layout,
			chartData: smallStatsData(...chartDataInfo)
		})
};

const smallStats__ = [
		["Posts","2,390","4.7%",true,{md: "6", sm: "6"}, [0, "rgba(0, 184, 216, 0.1)", "rgb(0, 184, 216)"] ],
		["Pages","182","12.4%",true,{md: "6", sm: "6"}, [1, "rgba(23,198,113,0.1)", "rgb(23,198,113)"] ],
		["Comments","8,147","3.8%",false,{md: "6", sm: "6"}, [2, "rgba(255,180,0,0.1)", "rgb(255,180,0)"] ],
		["New Customers","29","2.71%",false,{md: "6", sm: "6"}, [3, "rgba(255,65,105,0.1)", "rgb(255,65,105)"] ],
		["Subscribers","17,281","2.4%",false,{md: "6", sm: "6"}, [3, "rgb(0,123,255,0.1)", "rgb(0,123,255)"] ],
		];

const resolveLayout = (layout)=>{
	const reactLayout = layout.map((c,i)=>{
		if( c.type === "row" ){ return <Row> {resolveLayout(c.childs)} </Row>}
		else if( c.type.includes("smallStats") ) {
			const smallStatsId = c.type.split("-")[1];
			const smallStatsStuff = smallStats__[smallStatsId];
			console.log("Building smallstats from ",smallStatsStuff,smallDataOptions(smallStatsId, ...smallStatsStuff));
			return (<Col className="col-lg mb-4" key={i} {...(smallStatsStuff[4])}>
				          <StatsCard
            		id={`small-stats-1${i}`}
					cardType='small'
            		variation="0"
					{...smallDataOptions(smallStatsId, ...smallStatsStuff)}
          /></Col>);
		} else return null;
	});
	return reactLayout;
};

BlogOverview.defaultProps = {
  smallStats: smallStats__.map((e,i)=>smallDataOptions(i,...e)),
	cardLayout: [
		{
			type: "row",
			childs: [
				{
					type: "smallStats-0",
				},
				{
					type: "smallStats-1",
				},
				{
					type: "smallStats-2",
				}
			]
		},
		{
			type: "row",
			childs: [
				{
					type: "smallStats-0",
				},
				{
					type: "smallStats-1",
				},
				{
					type: "smallStats-2",
				},
				{
					type: "smallStats-4",
				}
			]
		},
	],
};

export default BlogOverview;
