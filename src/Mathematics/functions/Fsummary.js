import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux'
import Logo from '../../redux/Images/Logo.jpg'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { statUpdateref } from '../../redux/cake/cakeAction';




function  Fsummary(props) {
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
const correct=["a","c","c","c", "a","b","c","a", "d","b","c","c", "b","d","b","c", "b","b","a","a", "c","d","a","a", "b","d","a","d", "c","c","b","b", "c","b","b","b", "d","b","b","b"]; 
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
    }>Performance Summary- Functions</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>

      <p><b>Question No.1:</b><br></br>The domain of f(x)=(x{'\u00b2'}-2x+3)/(x{'\u00b2'}+x-6)  is<br></br>
      Option a:- <b>(-∞,-3)∪(-3,-2)∪(2,∞)</b><br></br>
      Option b:- <b>(-∞,-3)∪(-3,-2)</b><br></br>
      Option c:- <b>(-∞,-3)∪(2,∞)</b><br></br>
      Option d:- <b>none</b><br></br> 
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>Set A has n elements. The number of functions of that can be defined from A into A
      <br></br>
      Option a:- <b>n{'\u00b2'}</b><br></br>
      Option b:- <b>n!</b><br></br>
      Option c:- <b>n{'\u207f'}<sup>2</sup></b><br></br>
      Option d:- <b>n</b><br></br>
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>Set A has 3 elements and set B has 4 elements. The number of injections that can be defined from A into B is
<br></br>
      Option a:- <b>144</b><br></br>
      Option b:- <b>12</b> <br></br>
      Option c:- <b>24</b><br></br>
      Option d:- <b>64</b><br></br>               
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b> <br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>The domain of1/(|x|-x)  is<br></br>
      Option a:- <b>R</b><br></br>
      Option b:- <b>(0, ∞)</b><br></br>
      Option c:- <b>(- ∞,0)</b><br></br>
      Option d:- <b>R-{`{0}`}</b><br></br>  
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>The domain of the function of f(x)=1/√(|x|-x) is:
    <br></br>
      Option a:- <b>(- ∞,0) </b><br></br>
      Option b:- <b>(- ∞,∞)-{`{0}`}</b> <br></br>
      Option c:- <b>(- ∞,∞)</b><br></br>
      Option d:- <b>( 0, ∞)</b><br></br> 
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>The domain of √(4-x{'\u00b2'} )  is<br></br>
      Option a:- <b>(-2,2)</b><br></br>
      Option b:- <b>[-2,2]</b><br></br>
      Option c:- <b>(- ∞,-2)∪(2,∞)</b><br></br>
      Option d:- <b>(- ∞,2]∪[2,∞)</b><br></br>
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>The domain of √(x<sup>2</sup>-25)   is
        <br></br>
      Option a:- <b>(-5,5)</b><br></br>
      Option b:- <b>[-5,5]</b><br></br>
      Option c:- <b>( - ∞,-5)∪(5,∞)</b><br></br>
      Option d:- <b>(- ∞,-5]∪[5,∞)</b><br></br> 
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>if f : R{'\u2192'}R is defined by f(x)= x{'\u00b2'}+3x+2, then f(x-1)=
      <br></br>
      Option a:- <b>x{'\u00b2'}+x</b><br></br>
      Option b:- <b>x{'\u00b2'}-3x+2</b><br></br>
      Option c:- <b>x{'\u00b2'}+2x</b><br></br>
      Option d:- <b>x{'\u00b2'}-x</b><br></br> 
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>if f(0) = 0, f(1) = 1, f(2) = 2 and  f(x)=f(x-2)+f(x-3) for x= 3, 4, 5, ….., then f(9)= 
      <br></br>
      Option a:- <b>12</b><br></br>
      Option b:- <b>13</b><br></br>
      Option c:- <b>14</b><br></br>
      Option d:- <b>10</b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>If f(x)= log[(1-x)/1+x)]    then f[(x{'\u2081'}+x{'\u2082'})/(1+x{'\u2081'}x{'\u2082'})] 
      <br></br>
      Option a:- <b>0</b><br></br>
      Option b:- <b>f(x{'\u2081'})+f(x{'\u2082'})</b><br></br>
      Option c:- <b>f(x{'\u2081'})f(x{'\u2082'})</b><br></br>
      Option d:- <b>f(x{'\u2081'}x{'\u2082'})</b><br></br>     
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>For any integer n{'\u2265'}1 , the number of positive divisors of n is denoted by d(n). Then for a prime p, d(d(d(p{'\u2077'})))
      <br></br>
      Option a:- <b>1</b><br></br>
      Option b:- <b>2</b><br></br>
      Option c:- <b>3</b><br></br>
      Option d:- <b>p</b><br></br> 
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>f(x)= cos[{'\u03c0'}{'\u00b2'}]x + sin[-{'\u03c0'}{'\u00b2'}]x where [x] is a step function, then f({'\u03c0'}/6)=
      <br></br>
      Option a:- <b>f(0)= 1</b><br></br>
      Option b:- <b>f({'\u03c0'}/4)= 2</b><br></br>
      Option c:- <b>f({'\u03c0'}/2)= -1</b><br></br>
      Option d:- <b>f({'\u03c0'})= 1</b><br></br> 
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>if f(x) is a polynomial function such that f(x)f(1/x)= f(x)+f(1/x) and f(2) = 33 then f(x)=
<br></br>
      Option a:- <b>x{'\u00b3'}+1</b><br></br>
      Option b:- <b>x{'\u2075'}+1</b><br></br>
      Option c:- <b>x{'\u00b3'}-1</b><br></br>
      Option d:- <b>x{'\u2075'}-1</b><br></br> 
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>If f{'\u2099'}(x)= (tan x/2)(1+secx)(1+sec2x)……….(1+sec{'\u207f'}x) then which of the following is not true
      <br></br>
      Option a:- <b>f{'\u2082'}({'\u03c0'}/6) = 1</b><br></br>
      Option b:- <b>f{'\u2083'}({'\u03c0'}/32) = 1</b><br></br>
      Option c:- <b>f{'\u2084'}({'\u03c0'}/64) = 1</b><br></br>
      Option d:- <b>f{'\u2085'}({'\u03c0'}/128) = 0</b><br></br>  
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>If f : [2, ∞){'\u2192'} B defined by f(x) = x{'\u00b2'}-4x+5 is a bijection, then B=
            <br></br>
      Option a:- <b>[0, ∞)</b><br></br>
      Option b:- <b>[1, ∞)</b><br></br>
      Option c:- <b>[4, ∞)</b><br></br>
      Option d:- <b>[5, ∞)</b><br></br>   
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>If f : R{'\u2192'}R is defined by f(x) = [x/5] for x ∈ R, where [y] denotes the greatest integer not exceeding y, then {`{f(x) : |x| < 71}`} =
      <br></br>
      Option a:- <b>{`{-14,-13,………………,0,…………….13,14}`}</b><br></br>
      Option b:- <b>{`{-14,-13,………………,0,…………….14,15}`}</b><br></br>
      Option c:- <b>{`{-15,-14,………………,0,…………….14,15}`}</b><br></br>
      Option d:- <b>{`{-15,-14,………………,0,…………….13,14}`}</b><br></br> 
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>If A= {`{1,2,3}`}, B={`{a,b,c,d}`} , f= {`{(1,a),(2,b),(3,d)}`} then f is
<br></br>
      Option a:- <b>mapping</b><br></br>
      Option b:- <b>one one</b><br></br>
      Option c:- <b>onto</b><br></br>
      Option d:- <b>one-one-onto</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>If f(x) = (a{'\u00b2\u02e3'}-a{'\u207b'}{'\u00b2'}{'\u02e3'})/(a{'\u00b2\u02e3'}+a{'\u207b'}{'\u00b2'}{'\u02e3'}) then f(x) is
