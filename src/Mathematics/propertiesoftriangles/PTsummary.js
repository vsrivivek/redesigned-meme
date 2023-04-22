import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux'
import Logo from '../../redux/Images/Logo.jpg'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { statUpdateref } from '../../redux/cake/cakeAction';



function  PTsummary(props) {
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
const correct=["a","b","b","d", "a","d","c","a", "c","d","a","c", "a","b","c","c", "a","d","c","d", "d","d","d","a", "c","b","b","a", "c","b","a","d", "b","b","c","c", "a","c","b","a"]; 
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
    }>Performance Summary- Properties of Triangles</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>

      <p><b>Question No.1:</b><br></br>In {'\u25b3'}ABC, If a={'\u221a'}3+1, B= 30<sup>o</sup>, C=45<sup>o</sup>, then c=
 <br></br>
      Option a:- <b>2</b><br></br>
      Option b:- <b>3</b><br></br>
      Option c:- <b>4</b><br></br>
      Option d:- <b>1</b><br></br>
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>If {'\u0394'}= a<sup>2</sup>-(b-c)<sup>2</sup> is the area of the triangle ABC, then tan A=
      <br></br>
      Option a:- <b>1/16</b><br></br>
      Option b:- <b>8/15</b><br></br>
      Option c:- <b>3/4</b><br></br>
      Option d:- <b>4/3</b><br></br> 
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>If the sides of a triangle are in the ratio of x : y : {'\u221a'}(x<sup>2</sup>+xy+x<sup>2</sup>), then the greatest angle is<br></br>
      Option a:- <b>90<sup>o</sup></b><br></br>
      Option b:- <b>120<sup>o</sup></b> <br></br>
      Option c:- <b>cos<sup>-1</sup>[(x+y)/(x-y)]</b><br></br>
      Option d:- <b>none</b><br></br> 
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b> <br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>In {'\u25b3'}ABC, if sin<sup>2</sup>A+sin<sup>2</sup>B=sin<sup>2</sup>C,then C=<br></br>
      Option a:- <b>30<sup>o</sup></b><br></br>
      Option b:- <b>45<sup>o</sup></b><br></br>
      Option c:- <b>60<sup>o</sup></b><br></br>
      Option d:- <b>90<sup>o</sup></b><br></br>         
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>In {'\u25b3'}ABC, if a<sup>2</sup>+b<sup>2</sup>+c<sup>2</sup>=8R<sup>2</sup>, then the triangle is
      <br></br>
      Option a:- <b>right angled</b><br></br>
      Option b:- <b>isosceles</b> <br></br>
      Option c:- <b>equilateral</b><br></br>
      Option d:- <b>none</b><br></br>   
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>The radius of the circumcircle of an isosceles triangle PQR is equal to PQ(=PR), then the angle P is
        <br></br>
      Option a:- <b>π/6</b><br></br>
      Option b:- <b>π/3</b><br></br>
      Option c:- <b>π/2</b><br></br>
      Option d:- <b>π</b><br></br>
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>If ABC is a triangle then one root of x<sup>2</sup>-2bxcosA+b<sup>2</sup>-a<sup>2</sup>=0 is
        <br></br>
      Option a:- <b>a</b><br></br>
      Option b:- <b>b</b><br></br>
      Option c:- <b>c</b><br></br>
      Option d:- <b>none</b><br></br>                               
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>In {'\u25b3'}ABC, {'\u03a3'}[(sin<sup>2</sup>A+sinA+1)/sinA] is always greater than
      <br></br>
      Option a:- <b>9</b><br></br>
      Option b:- <b>3</b><br></br>
      Option c:- <b>27</b><br></br>
      Option d:- <b>none</b><br></br>     
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>If A,B,C are angles of an acute angled triangle then the least valu of tanAtanBtanC=
      <br></br>
      Option a:- <b>1</b><br></br>
      Option b:- <b>3</b><br></br>
      Option c:- <b>{'\u221a'}3</b><br></br>
      Option d:- <b>3{'\u221a'}3</b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>In a right angled triangle {'\u25b3'}ABC, sin<sup>2</sup>A+sin<sup>2</sup>B+sin<sup>2</sup>C=
      <br></br>
      Option a:- <b>0</b><br></br>
      Option b:- <b>1</b><br></br>
      Option c:- <b>-1</b><br></br>
      Option d:- <b>2</b><br></br>  
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>If twice the square of the radius of a circle is equal to half the sum of the squares of the sides of inscribed triangle ABC, then sin<sup>2</sup>A+sin<sup>2</sup>B+sin<sup>2</sup>C=
      <br></br>
      Option a:- <b>1</b><br></br>
      Option b:- <b>2</b><br></br>
      Option c:- <b>4</b><br></br>
      Option d:- <b>8</b><br></br>      
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>In a triangle ABC, if a is the arithmetic mean and b,c (b{'\u2260'}c) are the two geometric means between any two positive real numbers then <br>
    </br> [(sin<sup>3</sup>B+sin<sup>3</sup>C)/sinAsinBsinC]=
      <br></br>
      Option a:- <b>0</b><br></br>
      Option b:- <b>1</b><br></br>
      Option c:- <b>2</b><br></br>
      Option d:- <b>4</b><br></br>
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>In {'\u25b3'}ABC, {'\u03a3'}a<sup>2</sup>(cos<sup>2</sup>B-cos<sup>2</sup>C)
      <br></br>
      Option a:- <b>0</b><br></br>
      Option b:- <b>1</b><br></br>
      Option c:- <b>2</b><br></br>
      Option d:- <b>3</b><br></br> 
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>In {'\u25b3'}ABC, C=90<sup>o</sup>. Then [(a<sup>2</sup>-b<sup>2</sup>)/(a<sup>2</sup>+b<sup>2</sup>)]
      <br></br>
      Option a:- <b>sin(A+B)</b><br></br>
      Option b:- <b>sin(A-B)</b><br></br>
      Option c:- <b>cos(A+B)</b><br></br>
      Option d:- <b>cos(A-B)</b><br></br> 
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>


      <p><b>Question No.15:</b><br></br>If {'\u25b3'}ABC is such that {'\u2220'}A=90<sup>o</sup> and {'\u2220'}B{'\u2260'}{'\u2220'}C, then <br>
    </br> [(b<sup>2</sup>+c<sup>2</sup>)/(b<sup>2</sup>-c<sup>2</sup>)] sin(B-C) =
      <br></br>
      Option a:- <b>1/3</b><br></br>
      Option b:- <b>1/2</b><br></br>
      Option c:- <b>1</b><br></br>
      Option d:- <b>3/2</b><br></br> 
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>In any {'\u25b3'}ABC, [(a+b+c)(b+c-a)(c+a-b)(a+b-c)]/4b<sup>2</sup>c<sup>2</sup>
      <br></br>
      Option a:- <b>cos<sup>2</sup>A</b><br></br>
      Option b:- <b>cos<sup>2</sup>B</b><br></br>
      Option c:- <b>sin<sup>2</sup>A</b><br></br>
      Option d:- <b>sin<sup>2</sup>B</b><br></br>
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>In {'\u25b3'}ABC, {'\u03a3'}a<sup>3</sup> sin(B-C)
      <br></br>
      Option a:- <b>0</b><br></br>
      Option b:- <b>1</b><br></br>
      Option c:- <b>2</b><br></br>
      Option d:- <b>3</b><br></br> 
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>In {'\u25b3'}ABC, [sinA(a-bcosC)]/[sinC(c-acosB)]
      <br></br>
      Option a:- <b>-2</b><br></br>
      Option b:- <b>-1</b><br></br>
      Option c:- <b>0</b><br></br>
      Option d:- <b>1</b><br></br>
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>In {'\u25b3'}ABC, (b+c-a)tan(A/2)=
      <br></br>
      Option a:- <b>{'\u25b3'}</b><br></br>
      Option b:- <b>2{'\u25b3'}</b><br></br>
      Option c:- <b>2{'\u25b3'}/s</b><br></br>
      Option d:- <b>none</b><br></br>
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>In {'\u25b3'}ABC, {'\u03a3'}(b+c)tan(A/2)tan[(B-C)/2]
      <br></br>
      Option a:- <b>a</b><br></br>
      Option b:- <b>b</b><br></br>
      Option c:- <b>c</b><br></br>
      Option d:- <b>0</b><br></br> 
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>In {'\u25b3'}ABC, (a-b)<sup>2</sup>cos<sup>2</sup>(C/2)+(a+b)<sup>2</sup>sin<sup>2</sup>(C/2)
      <br></br>
      Option a:- <b>c</b><br></br>
      Option b:- <b>c/2</b><br></br>
      Option c:- <b>2c<sup>o</sup>Cs<sup>-1</sup></b><br></br>
      Option d:- <b>c<sup>2</sup></b><br></br>  
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>Two sides of a triangle are given by the roots of the equation x<sup>2</sup>-5x+6=0 and the angle between the sides is π/3. Then the perimeter of the triangle is
      <br></br>
      Option a:- <b>5+{'\u221a'}2</b><br></br>
      Option b:- <b>5+{'\u221a'}3</b><br></br>
      Option c:- <b>5+{'\u221a'}5</b><br></br>
      Option d:- <b>5+{'\u221a'}7</b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>In {'\u25b3'}ABC, a<sup>2</sup>sin2C+c<sup>2</sup>sin2A=
      <br></br>
      Option a:- <b>{'\u25b3'}</b><br></br>
      Option b:- <b>2{'\u25b3'}</b><br></br>
      Option c:- <b>3{'\u25b3'}</b><br></br>
      Option d:- <b>4{'\u25b3'}</b><br></br>    
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>In {'\u25b3'}ABC, if a,b,c are in AP. The greatest angle is A and least is C then 4(1-cosA)(1-cosB)(1-cosC)=
      <br></br>
      Option a:- <b>cosA+cosC</b><br></br>
      Option b:- <b>cosA-cosC</b><br></br>
      Option c:- <b>sinA+sinC</b><br></br>
      Option d:- <b>cosA-sinC</b><br></br>   
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>In {'\u25b3'}ABC, if cosA+2cosB+cosC=2, then the sides of the triangle are in 
      <br></br>
      Option a:- <b>H.P</b><br></br>
      Option b:- <b>G.P</b><br></br>
      Option c:- <b>A.P</b><br></br>
      Option d:- <b>none</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>In {'\u25b3'}ABC, asin<sup>2</sup>(C/2)+csin<sup>2</sup>(A/2) in terms of s,a,b,c is<br></br>
      Option a:- <b>s</b><br></br>
      Option b:- <b>(s-b)</b><br></br>
      Option c:- <b>a/c</b><br></br>
      Option d:- <b>0</b><br></br>  
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>In {'\u25b3'}ABC, if b=(c+a)cos{'\u03b8'}, then sin{'\u03b8'}=
      <br></br>
      Option a:- <b>[2{'\u221abc'}/(b+c)]cos(A/2)</b><br></br>
      Option b:- <b>[2{'\u221aca'}/(c+a)]cos(B/2)</b><br></br>
      Option c:- <b>[2{'\u221aab'}/(a-b)]sin(C/2)</b><br></br>
      Option d:- <b>[2{'\u221abc'}/(b-c)]sin(A/2)</b><br></br>             
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>In {'\u25b3'}ABC, if tan[(C-A)/2]=kcot(B/2), then k=
      <br></br>
      Option a:- <b>(c-a)/(c+a)</b><br></br>
      Option b:- <b>(b+a)/(b-a)</b><br></br>
      Option c:- <b>(b-c)/(b+c) </b><br></br>
      Option d:- <b>(c-a)/(b+a)</b><br></br>        
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br>In {'\u25b3'}ABC, if tan(A/2),tan(B/2),tan(C/2) are in HP then a,b,c are in<br></br>
      Option a:- <b>H.P</b><br></br>
      Option b:- <b>G.P</b><br></br>
      Option c:- <b>A.P</b><br></br>
      Option d:- <b>none</b><br></br>
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>In {'\u25b3'}ABC, tan(A/2)=5/6, and tan(C/2)=2/5 then<br></br>
      Option a:- <b>b<sup>2</sup>=ac</b><br></br>
      Option b:- <b>2b=a+c</b><br></br>
      Option c:- <b>2ac=b(a+c)</b><br></br>
      Option d:- <b>a+b=c</b><br></br>
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>In {'\u25b3'}ABC, if C=A-B=60<sup>o</sup>, then the value of (a-b)/c=<br></br>
      Option a:- <b>1/{'\u221a3'}</b><br></br>
      Option b:- <b>2m</b><br></br>
      Option c:- <b>3</b><br></br>
      Option d:- <b>4</b><br></br> 
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>In {'\u25b3'}ABC, if [a/(b<sup>2</sup>-c<sup>2</sup>)]+[c/(b<sup>2</sup>-a<sup>2</sup>)]=0, then B=<br></br>
      Option a:- <b>π/2</b><br></br>
      Option b:- <b>π/4</b><br></br>
      Option c:- <b>2π/3</b><br></br>
      Option d:- <b>π/3</b><br></br>
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b> <br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>In {'\u25b3'}ABC,If (sinA/4)=(sinB/5)=(sinC/6) then the value of cosA+cosB+cosC= <br></br>
      Option a:- <b>23/15</b><br></br>
      Option b:- <b>23/16</b><br></br>
      Option c:- <b>23/14</b><br></br>
      Option d:- <b>none</b><br></br>   
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>In {'\u25b3'}ABC, (s-a)/11=(s-b)/12=(s-c)/13, then tan<sup>2</sup>(A/2)=
      <br></br>
      Option a:- <b>143/432</b><br></br>
      Option b:- <b>13/33</b><br></br>
      Option c:- <b>11/39</b><br></br>
      Option d:- <b>12/37</b><br></br>     
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>In {'\u25b3'}ABC, r<sub>1</sub>=2,r<sub>2</sub>=3, r<sub>3</sub>=6 then a=<br></br>
      Option a:- <b>1</b><br></br>
      Option b:- <b>2</b><br></br>
      Option c:- <b>3</b><br></br>
      Option d:- <b>4</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>If the sides of a triangle are 13,14,15 then the radius of the incircle is
      <br></br>
      Option a:- <b>65/8</b><br></br>
      Option b:- <b>65/4</b><br></br>
      Option c:- <b>4</b><br></br>
      Option d:- <b>24</b><br></br>
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>In a triangle ABC, (s-a)/{'\u25b3'}=1/8,(s-b)/{'\u25b3'}=1/12,(s-c)/{'\u25b3'}=1/24, then b=
      <br></br>
      Option a:- <b>16</b><br></br>
      Option b:- <b>20</b><br></br>
      Option c:- <b>24</b><br></br>
      Option d:- <b>28</b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>In an equilateral triangle r:R:r<sub>1</sub> is
      <br></br>
      Option a:- <b>1:1:1</b><br></br>
      Option b:- <b>1:{'\u221a'}2:3</b><br></br>
      Option c:- <b>1:2:3</b><br></br>
      Option d:- <b>2:{'\u221a'}3:{'\u221a'}3</b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>In {'\u25b3'}ABC, 1/r<sub>1</sub>+1/r<sub>2</sub>+1/r<sub>3</sub>
      <br></br>
      Option a:- <b>{'\u25b3'}/s</b><br></br>
      Option b:- <b>1/r</b><br></br>
      Option c:- <b>2/r</b><br></br>
      Option d:- <b>3/r</b><br></br>
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>In {'\u25b3'}ABC, (1/r-1/r<sub>1</sub>)(1/r-1/r<sub>2</sub>)(1/r-1/r<sub>3</sub>)=
      <br></br>
      Option a:- <b>abc/{'\u25b3'}<sup>3</sup></b><br></br>
      Option b:- <b>0</b><br></br>
      Option c:- <b>4Rr<sup>2</sup></b><br></br>
      Option d:- <b>1/r</b><br></br>
      seelected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div>
    </div>
    <button onClick={() => exportAsImage(exportRef.current, "Properties of Triangles")} style={bstyle} >Download Summary</button></div>

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
export default connect (mapStateToProps,mapDispatchToProps) (PTsummary)