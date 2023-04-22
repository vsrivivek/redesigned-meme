import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Logo from '../../redux/Images/Logo.jpg'
import { useRef } from 'react';
import { statUpdateref } from '../../redux/cake/cakeAction';


function  QMsummary(props) {
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
const correct=["c","a","a","c", "a","b","b","a", "c","d","d","b", "c","d","b","d", "b","d","c","a", "b","c","a","b", "c","d","c","d", "a","d","c","d", "b","d","a","b", "a","c","a","a"]; 
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
    }>Performance Summary- Gravitation</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>

      <p><b>Question No.1:</b><br></br> Gravitational force can be called as
 <br></br>
      Option a:- <b>Force without any field</b><br></br>
      Option b:- <b>Force at a distance</b><br></br>
      Option c:- <b>Contact force</b><br></br>
      Option d:- <b>All of the above</b><br></br>
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>
      <p><b>Question No.2:</b><br></br>The unit of the quantity g/G in SI will be
      <br></br>
      Option a:- <b>Kg m<sup>-2</sup></b><br></br>
      Option b:- <b>m Kg<sup>-2</sup></b><br></br>
      Option c:- <b>m<sup>2</sup> Kg<sup>-1</sup></b><br></br>
      Option d:- <b>Kg<sup>2</sup>m<sup>-1</sup></b><br></br>	    
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>A satellite launching station should be<br></br>
      Option a:- <b>Near the equqtorial region</b><br></br>
      Option b:- <b>Near the polar region</b> <br></br>
      Option c:- <b>On the polar axis</b><br></br>
      Option d:- <b>At any place</b><br></br>
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b> <br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>According to kepler's second law, line joining the planet to the sun sweeps out equal areas in equal time intervals. This suggests that for the planet
      <br></br>
      Option a:- <b>Radial acceleration is zero  </b><br></br>
      Option b:- <b>Tangential acceleration is zero</b> <br></br>
      Option c:- <b>Transeverse acceleration is zero</b><br></br>
      Option d:- <b>All</b><br></br>
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>Which of the following statements is true?<br></br>
    I. g is less at the earth's surface than at a height above it or depth below it.<br></br>
    II. g is same at all places on the surface of the earth.<br></br>
    III. g has its maximum at the equator.<br></br>
    IV. g is greater at the poles than at the equator.<br></br>
      <br></br>
      Option a:- <b>IV is correct	</b><br></br>
      Option b:- <b>II is correct</b> <br></br>
      Option c:- <b>III is correct</b><br></br>
      Option d:- <b>I is correct</b><br></br>
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A): The comets do not obey kepler's laws of planetary motion<br></br>
        Reason(R): The comets do not have elliptical orbits<br></br>
        Choose the correct answer from the options given below
        <br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true but R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true but R is false</b><br></br>
      Option d:- <b>A is false but R is true</b><br></br>
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br> Read the following Assertion and Reason.<br></br>
        Assertion(A): The square of the period of revolution of a planet is inversely proportional to the cube of semi-major axis of the ellipse<br></br>
        Reason(R):Sun's gravitational field is inversely proportional to the square of its distance from the planet<br></br>
        Choose the correct answer from the options given below
        <br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true but R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true but R is false</b><br></br>
      Option d:- <b>A is false but R is true</b><br></br>                             
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>Assume that earth is a spherical planet of uniform density {'\u03c1'}, Radius R<sub>e</sub>, mass M<sub>e</sub>, and acceleration due to gravity g. Then the gravitational constant can be written as
    <br></br>A)3g/(4{'\u03c0'}{'\u03c1'}R<sub>e</sub>)
    <br></br>B)gR<sub>e</sub><sup>2</sup>/M<sub>e</sub>
    <br></br>C)3g/(4{'\u03c0'}{'\u03c1'}R<sub>e</sub><sup>2</sup>)
    <br></br>D)12{'\u03c1'}g/(4{'\u03c0'}R<sub>e</sub>)      <br></br>
      Option a:- <b>A & B are true</b><br></br>
      Option b:- <b>B & C are true</b><br></br>
      Option c:- <b>A,B & D are true</b><br></br>
      Option d:- <b>A & D are true</b><br></br>
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>Four equations expressing relationships between physical quantities are given below. g gravitational field strength,r is radius, {'\u03c1'} is density, G is the universal constant of gravitation, m is mass, and T is time period. Which of the following equations is(are) homogeneous<br></br>
a) gT<sup>2</sup>=4{'\u03c0'}r<sup>2</sup><br></br>
b) g=4{'\u03c0'}{'\u03c1'}Gr<sup>2</sup>/3<br></br>
c) gr<sup>2</sup>=Gm<br></br>
d) g=4{'\u03c0'}{'\u03c1'}Gr/3
      <br></br>
      Option a:- <b>only a and b are true</b><br></br>
      Option b:- <b>only b and c are correct</b><br></br>
      Option c:- <b>only c and d are correct</b><br></br>
      Option d:- <b>only a, b and c are correct</b><br></br>  
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>In the case of inertial frame of reference<br></br>
    a) Newton's law of motion are not valid<br></br>
    b) The coordinate system may be in accelerated motion<br></br>
    c) A body stays at rest if the resultant force on it is zero<br></br>
    d) The co-ordinate system attached to it may be in uniform motion
      <br></br>
      Option a:- <b>a & c are true</b><br></br>
      Option b:- <b>b & d are true</b><br></br>
      Option c:- <b>a, b & c are true</b><br></br>
      Option d:- <b>c & d are true</b><br></br>  
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>A planet revolves round the sun in an elliptical orbit of minor and major axes x and y respectively. Then time period of its revolution is proportional to
      <br></br>
      Option a:- <b>(x+y)<sup>3/2</sup></b><br></br>
      Option b:- <b>(y-x)<sup>3/2</sup></b><br></br>
      Option c:- <b>x<sup>3/2</sup></b><br></br>
      Option d:- <b>y<sup>3/2</sup></b><br></br>
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>A small planet revolving around a large star in a circular orbit of radius 'R' with a period of revolution 'T'. The gravitational force of attraction between the star and the planet is proportional R<sup>-5/2</sup> then T<sup>2</sup> is proportional to
      <br></br>
      Option a:- <b>R<sup>3</sup>  </b><br></br>
      Option b:- <b>R<sup>7/2</sup></b><br></br>
      Option c:- <b>R<sup>3/2</sup></b><br></br>
      Option d:- <b>R<sup>5/2</sup></b><br></br>
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>Two particles of masses 4Kg and 8Kg are kept at x=-2 and x=4 respectively. Then the net force acting on the third particle of mass 1 Kg kept at the origin in Newton is 
      <br></br>
      Option a:- <b>G</b><br></br>
      Option b:- <b>2G</b><br></br>
      Option c:- <b>G/2</b><br></br>
      Option d:- <b>G/4</b><br></br>
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>Three bodies each of mass m are placed at the corners of a square of side 'a'. The force on unit mass kept at the fourth corner is 
      <br></br>
      Option a:- <b>Gm/(3a<sup>2</sup>)</b><br></br>
      Option b:- <b>Gm/[({'\u221a'}3)a<sup>2</sup>]</b><br></br>
      Option c:- <b>3Gm/a<sup>2</sup></b><br></br>
      Option d:- <b>Gm[{'\u221a'}2+(1/2)]/a<sup>2</sup></b><br></br>
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>When a planet is orbiting around the sun in an elliptical orbit, r<sub>1</sub> and r<sub>2</sub> denote its closest and farthest distances from the sun. Then the ratio of the magnitudes of maximum and minimum gravitational forces between them is
      <br></br>
      Option a:- <b>r<sub>1</sub>:r<sub>2</sub></b><br></br>
      Option b:- <b>r<sub>1</sub><sup>2</sup>:r<sub>2</sub><sup>2</sup></b><br></br>
      Option c:- <b>r<sub>2</sub>:r<sub>1</sub></b><br></br>
      Option d:- <b>r<sub>2</sub><sup>2</sup>:r<sub>1</sub><sup>2</sup></b><br></br>
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>The value of accelaration due to gravity 'g' on the surface of the moon with radius 1/2 that of the earth and same mean density as that of the earth
      <br></br>
      Option a:- <b>g/4</b><br></br>
      Option b:- <b>g/2</b><br></br>
      Option c:- <b>4g</b><br></br>
      Option d:- <b>8g</b><br></br>
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>If the change in the value of 'g' at a height 'h' above the surface of the earth is the same as at a depth 'x' below it, and when both x and h are much smaller than the radius of the earth
      <br></br>
      Option a:- <b>x=h</b><br></br>
      Option b:- <b>x=2h</b><br></br>
      Option c:- <b>x=h/2</b><br></br>
      Option d:- <b>x=h<sup>2</sup></b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>If 'g' is the acceleration due to gravity on the surface of the earh, having radius R, the height at which the acceleration due to gravity reduces to g/2 is
      <br></br>
      Option a:- <b>R/2</b><br></br>
      Option b:- <b>{'\u221a'}2R</b><br></br>
      Option c:- <b>R/{'\u221a'}2</b><br></br>
      Option d:- <b>({'\u221a'}2-1)R</b><br></br>
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>If the earth stops rotating about its axis, the value of acceleration due to gravity at the equator is 'g'. Then the angular speed of rotation of the earth about that axis so that accelaration due to gravity at the equator would become g/2 (R is the radius of the earth)
      <br></br>
      Option a:- <b>{'\u221a'}(g/R)</b><br></br>
      Option b:- <b>{'\u221a'}(2g/R)</b><br></br>
      Option c:- <b>{'\u221a'}(g/2R)</b><br></br>
      Option d:- <b>{'\u221a'}(R/g)</b><br></br>
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>A tunnel is dug along a diameter of the earth. If M is the mass of the earth, then the force on a particle of mass m placed in that tunnel at distance x from the centre is
      <br></br>
      Option a:- <b>GMmx/R<sup>3</sup></b><br></br>
      Option b:- <b>GMmx/R<sup>2</sup></b><br></br>
      Option c:- <b>GMm/R<sup>3</sup></b><br></br>
      Option d:- <b>GMmR/x<sup>3</sup></b><br></br>
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>If T is absolute temperature of a planet, v<sub>e</sub> is the escape velocity from its surface and R is universal gas constant, then gas of molecular weight M can be retained on the surface of the planet if 
      <br></br>
      Option a:- <b>{'\u221a'}(3RT/M){'\u003e'}v<sub>e</sub></b><br></br>
      Option b:- <b>{'\u221a'}(3RT/M){'\u003c'}v<sub>e</sub></b><br></br>
      Option c:- <b>(3RT/M)=v<sub>e</sub></b><br></br>
      Option d:- <b>v<sub>e</sub>=0</b><br></br>   
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>The masses and radii of the earth and the moon are M<sub>1</sub>,R<sub>1</sub> and M<sub>2</sub>,R<sub>2</sub> respectively. Their centres are at a distance d apart. The minimum speed with which a particle of mass m  should be projected from a point midway between the two centres so as to escape to infinity is
      <br></br>
      Option a:- <b>{'\u221a'}[G(M<sub>1</sub>+M<sub>2</sub>)/d]</b><br></br>
      Option b:- <b>{'\u221a'}[G(M<sub>1</sub>+M<sub>2</sub>)/2d]</b><br></br>
      Option c:- <b>{'\u221a'}[G(M<sub>1</sub>+M<sub>2</sub>)/4d]</b><br></br>
      Option d:- <b>{'\u221a'}[4G(M<sub>1</sub>+M<sub>2</sub>)/d]</b><br></br>
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>If R is radius of the earth, the amount of work done in lifting a body of mass m from the surface of the earth to a height equal to n times the radius of the earth is(g is acceleration due to gravity on the surface)
      <br></br>
      Option a:- <b>mgnR/(n+1)</b><br></br>
      Option b:- <b>mg(n+1)R/n</b><br></br>
      Option c:- <b>mgR/(n+1)</b><br></br>
      Option d:- <b>None</b><br></br>
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>The gravitational field due to a mass distribution is E=k/x<sup>3</sup> in the x-direction, where k is constant. Taking the gravitational potential to be zero at infinity its value at a distance 'x' is 
      <br></br>
      Option a:- <b>k/x</b><br></br>
      Option b:- <b>k/2x</b><br></br>
      Option c:- <b>k/x<sup>2</sup></b><br></br>
      Option d:- <b>k/2x<sup>2</sup></b><br></br>
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>If M is mass of the earth and R is the radius, then the velocity with which a body should be projected from the surface of the earth such that it just reaches a maximum height equal to 'R' above the surface is
      <br></br>
      Option a:- <b>{'\u221a'}(2GM/R)</b><br></br>
      Option b:- <b>{'\u221a'}(GM/2R)</b><br></br>
      Option c:- <b>{'\u221a'}(GM/R)</b><br></br>
      Option d:- <b>1/2[{'\u221a'}(GM/R)]</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>A body is projected vertically up from the surface of the earth, with a velocity mv<sub>e</sub> where m{'\u003c'}1 and v<sub>e</sub> is the escape velocity. If R is radius of earth, the maximum distance from the centre of the earth to which body raises is
      <br></br>
      Option a:- <b>R/(m<sup>2</sup>-1)</b><br></br>
      Option b:- <b> R/m<sup>2</sup></b><br></br>
      Option c:- <b>R/(m<sup>2</sup>+1)</b><br></br>
      Option d:- <b>R/(1-m<sup>2</sup>)</b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>A satellite is moving very close to the surface of the earth. In order to displace it to infinity, its velocity must be increased by
      <br></br>
      Option a:- <b>41.4%</b><br></br>
      Option b:- <b>82.8%</b><br></br>
      Option c:- <b>58.6%</b><br></br>
      Option d:- <b>100%</b><br></br>
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>The work done due to increase in radius of the orbit of a satellite of mass m from 3r to 4r is (Where M is the mass of the planet)
      <br></br>
      Option a:- <b>GMm/3r</b><br></br>
      Option b:- <b>GMm/r</b><br></br>
      Option c:- <b>GMm/6r</b><br></br>
      Option d:- <b>GMm/12r</b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b>Two satellites A and B revolve round a planet in coplanar circular orbits in the same sense. Their periods of revolution are 1 hour and 8 hours respectively. The radius of the orbit of A is 10<sup>4</sup>km. Then speed of B relative to A when they are closest, in kmph is
      <br></br>
      Option a:- <b>10<sup>4</sup>{'\u03c0'}</b><br></br>
      Option b:- <b>2x10<sup>4</sup>{'\u03c0'}</b><br></br>
      Option c:- <b>10<sup>4</sup>{'\u03c0'}/2</b><br></br>
      Option d:- <b>4x10<sup>4</sup>{'\u03c0'}</b><br></br> 
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>An earth satellite of mass m revoloves in a circular orbit at a height h from the surface of earth. If R is the radius of the earth and g is the acceleration due to gravity at the surface of the earth, the velocity of the satellite in that orbit is
      <br></br>
      Option a:- <b>gR<sup>2</sup>/(R+h)</b><br></br>
      Option b:- <b>gR</b><br></br>
      Option c:- <b>g+R/(R+h)</b><br></br>
      Option d:- <b>{'\u221a'}[gR<sup>2</sup>/(R+h)]</b><br></br> 
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>The binding energy of the system of earth and its satellite orbiting round the earth in a circular orbit is E. if m is mass of that satellite, its linear speed in that orbit is
      <br></br>
      Option a:- <b>2E/m</b><br></br>
      Option b:- <b>E/m</b><br></br>
      Option c:- <b>{'\u221a'}(2E/m)</b><br></br>
      Option d:- <b>{'\u221a'}(E/m)</b><br></br>
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>The masses and radii of the earth and the moon are M<sub>1</sub>,R<sub>1</sub> and M<sub>2</sub>,R<sub>2</sub> respectively. Their centres are at a distance d apart. The minimum speed with which a particle of mass m  should be projected from a point midway between the two centres so as to escape to infinity is
      <br></br>
      Option a:- <b>{'\u221a'}[G(M<sub>1</sub>+M<sub>2</sub>)/d]</b><br></br>
      Option b:- <b>{'\u221a'}[G(M<sub>1</sub>+M<sub>2</sub>)/2d]</b><br></br>
      Option c:- <b>{'\u221a'}[G(M<sub>1</sub>+M<sub>2</sub>)/4d]</b><br></br>
      Option d:- <b>{'\u221a'}[4G(M<sub>1</sub>+M<sub>2</sub>)/d]</b><br></br>
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b> <br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>For a planet moving around the sun in an elliptical orbit of semimajor and semiminor axes a and b respectively, and period T. Then which of the following is true<br></br>
    A) The torque acting on the planet about the sun is non-zero<br></br> 
    B) The angular momentum of the planet about the sun is constant<br></br>
    C) The areal velocity is {'\u03c0'}ab/T<br></br>
    D) The planet moves with a constant speed around the sun
      <br></br>
      Option a:- <b>A,B</b><br></br>
      Option b:- <b>B,C</b><br></br>
      Option c:- <b>C,D</b><br></br>
      Option d:- <b>D,A</b><br></br>
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>What would be the maximum height reached by the body if the body is projected vertically from the surface of the earth of radius R with a velocity equal to half of the escape velocity?
      <br></br>
      Option a:- <b>2+R</b><br></br>
      Option b:- <b>R</b><br></br>
      Option c:- <b>R/2</b><br></br>
      Option d:- <b>R/3</b><br></br>
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>Two heavenly bodies S<sub>1</sub> and S<sub>2</sub>, not far off from each other are seen to revolve in orbits
      <br></br>
      Option a:- <b>Around their common centre of mass</b><br></br>
      Option b:- <b>Which are arbitrary</b><br></br>
      Option c:- <b>With S<sub>1</sub> fixed and S<sub>2</sub> moving around S<sub>1</sub></b><br></br>
      Option d:- <b>With S<sub>2</sub> fixed and S<sub>1</sub> moving around S<sub>2</sub></b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>The height of the vertically above the earth's surface at which acceleration due to gravity becomes 1% of its value at the surface of the earth is (R is radius of earth)
      <br></br>
      Option a:- <b>8R</b><br></br>
      Option b:- <b>9R</b><br></br>
      Option c:- <b>10R</b><br></br>
      Option d:- <b>20R</b><br></br>         
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>R and r are the radii of earth and moon respectively. {'\u03c1'}<sub>e</sub> and {'\u03c1'}<sub>m</sub> are the densities of earth and monn respectively. The ratio of the acceleration due to gravity on the surfaces of earth to moon is
      <br></br>
      Option a:- <b>R{'\u03c1'}<sub>e</sub>/(r{'\u03c1'}<sub>m</sub>)</b><br></br>
      Option b:- <b>r{'\u03c1'}<sub>e</sub>/(R{'\u03c1'}<sub>m</sub>)</b><br></br>
      Option c:- <b>r{'\u03c1'}<sub>m</sub>/(R{'\u03c1'}<sub>e</sub>)</b><br></br>
      Option d:- <b>R{'\u03c1'}<sub>m</sub>/(r{'\u03c1'}<sub>e</sub>)</b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>When a satellite is going round the earth in a circular orbit of radius r and with a velocity v, it looses some of its energy. Then
      <br></br>
      Option a:- <b>r and v both will increase</b><br></br>
      Option b:- <b>r and v both will increase</b><br></br>
      Option c:- <b>r will decrease and v will increase</b><br></br>
      Option d:- <b>r will increase and v will decrease</b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>The angular velocity of the earth with which it has to rotate so that acceleration due to gravity on 60<sup>o</sup> latitude becomes zero is (Radius of earth is 6400km)
      <br></br>
      Option a:- <b>2.5x10<sup>-3</sup> rad s<sup>-1</sup></b><br></br>
      Option b:- <b>5x10<sup>-1</sup> rad s<sup>-1</sup></b><br></br>
      Option c:- <b>10x10<sup>3</sup> rad s<sup>-1</sup></b><br></br>
      Option d:- <b>7.8x10<sup>-2</sup> rad s<sup>-1</sup></b><br></br>
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>mass M is divided into two parts 'x'm and (1-x)m. For a given separation, the value of x for which the gravitational attrcation between the two pieces beomces maximum is
      <br></br>
      Option a:- <b>1/2</b><br></br>
      Option b:- <b>3/5</b><br></br>
      Option c:- <b>1</b><br></br>
      Option d:- <b>2</b><br></br>
      seelected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div></div>
    <button onClick={() => exportAsImage(exportRef.current, "Gravitation")} style={bstyle} >Download Summary</button></div>

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
export default connect (mapStateToProps,mapDispatchToProps) (QMsummary)