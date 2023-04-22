import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux';
import { statUpdateref } from '../../redux/cake/cakeAction';
import Logo from '../../redux/Images/Logo.jpg'
import { useRef } from 'react';
import html2canvas from 'html2canvas';







function  DYsummary(props) {
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
const correct=["d","d","c","a", "b","a","d","d", "c","b","a","c", "d","c","c","c", "c","b","b","a", "b","c","b","c", "d","b","b","d", "b","c","c","d", "c","c","c","d", "b","d","b","b"]; 
const opted=[props.option,props.optionone,props.optiontwo,props.optionthree,props.optionfour,props.optionfive,props.optionsix,props.optionseven,props.optioneight,props.optionnine,props.optionten,props.optioneleven,props.optiontwelve,props.optionthirteen,props.optionfourteen,props.optionfifteen,props.optionsixteen,props.optionseventeen,props.optioneighteen,props.optionnineteen,props.optiontwenty,props.optiontwentyone,props.optiontwentytwo,props.optiontwentythree,props.optionfour,props.optiontwentyfive,props.optiontwentysix,props.optiontwentyseven,props.optiontwentyeight,props.optiontwentynine,props.optionthirty,props.optionthirtyone,props.optionthirtytwo,props.optionthirtythree,props.optionthirtyfour,props.optionthirtyfive,props.optionthirtysix,props.optionthirtyseven,props.optionthirtyeight,props.optionthirtynine];
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
    <div><div id="divToPrint" >
      <h1 style={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1>
      <h2 style={
      {
  textAlign:"center",
  backgroundColor:"#A7CC13"
      }
    }>Performance Summary- Diseases</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle} onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>
    {/* <button onClick={()=>navigate('/')}>Logout</button> */}
      <p><b>Question No.1:</b><br></br>{props.BHealthanddiseaseOne}<br></br>
      Option a:- <b>{props.BHealthanddiseaseOneA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseOneB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseOneC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseOneD}</b><br></br>
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>{props.BHealthanddiseaseThree}<br></br>
      Option a:- <b>{props.BHealthanddiseaseThreeA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseThreeB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseThreeC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseThreeD}</b><br></br>
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>{props.BHealthanddiseaseFour}<br></br>
      Option a:- <b>{props.BHealthanddiseaseFourA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseFourB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseFourC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseFourD}</b><br></br>
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b><br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>{props.BHealthanddiseaseFive}<br></br>
      Option a:- <b>{props.BHealthanddiseaseFiveA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseFiveB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseFiveC}s</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseFiveD}</b><br></br>
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>{props.BHealthanddiseaseSix}<br></br>
      Option a:- <b>{props.BHealthanddiseaseSixA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseSixB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseSixC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseSixD}</b><br></br> 
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>{props.BHealthanddiseaseSeven}
<br></br>
      Option a:- <b>{props.BHealthanddiseaseSevenA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseSevenB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseSevenC}y</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseSevenD}</b><br></br> 
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>{props.BHealthanddiseaseEight}<br></br>
      Option a:- <b>{props.BHealthanddiseaseEightA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseEightB}s</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseEightC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseEightD}</b><br></br> 
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>Diseases are broadly grouped into infectious and non-infectious deseases. In the list given below identify the infectious diseases<br></br>i.Cancer <br></br>ii.Influenza<br></br> iii.Allergy<br></br>	iv.Small po<br></br>
      Option a:- <b>{props.BHealthanddiseaseNineA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseNineB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseNineC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseNineD}</b><br></br>
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>{props.BHealthanddiseaseTen}<br></br>
      Option a:- <b>{props.BHealthanddiseaseTenA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseTenB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseTenC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseTenD}</b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>{props.BHealthanddiseaseEleven}<br></br>
      Option a:- <b>{props.BHealthanddiseaseElevenA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseElevenB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseElevenC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseElevenD}</b><br></br> 
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>{props.BHealthanddiseaseTwelve}<br></br>
      Option a:- <b>{props.BHealthanddiseaseTwelveA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseTwelveB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseTwelveC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseTwelveD}</b><br></br> 
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>{props.BHealthanddiseaseThirteen}
<br></br>
      Option a:- <b>{props.BHealthanddiseaseThirteenA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseThirteenB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseThirteenC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseThirteenD}</b><br></br>
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>{props.BHealthanddiseaseFourteen}<br></br>
      Option a:- <b>{props.BHealthanddiseaseFourteenA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseFourteenB}m</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseFourteenC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseFourteenD}</b><br></br>   
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>{props.BHealthanddiseaseFifteen}e<br></br>
      Option a:- <b>{props.BHealthanddiseaseFifteenA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseFifteenB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseFifteenC}</b><br></br>
      Option d:- <b>a{props.BHealthanddiseaseFifteenD}</b><br></br>  
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>{props.BHealthanddiseaseSixteen}<br></br>
      Option a:- <b>{props.BHealthanddiseaseSixteenA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseSixteenB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseSixteenC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseSixteenD}</b><br></br>
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>{props.BHealthanddiseaseSeventeen}
<br></br>
      Option a:- <b>{props.BHealthanddiseaseSeventeenA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseSeventeenB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseSeventeenC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseSeventeenD}</b><br></br> 
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>{props.BHealthanddiseaseEighteenC}<br></br>
      Option a:- <b>{props.BHealthanddiseaseEighteenA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseEighteenB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseEighteenC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseEighteenD}</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>{props.BHealthanddiseaseNineteen}<br></br>
      Option a:- <b>{props.BHealthanddiseaseNineteenA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseNineteenB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseNineteenC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseNineteenD}</b><br></br> 
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>{props.BHealthanddiseaseTwenty}<br></br>
      Option a:- <b>{props.BHealthanddiseaseTwentyA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseTwentyB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseTwentyC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseTwentyD}</b><br></br>  
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>{props.BHealthanddiseaseTwentyoneD}<br></br>
      Option a:- <b>{props.BHealthanddiseaseTwentyoneA}s</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseTwentyoneB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseTwentyoneC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseTwentyoneD}</b><br></br> 
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>{props.BHealthanddiseaseTwentytwo}<br></br>
      Option a:- <b>{props.BHealthanddiseaseTwentytwoA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseTwentytwoB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseTwentytwoC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseTwentytwoD}</b><br></br> 
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>Which of the following microbe causes pneumonia in man <br></br>Assertion : Entamoeba hystolytica causes amoebic dysentery in man <br></br>Reason : House fly acts as biological vector which serves to transmit the parasite from one person to another
<br></br>
      Option a:- <b>{props.BHealthanddiseaseTwentythreeA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseTwentythreeB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseTwentythreeC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseTwentythreeD}</b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>{props.BHealthanddiseaseTwentyfive}
