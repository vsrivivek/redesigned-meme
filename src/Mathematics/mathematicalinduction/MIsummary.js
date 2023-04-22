import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import Logo from '../../redux/Images/Logo.jpg'
import { statUpdateref } from '../../redux/cake/cakeAction';



function  MIsummary(props) {
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
  // const exportRef = useRef();
const status=[props.status,props.statusone,props.statustwo,props.statusthree,props.statusfour,props.statusfive,props.statussix,props.statusseven,props.statuseight,props.statusnine,props.statusten,props.statuseleven,props.statustwelve,props.statusthirteen,props.statusfourteen,props.statusfifteen,props.statussixteen,props.statusseventeen,props.statuseighteen,props.statusnineteen,props.statustwenty,props.statustwentyone,props.statustwentytwo,props.statustwentythree,props.statustwentyfour,props.statustwentyfive,props.statustwentysix,props.statustwentyseven,props.statustwentyeight,props.statustwentynine,props.statusthirty,props.statusthirtyone,props.statusthirtytwo,props.statusthirtythree,props.statusthirtyfour,props.statusthirtyfive,props.statusthirtysix,props.statusthirtyseven,props.statusthirtyeight,props.statusthirtynine];
const correct=["c","a","b","c", "d","a","c","b", "a","a","d","c", "c","c","b","c", "a","a","d","a", "d","b","d","c", "a","a","d","b", "b","a","c","a", "b","a","a","b", "a","a","b","d"]; 
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
  }>Performance Summary- Mathematical Induction</h2>
    <div style={
    {

     padding: '0 0 0 50px'
    }
  }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>

      <p><b>Question No.1:</b><br></br>n th term of 3+5+9+17+...... is <br></br>
      Option a:- <b>2<sup>n</sup>-1</b><br></br>
      Option b:- <b>(2+n)/n</b><br></br>
      Option c:- <b>2<sup>n</sup>+1</b><br></br>
      Option d:- <b>3+2<sup>n</sup></b><br></br>
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>2+3+5+6+8+9+......2n terms=
      <br></br>
      Option a:- <b>3n<sup>2</sup>+2n</b><br></br>
      Option b:- <b>4n<sup>2</sup>+2n</b><br></br>
      Option c:- <b>4n<sup>2</sup></b><br></br>
      Option d:- <b>none</b><br></br>
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>(Σn<sup>3</sup>)(Σn)=(Σn<sup>2</sup>)<sup>2</sup> if<br></br>
      Option a:- <b>n=3 </b><br></br>
      Option b:- <b>n=1</b> <br></br>
      Option c:- <b>n<sup>2</sup>=3</b><br></br>
      Option d:- <b>n=-1</b><br></br>                
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b> <br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>1+3+6+......+n(n+1)/2=<br></br>
      Option a:- <b>[n(n+1)(2n+1)]/6</b><br></br>
      Option b:- <b>[n<sup>2</sup> (n+1)<sup>2</sup>]/4</b><br></br>
      Option c:- <b>[n(n+1)(n+2)]/6</b><br></br>
      Option d:- <b>[n(n<sup>2</sup>+1)]/2</b><br></br>       
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>1+4+10+19+......+(3n<sup>2</sup>-3n+2)/2=
            <br></br>
      Option a:- <b>[n(n+1)(2n+1)]/6</b><br></br>
      Option b:- <b>[n<sup>2</sup> (n+1)<sup>2</sup>]/4</b> <br></br>
      Option c:- <b>[n(n+1)(n+2)]/6</b><br></br>
      Option d:- <b>[n(n<sup>2</sup>+1)]/2</b><br></br>       
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>1+3+7+15....... n terms=        <br></br>
      Option a:- <b>2<sup>n+1</sup>-n-2</b><br></br>
      Option b:- <b>n<sup>2</sup>+n-2</b><br></br>
      Option c:- <b>2<sup>n</sup>+n<sup>2</sup>- 1</b><br></br>
      Option d:- <b>none</b><br></br>
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>3+13+29+51+79+........=
        <br></br>
      Option a:- <b>2n<sup>2</sup>+7n<sup>3</sup></b><br></br>
      Option b:- <b>n<sup>2</sup>+5n<sup>3</sup></b><br></br>
      Option c:- <b>n<sup>3</sup>+2n<sup>2</sup>3</b><br></br>
      Option d:- <b>None</b><br></br>  
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>1+4+13+40+........n terms
      <br></br>
      Option a:- <b>(3<sup>n+1</sup>-2<sup>n</sup>)/2n </b><br></br>
      Option b:- <b>(3<sup>n+1</sup>-2n-3)/4</b><br></br>
      Option c:- <b>(3n-1+3<sup>n</sup>)/9</b><br></br>
      Option d:- <b>(3<sup>n+1</sup>+2n<sup>2</sup>)/8</b><br></br>  
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>1.3+2.3<sup>2</sup>+3.3<sup>3</sup>+..........n.3<sup>n</sup>=
      <br></br>
      Option a:- <b>[(2n-1)3<sup>(n+1)</sup>+3]/4</b><br></br>
      Option b:- <b>[(2n+1) 3<sup>n+1</sup>+3]/4</b><br></br>
      Option c:- <b>[(2n+1)3<sup>n+1</sup>-3]/4</b><br></br>
      Option d:- <b>[(2n-1)3<sup>n+1</sup>-3]/4</b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>1<sup>2</sup>+ 3<sup>2</sup>+5<sup>2</sup>+.......+(2n-1)<sup>2</sup>
      <br></br>
      Option a:- <b>[n(2n-1)(2n+1)]/3</b><br></br>
      Option b:- <b>[n(2n+1)(2n+1)]/3</b><br></br>
      Option c:- <b>[n(2n-1)(2n-1)]/3</b><br></br>
      Option d:- <b>none </b><br></br>     
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>2<sup>3</sup>+4<sup>3</sup>+6<sup>3</sup>+⋯+(2n)<sup>3</sup>= kn<sup>2</sup>(n+1)<sup>2</sup>,then k=
      <br></br>
      Option a:- <b>1/2</b><br></br>
      Option b:- <b>1</b><br></br>
      Option c:- <b>3/2</b><br></br>
      Option d:- <b>2</b><br></br> 
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>1<sup>3</sup>+2<sup>3</sup>+3<sup>3</sup>+⋯+100<sup>3</sup>= k<sup>2</sup>,then k=  
      <br></br>
      Option a:- <b>10100</b><br></br>
      Option b:- <b>5000</b><br></br>
      Option c:- <b>5050	</b><br></br>
      Option d:- <b>1010</b><br></br>
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>If  s<sub>n</sub>=1<sup>3</sup>+2<sup>3</sup>+.......+n<sup>3</sup> and T<sub>n</sub>=1+2+⋯+n then<br></br>
      Option a:- <b>s<sub>n</sub>=T<sub>n<sup>3</sup></sub></b><br></br>
      Option b:- <b>s<sub>n</sub>=T<sub>n<sup>2</sup></sub></b><br></br>
      Option c:- <b>s<sub>n</sub>=T<sup>2</sup><sub>n</sub></b><br></br>
      Option d:- <b>s<sub>n</sub>=T<sub>n<sup>3</sup></sub><b>k</b></b><br></br>  
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>1<sup>3</sup>+1<sup>2</sup>+1+2<sup>3</sup>+2<sup>2</sup>+2+3<sup>3</sup>+3<sup>2</sup>+3+⋯3n terms=
      <br></br>
      Option a:- <b>n(n+1)<sup>2</sup></b><br></br>
      Option b:- <b>n<sup>2</sup>(n-1)</b><br></br>
      Option c:- <b>[n(n+1)(3n<sup>2</sup>+7n+8)]/12</b><br></br>
      Option d:- <b>None</b><br></br> 
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>1.2+2.3+3.4+.....n terms=
            <br></br>
      Option a:- <b>n(n+1)(n+5)/3 </b><br></br>
      Option b:- <b>n(n+1)(n+2)/3</b><br></br>
      Option c:- <b>n(4n<sup>2</sup>+6n-1)/3</b><br></br>
      Option d:- <b>n(n+1)(n+2)</b><br></br>    
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>1.3+3.5+5.7+..........n terms=
      <br></br>
      Option a:- <b>n(n+1)(n+5)/3</b><br></br>
      Option b:- <b>n(n+1)(n+2)/3</b><br></br>
      Option c:- <b>n(4n<sup>2</sup>+6n-1)/3</b><br></br>
      Option d:- <b>n(n+1)(n+2)</b><br></br>
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>1.4+2.5+3.6+....+n(n+3)=      <br></br>
      Option a:- <b>n(n+1)(n+5)/3</b><br></br>
      Option b:- <b>n(n+1)(n+2)/3</b><br></br>
      Option c:- <b>n(4n<sup>2</sup>+6n-1)/3</b><br></br>
      Option d:- <b>n(n+1)(n+2)</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>2.4+4.7+6.10+.....(n-1) terms=      <br></br>
      Option a:- <b>2n<sup>3</sup>-2n<sup>2</sup>4</b><br></br>
      Option b:- <b>[n<sup>3</sup>+3n<sup>2</sup>+1]/6</b><br></br>
      Option c:- <b>2n<sup>3</sup>+2n</b><br></br>
      Option d:- <b>none</b><br></br> 
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>3.6+4.7+5.8+......(n-2) terms=      <br></br>
      Option a:- <b>n<sup>3</sup>+n<sup>2</sup>+n+2</b><br></br>
      Option b:- <b>[2n<sup>3</sup>+12n<sup>2</sup>+10n-84]/6</b><br></br>
      Option c:- <b>αn<sup>3</sup>+βn<sup>2</sup>+γn0</b><br></br>
      Option d:- <b>none</b><br></br> 
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>1.2<sup>2</sup>+2.3<sup>2</sup>+3.4<sup>2</sup>+....+n(n+1)<sup>2</sup>=<br></br>
      Option a:- <b>n(n+1)(n+2)(3n+5)/12</b><br></br>
      Option b:- <b>n(n+1)(n+2)(n+3)/4</b><br></br>
      Option c:- <b>2n(n+1)(n+2)(n+3)</b><br></br>
      Option d:- <b>n(n+1)(n+2)(3n+1)/12</b><br></br>
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>2.1<sup>2</sup>+3.2<sup>2</sup>+4.3<sup>2</sup>+⋯+(n+1)n<sup>2</sup>=
      <br></br>
      Option a:- <b>n(n+1)(n+2)(3n+5)/12</b><br></br>
      Option b:- <b>n(n+1)(n+2)(n+3)/4</b><br></br>
      Option c:- <b>2n(n+1)(n+2)(n+3)</b><br></br>
      Option d:- <b>n(n+1)(n+2)(3n+1)/12</b><br></br>  
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>1.2.3+2.3.4+3.4.5+.......n terms=      <br></br>
      Option a:- <b>[n(n+1)(n+2)(3n+5)]/12</b><br></br>
      Option b:- <b>[n(n+1)(n+2)(n+3)]/4</b><br></br>
      Option c:- <b>2n(n+1)(n+2)(n+3)</b><br></br>
      Option d:- <b>[n(n+1)(n+2)(3n+1)]/12</b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>1.3.4+2.4.5+3.5.6+......+n terms 
      <br></br>
      Option a:- <b>[n(n+1)(n+2)]/6</b><br></br>
      Option b:- <b>[n(n+1)3n<sup>2</sup>+23n+46]/12</b><br></br>
      Option c:- <b>[n(27n<sup>3</sup>+90n<sup>3</sup>+45n-50)]/4</b><br></br>
      Option d:- <b>[n(n+1)(2n+1)]/6</b><br></br> 
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>1.4.7+4.7.10+7.10.13+........ n terms      <br></br>
      Option a:- <b>[n(n+1)(n+2)]/6</b><br></br>
      Option b:- <b>[n(n+1)(3n<sup>2</sup>+23n+46)]/12</b><br></br>
      Option c:- <b>[n(27n<sup>3</sup>+90n<sup>2</sup>+45n-50)]/4</b><br></br>
      Option d:- <b>[n(n+1)(2n+1)]/6</b><br></br>   
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>2.3.1+3.4.4+4.5.7+......... n terms      <br></br>
      Option a:- <b>n/12 [9n<sup>3</sup>+46n<sup>2</sup>+51n-34]</b><br></br>
      Option b:- <b>n/12 [9n<sup>3</sup>-46n<sup>2</sup>+51n-34]</b><br></br>
      Option c:- <b>n/12 [9n<sup>3</sup>+46n<sup>2</sup>-51n+34]</b><br></br>
      Option d:- <b>n/12 [9n<sup>3</sup>-46n<sup>2</sup>-51n+34]</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>(1)+(1+2+)+(1+2+3)+.......n brackets=<br></br>
      Option a:- <b>[n(n+1)(n+2)]/6</b><br></br>
      Option b:- <b>[n(n+1)(3n<sup>2</sup>+23n+46)]/12</b><br></br>
      Option c:- <b>[n(27n<sup>3</sup>+90n<sup>2</sup>+45n-50)]/4</b><br></br>
      Option d:- <b>[n(n+1)(2n+1)]/6</b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>(1)+(1+3)+(1+3+5)+.......n brackets=      <br></br>
      Option a:- <b>[n(n+1)(n+2)]/6</b><br></br>
      Option b:- <b>[n(n+1)(3n<sup>2</sup>+23n+46)]/12</b><br></br>
      Option c:- <b>[n(27n<sup>3</sup>+90n<sup>2</sup>+45n-50)]/4</b><br></br>
      Option d:- <b>[n(n+1)(2n+1)]/6</b><br></br>             
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>(1<sup>2</sup>)+(1<sup>2</sup>+2<sup>2</sup> )+(1<sup>2</sup>+2<sup>2</sup>+3<sup>2</sup> )+...................n brackets
      <br></br>
      Option a:- <b>[n(n+1)(n+2)]/6</b><br></br>
      Option b:- <b>[n(n+1)<sup>2</sup> (n+2)]/12</b><br></br>
      Option c:- <b>n(n+1)(n+2)</b><br></br>
      Option d:- <b>[n(n+1)(2n+1)]/6</b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br>Sum of n th bracket of (1)+(1/3+1/3<sup>2</sup>)+( 1/3<sup>3</sup>+1/3<sup>4</sup>+1/3<sup>5</sup>)+......................... is
