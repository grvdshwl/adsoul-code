import {React,useState,useEffect} from "react";


const Values = ({newIndex})=>{

	

	const [rawData,setData] = useState([]);

	

	useEffect(()=>{
		fetch(`https://api.npoint.io/d734975d2aee62d197ef/${newIndex}`).then((res)=>res.json()).then((data)=>{setData(data)});
	},[])


	const valueData = rawData.map((value)=>{
		return(

			<div key ={value["date"]}  id="valueBar">
				<span> {value["date"]} </span>
				<span> {'$ '+value["revenue"]} </span>
				<span> {value["adRequest"]} </span>
				<span> {value["adResponse"]} </span>
				<span> {value["impressions"]} </span>
				<span> {value["clicks"]} </span>
				<span> {((value["impressions"]/value["adResponse"])*100).toFixed(2)+" %"} </span>
			</div>


			)
	})


	return(

		<div>
		{valueData}
		</div>


		)

}




export default Values;