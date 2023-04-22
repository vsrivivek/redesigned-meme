import React, { useEffect, useState } from "react";
import { timerUpdate } from "../../redux";
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Logo from '../../redux/Images/Logo.jpg'
import {scoreUpdate} from '../../redux';
import { resUpdate,resUpdatea,resoneUpdate,resoneUpdatea,restwoUpdate,restwoUpdatea,resthreeUpdate,resthreeUpdatea,resfourUpdate,resfourUpdatea,resfiveUpdate,resfiveUpdatea,ressixUpdate,ressixUpdatea,ressevenUpdate,ressevenUpdatea,reseightUpdate,reseightUpdatea,resnineUpdate,resnineUpdatea,restenUpdate,restenUpdatea,
  reselevenUpdate,reselevenUpdatea,restwelveUpdate,restwelveUpdatea,resthirteenUpdate,resthirteenUpdatea,resfourteenUpdate,resfourteenUpdatea,resfifteenUpdate,resfifteenUpdatea,ressixteenUpdate,ressixteenUpdatea,resseventeenUpdate,resseventeenUpdatea,reseighteenUpdate,reseighteenUpdatea,resnineteenUpdate,resnineteenUpdatea,restwentyUpdate,restwentyUpdatea,
  restwentyoneUpdate,restwentyoneUpdatea,restwentytwoUpdate,restwentytwoUpdatea,restwentythreeUpdate,restwentythreeUpdatea,restwentyfourUpdate,restwentyfourUpdatea,restwentyfiveUpdatea,restwentyfiveUpdate,restwentysixUpdatea,restwentysixUpdate,restwentysevenUpdate,restwentysevenUpdatea,restwentyeightUpdate,restwentyeightUpdatea,restwentynineUpdate,restwentynineUpdatea,
  resthirtyUpdate,resthirtyUpdatea,resthirtyoneUpdate,resthirtyoneUpdatea,resthirtytwoUpdate,resthirtytwoUpdatea,resthirtythreeUpdate,resthirtythreeUpdatea,resthirtyfourUpdate,resthirtyfourUpdatea,resthirtyfiveUpdate,resthirtyfiveUpdatea,resthirtysixUpdate,resthirtysixUpdatea,resthirtysevenUpdate,resthirtysevenUpdatea,resthirtyeightUpdate,resthirtyeightUpdatea,resthirtynineUpdate,resthirtynineUpdatea,
} from '../../redux/cake/cakeAction';





