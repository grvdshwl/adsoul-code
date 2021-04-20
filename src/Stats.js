import {React,Component} from "react";
import "./Stats.css";
import Values from "./Values.js"


class Stats extends Component{

	



render(){
	return(
		<div>
			<div id="navBar">
			<span> ADSOUL</span>
			</div>
			<div id="appBar">
				<span id="arrow1" onClick={() =>this.props.onChangeStatus("home",0,"")}> ➔ </span>
				<img  alt ="box" src={this.props.setURL}width="50" height= "auto"/>
				<h3>{this.props.setName}</h3>
			</div>
			<div id="statsBar">
				<span> Date </span>
				<span> Revenue </span>
				<span> Ad Requests </span>
				<span> Ad Responses </span>
				<span> Impressions </span>
				<span> Clicks </span>
				<span> Render Rate </span>
			</div>

			<Values  newIndex = {this.props.setIndex}/>


		</div>
		)
	
}



}



export default Stats;