<br></br>
      Option a:- <b>{props.BHealthanddiseaseTwentyfiveA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseTwentyfiveB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseTwentyfiveC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseTwentyfiveD} </b><br></br>
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>{props.BHealthanddiseaseTwentysix}<br></br>
      Option a:- <b>{props.BHealthanddiseaseTwentysixA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseTwentysixB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseTwentysixC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseTwentysixD}</b><br></br> 
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>{props.BHealthanddiseaseTwentyseven}<br></br>
      Option a:- <b>{props.BHealthanddiseaseTwentysevenA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseTwentysevenB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseTwentysevenC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseTwentysevenD}</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>C{props.BHealthanddiseaseTwentyeight}<br></br>
      Option a:- <b>{props.BHealthanddiseaseTwentyeightA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseTwentyeightB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseTwentyeightC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseTwentyeightD}</b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>{props.BHealthanddiseaseTwentynine}<br></br>
      Option a:- <b>{props.BHealthanddiseaseTwentynineA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseTwentynineB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseTwentynineC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseTwentynineD}</b><br></br> 
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>{props.BHealthanddiseaseThirty}<br></br>
      Option a:- <b>{props.BHealthanddiseaseThirtyA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseThirtyB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseThirtyC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseThirtyD}</b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br> {props.BHealthanddiseaseThirtyone}<br></br>
      Option a:- <b>{props.BHealthanddiseaseThirtyoneA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseThirtyoneB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseThirtyoneC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseThirtyoneD}</b><br></br> 
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>{props.BHealthanddiseaseThirtytwo}<br></br>
      Option a:- <b>{props.BHealthanddiseaseThirtytwoA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseThirtytwoB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseThirtytwoC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseThirtytwoD}</b><br></br>
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>{props.BHealthanddiseaseThirtythree}<br></br>
      Option a:- <b>{props.BHealthanddiseaseThirtythreeA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseThirtythreeB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseThirtythreeC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseThirtythreeD}</b><br></br>
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>{props.BHealthanddiseaseThirtyfour}<br></br>
      Option a:- <b>{props.BHealthanddiseaseThirtyfourA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseThirtyfourB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseThirtyfourC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseThirtyfourD}</b><br></br>
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b><br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>Read the following statements and select the correct combination? <br></br>a)In general pathogen have to adapt to life with in environment of the host<br></br> b) Plasmodium initially multiplies in RBC and then it attacks hepatic cells of man<br></br>  c) Plasmodium is intracellular parasite in man and extracellular in mosquito <br></br>d)	Sir Ronald Ross discovered Plasmodium in the RBC of man and received Nobel prize for i<br></br>
      Option a:- <b>{props.BHealthanddiseaseThirtyfiveA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseThirtyfiveB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseThirtyfiveC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseThirtyfiveD}</b><br></br>
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>{props.BHealthanddiseaseThirtysix}
<br></br>
      Option a:- <b>{props.BHealthanddiseaseThirtysixA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseThirtysixB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseThirtysixC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseThirtysixD}</b><br></br>
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>Which of the following are vector born diseases?  <br></br>A) Malaria <br></br>B) Dengue fever	<br></br>C) Amoebiasis<br></br> D) Filariasis	<br></br>E) Typhoid <br></br> F) Chikun gunya, <br></br> The correct combination is<br></br>
      Option a:- <b>{props.BHealthanddiseaseThirtysevenA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseThirtysevenB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseThirtysevenC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseThirtysevenD}</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>Which of the following measures help to control the spread of malaria and filariasis?<br></br> A)	Avoiding stagnation of water in and around residential areas <br></br>B)	Spraying of insecticides in ditches and drainage areas <br></br>C)	Introducing larvivorus fishes into drainage ponds <br></br>D)	Use of mosquito nets and mosquito repellants <br></br>The correct combination is<br></br>
      Option a:- <b>{props.BHealthanddiseaseThirtyeightA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseThirtyeightB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseThirtyeightC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseThirtyeightD}</b><br></br>
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>{props.BHealthanddiseaseThirtynine}<br></br>
      Option a:- <b>{props.BHealthanddiseaseThirtynineA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseaseThirtynineB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseaseThirtynineC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseaseThirtynineD}</b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>{props.BHealthanddiseaseforty}<br></br>
      Option a:- <b>{props.BHealthanddiseasefortyA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseasefortyB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseasefortyC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseasefortyD}</b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>{props.BHealthanddiseasefortyone}
