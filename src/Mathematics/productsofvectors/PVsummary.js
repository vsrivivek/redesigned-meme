import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import Logo from '../../redux/Images/Logo.jpg'
import { statUpdateref } from '../../redux/cake/cakeAction';




function  PVsummary(props) {const logoStyle = { 
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
const correct=["b","c","c","b", "a","a","d","d", "b","c","a","a", "a","c","a","b", "a","d","b","c", "d","a","b","a", "d","a","a","c", "a","c","d","a", "d","a","c","d", "a","d","a","c"]; 
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
    <div><div id="divToPrint" >
    <h1 style={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1>
    <h2 style={
    {
textAlign:"center",
backgroundColor:"#A7CC13"

    }
  }>Performance Summary- Product of Vectors</h2>
    <div style={
    {

     padding: '0 0 0 50px'
    }
  }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>

      <p><b>Question No.1:</b><br></br>If <b>p</b>=(-2,1,3),<b>q</b>=(-2,3,1),<b>r</b>=(3,-2,4) and <b>j</b> is the unit vector in the direction of y-axis, then (2<b>p</b>+3<b>q</b>+4<b>r</b>)<b>{'\u00b7'}</b><b>j</b>=
 <br></br>
      Option a:- <b>18</b><br></br>
      Option b:- <b>19</b><br></br>
      Option c:- <b>20</b><br></br>
      Option d:- <b>21</b><br></br>
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>The angle made by  the vectors 2<b>i</b>+2<b>j</b>-<b>k</b> with y-axis is
      <br></br>
      Option a:- <b>cos<sup>-1</sup>(1/7)</b><br></br>
      Option b:- <b>cos<sup>-1</sup>(2/7)</b><br></br>
      Option c:- <b>cos<sup>-1</sup>(2/3)</b><br></br>
      Option d:- <b>cos<sup>-1</sup>(1/3)</b><br></br> 
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>The non-zero vectors <b>a</b>,<b>b</b> and <b>c</b> are related by  <b>a</b>=8<b>b</b> and <b>c</b>=-7<b>b</b>.Then the angle between <b>a</b> and <b>c</b> is<br></br>
      Option a:- <b>π/4</b><br></br>
      Option b:- <b>π/3</b> <br></br>
      Option c:- <b>π</b><br></br>
      Option d:- <b>0</b><br></br>                     
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b> <br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>If <b>a</b>=-<b>i</b>+<b>j</b>+2<b>k</b>,<b>b</b>=2<b>i</b>-<b>j</b>-<b>k</b> and <b>c</b>=-2<b>i</b>+<b>j</b>+3<b>k</b> , then the angle between 2<b>a</b>-<b>c</b> and <b>a</b>+<b>b</b> is:<br></br>
      Option a:- <b>π/4 </b><br></br>
      Option b:- <b>π/3</b><br></br>
      Option c:- <b>π/2</b><br></br>
      Option d:- <b>3π/2</b><br></br>          
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>The angle between the vectors 6<b>i</b>+2<b>j</b>+<b>k</b>,2<b>i</b>-9<b>j</b>+6<b>k</b> is
      <br></br>
      Option a:- <b>90<sup>o</sup></b><br></br>
      Option b:- <b>60<sup>o</sup></b> <br></br>
      Option c:- <b>45<sup>o</sup></b><br></br>
      Option d:- <b>30<sup>o</sup></b><br></br>   
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>If the position vectors of A,B,C,D are respectively (-6,1,6),(6,-2,3),(-2,-3,-1) and (-5,-9,-7), then
        <br></br>
      Option a:- <b>∠BCA is a right angle</b><br></br>
      Option b:- <b>∠CDA is a right angle </b><br></br>
      Option c:- <b>∠ABD is a right angle</b><br></br>
      Option d:- <b>none</b><br></br>
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>If |<b>a</b>+<b>b</b>|= |<b>a</b>-<b>b</b>|,then (<b>a</b>,<b>b</b>)=
     
        <br></br>
      Option a:- <b>π/6</b><br></br>
      Option b:- <b>π/4</b><br></br>
      Option c:- <b>π/3</b><br></br>
      Option d:- <b>π/2</b><br></br>                                
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>If θ is the angle between  the vectors <b>a</b>=2<b>i</b>-<b>j</b>+<b>k</b> and <b>b</b>=<b>i</b>+2<b>j</b>+<b>k</b>, then cosθ=
      <br></br>
      Option a:- <b>1/9</b><br></br>
      Option b:- <b>1/2</b><br></br>
      Option c:- <b>1/3</b><br></br>
      Option d:- <b>1/6</b><br></br>  
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>If the position vectors of  A,B and C are respectively 2<b>i</b>-<b>j</b>+<b>k</b>,<b>i</b>-3<b>j</b>-5<b>k</b> and 3<b>i</b>-4<b>j</b>-4<b>k</b>, then cos<sup>2</sup>A=
      <br></br>
      Option a:- <b>0</b><br></br>
      Option b:- <b>6/41</b><br></br>
      Option c:- <b>35/41</b><br></br>
      Option d:- <b>1</b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>If the vectors <b>i</b>+3<b>j</b>+4<b>k</b>,λ<b>i</b>-4<b>k</b>+<b>k</b> are orthogonal to each other,then  λ=
      <br></br>
      Option a:- <b>5</b><br></br>
      Option b:- <b>-5</b><br></br>
      Option c:- <b>-8</b><br></br>
      Option d:- <b>-8</b><br></br>    
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>If  <b>a</b>=<b>i</b>+2<b>j</b>+3<b>k</b>,<b>b</b>=-<b>i</b>+2<b>j</b>+<b>k</b>,<b>c</b>=3<b>i</b>+<b>j</b> and <b>a</b>+t<b>b</b> is perpendicular to <b>c</b> then  t=
      <br></br>
      Option a:- <b>5</b><br></br>
      Option b:- <b>4</b><br></br>
      Option c:- <b>3</b><br></br>
      Option d:- <b>2</b><br></br> 
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>The length of projection  of 2<b>i</b>-3<b>j</b>+<b>k</b> , in the direction of  4<b>i</b>-4<b>j</b>+7<b>k</b> is
      <br></br>
      Option a:- <b>3</b><br></br>
      Option b:- <b>9</b><br></br>
      Option c:- <b>3√3</b><br></br>
      Option d:- <b>27</b><br></br>
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>If <b>a</b>=<b>i</b>+<b>j</b>+<b>k</b>,<b>b</b>=2<b>i</b>-3<b>j</b>+<b>k</b> then <b>a</b>x<b>b</b> is
      <br></br>
      Option a:- <b>4<b>i</b>+<b>j</b>-5<b>k</b></b><br></br>
      Option b:- <b>4<b>i</b>-<b>j</b>+5<b>k</b></b><br></br>
      Option c:- <b>4<b>i</b>+<b>j</b>+5<b>k</b></b><br></br>
      Option d:- <b>4<b>i</b>-<b>j</b>-5<b>k</b></b><br></br> 
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>If (<b>a</b>x<b>b</b>)<sup>2</sup>+(<b>a</b>{'\u00b7'}<b>b</b>)<sup>2</sup>=144 and |<b>a</b>|=4 then |<b>b</b>|=
      <br></br>
      Option a:- <b>16</b><br></br>
      Option b:- <b>8</b><br></br>
      Option c:- <b>3</b><br></br>
      Option d:- <b>12</b><br></br> 
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>A unit vector perpendicular to 2<b>i</b>+3<b>j</b>+4<b>k</b> and 4<b>i</b>-3<b>j</b>+2<b>k</b> is
      <br></br>
      Option a:- <b>(3<b>i</b>+2<b>j</b>-3<b>k</b>)/√22</b><br></br>
      Option b:- <b>(3<b>i</b>-2<b>j</b>-3<b>k</b>)/√22</b><br></br>
      Option c:- <b>(3<b>i</b>-2<b>j</b>+3<b>k</b>)/√22</b><br></br>
      Option d:- <b>none</b><br></br>       
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>The number of vectors of unit length perpendicular to the vectors <b>a</b>= (1,1,0) and <b>b</b>=(0,1,1) is

      <br></br>
      Option a:- <b>one</b><br></br>
      Option b:- <b>two</b><br></br>
      Option c:- <b>three</b><br></br>
      Option d:- <b>infinite</b><br></br>
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>A unit vector perpendicular to the plane determined by the points P(1,-1,2), Q(2,0,-1) and R(0,2,1) is
      <br></br>
      Option a:- <b>(2<b>i</b>+<b>j</b>+<b>k</b>)/√6</b><br></br>
      Option b:- <b>(2<b>i</b>+<b>j</b>+<b>k</b>)/3</b><br></br>
      Option c:- <b>(2<b>i</b>-<b>j</b>-<b>k</b>)/√3</b><br></br>
      Option d:- <b>(2<b>i</b>-<b>j</b>-<b>k</b>)/3</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>The sine of the angle between the vectors <b>i</b>+3<b>j</b>+2<b>k</b>, 2<b>i</b>-4<b>j</b>-<b>k</b> is 
      <br></br>
      Option a:- <b>3/4</b><br></br>
      Option b:- <b>3/5</b><br></br>
      Option c:- <b>5/6</b><br></br>
      Option d:- <b>5/7</b><br></br> 
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>If (2<b>i</b>+4<b>j</b>+2<b>k</b>)x(2<b>i</b>-x<b>j</b>+5<b>k</b>)= 16<b>i</b>-6<b>j</b>+2x<b>k</b>, then the value of x is 
      <br></br>
      Option a:- <b>2</b><br></br>
      Option b:- <b>-2</b><br></br>
      Option c:- <b>0</b><br></br>
      Option d:- <b>none</b><br></br> 
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>If <b>a</b>=2<b>i</b>-3<b>j</b>-<b>k</b>, <b>b</b>=<b>i</b>+4<b>j</b>-2<b>k</b> then(<b>a</b>+<b>b</b>) x (<b>a</b>-<b>b</b>)
      <br></br>
      Option a:- <b>20<b>i</b>-6<b>j</b>-22<b>k</b></b><br></br>
      Option b:- <b>-20<b>i</b>+6<b>j</b>-22<b>k</b></b><br></br>
      Option c:- <b>-20<b>i</b>-6<b>j</b>-22<b>k</b></b><br></br>
      Option d:- <b>20<b>i</b>+6<b>j</b>-22<b>k</b></b><br></br>  
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>If <b>a</b>=<b>i</b>+2<b>j</b>-3<b>k</b>, <b>b</b>=2<b>i</b>+<b>j</b>+<b>k</b> and <b>c</b>=<b>i</b>+3<b>j</b>-2<b>k</b>  then(<b>a</b> x <b>b</b>) x (<b>b</b> x <b>c</b>)=
      <br></br>
      Option a:- <b>5(2<b>i</b>+<b>j</b>+<b>k</b>)</b><br></br>
      Option b:- <b>-5(2<b>i</b>+<b>j</b>+<b>k</b>)</b><br></br>
      Option c:- <b>10(2<b>i</b>+<b>j</b>+<b>k</b>)</b><br></br>
      Option d:- <b>-10(2<b>i</b>+<b>j</b>+<b>k</b>)</b><br></br>   
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>(<b>a</b>+<b>b</b>)x<b>c</b>+(<b>b</b>+<b>c</b>)x<b>a</b>+(<b>c</b>+<b>a</b>)x<b>b</b>=
      <br></br>
      Option a:- <b><b>0</b></b><br></br>
      Option b:- <b><b>a+b</b></b><br></br>
      Option c:- <b><b>a-b</b></b><br></br>
      Option d:- <b><b>a</b>x<b>b</b></b><br></br>  
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>If <b>a</b>+<b>b</b>+<b>c</b>=<b>0</b> then
      <br></br>
      Option a:- <b><b>a</b>.<b>b</b>=<b>b</b>.<b>c</b>=<b>c</b>.<b>a</b></b><br></br>
      Option b:- <b><b>a</b>x<b>b</b>=<b>b</b>x<b>c</b>=<b>c</b>x<b>a</b></b><br></br>
      Option c:- <b><b>a</b>x<b>b</b>=<b>b</b>.<b>c</b></b><br></br>
      Option d:- <b><b>a</b>+<b>b</b>=(<b>a</b>x<b>c</b>)+(<b>b</b>x<b>c</b>)</b><br></br> 
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>If <b>a</b>x<b>b</b>=<b>c</b>x<b>d</b>, <b>a</b>x<b>c</b>=<b>b</b>x<b>d</b> then
      <br></br>
      Option a:- <b><b>a</b>-<b>d</b> is parallel to <b>b</b>-<b>c</b></b><br></br>
      Option b:- <b><b>a</b>-<b>b</b> is parallel to <b>c</b>-<b>d</b></b><br></br>
      Option c:- <b><b>a</b>-<b>c</b> is parallel to <b>b</b>-<b>d</b></b><br></br>
      Option d:- <b><b>a</b>+<b>b</b> is parallel to <b>c</b>+<b>d</b></b><br></br>  
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>If <b>a</b>,<b>b</b>,<b>c</b> be unit vectors such that <b>a</b>.<b>b</b>=<b>a</b>.<b>c</b>=0 and the angle between <b>b</b> and <b>c</b> is π/6, then <b>a</b>=
      <br></br>
      Option a:- <b>{'\u00b1'}(<b>a</b>x<b>c</b>)</b><br></br>
      Option b:- <b>{'\u00b1'}2(<b>a</b>x<b>c</b>)</b><br></br>
      Option c:- <b>{'\u00b1'}(<b>b</b>x<b>c</b>)</b><br></br>
      Option d:- <b>{'\u00b1'}2(<b>b</b>x<b>c</b>)</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>[<b>i</b>-<b>j</b> <b>j</b>-<b>k</b> <b>k</b>-<b>i</b>]=<br></br>
      Option a:- <b>0</b><br></br>
      Option b:- <b>1</b><br></br>
      Option c:- <b>-1</b><br></br>
      Option d:- <b>2</b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>If <b>a</b>= <b>i</b>-<b>j</b>-6<b>k</b>, <b>b</b>= <b>i</b>-3<b>j</b>+4<b>k</b>, <b>c</b>= 2<b>i</b>-5<b>j</b>+3<b>k</b> then [<b>a</b> <b>b</b> <b>c</b>]= 
      <br></br>
      Option a:- <b>0</b><br></br>
      Option b:- <b>1</b><br></br>
      Option c:- <b>-1</b><br></br>
      Option d:- <b>2</b><br></br>             
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>If <b>a</b> is perpendicular to <b>b</b> and <b>c</b>,|<b>a</b>|=2, |<b>b</b>|=3, |<b>c</b>|=4 and the angle between <b>b</b> and <b>c</b> is 2π/3, then |[<b>a</b> <b>b</b> <b>c</b>]|
      <br></br>
      Option a:- <b>24</b><br></br>
      Option b:- <b>12</b><br></br>
      Option c:- <b>12√3</b><br></br>
      Option d:- <b>24√3 </b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br>If <b>a</b>,<b>b</b> and <b>c</b> are mutually perpendicular unit vectors then [<b>a</b> <b>b</b> <b>c</b>]<sup>2</sup><br></br>
      Option a:- <b>1</b><br></br>
      Option b:- <b>0</b><br></br>
      Option c:- <b>2</b><br></br>
      Option d:- <b>3</b><br></br>
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>The volume of the parallelopiped whose coterminal edges are 2<b>i</b>-3<b>j</b>+4<b>k</b>,<b>i</b>+2<b>j</b>-2<b>k</b>,3<b>i</b>-<b>j</b>+<b>k</b><br></br>
      Option a:- <b>5</b><br></br>
      Option b:- <b>6</b><br></br>
      Option c:- <b>7</b><br></br>
      Option d:- <b>8</b><br></br>
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>The value of k for which the points A(1,0,3), B(-1,3,4), C(1,2,1) and D(k,2,5) are coplanar is
<br></br>
      Option a:- <b>1</b><br></br>
      Option b:- <b>2</b><br></br>
      Option c:- <b>0</b><br></br>
      Option d:- <b>-1</b><br></br> 
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>If <b>d</b>= x(<b>a</b>x<b>b</b>)+y(<b>b</b>x<b>c</b>)+z(<b>c</b>x<b>a</b>) and [<b>a</b> <b>b</b> <b>c</b>] =1/8, then x+y+z=<br></br>
      Option a:- <b>8<b>d</b>.(<b>a</b>+<b>b</b>+<b>c</b>)</b><br></br>
      Option b:- <b><b>d</b>.(<b>a</b>+<b>b</b>+<b>c</b>)</b><br></br>
      Option c:- <b>4<b>d</b>.(<b>a</b>+<b>b</b>+<b>c</b>)</b><br></br>
      Option d:- <b>none</b><br></br>
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b> <br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>Let <b>a</b> be a unit vector, <b>b</b>=2<b>i</b>+<b>j</b>-<b>k</b> and <b>c</b>=<b>i</b>+3<b>k</b>. The maximum value of [<b>a</b> <b>b</b> <b>c</b>]<br></br>
      Option a:- <b>-1</b><br></br>
      Option b:- <b>√10+√6</b><br></br>
      Option c:- <b>√10-√6</b><br></br>
      Option d:- <b>√59</b><br></br>
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>The equation to the plane containing the lines <b>r</b>=<b>a</b>+t<b>b</b>, <b>r</b>=<b>b</b>+s<b>a</b> is 
      Option a:- <b>[<b>r</b> <b>a</b> <b>b</b>]= 0</b><br></br>
      Option b:- <b><b>r</b>.<b>a</b>= <b>a</b>.<b>b</b></b><br></br>
      Option c:- <b><b>r</b>.<b>a</b>= <b>r</b>.<b>b</b></b><br></br>
      Option d:- <b><b>r</b>.<b>b</b>= <b>a</b>.<b>b</b></b><br></br>         
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>The cartesian equation of the plane passing through the point(3,-2,-1) and parallel to the vectors <b>b</b>=<b>i</b>-2<b>j</b>+4<b>k</b> and <b>c</b>= 3<b>i</b>+2<b>j</b>-5<b>k</b>
<br></br>
      Option a:- <b>2x-17y-8z+63=0</b><br></br>
      Option b:- <b>3x+17y+8z-36=0</b><br></br>
      Option c:- <b>2x+17y+8z+36=0</b><br></br>
      Option d:- <b>3x-16y+8z-63=0</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>If the sides of a triangle are 13,14,15 then the radius of the incircle is
      <br></br>
      Option a:- <b>[<b>a</b> <b>b</b> <b>c</b>]</b><br></br>
      Option b:- <b>[<b>a</b>+<b>b</b> <b>b</b>+<b>c</b> <b>c</b>+<b>a</b>]</b><br></br>
      Option c:- <b>[<b>a</b>x<b>b</b> <b>b</b>x<b>c</b> <b>c</b>x<b>a</b>]</b><br></br>
      Option d:- <b>|[<b>a</b> <b>b</b> <b>c</b>]|/|<b>a</b>x<b>b</b> <b>b</b>x<b>c</b> <b>c</b>x<b>a</b>|</b><br></br>  
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>The shortest distance between the straight line passing through the point A=(6,2,2) and parallel to the vector (1,-2,2) and the straight line passing through B=(-4,0,-1) and parallel to the vector (3,-2,-2) is 
      <br></br>
      Option a:- <b>9</b><br></br>
      Option b:- <b>8</b><br></br>
      Option c:- <b>5</b><br></br>
      Option d:- <b>2</b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>(<b>i</b>{'\u00d7'}<b>j</b>){'\u00d7'}<b>k</b>+(<b>j</b>{'\u00d7'}<b>k</b>){'\u00d7'}<b>i</b>+(<b>k</b>{'\u00d7'}<b>i</b>){'\u00d7'}<b>j</b>=
      <br></br>
      Option a:- <b><b>i</b>+<b>k</b></b><br></br>
      Option b:- <b><b>i</b></b><br></br>
      Option c:- <b><b>j</b></b><br></br>
      Option d:- <b><b>0</b></b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>If <b>a</b>=<b>i</b>+<b>j</b>+<b>k</b>, <b>b</b>=<b>i</b>+<b>j</b>, <b>c</b>=<b>i</b> and (<b>a</b>{'\u00d7'}<b>b</b>){'\u00d7'}<b>c</b>={'\u03bb'}<b>a</b>+{'\u03bc'}<b>b</b>, then {'\u03bb'}+{'\u03bc'}=
      <br></br>
      Option a:- <b>0</b><br></br>
      Option b:- <b>1/r</b><br></br>
      Option c:- <b>2/r</b><br></br>
      Option d:- <b>3/r</b><br></br>
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>[<b>b</b>{'\u00d7'}<b>c</b> <b>c</b>{'\u00d7'}<b>a</b> <b>a</b>{'\u00d7'}<b>b</b>]=
      <br></br>
      Option a:- <b>[<b>a</b> <b>b</b> <b>c</b>]</b><br></br>
      Option b:- <b>2[<b>a</b> <b>b</b> <b>c</b>]</b><br></br>
      Option c:- <b>[<b>a</b> <b>b</b> <b>c</b>]<sup>2</sup></b><br></br>
      Option d:- <b><b>0</b></b><br></br>
      Selected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div>
    </div>
    <button onClick={() => exportAsImage(exportRef.current, "Product of Vectors")} style={bstyle} >Download Summary</button></div>

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
export default connect (mapStateToProps,mapDispatchToProps) (PVsummary)