function PKtimer(props) {
  const navigate = useNavigate();
  const status=[props.status,props.statusone,props.statustwo,props.statusthree,props.statusfour,props.statusfive,props.statussix,props.statusseven,props.statuseight,props.statusnine,props.statusten,props.statuseleven,props.statustwelve,props.statusthirteen,props.statusfourteen,props.statusfifteen,props.statussixteen,props.statusseventeen,props.statuseighteen,props.statusnineteen,props.statustwenty,props.statustwentyone,props.statustwentytwo,props.statustwentythree,props.statustwentyfour,props.statustwentyfive,props.statustwentysix,props.statustwentyseven,props.statustwentyeight,props.statustwentynine,props.statusthirty,props.statusthirtyone,props.statusthirtytwo,props.statusthirtythree,props.statusthirtyfour,props.statusthirtyfive,props.statusthirtysix,props.statusthirtyseven,props.statusthirtyeight,props.statusthirtynine];
  const correct=["d","d","d","d", "c","a","c","c", "a","a","b","d", "d","c","a","a", "b","c","a","d", "c","d","d","c", "c","c","a","c", "b","c","b","a", "c","a","c","b", "a","a","b","b"]; 
const opted=[props.option,props.optionone,props.optiontwo,props.optionthree,props.optionfour,props.optionfive,props.optionsix,props.optionseven,props.optioneight,props.optionnine,props.optionten,props.optioneleven,props.optiontwelve,props.optionthirteen,props.optionfourteen,props.optionfifteen,props.optionsixteen,props.optionseventeen,props.optioneighteen,props.optionnineteen,props.optiontwenty,props.optiontwentyone,props.optiontwentytwo,props.optiontwentythree,props.optiontwentyfour,props.optiontwentyfive,props.optiontwentysix,props.optiontwentyseven,props.optiontwentyeight,props.optiontwentynine,props.optionthirty,props.optionthirtyone,props.optionthirtytwo,props.optionthirtythree,props.optionthirtyfour,props.optionthirtyfive,props.optionthirtysix,props.optionthirtyseven,props.optionthirtyeight,props.optionthirtynine];

  function navi(){
    
    navigate('/PKtimeup') 
  }

  
  const calculateTimeLeft = () => {
     const currentDate = new Date();
     let timeNow = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    var a = timeNow.split(':'); 
     var time = ((+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]))*1000; 

  
    var dateOne=props.seconds;

    let difference =  props.seconds- time;


    let timeLeft = {};

    if (difference >0 && difference <= 2402000 ) {
      timeLeft = {
         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    else if (difference > 2402000 ) {
      navigate('/PKtimeup')
    }
    else  {
      navigate('/PKtimeup')
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
      <p> Time left: { timerComponents }</p>
    
    </div>
  );
}

const mapStateToProps=state=>{
    return{
      option:state.option,
      optionone:state.optionone,
      optiontwo:state.optiontwo,
      optionthree:state.optionthree,
      optionfour:state.optionfour,
      optionfive:state.optionfive,
      optionsix:state.optionsix,
      optionseven:state.optionseven,
      optioneight:state.optioneight,
      optionnine:state.optionnine,
      optionten:state.optionten,
      optioneleven:state.optioneleven,
      optiontwelve:state.optiontwelve,
      optionthirteen:state.optionthirteen,
      optionfourteen:state.optionfourteen,
      optionfifteen:state.optionfifteen,
      optionsixteen:state.optionsixteen,
      optionseventeen:state.optionseventeen,
      optioneighteen:state.optioneighteen,
      optionnineteen:state.optionnineteen,
      optiontwenty:state.optiontwenty,
      optiontwentyone:state.optiontwentyone,
      optiontwentytwo:state.optiontwentytwo,
      optiontwentythree:state.optiontwentythree,
      optiontwentyfour:state.optiontwentyfour,
      optiontwentyfive:state.optiontwentyfive,
      optiontwentysix:state.optiontwentysix,
      optiontwentyseven:state.optiontwentyseven,
      optiontwentyeight:state.optiontwentyeight,
      optiontwentynine:state.optiontwentynine,
      optionthirty:state.optionthirty,
      optionthirtyone:state.optionthirtyone,
      optionthirtytwo:state.optionthirtytwo,
      optionthirtythree:state.optionthirtythree,
      optionthirtyfour:state.optionthirtyfour,
      optionthirtyfive:state.optionthirtyfive,
      optionthirtysix:state.optionthirtysix,
      optionthirtyseven:state.optionthirtyseven,
      optionthirtyeight:state.optionthirtyeight,
      optionthirtynine:state.optionthirtynine,
      status:state.status,
      statusone:state.statusone,
      statustwo:state.statustwo,
      statusthree:state.statusthree,
      statusfour:state.statusfour,
      statusfive:state.statusfive,
      statussix:state.statussix,
      statusseven:state.statusseven,
      statuseight:state.statuseight,
      statusnine:state.statusnine,
      statusten:state.statusten,
      statuseleven:state.statuseleven,
      statustwelve:state.statustwelve,
      statusthirteen:state.statusthirteen,
      statusfourteen:state.statusfourteen,
      statusfifteen:state.statusfifteen,
      statussixteen:state.statussixteen,
      statusseventeen:state.statusseventeen,
      statuseighteen:state.statuseighteen,
      statusnineteen:state.statusnineteen,
      statustwenty:state.statustwenty,
      statustwentyone:state.statustwentyone,
      statustwentytwo:state.statustwentytwo,
      statustwentythree:state.statustwentythree,
      statustwentyfour:state.statustwentyfour,
      statustwentyfive:state.statustwentyfive,
      statustwentysix:state.statustwentysix,
      statustwentyseven:state.statustwentyseven,
      statustwentyeight:state.statustwentyeight,
      statustwentynine:state.statustwentynine,
      statusthirty:state.statusthirty,
      statusthirtyone:state.statusthirtyone,
      statusthirtytwo:state.statusthirtytwo,
      statusthirtythree:state.statusthirtythree,
      statusthirtyfour:state.statusthirtyfour,
      statusthirtyfive:state.statusthirtyfive,
      statusthirtysix:state.statusthirtysix,
      statusthirtyseven:state.statusthirtyseven,
      statusthirtyeight:state.statusthirtyeight,
      statusthirtynine:state.statusthirtynine,
      score:state.score,
      seconds:state.seconds,
      name:state.name,
      notVisited:state.notVisited,
        notAnswered:state.notAnswered,
        marked:state.marked,
        markedForReview:state.markedForReview,
        answered:state.answered,
    }
 }
   const mapDispatchToProps=dispatch=>{
    return{
      timerUpdate : time => dispatch(timerUpdate(time)),
      scoreUpdate:()=>dispatch(scoreUpdate()),
   resUpdate:()=>dispatch(resUpdate()),
   resUpdatea:()=>dispatch(resUpdatea()),
   resoneUpdate:()=>dispatch(resoneUpdate()),
   resoneUpdatea:()=>dispatch(resoneUpdatea()),
   restwoUpdate:()=>dispatch(restwoUpdate()),
   restwoUpdatea:()=>dispatch(restwoUpdatea()),
   resthreeUpdate:()=>dispatch(resthreeUpdate()),
   resthreeUpdatea:()=>dispatch(resthreeUpdatea()),
   resfourUpdate:()=>dispatch(resfourUpdate()),
   resfourUpdatea:()=>dispatch(resfourUpdatea()),
   resfiveUpdate:()=>dispatch(resfiveUpdate()),
   resfiveUpdatea:()=>dispatch(resfiveUpdatea()),
   ressixUpdate:()=>dispatch(ressixUpdate()),
   ressixUpdatea:()=>dispatch(ressixUpdatea()),
   ressevenUpdate:()=>dispatch(ressevenUpdate()),
   ressevenUpdatea:()=>dispatch(ressevenUpdatea()),
   reseightUpdate:()=>dispatch(reseightUpdate()),
   reseightUpdatea:()=>dispatch(reseightUpdatea()),
   resnineUpdate:()=>dispatch(resnineUpdate()),
   resnineUpdatea:()=>dispatch(resnineUpdatea()),
   restenUpdate:()=>dispatch(restenUpdate()),
   restenUpdatea:()=>dispatch(restenUpdatea()),
   reselevenUpdate:()=>dispatch(reselevenUpdate()),
   reselevenUpdatea:()=>dispatch(reselevenUpdatea()),
   restwelveUpdate:()=>dispatch(restwelveUpdate()),
   restwelveUpdatea:()=>dispatch(restwelveUpdatea()),
   resthirteenUpdate:()=>dispatch(resthirteenUpdate()),
   resthirteenUpdatea:()=>dispatch(resthirteenUpdatea()),
   resfourteenUpdatea:()=>dispatch(resfourteenUpdatea()),
   resfourteenUpdate:()=>dispatch(resfourteenUpdate()),
   resfifteenUpdatea:()=>dispatch(resfifteenUpdatea()),
   resfifteenUpdate:()=>dispatch(resfifteenUpdate()),
   ressixteenUpdatea:()=>dispatch(ressixteenUpdatea()),
   ressixteenUpdate:()=>dispatch(ressixteenUpdate()),
   resseventeenUpdatea:()=>dispatch(resseventeenUpdatea()),
   resseventeenUpdate:()=>dispatch(resseventeenUpdate()),
   reseighteenUpdatea:()=>dispatch(reseighteenUpdatea()),
   reseighteenUpdate:()=>dispatch(reseighteenUpdate()),
   resnineteenUpdate:()=>dispatch(resnineteenUpdate()),
   resnineteenUpdatea:()=>dispatch(resnineteenUpdatea()),
   restwentyUpdate:()=>dispatch(restwentyUpdate()),
   restwentyUpdatea:()=>dispatch(restwentyUpdatea()),
   restwentyoneUpdate:()=>dispatch(restwentyoneUpdate()),
   restwentyoneUpdatea:()=>dispatch(restwentyoneUpdatea()),
   restwentytwoUpdate:()=>dispatch(restwentytwoUpdate()),
   restwentytwoUpdatea:()=>dispatch(restwentytwoUpdatea()),
   restwentythreeUpdate:()=>dispatch(restwentythreeUpdate()),
   restwentythreeUpdatea:()=>dispatch(restwentythreeUpdatea()),
   restwentyfourUpdate:()=>dispatch(restwentyfourUpdate()),
   restwentyfourUpdatea:()=>dispatch(restwentyfourUpdatea()),
   restwentyfiveUpdate:()=>dispatch(restwentyfiveUpdate()),
   restwentyfiveUpdatea:()=>dispatch(restwentyfiveUpdatea()),
   restwentysixUpdate:()=>dispatch(restwentysixUpdate()),
   restwentysixUpdatea:()=>dispatch(restwentysixUpdatea()),
   restwentysevenUpdate:()=>dispatch(restwentysevenUpdate()),
   restwentysevenUpdatea:()=>dispatch(restwentysevenUpdatea()),
   restwentyeightUpdate:()=>dispatch(restwentyeightUpdate()),
   restwentyeightUpdatea:()=>dispatch(restwentyeightUpdatea()),
   restwentynineUpdate:()=>dispatch(restwentynineUpdate()),
   restwentynineUpdatea:()=>dispatch(restwentynineUpdatea()),
   resthirtyUpdate:()=>dispatch(resthirtyUpdate()),
   resthirtyUpdatea:()=>dispatch(resthirtyUpdatea()),
   resthirtyoneUpdate:()=>dispatch(resthirtyoneUpdate()),
   resthirtyoneUpdatea:()=>dispatch(resthirtyoneUpdatea()),
   resthirtytwoUpdate:()=>dispatch(resthirtytwoUpdate()),
   resthirtytwoUpdatea:()=>dispatch(resthirtytwoUpdatea()),
   resthirtythreeUpdate:()=>dispatch(resthirtythreeUpdate()),
   resthirtythreeUpdatea:()=>dispatch(resthirtythreeUpdatea()),
   resthirtyfourUpdate:()=>dispatch(resthirtyfourUpdate()),
   resthirtyfourUpdatea:()=>dispatch(resthirtyfourUpdatea()),
   resthirtyfiveUpdate:()=>dispatch(resthirtyfiveUpdate()),
   resthirtyfiveUpdatea:()=>dispatch(resthirtyfiveUpdatea()),
   resthirtysixUpdate:()=>dispatch(resthirtysixUpdate()),
   resthirtysixUpdatea:()=>dispatch(resthirtysixUpdatea()),
   resthirtysevenUpdate:()=>dispatch(resthirtysevenUpdate()),
   resthirtysevenUpdatea:()=>dispatch(resthirtysevenUpdatea()),
   resthirtyeightUpdate:()=>dispatch(resthirtyeightUpdate()),
   resthirtyeightUpdatea:()=>dispatch(resthirtyeightUpdatea()),
   resthirtynineUpdate:()=>dispatch(resthirtynineUpdate()),
   resthirtynineUpdatea:()=>dispatch(resthirtynineUpdatea()),

       
    }
   
      }
    export default connect(mapStateToProps,mapDispatchToProps) (PKtimer)
 