<br></br>
      Option a:- <b>even</b><br></br>
      Option b:- <b>odd</b><br></br>
      Option c:- <b>none of these<sup>3</sup>+2n</b><br></br>
      Option d:- <b>cannot be determined</b><br></br>  
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>If f from R into R defined by f(x)= x{'\u00b3'}-1, then f{'\u207b'}{'\u00b9'}{`{2,0,7}`}=
<br></br>
      Option a:- <b>{`{-1,1,2}`}</b><br></br>
      Option b:- <b>{`{0,1,2}`}</b><br></br>
      Option c:- <b>{`{\u00b11,\u00b12}`}</b><br></br>
      Option d:- <b>{`{0,\u00b12}`}</b><br></br> 
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>If f(x)= {'\u221a'}x{'\u00b3'}-1 and g(x) = {'\u221b'}x{'\u00b2'}+1 then fog(x)
<br></br>
      Option a:- <b>x</b><br></br>
      Option b:- <b>x{'\u00b2'}</b><br></br>
      Option c:- <b>x{'\u00b3'}</b><br></br>
      Option d:- <b>none</b><br></br> 
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>If f(x)= x{'\u00b2'}-2x+4 then the set of values of x satisfying f(x-1)= f(x+1) is
      <br></br>
      Option a:- <b>{`{-1}`}</b><br></br>
      Option b:- <b>{`{-1,1}`}</b><br></br>
      Option c:- <b>{`{1}`}</b><br></br>
      Option d:- <b>{`{1,2}`}</b><br></br>   
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>If f(x)={'\u221c'}(25-x{'\u2074'}) for 0{'\u003c'}x{'\u003c'} {'\u221a'}5 then f(f(1/2)) =<br></br>
      Option a:- <b>2{'\u207b'}{'\u2074'}</b><br></br>
      Option b:- <b>2{'\u207b'}{'\u00b3'}</b><br></br>
      Option c:- <b>2{'\u207b'}{'\u00b2'}</b><br></br>
      Option d:- <b>2{'\u207b'}{'\u00b9'}</b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>If f: R{'\u2192'}R is defined by f(x)= (2x+1)/3 then f{'\u207b'}{'\u00b9'}(x)= 
      <br></br>
      Option a:- <b>(3x-1)/2</b><br></br>
      Option b:- <b>(x-3)/2</b><br></br>
      Option c:- <b>(2x-1)/3</b><br></br>
      Option d:- <b>(x-4)/3</b><br></br>  
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>If f(x)= x-x{'\u00b2'}+x{'\u00b3'}-x{'\u2074'}+…………….. ∞ when |x|{'\u003c'}1 then f{'\u207b'}{'\u00b9'}(x)=
<br></br>
      Option a:- <b>x/(1-x)</b><br></br>
      Option b:- <b>x/(1+x)</b><br></br>
      Option c:- <b>1/(1-x)</b><br></br>
      Option d:- <b>1/(1+x)</b><br></br>   
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>The domain of (2{'\u02e3'}+2{'\u207b'}{'\u02e3'})/(2{'\u02e3'}-2{'\u207b'}{'\u02e3'}) is
<br></br>
      Option a:- <b>(- ∞,2 )∪(2,∞)</b><br></br>
      Option b:- <b>(- ∞,0 )∪(0,∞)</b><br></br>
      Option c:- <b>(- ∞,1 )∪(1,∞)  </b><br></br>
      Option d:- <b>R</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>If f(x) = 1+1/x, g(x) = {'\u221a'}1-x{'\u00b2'}, then the domain of f(x)-g(x)
