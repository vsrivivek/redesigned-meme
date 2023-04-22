import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../redux/Images/Logo.jpg'
import { connect } from 'react-redux';
// import YTtimer from './YTtimer';
import {scoreUpdate} from '../../redux';
import { resUpdate,resUpdatea,resoneUpdate,resoneUpdatea,restwoUpdate,restwoUpdatea,resthreeUpdate,resthreeUpdatea,resfourUpdate,resfourUpdatea,resfiveUpdate,resfiveUpdatea,ressixUpdate,ressixUpdatea,ressevenUpdate,ressevenUpdatea,reseightUpdate,reseightUpdatea,resnineUpdate,resnineUpdatea,restenUpdate,restenUpdatea,
  reselevenUpdate,reselevenUpdatea,restwelveUpdate,restwelveUpdatea,resthirteenUpdate,resthirteenUpdatea,resfourteenUpdate,resfourteenUpdatea,resfifteenUpdate,resfifteenUpdatea,ressixteenUpdate,ressixteenUpdatea,resseventeenUpdate,resseventeenUpdatea,reseighteenUpdate,reseighteenUpdatea,resnineteenUpdate,resnineteenUpdatea,restwentyUpdate,restwentyUpdatea,
  restwentyoneUpdate,restwentyoneUpdatea,restwentytwoUpdate,restwentytwoUpdatea,restwentythreeUpdate,restwentythreeUpdatea,restwentyfourUpdate,restwentyfourUpdatea,restwentyfiveUpdatea,restwentyfiveUpdate,restwentysixUpdatea,restwentysixUpdate,restwentysevenUpdate,restwentysevenUpdatea,restwentyeightUpdate,restwentyeightUpdatea,restwentynineUpdate,restwentynineUpdatea,
  resthirtyUpdate,resthirtyUpdatea,resthirtyoneUpdate,resthirtyoneUpdatea,resthirtytwoUpdate,resthirtytwoUpdatea,resthirtythreeUpdate,resthirtythreeUpdatea,resthirtyfourUpdate,resthirtyfourUpdatea,resthirtyfiveUpdate,resthirtyfiveUpdatea,resthirtysixUpdate,resthirtysixUpdatea,resthirtysevenUpdate,resthirtysevenUpdatea,resthirtyeightUpdate,resthirtyeightUpdatea,resthirtynineUpdate,resthirtynineUpdatea,
} from '../../redux/cake/cakeAction';




