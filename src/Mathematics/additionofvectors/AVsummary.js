import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux';
import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Logo from '../../redux/Images/Logo.jpg'
import { statUpdateref } from '../../redux/cake/cakeAction';






function  AVsummary(props) {
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
const correct=["b","d","b","d", "c","b","a","b", "b","c","b","d", "b","b","b","a", "c","a","b","b", "a","a","d","b", "b","c","a","b", "d","b","c","b", "a","b","c","d", "b","d","d","d"]; 
const opted=[props.option,props.optionone,props.optiontwo,props.optionthree,props.optionfour,props.optionfive,props.optionsix,props.optionseven,props.optioneight,props.optionnine,props.optionten,props.optioneleven,props.optiontwelve,props.optionthirteen,props.optionfourteen,props.optionfifteen,props.optionsixteen,props.optionseventeen,props.optioneighteen,props.optionnineteen,props.optiontwenty,props.optiontwentyone,props.optiontwentytwo,props.optiontwentythree,props.optiontwentyfour,props.optiontwentyfive,props.optiontwentysix,props.optiontwentyseven,props.optiontwentyeight,props.optiontwentynine,props.optionthirty,props.optionthirtyone,props.optionthirtytwo,props.optionthirtythree,props.optionthirtyfour,props.optionthirtyfive,props.optionthirtysix,props.optionthirtyseven,props.optionthirtyeight,props.optionthirtynine];
const [ans, setAns] = React.useState([]);
const exportAsImage = async (el, imageFileName) => {
      const element = document.getElementById('divToPrint');
      const canvas = await html2canvas(element);
      const image = canvas.toDataURL("image/png", 1.0);
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
    <div><div id="divToPrint" >
    <h1 style={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1>
    <h2 style={
    {
textAlign:"center",
backgroundColor:"#A7CC13"

    }
  }>Performance Summary- Addition of Vectors</h2>
    <div style={
    {

     padding: '0 0 0 50px'
    }
  }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>
      <p><b>Question No.1:</b><br></br>If the points whose position vectors are 2i+j+k,6i-j+2k and 4i-5j+pk are collinear, then the value of p is<br></br>

      Option a:- <b>2</b><br></br>
      Option b:- <b>4</b><br></br>
      Option c:- <b>6</b><br></br>
      Option d:- <b>8</b><br></br> 
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>Let a,b and c be three nonzero vectors, no two  of which are collinear. If the vector a+2b is collinear with c, and b+3c is collinear with a, then a+2b+6c=

      <br></br>
      Option a:- <b>λ a</b><br></br>
      Option b:- <b>λ b</b><br></br>
      Option c:- <b>λ c</b><br></br>
      Option d:- <b>0</b><br></br>
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>If a,b and c are non-coplanar  vectors and d is such that d=(1/x)(a+b+c) and a=(1/y)(b+c+d) where X and y are non-zero real numbers, then   (1/ xy)(a+b+c+d)=
<br></br>
      Option a:- <b>-a</b><br></br>
      Option b:- <b>0</b> <br></br>
      Option c:- <b>2a</b><br></br>
      Option d:- <b>3c</b><br></br>                
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b> <br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>If the position vectors of A and B are 3i-2j+k and 2i+4j-3k then<br></br>
      Option a:- <b>√14</b><br></br>
      Option b:- <b>√29</b><br></br>
      Option c:- <b>√43</b><br></br>
      Option d:- <b>√53</b><br></br> 
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>If <b>a</b>=3<b>i</b>-2<b>j</b>+<b>k</b>,<b>b</b>=2<b>i</b>-4<b>j</b>-3<b>k</b>,<b>c</b>=-<b>i</b>+2<b>j</b>+2<b>k</b> then <b>a</b>+<b>b</b>+<b>c</b>=
    <br></br>
      Option a:- <b>3<b>i</b>-4<b>j</b></b><br></br>
      Option b:- <b>3<b>i</b>+4<b>j</b></b><br></br>
      Option c:- <b>4<b>i</b>-4<b>j</b></b><br></br>
      Option d:- <b>4<b>i</b>+4<b>j</b></b><br></br> 
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>If <b>a</b>=<b>i</b>-<b>j</b>+2<b>k</b>,<b>b</b>=2<b>i</b>+3<b>j</b>+<b>k</b>,<b>c</b>=<b>i</b>-<b>k</b>, then magnitude of <b>a</b>+2<b>b</b>-3<b>c</b> is<br></br>
      Option a:- <b>√87</b><br></br>
      Option b:- <b>√78</b><br></br>
      Option c:- <b>√89</b><br></br>
      Option d:- <b>√101</b><br></br>
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>If <b>a</b>=3<b>i</b>-2<b>j</b>+<b>k</b>,<b>a</b>=-<b>i</b>+<b>j</b>+<b>k</b> then the unit vector parallel to the vector <b>a</b>+<b>b</b> is
        <br></br>
      Option a:- <b>(2/3)<b>i</b>-(1/3)<b>j</b>+(2/3)<b>k</b></b><br></br>
      Option b:- <b>(2/5)<b>i</b>-(1/5)<b>j</b>+(2/5)<b>k</b></b><br></br>
      Option c:- <b>(2/√3)<b>i</b>-(1/√3)<b>j</b>+(2/3)<b>k</b></b><br></br>
      Option d:- <b>-(2/√3)<b>i</b>+(1/√3)<b>j</b>-(2/3)<b>k</b></b><br></br>
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>If the vector <b>a</b>=2<b>a</b>i+3<b>j</b>+6<b>k</b> and  <b>b</b> are collinear and │<b>b</b>│=21, then <b>b</b>=
      <br></br>
      Option a:- <b>±(2<b>i</b>+3<b>j</b>+6<b>k</b>)</b><br></br>
      Option b:- <b>±3(2<b>i</b>+3<b>j</b>+6<b>k</b>)</b><br></br>
      Option c:- <b>(<b>i</b>+<b>j</b>+<b>k</b>)</b><br></br>
      Option d:- <b>±21(2<b>i</b>+3<b>j</b>+6<b>k</b>)</b><br></br> 
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>If 2<b>i</b>+3<b>j</b>-6<b>k</b>,6<b>i</b>-2<b>j</b>+3<b>k</b>,3<b>i</b>-6<b>j</b>-2<b>k</b> represent the sides of a triangle then perimeter of the triangle is
      <br></br>
      Option a:- <b>14</b><br></br>
      Option b:- <b>21</b><br></br>
      Option c:- <b>7</b><br></br>
      Option d:- <b>6</b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>The  points having position vectors 2<b>i</b>+3<b>j</b>+4<b>k</b>,3<b>i</b>+4<b>j</b>+2<b>k</b>,4<b>i</b>+2<b>j</b>+3<b>k</b> are
      <br></br>
      Option a:- <b>vertices of a right angled triangle</b><br></br>
      Option b:- <b>vertices of an isosceles triangle</b><br></br>
      Option c:- <b>vertices of an equilateral triangle</b><br></br>
      Option d:- <b>collinear</b><br></br>      
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>The vectors  2<b>i</b>-3<b>j</b>+<b>k</b>,  <b>i</b>-2<b>j</b>+3<b>k</b>,  3<b>i</b>+<b>j</b>-2<b>k</b>
      <br></br>
      Option a:- <b>linearly dependent</b><br></br>
      Option b:- <b>linearly independent</b><br></br>
      Option c:- <b>collinear</b><br></br>
      Option d:- <b>none</b><br></br> 
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>If <b>a</b>=<b>i</b>+4<b>j</b>,    <b>b</b>=2<b>i</b>-3<b>j</b> and <b>c</b>=5<b>i</b>+9<b>j</b> then <b>c</b>=
      <br></br>
      Option a:- <b>2<b>a</b>+<b>b</b></b><br></br>
      Option b:- <b><b>a</b>+2<b>b</b></b><br></br>
      Option c:- <b><b>a</b>+3<b>b</b></b><br></br>
      Option d:- <b>3<b>a</b>+<b>b</b></b><br></br> 
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>The ratio in which <b>i</b>+2<b>j</b>+3<b>k</b> divides the join of  -2<b>i</b>+3<b>j</b>+5<b>k</b> and 7<b>i</b>-<b>k</b> is
<br></br>
      Option a:- <b>-3:2</b><br></br>
      Option b:- <b>1:2</b><br></br>
      Option c:- <b>2:3</b><br></br>
      Option d:- <b>-4:3</b><br></br> 
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>If the vectors <b>AB</b>=-3<b>i</b>+4<b>k</b> and <b>AC</b>=5<b>i</b>-2<b>j</b>+4<b>k</b> are the sides of a triangle ABC, then the length of the median through A is
      <br></br>
      Option a:- <b>√14</b><br></br>
      Option b:- <b>√18</b><br></br>
      Option c:- <b>√25</b><br></br>
      Option d:- <b>√29</b><br></br>   
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>If f : [2, ∞){'\u2192'} B defined by f(x) = x{'\u00b2'}-4x+5 is a bijection, then B=
            <br></br>
      Option a:- <b><b>j</b></b><br></br>
      Option b:- <b><b>i</b></b><br></br>
      Option c:- <b><b>k</b></b><br></br>
      Option d:- <b><b>0</b></b><br></br>   
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>If C is the midpoint of AB and P is any point outside AB, then      <br></br>
      Option a:- <b><b>PA</b>+<b>PB</b>=2<b>PC</b></b><br></br>
      Option b:- <b><b>PA</b>+<b>PB</b>=<b>PC</b></b><br></br>
      Option c:- <b><b>PA</b>+<b>PB</b>+2<b>PC</b>=<b>0</b></b><br></br>
      Option d:- <b><b>PA</b>+<b>PB</b>+<b>PC</b>=<b>0</b></b><br></br> 
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br><b>a</b> and <b>b</b> are unit vectors along OA,OB and OC bisects the angle AOB. the unit vector along OC is 
<br></br>
      Option a:- <b>(<b>a</b>+<b>b</b>)/2</b><br></br>
      Option b:- <b>(<b>a</b>-<b>b</b>)/2</b><br></br>
      Option c:- <b>(<b>a</b>+<b>b</b>)/|<b>a</b>+<b>b</b>|</b><br></br>
      Option d:- <b>(<b>a</b>-<b>b</b>)/|<b>a</b>-<b>b</b>|</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>The vector a<b>i</b>+b<b>j</b>+c<b>k</b> is a bisector of the angle between the vectors <b>i</b>+<b>j</b> and <b>j</b>+<b>k</b> if
<br></br>
      Option a:- <b>a=b</b><br></br>
      Option b:- <b>a=c</b><br></br>
      Option c:- <b>c=a+b</b><br></br>
      Option d:- <b>a=b=c</b><br></br>       
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>For three vectors <b>p</b>,<b>q</b> and <b>r</b>, if <b>r</b>=3<b>p</b>+4<b>q</b> and 2<b>r</b>=<b>p</b>-3<b>q</b>, then
<br></br>
      Option a:- <b>|<b>r</b>|{'\u003c'}2|<b>q</b>| and <b>r</b>,<b>q</b> have same direction</b><br></br>
      Option b:- <b>|<b>r</b>|{'\u003e'}2|<b>q</b>| and <b>r</b>,<b>q</b> have opposite direction</b><br></br>
      Option c:- <b>|<b>r</b>|{'\u003c'}2|<b>q</b>| and <b>r</b>,<b>q</b> have opposite direction</b><br></br>
      Option d:- <b>|<b>r</b>|{'\u003e'}2|<b>q</b>| and <b>r</b>,<b>q</b> have same direction</b><br></br> 
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>Consider the following points A,B,C,D with position vectors 7<b>i</b>-4<b>j</b>+7<b>k</b>, <b>i</b>i-6<b>j</b>+10<b>k</b>, -<b>i</b>-3<b>j</b>+4<b>k</b>,5<b>i</b>-<b>j</b>+<b>k</b> respectively. Then ABCD is a 
<br></br>
      Option a:- <b>Square</b><br></br>
      Option b:- <b>Rhombus</b><br></br>
      Option c:- <b>Rectangle</b><br></br>
      Option d:- <b>Parallelogram but not a rhombus</b><br></br> 
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>If <b>i</b>+2<b>j</b>+3<b>k</b> , 3<b>i</b>+2<b>j</b>+<b>k</b> are sides of a parallelogram, then a unit vector parallel to one of the daigonals of the parallelogram is
      <br></br>
      Option a:- <b>(<b>i</b>+<b>j</b>+<b>k</b>)/{'\u221a'}3</b><br></br>
      Option b:- <b>(<b>i</b>-<b>j</b>+<b>k</b>)/{'\u221a'}3</b><br></br>
      Option c:- <b>(<b>i</b>+<b>j</b>-<b>k</b>)/{'\u221a'}3</b><br></br>
      Option d:- <b>(-<b>i</b>+<b>j</b>-<b>k</b>)/{'\u221a'}3</b><br></br>   
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>The vector equation of the plane passing through the points (1,-2,-3) and parallel to the vectors (2,-1,3) (2,3,-6) is
<br></br>
      Option a:- <b><b>r</b>= (<b>i</b>-2<b>j</b>-3<b>k</b>)+s(2<b>i</b>-<b>j</b>+3<b>k</b>)+t(2<b>i</b>+3<b>j</b>-6<b>k</b>)</b><br></br>
      Option b:- <b><b>r</b>= (1-s-t)(<b>i</b>-2<b>j</b>-3<b>k</b>)+s(2<b>i</b>-<b>j</b>+3<b>k</b>)+t(2<b>i</b>+3<b>j</b>-6<b>k</b>)</b><br></br>
      Option c:- <b><b>r</b>= (<b>i</b>-2<b>j</b>-3<b>k</b>)+s(4<b>j</b>-9<b>k</b>)</b><br></br>
      Option d:- <b><b>r</b>= (4<b>j</b>-9<b>k</b>)+s(<b>i</b>-2<b>j</b>-3<b>k</b>)</b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>The cartesian equation of the plane whose vector equation is<br></br>
    <b>r</b>= (1+{'\u03bb'}-{'\u03bc'})<b>i</b>+(2-{'\u03bb'})<b>j</b>+(3-2{'\u03bb'}+2{'\u03bc'})<b>k</b>, where {'\u03bb'}, {'\u03bc'} are scalars, is
      <br></br>
      Option a:- <b>2x+y=5</b><br></br>
      Option b:- <b>2x-y=5</b><br></br>
      Option c:- <b>2x-z=5</b><br></br>
      Option d:- <b>2x+z=5</b><br></br>  
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>if <b>a</b>,<b>b</b>,<b>c</b> are three noncollinear points then <b>r</b>=(1-p-q)<b>a</b>+p<b>b</b>+q<b>c</b> represents
<br></br>
      Option a:- <b>line</b><br></br>
      Option b:- <b>plane</b><br></br>
      Option c:- <b>plane passing through origin</b><br></br>
      Option d:- <b>sphere</b><br></br> 
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>P,Q,R,S are four points with the position vectors 3<b>i</b>-4<b>j</b>+5<b>k</b>,4<b>k</b>,-4<b>i</b>+5<b>j</b>+<b>k</b>,-3<b>i</b>+4<b>j</b>+3<b>k</b> respectively. Then the line PQ meets the line RS at the point
<br></br>
      Option a:- <b>3<b>i</b>+4<b>j</b>+3<b>k</b></b><br></br>
      Option b:- <b>-3<b>i</b>+4<b>j</b>+3<b>k</b></b><br></br>
      Option c:- <b>-<b>i</b>+4<b>j</b>+<b>k</b></b><br></br>
      Option d:- <b>R</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>Read the following statements <br></br>
      Statement I: Two non zero, non-collinear vectors are linearly independant<br></br>
      Statement II: Any three coplanar vectors are linearly dependant<br></br>
      Which of the above statements is true?<br></br>
      Option a:- <b>Only Statement I</b><br></br>
      Option b:- <b>Only Statement II</b><br></br>
      Option c:- <b>Both Statement I and II</b><br></br>
      Option d:- <b>Neither I nor II</b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>If m<sub>1</sub>,m<sub>2</sub>,m<sub>3</sub> and m<sub>4</sub> are respectively the magnitudes of the vectors <b>a</b><sub>1</sub>=2<b>i</b>-<b>j</b>+<b>k</b>, <b>a</b><sub>2</sub>=3<b>i</b>-4<b>j</b>-4<b>k</b>,<b>a</b><sub>3</sub>=<b>i</b>+<b>j</b>-<b>k</b>,<b>a</b><sub>4</sub>=-<b>i</b>+3<b>j</b>+<b>k</b> then the correct order of m<sub>1</sub>,m<sub>2</sub>,m<sub>3</sub> and m<sub>4</sub> is:

<br></br>
      Option a:- <b>m<sub>3</sub>{'\u003c'}m<sub>1</sub>{'\u003c'}m<sub>4</sub>{'\u003c'}m<sub>2</sub></b><br></br>
      Option b:- <b>m<sub>3</sub>{'\u003c'}m<sub>1</sub>{'\u003c'}m<sub>2</sub>{'\u003c'}m<sub>4</sub></b><br></br>
      Option c:- <b>m<sub>3</sub>{'\u003c'}m<sub>4</sub>{'\u003c'}m<sub>1</sub>{'\u003c'}m<sub>2</sub></b><br></br>
      Option d:- <b>m<sub>3</sub>{'\u003c'}m<sub>4</sub>{'\u003c'}m<sub>2</sub>{'\u003c'}m<sub>1</sub></b><br></br>           
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>Observe the following statements<br></br>
    A: Three vectors are coplanar if one of them is expressible as a linear combination of the other two.<br></br>
    R: Any three coplanar vectors are linearly dependant<br></br>
     Then which of the following is true<br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true and R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true but R is false</b><br></br>
      Option d:- <b>A is false but R is true</b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br>The points with position vectors <b>a</b>+<b>b</b>, <b>a</b>-<b>b</b> and <b>a</b>+k<b>b</b> are collinear 
<br></br>
      Option a:- <b>for exactly two values of k</b><br></br>
      Option b:- <b>for exactly three values of k</b><br></br>
      Option c:- <b>for no real values of k</b><br></br>
      Option d:- <b>for all real values of k</b><br></br> 
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>If A(4,7,8),B(2,3,4) and C(2,5,7) are the position vectors of the vertices of a triangle ABC and if the internal bisector of {'\u2220'}A meets BC at D then AD=
<br></br>
      Option a:- <b>(3{'\u221a'}34)/2</b><br></br>
      Option b:- <b>(2{'\u221a'}34)/3</b><br></br>
      Option c:- <b>{'\u221a'}34/2</b><br></br>
      Option d:- <b>{'\u221a'}34/6</b><br></br> 
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>If M is the foot of perpendicular drawn from P(1,2,-1) to the plane passing through the point  A(3,2,-1) and perpendicular to the vector 4<b>i</b>+7<b>j</b>-4<b>k</b>, then the length of PM, in proper units is
<br></br>
      Option a:- <b>24/9</b><br></br>
      Option b:- <b>26/9</b><br></br>
      Option c:- <b>28/9</b><br></br>
      Option d:- <b>32/9</b><br></br> 
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>The line passing through the point 2<b>a</b>+<b>a</b> and parallel to the vector <b>b</b>-<b>c</b> and the plane passing through the point <b>a</b> and parallel to the vectors <b>b</b>+<b>c</b> and <b>a</b>+2<b>b</b>-<b>c</b> intersect at P. The position vector of P is 
<br></br>
      Option a:- <b><b>a</b>+3<b>b</b></b><br></br>
      Option b:- <b>2<b>a</b>+2<b>b</b>+<b>c</b></b><br></br>
      Option c:- <b><b>a</b>+<b>b</b>-2<b>c</b></b><br></br>
      Option d:- <b>2<b>a</b>+<b>c</b></b><br></br>  
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b> <br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br><b>a</b>,<b>b</b> are non-parallel unit vectors and the vector {'\u03b1'}<b>a</b>+<b>b</b> bisects the internal angle between <b>a</b> and <b>b</b>, then {'\u03b1'} is equal to
<br></br>
      Option a:- <b>1</b><br></br>
      Option b:- <b>1/2</b><br></br>
      Option c:- <b>2</b><br></br>
      Option d:- <b>3</b><br></br>
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>If the line joining the points <b>i</b>+<b>j</b> and 3<b>i</b>+<b>j</b>-<b>k</b> meets the plane that passes through the point 2<b>i</b>+4<b>j</b> and paraellel to the vectors 3<b>j</b>+5<b>k</b> and 3<b>i</b>-<b>k</b> at P, then the position vector of the point P is
<br></br>
      Option a:- <b>-27<b>i</b>+<b>j</b>+14<b>k</b></b><br></br>
      Option b:- <b>29<b>i</b>+<b>j</b>-14<b>k</b></b><br></br>
      Option c:- <b>-14<b>i</b>+89<b>j</b>+3<b>k</b></b><br></br>
      Option d:- <b>2<b>i</b>+5<b>j</b>-7<b>k</b></b><br></br>  
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>If the position vectors of A,B,C,D are <b>i</b>+2<b>j</b>+2<b>k</b>,2<b>i</b>-<b>j</b>,<b>i</b>+<b>j</b>+3<b>k</b> and 4<b>j</b>+5<b>k</b> respectively, then the quadrilateral ABCD is a 
<br></br>
      Option a:- <b>Square</b><br></br>
      Option b:- <b>Rectangle</b><br></br>
      Option c:- <b>Rhombus</b><br></br>
      Option d:- <b>Parallelogram</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>The position vectors of three points A,B, and c are (1,3,x),(3,5,8) and (y,-1,-6) respectively. If A,B and C are collinear, then (x,y)=
      <br></br>
      Option a:- <b>(2/3,-3)</b><br></br>
      Option b:- <b>(10/3,3)</b><br></br>
      Option c:- <b>(10/3,-3)</b><br></br>
      Option d:- <b>(-3,10/3)</b><br></br>      
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>A line L passes through the points <b>i</b>+2<b>j</b>+<b>k</b> and -2<b>i</b>+3<b>k</b>. A plane P passes through the origin and the points 4<b>k</b>,2<b>i</b>+<b>j</b>. The point where the line L meets the plane P is
      <br></br>
      Option a:- <b>-<b>i</b>-<b>j</b>+3<b>k</b></b><br></br>
      Option b:- <b>-8<b>i</b>-4<b>j</b>+7<b>k</b></b><br></br>
      Option c:- <b>8<b>i</b>+4<b>j</b>+<b>k</b></b><br></br>
      Option d:- <b>3<b>i</b>+<b>j</b>+2<b>k</b></b><br></br> 
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>If 3<b>i</b>-2<b>j</b>-<b>k</b>,2<b>i</b>+3<b>j</b>-4<b>k</b>,-<b>i</b>+<b>j</b>+2<b>k</b> and 4<b>i</b>+5<b>j</b>+{'\u03bb'}<b>k</b> are respectively the position vectors of four coplanar points P,Q,R and S then {'\u03bb'}=
      <br></br>
      Option a:- <b>46/17</b><br></br>
      Option b:- <b>-46/17</b><br></br>
      Option c:- <b>146/17</b><br></br>
      Option d:- <b>-146/17</b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>If {'\u03b1'},{'\u03b2'},{'\u03b3'} are distinct real numbers and {'\u03b1'}+{'\u03b2'}+{'\u03b3'}{'\u2260'}0, then the points with position vectors {'\u03b1'}<b>i</b>+{'\u03b2'}<b>j</b>+{'\u03b3'}<b>k</b>,{'\u03b2'}<b>i</b>+{'\u03b3'}<b>j</b>+{'\u03b1'}<b>k</b>, {'\u03b3'}<b>i</b>+{'\u03b1'}<b>j</b>+{'\u03b2'}<b>k</b> are
      <br></br>
      Option a:- <b>collinear</b><br></br>
      Option b:- <b>vertices of a scalene triangle</b><br></br>
      Option c:- <b>vertices of an isosceles triangle</b><br></br>
      Option d:- <b>vertices of an equilateral triangle </b><br></br>
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>if <b>a</b>,<b>b</b>,<b>c</b> are three non-collinear points and k<b>a</b>+2<b>b</b>+3<b>c</b> is a point in the pane of <b>a</b>,<b>b</b>,<b>c</b> then k=

      <br></br>
      Option a:- <b>5</b><br></br>
      Option b:- <b>5</b><br></br>
      Option c:- <b>-5</b><br></br>
      Option d:- <b>-4</b><br></br> 
      Selected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
      </div></div>
    <button onClick={() => exportAsImage(exportRef.current, "Addition Of Vectors")} style={bstyle} >Download Summary</button></div>
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
export default connect (mapStateToProps,mapDispatchToProps) (AVsummary)