import React, { useEffect, useState } from "react";
import { timerUpdate } from '../redux'
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";


function Timer(props) {
  const navigate = useNavigate();
  const navi=()=>{
    navigate('/score')
  }
  
  const calculateTimeLeft = () => {
     const currentDate = new Date();
     let timeNow = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    var a = timeNow.split(':'); 
     var time = ((+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]))*1000; 

  
    var dateOne=props.seconds;

    let difference =  props.seconds- time;


    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    else if(difference===0){
      navi()
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" : "}
      </span>
    );
  });
  return (
    <div>
      {/* <p> Time left: {timerComponents.length ? timerComponents : <span>Time's up!</span>}</p> */}
      <p> Time left: { timerComponents }</p>
    
    </div>
  );
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
    export default connect(mapStateToProps,mapDispatchToProps) (Timer)
 