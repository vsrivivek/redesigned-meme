import React from 'react';
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux';
import { resUpdate,resUpdatea,resoneUpdate,resoneUpdatea,restwoUpdate,restwoUpdatea,resthreeUpdate,resthreeUpdatea,resfourUpdate,resfourUpdatea,resfiveUpdate,resfiveUpdatea,ressixUpdate,ressixUpdatea,ressevenUpdate,ressevenUpdatea,reseightUpdate,reseightUpdatea,resnineUpdate,resnineUpdatea,restenUpdate,restenUpdatea,
  reselevenUpdate,reselevenUpdatea,restwelveUpdate,restwelveUpdatea,resthirteenUpdate,resthirteenUpdatea,resfourteenUpdate,resfourteenUpdatea,resfifteenUpdate,resfifteenUpdatea,ressixteenUpdate,ressixteenUpdatea,resseventeenUpdate,resseventeenUpdatea,reseighteenUpdate,reseighteenUpdatea,resnineteenUpdate,resnineteenUpdatea,restwentyUpdate,restwentyUpdatea,
  restwentyoneUpdate,restwentyoneUpdatea,restwentytwoUpdate,restwentytwoUpdatea,restwentythreeUpdate,restwentythreeUpdatea,restwentyfourUpdate,restwentyfourUpdatea,restwentyfiveUpdatea,restwentyfiveUpdate,restwentysixUpdatea,restwentysixUpdate,restwentysevenUpdate,restwentysevenUpdatea,restwentyeightUpdate,restwentyeightUpdatea,restwentynineUpdate,restwentynineUpdatea,
  resthirtyUpdate,resthirtyUpdatea,resthirtyoneUpdate,resthirtyoneUpdatea,resthirtytwoUpdate,resthirtytwoUpdatea,resthirtythreeUpdate,resthirtythreeUpdatea,resthirtyfourUpdate,resthirtyfourUpdatea,resthirtyfiveUpdate,resthirtyfiveUpdatea,resthirtysixUpdate,resthirtysixUpdatea,resthirtysevenUpdate,resthirtysevenUpdatea,resthirtyeightUpdate,resthirtyeightUpdatea,resthirtynineUpdate,resthirtynineUpdatea,
} from '../../redux/cake/cakeAction';
import Logo from '../../redux/Images/Logo.jpg'




