import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux';
import Logo from '../../redux/Images/Logo.jpg'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { statUpdateref } from '../../redux/cake/cakeAction';






function  YMsummary(props) {
  const logoStyle = { 
    "align":"center",
    "border-radius":"25%",
    border:"1px solid purple",
  };
  const hStyle = {
    "height":"109px",
    "text-align":"center",
    "background-color":"purple",
  };
  const bStyle = {
     "background-color":"purple",
  };
  const bstyle = {
    "margin":"0 0 50px 700px",
    "width":"300px",
"height":"45px",
"font-size":"large"
 };
  const wStyle = {
    "width": "195px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const fStyle = {
    "float": "right",
    "margin":"0 20px 0 10px",
    "width":"90px",
    "height":"30px",
    "font-size":"medium",
  };
  const navigate=useNavigate();
  const exportRef = useRef();
  // const navigate=useNavigate();
const status=[props.status,props.statusone,props.statustwo,props.statusthree,props.statusfour,props.statusfive,props.statussix,props.statusseven,props.statuseight,props.statusnine,props.statusten,props.statuseleven,props.statustwelve,props.statusthirteen,props.statusfourteen,props.statusfifteen,props.statussixteen,props.statusseventeen,props.statuseighteen,props.statusnineteen,props.statustwenty,props.statustwentyone,props.statustwentytwo,props.statustwentythree,props.statustwentyfour,props.statustwentyfive,props.statustwentysix,props.statustwentyseven,props.statustwentyeight,props.statustwentynine,props.statusthirty,props.statusthirtyone,props.statusthirtytwo,props.statusthirtythree,props.statusthirtyfour,props.statusthirtyfive,props.statusthirtysix,props.statusthirtyseven,props.statusthirtyeight,props.statusthirtynine];
const correct=["d","d","a","a", "c","a","d","b", "c","a","d","c", "c","c","b","b", "a","c","b","c", "d","d","a","c", "b","a","d","b", "b","d","b","b", "d","d","b","d", "b","b","b","b"]; 
const opted=[props.option,props.optionone,props.optiontwo,props.optionthree,props.optionfour,props.optionfive,props.optionsix,props.optionseven,props.optioneight,props.optionnine,props.optionten,props.optioneleven,props.optiontwelve,props.optionthirteen,props.optionfourteen,props.optionfifteen,props.optionsixteen,props.optionseventeen,props.optioneighteen,props.optionnineteen,props.optiontwenty,props.optiontwentyone,props.optiontwentytwo,props.optiontwentythree,props.optiontwentyfour,props.optiontwentyfive,props.optiontwentysix,props.optiontwentyseven,props.optiontwentyeight,props.optiontwentynine,props.optionthirty,props.optionthirtyone,props.optionthirtytwo,props.optionthirtythree,props.optionthirtyfour,props.optionthirtyfive,props.optionthirtysix,props.optionthirtyseven,props.optionthirtyeight,props.optionthirtynine];
const [ans, setAns] = React.useState([]);
const exportAsImage = async (el, imageFileName) => {
  const element = document.getElementById('divToPrint');
  const canvas = await html2canvas(element);
  const image = canvas.toDataURL("Image/png", 1.0);
  downloadImage(image, imageFileName);
  };
  const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement("a");
  fakeLink.style = "display:none;";
  fakeLink.download = fileName;
  
  fakeLink.href = blob;
  
  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);
  
  fakeLink.remove();
  };
  const clickHanlder = function handleClickNext(){
    props.statUpdateref();
    }

  return (
    <div>
      <div id="divToPrint" >
      <h1 style={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1>
      <h2 style={
      {
  textAlign:"center",
  backgroundColor:"#A7CC13"

      }
    }>Performance Summary- Group 17 Elements</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>
      <p><b>Question No.1:</b><br></br>The electronic configuration of halogen is<br></br>
      Option a:- <b>ns<sup>2</sup></b><br></br>
      Option b:- <b>ns<sup>2</sup> np<sup>3</sup></b><br></br>
      Option c:- <b>ns<sup>2</sup> np<sup>4</sup></b><br></br>
      Option d:- <b>ns<sup>2</sup> np<sup>5</sup></b><br></br> 
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>Which of the following has the lowest ionisation potential?
      <br></br>
      Option a:- <b>F<sub>2</sub></b><br></br>
      Option b:- <b>Cl<sub>2</sub></b><br></br>
      Option c:- <b>Br<sub>2</sub></b><br></br>
      Option d:- <b>I<sub>2</sub></b><br></br>
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>2Br<sup>-</sup>+X<sub>2</sub>{'\u2192'}Br<sub>2</sub>+2X<sup>-</sup>. In this reaction X<sub>2</sub> is<br></br>
      Option a:- <b>Cl<sub>2</sub></b><br></br>
      Option b:- <b>O<sub>2</sub></b><br></br>
      Option c:- <b>I<sub>2</sub></b><br></br>
      Option d:- <b>N<sub>2</sub></b><br></br>         
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b><br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>The halogen which is most reactive in the halogenation of alkanes under sunlight is<br></br>
      Option a:- <b>Cl<sub>2</sub></b><br></br>
      Option b:- <b>Br<sub>2</sub></b><br></br>
      Option c:- <b>I<sub>2</sub></b><br></br>
      Option d:- <b>All</b><br></br> 
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>The correct order of bond dissociation enthalpies of halogens(X<sub>2</sub>) is<br></br>
      Option a:- <b>F<sub>2</sub>{'\u003e'}Cl<sub>2</sub>{'\u003e'}Br<sub>2</sub>{'\u003e'}I<sub>2</sub></b><br></br>
      Option b:- <b>I<sub>2</sub>{'\u003e'}Br<sub>2</sub>{'\u003e'}Cl<sub>2</sub>{'\u003e'}F<sub>2</sub></b><br></br>
      Option c:- <b>F<sub>2</sub>{'\u003c'}Cl<sub>2</sub>{'\u003e'}Br<sub>2</sub>{'\u003e'}I<sub>2</sub></b><br></br>
      Option d:- <b>Cl<sub>2</sub>{'\u003e'}F<sub>2</sub>{'\u003e'}Br<sub>2</sub>{'\u003e'}I<sub>2</sub></b><br></br> 
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>Hydrogen Flouride has usually high boiling point because of<br></br>
      Option a:- <b>Hydrogen bonding</b><br></br>
      Option b:- <b>Strong covalent bonding</b><br></br>
      Option c:- <b>Strong ionic bonding</b><br></br>
      Option d:- <b>High lattice energy</b><br></br>
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>Among the following compounds which reacts with PCl<sub>5S</sub><br></br>
      Option a:- <b>CO<sub>2</sub></b><br></br>
      Option b:- <b>H<sub>2</sub>SO<sub>4</sub></b><br></br>
      Option c:- <b>O<sub>2</sub></b><br></br>
      Option d:- <b>SO<sub>2</sub></b><br></br> 
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>In their reaction with cold, dilute and hot, concentrated alkalies X<sub>2</sub>, the halogen(except flourine) respectively form
<br></br>
      Option a:- <b>XO,XO<sup>-</sup><sub>2</sub></b><br></br>
      Option b:- <b>XO<sup>-</sup>,XO<sup>-</sup><sub>3</sub></b><br></br>
      Option c:- <b>XO<sup>-</sup><sub>2</sub>,XO<sup>-</sup><sub>4</sub></b><br></br>
      Option d:- <b>XO<sup>-</sup><sub>3</sub>,XO<sup>-</sup><sub>4</sub></b><br></br>
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>Which of the following reaction is feasible?<br></br>
      Option a:- <b>Br<sub>2</sub>+2Cl<sup>-</sup>{'\u2192'}2Br<sup>-</sup>+Cl<sub>2</sub></b><br></br>
      Option b:- <b>Cl<sub>2</sub>+2F<sup>-</sup>{'\u2192'}2Cl<sup>-</sup>+F<sub>2</sub></b><br></br>
      Option c:- <b>Cl<sub>2</sub>+2Br<sup>-</sup>{'\u2192'}2Cl<sup>-</sup>+Br<sub>2</sub></b><br></br>
      Option d:- <b>I<sub>2</sub>+2Br{'\u2192'}2I<sup>-</sup>+Br<sub>2</sub></b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>Which of the following is used in etching of glass<br></br>
      Option a:- <b>HF</b><br></br>
      Option b:- <b>HCl</b><br></br>
      Option c:- <b>HBr</b><br></br>
      Option d:- <b>HI</b><br></br>
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>Which one of the following equation indicates the common laboratory method for the preparation of chlorine
      <br></br>
      Option a:- <b>4HCl+O<sub>2</sub>{'\u2192'}2H<sub>2</sub>O+2Cl<sub>2</sub></b><br></br>
      Option b:- <b>2NaCl+2H<sub>2</sub>O{'\u2192'}2NaOH+H<sub>2</sub>+Cl<sub>2</sub></b><br></br>
      Option c:- <b>2Mg<sub>2</sub>OCl+O<sub>2</sub>{'\u2192'}4MgO+Cl<sub>2</sub></b><br></br>
      Option d:- <b>MnO<sub>2</sub>+4HCl{'\u2192'}MnCl<sub>2</sub>+H<sub>2</sub>O+Cl<sub>2</sub></b><br></br>  
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>Formula of tear gas is<br></br>
      Option a:- <b>CCl<sub>2</sub>F<sub>2</sub></b><br></br>
      Option b:- <b>CHCl<sub>3</sub></b><br></br>
      Option c:- <b>CCl<sub>3</sub>NO<sub>2</sub></b><br></br>
      Option d:- <b>CHI<sub>3</sub></b><br></br> 
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>Benzene Hexachloride is commonly known as<br></br>
      Option a:- <b>DDT</b><br></br>
      Option b:- <b>TNT</b><br></br>
      Option c:- <b>Gammaxene</b><br></br>
      Option d:- <b>Chloroform</b><br></br> 
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>The oxidation state of ICl<sub>2</sub><br></br>
      Option a:- <b>+1</b><br></br>
      Option b:- <b>-1</b><br></br>
      Option c:- <b>+2</b><br></br>
      Option d:- <b>-3</b><br></br>   
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>The strongest acid among the following is<br></br>
      Option a:- <b> HClO</b><br></br>
      Option b:- <b>HClO<sub>4</sub></b><br></br>
      Option c:- <b>HClO<sub>2</sub></b><br></br>
      Option d:- <b>HClO<sub>3</sub></b><br></br>
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>The shape of ClO<sub>4</sub><sup>-</sup><br></br>
      Option a:- <b>Angular</b><br></br>
      Option b:- <b>Tetrahedral</b><br></br>
      Option c:- <b>Pyramidal</b><br></br>
      Option d:- <b>Linear</b><br></br> 
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>Which of the following forms only one oxoacid<br></br>
      Option a:- <b>Flourine</b><br></br>
      Option b:- <b>Chlorine</b><br></br>
      Option c:- <b>Bromine</b><br></br>
      Option d:- <b>Iodine</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>Interhalogen compounds are<br></br>
      Option a:- <b>Paramagnetic</b><br></br>
      Option b:- <b>Ferromagnetic</b><br></br>
      Option c:- <b>Diamagnetic</b><br></br>
      Option d:- <b>Non magnetic</b><br></br> 
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>Which of the following is a correct statement regarding hybrides of group 16 elements?<br></br>
      Option a:- <b>The stability decreases from H<sub>2</sub>O to H<sub>2</sub>Te</b><br></br>
      Option b:- <b>The acidic character increases from H<sub>2</sub>O to H<sub>2</sub>Te</b><br></br>
      Option c:- <b>The reducing character decreases from H<sub>2</sub>O to H<sub>2</sub>Te</b><br></br>
      Option d:- <b>The bond dissociation enthalpy of E-H bond increases from H<sub>2</sub>O to H<sub>2</sub>Te</b><br></br> 
     Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>Shape of ClF<sub>3</sub> molecule is<br></br>
      Option a:- <b>Triangular planar</b><br></br>
      Option b:- <b>Tetrahedral</b><br></br>
      Option c:- <b>T-shaped</b><br></br>
      Option d:- <b>Distorted octahedral</b><br></br> 
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>Which of the following undergoes dimerisation<br></br>
      Option a:- <b>IBr</b><br></br>
      Option b:- <b>ClF<sub>3</sub></b><br></br>
      Option c:- <b>IF<sub>3</sub></b><br></br>
      Option d:- <b>ICl<sub>3</sub></b><br></br> 
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>Which of the following disproportionates in gaseous state?<br></br>
      Option a:- <b>IBr</b><br></br>
      Option b:- <b>ClF<sub>3</sub></b><br></br>
      Option c:- <b>IF<sub>3</sub></b><br></br>
      Option d:- <b>ICl<sub>3</sub></b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>[I<sub>3</sub>]<sup>-</sup> is isostructural with      <br></br>
      Option a:- <b>[ICl<sub>2</sub>]<sup>-</sup></b><br></br>
      Option b:- <b>[ICl<sub>2</sub>]<sup>-</sup></b><br></br>
      Option c:- <b>[I<sub>5</sub>]<sup>-</sup></b><br></br>
      Option d:- <b>[BrF<sub>4</sub>]<sup>-</sup></b><br></br>   
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A): F atom has less negative electron affinity than Cl atom<br></br>
        Reason(R): Additional electron is replled more effectively by 3p-electrons in Cl than by 2p-electrons in F atom<br></br>
   Choose the correct answer from the options given below<br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true but R is  not the correct explanation of A</b><br></br>
      Option c:- <b>A is true and R is false</b><br></br>
      Option d:- <b>A is false and R is true</b><br></br> 
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A): HClO<sub>4</sub> is a stronger acid than HClO<sub>3</sub><br></br>
        Reason(R): Oxidation state of chlorine in HClO<sub>4</sub> is +7 and  in HClO<sub>3</sub> is +5<br></br>
   Choose the correct answer from the options given below<br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true but R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true and R is false</b><br></br>
      Option d:- <b>A is false and R is true</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A): Bonds in inter halogen compounds are essentially covalent<br></br>
        Reason(R): The electronegativity difference is small<br></br>
   Choose the correct answer from the options given below<br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true but R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true and R is false</b><br></br>
      Option d:- <b>A is false and R is true</b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A): Dry chlorine is a good bleaching agent<br></br>
        Reason(R): Bleaching action of chlorine is due to oxidation<br></br>
   Choose the correct answer from the options given below<br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true but R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true and R is false</b><br></br>
      Option d:- <b>A is false and R is true</b><br></br>      
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>Read the following statements  <br></br>
 Statement I: Iodine is a solid<br></br>
 Statement II: Chlorine is insoluble in water<br></br>
 Statement III: Iodine is more reactive than bromine<br></br>
 Statement IV: Bromine is more reactive than chlorine<br></br>
 Select the option with the combination of incorrect statements<br></br>
      Option a:- <b>I,II</b><br></br>
      Option b:- <b>II,III</b><br></br>
      Option c:- <b>I,III,IV</b><br></br>
      Option d:- <b>I,IV </b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br>F<sub>2</sub> On reaction produces <br></br>
    I: HF    <br></br>   II: O<sub>2</sub>     <br></br> III: O<sub>3</sub> <br></br>    IV: HOF<br></br>
    The correct answer is<br></br>
      Option a:- <b>I,II,IV</b><br></br>
      Option b:- <b>I,II,III</b><br></br>
      Option c:- <b>II,III,IV</b><br></br>
      Option d:- <b>I,III,IV</b><br></br> 
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>Which of the following are not obtained as interhalogen compound?<br></br>
    I: ICl   <br></br>  II: BrI<sub>3</sub><br></br>    III: BrF<sub>3</sub>    <br></br>   IV: ClBr<sub>3</sub><br></br>
    The correct answer is<br></br>
      Option a:- <b>I,II</b><br></br>
      Option b:- <b>II,III</b><br></br>
      Option c:- <b>III,IV</b><br></br>
      Option d:- <b>II,IV </b><br></br>
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>In their reactions with alkalies (in both cold and hot conditions) the halogens X<sub>2</sub>(except F<sub>2</sub>) form<br></br>
    I: XO<sup>-</sup><br></br>
    II: XO<sub>2</sub><sup>-</sup><br></br>
    III: XO<sub>3</sub><sup>-</sup><br></br>
    IV: XO<sub>4</sub><sup>-</sup><br></br>
    The correct answer is
