import React from 'react'
import { useNavigate } from 'react-router-dom'
 import { timerUpdate } from '../redux'
 import { connect } from 'react-redux'
 
 import { Routes, Route } from 'react-router-dom';

 

 function Welcome(props) {
 
  const navigate = useNavigate();
     
       const date=new Date();
  let timer = date.getHours() + ":" + date.getMinutes()+ ":" + date.getSeconds();
         var a = timer.split(':'); 
     var timeOne = ((+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]))*1000; 
     // var timeTwo = timeOne+9600000;
var timeTwo = timeOne; 
    

      
 return (<>
 
  
  <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/one')))}>start</button>
  
  
  </>
)
}

const mapStateToProps=state=>{
 return{
  
      seconds:state.seconds
 }
}
const mapDispatchToProps=dispatch=>{
 return{
           timerUpdate : time => dispatch(timerUpdate(time))
    
 }

   }
 export default connect(mapStateToProps,mapDispatchToProps) (Welcome)
