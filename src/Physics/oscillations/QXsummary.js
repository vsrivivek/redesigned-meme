import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux'
import Logo from '../../redux/Images/Logo.jpg'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { statUpdateref } from '../../redux/cake/cakeAction';



function  QXsummary(props) {
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
const correct=["c","b","a","b", "b","c","a","b", "d","c","a","d", "b","c","d","a", "d","d","a","c", "b","b","b","c", "c","c","b","c", "a","a","b","b", "a","b","a","c", "b","b","b","b"];  
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
    }>Performance Summary- Oscillations</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>
      <p><b>Question No.1:</b><br></br>A particle executes SHM. Then the graph of velocity as a function of displacement is<br></br>[<b>CBSE 97</b>]
 <br></br>
      Option a:- <b>A Straight line</b><br></br>
      Option b:- <b>A circle</b><br></br>
      Option c:- <b>An ellipse</b><br></br>
      Option d:- <b>A hyperbola</b><br></br>
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>A particle at the end of a spring executes SHM with a period t<sub>1</sub>, while the corresponding period for another spring is t<sub>2</sub>. If the period of oscillation with two springs in series T, then
    <br></br>[<b>AIEEE 2004</b>]
      <br></br>
      Option a:- <b>T=t<sub>1</sub>+t<sub>2</sub></b><br></br>
      Option b:- <b>T<sup>2</sup>=t<sub>1</sub><sup>2</sup>+t<sub>2</sub><sup>2</sup></b><br></br>
      Option c:- <b>T<sup>-1</sup>=t<sub>1</sub><sup>-1</sup>+t<sub>2</sub><sup>-1</sup></b><br></br>
      Option d:- <b>T<sup>-2</sup>=t<sub>1</sub><sup>-2</sup>+t<sub>2</sub><sup>-2</sup></b><br></br>              
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>In forced oscillation of a particle the amplitude is maximum for a frequency {'\u03c9'}<sub>1</sub> of the force, while the energy is maximum for a frquency {'\u03c9'}<sub>2</sub> of the force, then 
    <br></br>[<b>AIEEE 2004</b>]<br></br>
      Option a:- <b>{'\u03c9'}<sub>1</sub>={'\u03c9'}<sub>2</sub></b><br></br>
      Option b:- <b>{'\u03c9'}<sub>1</sub>{'\u003e'}{'\u03c9'}<sub>2</sub></b> <br></br>
      Option c:- <b>{'\u03c9'}<sub>1</sub>{'\u003c'}{'\u03c9'}<sub>2</sub> when damping is small and {'\u03c9'}<sub>1</sub>{'\u003e'}{'\u03c9'}<sub>2</sub> when damping is large</b><br></br>
      Option d:- <b>{'\u03c9'}<sub>1</sub>{'\u003c'}{'\u03c9'}<sub>2</sub></b><br></br>  
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b> <br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>The displacement y of a wave travelling in th X- direction is given by y=10<sup>-4</sup>sin(600t-2x+{'\u03c0'}/3) metre, where x is expressed in metres and 't' in seconds. The speed of wave motion in ms<sup>-1</sup> is
    <br></br>[<b>AIEEE 2003</b>]      <br></br>
      Option a:- <b>300</b><br></br>
      Option b:- <b>600</b> <br></br>
      Option c:- <b>1200</b><br></br>
      Option d:- <b>200</b><br></br>  
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>The ideal spring with spring constant K is hung from the ceiling and a block of mass M is attached to its lower end. The mass is released with the spring initially unstretched. Then the maximum extension in the spring is 
    <br></br>[<b>IIT Screening 2002</b>]
      <br></br>
      Option a:- <b>4Mg/K</b><br></br>
      Option b:- <b>2Mg/K</b> <br></br>
      Option c:- <b>Mg/K</b><br></br>
      Option d:- <b>Mg/2K</b><br></br>      	
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>Displacement between maximum potential energy position and maximum kinetic energy position for a particle executing SHM is<br></br>[<b>CBSE 2002</b>]
        <br></br>
      Option a:- <b>-a</b><br></br>
      Option b:- <b>+a</b><br></br>
      Option c:- <b>{'\u00b1'}a</b><br></br>
      Option d:- <b>{'\u00b1'}a/4</b><br></br>
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>The time period of a simple pendulum measured inside a stationary lift is 'T'. If the lift starts moving upwards with an acceleration of g/3.What will be the time period
    <br></br>[<b>AFMC 2002, DPMT 2000</b>]
        <br></br>
      Option a:- <b>T/3</b><br></br>
      Option b:- <b>3T</b><br></br>
      Option c:- <b>T{'\u221a'}(3)/2</b><br></br>
      Option d:- <b>T{'\u221a'}(3/2)</b><br></br>                         
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>Two springs having spring constants 25N/m and 16N/m are stretched by forces F<sub>1</sub> and F<sub>2</sub> have equal potential energy. The ratio of forces F<sub>1</sub> and F<sub>2</sub> is 
    <br></br>[<b>AIEEE 2002</b>]
      <br></br>
      Option a:- <b>4/5</b><br></br>
      Option b:- <b>5/4</b><br></br>
      Option c:- <b>16/25</b><br></br>
      Option d:- <b>25/16</b><br></br>  
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>When a mass 'M'  is attached to the spring of force constant 'K', then the spring stretches by 'l'. If the mass oscillates with amplitude 'l', what will be the maximum potential energy stored in the spring
    <br></br>[<b>BHU 2002</b>]
      <br></br>
      Option a:- <b>Kl/2</b><br></br>
      Option b:- <b>2Kl</b><br></br>
      Option c:- <b>Mgl/2</b><br></br>
      Option d:- <b>Mgl</b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>If a simple pendulum of length l has maximum angular displacement {'\u03b8'}, then the maximum KE of the bob of mass 'm' is  <br></br>[<b>AFMC 2002</b>]<br></br>
        Assertion(A): A hollow metallic closed container maintained at a uniform temperature can act as a source of black body radiation<br></br>
        Reason(R): All metals act as black bodies <br></br>
   Choose the correct answer from the options given below
      <br></br>
      Option a:- <b>ml/2g</b><br></br>
      Option b:- <b>mg/2l</b><br></br>
      Option c:- <b>mgl(1-cos{'\u03b8'})</b><br></br>
      Option d:- <b>mglsin{'\u03b8'}/2</b><br></br>      
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>A particle executes simple harmonic motion between x=-A and x=+A. The time taken for it to go from 0 to A/2 is T<sub>1</sub> and to go from A/2 to A is T<sub>2</sub> then
     <br></br>[<b>IIT Screening 2001</b>]
      <br></br>
      Option a:- <b>T<sub>1</sub>{'\u003c'}T<sub>2</sub></b><br></br>
      Option b:- <b>T<sub>1</sub>{'\u003e'}T<sub>2</sub></b><br></br>
      Option c:- <b>T<sub>1</sub>{'\u003d'}T<sub>2</sub></b><br></br>
      Option d:- <b>T<sub>1</sub>{'\u003d'}2T<sub>2</sub></b><br></br>     
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>A simple pendulum has atime period T<sub>1</sub> when on the earth's surface, and T<sub>2</sub> when it takes to a height R above the earth's surface, where 'R' is the radius of the earth. The value T<sub>2</sub>/T<sub>1</sub> is
    <br></br>[<b>IIT Screening 2001</b>]
      <br></br>
      Option a:- <b>1</b><br></br>
      Option b:- <b>{'\u221a'}2</b><br></br>
      Option c:- <b>4</b><br></br>
      Option d:- <b>2</b><br></br>  
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>If a body mass 0.98kg is made to oscillate on a spring of force constant 4.84 N/m, the angular frequency of the body is
    <br></br>[<b>CBSE 2001</b>]
      <br></br>
      Option a:- <b>1.22 rad/s</b><br></br>
      Option b:- <b>2.22 rad/s</b><br></br>
      Option c:- <b>3.22 rad/s</b><br></br>
      Option d:- <b>4.22 rad/s</b><br></br>
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>A body executing simple harmonic motion has a maximum acceleration has a maximum acceleration equal to 24ms<sup>-2</sup> and maximum velocity equal to 16ms<sup>-1</sup>. The amplitude of the SHM  (in metres) is<br></br>[<b>UPCET 2000</b>]
      <br></br>
      Option a:- <b>3/32</b><br></br>
      Option b:- <b>64/9</b><br></br>
      Option c:- <b>32/3</b><br></br>
      Option d:- <b>1024/9</b><br></br>
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>A particle of mass 10 grams is executing SHM with an amplitude of 0.5 m and angular frequency 10 radians/sec. The maximum value of the force acting on the particle during the course of oscillation is 
    <br></br>[<b>MPPMT 2000</b>]
      <br></br>
      Option a:- <b>25N</b><br></br>
      Option b:- <b>5N</b><br></br>
      Option c:- <b>2.5N</b><br></br>
      Option d:- <b>0.5N</b><br></br>
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>The period of oscillation of a simple pendulum of length L suspended from the roof of a vehicle which moves without friction down an inclined plane of inclination '{'\u03b1'}' is given by
    <br></br>[<b>IIT Screening 2000</b>]
      <br></br>
      Option a:- <b>2{'\u03c0'}{'\u221a'}[L/(gcos{'\u03b1'})]</b><br></br>
      Option b:- <b>2{'\u03c0'}{'\u221a'}[L/(gsin{'\u03b1'})]</b><br></br>
      Option c:- <b>2{'\u03c0'}{'\u221a'}[L/g]</b><br></br>
      Option d:- <b>2{'\u03c0'}{'\u221a'}[L/(gtan{'\u03b1'})]</b><br></br>
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>The time period of a simple pendulum measured inside a stationary lift is 'T'. If the lift starts moving upwards with an acceleration of g/3.What will be the time period
    <br></br>[<b>AFMC 2002, DPMT 2000</b>]
      <br></br>
      Option a:- <b>T/3</b><br></br>
      Option b:- <b>3T</b><br></br>
      Option c:- <b>T{'\u221a'}(3)/2</b><br></br>
      Option d:- <b>T{'\u221a'}(3/2)</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>Two springs of constants K<sub>1</sub> and K<sub>2</sub> have equal highest velocities when executing SHM. Then, the ratio of their amplitudes (given their masses are equal) will be
    <br></br>[<b>BHU 98</b>]
      <br></br>
      Option a:- <b>K<sub>1</sub>/K<sub>2</sub></b><br></br>
      Option b:- <b>{'\u221a'}(K<sub>1</sub>/K<sub>2</sub>)</b><br></br>
      Option c:- <b>K<sub>2</sub>/K<sub>1</sub></b><br></br>
      Option d:- <b>{'\u221a'}(K<sub>2</sub>/K<sub>1</sub>)</b><br></br>
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>Two simple harmonic motions are represented by the equations x<sub>1</sub>=5sin[(2{'\u03c0'}t)+({'\u03c0'}/4)] and x<sub>2</sub>=5{'\u221a'}2(sin2{'\u03c0'}t+cos2{'\u03c0'}t). Their amplitudes are in the ratio of 
    <br></br>[<b>Roorkee 96</b>]
      <br></br>
      Option a:- <b>1:2</b><br></br>
      Option b:- <b>2:1</b><br></br>
      Option c:- <b>1:4</b><br></br>
      Option d:- <b>4:1</b><br></br>
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>A uniform spring of force constant K is cut into two pieces, the lengths of which are in the ratio 1:2. A mass m is suspended from these parts successively. The time periods in the two cases will be in the ratio
    <br></br>[<b>Manipal 95</b>]
      <br></br>
      Option a:- <b>1:1</b><br></br>
      Option b:- <b>{'\u221a'}2:1</b><br></br>
      Option c:- <b>1:{'\u221a'}2</b><br></br>
      Option d:- <b>1:{'\u221a'}3</b><br></br> 
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>A body of mass 1 kg is executing Simple Harmonic Motion. Its displacement 'y' cm at 't' seconds is given by<br></br>
    y=6sin(100t+({'\u03c0'}/4)). Its maximum kinetic energy is
    <br></br>[<b>EAMCET 2000E</b>]
      <br></br>
      Option a:- <b>6J</b><br></br>
      Option b:- <b>18J<sup>o</sup>Cs<sup>-1</sup></b><br></br>
      Option c:- <b>24J<sup>o</sup>Cs<sup>-1</sup></b><br></br>
      Option d:- <b>36J<sup>o</sup>Cs<sup>-1</sup></b><br></br>  
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>A particle executing simple harmonic motion has an amplitude of 6cm. Its acceleration at a distance 2cm from the mean function is 8cms<sup>-2</sup>. The maximum speed of the particle is<br></br>[<b>EAMCET 2000E</b>]
      <br></br>
      Option a:- <b>8 cms<sup>-1</sup></b><br></br>
      Option b:- <b>12 cms<sup>-1</sup></b><br></br>
      Option c:- <b>16 cms<sup>-1</sup></b><br></br>
      Option d:- <b>24 cms<sup>-1</sup></b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>Two particles P and Q start from origin and execute simple harmonic motion along X-axis with same amplitude but with periods 3 seconds and 6 seconds respectively. The ratio of the velocities of P and Q when they meet is
    <br></br>[<b>EAMCET 2001 M</b>]
      <br></br>
      Option a:- <b>1:2</b><br></br>
      Option b:- <b>2:1</b><br></br>
      Option c:- <b>2:3</b><br></br>
      Option d:- <b>3:2</b><br></br>
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>If the displacement(x) and velocity(v) of a particle executing simple harmonic motion are related through the expression 4v<sup>2</sup>=25-x<sup>2</sup>, then its time period is 
    <br></br>[<b>EAMCET 2002 E</b>]
      <br></br>
      Option a:- <b>{'\u03c0'}</b><br></br>
      Option b:- <b>2{'\u03c0'}</b><br></br>
      Option c:- <b>4{'\u03c0'}</b><br></br>
      Option d:- <b>6{'\u03c0'}</b><br></br>
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

      <p><b>Question No.26:</b><br></br>The time period of a simple pendulum is T. When the length is increased by 10cm, its period is T<sub>1</sub>.When the length is decreased by 10cm, its period is T<sub>2</sub>.Then relation between T,T<sub>1</sub>,T<sub>2</sub> is
    <br></br>[<b>EAMCET 2004 E</b>]      <br></br>
      Option a:- <b>2/T<sup>2</sup>=1/T<sub>1</sub><sup>2</sup>+1/T<sub>2</sub><sup>2</sup></b><br></br>
      Option b:- <b>2/T<sup>2</sup>=1/T<sub>1</sub><sup>2</sup>-1/T<sub>2</sub><sup>2</sup></b><br></br>
      Option c:- <b>2T<sup>2</sup>=T<sub>1</sub><sup>2</sup>+T<sub>2</sub><sup>2</sup></b><br></br>
      Option d:- <b>2T<sup>2</sup>=T<sub>1</sub><sup>2</sup>-T<sub>2</sub><sup>2</sup></b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>A body of mass 'm' suspended to an ideal spring of force constant K. The expected change in the position of the body due to an additional force F acting vertically downwards is
    <br></br>[<b>EAMCET 2005 E</b>]
      <br></br>
      Option a:- <b>3F/2K</b><br></br>
      Option b:- <b>2F/K</b><br></br>
      Option c:- <b>5F/2K</b><br></br>
      Option d:- <b>4F/K</b><br></br>      
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>The displacement of a particle of mass 3 gm executing ssinimple harmonic motion is given by y=3sin(0.2t) in SI units. The kinetic energy of the particle at a point which is at a distance equal to 1/3 of its amplitude from its mean position is
    <br></br>[<b>EAMCET 2007 M</b>]
      <br></br>
      Option a:- <b>12x10<sup>-3</sup> J</b><br></br>
      Option b:- <b>25x10<sup>-3</sup> J</b><br></br>
      Option c:- <b>0.48x10<sup>-3</sup> J</b><br></br>
      Option d:- <b>0.24x10<sup>-3</sup> J</b><br></br>      
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b>A girl swings on a cradle in sitting position. If she stands, the time period of cradle is
    <br></br>[<b>EAMCET 2008 M</b>]      <br></br>
      Option a:- <b>decreases</b><br></br>
      Option b:- <b>increases</b><br></br>
      Option c:- <b>remains constant</b><br></br>
      Option d:- <b>first increases then remains constant</b><br></br>
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>A clock pendulum made of invar has a period of 0.5sec at 20<sup>o</sup>C.If the clock is used in a climate where the temperature averages to 30<sup>o</sup>C,how much does the clock lose in each oscillation(for invar {'\u03b1'}= 9x10<sup>-7</sup>/<sup>o</sup>C, g= constant)
    <br></br>[<b>EAMCET 2009 M</b>]      <br></br>
      Option a:- <b>2.25x10<sup>-6</sup>sec</b><br></br>
      Option b:- <b>2.5x10<sup>-7</sup>sec</b><br></br>
      Option c:- <b>5x10<sup>-7</sup>sec</b><br></br>
      Option d:- <b>1.125x10<sup>-6</sup>sec</b><br></br>
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>A mass M is suspended from a light spring. An additional mass m is added, displaces the spring further by a disyance 'x'. Now the combined mass will oscillate with a period
    <br></br>[<b>EAMCET 2010 M</b>]      <br></br>
      Option a:- <b>T= 2{'\u03c0'}{'\u221a'}[mg/(x[m+M])]</b><br></br>
      Option b:- <b>T= 2{'\u03c0'}{'\u221a'}[x(m+M)/mg]</b><br></br>
      Option c:- <b>T= (2{'\u03c0'}/3){'\u221a'}[mg/(x[m+M])]</b><br></br>
      Option d:- <b>T= 2{'\u03c0'}{'\u221a'}[(m+M)/mgx]</b><br></br> 
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>A mass is suspended from the end of a spring. When the system is oscillating the amplitude of oscillation is 4 cm and maximum kinetic energy of oscillation of the system is 1 joule. Then the force constant of the spring is  
    <br></br>[<b>EAMCET 2012 M</b>]      <br></br>
      Option a:- <b>250 N/m</b><br></br>
      Option b:- <b>2500 N/m</b><br></br>
      Option c:- <b>500 N/m</b><br></br>
      Option d:- <b>1250 N/m</b><br></br>
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b> <br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>Two particles A and B of masses 'm' and '2m' are suspended from two massless springs of force constants K<sub>1</sub> and K<sub>2</sub>. During their oscillation, if their maximum velocities are equal, then the ratio of amplitudes of A and B is
    <br></br>[<b>EAMCET 2013 E</b>]      <br></br>
      Option a:- <b>{'\u221a'}(K<sub>1</sub>/K<sub>2</sub>)</b><br></br>
      Option b:- <b>{'\u221a'}(K<sub>2</sub>/2K<sub>1</sub>)</b><br></br>
      Option c:- <b>{'\u221a'}(K<sub>2</sub>/K<sub>1</sub>)</b><br></br>
      Option d:- <b>{'\u221a'}(2K<sub>1</sub>/K<sub>2</sub>)</b><br></br> 
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>The ratio between kinectic and potential energies of a body executing simple harmonic motion, where it is at a distance of 1/N of its amplitude from the mean position is
        <br></br>[<b>EAMCET 2014 E</b>]
      <br></br>
      Option a:- <b>1/N<sup>2</sup></b><br></br>
      Option b:- <b>N<sup>2</sup></b><br></br>
      Option c:- <b>N<sup>2</sup>-1</b><br></br>
      Option d:- <b>N<sup>2</sup>+1</b><br></br>     
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>Maximum velocity in SHM is V<sub>m</sub>. The average velocity during motion from one extreme point to the other extreme will be 
    <br></br>[<b>EAMCET 2015 AP E</b>]      <br></br>
      Option a:- <b>{'\u03c0'}V<sub>m</sub>/2</b><br></br>
      Option b:- <b>2V<sub>m</sub>/{'\u03c0'}</b><br></br>
      Option c:- <b>4V<sub>m</sub>/{'\u03c0'}</b><br></br>
      Option d:- <b>{'\u03c0'}V<sub>m</sub>/4</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>A heavy brass sphere is hung from a weightless elsatic cord and acts as a simple pendulum with its period of oscillation T. The sphere is immersed in non-viscous liquid of density 1/10 of the density of brass. Then it will act as a simple pendulum of period
    <br></br>[<b>EAMCET 2015 TS E</b>]
      <br></br>
      Option a:- <b>10T/9</b><br></br>
      Option b:- <b>T</b><br></br>
      Option c:- <b>(9/10)<sup>2</sup>T</b><br></br>
      Option d:- <b>{'\u221a'}(10/9)T </b><br></br>
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>The amplitude of a damped oscillator becomes half in one minute. The amplitude after 3 minutes will be 1/x times the original. Then x is
    <br></br>[<b>EAMCET 2019 AP E</b>]
      <br></br>
      Option a:- <b>4</b><br></br>
      Option b:- <b>8</b><br></br>
      Option c:- <b>6</b><br></br>
      Option d:- <b>12</b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>Consider a pair of identical pendulums, which oscillate with equal amplitude independently such that when one pendulum is at its extreme position making an angle of 4<sup>o</sup> to the right with the vertical, the other pendulum makes an angle of 2<sup>o</sup> to the left of the vertical. The phase difference between the pendulums is
      <br></br>[<b>EAMCET 2019 AP M</b>]
      <br></br>
      Option a:- <b>{'\u03c0'}/4</b><br></br>
      Option b:- <b>2{'\u03c0'}/3</b><br></br>
      Option c:- <b>{'\u03c0'}/3</b><br></br>
      Option d:- <b>{'\u03c0'}/2</b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>A uniform rod of length 1.8m suspended by an end is made to undergo small oscillations. Find the length of the simple pendulum having the mass and time period equal to that of the rod
    <br></br>[<b>EAMCET 2019 TS E</b>]
      <br></br>
      Option a:- <b>3.6m</b><br></br>
      Option b:- <b>1.2m</b><br></br>
      Option c:- <b>2.4m</b><br></br>
      Option d:- <b>4.2m</b><br></br>
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>A ball connected to a mass-less spring is executing simple harmonic motion. If K and U are the kinetic and potential energy respectively, then the ratio K/U, when the displacement of the ball is one-third the amplitude will be
    <br></br>[<b>EAMCET 2019 TS M</b>]
      <br></br>
      Option a:- <b>6</b><br></br>
      Option b:- <b>9/2</b><br></br>
      Option c:- <b>14/5</b><br></br>
      Option d:- <b>9/2</b><br></br>
      seelected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div>
    </div>
    <button onClick={() => exportAsImage(exportRef.current, "Oscillations")} style={bstyle} >Download Summary</button></div>
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
export default connect (mapStateToProps,mapDispatchToProps) (QXsummary)