<br></br>
      Option a:- <b>I,II,III</b><br></br>
      Option b:- <b>I,III</b><br></br>
      Option c:- <b>I,II,IV</b><br></br>
      Option d:- <b>I,III,IV</b><br></br> 
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>Bleaching action of chlorine occurs in the presence of<br></br>
      Option a:- <b>O<sub>2</sub></b><br></br>
      Option b:- <b>Moisture</b><br></br>
      Option c:- <b>Dry Air</b><br></br>
      Option d:- <b>Sun light</b><br></br>
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b><br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>In the presence of Cobalt Chloride(CoCl<sub>2</sub>), bleaching powder decomposes to form .........<br></br>
      Option a:- <b>CaCO<sub>3</sub> & O<sub>3</sub></b><br></br>
      Option b:- <b>ClO<sub>2</sub> & CaO</b><br></br>
      Option c:- <b>Cl<sub>2</sub>O & CaO</b><br></br>
      Option d:- <b>CaCl<sub>2</sub> & O<sub>2</sub></b><br></br> 
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>Chlorine atom, in its third excited state, reacts with flourine to form a compound X. The formula and shape of X are<br></br>
      Option a:- <b>ClF<sub>5</sub>, pentagonal</b><br></br>
      Option b:- <b>ClF<sub>4</sub>, tetrahedral</b><br></br>
      Option c:- <b>ClF<sub>4</sub>, pentagonal bypyramidal</b><br></br>
      Option d:- <b>ClF<sub>7</sub>, pentagonal bypyramidal</b><br></br>  
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>The electron affinity values(in KJ mole<sup>-1</sup>) of three halogens X,Y and Z are respectively -349, -333 and -325.Then X, Y and Z respectively are<br></br>
      Option a:- <b>F<sub>2</sub>,Cl<sub>2</sub> and Br<sub>2</sub></b><br></br>
      Option b:- <b>Cl<sub>2</sub>,F<sub>2</sub> and Br<sub>2</sub></b><br></br>
      Option c:- <b>Cl<sub>2</sub>Br<sub>2</sub> and F<sub>2</sub></b><br></br>
      Option d:- <b>Br<sub>2</sub>,Cl<sub>2</sub> and F<sub>2</sub></b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>What is x in the following reaction?
      <br></br>KHSO<sub>4</sub>+F<sub>2</sub>{'\u2192'}HF+x      <br></br>
      Option a:- <b>K<sub>2</sub>SO<sub>4</sub></b><br></br>
      Option b:- <b>K<sub>2</sub>S<sub>2</sub>O<sub>4</sub></b><br></br>
      Option c:- <b>K<sub>2</sub>S<sub>2</sub>O<sub>2</sub></b><br></br>
      Option d:- <b>K<sub>2</sub>S<sub>2</sub>O<sub>8</sub></b><br></br> 
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>Flourine reacts with dilute NaOH and forms a gaseous product A. The bond angle in molecule of A is      <br></br>
      Option a:- <b>104<sup>o</sup>40<sup>1</sup></b><br></br>
      Option b:- <b>103<sup>o</sup></b><br></br>
      Option c:- <b>107<sup>o</sup></b><br></br>
      Option d:- <b>109<sup>o</sup>28<sup>1</sup></b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>The type of bonds present in sulphur trioxide<br></br>
      Option a:- <b>3{'\u03c3'} and three p{'\u03c0'}-d{'\u03c0'}</b><br></br>
      Option b:- <b>3{'\u03c3'} bonds, one p{'\u03c0'}-p{'\u03c0'} two p{'\u03c0'}-d{'\u03c0'}</b><br></br>
      Option c:- <b>2{'\u03c3'} and three p{'\u03c0'}-d{'\u03c0'}</b><br></br>
      Option d:- <b>2{'\u03c3'} and two p{'\u03c0'}-d{'\u03c0'}</b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>The oxide of nitrogen formed by thermal decomposition of NH<sub>4</sub>NO<sub>3</sub> is<br></br>
      Option a:- <b>NO</b><br></br>
      Option b:- <b>N<sub>2</sub>O</b><br></br>
      Option c:- <b>N<sub>2</sub>O<sub>5</sub></b><br></br>
      Option d:- <b>NO<sub>2</sub></b><br></br> 
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>The role of copper diaphragm in whytlaw-Gray's method is<br></br>
      Option a:- <b>Preventing the corrosion of electrolytic cell</b><br></br>
      Option b:- <b>Preventing the mixing of H<sub>2</sub> and F<sub>2</sub></b><br></br>
      Option c:- <b>As anode</b><br></br>
      Option d:- <b>As cathode</b><br></br>
      Selected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div>
    </div>
    <button onClick={() => exportAsImage(exportRef.current, "Group 17 Elements")} style={bstyle} >Download Summary</button></div>
  )

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
      result:state.result,
      mark:state.mark,
      resultone:state.resultone,
      markone:state.markone,
      resulttwo:state.resulttwo,
      marktwo:state.marktwo,
      resultthree:state.resultthree,
      markthree:state.markthree,
      resultfour:state.resultfour,
      markfour:state.markfour,
      resultfive:state.resultfive,
      markfive:state.markfive,
      resultsix:state.resultsix,
      marksix:state.marksix,
      resultseven:state.resultseven,
      markseven:state.markseven,
      resulteight:state.resulteight,
      markeight:state.markeight,
      resultnine:state.resultnine,
      marknine:state.marknine,
      resultten:state.resultten,
      markten:state.markten,
      resulteleven:state.resulteleven,
      markeleven:state.markeleven,
      resulttwelve:state.resulttwelve,
      marktwelve:state.marktwelve,
      resultthirteen:state.resultthirteen,
      markthirteen:state.markthirteen,
      resultfourteen:state.resultfourteen,
      markfourteen:state.markfourteen,
      resultfifteen:state.resultfifteen,
      markfifteen:state.markfifteen,
      resultsixteen:state.resultsixteen,
      marksixteen:state.marksixteen,
      resultseventeen:state.resultseventeen,
      markseventeen:state.markseventeen,
      resulteighteen:state.resulteighteen,
      markeighteen:state.markeighteen,
      resultnineteen:state.resultnineteen,
      marknineteen:state.marknineteen,
      resulttwenty:state.resulttwenty,
      marktwenty:state.marktwenty,
      resulttwentyone:state.resulttwentyone,
      marktwentyone:state.marktwentyone,
      resulttwentytwo:state.resulttwentytwo,
      marktwentytwo:state.marktwentytwo,
      resulttwentythree:state.resulttwentythree,
      marktwentythree:state.marktwentythree,
      resulttwentyfour:state.resulttwentyfour,
      marktwentyfour:state.marktwentyfour,
      resulttwentyfive:state.resulttwentyfive,
      marktwentyfive:state.marktwentyfive,
      resulttwentysix:state.resulttwentysix,
      marktwentysix:state.marktwentysix,
      resulttwentyseven:state.resulttwentyseven,
      marktwentyseven:state.marktwentyseven,
      resulttwentyeight:state.resulttwentyeight,
      marktwentyeight:state.marktwentyeight,
      resulttwentynine:state.resulttwentynine,
      marktwentynine:state.marktwentynine,
      markthirty:state.markthirty,
      resultthirty:state.resultthirty,
      markthirtyone:state.markthirtyone,
      resultthirtyone:state.resultthirtyone,
      resultthirtytwo:state.resultthirtytwo,
      markthirtytwo:state.markthirtytwo,
      resultthirtythree:state.resultthirtythree,
      markthirtythree:state.markthirtythree,
      resultthirtyfour:state.resultthirtyfour,
      markthirtyfour:state.markthirtyfour,
      resultthirtyfive:state.resultthirtyfive,
      markthirtyfive:state.markthirtyfive,
      resultthirtysix:state.resultthirtysix,
      markthirtysix:state.markthirtysix,
      resultthirtyseven:state.resultthirtyseven,
      markthirtyseven:state.markthirtyseven,
      resultthirtyeight:state.resultthirtyeight,
      markthirtyeight:state.markthirtyeight,
      resultthirtynine:state.resultthirtynine,
      markthirtynine:state.markthirtynine,
      name:state.name
    }
    
    }
     const mapDispatchToProps=dispatch=>{
     return{
           scoreUpdate:()=>dispatch(scoreUpdate()),
           statUpdateref:()=>dispatch(statUpdateref()),
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
export default connect (mapStateToProps,mapDispatchToProps) (YMsummary)