function YTtimeup(props) {

  const hstyle = {
    top:"50%",
  left: "44%",
  width:"850px",
  "text-align":"center",
  "margin-left":"390px",
      };
 const logoStyle = { 
   "margin-left":"10px",
   "align":"center",
   "border-radius":"25%",
   border:"1px solid purple"
 };
 const hStyle = {
   "height":"109px",
   "text-align":"center"
 };
 const bStyle = {
    "background-color":"purple",
    width:"1520px",
 };
     const bstyle = {
       "width":"135px",
       "height":"45px",
       "font-size":"large",
       "margin-left":"700px",
    };
    const bstyle1 = {
       "width":"90px",
       "height":"45px",
       "font-size":"large",
    "margin-left":"3px",
    };
     const dStyle = {
       display: "grid",
       "grid-template-columns":  "1fr 1fr",
     };
    const divStyle = {
       position: "fixed",
 top: "20%",
 left: "4%",   
 "font-size":"20px"
    };
      const navigate = useNavigate();
      const status=[props.status,props.statusone,props.statustwo,props.statusthree,props.statusfour,props.statusfive,props.statussix,props.statusseven,props.statuseight,props.statusnine,props.statusten,props.statuseleven,props.statustwelve,props.statusthirteen,props.statusfourteen,props.statusfifteen,props.statussixteen,props.statusseventeen,props.statuseighteen,props.statusnineteen,props.statustwenty,props.statustwentyone,props.statustwentytwo,props.statustwentythree,props.statustwentyfour,props.statustwentyfive,props.statustwentysix,props.statustwentyseven,props.statustwentyeight,props.statustwentynine,props.statusthirty,props.statusthirtyone,props.statusthirtytwo,props.statusthirtythree,props.statusthirtyfour,props.statusthirtyfive,props.statusthirtysix,props.statusthirtyseven,props.statusthirtyeight,props.statusthirtynine];
      const correct=["a","b","a","a", "c","c","a","c", "a","a","b","b", "b","d","b","a", "a","a","a","c", "c","b","b","b", "c","a","d","a", "b","a","a","a", "c","c","a","a", "d","d","b","b"]; 
const opted=[props.option,props.optionone,props.optiontwo,props.optionthree,props.optionfour,props.optionfive,props.optionsix,props.optionseven,props.optioneight,props.optionnine,props.optionten,props.optioneleven,props.optiontwelve,props.optionthirteen,props.optionfourteen,props.optionfifteen,props.optionsixteen,props.optionseventeen,props.optioneighteen,props.optionnineteen,props.optiontwenty,props.optiontwentyone,props.optiontwentytwo,props.optiontwentythree,props.optiontwentyfour,props.optiontwentyfive,props.optiontwentysix,props.optiontwentyseven,props.optiontwentyeight,props.optiontwentynine,props.optionthirty,props.optionthirtyone,props.optionthirtytwo,props.optionthirtythree,props.optionthirtyfour,props.optionthirtyfive,props.optionthirtysix,props.optionthirtyseven,props.optionthirtyeight,props.optionthirtynine];
  
const clickHandler = function handleClickNext(){
    // for(var i=0;i<40;i++)
    //     if(status[i]=== "Answered"){
            
    //         if(opted[i]===correct[i]){
    //           props.scoreUpdate();
    //       }
    //      } 
    if(status[0]==="Answered"||status[0]==="Marked For Review"){
      if(opted[0]===correct[0]){
        props.scoreUpdate();
          props.resUpdate();
      }if(opted[0]!==correct[0]){
        props.resUpdatea();
      }
    }
    if(status[1]==="Answered"||status[1]==="Marked For Review"){
      if(opted[1]===correct[1]){
        props.scoreUpdate();
          props.resoneUpdate();
      }if(opted[1]!==correct[1]){
        props.resoneUpdatea();
      }
    }
    if(status[2]==="Answered"||status[2]==="Marked For Review"){
      if(opted[2]===correct[2]){
        props.scoreUpdate();
          props.restwoUpdate();
      }if(opted[2]!==correct[2]){
        props.restwoUpdatea();
      }
    }
    if(status[3]==="Answered"||status[3]==="Marked For Review"){
      if(opted[3]===correct[3]){
        props.scoreUpdate();
          props.resthreeUpdate();
      }if(opted[3]!==correct[3]){
        props.resthreeUpdatea();
      }
    }
    if(status[4]==="Answered"||status[4]==="Marked For Review"){
      if(opted[4]===correct[4]){
        props.scoreUpdate();
          props.resfourUpdate();
      }if(opted[4]!==correct[4]){
        props.resfourUpdatea();
      }
    }
    if(status[5]==="Answered"||status[5]==="Marked For Review"){
      if(opted[5]===correct[5]){
        props.scoreUpdate();
          props.resfiveUpdate();
      }if(opted[5]!==correct[5]){
        props.resfiveUpdatea();
      }
    }
    if(status[6]==="Answered"||status[6]==="Marked For Review"){
      if(opted[6]===correct[6]){
        props.scoreUpdate();
          props.ressixUpdate();
      }if(opted[6]!==correct[6]){
        props.ressixUpdatea();
      }
    }
    if(status[7]==="Answered"||status[7]==="Marked For Review"){
      if(opted[7]===correct[7]){
        props.scoreUpdate();
          props.ressevenUpdate();
      }if(opted[7]!==correct[7]){
        props.ressevenUpdatea();
      }
    }
    if(status[8]==="Answered"||status[8]==="Marked For Review"){
      if(opted[8]===correct[8]){
        props.scoreUpdate();
          props.reseightUpdate();
      }if(opted[8]!==correct[8]){
        props.reseightUpdatea();
      }
    }
    if(status[9]==="Answered"||status[9]==="Marked For Review"){
      if(opted[9]===correct[9]){
        props.scoreUpdate();
          props.resnineUpdate();
      }if(opted[9]!==correct[9]){
        props.resnineUpdatea();
      }
    }
    if(status[10]==="Answered"||status[10]==="Marked For Review"){
      if(opted[10]===correct[10]){
        props.scoreUpdate();
          props.restenUpdate();
      }if(opted[10]!==correct[10]){
        props.restenUpdatea();
      }
    }
    if(status[11]==="Answered"||status[11]==="Marked For Review"){
      if(opted[11]===correct[11]){
        props.scoreUpdate();
          props.reselevenUpdate();
      }if(opted[11]!==correct[11]){
        props.reselevenUpdatea();
      }
    }
    if(status[12]==="Answered"||status[12]==="Marked For Review"){
      if(opted[12]===correct[12]){
        props.scoreUpdate();
          props.restwelveUpdate();
      }if(opted[12]!==correct[12]){
        props.restwelveUpdatea();
      }
    }
    if(status[13]==="Answered"||status[13]==="Marked For Review"){
      if(opted[13]===correct[13]){
        props.scoreUpdate();
          props.resthirteenUpdate();
      }if(opted[13]!==correct[13]){
        props.resthirteenUpdatea();
      }
    }
    if(status[14]==="Answered"||status[14]==="Marked For Review"){
      if(opted[14]===correct[14]){
        props.scoreUpdate();
          props.resfourteenUpdate();
      }if(opted[14]!==correct[14]){
        props.resfourteenUpdatea();
      }
    }
    if(status[15]==="Answered"||status[15]==="Marked For Review"){
      if(opted[15]===correct[15]){
        props.scoreUpdate();
          props.resfifteenUpdate();
      }if(opted[15]!==correct[15]){
        props.resfifteenUpdatea();
      }
    }
    if(status[16]==="Answered"||status[16]==="Marked For Review"){
      if(opted[16]===correct[16]){
        props.scoreUpdate();
          props.ressixteenUpdate();
      }if(opted[16]!==correct[16]){
        props.ressixteenUpdatea();
      }
    }
    if(status[17]==="Answered"||status[17]==="Marked For Review"){
      if(opted[17]===correct[17]){
        props.scoreUpdate();
          props.resseventeenUpdate();
      }if(opted[17]!==correct[17]){
        props.resseventeenUpdatea();
      }
    }
    if(status[18]==="Answered"||status[18]==="Marked For Review"){
      if(opted[18]===correct[18]){
        props.scoreUpdate();
          props.reseighteenUpdate();
      }if(opted[18]!==correct[18]){
        props.reseighteenUpdatea();
      }
    }
    if(status[19]==="Answered"||status[19]==="Marked For Review"){
      if(opted[19]===correct[19]){
        props.scoreUpdate();
          props.resnineteenUpdate();
      }if(opted[19]!==correct[19]){
        props.resnineteenUpdatea();
      }
    }
    if(status[20]==="Answered"||status[20]==="Marked For Review"){
      if(opted[20]===correct[20]){
        props.scoreUpdate();
          props.restwentyUpdate();
      }if(opted[20]!==correct[20]){
        props.restwentyUpdatea();
      }
    }
    if(status[21]==="Answered"||status[21]==="Marked For Review"){
      if(opted[21]===correct[21]){
        props.scoreUpdate();
          props.restwentyoneUpdate();
      }if(opted[21]!==correct[21]){
        props.restwentyoneUpdatea();
      }
    }
    if(status[22]==="Answered"||status[22]==="Marked For Review"){
      if(opted[22]===correct[22]){
        props.scoreUpdate();
          props.restwentytwoUpdate();
      }if(opted[22]!==correct[22]){
        props.restwentytwoUpdatea();
      }
    }
    if(status[23]==="Answered"||status[23]==="Marked For Review"){
      if(opted[23]===correct[23]){
        props.scoreUpdate();
          props.restwentythreeUpdate();
      }if(opted[23]!==correct[23]){
        props.restwentythreeUpdatea();
      }
    }
    if(status[24]==="Answered"||status[24]==="Marked For Review"){
      if(opted[24]===correct[24]){
        props.scoreUpdate();
          props.restwentyfourUpdate();
      }if(opted[24]!==correct[24]){
        props.restwentyfourUpdatea();
      }
    }
    if(status[25]==="Answered"||status[25]==="Marked For Review"){
      if(opted[25]===correct[25]){
        props.scoreUpdate();
          props.restwentyfiveUpdate();
      }if(opted[25]!==correct[25]){
        props.restwentyfiveUpdatea();
      }
    }
    if(status[26]==="Answered"||status[26]==="Marked For Review"){
      if(opted[26]===correct[26]){
        props.scoreUpdate();
          props.restwentysixUpdate();
      }if(opted[26]!==correct[26]){
        props.restwentysixUpdatea();
      }
    }
    if(status[27]==="Answered"||status[27]==="Marked For Review"){
      if(opted[27]===correct[27]){
        props.scoreUpdate();
          props.restwentysevenUpdate();
      }if(opted[27]!==correct[27]){
        props.restwentysevenUpdatea();
      }
    }
    if(status[28]==="Answered"||status[28]==="Marked For Review"){
      if(opted[28]===correct[28]){
        props.scoreUpdate();
          props.restwentyeightUpdate();
      }if(opted[28]!==correct[28]){
        props.restwentyeightUpdatea();
      }
    }
    if(status[29]==="Answered"||status[29]==="Marked For Review"){
      if(opted[29]===correct[29]){
        props.scoreUpdate();
          props.restwentynineUpdate();
      }if(opted[29]!==correct[29]){
        props.restwentynineUpdatea();
      }
    }
    if(status[30]==="Answered"||status[30]==="Marked For Review"){
      if(opted[30]===correct[30]){
        props.scoreUpdate();
          props.resthirtyUpdate();
      }if(opted[30]!==correct[30]){
        props.resthirtyUpdatea();
      }
    }
    if(status[31]==="Answered"||status[31]==="Marked For Review"){
      if(opted[31]===correct[31]){
        props.scoreUpdate();
          props.resthirtyoneUpdate();
      }if(opted[31]!==correct[31]){
        props.resthirtyoneUpdatea();
      }
    }
    if(status[32]==="Answered"||status[32]==="Marked For Review"){
      if(opted[32]===correct[32]){
        props.scoreUpdate();
          props.resthirtytwoUpdate();
      }if(opted[32]!==correct[32]){
        props.resthirtytwoUpdatea();
      }
    }
    if(status[33]==="Answered"||status[33]==="Marked For Review"){
      if(opted[33]===correct[33]){
        props.scoreUpdate();
          props.resthirtythreeUpdate();
      }if(opted[33]!==correct[33]){
        props.resthirtythreeUpdatea();
      }
    }
    if(status[34]==="Answered"||status[34]==="Marked For Review"){
      if(opted[34]===correct[34]){
        props.scoreUpdate();
          props.resthirtyfourUpdate();
      }if(opted[34]!==correct[34]){
        props.resthirtyfourUpdatea();
      }
    }
    if(status[35]==="Answered"||status[35]==="Marked For Review"){
      if(opted[35]===correct[35]){
        props.scoreUpdate();
          props.resthirtyfiveUpdate();
      }if(opted[35]!==correct[35]){
        props.resthirtyfiveUpdatea();
      }
    }
    if(status[36]==="Answered"||status[36]==="Marked For Review"){
      if(opted[36]===correct[36]){
        props.scoreUpdate();
          props.resthirtysixUpdate();
      }if(opted[36]!==correct[36]){
        props.resthirtysixUpdatea();
      }
    }
    if(status[37]==="Answered"||status[37]==="Marked For Review"){
      if(opted[37]===correct[37]){
        props.scoreUpdate();
          props.resthirtysevenUpdate();
      }if(opted[37]!==correct[37]){
        props.resthirtysevenUpdatea();
      }
    }
    if(status[38]==="Answered"||status[38]==="Marked For Review"){
      if(opted[38]===correct[38]){
        props.scoreUpdate();
          props.resthirtyeightUpdate();
      }if(opted[38]!==correct[38]){
        props.resthirtyeightUpdatea();
      }
    }
    if(status[39]==="Answered"||status[39]==="Marked For Review"){
      if(opted[39]===correct[39]){
        props.scoreUpdate();
          props.resthirtynineUpdate();
      }if(opted[39]!==correct[39]){
        props.resthirtynineUpdatea();
      }
    } 
         
         
     }

return (
    <div><div style={bStyle}>
    <h1 style ={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1> 
    </div><div>
          <div><h2 style ={hstyle}>Dear {props.name}, The time is up!!! Click the button below to go to the Score Page</h2></div>
<div style={dStyle}><button style={bstyle} onClick={()=>(clickHandler)(navigate('/YTscore'))}>Confirm</button></div>
</div>
<p>{props.score}</p>
</div>
  )
}
const mapDispatchToProps=dispatch=>{
    return{
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
   //     nextOne:()=>dispatch(nextOne()),
   //     nextTwo:()=>dispatch(nextTwo()),
   //     nextThree:()=>dispatch(nextThree()),
   //     nextFour:()=>dispatch(nextFour()),
   //     mfrOne:()=>dispatch(mfrOne()),
   //     mfrTwo:()=>dispatch(mfrTwo()),
   //     mfrThree:()=>dispatch(mfrThree()),
   //     mfrFour:()=>dispatch(mfrFour()),
   //     mfrFive:()=>dispatch(mfrFive()),
   //     mfrSix:()=>dispatch(mfrSix()),
   //     mfrSeven:()=>dispatch(mfrSeven()),
   //     optAthirty:()=>dispatch(optAthirty()),
   //     optBthirty:()=>dispatch(optBthirty()),
   //     optCthirty:()=>dispatch(optCthirty()),
   //     optDthirty:()=>dispatch(optDthirty()),
   //     statUpdatethirty:()=>dispatch(statUpdatethirty()),
   //     statUpdateAthirty:()=>dispatch(statUpdateAthirty()),
   //     statUpdateMthirty:()=>dispatch(statUpdateMthirty()),
   //     statUpdateNthirty:()=>dispatch(statUpdateNthirty()),
   //     statUpdateKthirty:()=>dispatch(statUpdateKthirty()),
   //     btnOnethirty:()=>dispatch(btnOnethirty()),
   //     btnTwothirty:()=>dispatch(btnTwothirty()),
   //     btnThreethirty:()=>dispatch(btnThreethirty()),
   //     btnFourthirty:()=>dispatch(btnFourthirty()),
       
    }
   
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
    
    export default connect(mapStateToProps,mapDispatchToProps) (YTtimeup)