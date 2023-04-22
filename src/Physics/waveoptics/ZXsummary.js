import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux'
import Logo from '../../redux/Images/Logo.jpg'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { statUpdateref } from '../../redux/cake/cakeAction';




function  ZXsummary(props) {
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
const correct=["d","c","b","b", "d","b","a","d", "b","b","a","a", "a","a","a","b", "c","a","d","b", "b","a","b","d", "c","d","b","a", "c","b","b","d", "b","b","a","c", "b","a","b","c"]; 
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
    }>Performance Summary- Wave Optics</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>

      <p><b>Question No.1:</b><br></br>A point source of light produces
 <br></br>
      Option a:- <b>Spherical wavefront</b><br></br>
      Option b:- <b>Plane wavefront</b><br></br>
      Option c:- <b>Cylindrical wavefront</b><br></br>
      Option d:- <b>Both spherical and plane wavefront</b><br></br>
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>Phase difference between two waves having same frequency(n) and same amplitude (A) is 2{'\u03c0'}/3. If these waves superimpose each other, then the resultant amplitude will be
      <br></br>
      Option a:- <b>2A</b><br></br>
      Option b:- <b>0</b><br></br>
      Option c:- <b>A</b><br></br>
      Option d:- <b>A<sup>2</sup></b><br></br>      
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>The apparent wavelength of light from a star decreases by 0.01% less than the actual wavelength. The velocity of star is <br></br>
      Option a:- <b>15 Kms<sup>-1</sup> moving away from the earth</b><br></br>
      Option b:- <b>15 Kms<sup>-1</sup> moving towards the earth</b> <br></br>
      Option c:- <b>30 Kms<sup>-1</sup> moving away from the earth</b><br></br>
      Option d:- <b>30 Kms<sup>-1</sup> moving towards the earth</b><br></br> 
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b> <br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>The contrast between the fringes in any interference pattern depends on<br></br>
      Option a:- <b>fringe width</b><br></br>
      Option b:- <b>Intensity ratio of the sources</b> <br></br>
      Option c:- <b>Distance between the slits</b><br></br>
      Option d:- <b>Wavelength</b><br></br>   
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>For destructive interference of light, the path difference should be
      <br></br>
      Option a:- <b>n{'\u03bb'}</b><br></br>
      Option b:- <b>(n+1){'\u03bb'}</b> <br></br>
      Option c:- <b>n{'\u03bb'}/2</b><br></br>
      Option d:- <b>(2n-1){'\u03bb'}/2</b><br></br>   
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>The optical planeness of a surface can be tested using the phenomenon of
        <br></br>
      Option a:- <b>Refraction</b><br></br>
      Option b:- <b>Interference</b><br></br>
      Option c:- <b>Diffraction</b><br></br>
      Option d:- <b>Polarisation</b><br></br>
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>A small circular disc is placed in the path of monochromatic light. The centre of the geometric shadow is
        <br></br>
      Option a:- <b>Bright</b><br></br>
      Option b:- <b>Dark</b><br></br>
      Option c:- <b>Coloured</b><br></br>
      Option d:- <b>Partly coloured and partly bright</b><br></br>                               
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>Ratio of intensities of consecutive maxima in a diffraction pattern due to a single slit is
      <br></br>
      Option a:- <b>1:2:3</b><br></br>
      Option b:- <b>1:4:9</b><br></br>
      Option c:- <b>1:2/{'\u03c0'}<sup>2</sup>:3/{'\u03c0'}<sup>2</sup></b><br></br>
      Option d:- <b>1:4/(9{'\u03c0'}<sup>2</sup>):3/(25{'\u03c0'}<sup>2</sup>)</b><br></br>          
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>Both light and sound waves produce diffraction. It is more difficult to observe the diffraction with light waves because
      <br></br>
      Option a:- <b>Light waves do not require medium</b><br></br>
      Option b:- <b>Wavelength of light waves is far smaller</b><br></br>
      Option c:- <b>Light waves are transverse</b><br></br>
      Option d:- <b>Speed of light is far greater</b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>An polarised light is incident on a surface separating two transparent media of different optical densities at the polarising angle. Then the refracted ray and reflected rays are
      <br></br>
      Option a:- <b>Parallel to each otherg</b><br></br>
      Option b:- <b>Perpendicular to each other</b><br></br>
      Option c:- <b>Inclined to each other at an angle of 45<sup>o</sup></b><br></br>
      Option d:- <b>None of the above</b><br></br>           
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>Dichroism is the property of
      <br></br>
      Option a:- <b>Unequal absorption of ordinary and extraordinary rays</b><br></br>
      Option b:- <b>Equal absorption of ordinary and extraordinary rays</b><br></br>
      Option c:- <b>Rotating the plane of polarisation</b><br></br>
      Option d:- <b>None of these</b><br></br>      
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>Consider the following statements A and B and identify the correct answer<br></br>
    A) Polarized light can be used to study the helical structure of nucliec acids<br></br>
    B) Optic axis is a direction and not any particular line in the crystal<br></br>
      <br></br>
      Option a:- <b>A and B are correct</b><br></br>
      Option b:- <b>A and B are wrong</b><br></br>
      Option c:- <b>A is correct and B is wrong</b><br></br>
      Option d:- <b>A is wrong and B is correct </b><br></br>
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>Polaroid glass is used in sun-glasses because
      <br></br>
      Option a:- <b>It reduces light intensity on account of polarisation</b><br></br>
      Option b:- <b>It is fashionable</b><br></br>
      Option c:- <b>It has good colour</b><br></br>
      Option d:- <b>It is cheaper</b><br></br>  
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A):In young's interference experiment the incident light used is white. When one slit is covered with red filter and the other with blue filter, the phase difference at any point on the screen will contnuously change producing uniform illumination<br></br>
        Reason(R):Two independant sources of light would no longer act as coherent sources<br></br>
   Choose the correct answer from the options given below
      <br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true but R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true and R is false</b><br></br>
      Option d:- <b>A is false and R is true</b><br></br> 
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A):Coloured spectrum is seen when we look through a muslin cloth<br></br>
        Reason(R):It is due to te diffraction of white light on passing through the fine slits<br></br>
   Choose the correct answer from the options given below
      <br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true but R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true and R is false</b><br></br>
      Option d:- <b>A is false and R is true</b><br></br> 
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A):The sun looks bigger in size at sunrise and sunset than during day<br></br>
        Reason(R):The phenomenon of diffraction bends light rays<br></br>
   Choose the correct answer from the options given below
      <br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true but R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true and R is false</b><br></br>
      Option d:- <b>A is false and R is true</b><br></br>
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>If white light is used in young's double-slit experiment, <br></br>
    a) bright white fringe is formed at the centre of the screen<br></br>
    b) fringes of different colours are observed clearly only in the first order<br></br>
    c) the first order voilet fringes are closer to the centre of the screen than the first order red fringes<br></br>
    d) the first order red fringes are closer to the centre of the screen than the first order violet fringes<br></br>
  select the correct answer from the following options
      <br></br>
      Option a:- <b>only a and d are true</b><br></br>
      Option b:- <b>only a and b are true</b><br></br>
      Option c:- <b>only a,b and c are true</b><br></br>
      Option d:- <b>all are true</b><br></br> 
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>When polarised light is incident on a Tourmaline crystal of proper thickness<br></br>
    a) It exhibits dichroism<br></br>
    b) It absorbs ordinary ray and transmits extraordinary ray<br></br>
    c) It absorbs extraordinary ray and transmits ordinary ray<br></br>
      <br></br>
      Option a:- <b>Only a and b are true</b><br></br>
      Option b:- <b>Only a and c are true</b><br></br>
      Option c:- <b>Only b and c are true</b><br></br>
      Option d:- <b>All are true</b><br></br>
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>Young's double slit experiment is conducted with light of wavelength {'\u03bb'}. The intensity of bright fringe is I. The intensity at a point where the path difference 3{'\u03bb'}/4 is given by
      <br></br>
      Option a:- <b>zero</b><br></br>
      Option b:- <b>I/8</b><br></br>
      Option c:- <b>I/4</b><br></br>
      Option d:- <b>I/2</b><br></br>
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>In Young's experiment, wavelength of red light is 7.8x10<sup>-8</sup>cm. Value of n for which (n+1)<sup>th</sup> blue bright line coincides with n<sup>th</sup> red fringe is
      <br></br>
      Option a:- <b>1</b><br></br>
      Option b:- <b>2</b><br></br>
      Option c:- <b>3</b><br></br>
      Option d:- <b>4</b><br></br> 
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>Refractive index of air is 1.0003. Required thickness of air column to have one more wavelength of yellow light than for the same thickness of vacuum is about
      <br></br>
      Option a:- <b>1mm</b><br></br>
      Option b:- <b>2mm</b><br></br>
      Option c:- <b>3mm<sup>o</sup>Cs<sup>-1</sup></b><br></br>
      Option d:- <b>3.6mm<sup>o</sup>Cs<sup>-1</sup></b><br></br>     
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>When two coherent monochromatic light beams of intensities I and 4I are superimposed, the ratio between maximum and minimum intensities in the resultant beam is
      <br></br>
      Option a:- <b>9:1</b><br></br>
      Option b:- <b>1:9</b><br></br>
      Option c:- <b>4:1</b><br></br>
      Option d:- <b>1:4</b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>The amplitude of the unpolarised light incident on a polariser is A. The amplitude of the polarised light transmitted through it is    <br></br>[<b>EAMCET 2001 M</b>]
      <br></br>
      Option a:- <b>A/2</b><br></br>
      Option b:- <b>A/{'\u221a'}2</b><br></br>
      Option c:- <b>({'\u221a'}3)A/2</b><br></br>
      Option d:- <b>3A/4</b><br></br>   
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>The refractive index of the material of a slab is 1.414. The polarising angle is
      <br></br>
      Option a:- <b>30<sup>o</sup></b><br></br>
      Option b:- <b>45<sup>o</sup></b><br></br>
      Option c:- <b>37<sup>o</sup></b><br></br>
      Option d:- <b>54<sup>o</sup>43<sup>1</sup></b><br></br>    
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>A beam of light is incident on a glass plate at an angle of incidence 60<sup>o</sup>.The reflected ray is polarised. What is the angle of refraction when the angle of incidence is 45<sup>o</sup>
      <br></br>
      Option a:- <b>sin<sup>-1</sup>[({'\u221a3'})/2]</b><br></br>
      Option b:- <b>cos<sup>-1</sup>[({'\u221a3'})/2]</b><br></br>
      Option c:- <b>sin<sup>-1</sup>[1/{'\u221a6'}]</b><br></br>
      Option d:- <b>sin<sup>-1</sup>[1/{'\u221a3'}]</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>Two waves originating from sources S<sub>1</sub> and S<sub>2</sub> having zero phase difference and common wavelength {'\u03bb'} will show completely destructive interference at a point P if (S<sub>1</sub>P-S<sub>2</sub>P) is      <br></br>
      Option a:- <b>5{'\u03bb'}</b><br></br>
      Option b:- <b>3{'\u03bb'}/4</b><br></br>
      Option c:- <b>2{'\u03bb'}</b><br></br>
      Option d:- <b>11{'\u03bb'}/2</b><br></br>  
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>On introducing a thin film, in the path of one of the two interfering beams the central fringe shifts by one fringe-width. if {'\u03bc'}=1.5, the thickness of the film is
      <br></br>
      Option a:- <b>{'\u03bb'}</b><br></br>
      Option b:- <b>2{'\u03bb'}</b><br></br>
      Option c:- <b>3{'\u03bb'}</b><br></br>
      Option d:- <b>4{'\u03bb'}</b><br></br>            
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>In a double slit experiment, instead of taking slits of equal widths, one slit is made twice as wide as the other.Then in the interference pattern
      <br></br>
      Option a:- <b>The intensities of both the maxima and minima increase</b><br></br>
      Option b:- <b>The intensity of the maxima increases and minima has zero intensity</b><br></br>
      Option c:- <b>The intensity of the maxima decreases and that of minima increases</b><br></br>
      Option d:- <b>The intensity of the maxima decreases and minima has zero intensity</b><br></br>       
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br>A double slit experiment is performed with light of wavelength 500nm. A thin film of thickness 2{'\u03bc'}m and refractive index 1.5 is introduced in the path of the upper beam. The location of the central maximum will      <br></br>
      Option a:- <b>remain unshifted</b><br></br>
      Option b:- <b>shift downward by nearly two fringes</b><br></br>
      Option c:- <b>shift downward by nearly two fringes</b><br></br>
      Option d:- <b>shift downwards by nearly 10 fringes</b><br></br>
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>The maximum number of possible interference maxima for slit-separation equal to twice the wavelength in Young's double slit experiment is      <br></br>
      Option a:- <b>Infinite</b><br></br>
      Option b:- <b>Five</b><br></br>
      Option c:- <b>Three</b><br></br>
      Option d:- <b>Zero</b><br></br>   
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>Monochromatic light of wavelengths 400nm and 560nm are incident simultaneously and normally on double slits apparatus whose slits separation is 0.1nm and screen distance is 1m. Distance between areas of total darkness will be      <br></br>
      Option a:- <b>4mm</b><br></br>
      Option b:- <b>5.6mm</b><br></br>
      Option c:- <b>14mm</b><br></br>
      Option d:- <b>28mm</b><br></br> 
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>Which of the following cannot be polarised <br></br>
      Option a:- <b>Radio waves</b><br></br>
      Option b:- <b>Ultraviolet waves</b><br></br>
      Option c:- <b>Infrared waves</b><br></br>
      Option d:- <b>Ultrasonic waves</b><br></br>
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b> <br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>A monochromatic light beam of wavelength 5896 A<sup>o</sup> is used in double slit experiment to get interference pattern on a screen. 9<sup>th</sup> bright fringe is seen at a particular position on the screen. At the same point on the screen, if 11<sup>th</sup> bright is to be seen, the wavelength of the light that is needed is (nearly) <br></br>
      Option a:- <b>7014 A<sup>o</sup></b><br></br>
      Option b:- <b>4824 A<sup>o</sup></b><br></br>
      Option c:- <b>6780 A<sup>o</sup></b><br></br>
      Option d:- <b>3525 A<sup>o</sup></b><br></br>  
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>Calculate the minimum thickness of a soap film(n=1.33) that results in constructive interference in reflected light, if the film is illuminated with light whose wavelength in freespace is 532nm
      <br></br>
      Option a:- <b>113nm</b><br></br>
      Option b:- <b>100nm</b><br></br>
      Option c:- <b>200nm</b><br></br>
      Option d:- <b>226nm</b><br></br>     
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>The limit of resolution of a telescope is 2.5x10<sup>-7</sup>radians. If the telescope is used to detect light of wavelength 500nm coming from a star, the diameter of the objective lens used by the telescope is    <br></br>
      Option a:- <b>244cm</b><br></br>
      Option b:- <b>258cm</b><br></br>
      Option c:- <b>228cm</b><br></br>
      Option d:- <b>264cm</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>Light consisting of plane waves of wavelength {'\u03bb'}<sub>1</sub>=8x10<sup>-5</sup>cm and {'\u03bb'}<sub>2</sub>=6x10<sup>-5</sup>cm generates an interference pattern in Young's double slit experiment. If n<sub>1</sub> denotes the n<sub>1</sub><sup>th</sup> dark fringe due to light of wavelength {'\u03bb'}<sub>1</sub> which coincides with n<sub>2</sub><sup>th</sup> bright fringe due to light of wavelength {'\u03bb'}<sub>2</sub> then
      <br></br>
      Option a:- <b>n<sub>1</sub>=3,n<sub>2</sub>=1</b><br></br>
      Option b:- <b>n<sub>1</sub>=4,n<sub>2</sub>=5</b><br></br>
      Option c:- <b>n<sub>1</sub>=1,n<sub>2</sub>=2</b><br></br>
      Option d:- <b>n<sub>1</sub>=3,n<sub>2</sub>=2</b><br></br>      
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>In an interference experiment, third bright fringe is obtained on the screen with a light of wavelength 700 nm. The wavelength of the light source in order to obtain fifth bright fringe at the same point on the screen is
      <br></br>
      Option a:- <b>500 nm</b><br></br>
      Option b:- <b>420 nm</b><br></br>
      Option c:- <b>630 nm</b><br></br>
      Option d:- <b>750 nm</b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>In a double slit experiment two interference patterns are seen on the screen. One pattern is due to light of wavelength 500 nm and second pattern is due to light of wavelength
      <br></br>
      Option a:- <b>0.2 mm</b><br></br>
      Option b:- <b>0.4 mm</b><br></br>
      Option c:- <b>0.08 mm</b><br></br>
      Option d:- <b>0.06 mm</b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>An unpolarised light is falling on a glass surface of refractive index 1.73. If the reflected and refracted rays are perpendicular to each other, then the angle of incidence is
      <br></br>
      Option a:- <b>55<sup>o</sup></b><br></br>
      Option b:- <b>60<sup>o</sup></b><br></br>
      Option c:- <b>45<sup>o</sup></b><br></br>
      Option d:- <b>65<sup>o</sup></b><br></br>
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>Consider a star emitting light of frequency 'f' as it moves either directly away from us or directly towards us.If the frequency of the light that we receive is 10% higher than the frequency of light it is emitting, the speed and direction of motion of the star respectively are (C is the speed of light)
      <br></br>
      Option a:- <b>0.095 C; away from us</b><br></br>
      Option b:- <b>0.95 C; towards us</b><br></br>
      Option c:- <b>0.095 C; towards us</b><br></br>
      Option d:- <b>0.95 C; away from us</b><br></br>   
      seelected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
      </div></div>
    <button onClick={() => exportAsImage(exportRef.current, "Wave Optics")} style={bstyle} >Download Summary</button></div>

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
export default connect (mapStateToProps,mapDispatchToProps) (ZXsummary)