<br></br>
      Option a:- <b>[1,5) ∪(5,7]</b><br></br>
      Option b:- <b>[-7,1) ∪(1,7]</b><br></br>
      Option c:- <b>[-1,0) ∪(0,5]</b><br></br>
      Option d:- <b>[-1,0) ∪(0,1]</b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>The range of the function <sup>7-x</sup>P<sub>x-3</sub>
<br></br>
      Option a:- <b>{`{1,2,3}`}</b><br></br>
      Option b:- <b>{`{1,2,3,4,5}`}</b><br></br>
      Option c:- <b>{`{1,2,3,4}`}</b><br></br>
      Option d:- <b>{`{1,2,3,4,5,6}`}</b><br></br>              
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>The range of the function f(x)= (sin{'\u03c0'}[x{'\u00b2'}-1])/(x{'\u2074'}+1)      <br></br>
      Option a:- <b>R</b><br></br>
      Option b:- <b>[-1,1]</b><br></br>
      Option c:- <b>{'{0,1}'}</b><br></br>
      Option d:- <b>{'{0}'}</b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br>If a{'\u00b2'}+b{'\u00b2'}+c{'\u00b2'}= 2, then the range of ab+bc+ca is
<br></br>
      Option a:- <b>[-1/2,1]</b><br></br>
      Option b:- <b>[-1/2,∞)</b><br></br>
      Option c:- <b>[-1,2]</b><br></br>
      Option d:- <b>[1,∞)</b><br></br> 
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>The range of x{'\u00b2'}+4y{'\u00b2'}+9z{'\u00b2'}-6yz-3xz-2xy<br></br>
      Option a:- <b>{'\u03d5'}</b><br></br>
      Option b:- <b>R</b><br></br>
      Option c:- <b>[0,∞)</b><br></br>
      Option d:- <b>(-∞,0)</b><br></br> 
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>Read the given statements and select the correct option<br></br>
Statement-I: Every function must be either even or odd function<br></br>
Statement-II: The function f(x)= log(x+ {'\u221a'}x{'\u00b2'}+1) is an odd function
<br></br>
      Option a:- <b>Only statement I is correct</b><br></br>
      Option b:- <b>Only statement II is correct</b><br></br>
      Option c:- <b>Both statements I and II are correct</b><br></br>
      Option d:- <b>Both statements I and II are incorrect</b><br></br> 
      <br></br> 
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br> If f(x)= x-x{'\u00b2'}+x{'\u00b3'}-x{'\u2074'}+...............∞ when |x|{'\u003c'}1 then arrange the following in ascending order<br></br>
a. f(1/2) <br></br>b.f{'\u207b'}{'\u00b9'}(1/2) <br></br>c. f(-1/2)  <br></br>d. f{'\u207b'}{'\u00b9'}(-1/2)
<br></br>
      Option a:- <b>a,b,c,d</b><br></br>
      Option b:- <b>c,d,a,b</b><br></br>
      Option c:- <b>b,a,d,c</b><br></br>
      Option d:- <b>d,c,a,b</b><br></br>  
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b> <br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>Domain of sinx-e<sup>{'\u221a'}{'\u02e3'}</sup><br></br>
      Option a:- <b>R</b><br></br>
      Option b:- <b>R{'\u207a'}</b><br></br>
      Option c:- <b>[0,∞)</b><br></br>
      Option d:- <b>[-1,1]</b><br></br>
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>If f(x)= x{'\u00b2'} for x{'\u003c'}0, f(x)=x for 0{'\u003c'}x{'\u003c'}1, f(x)=1/x for x{'\u003e'}1 then the domain of f(x) is<br></br>
      Option a:- <b>(- ∞,0)∪(0,5)∪(5,∞)</b><br></br>
      Option b:- <b>(- ∞,0)∪(0,1)∪(1,∞)</b><br></br>
      Option c:- <b>(- ∞,0)∪(0,∞)</b><br></br>
      Option d:- <b>(- ∞,1)∪(1,∞)</b><br></br>   
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>If f:(3,6){'\u2192'}(1,3) is a function defined by f(x)= x-[x/3] then f{'\u207b'}{'\u00b9'}(x)=
<br></br>
      Option a:- <b>x-1</b><br></br>
      Option b:- <b>x+1</b><br></br>
      Option c:- <b>x</b><br></br>
      Option d:- <b>None</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>The domain of {'\u221a'}1-{'\u221a'}1-{'\u221a'}1-x{'\u00b2'}
      <br></br>
      Option a:- <b>(0,1]</b><br></br>
      Option b:- <b>[-1,1]</b><br></br>
      Option c:- <b>(- ∞,∞)</b><br></br>
      Option d:- <b>None</b><br></br>    
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>Let A and B be finite sets and P<sub>A</sub> and P<sub>B</sub> respectively denote their power sets. If P<sub>B</sub> has 112 elements more than those in P<sub>A</sub> then the number of functions from A to B which are injective is

      <br></br>
      Option a:- <b>224</b><br></br>
      Option b:- <b>56</b><br></br>
      Option c:- <b>120</b><br></br>
      Option d:- <b>840</b><br></br> 
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>If f: [0,∞){'\u2192'}[0,∞) is defined by f(x)= x/(1+x), then f is
      <br></br>
      Option a:- <b>Neither one-one nor onto</b><br></br>
      Option b:- <b>one-one but not onto</b><br></br>
      Option c:- <b>onto but not one-one</b><br></br>
      Option d:- <b>Both one-one and onto</b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>If f : A{'\u2192'}B and If g : B{'\u2192'}C are functions such that gof : A{'\u2192'}C is onto, then a necessary condition is
      <br></br>
      Option a:- <b>f in onto</b><br></br>
      Option b:- <b>g is onto</b><br></br>
      Option c:- <b>Both f, g are onto</b><br></br>
      Option d:- <b>Neither f nor g is onto</b><br></br>
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>The range of the function f(x)= cos[x] where -{'\u03c0'}/2{'\u003c'}x{'\u003c'}{'\u03c0'}/2 is
      <br></br>
      Option a:- <b>{`{-1,1,0}`}</b><br></br>
      Option b:- <b>{`{1,cos1,cos2}`}</b><br></br>
      Option c:- <b>{`{cos1,-cos1,1}`}</b><br></br>
      Option d:- <b>none</b><br></br> 
      Selected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div>
    </div>
    <button onClick={() => exportAsImage(exportRef.current, "Functions")} style={bstyle} >Download Summary</button></div>

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
export default connect (mapStateToProps,mapDispatchToProps) (Fsummary)