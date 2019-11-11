import React from "react";
import PropTypes from "prop-types";

import SmallLoader from 'react-spinners/BeatLoader';
import LargeLoader from 'react-spinners/GridLoader';


class DataCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {loaded: false, timeframe: this.props.timeframe};
		this.setLoaded = this.setLoaded.bind(this);
		this.loaded = this.loaded.bind(this);
	}
	
	setLoaded(){
		console.log("component ("+this.constructor.name+") loaded data!!!");
		this.setState(state=>({...state, loaded: true}));
	}
	
	loaded(component,unLoaded = true) {
		return (unLoaded ? this.state.loaded : !this.state.loaded) ? component : null;
	}
	
	getLoader(loaderProps) {
		return (this.state.cardSize === "large" ? <LargeLoader
						{...loaderProps}
					/> : <SmallLoader
						{...loaderProps}
					/>);
	}
	
	loadingSpinner() {
		const override = "css`display: block; margin: 0 auto; border-color: red;`";
		const override2 = "css`display: flex; margin: 0 auto; padding-top: 25px;`";
		const loaderSize = this.state.cardSize === "large" ? 12 : 7;
		
		const LoaderProps = {css: override2, sizeUnit: "px", size: loaderSize, color: "#224acc", loading:true};
		
		return (
			<div className="garet d-flex flex-column m-auto">
				<div className="m-auto" style={{ padding: "15px"}}>
					{this.getLoader(LoaderProps)}
				</div>

			</div>
		);
	}
	
	componentDidMount() {
		console.log("DataCard mounted ("+this.constructor.name+")! loaded? ",this.state.loaded);
		setTimeout(()=>this.setLoaded(),1000+Math.floor(Math.random()*1000));
	}
}

export default DataCard;