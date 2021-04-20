import {React,useState,useEffect} from "react";
import Asset1 from "./assets/asset1.svg";
import './Home.css';


const Home = ({onChangeStatus,onChangeStatus2,setName})=>{

	const [app,setApp] = useState("");

	const [rawData,setData] = useState([]);


  const [rawData2,setData2] = useState([]);

	useEffect(()=>{
		fetch('https://api.npoint.io/54d09df281f91e8c146f').then((res)=>res.json()).then((data)=>{setApp(data.title)});
	},[])

	useEffect(()=>{
		fetch('https://api.npoint.io/d734975d2aee62d197ef/1').then((res)=>res.json()).then((data)=>{setData(data)});
	},[])


  useEffect(()=>{
    fetch('https://api.npoint.io/d734975d2aee62d197ef/2').then((res)=>res.json()).then((data)=>{setData2(data)});
  },[])

	const revenue = rawData.reduce((acc,value)=>{
		return acc + value['revenue']
	},0)

  const revenue2 =  rawData2.reduce((acc,value)=>{
    return acc + value['revenue']
  },0) 


	const adRequest = rawData.reduce((acc,value)=>{
		return acc + value['adRequest']
	},0)

  const adRequest2 = rawData2.reduce((acc,value)=>{
    return acc + value['adRequest']
  },0)


	const adRequestValue = (adRequest/1000000).toFixed(1)

  const adRequestValue2 = (adRequest2/1000000).toFixed(1)

	const adResponse = rawData.reduce((acc,value)=>{
		return acc + value['adResponse']
	},0)

  const adResponse2 = rawData2.reduce((acc,value)=>{
    return acc + value['adResponse']
  },0)

	const adResponseValue = (adResponse/1000000).toFixed(1)

  const adResponseValue2 = (adResponse2/1000000).toFixed(1)

	const impressions = rawData.reduce((acc,value)=>{
		return acc + value['impressions']
	},0)

  const impressions2 = rawData2.reduce((acc,value)=>{
    return acc + value['impressions']
  },0)


	const impressionsValue = (impressions/1000000).toFixed(1)

  const impressionsValue2 = (impressions2/1000000).toFixed(1)

	return(
		<div className="App1">
        <div id="container">
          <h3> Adsoul </h3>
          <img  alt ="asset" id="img1" src={Asset1}  width="300" height= "auto"/>

        </div> 

        <div className="dashboard">
          <div className="display1">
             <h3> Apps</h3>
          </div>


        </div>

        <div className="dashboard2">
          <div className="display2">
              <img  alt ="box" src="https://www.wsfcu.com/wp-content/uploads/Decorative-Orange-Box-Slider.jpg"/>
              <h3>{app} </h3>
              <span onClick={()=>onChangeStatus("stats",1,app)}> ➔ </span>
              
          </div>


        </div>
        <div className="dashboard2">
          <div className="display3">
              <span>Revenue</span>
              <span>Ad Requests</span>
              <span>Ad Response</span>
              <span>Impressions</span>
          </div>


        </div>  
        <div className="dashboard2">
          <div className="display3">
              <div className="display4">
              <span>${revenue}</span>
              <span>{adRequestValue} M </span>
              <span>{adResponseValue} M</span>
              <span>{impressionsValue}</span>
          </div>
          </div>


        </div> 


        <div id="spacing"> </div>

        <div className="dashboard2">
          <div className="display2">
              <img  alt ="box" src="https://ak.picdn.net/shutterstock/videos/9273158/thumb/1.jpg"/>
              <h3> Dream 11 </h3>
              <span onClick={() => onChangeStatus("stats",2,"Dream 11")}> ➔ </span>
          </div>


        </div>
        <div className="dashboard2">
          <div className="display3">
              <span>Revenue</span>
              <span>Ad Requests</span>
              <span>Ad Response</span>
              <span>Impressions</span>
          </div>


        </div>  
        <div className="dashboard2">
          
              <div className="display4">
              <span>${revenue2}</span>
              <span>{adRequestValue2} M </span>
              <span>{adResponseValue2} M</span>
              <span>{impressionsValue2}</span>
          
          </div>


        </div> 


    

    </div>
		);
	




}



export default Home;