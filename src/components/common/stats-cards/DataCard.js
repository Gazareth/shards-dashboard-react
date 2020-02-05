import React from "react";
import PropTypes from "prop-types";

import CardLoadingSpinner from './CardLoadingSpinner'

// eslint-disable-next-line
import styles from "../../../assets/chartjs.module.css";


//Base class for the data cards, handles loading in data & the loader
class DataCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {loaded: false, timeframe: this.props.timeframe, haveData: false, error: false};
		this.setLoaded = this.setLoaded.bind(this);
		this.loaded = this.loaded.bind(this);
		//this.loadingSpinner = this.loaded.bind(this);
		
	}
	
	setLoaded(){
		this.setState(state=>({...state, loaded: true, error: (Math.random() > 0.8) }));
	}
	
	componentDidMount() {
		setTimeout(()=>this.setLoaded(),1000+Math.floor(Math.random()*1000));
	}
	
	loadingSpinner() {
		const loaderType = this.state.error ? "error" : this.state.cardSize;
		return CardLoadingSpinner({loaderType, loaded: this.state.loaded, haveData: this.state.haveData});
	}
	
	//passthrough that components can use to hinder rendering of child components
	loaded(component,unLoaded = true) {
		return this.isLoaded(unLoaded) ? component : null;
	}
	
	isLoaded(unLoaded = true) {
		return (unLoaded ? this.state.loaded && !this.state.error : !this.state.loaded || this.state.error)
	}
	

}

DataCard.propTypes = {
	timeframe: PropTypes.string,
};

export default DataCard;