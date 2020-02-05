import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "./../components/common/PageTitle";

import ResolveLayout from "./../utils/layout/resolveStatsLayout";

const BlogOverview = ({ cardLayout }) => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle title="Data Health" subtitle="Dashboard" className="text-sm-left mb-3" />
    </Row>

	{ResolveLayout(cardLayout)}
		
	{/* Small Stats Blocks */console.log("RESLVED LAYOUT: ",ResolveLayout(cardLayout))}

  </Container>
);





BlogOverview.propTypes = {
  /**
   * The small stats dataset.
   */
  cardLayout: PropTypes.array
};









BlogOverview.defaultProps = {

	cardLayout: [
		["smallStats-0,","smallStats-1","smallStats-2"],
		["smallStats-0","smallStats-1","smallStats-2","smallStats-4"],
		[["smallStats-0","smallStats-1","smallStats-2"],"smallStats-4"],
	]
	
};

export default BlogOverview;