<br></br>
      Option a:- <b>{props.BHealthanddiseasefortyoneA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseasefortyoneB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseasefortyoneC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseasefortyoneD}</b><br></br>
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>Note the following: <br></br>i) During of gametogenesis reduction division occurs and gametes formed are haploid;<br></br> ii) Erythrocytic cycle begins with the entry of either cryptozoites or micrometa cryp¬tozoites; <br></br>iii) Maturation of gametocytes generally takes place in spleen and bone marrow ; <br></br>iv)The prepatent period is about 8 days <br></br>Which of the above statements are true for Plasmodium vivax<br></br>
      Option a:- <b>{props.BHealthanddiseasefortytwoA}</b><br></br>
      Option b:- <b>{props.BHealthanddiseasefortytwoB}</b><br></br>
      Option c:- <b>{props.BHealthanddiseasefortytwoC}</b><br></br>
      Option d:- <b>{props.BHealthanddiseasefortytwoD}</b><br></br>
      Selected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div></div>
    <button onClick={() => exportAsImage(exportRef.current, "Diseases")} style={bstyle} >Download Summary</button></div>
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
      BHealthanddiseaseOne: state.BHealthanddiseaseOne,
BHealthanddiseaseOneA: state.BHealthanddiseaseOneA,    
BHealthanddiseaseOneB: state.BHealthanddiseaseOneB,	          
BHealthanddiseaseOneC: state.BHealthanddiseaseOneC,
BHealthanddiseaseOneD: state.BHealthanddiseaseOneD,
BHealthanddiseaseThree: state.BHealthanddiseaseThree,
BHealthanddiseaseThreeA: state.BHealthanddiseaseThreeA,    
BHealthanddiseaseThreeB: state.BHealthanddiseaseThreeB,	          
BHealthanddiseaseThreeC: state.BHealthanddiseaseThreeC,
BHealthanddiseaseThreeD: state.BHealthanddiseaseThreeD,
BHealthanddiseaseFour:state.BHealthanddiseaseFour,
  BHealthanddiseaseFourA:state.BHealthanddiseaseFourA,
  BHealthanddiseaseFourB:state.BHealthanddiseaseFourB,
  BHealthanddiseaseFourC:state.BHealthanddiseaseFourC,
  BHealthanddiseaseFourD:state.BHealthanddiseaseFourD,
  BHealthanddiseaseFive:state.BHealthanddiseaseFive,
  BHealthanddiseaseFiveA:state.BHealthanddiseaseFiveA,
  BHealthanddiseaseFiveB:state.BHealthanddiseaseFiveB,
  BHealthanddiseaseFiveC:state.BHealthanddiseaseFiveC,
  BHealthanddiseaseFiveD:state.BHealthanddiseaseFiveD,
  BHealthanddiseaseSix:state.BHealthanddiseaseSix,
  BHealthanddiseaseSixA:state.BHealthanddiseaseSixA,
  BHealthanddiseaseSixB:state.BHealthanddiseaseSixB,
  BHealthanddiseaseSixC:state.BHealthanddiseaseSixC,
  BHealthanddiseaseSixD:state.BHealthanddiseaseSixD,
  BHealthanddiseaseSeven:state.BHealthanddiseaseSeven,
  BHealthanddiseaseSevenA:state.BHealthanddiseaseSevenA,
  BHealthanddiseaseSevenB:state.BHealthanddiseaseSevenB,
  BHealthanddiseaseSevenC:state.BHealthanddiseaseSevenC,
  BHealthanddiseaseSevenD:state.BHealthanddiseaseSevenD,
  BHealthanddiseaseEight:state.BHealthanddiseaseEight,
  BHealthanddiseaseEightA:state.BHealthanddiseaseEightA,
  BHealthanddiseaseEightB:state.BHealthanddiseaseEightB,
  BHealthanddiseaseEightC:state.BHealthanddiseaseEightC,
  BHealthanddiseaseEightD:state.BHealthanddiseaseEightD,
  BHealthanddiseaseNine:state.BHealthanddiseaseNine,
  BHealthanddiseaseNineA:state.BHealthanddiseaseNineA,
  BHealthanddiseaseNineB:state.BHealthanddiseaseNineB,
  BHealthanddiseaseNineC:state.BHealthanddiseaseNineC,
  BHealthanddiseaseNineD:state.BHealthanddiseaseNineD,
  BHealthanddiseaseTen:state.BHealthanddiseaseTen,
  BHealthanddiseaseTenA:state.BHealthanddiseaseTenA,
  BHealthanddiseaseTenB:state.BHealthanddiseaseTenB,
  BHealthanddiseaseTenC:state.BHealthanddiseaseTenC,
  BHealthanddiseaseTenD:state.BHealthanddiseaseTenD,
  BHealthanddiseaseEleven:state.BHealthanddiseaseEleven,
  BHealthanddiseaseElevenA:state.BHealthanddiseaseElevenA,
  BHealthanddiseaseElevenB:state.BHealthanddiseaseElevenB,
  BHealthanddiseaseElevenC:state.BHealthanddiseaseElevenC,
  BHealthanddiseaseElevenD:state.BHealthanddiseaseElevenD,
  BHealthanddiseaseTwelve:state.BHealthanddiseaseTwelve,
  BHealthanddiseaseTwelveA:state.BHealthanddiseaseTwelveA,
  BHealthanddiseaseTwelveB:state.BHealthanddiseaseTwelveB,
  BHealthanddiseaseTwelveC:state.BHealthanddiseaseTwelveC,
  BHealthanddiseaseTwelveD:state.BHealthanddiseaseTwelveD,
  BHealthanddiseaseThirteen:state.BHealthanddiseaseThirteen,
  BHealthanddiseaseThirteenA:state.BHealthanddiseaseThirteenA,
  BHealthanddiseaseThirteenB:state.BHealthanddiseaseThirteenB,
  BHealthanddiseaseThirteenC:state.BHealthanddiseaseThirteenC,
  BHealthanddiseaseThirteenD:state.BHealthanddiseaseThirteenD,
  BHealthanddiseaseFourteen:state.BHealthanddiseaseFourteen,
  BHealthanddiseaseFourteenA:state.BHealthanddiseaseFourteenA,
  BHealthanddiseaseFourteenB:state.BHealthanddiseaseFourteenB,
  BHealthanddiseaseFourteenC:state.BHealthanddiseaseFourteenC,
  BHealthanddiseaseFourteenD:state.BHealthanddiseaseFourteenD,
  BHealthanddiseaseFifteen:state.BHealthanddiseaseFifteen,
  BHealthanddiseaseFifteenA:state.BHealthanddiseaseFifteenA,
  BHealthanddiseaseFifteenB:state.BHealthanddiseaseFifteenB,
  BHealthanddiseaseFifteenC:state.BHealthanddiseaseFifteenC,
  BHealthanddiseaseFifteenD:state.BHealthanddiseaseFifteenD,
  BHealthanddiseaseSixteen:state.BHealthanddiseaseSixteen,
  BHealthanddiseaseSixteenA:state.BHealthanddiseaseSixteenA,
  BHealthanddiseaseSixteenB:state.BHealthanddiseaseSixteenB,
  BHealthanddiseaseSixteenC:state.BHealthanddiseaseSixteenC,
  BHealthanddiseaseSixteenD:state.BHealthanddiseaseSixteenD,
  BHealthanddiseaseSeventeen:state.BHealthanddiseaseSeventeen,
  BHealthanddiseaseSeventeenA:state.BHealthanddiseaseSeventeenA,
  BHealthanddiseaseSeventeenB:state.BHealthanddiseaseSeventeenB,
  BHealthanddiseaseSeventeenC:state.BHealthanddiseaseSeventeenC,
  BHealthanddiseaseSeventeenD:state.BHealthanddiseaseSeventeenD,
  BHealthanddiseaseEighteen:state.BHealthanddiseaseEighteen,
  BHealthanddiseaseEighteenA:state.BHealthanddiseaseEighteenA,
  BHealthanddiseaseEighteenB:state.BHealthanddiseaseEighteenB,
  BHealthanddiseaseEighteenC:state.BHealthanddiseaseEighteenC,
  BHealthanddiseaseEighteenD:state.BHealthanddiseaseEighteenD,
  BHealthanddiseaseNineteen:state.BHealthanddiseaseNineteen,
  BHealthanddiseaseNineteenA:state.BHealthanddiseaseNineteenA,
  BHealthanddiseaseNineteenB:state.BHealthanddiseaseNineteenB,
  BHealthanddiseaseNineteenC:state.BHealthanddiseaseNineteenC,
  BHealthanddiseaseNineteenD:state.BHealthanddiseaseNineteenD,
  BHealthanddiseaseTwenty:state.BHealthanddiseaseTwenty,
  BHealthanddiseaseTwentyA:state.BHealthanddiseaseTwentyA,
  BHealthanddiseaseTwentyB:state.BHealthanddiseaseTwentyB,
  BHealthanddiseaseTwentyC:state.BHealthanddiseaseTwentyC,
  BHealthanddiseaseTwentyD:state.BHealthanddiseaseTwentyD,
  BHealthanddiseaseTwentyone:state.BHealthanddiseaseTwentyone,
  BHealthanddiseaseTwentyoneA:state.BHealthanddiseaseTwentyoneA,
  BHealthanddiseaseTwentyoneB:state.BHealthanddiseaseTwentyoneB,
  BHealthanddiseaseTwentyoneC:state.BHealthanddiseaseTwentyoneC,
  BHealthanddiseaseTwentyoneD:state.BHealthanddiseaseTwentyoneD,
  BHealthanddiseaseTwentytwo:state.BHealthanddiseaseTwentytwo,
  BHealthanddiseaseTwentytwoA:state.BHealthanddiseaseTwentytwoA,
  BHealthanddiseaseTwentytwoB:state.BHealthanddiseaseTwentytwoB,
  BHealthanddiseaseTwentytwoC:state.BHealthanddiseaseTwentytwoC,
  BHealthanddiseaseTwentytwoD:state.BHealthanddiseaseTwentytwoD,
  BHealthanddiseaseTwentythree:state.BHealthanddiseaseTwentythree,
  BHealthanddiseaseTwentythreeA:state.BHealthanddiseaseTwentythreeA,
  BHealthanddiseaseTwentythreeB:state.BHealthanddiseaseTwentythreeB,
  BHealthanddiseaseTwentythreeC:state.BHealthanddiseaseTwentythreeC,
  BHealthanddiseaseTwentythreeD:state.BHealthanddiseaseTwentythreeD,
  BHealthanddiseaseTwentyfive:state.BHealthanddiseaseTwentyfive,
  BHealthanddiseaseTwentyfiveA:state.BHealthanddiseaseTwentyfiveA,
  BHealthanddiseaseTwentyfiveB:state.BHealthanddiseaseTwentyfiveB,
  BHealthanddiseaseTwentyfiveC:state.BHealthanddiseaseTwentyfiveC,
  BHealthanddiseaseTwentyfiveD:state.BHealthanddiseaseTwentyfiveD,
  BHealthanddiseaseTwentysix:state.BHealthanddiseaseTwentysix,
  BHealthanddiseaseTwentysixA:state.BHealthanddiseaseTwentysixA,
  BHealthanddiseaseTwentysixB:state.BHealthanddiseaseTwentysixB,
  BHealthanddiseaseTwentysixC:state.BHealthanddiseaseTwentysixC,
  BHealthanddiseaseTwentysixD:state.BHealthanddiseaseTwentysixD,
  BHealthanddiseaseTwentyseven:state.BHealthanddiseaseTwentyseven,
  BHealthanddiseaseTwentysevenA:state.BHealthanddiseaseTwentysevenA,
  BHealthanddiseaseTwentysevenB:state.BHealthanddiseaseTwentysevenB,
  BHealthanddiseaseTwentysevenC:state.BHealthanddiseaseTwentysevenC,
  BHealthanddiseaseTwentysevenD:state.BHealthanddiseaseTwentysevenD,
  BHealthanddiseaseTwentyeight:state.BHealthanddiseaseTwentyeight,
  BHealthanddiseaseTwentyeightA:state.BHealthanddiseaseTwentyeightA,
  BHealthanddiseaseTwentyeightB:state.BHealthanddiseaseTwentyeightB,
  BHealthanddiseaseTwentyeightC:state.BHealthanddiseaseTwentyeightC,
  BHealthanddiseaseTwentyeightD:state.BHealthanddiseaseTwentyeightD,

  BHealthanddiseaseTwentynine:state.BHealthanddiseaseTwentynine,
  BHealthanddiseaseTwentynineA:state.BHealthanddiseaseTwentynineA,
  BHealthanddiseaseTwentynineB:state.BHealthanddiseaseTwentynineB,
  BHealthanddiseaseTwentynineC:state.BHealthanddiseaseTwentynineC,
  BHealthanddiseaseTwentynineD:state.BHealthanddiseaseTwentynineD,
  BHealthanddiseaseThirty:state.BHealthanddiseaseThirty,
  BHealthanddiseaseThirtyA:state.BHealthanddiseaseThirtyA,
  BHealthanddiseaseThirtyB:state.BHealthanddiseaseThirtyB,
  BHealthanddiseaseThirtyC:state.BHealthanddiseaseThirtyC,
  BHealthanddiseaseThirtyD:state.BHealthanddiseaseThirtyD,
  BHealthanddiseaseThirtyone:state.BHealthanddiseaseThirtyone,
  BHealthanddiseaseThirtyoneA:state.BHealthanddiseaseThirtyoneA,
  BHealthanddiseaseThirtyoneB:state.BHealthanddiseaseThirtyoneB,
  BHealthanddiseaseThirtyoneC:state.BHealthanddiseaseThirtyoneC,
  BHealthanddiseaseThirtyoneD:state.BHealthanddiseaseThirtyoneD,
  BHealthanddiseaseThirtytwo:state.BHealthanddiseaseThirtytwo,
  BHealthanddiseaseThirtytwoA:state.BHealthanddiseaseThirtytwoA,
  BHealthanddiseaseThirtytwoB:state.BHealthanddiseaseThirtytwoB,
  BHealthanddiseaseThirtytwoC:state.BHealthanddiseaseThirtytwoC,
  BHealthanddiseaseThirtytwoD:state.BHealthanddiseaseThirtytwoD,
  BHealthanddiseaseThirtythree:state.BHealthanddiseaseThirtythree,
  BHealthanddiseaseThirtythreeA:state.BHealthanddiseaseThirtythreeA,
  BHealthanddiseaseThirtythreeB:state.BHealthanddiseaseThirtythreeB,
  BHealthanddiseaseThirtythreeC:state.BHealthanddiseaseThirtythreeC,
  BHealthanddiseaseThirtythreeD:state.BHealthanddiseaseThirtythreeD,
  BHealthanddiseaseThirtyfour:state.BHealthanddiseaseThirtyfour,
  BHealthanddiseaseThirtyfourA:state.BHealthanddiseaseThirtyfourA,
  BHealthanddiseaseThirtyfourB:state.BHealthanddiseaseThirtyfourB,
  BHealthanddiseaseThirtyfourC:state.BHealthanddiseaseThirtyfourC,
  BHealthanddiseaseThirtyfourD:state.BHealthanddiseaseThirtyfourD,
  BHealthanddiseaseThirtyfive:state.BHealthanddiseaseThirtyfive,
  BHealthanddiseaseThirtyfiveA:state.BHealthanddiseaseThirtyfiveA,
  BHealthanddiseaseThirtyfiveB:state.BHealthanddiseaseThirtyfiveB,
  BHealthanddiseaseThirtyfiveC:state.BHealthanddiseaseThirtyfiveC,
  BHealthanddiseaseThirtyfiveD:state.BHealthanddiseaseThirtyfiveD,
  BHealthanddiseaseThirtysix:state.BHealthanddiseaseThirtysix,
  BHealthanddiseaseThirtysixA:state.BHealthanddiseaseThirtysixA,
  BHealthanddiseaseThirtysixB:state.BHealthanddiseaseThirtysixB,
  BHealthanddiseaseThirtysixC:state.BHealthanddiseaseThirtysixC,
  BHealthanddiseaseThirtysixD:state.BHealthanddiseaseThirtysixD,
  BHealthanddiseaseThirtyseven:state.BHealthanddiseaseThirtyseven,
  BHealthanddiseaseThirtysevenA:state.BHealthanddiseaseThirtysevenA,
  BHealthanddiseaseThirtysevenB:state.BHealthanddiseaseThirtysevenB,
  BHealthanddiseaseThirtysevenC:state.BHealthanddiseaseThirtysevenC,
  BHealthanddiseaseThirtysevenD:state.BHealthanddiseaseThirtysevenD,
  BHealthanddiseaseThirtyeight:state.BHealthanddiseaseThirtyeight,
  BHealthanddiseaseThirtyeightA:state.BHealthanddiseaseThirtyeightA,
  BHealthanddiseaseThirtyeightB:state.BHealthanddiseaseThirtyeightB,
  BHealthanddiseaseThirtyeightC:state.BHealthanddiseaseThirtyeightC,
  BHealthanddiseaseThirtyeightD:state.BHealthanddiseaseThirtyeightD,
  BHealthanddiseaseThirtynine:state.BHealthanddiseaseThirtynine,
  BHealthanddiseaseThirtynineA:state.BHealthanddiseaseThirtynineA,
  BHealthanddiseaseThirtynineB:state.BHealthanddiseaseThirtynineB,
  BHealthanddiseaseThirtynineC:state.BHealthanddiseaseThirtynineC,
  BHealthanddiseaseThirtynineD:state.BHealthanddiseaseThirtynineD,
  BHealthanddiseaseforty:state.BHealthanddiseaseforty,
  BHealthanddiseasefortyA:state.BHealthanddiseasefortyA,
  BHealthanddiseasefortyB:state.BHealthanddiseasefortyB,
  BHealthanddiseasefortyC:state.BHealthanddiseasefortyC,
  BHealthanddiseasefortyD:state.BHealthanddiseasefortyD,
  BHealthanddiseasefortyone:state.BHealthanddiseasefortyone,
  BHealthanddiseasefortyoneA:state.BHealthanddiseasefortyoneA,
  BHealthanddiseasefortyoneB:state.BHealthanddiseasefortyoneB,
  BHealthanddiseasefortyoneC:state.BHealthanddiseasefortyoneC,
  BHealthanddiseasefortyoneD:state.BHealthanddiseasefortyoneD,
  BHealthanddiseasefortytwo:state.BHealthanddiseasefortytwo,
  BHealthanddiseasefortytwoA:state.BHealthanddiseasefortytwoA,
  BHealthanddiseasefortytwoB:state.BHealthanddiseasefortytwoB,
  BHealthanddiseasefortytwoC:state.BHealthanddiseasefortytwoC,
  BHealthanddiseasefortytwoD:state.BHealthanddiseasefortytwoD,
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
export default connect (mapStateToProps,mapDispatchToProps) (DYsummary)