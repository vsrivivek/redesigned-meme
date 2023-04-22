import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux'
import Logo from "../../redux/Images/Logo.jpg";
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { statUpdateref } from '../../redux/cake/cakeAction';


function  TQsummary(props) {
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
  
const status=[props.status,props.statusone,props.statustwo,props.statusthree,props.statusfour,props.statusfive,props.statussix,props.statusseven,props.statuseight,props.statusnine,props.statusten,props.statuseleven,props.statustwelve,props.statusthirteen,props.statusfourteen,props.statusfifteen,props.statussixteen,props.statusseventeen,props.statuseighteen,props.statusnineteen,props.statustwenty,props.statustwentyone,props.statustwentytwo,props.statustwentythree,props.statustwentyfour,props.statustwentyfive,props.statustwentysix,props.statustwentyseven,props.statustwentyeight,props.statustwentynine,props.statusthirty,props.statusthirtyone,props.statusthirtytwo,props.statusthirtythree,props.statusthirtyfour,props.statusthirtyfive,props.statusthirtysix,props.statusthirtyseven,props.statusthirtyeight,props.statusthirtynine];
const correct=["d","c","d","d", "a","b","c","a", "c","c","a","a", "a","c","b","b", "a","d","a","a", "b","d","a","d", "c","c","a","a", "d","c","b","d", "b","a","d","a", "d","d","c","c"]; 
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
// const [score,setScore]= React.useState('0');
  return (
    <div>
      <div id="divToPrint" >
      <h1 style={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1>
      <h2 style={
      {
  textAlign:"center",
  backgroundColor:"#A7CC13"

      }
    }>Performance Summary- Heat Transfer</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>

      <p><b>Question No.1:</b><br></br>Two different metal rods of equal lengths and equal cross sectional area have their ends kept at same temaperature. If K<sub>1</sub> and K<sub>2</sub> are thermal conductivities, {'\u03c1'}<sub>1</sub>,{'\u03c1'}<sub>2</sub> are their densities and S<sub>1</sub>,S<sub>2</sub> are specific heats, then the rate of flow of heat in two rods will be the same if
 <br></br>
      Option a:- <b>K<sub>1</sub>/K<sub>2</sub>={'\u03c1'}<sub>1</sub>S<sub>1</sub>/({'\u03c1'}<sub>2</sub>S<sub>2</sub>)</b><br></br>
      Option b:- <b>K<sub>1</sub>/K<sub>2</sub>={'\u03c1'}<sub>1</sub>S<sub>2</sub>/({'\u03c1'}<sub>2</sub>S<sub>1</sub>)</b><br></br>
      Option c:- <b>K<sub>1</sub>/K<sub>2</sub>={'\u03b8'}<sub>1</sub>/{'\u03b8'}<sub>2</sub></b><br></br>
      Option d:- <b>K<sub>1</sub>=K<sub>2</sub></b><br></br>
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>In scarle's method for finding conductivity of metals, the temaperature gradient along the bar is
      <br></br>
      Option a:- <b>greater nearer the hot end</b><br></br>
      Option b:- <b>greater nearer the cold end</b><br></br>
      Option c:- <b>is same at all points along the bar</b><br></br>
      Option d:- <b>Increase as we go from hot end to cold end</b><br></br>
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>The units of stefan's constant is<br></br>
      Option a:- <b>W m<sup>2</sup> K<sup>-4</sup></b><br></br>
      Option b:- <b>J m<sup>-2</sup> K<sup>-4</sup></b> <br></br>
      Option c:- <b>J m<sup>2</sup> K<sup>-4</sup></b><br></br>
      Option d:- <b>W m<sup>-2</sup> K<sup>-4</sup></b><br></br>
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b> <br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>Thermos flask prevents heat loss by
      <br></br>
      Option a:- <b>Convection</b><br></br>
      Option b:- <b>Conduction</b> <br></br>
      Option c:- <b>Radiation</b><br></br>
      Option d:- <b>All of the above</b><br></br>  
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>At 0<sup>o</sup>C a body emits
      <br></br>
      Option a:- <b>No radiation</b><br></br>
      Option b:- <b>Electromagnetic radiation of single wavelength</b> <br></br>
      Option c:- <b> Electromagnetic radiation of all wavelengths that are emitted by it at room temperature</b><br></br>
      Option d:- <b>Electromagnetic radiation of fewer wavelengths than that are emitted by it at room temperature</b><br></br>
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>Which of the following statements are wrong<br></br>
    a) Rough surfaces are better radiators than smooth surfaces<br></br>
    b) Highly polished mirror like surfaces are very good radiators<br></br>
    c) Black surfaces are better absorbers than white ones<br></br>
    d) Black surfaces are better radiators than white ones
        <br></br>
      Option a:- <b>a</b><br></br>
      Option b:- <b>b</b><br></br>
      Option c:- <b>c</b><br></br>
      Option d:- <b>d</b><br></br>
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br> A slab of ice one half is covered with black cloth and the other half with white cloth.This is then placed in in sunlight.After some time the pieces of colthes were removed. Which of the following statements is correct<br></br>
      a) Ice has melted equally under both the clothes<br></br>
      b) More ice has melted under white cloth<br></br>
      c) More ice has melted under black cloth<br></br>
      d) It will depend upon the medium in which ice is placed
        <br></br>
      Option a:- <b>a is correct</b><br></br>
      Option b:- <b>a is correct</b><br></br>
      Option c:- <b>a is correct</b><br></br>
      Option d:- <b>a is correct</b><br></br>                            
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>The coefficients of thermal conductivity of copper, mercury & glass are respectively K<sub>c</sub>,K<sub>m</sub>,K<sub>g</sub> such that K<sub>c</sub>{'\u003e'}K<sub>m</sub>{'\u003e'}K<sub>g</sub>. If the same quantity of heat is to flow per second per unit area of each and corresponding temperature gradients are X<sub>c</sub>,X<sub>m</sub>,X<sub>g</sub>. Identify the increasing order of temperature gradients
      <br></br>
      Option a:- <b>X<sub>c</sub>,X<sub>m</sub> and X<sub>g</sub></b><br></br>
      Option b:- <b>X<sub>m</sub>,X<sub>g</sub> and X<sub>c</sub></b><br></br>
      Option c:- <b>X<sub>g</sub>,X<sub>c</sub> and X<sub>m</sub></b><br></br>
      Option d:- <b>X<sub>g</sub>,X<sub>m</sub> and X<sub>c</sub></b><br></br>
       Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A): It is hotter over the top of a fire than at the same distance on the sides<br></br>
        Reason(R): Air sorrounding the fire conducts more heat upwards<br></br>
   Choose the correct answer from the options given below
      <br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true but R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true and R is false</b><br></br>
      Option d:- <b> A is false and R is true</b><br></br>     
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A): A hollow metallic closed container maintained at a uniform temperature can act as a source of black body radiation<br></br>
        Reason(R): All metals act as black bodies <br></br>
   Choose the correct answer from the options given below
      <br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true but R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true and R is false</b><br></br>
      Option d:- <b>A is false and R is true</b><br></br> 
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>Identify the correct ones from the following<br></br>
    a) The coefficient of thermal conductivity depends on the nature of the metal <br></br>
    b) The substances which is good conductor of heat is a bad conductor of electricity<br></br>
    c) Felt is used for thermal insulation in preference to air
      <br></br>
      Option a:- <b>a,b,c are true</b><br></br>
      Option b:- <b>Only a&c are true</b><br></br>
      Option c:- <b>Only a & b are true</b><br></br>
      Option d:- <b>Only b & c are true</b><br></br>
      
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>For transmission of heat from one place to the other, medium is required in<br></br>
    a) Conduction<br></br>
    b) Convection<br></br>
    c) Radiation<br></br>

      <br></br>
      Option a:- <b>a & b are correct</b><br></br>
      Option b:- <b>a & c are correct</b><br></br>
      Option c:- <b> b & c are correct</b><br></br>
      Option d:- <b>All are correct</b><br></br>
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>One end of metal bar 25cm in length is in steam, other in cotact with ice. If 12grams of ice melt per minute, conductivity of the metal in cal/cm sec<sup>o</sup>C(A=5cm<sup>2</sup>, Latent heat of ice= 80cal/gm)
      <br></br>
      Option a:- <b>0.8</b><br></br>
      Option b:- <b>0.4</b><br></br>
      Option c:- <b>0.5</b><br></br>
      Option d:- <b>0.6</b><br></br>
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>If the coefficient of conductivity of aluminium is 0.5 cal cm<sup>-1</sup> S<sup>-1</sup><sup>o</sup>C<sup>-1</sup>, then in order to conduct 10 cal S<sup>-1</sup>cm<sup>-2</sup> in steady state,the temperature gradient in aluminium must be 
      <br></br>
      Option a:- <b>5<sup>o</sup>C/cm</b><br></br>
      Option b:- <b>10<sup>o</sup>C/cm</b><br></br>
      Option c:- <b>20<sup>o</sup>C/cm</b><br></br>
      Option d:- <b>10.5<sup>o</sup>C/cm</b><br></br>
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>A wall is of two layers P and Q each made of different material. Both the layers have same thickness. The thermal conductivity of the material P is twice that of Q. Under thermal equilibrium, the temperature difference across the walls is 36<sup>o</sup>C. What is the temperature difference across the layer P?
      <br></br>
      Option a:- <b>10<sup>o</sup>C</b><br></br>
      Option b:- <b>12<sup>o</sup>C</b><br></br>
      Option c:- <b>14<sup>o</sup>C</b><br></br>
      Option d:- <b>16<sup>o</sup>C</b><br></br>
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>A black body at 227<sup>o</sup>C radiates energy at the rate of 10<sup>5</sup> J sec<sup>-1</sup>cm<sup>-2</sup>. To what temperature, it is to be heated so that it can emit the radiation at the rate of 10<sup>9</sup> J/sec-cm<sup>2</sup>
      <br></br>
      Option a:- <b>2270<sup>o</sup>C</b><br></br>
      Option b:- <b>4727<sup>o</sup>C</b><br></br>
      Option c:- <b>5000<sup>o</sup>C</b><br></br>
      Option d:- <b>2543<sup>o</sup>C</b><br></br>
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>At what rate is the enrgy radiated by a sphere of radius 5cm at 3000K and with an emissivity of 0.3?({'\u03c3'}=5.7x10<sup>-8</sup>Wm<sup>-2</sup>K<sup>-4</sup>)
      <br></br>
      Option a:- <b>43.53X10<sup>3</sup>W</b><br></br>
      Option b:- <b>4.353X10<sup>3</sup>W</b><br></br>
      Option c:- <b>435.3X10<sup>3</sup>W</b><br></br>
      Option d:- <b>4353X10<sup>3</sup>W</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>An electric heater emits 1000 watt of thermal radiation. The coil has a surface area of 0.020m<sup>2</sup>. Assuming that the coil radiates like a black body, find its temperature
      <br></br>
      Option a:- <b>1235 K</b><br></br>
      Option b:- <b>1124 K</b><br></br>
      Option c:- <b>737 K</b><br></br>
      Option d:- <b>955 K</b><br></br>
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>An object is cooled from 75<sup>o</sup>C to 65<sup>o</sup>C in 2 minutes in a room at 30<sup>o</sup>C. The time taken to cool the same object from 55<sup>o</sup>C to 45<sup>o</sup>C in the same room in minutes is
      <br></br>
      Option a:- <b>4</b><br></br>
      Option b:- <b>5</b><br></br>
      Option c:- <b>6</b><br></br>
      Option d:- <b>7</b><br></br>
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>Two liquids of masses in ratio 3:2 are cooled under similar conditions. The ratio of times taken by them to cool to same temperature difference is 1/4. The ratio of their specific heats is
      <br></br>
      Option a:- <b>1:6</b><br></br>
      Option b:- <b>3:8</b><br></br>
      Option c:- <b>8:3</b><br></br>
      Option d:- <b>6:1</b><br></br>
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>A cup of tea at 100<sup>o</sup>C cools at the rate of 0.02<sup>o</sup>Cs<sup>-1</sup>. When the room temperature is kept constant at 20<sup>o</sup>C. Then cooling rate for tea at 60<sup>o</sup>C is
      <br></br>
      Option a:- <b>0.02<sup>o</sup>Cs<sup>-1</sup></b><br></br>
      Option b:- <b>0.01<sup>o</sup>Cs<sup>-1</sup></b><br></br>
      Option c:- <b>0.04<sup>o</sup>Cs<sup>-1</sup></b><br></br>
      Option d:- <b>0.05<sup>o</sup>Cs<sup>-1</sup></b><br></br>   
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>A body at 1500K emits maximum energy at a wavelength 20000 A<sup>o</sup>. If the sun emits maximum energy at a wavelength of 5000A<sup>o</sup>, the temperature of the sun is
      <br></br>
      Option a:- <b>375K</b><br></br>
      Option b:- <b>24000K</b><br></br>
      Option c:- <b>12000K</b><br></br>
      Option d:- <b>6000K</b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>Two stars A and B radiate maximum energy at 3600A<sup>o</sup> and 4800A<sup>o</sup> respectively.Then the ratio of the absolute temperatures of A and B is
      <br></br>
      Option a:- <b>4:3</b><br></br>
      Option b:- <b>3:4</b><br></br>
      Option c:- <b>81:256</b><br></br>
      Option d:- <b>256:81</b><br></br>
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>The temperature of furnace is 2324<sup>o</sup>C and the intensity is maximum in its radiation spectrum nearly at 12000 A<sup>o</sup>. If the intensity of spectrum of a star is maximum at 4800A<sup>o</sup> nearly, then surface temperature of that star is 
      <br></br>
      Option a:- <b>8400<sup>o</sup>C</b><br></br>
      Option b:- <b>7200<sup>o</sup>C</b><br></br>
      Option c:- <b>6500<sup>o</sup>C</b><br></br>
      Option d:- <b>6220<sup>o</sup>C</b><br></br>
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>If the temperature of a hot body is increased by 50%, the amount of radiation emitted by it increases approximatley by
      <br></br>
      Option a:- <b>225%</b><br></br>
      Option b:- <b>250%</b><br></br>
      Option c:- <b>400%</b><br></br>
      Option d:- <b>500%</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>A small hole in a furnace acts like a blackbody.Its area is 1 cm<sup>2</sup>, and its temperature is same as that of the interior of the furnace,1727<sup>o</sup>C.How many joules are radiated out of the hole each second
      <br></br>
      Option a:- <b>79</b><br></br>
      Option b:- <b>60</b><br></br>
      Option c:- <b>91</b><br></br>
      Option d:- <b>104</b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>Which of the following radiations has the least wavelength
      <br></br>
      Option a:- <b>{'\u03b3'}-rays</b><br></br>
      Option b:- <b>{'\u03b2'}-rays</b><br></br>
      Option c:- <b>{'\u03b1'}-rays</b><br></br>
      Option d:- <b>X-rays</b><br></br>
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>The earth radiates in the infra-red region of the spectrum. The spectrum is correctly given by
      <br></br>
      Option a:- <b>Rayleigh Jeans Law</b><br></br>
      Option b:- <b>Planck's law of radiation</b><br></br>
      Option c:- <b>Stefan's law of radiation</b><br></br>
      Option d:- <b>Wien's law</b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b>According to Newton's law of cooling, the rate of cooling of a body is proportional to ({'\u0394'}{'\u03b8'})<sup>n</sup>, when {'\u0394'}{'\u03b8'} is the difference of the temperature of the body and the sorroundings, and 'n' is equal to
      <br></br>
      Option a:- <b>Two</b><br></br>
      Option b:- <b>Three</b><br></br>
      Option c:- <b>Four</b><br></br>
      Option d:- <b>One</b><br></br>
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>A black body at a temperature of 227<sup>o</sup>C, radiates heat at a rate of 20 calm<sup>-2</sup>s<sup>-1</sup>. When its temperature is raised to 727<sup>o</sup>C, the heat radiated by it in cal m<sup>-2</sup>s<sup>-1</sup> will be closest to
      <br></br>
      Option a:- <b>40</b><br></br>
      Option b:- <b>160</b><br></br>
      Option c:- <b>320</b><br></br>
      Option d:- <b>640</b><br></br>
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>A radiation energy E falls normally on a perfectly reflecting surface. The momentum transferred to the surface is
      <br></br>
      Option a:- <b>E/C</b><br></br>
      Option b:- <b>2E/C</b><br></br>
      Option c:- <b>EC</b><br></br>
      Option d:- <b>E/C<sup>2</sup></b><br></br>
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>If the temperature of the sun were to increase from T to 2T and its radius from R to 2R, then the ratio of the radiant energy received on earth to what it was previously will be
      <br></br>
      Option a:- <b>4</b><br></br>
      Option b:- <b>16</b><br></br>
      Option c:- <b>32</b><br></br>
      Option d:- <b>64</b><br></br>
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b> <br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>Three discs A,B and C having radii 2m,4m, and 6m respectively are coated with carbon black on their outer surefaces. The wavelengths corresponding to maximum intensity are 300 mm, 400mmm and 500mm respectively. The power radiated by them are Q<sub>A</sub>,Q<sub>B</sub>,Q<sub>C</sub> respectively
      <br></br>
      Option a:- <b>Q<sub>A</sub> is maximum</b><br></br>
      Option b:- <b>Q<sub>B</sub> is maximum</b><br></br>
      Option c:- <b>Q<sub>C</sub> is maximum</b><br></br>
      Option d:- <b>Q<sub>A</sub>=Q<sub>B</sub>=Q<sub>C</sub></b><br></br>  
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>The wavelength of maximum intensity of radiation emitted by a star is 289.8nm. The radiation intensity for the star is
      <br></br>
      Option a:- <b>5.67Wm<sup>-2</sup></b><br></br>
      Option b:- <b>5.67x10<sup>12</sup>Wm<sup>-2</sup></b><br></br>
      Option c:- <b>10.67x10<sup>7</sup>Wm<sup>-2</sup></b><br></br>
      Option d:- <b>10.67x10<sup>14</sup>Wm<sup>-2</sup></b><br></br> 
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>Two identical bodies have temperatures 277<sup>o</sup>C and 67<sup>o</sup>C. If the sorrounding temperature is 27<sup>o</sup>C, the ratio of loss of heat of the two bodies during the same interval of time is(approximatley)
      <br></br>
      Option a:- <b>4:1</b><br></br>
      Option b:- <b>8:1</b><br></br>
      Option c:- <b>12:1</b><br></br>
      Option d:- <b>16:1</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>Two identical shaped metallic spheres A and B made up of same material of mass 'm' and  '4m' are heated to attain a temperature T<sub>1</sub> and then they are placed in a container maintained at a temperature T<sub>2</sub>(T<sub>2</sub>{'\u003c'}T<sub>1</sub>). The spheres are thermally insulated from each other. If R is the rate of change of temperature, then the ratio of R<sub>A</sub>& R<sub>B</sub> is
      <br></br>
      Option a:- <b>1/4</b><br></br>
      Option b:- <b>(1/4)<sup>1/3</sup></b><br></br>
      Option c:- <b>(1/4)<sup>2/3</sup></b><br></br>
      Option d:- <b>(4)<sup>1/3</sup></b><br></br>        
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>A body cools from 80<sup>o</sup>C to 50<sup>o</sup>C after a time interval of {'\u0394'}t. Assuming that the sorrounding temperature is 20<sup>o</sup>C, the temperature of of the body after time interval of 2{'\u0394'}t is
      <br></br>
      Option a:- <b>30<sup>o</sup>C</b><br></br>
      Option b:- <b>40<sup>o</sup>C</b><br></br>
      Option c:- <b>25<sup>o</sup>C</b><br></br>
      Option d:- <b>35<sup>o</sup>C</b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>A metal rod of length 10cm and area of cross section 2.8x10<sup>-4</sup>m<sup>2</sup> is covered with a non-conducting substance. One end of it is maintained at 80<sup>o</sup>C, while the other end is kept at 0<sup>o</sup>C. It is found that 20g of ice melts in 5 min. The thermal conductivity of the metal in Js<sup>-1</sup>m<sup>-1</sup>K<sup>-1</sup> is (Latent heat of ice is 80calg<sup>-1</sup>)
      <br></br>
      Option a:- <b>70</b><br></br>
      Option b:- <b>80</b><br></br>
      Option c:- <b>90</b><br></br>
      Option d:- <b>100</b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>The temperature of a body is increased from T<sub>1</sub>=127<sup>o</sup>C to T<sub>2</sub>=227<sup>o</sup>C. The ambient temperature is 27<sup>o</sup>C. The energies emitted per second by the body at T<sub>1</sub> and T<sub>2</sub> are E<sub>1</sub> and E<sub>2</sub> respectively. Then the ratio of E<sub>2</sub>/E<sub>1</sub> is
      <br></br>
      Option a:- <b>1.8</b><br></br>
      Option b:- <b>2.7</b><br></br>
      Option c:- <b>3.1</b><br></br>
      Option d:- <b>4.3</b><br></br>
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>Two thin metallic spherical shells of radii 20cm and 30cm respectively are placed with their centres coinciding. A material of thermal conductivity {'\u03b1'} is filled in the space between the shells. The inner shell is maintained at 300K and the outer shell at 310K. If the rate at which heat flows radially through the material is 40W, find the value of {'\u03b1'} (in units of J s<sup>-1</sup> m<sup>-1</sup> K<sup>-1</sup>)
      <br></br>
      Option a:- <b>3/{'\u03c0'}</b><br></br>
      Option b:- <b>4{'\u03c0'}/3</b><br></br>
      Option c:- <b>5/(3{'\u03c0'})</b><br></br>
      Option d:- <b>{'\u03c0'}/2</b><br></br>  
      seelected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br></div>
      </div>
    <button onClick={() => exportAsImage(exportRef.current, "Heat Transfer")} style={bstyle} >Download Summary</button></div>

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
export default connect (mapStateToProps,mapDispatchToProps) (TQsummary)