import React from 'react'

import SmallLoader from 'react-spinners/BeatLoader';
import LargeLoader from 'react-spinners/GridLoader';
import {MdErrorOutline} from 'react-icons/md';


const CardLoadingSpinner = ({loaderType, loaded, haveData})=>{
		const loaders_ = {
			large: (loaderProps)=><LargeLoader {...loaderProps}/>,
			small: (loaderProps)=><SmallLoader {...loaderProps}/>,
			error: (loaderProps)=>(<div><MdErrorOutline {...loaderProps}/> No Data Found </div>),
		}

		const loaderBaseSize = loaderType === "error" ? 36 : 12 ;
		const loaderSize = loaderType === "large" ? loaderBaseSize : loaderBaseSize*0.6;
		const spinnerColor = loaded ? (haveData ? "#00AA00" : "#FF0000") : "#224acc";
		
		const spinnerProps = loaderType === "error" ? {} : {sizeUnit: "px", loading: true}
		const LoaderProps = {...spinnerProps, size: loaderSize, color: spinnerColor};
		
		return (
			<div className="d-flex flex-column m-auto">
				<div className="m-auto" style={{ padding: "45px"}}>
					{loaders_[loaderType](LoaderProps)}
				</div>

			</div>
		);
}

export default CardLoadingSpinner;