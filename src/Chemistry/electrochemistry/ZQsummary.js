import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux';
import html2canvas from 'html2canvas';
import { useRef } from 'react';
import Logo from '../../redux/Images/Logo.jpg'
import { statUpdateref } from '../../redux/cake/cakeAction';


function  ZQsummary(props) {const logoStyle = { 
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
const correct=["c","d","c","c", "d","c","b","d", "a","c","c","c", "b","b","c","a", "b","a","b","b", "a","c","c","d", "c","c","c","b", "a","a","a","d", "a","d","d","d", "c","c","c","a"]; 
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
  return (<div>
    <div id="divToPrint" >
      <h1 style={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1>
      <h2 style={
      {
  textAlign:"center",
  backgroundColor:"#A7CC13"

      }
    }>Performance Summary- Electrochemistry</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>
      <p><b>Question No.1:</b><br></br>The flow of current in an electroylte is due to movement of<br></br>
      Option a:- <b>Electrons</b><br></br>
      Option b:- <b>Protons</b><br></br>
      Option c:- <b>Ions</b><br></br>
      Option d:- <b>Molecules</b><br></br> 
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>Which one of the following solutions will have highest conductivity
      <br></br>
      Option a:- <b>0.1 M CH<sub>3</sub>COOH</b><br></br>
      Option b:- <b>0.1 M NaCl</b><br></br>
      Option c:- <b>0.1 M KNO<sub>3</sub></b><br></br>
      Option d:- <b>0.1 M HCl</b><br></br>
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>The cell constant is the product of resistance and<br></br>
      Option a:- <b>Conductance</b><br></br>
      Option b:- <b>Molar conductance</b><br></br>
      Option c:- <b>Specific conductance</b><br></br>
      Option d:- <b>Specific resistance </b><br></br>     
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b><br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>At infinite dilution, the equivalent conductivity of an electrolyte is given by {'\u2227'}<sup>o</sup><sub>eq</sub>= {'\u03bb'}<sup>o</sup><sub>c</sub>+{'\u03bb'}<sup>o</sup><sub>a</sub>.<br></br>
    The above statement is given by<br></br>
      Option a:- <b>ostwald</b><br></br>
      Option b:- <b>Hottorf</b><br></br>
      Option c:- <b>Kohlrausch</b><br></br>
      Option d:- <b>None of these </b><br></br>
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>The S.I. Unit of molar conductance is<br></br>
      Option a:- <b>S m<sup>-1</sup> mol<sup>-1</sup></b><br></br>
      Option b:- <b>S m<sup>-2</sup> mol<sup>-2</sup></b><br></br>
      Option c:- <b>S m mol<sup>-1</sup></b><br></br>
      Option d:- <b>S m<sup>2</sup> mol<sup>-1</sup></b><br></br> 
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>The distance between the platinum electrodes of a conductivity cell is 0.8 cm and the area of cross section of each electrode is 1.2 cm<sup>2</sup>. The cell constant is
<br></br>
      Option a:- <b>1.5 cm</b><br></br>
      Option b:- <b>0.96 cm<sup>-1</sup></b><br></br>
      Option c:- <b>0.66 cm<sup>-1</sup></b><br></br>
      Option d:- <b>1.5 cm<sup>-1</sup></b><br></br>  
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>Molar conductivities at infinite dilution of AgNO<sub>3</sub>, NaNO<sub>3</sub>,and NaCl are 116.5, 105.2 and 110.3 cm<sup>2</sup>mol<sup>-1</sup> respectively. The limiting molar conductivity of AgCl in S cm<sup>2</sup>mol<sup>-1</sup> is 
<br></br>
      Option a:- <b>101.4</b><br></br>
      Option b:- <b>121.6</b><br></br>
      Option c:- <b>99.0</b><br></br>
      Option d:- <b>130.6</b><br></br> 
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>Which of the following is a nonelectrolyte?<br></br>
      Option a:- <b>HClO<sub>4</sub></b><br></br>
      Option b:- <b>CH<sub>3</sub>COOH </b><br></br>
      Option c:- <b>NH<sub>4</sub>OH</b><br></br>
      Option d:- <b>Urea</b><br></br>
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>With increase in temparature the electrical conduction of an electrolyte<br></br>
      Option a:- <b>Increases</b><br></br>
      Option b:- <b>Decreases</b><br></br>
      Option c:- <b>Remains the same</b><br></br>
      Option d:- <b>Changes irregularly</b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>The reaction taking place at anode is .......................and at cathode is called ..................during electrolysis<br></br>
      Option a:- <b>Reduction, Precipitation</b><br></br>
      Option b:- <b>Neutralisation, Oxidation</b><br></br>
      Option c:- <b>Oxidation, Reduction </b><br></br>
      Option d:- <b>Reduction, Oxidation</b><br></br> 
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>When CuSO<sub>4</sub> solution is electrolysed, substance formed at anode is      <br></br>
      Option a:- <b>Cu</b><br></br>
      Option b:- <b>H<sub>2</sub></b><br></br>
      Option c:- <b>O<sub>2</sub></b><br></br>
      Option d:- <b>SO<sub>2</sub></b><br></br>  
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>On electrolysis of dilute H<sub>2</sub>SO<sub>4</sub> between platinum electrodes, the gas evolved at the anode is
<br></br>
      Option a:- <b>SO<sub>2</sub></b><br></br>
      Option b:- <b>SO<sub>3</sub></b><br></br>
      Option c:- <b>O<sub>2</sub></b><br></br>
      Option d:- <b>H<sub>2</sub></b><br></br>
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>Which one of the following statements is true about an electrolytic cell<br></br>
      Option a:- <b>Converts chemical energy into electrical energy</b><br></br>
      Option b:- <b>Converts electrical energy into chemical energy</b><br></br>
      Option c:- <b>A spontaneous reaction occurs in the cell</b><br></br>
      Option d:- <b>E<sub>cell</sub>=E<sub>cathode</sub>+E<sub>anode</sub></b><br></br>  
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>The anode used in the electrolysis of MgCl<sub>2</sub> for extraction of Mg is<br></br>
      Option a:- <b>Platinum</b><br></br>
      Option b:- <b>Graphite</b><br></br>
      Option c:- <b>Nickel</b><br></br>
      Option d:- <b>Iron</b><br></br>   
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>The amount of the substance deposited at the electrode during electrolysisby the passage of one coloumb of current is known as      <br></br>
      Option a:- <b>Equivalent weight</b><br></br>
      Option b:- <b>Chemical equivalent weight</b><br></br>
      Option c:- <b>Electro chemical equivalent weight</b><br></br>
      Option d:- <b>Electro chemical atomic weight</b><br></br>
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>The amount of current in coloumbs passing through electrolytic cell in the electrolysis of aq. CuSO<sub>4</sub> solution if 0.3177 gms of copper was deposited at the cathode(at.wt of Cu= 63.54)
<br></br>
      Option a:- <b>965</b><br></br>
      Option b:- <b>96500</b><br></br>
      Option c:- <b>1930</b><br></br>
      Option d:- <b>3860</b><br></br> 
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>Number of coloumbs of quantity of current required to convert completely 1 mole of Mno<sup>-4</sup> ions in acid medium to one mole of Mn<sup>2+</sup> ions electrolytically is<br></br>
      Option a:- <b>96500</b><br></br>
      Option b:- <b>5 X 96500</b><br></br>
      Option c:- <b>96500 X 2</b><br></br>
      Option d:- <b>96500 X 6</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>The electrolysis cells one containing FeCl<sub>3</sub> and the other FeCl<sub>2</sub> are connected in series and electrolysis is carried out. The ratio of weights of iron deposited in the cells containing Fe<sup>3+</sup> and Fe<sup>2+</sup> respectively is <br></br>
      Option a:- <b>2:3</b><br></br>
      Option b:- <b>3:2</b><br></br>
      Option c:- <b>2:1</b><br></br>
      Option d:- <b>1:2</b><br></br> 
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>Three faradays of electricity was passed through an aqueous solution of iron(II) bromide. The weight of iron(at. wt= 56) deposited at the cathode is   <br></br>
      Option a:- <b>56 gms</b><br></br>
      Option b:- <b>84 gms</b><br></br>
      Option c:- <b>112 gms</b><br></br>
      Option d:- <b>168 gms</b><br></br>  
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>How long has a current of 3 amperes to be applied through a solution of silver nitrate to coat a metal surface of 80 Cm<sup>2</sup> with o005mm thick layer?( Density of silver= 10.5g/C.C)<br></br>
      Option a:- <b>63.01 seconds</b><br></br>
      Option b:- <b>125.09 seconds</b><br></br>
      Option c:- <b>250 seconds</b><br></br>
      Option d:- <b>None</b><br></br> 
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>The time required for complete decomposition of 2 moles of water using 8 amperes of current in seconds is
<br></br>
      Option a:- <b>4.825 X 10<sup>4</sup></b><br></br>
      Option b:- <b>9.650 X 10<sup>4</sup></b><br></br>
      Option c:- <b>19.300 X 10<sup>4</sup></b><br></br>
      Option d:- <b>38.600 X 10<sup>4</sup></b><br></br> 
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>The type of chemical reaction that is generally employed in the construction of a galvanic cell<br></br>
      Option a:- <b>Ionization reaction</b><br></br>
      Option b:- <b>Reduction reaction</b><br></br>
      Option c:- <b>Redox reaction</b><br></br>
      Option d:- <b>Oxidation reaction</b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>In the celln Zn| Zn <sup>+2</sup>(aq)||Cu<sup>2+</sup>|Cu<br></br>
      Option a:- <b>Copper electrode is negative electrode</b><br></br>
      Option b:- <b>Zinc electrode is positive electrode</b><br></br>
      Option c:- <b>Zinc reduces Cu<sup>2+</sup> ions</b><br></br>
      Option d:- <b>Copper reduces Zn<sup>2+</sup> ions</b><br></br>  
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>KCl is used in the construction of salt bridge because<br></br>
      Option a:- <b>K<sup>+</sup>, cl<sup>-</sup> are isoelectric</b><br></br>
      Option b:- <b>KCl is an ionic substance</b><br></br>
      Option c:- <b>K<sup>+</sup>, cl<sup>-</sup> have unit charges</b><br></br>
      Option d:- <b>K<sup>+</sup>, cl<sup>-</sup> move with equal mobilities</b><br></br> 
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>Which of the following represents the daniel cell<br></br>
      Option a:- <b>Zn|Zn<sup>+2</sup>|H<sup>+</sup>|H<sub>2</sub>,Pt</b><br></br>
      Option b:- <b>Zn|Zn<sup>+2</sup>|Cu|Cu <sup>+2</sup></b><br></br>
      Option c:- <b>Zn|Zn<sup>+2</sup>|Cu<sup>+2</sup>|Cu</b><br></br>
      Option d:- <b>Cu|Cu<sup>+2</sup>|Zn<sup>+2</sup>|Zn</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>The potential of the normal hydrogen electrode is<br></br>
      Option a:- <b>+1.1 volts</b><br></br>
      Option b:- <b>+1.0 volts</b><br></br>
      Option c:- <b>Zero volts</b><br></br>
      Option d:- <b>+10 volts</b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>Which cell has a constant voltage throughout its life?<br></br>
      Option a:- <b>Leclanche cell</b><br></br>
      Option b:- <b>An electrolytic cell</b><br></br>
      Option c:- <b>Mercury cell</b><br></br>
      Option d:- <b>Daniell cell</b><br></br>   
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>Which of the following statements is correct concerning a galvanic cell?<br></br>
      Option a:- <b>It generates chemical energy</b><br></br>
      Option b:- <b>E<sub>cell</sub> is positive</b><br></br>
      Option c:- <b>{'\u0394'}G of the cell reaction is positive</b><br></br>
      Option d:- <b>Oxidation occurs at the cathode</b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br>Which of the following is the strongest oxidising agent<br></br>
    MnO<sup>-</sup><sub>4</sub>/Mn<sup>+2</sup>, E=+1.52V<br></br>
    Fe<sup>+3</sup>/Fe<sup>+2</sup>, E=+0.76V<br></br>
    BrO<sup>-</sup><sub>3</sub>/Br<sub>2</sub>, E=-1.50V<br></br>
    Cr<sub>2</sub>O<sub>7</sub><sup>-2</sup>/Cr<sup>+3</sup>, E=+1.33V<br></br><br></br>
      Option a:- <b>MnO<sup>-</sup><sub>4</sub></b><br></br>
      Option b:- <b>Fe<sup>+3</sup></b><br></br>
      Option c:- <b>BrO<sup>-</sup><sub>3</sub></b><br></br>
      Option d:- <b>Cr<sub>2</sub>O<sub>7</sub><sup>-2</sup></b><br></br>  
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>The voltage cell whose half cells are given below is <br></br>
    Mg<sup>+2</sup>+2e<sup>-</sup>{'\u2192'}Mg; E=-2.37 v <br></br>
    Cu<sup>+2</sup>+2e<sup>-</sup>{'\u2192'}Mg; E=+0.34 v <br></br><br></br>
      Option a:- <b>3.78 volts</b><br></br>
      Option b:- <b>1.71 volts</b><br></br>
      Option c:- <b>-2.71 volts</b><br></br>
      Option d:- <b>2.71 volts</b><br></br>
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>The EMF of the cell in which one of the electrodes is standard hydrogen electrode is 1.2 volts. The potential of the other electrode is
<br></br>
      Option a:- <b>-1.2V</b><br></br>
      Option b:- <b>+1.2V</b><br></br>
      Option c:- <b>0.28V</b><br></br>
      Option d:- <b>-0.28V</b><br></br> 
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>The standard electrode reduction potential of Zn,Ni,Cd and Pb are -0.77V,-0.25V,-0.40V and -0.13V respectively. Which of the following statements is correct
<br></br>
      Option a:- <b>Cd displaces Zn from Zn<sup>++</sup></b><br></br>
      Option b:- <b>Ni displaces Cd from Cd<sup>++</sup></b><br></br>
      Option c:- <b>Pb displaces Cd from Cd<sup>++</sup></b><br></br>
      Option d:- <b>Zn displaces all the other metals from their solutions</b><br></br>
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b><br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>The potential of the electrode H<sub>2(g)</sub> (1 atm), H<sup>+</sup>(0.001M) is<br></br>
      Option a:- <b>-0.12 V</b><br></br>
      Option b:- <b>0 V</b><br></br>
      Option c:- <b>0.06 V</b><br></br>
      Option d:- <b>+0.12 V</b><br></br> 
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>The standard emf for the cell reaction 2Cu<sup>+</sup><sub>(aq)</sub>{'\u2192'}Cu+ Cu<sup>+2</sup><sub>(aq)</sub> is 0.36 V at 298K the equilibrium constant for the reaction is
<br></br>
      Option a:- <b>5 x 10<sup>6</sup></b><br></br>
      Option b:- <b>1.4 x 10<sup>12</sup></b><br></br>
      Option c:- <b>7.4 x 10<sup>12</sup></b><br></br>
      Option d:- <b>1.2 x 10<sup>6</sup></b><br></br> 
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>The correct statemet in respect of standard electrode potential is<br></br>
      Option a:- <b>Oxidation potential at 25<sup>o</sup>C and any concentration of the metal ions</b><br></br>
      Option b:- <b>Oxidation potential at any temparature and 0.1 M concentration of the metal ions</b><br></br>
      Option c:- <b>Reduction potential at 25<sup>o</sup>C and 0.1 M concentration of the metal ions</b><br></br>
      Option d:- <b>Reduction potential at 25<sup>o</sup>C and 1.0 M concentration of the metal ions</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>Which of the following material is not present in mercury cell<br></br>
      Option a:- <b>HgO</b><br></br>
      Option b:- <b>KOH</b><br></br>
      Option c:- <b>Zinc</b><br></br>
      Option d:- <b>HgCl<sub>2</sub></b><br></br> 
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>The reaction occuring at the anode during the recharging of lead storage battery is<br></br>
      Option a:- <b>Pb+SO<sup>2-</sup><sub>4</sub>{'\u2192'}PbSO<sub>4</sub>+2e<sup>-</sup></b><br></br>
      Option b:- <b>Pb+PbO<sub>2</sub>+H<sub>2</sub>SO<sub>4</sub>{'\u2192'}2PbSO<sub>4</sub>+2H<sub>2</sub>O</b><br></br>
      Option c:- <b>PbSO<sub>4</sub>+2e<sup>-</sup>{'\u2192'}Pb+SO<sup>2-</sup><sub>4</sub></b><br></br>
      Option d:- <b>2PbSO<sub>4</sub>+2H<sub>2</sub>O{'\u2192'}Pb+PbO<sub>2</sub>+2H<sub>2</sub>SO<sub>4</sub></b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>The device used to convert the chemical energy of H<sub>2</sub> gas into electrical energy is<br></br>
      Option a:- <b>Daniell cell</b><br></br>
      Option b:- <b>Electrolytic cell</b><br></br>
      Option c:- <b>Fuel cell</b><br></br>
      Option d:- <b>Storage cell</b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>Which of the following statements is not true about a primary cell<br></br>
      Option a:- <b>It is source of electrical energy</b><br></br>
      Option b:- <b>A spontaneous redox reaction takes place in this cell</b><br></br>
      Option c:- <b>It can be recharged</b><br></br>
      Option d:- <b>Dry cell is a primary cell</b><br></br> 
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>In the H<sub>2</sub>-O<sub>2</sub> fuel cell the basic reaction is<br></br>
      Option a:- <b>Combustion of H<sub>2</sub></b><br></br>
      Option b:- <b>Conversion of H<sub>2</sub> to H<sub>2</sub>O<sub>2</sub></b><br></br>
      Option c:- <b>Decomposition of H<sub>2</sub>O</b><br></br>
      Option d:- <b>Formation of O<sub>2</sub> form OH<sup>-</sup></b><br></br>
      Selected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div>
    </div>
    <button onClick={() => exportAsImage(exportRef.current, "Electrochemistry")} style={bstyle} >Download Summary</button></div>

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
export default connect (mapStateToProps,mapDispatchToProps) (ZQsummary)