function ZPscore(props) {
  const myStyle = {
    border: "2px solid purple",
  width: "600px",
  height: "200px",
  margin:"0 0 0 462px",
  "border-collapse":"collapse",
  left:"100%",
  top:"50%"
  };
  const mystyle = {
    "border-bottom": " 1px solid purple",
    "border-collapse":"collapse",
    "margin":"0 0 0 120px"
  };
  const mystyl = {
    "border-right": " 1px solid purple",
    "border-collapse":"collapse",
    "padding":"5px",
    "width":"225px"
  };
  const mystyl1= {
    "border-right": " 1px solid purple",
    "border-collapse":"collapse",
    "padding":"5px",
    "width":"50px",
    "text-align":"center"
  };
  const logoStyle = { 
    "align":"center",
    "border-radius":"25%",
    border:"1px solid purple"
  };
  const sStyle = { 
    "text-align":"center",
    "margin-left":"540px",
    "width":"450px",
  };
  const pstyle = { 
    "text-align":"center",
    "font-color":"aquamarine"
  };
  const pstyle1 = { 
    "width":"90px",
    "height":"45px",
    "text-align":"center",
  };
  const hStyle = {
    "height":"109px",
    "text-align":"center",
    width:"1520px"
  };
  const bStyle = {
     "background-color":"purple",
     width:"1520px"
  };
  const hstyle = {
    "text-align":"center",
    width:"1520px",
  };
  const wStyle1 = {
    "height":"45px",
    "width":"135px",
    "font-size":"large",
    "margin-left":"695px",
  };
  const navigate=useNavigate();
const status=[props.status,props.statusone,props.statustwo,props.statusthree,props.statusfour,props.statusfive,props.statussix,props.statusseven,props.statuseight,props.statusnine,props.statusten,props.statuseleven,props.statustwelve,props.statusthirteen,props.statusfourteen,props.statusfifteen,props.statussixteen,props.statusseventeen,props.statuseighteen,props.statusnineteen,props.statustwenty,props.statustwentyone,props.statustwentytwo,props.statustwentythree,props.statustwentyfour,props.statustwentyfive,props.statustwentysix,props.statustwentyseven,props.statustwentyeight,props.statustwentynine,props.statusthirty,props.statusthirtyone,props.statusthirtytwo,props.statusthirtythree,props.statusthirtyfour,props.statusthirtyfive,props.statusthirtysix,props.statusthirtyseven,props.statusthirtyeight,props.statusthirtynine];
const correct=["b","c","a","a", "a","d","c","b", "d","b","a","b", "a","b","c","b", "a","a","b","d", "a","c","a","a", "a","a","c","a", "b","d","b","c", "d","d","d","b", "c","a","a","a"]; 
const opted=[props.option,props.optionone,props.optiontwo,props.optionthree,props.optionfour,props.optionfive,props.optionsix,props.optionseven,props.optioneight,props.optionnine,props.optionten,props.optioneleven,props.optiontwelve,props.optionthirteen,props.optionfourteen,props.optionfifteen,props.optionsixteen,props.optionseventeen,props.optioneighteen,props.optionnineteen,props.optiontwenty,props.optiontwentyone,props.optiontwentytwo,props.optiontwentythree,props.optionfour,props.optiontwentyfive,props.optiontwentysix,props.optiontwentyseven,props.optiontwentyeight,props.optiontwentynine,props.optionthirty,props.optionthirtyone,props.optionthirtytwo,props.optionthirtythree,props.optionthirtyfour,props.optionthirtyfive,props.optionthirtysix,props.optionthirtyseven,props.optionthirtyeight,props.optionthirtynine];
const [buttonState,setButtonState]= React.useState(false)
const[score,setScore]=React.useState("")
const[btn,setBtn]=React.useState("");
const[para,setPara]=React.useState("");
const parag=<p style={sStyle}>Click the button below to get the Performance Summary</p>;
const button=<button style={wStyle1} onClick={()=>navigate('/ZPsummary')}>Summary</button>;
const setbtn=function setBtn(){
  setButtonState(true)
}

 const clickHandler = function handleClickNext(){ 
  setScore("Dear\u00A0" +props.name+ ", You Scored\u00A0" +props.score+ "\u00A0Out of 40"
  )
  setPara(parag)
   setBtn(button)
       setbtn()
   }
 
 return (<div>
   <div className={props.header} style={bStyle}>
     <h1 style={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1> 
           </div>
<h2 style={sStyle}>Exam Summary</h2>
           <table style={myStyle}>
  <tr  style={mystyle}>
    <td style={mystyl}><b>Not Visited</b></td>
    <td style={mystyl1}>{props.notVisited}</td>
  </tr>
  <tr  style={mystyle}>
    <td style={mystyl}><b>Not Answered</b></td>
    <td style={mystyl1}>{props.notAnswered}</td>
  </tr>
  <tr  style={mystyle}>
    <td style={mystyl}><b>Marked</b></td>
    <td style={mystyl1}>{props.marked}</td>
  </tr>
  <tr  style={mystyle}>
    <td style={mystyl}><b>Marked For Review</b></td>
    <td style={mystyl1}>{props.markedForReview}</td>
  </tr>
  <tr  style={mystyle}>
    <td style={mystyl}><b>Answered</b></td>
    <td style={mystyl1}>{props.answered}</td>
  </tr>
  <tr  style={mystyle}>
    <td style={mystyl}><b>Total</b></td>
    <td style={mystyl1}>40</td>
  </tr>
</table>
    <h3 style={hstyle}> Dear <b>{props.name}</b>, your Test is submitted succesfully!!!! Please click the button to get your score.</h3><div ><button style ={wStyle1} onClick={()=>(clickHandler)(setbtn)} disabled={buttonState}>Get Score</button></div>
    <h4 style ={pstyle}>{score}</h4>   
    <p>{para}</p>
<h4>{btn}</h4> 
    </div>)
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
      notVisited:state.notVisited,
        notAnswered:state.notAnswered,
        marked:state.marked,
        markedForReview:state.markedForReview,
        answered:state.answered,
        name:state.name

    }
    
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
           restwentytwpUpdate:()=>dispatch(restwentytwoUpdate()),
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
    export default connect(mapStateToProps,mapDispatchToProps) (ZPscore)