<br></br>
      Option a:- <b>(3<sup>n</sup>-1)<sup>3</sup>/2.4<sup>n-1</sup></b><br></br>
      Option b:- <b>3<sup>n-1</sup>/2.3<sup>(n-1)(n+2)/2</sup></b><br></br>
      Option c:- <b>3<sup>(n+1)</sup>/3.7<sup>(n-1)</sup> </b><br></br>
      Option d:- <b>none</b><br></br> 
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>(1)+(2+3)+(4+5+6)+...... n brackets<br></br>
      Option a:- <b>[n(n+1)(n<sup>2</sup>+n+2)]/8</b><br></br>
      Option b:- <b>[n(n+1)(n<sup>2</sup>-n+2)]/8</b><br></br>
      Option c:- <b>[n(n-1)(n<sup>2</sup>+n+2)]/8</b><br></br>
      Option d:- <b>[n(n-1)(n<sup>2</sup>-n+2)]/8</b><br></br> 
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>The value of sum in the n<sup>th</sup>  bracket of (1)+(2+3)+(4+5+6+7)+(8+9+10+.....15)+...... is
<br></br>
      Option a:- <b>2<sup>n</sup>(2<sup>n</sup>+2<sup>n-1</sup>-1)</b><br></br>
      Option b:- <b>2<sup>n-1</sup> (2<sup>n</sup>+2<sup>n-1</sup>-1)</b><br></br>
      Option c:- <b>2<sup>n-2</sup> (2<sup>n</sup>+2<sup>n-1</sup>-1)</b><br></br>
      Option d:- <b>none of these</b><br></br> 
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>If the natural numbers are devided into  groups of {`{1}`},{`{2,3}`},{`{4,5,6}`},{`{7,8,9,10}`}......then the sum of 50 th group is
<br></br>
      Option a:- <b>62525</b><br></br>
      Option b:- <b>65225</b><br></br>
      Option c:- <b>56255</b><br></br>
      Option d:- <b>55625</b><br></br> 
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b> <br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>(1)+(2+3+4)+(5+6+7+8+9)+....... n brackets<br></br>
      Option a:- <b>[n(n+1)(n+2)]/6</b><br></br>
      Option b:- <b>[n<sup>2</sup>(n<sup>2</sup>+1)]/2</b><br></br>
      Option c:- <b>n(n+1)(n+2)</b><br></br>
      Option d:- <b>[n(n+1)(n+2)]/3</b><br></br>
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>(1<sup>2</sup>/3)+[(1<sup>2</sup>+2<sup>2</sup>)/5]+[(1<sup>2</sup>+2<sup>2</sup>+3<sup>2</sup>)/7]+.........n terms =
<br></br>
      Option a:- <b>[n(n+1)(n+2)]/18</b><br></br>
      Option b:- <b>[n(n+1)(n+2)]/6</b><br></br>
      Option c:- <b>[n(n+1)(n+2)]/3</b><br></br>
      Option d:- <b>[2n(n+1)(n+2)]/3</b><br></br>  
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>[1<sup>3</sup>/3]+[(1<sup>3</sup>+2<sup>3</sup>)/(1+3)]+[(1<sup>3</sup>+2<sup>3</sup>+3<sup>3</sup>)/(1+3+5)]+........n terms =      
<br></br>
      Option a:- <b>[n(2n<sup>2</sup>+9n+13)/24]</b><br></br>
      Option b:- <b>[n(2n<sup>3</sup>+9n+13)/24]</b><br></br>
      Option c:- <b>[n(n<sup>2</sup>+9n+13)/24]</b><br></br>
      Option d:- <b>[n(n<sup>2</sup>+9n+13)/8]</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>The sum of first 9 terms of the series [1<sup>3</sup>/3]+[(1<sup>3</sup>+2<sup>3</sup>)/(1+3)]+[(1<sup>3</sup>+2<sup>3</sup>+3<sup>3</sup>)/(1+3+5)]+........ is=
      <br></br>
      Option a:- <b>71</b><br></br>
      Option b:- <b>96</b><br></br>
      Option c:- <b>142</b><br></br>
      Option d:- <b>192</b><br></br> 
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>∑[(1<sup>2</sup>+2<sup>2</sup>+3<sup>2</sup>+........n<sup>2</sup>)/(1+2+3+⋯n)]=
      <br></br>
      Option a:- <b>(n<sup>2</sup>+2n)/3</b><br></br>
      Option b:- <b>(n<sup>2</sup>-2n)/6</b><br></br>
      Option c:- <b>(n<sup>2</sup>+11)/12n</b><br></br>
      Option d:- <b>none</b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>[1.2<sup>2</sup>+2.3<sup>2</sup>+3.4<sup>2</sup>+......n(n+1)<sup>2</sup>]/[1<sup>2</sup>.2+2<sup>2</sup>.3+3<sup>2</sup>.4+.......n<sup>2</sup> (n+1)] =
      <br></br>
      Option a:- <b>(3n+5)/(3n+1)</b><br></br>
      Option b:- <b>(3n+1)/(3n+5)</b><br></br>
      Option c:- <b>(3n+1)(3n+5) </b><br></br>
      Option d:- <b>None</b><br></br> 
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>[1<sup>4</sup>/(1.3)]+[2<sup>4</sup>/(3.5)]+[3<sup>4</sup>/(5.7)]+.......+[n<sup>4</sup>/(2n+1)(2n-1)]=
      <br></br>
      Option a:- <b>[n(n+1)(n+2)]/6n</b><br></br>
      Option b:- <b>[n(n+1)(n<sup>2</sup>+n+1)]/[6(2n+1)]</b><br></br>
      Option c:- <b>n(n+2)(n+1)<sup>2</sup></b><br></br>
      Option d:- <b>none</b><br></br>
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>If [1/(2×4)]+[1/(4×6)]+[1/(6×8)]+⋯(n terms)=kn/(n+1 ) then k=
      <br></br>
      Option a:- <b>1/4</b><br></br>
      Option b:- <b>1/2</b><br></br>
      Option c:- <b>1</b><br></br>
      Option d:- <b>1/8</b><br></br> 
      Selected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div>
    </div>
    <button onClick={() => exportAsImage(exportRef.current, "Mathematical Induction")} style={bstyle} >Download Summary</button></div>

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
export default connect (mapStateToProps,mapDispatchToProps) (MIsummary)