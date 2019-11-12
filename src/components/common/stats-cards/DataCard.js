import React from "react";
import PropTypes from "prop-types";

import SmallLoader from 'react-spinners/BeatLoader';
import LargeLoader from 'react-spinners/GridLoader';
//import ErrorLoader from 'react-spinners/HashLoader';
import {MdErrorOutline} from 'react-icons/md';

// eslint-disable-next-line
import styles from "../../../assets/chartjs.module.css";


//Base class for the data cards, handles loading in data & the loader
class DataCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {loaded: false, timeframe: this.props.timeframe, haveData: false, error: false};
		this.setLoaded = this.setLoaded.bind(this);
		this.loaded = this.loaded.bind(this);
		
		this.loaderLarge = (loaderProps)=>(<LargeLoader {...loaderProps} />);
		this.loaderSmall = (loaderProps)=>(<SmallLoader {...loaderProps} />);
		this.loaderError = (loaderProps)=>(<div><MdErrorOutline {...loaderProps}/> No Data Found </div>);
	}
	
	setLoaded(){
		console.log("component ("+this.constructor.name+") loaded data!!!");
		this.setState(state=>({...state, loaded: true, error: (Math.random() > 0.9) }));
	}
	
	//passthrough that components can use to hinder rendering of child components
	loaded(component,unLoaded = true) {
		return (unLoaded ? this.state.loaded && !this.state.error : !this.state.loaded || this.state.error) ? component : null;
	}
	
	getLoader(loaderProps) {
		return (this.state.error) ? this.loaderError(loaderProps) : (this.state.cardSize === "large" ? this.loaderLarge(loaderProps) : this.loaderSmall(loaderProps));
	}
	
	loadingSpinner() {
		const loaderBaseSize = this.state.error ? 36 : 12 ;
		const loaderSize = this.state.cardSize === "large" ? loaderBaseSize : loaderBaseSize*0.6;
		
		const spinnerColor = this.state.loaded ? (this.state.haveData ? "#00AA00" : "#FF0000") : "#224acc";
			
		const LoaderProps = {sizeUnit: "px", size: loaderSize, color: spinnerColor, loading:true};
		
		return (
			<div className="d-flex flex-column m-auto">
				<div className="m-auto" style={{ padding: "45px"}}>
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

DataCard.propTypes = {
	timeframe: PropTypes.string,
};

export default DataCard;