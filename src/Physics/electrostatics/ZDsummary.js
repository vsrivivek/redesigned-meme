import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux'
import Logo from '../../redux/Images/Logo.jpg'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { statUpdateref } from '../../redux/cake/cakeAction';



function ZDsummary(props) {
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
const correct=["d","a","d","d", "c","d","b","d", "b","d","d","d", "a","c","c","a", "b","b","b","d", "c","c","c","c", "a","b","d","b", "b","a","b","a", "c","a","b","d", "d","a","b","c"]; 
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
    }>Performance Summary- Electrostatics</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>

      <p><b>Question No.1:</b> A cylinder of radius R and length L is placed in a uniform electric field E parallel to the cylindrical axis.The total flux of the surface of the cylinder is <br></br>
      Option a:- <b>2{'\u03c0'}R<sup>2</sup>E</b><br></br>
      Option b:- <b>{'\u03c0'}R<sup>2</sup>E</b><br></br>
      Option c:- <b>{'\u03c0'}(R<sup>2</sup>+r<sup>2</sup>)/E</b><br></br>
      Option d:- <b>Zero</b><br></br>
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:-<b>{props.result}</b><br></br>
      Marks:-<b>{props.mark}</b><br></br>
      </p><br></br>
      <p><b>Question No.2 </b>:Three charges 'q','Q' and '4q' are placed in a straight line of length 'l' at points at distance of '0','l/2','l' respectively from one end. In order to make the net force on 'q' zero, the charge Q must be equal to
      <br></br>
      Option a:- <b>-q</b><br></br>
      Option b:- <b>-2q</b><br></br>
      Option c:- <b>-q/2</b><br></br>
      Option d:- <b>q</b><br></br>
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:-<b>{props.resultone}</b><br></br>
      Marks:-<b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3</b>:Two equal negative charges -q are fixed at the points (o,a) and (0,-a) on the Y-axis. A positive charge Q is released from rest at the point (2a,0) on the X-axis. The charge Q will
      <br></br>
      Option a:- <b>execute simple harmonic motion about the origin</b><br></br>
      Option b:- <b>move to the origin and remains at rest</b> <br></br>
      Option c:- <b>move to infinity</b><br></br>
      Option d:- <b>execute oscillatory but not simple harmonic motion</b><br></br>
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b> <br></br>
      Result:<b>{props.resulttwo}</b><br></br>
      Marks:<b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4</b>:The radius of a hollow metallic sphere is 'R'. If the potential difference between its surface and a point at distance of 3R from its centre is V, then the electric field intensity at a distance of 3R from its centr is
      <br></br>
      Option a:- <b>V/2R</b><br></br>
      Option b:- <b>V/3R </b> <br></br>
      Option c:- <b>V/4R </b><br></br>
      Option d:- <b>V/6R </b><br></br>
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:<b>{props.resultthree}</b><br></br>
      Marks:<b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5</b>:The capacities of two conductors are C<sub>1</sub>,C<sub>2</sub> and their respective potentials are V<sub>1</sub>,V<sub>2</sub>.If they are connected by a thin wire, then the loss of energy will be
      <br></br>
      Option a:- <b>[C<sub>1</sub>C<sub>2</sub>(V<sub>1</sub>+V<sub>2</sub>)]/2(C<sub>1</sub>+C<sub>2</sub>)</b><br></br>
      Option b:- <b>[C<sub>1</sub>C<sub>2</sub>(V<sub>1</sub>-V<sub>2</sub>)]/2(C<sub>1</sub>+C<sub>2</sub>)</b> <br></br>
      Option c:- <b>[C<sub>1</sub>C<sub>2</sub>(V<sub>1</sub>+V<sub>2</sub>)<sup>2</sup>]/2(C<sub>1</sub>+C<sub>2</sub>)</b><br></br>
      Option d:- <b>[(C<sub>1</sub>+C<sub>2</sub>)(V<sub>1</sub>-V<sub>2</sub>)]/(C<sub>1</sub>C<sub>2</sub>)</b><br></br>
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:<b>{props.resultfour}</b><br></br>
      Marks:<b>{props.markfour}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.6</b>:A charge Q is kept at the centre of a circle of radius 'r'. If the permittivity of free space is {'\u03b5'}<sub>0</sub> then the work done in carrying a charge q along the diameter of the circle will be
      <br></br>
      Option a:- <b>qQ/(4{'\u03c0'}{'\u03b5'}<sub>0</sub>{'\u03b5'}<sub>r</sub>r)</b><br></br>
      Option b:- <b>qQ/(8{'\u03c0'}{'\u03b5'}<sub>0</sub>r)</b> <br></br>
      Option c:- <b>qQ/(2{'\u03c0'}{'\u03b5'}<sub>0</sub>)</b><br></br>
      Option d:- <b>Zero </b><br></br>
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:<b>{props.resultfive}</b><br></br>
      Marks:<b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7</b>:A uniform electric field having a magnitude E<sub>0</sub> and direcction along positive X-axis exists. If the potential V is zero t x=0, then its value at x=+x will be
      <br></br>
      Option a:- <b>V(x)=+xE<sub>0</sub></b><br></br>
      Option b:- <b>V(x)=-xE<sub>0</sub></b><br></br>
      Option c:- <b>V(x)=+x<sup>2</sup>E<sub>0</sub></b><br></br>
      Option d:- <b>V(x)=-x<sup>2</sup>E<sub>0</sub></b><br></br>
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:<b>{props.resultsix}</b><br></br>
      Marks:<b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8</b>:A parallel plate capacitor has area of each plate A, the separation between the plates is d. It is charged to a potential V and then disconnected from the battery. How much work will be done in filling the capacitor completely with a dielectric of constant K?
      <br></br>
      Option a:- <b>[({'\u03b5'}<sub>0</sub>AV<sup>2</sup>)/2d][1-(1/K<sup>2</sup>)]</b><br></br>
      Option b:- <b>[({'\u03b5'}<sub>0</sub>AV<sup>2</sup>)/2Kd]</b><br></br>
      Option c:- <b>[({'\u03b5'}<sub>0</sub>AV<sup>2</sup>)/2K<sup>2</sup>d]</b><br></br>
      Option d:- <b>[({'\u03b5'}<sub>0</sub>AV<sup>2</sup>)/2d][1-(1/K)]</b><br></br>    
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:<b>{props.resultseven}</b><br></br>
      Marks:<b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b>A particle 'A' of charge '+q' and a particle 'B' has charge '+4q',each having the same mass 'm'. When allowed to fall from rest through the same electric potential difference, the ratio of the speed of 'A' to that of 'B' will be
      <br></br>
      Option a:- <b>2:1</b><br></br>
      Option b:- <b>1:2</b><br></br>
      Option c:- <b>4:1</b><br></br>
      Option d:- <b>1:4</b><br></br>                   
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:<b>{props.resulteight}</b><br></br>
      Marks:<b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b>A capacitor of 1{'\u03bc'}F withstands a maximum voltage of 6 kilovolt while another capacitor of 2{'\u03bc'}F withstands a maximum voltage of 4 kilovolt. If the two capacitors are connected in series, the system will withstand a maximum voltage of
      <br></br>
      Option a:- <b>2KV</b><br></br>
      Option b:- <b>4KV</b><br></br>
      Option c:- <b>6KV</b><br></br>
      Option d:- <b>9KV</b><br></br>          
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:<b>{props.resultnine}</b><br></br>
      Marks:<b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b>A cube of side 'b' has a charge 'q' at each end of its vertices. The electric field due to this charge contribution at the centre of the cube is
      <br></br>
      Option a:- <b>q/b</b><br></br>
      Option b:- <b>q/2b<sup>2</sup></b><br></br>
      Option c:- <b>32q/b<sup>2</sup></b><br></br>
      Option d:- <b>Zero</b><br></br>
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:<b>{props.resultten}</b><br></br>
      Marks:<b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b>Equal charges 'q' are placed at four corners A,B,C,D of a square of side 'a'. The magnitude of the force on the charge at 'C' will be
      <br></br>
      Option a:- <b>3q<sup>2</sup>/(4{'\u03c0'}{'\u03b5'}<sub>0</sub>a<sup>2</sup>)</b><br></br>
      Option b:- <b>4q<sup>2</sup>/(4{'\u03c0'}{'\u03b5'}<sub>0</sub>a<sup>2</sup>)</b><br></br>
      Option c:- <b>[(1+2{'\u221a'}2)/2]q<sup>2</sup>/(4{'\u03c0'}{'\u03b5'}<sub>0</sub>a<sup>2</sup>)</b><br></br>
      Option d:- <b>[2+(1/{'\u221a'}2)]q<sup>2</sup>/(4{'\u03c0'}{'\u03b5'}<sub>0</sub>a<sup>2</sup>)</b><br></br>
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:<b>{props.resulteleven}</b><br></br>
      Marks:<b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b>A condenser of capacity C<sub>1</sub> is charged to a certain potential. The electrostatic energy stored in it is 'U'. If it is connected to another uncharged condenser of capacity C<sub>2</sub> in parallel, the energy dissipated in the process will be 
      <br></br>
      Option a:- <b>C<sub>2</sub>U/(C<sub>1</sub>+C<sub>2</sub>)</b><br></br>
      Option b:- <b>C<sub>1</sub>U/(C<sub>1</sub>+C<sub>2</sub>)</b><br></br>
      Option c:- <b>[(C<sub>1</sub>-C<sub>2</sub>)/(C<sub>1</sub>+C<sub>2</sub>)]<sup>2</sup>U</b><br></br>
      Option d:- <b>[C<sub>1</sub>C<sub>2</sub>/2(C<sub>1</sub>+C<sub>2</sub>)]U</b><br></br>
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:<b>{props.resulttwelve}</b><br></br>
      Marks:<b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b>A charge q is placed at the midpoint of the line joining two equal charges Q. The system of three charges will be in equilibrium wen q has the value 
      <br></br>
      Option a:- <b>Q/4</b><br></br>
      Option b:- <b>Q/2</b><br></br>
      Option c:- <b>-Q/4</b><br></br>
      Option d:- <b>-Q/2</b><br></br>
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:<b>{props.resultthirteen}</b><br></br>
      Marks:<b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b>There is an electric field E in X-direction. If work done in moving a charge 0.2C through a distance of 2m along a line making an angle 60<sup>o</sup> with X-axis is 4.0J. The value of E is
      <br></br>
      Option a:- <b>{'\u221a3'}NC<sup>-1</sup></b><br></br>
      Option b:- <b>4NC<sup>-1</sup></b><br></br>
      Option c:- <b>5NC<sup>-1</sup></b><br></br>
      Option d:- <b>None of these</b><br></br>
      selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:<b>{props.resultfourteen}</b><br></br>
      Marks:<b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b>Two equal charges q of opposite sign separated by a distance 2a constitute an electric dipole of dipole moment P. If P is a point at a distance r from the centre of the dipole and the line joining centre to this point makes an angle '{'\u03b8'}' with the axis the dipole,then the potential at the point P is given by (r{'\u003e'}{'\u003e'}2d)
      <br></br>
      Option a:- <b>V=Pcos{'\u03b8'}/(4{'\u03c0'}{'\u03b5'}<sub>0</sub>r<sup>2</sup>)</b><br></br>
      Option b:- <b>V=Pcos{'\u03b8'}/(4{'\u03c0'}{'\u03b5'}<sub>0</sub>r)</b><br></br>
      Option c:- <b>V=Psin{'\u03b8'}/(4{'\u03c0'}{'\u03b5'}<sub>0</sub>r)</b><br></br>
      Option d:- <b>V=Pcos{'\u03b8'}/(4{'\u03c0'}{'\u03b5'}<sub>0</sub>r<sup>3</sup>)</b><br></br>
      selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:<b>{props.resultfifteen}</b><br></br>
      Marks:<b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b>An electric dipole is placed along the X-axis at the origin O. A point P ia at a distance of 20cm from this origin such that OP makes an angle {'\u03c0'}/3 with the X-axis.If electric field at P makes and angle '{'\u03b8'}' with X-axis, the value of '{'\u03b8'}' is
      <br></br>
      Option a:- <b>{'\u03c0'}/3</b><br></br>
      Option b:- <b>({'\u03c0'}/3)+tan<sup>-1</sup>[({'\u221a3'})/2]</b><br></br>
      Option c:- <b>3{'\u03c0'}/2</b><br></br>
      Option d:- <b>tan<sup>-1</sup>[({'\u221a3'})/2]</b><br></br>
      selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:<b>{props.resultsixteen}</b><br></br>
      Marks:<b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b>A semi-circular arc of radius 'a' is charged uniformly and the change per unit length is {'\u03bb'}. The electric field at its centre is
      <br></br>
      Option a:- <b>{'\u03bb'}/(2{'\u03c0'}{'\u03b5'}<sub>0</sub>a<sup>2</sup>)</b><br></br>
      Option b:- <b>{'\u03bb'}/(4{'\u03c0'}{'\u03b5'}<sub>0</sub>a)</b><br></br>
      Option c:- <b>{'\u03bb'}<sup>2</sup>/(2{'\u03c0'}{'\u03b5'}<sub>0</sub>a)</b><br></br>
      Option d:- <b>{'\u03bb'}/(2{'\u03c0'}{'\u03b5'}<sub>0</sub>a)</b><br></br>
      selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:<b>{props.resultseventeen}</b><br></br>
      Marks:<b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b>A charged particle q is placed at the centre O of a cube of length L. Another same charge q is placed at a distance L from O. The electric flux through the cube is
      <br></br>
      Option a:- <b>q/(4{'\u03c0'}{'\u03b5'}<sub>0</sub>L)</b><br></br>
      Option b:- <b>q/{'\u03b5'}<sub>0</sub></b><br></br>
      Option c:- <b>2q/{'\u03b5'}<sub>0</sub></b><br></br>
      Option d:- <b>Zero</b><br></br>
      selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:<b>{props.resulteighteen}</b><br></br>
      Marks:<b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b>If the electric flux entering and leaving an enclosed surface respectively is {'\u03a6'}<sub>1</sub> and {'\u03a6'}<sub>2</sub>,the electric charge inside the surface will be
      <br></br>
      Option a:- <b>({'\u03a6'}<sub>2</sub>-{'\u03a6'}<sub>1</sub>)/{'\u03b5'}<sub>0</sub></b><br></br>
      Option b:- <b>({'\u03a6'}<sub>2</sub>+{'\u03a6'}<sub>1</sub>)/{'\u03b5'}<sub>0</sub></b><br></br>
      Option c:- <b>({'\u03a6'}<sub>1</sub>-{'\u03a6'}<sub>2</sub>)/{'\u03b5'}<sub>0</sub></b><br></br>
      Option d:- <b>{'\u03b5'}<sub>0</sub>({'\u03a6'}<sub>1</sub>+{'\u03a6'}<sub>2</sub>)</b><br></br>
      selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:<b>{props.resultnineteen}</b><br></br>
      Marks:<b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b>Two charges of 4{'\u03bc'}C each are placed at the corners of A and B of an equilateral triangle ABC of side length 0.2 m in air. The electric potential at C is[1/(4{'\u03c0'}{'\u03b5'}<sub>0</sub>)=9x10<sup>9</sup>N-m<sup>2</sup>c<sup>-2</sup>]
      <br></br>
      Option a:- <b>9x10<sup>4</sup>V</b><br></br>
      Option b:- <b>18x10<sup>4</sup>V</b><br></br>
      Option c:- <b>36x10<sup>4</sup>V</b><br></br>
      Option d:- <b>72x10<sup>4</sup>V</b><br></br>
      selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:<b>{props.resulttwenty}</b><br></br>
      Marks:<b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b>There is a uniform electric field of strength 10<sup>3</sup>Vm<sup>-1</sup> along Y-axis. A body of mass 1gm and charge 10<sup>-6</sup>C is projected into the field from origin along the positive X-axis with a velocity of 10ms<sup>-1</sup>. Its speed in ms<sup>-1</sup> after 10s is (Neglect gravitation)
      <br></br>
      Option a:- <b>10</b><br></br>
      Option b:- <b>5{'\u221a2'}</b><br></br>
      Option c:- <b>10{'\u221a2'}</b><br></br>
      Option d:- <b>20</b><br></br>
      selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:<b>{props.resulttwentyone}</b><br></br>
      Marks:<b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b>Two capacitors of capacity 4{'\u03bc'}F and 6{'\u03bc'}F are connected in series and a battery is connected to the combinationand the energy stored is E<sub>1</sub>. If they are connected in parallel and if the same battery is connected to the combination of capacitors and the energy is E<sub>2</sub>. The ratio of E<sub>1</sub> and E<sub>2</sub> is
      <br></br>
      Option a:- <b>4:9</b><br></br>
      Option b:- <b>9:14</b><br></br>
      Option c:- <b>6:25</b><br></br>
      Option d:- <b>7:12</b><br></br>
      selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:<b>{props.resulttwentytwo}</b><br></br>
      Marks:<b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b>A parallel plate capacitor of capacity 5{'\u03bc'}F and plate separation 6cm is connected to a 1V battery and is charged. A dielectric of dielectric constant 4 and thickness 4cm is introduced into the capacitor. The additional charge that flows into the capacitor from the battery is
      <br></br>
      Option a:- <b>2{'\u03bc'}C</b><br></br>
      Option b:- <b>3{'\u03bc'}C</b><br></br>
      Option c:- <b>5{'\u03bc'}C</b><br></br>
      Option d:- <b>10{'\u03bc'}C</b><br></br>
      selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:<b>{props.resulttwentythree}</b><br></br>
      Marks:<b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b>A parallel plate capacitor of capacity 100{'\u03bc'}F is charged by a battery of 50 volts. The battery remains connected and if the plates of the capacitors are separated so that the distance between them becomes double the original distance, the additional energy given by the battery to the capcitors in joules is
      <br></br>
      Option a:- <b>125x10<sup>-3</sup></b><br></br>
      Option b:- <b>12.5x10<sup>-3</sup></b><br></br>
      Option c:- <b>1.25x10<sup>-3</sup></b><br></br>
      Option d:- <b>0.125x10<sup>-3</sup></b><br></br> 
      selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:<b>{props.resulttwentyfour}</b><br></br>
      Marks:<b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b>The time in seconds required to produce a potential difference of 20V across a capacitor of 1000{'\u03bc'}F when it is charged at the steady rate of 200{'\u03bc'}C/s is
      <br></br>
      Option a:- <b>50</b><br></br>
      Option b:- <b>100</b><br></br>
      Option c:- <b>150</b><br></br>
      Option d:- <b>200</b><br></br> 
      selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:<b>{props.resulttwentyfive}</b><br></br>
      Marks:<b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b>Two electrons separated by a distance of 'r' experience force 'F' between them. The force between a proton and singly ionised helium atom separated by a distance 2r is
      <br></br>
      Option a:- <b>4F</b><br></br>
      Option b:- <b>2F</b><br></br>
      Option c:- <b>F/2</b><br></br>
      Option d:- <b>F/4</b><br></br> 
      selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:<b>{props.resulttwentysix}</b><br></br>
      Marks:<b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b>The capacities of three capacitors are in the raatio of 1:2:3. Their equivalent capacity when connected in parallel is 60/11{'\u03bc'}F more than when they are connected in series. The individual capacities of capacitors in {'\u03bc'}F are
      <br></br>
      Option a:- <b>4,6,7</b><br></br>
      Option b:- <b>1,2,3</b><br></br>
      Option c:- <b>2,3,4</b><br></br>
      Option d:- <b>1,3,6</b><br></br> 
      selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:<b>{props.resulttwentyseven}</b><br></br>
      Marks:<b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b>The capacities of three capacitors are in the raatio of 1:2:3. Their equivalent capacity when connected in parallel is 60/11{'\u03bc'}F more than when they are connected in series. The individual capacities of capacitors in {'\u03bc'}F are
      <br></br>
      Option a:- <b>4,6,7</b><br></br>
      Option b:- <b>1,2,3</b><br></br>
      Option c:- <b>2,3,4</b><br></br>
      Option d:- <b>1,3,6</b><br></br> 
      selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:<b>{props.resulttwentyeight}</b><br></br>
      Marks:<b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b>A condenser of capacity C<sub>1</sub> is charged to a certain potential. The electrostatic energy stored in it is 'U'. If it is connected to another uncharged condenser of capacity C<sub>2</sub> in parallel, the energy dissipated in the process will be
      <br></br>
      Option a:- <b>C<sub>2</sub>U/(C<sub>1</sub>+C<sub>2</sub>)</b><br></br>
      Option b:- <b>C<sub>1</sub>U/(C<sub>1</sub>+C<sub>2</sub>)</b><br></br>
      Option c:- <b>[(C<sub>1</sub>-C<sub>2</sub>)/(C<sub>1</sub>+C<sub>2</sub>)]<sup>2</sup>U</b><br></br>
      Option d:- <b>[C<sub>1</sub>C<sub>2</sub>/2(C<sub>1</sub>+C<sub>2</sub>)]U</b><br></br> 
      selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:<b>{props.resulttwentynine}</b><br></br>
      Marks:<b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b>An infinite line of charge with uniform line charge density of 1 C/m is placed along the y-axis. A charge of 1C is placed on the X-axis at a distance of d=3m from the origin. At what distance (r) from the origin on the X-axis, the total electric field is zero(Assume 0{'\u003c'}r{'\u003c'}d)
      <br></br>
      Option a:- <b>1 m</b><br></br>
      Option b:- <b>2 m</b><br></br>
      Option c:- <b>2.5 m</b><br></br>
      Option d:- <b>1.75 m</b><br></br>
      selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:<b>{props.resultthirty}</b><br></br>
      Marks:<b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b>A capacitor of capacitance 4{'\u03bc'}F is charged to a potential difference of 6V with a battery. The battery is then removed and in its place another capacitor of capacitance 8{'\u03bc'}F is introduced and the circuit is closed. The potential difference attained by each of the capacitors in V is
      <br></br>
      Option a:- <b>2</b><br></br>
      Option b:- <b>4</b><br></br>
      Option c:- <b>6</b><br></br>
      Option d:- <b>8</b><br></br>
      selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b> <br></br>
      Result:<b>{props.resultthirtyone}</b><br></br>
      Marks:<b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b>A metal plate of thickness 2mm and area 36{'\u03c0'}cm<sup>2</sup> is slide into a parallel plate capacitor of plate spacing 6mm and an area 36{'\u03c0'}cm<sup>2</sup>. The metal plate is at a distance 3mm from one of the plates.What is the capacitance of this arrangement
      <br></br>
      Option a:- <b>8pF</b><br></br>
      Option b:- <b>15pF</b><br></br>
      Option c:- <b>25pF</b><br></br>
      Option d:- <b>20pF</b><br></br>
      selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:<b>{props.resultthirtytwo}</b><br></br>
      Marks:<b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b>A negative charge is placed at the centre of the non-conducting sphere. The direction of electric field on any point at the surface of the sphere is
      <br></br>
      Option a:- <b>Radially inwards</b><br></br>
      Option b:- <b>Radially outwards</b><br></br>
      Option c:- <b>Along the tagent to the surface</b><br></br>
      Option d:- <b>No electric field produced</b><br></br>
      selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:<b>{props.resultthirtythree}</b><br></br>
      Marks:<b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b>A spherical drop of liquid carrying charge Q has potential V<sub>0</sub> at its surface. If two drops of same charge and radius combine to form a single spherical drop, then the potential at the surfacce of the new drop is (Assume V=0 at infinity)
      <br></br>
      Option a:- <b>2<sup>1/3</sup>V<sub>0</sub></b><br></br>
      Option b:- <b>4<sup>1/3</sup>V<sub>0</sub></b><br></br>
      Option c:- <b>6<sup>1/3</sup>V<sub>0</sub></b><br></br>
      Option d:- <b>2<sup>-1/3</sup>V<sub>0</sub></b><br></br>
      selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:<b>{props.resultthirtyfour}</b><br></br>
      Marks:<b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b>A spherical drop of liquid carrying charge Q has potential V<sub>0</sub> at its surface. If two drops of same charge and radius combine to form a single spherical drop, then the potential at the surfacce of the new drop is (Assume V=0 at infinity)
      <br></br>
      Option a:- <b>8/{'\u03c0'}</b><br></br>
      Option b:- <b>6{'\u03c0'}</b><br></br>
      Option c:- <b>{'\u03c0'}/6</b><br></br>
      Option d:- <b>12{'\u03c0'}</b><br></br>
      selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:<b>{props.resultthirtyfive}</b><br></br>
      Marks:<b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b>Consider horizontal sheet with charge density 5x10<sup>-6</sup>C/m<sup>2</sup>. A particle of mass 8x10<sup>-6</sup> is dropped from a certain height onto this sheet. The number of electrons that should be removed from this particle so that it stays close to the sheet without falling on it is [g= 10ms<sup>-2</sup> and 1/(4{'\u03c0'}{'\u03b5'}<sub>0</sub>)=9x10<sup>9</sup>N-m<sup>2</sup>c<sup>-2</sup>]
      <br></br>
      Option a:- <b>[2/(9{'\u03c0'})]x10<sup>8</sup></b><br></br>
      Option b:- <b>(2{'\u03c0'}/9)x10<sup>8</sup></b><br></br>
      Option c:- <b>({'\u03c0'}/5)x10<sup>8</sup></b><br></br>
      Option d:- <b>[1/(18{'\u03c0'})]x10<sup>8</sup></b><br></br>
      seelected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:<b>{props.resultthirtysix}</b><br></br>
      Marks:<b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b>An electric dipole of length 5cm is placed in a uniform electric field of 5x10<sup>5</sup>N/C at an angle of 30<sup>o</sup> with the charges +10mC and -10mC on the dipole. the dipole experiences a torque of
      <br></br>
      Option a:- <b>125 Nm</b><br></br>
      Option b:- <b>250 Nm</b><br></br>
      Option c:- <b>75 Nm</b><br></br>
      Option d:- <b>100 Nm</b><br></br>
      seelected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:<b>{props.resultthirtyseven}</b><br></br>
      Marks:<b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b>A parallel plate capacitor of two plates, each with area 90{'\u03c0'} cm<sup>2</sup>, is separated by 5mm air-gap. The capacitor is initially connected to 100V source. When an unknown liquid is filled between the plates so as to fill the air-gap, an additional charge of 95nC is found to be flowing onto the the capacitor from the 100V source. The dielectric constant of the liquid is[1/(4{'\u03c0'}{'\u03b5'}<sub>0</sub>)=9x10<sup>9</sup>N-m<sup>2</sup>c<sup>-2</sup>]
      <br></br>
      Option a:- <b>25</b><br></br>
      Option b:- <b>20</b><br></br>
      Option c:- <b>30</b><br></br>
      Option d:- <b>10</b><br></br>
      seelected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:<b>{props.resultthirtyeight}</b><br></br>
      Marks:<b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b>The radii of spheres A and B are 'a' and 'b' respectively. They are at equal electric potential. If {'\u03c3'}<sub>A</sub>,{'\u03c3'}<sub>B</sub> be surface charge density of A and B respectively, the {'\u03c3'}<sub>A</sub>/{'\u03c3'}<sub>B</sub> is
      <br></br>
      Option a:- <b>a<sup>2</sup>/b<sup>2</sup></b><br></br>
      Option b:- <b>a/b</b><br></br>
      Option c:- <b>b/a</b><br></br>
      Option d:- <b>b<sup>2</sup>/a<sup>2</sup></b><br></br>
      seelected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:<b>{props.resultthirtynine}</b><br></br>
      Marks:<b>{props.markthirtynine}</b><br></br>
      </p><br></br>
      </div>
    </div>
    <button onClick={() => exportAsImage(exportRef.current, "Electrostatics")} style={bstyle} >Download Summary</button></div>
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
        
     }
    
     }
export default connect (mapStateToProps,mapDispatchToProps) (ZDsummary)