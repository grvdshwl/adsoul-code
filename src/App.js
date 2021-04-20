import {React,Component} from 'react';
import './App.css';
import Home from "./Home.js";
import Stats from "./Stats.js"

class App extends Component {

  constructor(){
    super();

    this.state={
      status:"",
      index:0,
      name:"",
      url:""

    }

  }

  changeStatus = (status,value,app,url) =>{

    this.setState({
      status:status,
      index:value,
      name:app,
      
    })

    if(value===1){
      this.setState({
        url:"https://www.wsfcu.com/wp-content/uploads/Decorative-Orange-Box-Slider.jpg"
      })
    }else{
       this.setState({
        url:"https://ak.picdn.net/shutterstock/videos/9273158/thumb/1.jpg"
      })
    }



    
    }

  

  render(){
    return (
     (this.state.status==="stats")?<Stats 
     setURL = {this.state.url}
     setName={this.state.name} 
     setIndex={this.state.index} 
     onChangeStatus ={this.changeStatus}
     />:<Home 
     onChangeStatus ={this.changeStatus}
    

     />
    
  );

  }  
}

export default App;
