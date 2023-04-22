import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux'
import Logo from '../../redux/Images/Logo.jpg'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { statUpdateref } from '../../redux/cake/cakeAction';





function  ZPsummary(props) {
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
const correct=["b","c","a","a", "a","d","c","b", "d","b","a","b", "a","b","c","b", "a","a","b","d", "a","c","a","a", "a","a","c","a", "b","d","b","c", "d","d","d","b", "c","a","a","a"]; 
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
    }>Performance Summary- Solutions</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>

      <p><b>Question No.1:</b><br></br>The solubility of a gas in a liquid is directly proportional to the pressure of the gas. This statement is
<br></br>
      Option a:- <b>Raoult's law </b><br></br>
      Option b:- <b>Henry's law</b><br></br>
      Option c:- <b>Van't Hoff's law</b><br></br>
      Option d:- <b>Boyle's law</b><br></br> 
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>Which of the following is correct
      <br></br>
      Option a:- <b>Mass of the gas dissolved is directly proportional to its pressure</b><br></br>
      Option b:- <b>Mass of the gas dissolved is inversely proportional to its temparature</b><br></br>
      Option c:- <b>A Soda-water bottle contains oxygen gas dissolved under pressure</b><br></br>
      Option d:- <b>Permanent gases are less soluble than temporary gases</b><br></br>
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>Mole fraction of CO<sub>2</sub> in the solution, if the partial pressure of CO<sub>2</sub> is 1 bar and its Henry's law constant is 1.67 k bar at 298K is
<br></br>
      Option a:- <b>5.98 x 10<sup>-4</sup></b><br></br>
      Option b:- <b>5.98 x 10<sup>-5</sup></b> <br></br>
      Option c:- <b>5.55 x 10<sup>-4</sup></b><br></br>
      Option d:- <b>5.26 x 10<sup>-5</sup></b><br></br>            
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b> <br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>The slope of the straight line obtained from the graph of vapour pressure versus mole fraction of a gas is 1.0. The mole fraction of the gas in solution at 0.1 bar is 
<br></br>
      Option a:- <b>10<sup>-1</sup></b><br></br>
      Option b:- <b>10<sup>-2</sup></b><br></br>
      Option c:- <b>10<sup>-3</sup></b><br></br>
      Option d:- <b>10<sup>-5</sup></b><br></br> 
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>The number of grams of anhydrous Na<sub>2</sub>CO<sub>3</sub> present in 250 ml of 0.25M solution is
    <br></br>
      Option a:- <b>6.625</b><br></br>
      Option b:- <b>6.256</b><br></br>
      Option c:- <b>6.526</b><br></br>
      Option d:- <b>6.320</b><br></br> 
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>Molarity of pure water is<br></br>
      Option a:- <b>55.54 M</b><br></br>
      Option b:- <b>56 M</b><br></br>
      Option c:- <b>54.55 M</b><br></br>
      Option d:- <b>55.55 M</b><br></br>
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>Which of the following solutions is acidic in nature?        <br></br>
      Option a:- <b>20 ml of 0.1M H<sub>2</sub>SO<sub>4</sub>+ 20 ml of 0.3M NaOH</b><br></br>
      Option b:- <b>10 ml of 0.1M H<sub>2</sub>SO<sub>4</sub>+ 20 ml of 0.2M NaOH</b><br></br>
      Option c:- <b>10 ml of 0.1M H<sub>2</sub>SO<sub>4</sub>+ 10 ml of 0.1M NaOH</b><br></br>
      Option d:- <b>20 ml of 0.1M H<sub>2</sub>SO<sub>4</sub>+ 30 ml of 0.3M Ba(OH)<sub>2</sub></b><br></br>
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>How many grams of HCl is required to prepare 500 mL of 1M HCl solution      <br></br>
      Option a:- <b>15.2 g</b><br></br>
      Option b:- <b>18.25 g</b><br></br>
      Option c:- <b>19.2 g</b><br></br>
      Option d:- <b>20.2 g</b><br></br> 
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>In which mode of expression, the concentration of a solution remains independant of temparature
      <br></br>
      Option a:- <b>Molarity</b><br></br>
      Option b:- <b>Normality</b><br></br>
      Option c:- <b>Formality</b><br></br>
      Option d:- <b>Molality</b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>3.011 x 10<sup>21</sup> molecules of CO<sub>2</sub> were dissolved in 55.5 moles of water, its molality is
      <br></br>
      Option a:- <b>5 x 10<sup>-2</sup></b><br></br>
      Option b:- <b>5 x 10<sup>-3</sup></b><br></br>
      Option c:- <b>5.3 x 10<sup>-4</sup></b><br></br>
      Option d:- <b>5.75 x 10<sup>-3</sup></b><br></br>      
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>A solution is 36% water and 64% acetaldehyde(CH<sub>3</sub>CHO) by mass. Mole fraction of acetaldehyde is
      <br></br>
      Option a:- <b>0.42</b><br></br>
      Option b:- <b>0.2</b><br></br>
      Option c:- <b>4.2</b><br></br>
      Option d:- <b>2.1</b><br></br> 
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>Equal masses of N<sub>2</sub>,O<sub>2</sub> and He are present in a gas mixture. Mole fraction of He is
      <br></br>
      Option a:- <b>0.688</b><br></br>
      Option b:- <b>0.788</b><br></br>
      Option c:- <b>0.926</b><br></br>
      Option d:- <b>0.526</b><br></br> 
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>The vapour pressure of a solution is<br></br>
      Option a:- <b>Directly proportional to mole fraction of solvent</b><br></br>
      Option b:- <b>Inversely proportional to mole fraction of solvent</b><br></br>
      Option c:- <b>Directly proportional to mole fraction of a solute</b><br></br>
      Option d:- <b>Inversely proportional to mole fraction of solute</b><br></br> 
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>For a dilute solution, raoult's law states that      <br></br>
      Option a:- <b>The lowering of vapour pressure is equal to the mole fraction of the solute</b><br></br>
      Option b:- <b>The relative lowering of vapour pressure is equal to the mole fraction of the solute</b><br></br>
      Option c:- <b>The relative lowering of vapour pressure is equal to the amount of solute in solution</b><br></br>
      Option d:- <b>The vapour pressure of the solutions is equal to the mole fraction of solute</b><br></br>   
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>Ideal solution is formed when its components<br></br>
      Option a:- <b>Have only zero heat of mixing</b><br></br>
      Option b:- <b>Have only zero volume change</b><br></br>
      Option c:- <b>Have both zero heat of mixing as well as zero volume change</b><br></br>
      Option d:- <b>Can be converted into ideal gas</b><br></br>   
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>Which of the following solution will have high vapour pressure<br></br>
      Option a:- <b>0.1M NaCl</b><br></br>
      Option b:- <b>0.1M glucose</b><br></br>
      Option c:- <b>0.1M Na<sub>2</sub>SO<sub>4</sub></b><br></br>
      Option d:- <b>0.1M Na<sub>3</sub>PO<sub>4</sub></b><br></br> 
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>One mole of non volatile solute is dissolved in two moles of solvent. The relative lowering of vapour pressure is<br></br>
      Option a:- <b>0.33</b><br></br>
      Option b:- <b>0.5</b><br></br>
      Option c:- <b>0.2</b><br></br>
      Option d:- <b>0.11</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>Which of the following solution pairs can be separated into its pure components by fractional distillation<br></br>
      Option a:- <b>Benzene-toluene</b><br></br>
      Option b:- <b>Water-HNO<sub>3</sub></b><br></br>
      Option c:- <b>Water-HCl</b><br></br>
      Option d:- <b>Water-C<sub>2</sub>H<sub>5</sub>OH</b><br></br>     
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>A binary solution of ethanol and n-heptane is an example of<br></br>
      Option a:- <b>Ideal solution</b><br></br>
      Option b:- <b>Non-ideal solution with +ve deviation</b><br></br>
      Option c:- <b>Non-ideal solution with -ve deviation</b><br></br>
      Option d:- <b>Unpredictable behavoiur</b><br></br> 
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>Colligative properties of solutions are those which depend upon<br></br>
      Option a:- <b>The nature of the solvent</b><br></br>
      Option b:- <b>The nature of  the solute</b><br></br>
      Option c:- <b>The number of solvent molecules</b><br></br>
      Option d:- <b>The number of sulute particles</b><br></br> 
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>Molal depression constant is calculated from the enthalpy of fusion ({'\u0394'}H<sub>f</sub>) and boiling point of solvent using the relation      <br></br>
      Option a:- <b>K<sub>f</sub>= [(M<sub>1</sub>RT<sub>o</sub><sup>2</sup>)/(1000{'\u0394'}H<sub>f</sub>)]</b><br></br>
      Option b:- <b>K<sub>f</sub>= [(1000RT<sub>o</sub><sup>2</sup>)/(M<sub>1</sub>{'\u0394'}H<sub>f</sub>)]</b><br></br>
      Option c:- <b>K<sub>f</sub>= [(1000M<sub>1</sub>T<sub>o</sub><sup>2</sup>)/(R{'\u0394'}H<sub>f</sub>)]</b><br></br>
      Option d:- <b>K<sub>f</sub>= [({'\u0394'}H<sub>f</sub>)/(1000M<sub>1</sub>RT<sub>o</sub><sup>2</sup>)]</b><br></br> 
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>Benzoic acid undergoes dimerisation in benzene solution, the van't Hoff factor 'i' is related to the degree of association 'x' of the acid as<br></br>
      Option a:- <b>i=1-x</b><br></br>
      Option b:- <b>i=1+x</b><br></br>
      Option c:- <b>i=1-x/2</b><br></br>
      Option d:- <b>i=1+x/2</b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>Which of the following compounds is expected to have the highest boiling point in its aqueous solution?
      <br></br>
      Option a:- <b>[Co(NH<sub>3</sub>)<sub>6</sub>]Cl<sub>3</sub></b><br></br>
      Option b:- <b>[Co(NH<sub>3</sub>)<sub>5</sub>Cl]Cl<sub>2</sub></b><br></br>
      Option c:- <b>[Co(NH<sub>3</sub>)<sub>4</sub>Cl<sub>2</sub>]Cl</b><br></br>
      Option d:- <b>[Co(NH<sub>3</sub>)<sub>3</sub>Cl<sub>3</sub>]</b><br></br>  
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>The semi permeable membrane used in the purification of sea water by reverse osmosis process is<br></br>
      Option a:- <b>Cellulose acetate</b><br></br>
      Option b:- <b>Cellulose rayon</b><br></br>
      Option c:- <b>Cellophane papern</b><br></br>
      Option d:- <b>Parchment paper</b><br></br> 
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>The osmotic pressure of urea aqueous solution is 1.5 bar at 300 K. Concentration of this solution is R= 0.083L bar mol<sup>-1</sup>K<sup>-1</sup><br></br>
      Option a:- <b>0.060M</b><br></br>
      Option b:- <b>0.12M</b><br></br>
      Option c:- <b>0.6M</b><br></br>
      Option d:- <b>{'\u00b1'}2(<b>b</b>x<b>c</b>)</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A): If hydration energy is greater than lattice energy the solid dissolves in liquid<br></br>
        Reason(R): The solubility of a solid in a liquid depends upon lattice energy and hydration energy<br></br>
        Choose the correct answer from the options given below<br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true but R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true and R is false</b><br></br>
      Option d:- <b>A is false and R is true</b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A): The sum of mole fractions of all the components of a solution is unity<br></br>
        Reason(R): Mole fraction is a temparature dependant quantity<br></br>
        Choose the correct answer from the options given below<br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true but R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true and R is false</b><br></br>
      Option d:- <b>A is false and R is true</b><br></br>           
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A): Anthracene dissolves readily in benzene but sodium chloride doesnot<br></br>
        Reason(R): Polar substances dissolve in polar solvents<br></br>
        Choose the correct answer from the options given below<br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true and R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true but R is false</b><br></br>
      Option d:- <b>A is false but R is true</b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br>Effect of adding a non volatile solute to a solvent is  <br></br>
  I: To lower the vapour pressure<br></br>
  II: To increase its freezing point<br></br>
III: To increase its boiliing point<br></br>
  IV: To decrease its boiliing point<br></br>
 Select the correct answer<br></br>
      Option a:- <b>I,II</b><br></br>
      Option b:- <b>I,III</b><br></br>
      Option c:- <b>I,IV</b><br></br>
      Option d:- <b>II,IV</b><br></br> 
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>Raoult's law is applicable <br></br>
  I: to dilute solutions only<br></br>
  II: when the solute is non volatile<br></br>
III: if the solute does not dissociate or associate <br></br>
  IV: if the solution behaves ideally<br></br>
 Select the correct answer<br></br>
      Option a:- <b>I,II</b><br></br>
      Option b:- <b>II,III</b><br></br>
      Option c:- <b>III,IV</b><br></br>
      Option d:- <b>I,II,III,IV</b><br></br>
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>250 ml of sodium carbonate solution contains 2.65 grams of Na<sub>2</sub>CO<sub>3</sub>. 10 ml of this solution is added to x ml of water to obtain 0.001 M Na<sub>2</sub>CO<sub>3</sub> solution. What is the value of x in ml(Molecular weight of Na<sub>2</sub>Co<sub>3</sub>=106)
<br></br>
      Option a:- <b>1000</b><br></br>
      Option b:- <b>990</b><br></br>
      Option c:- <b>9990</b><br></br>
      Option d:- <b>90</b><br></br> 
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>In acidic medium dichromate ion oxidises ferrous ion to ferric ion. If the gram molecular weight of potassium dichromate 294 grams, its gram equivalent weight is .....gms  
<br></br>
      Option a:- <b>294</b><br></br>
      Option b:- <b>147</b><br></br>
      Option c:- <b>49</b><br></br>
      Option d:- <b>24.5</b><br></br>
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b><br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>3.65 grams of HCl is dissolved in 16.2 grams of water. The mole fraction of HCl in resulting solution is
<br></br>
      Option a:- <b>0.4</b><br></br>
      Option b:- <b>0.3</b><br></br>
      Option c:- <b>0.2</b><br></br>
      Option d:- <b>0.1</b><br></br>
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>250 ml of a solution contains 6.3 gram of oxalic acid(Mol. wt= 126). What is the volume(in litres) of water to be added to the solution to make it a 0.1N solution<br></br>
      Option a:- <b>750</b><br></br>
      Option b:- <b>7.5</b><br></br>
      Option c:- <b>0.075</b><br></br>
      Option d:- <b>0.75</b><br></br>  
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>X grams of water is mixed in 69 grams of ethanol. Molefraction of ethanol in the resultant solution is 0.6. What is the value of X in grams?
<br></br>
      Option a:- <b>54</b><br></br>
      Option b:- <b>36</b><br></br>
      Option c:- <b>180</b><br></br>
      Option d:- <b>18</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>The vapour pressure of water at 23<sup>o</sup>C is 19.8 mm. 0.1 mole of glucose is dissolved in 178.2 g of water. What is the vapour pressure (in mm) of the resultant solution
      <br></br>
      Option a:- <b>19.0</b><br></br>
      Option b:- <b>19.602</b><br></br>
      Option c:- <b>19.402</b><br></br>
      Option d:- <b>19.202</b><br></br>    
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>In the redox reaction,<br></br>
    2KMnO<sub>4</sub>+3H<sub>2</sub>SO<sub>4</sub>+5H<sub>2</sub>C<sub>2</sub>O<sub>4</sub>{'\u2192'}K<sub>2</sub>SO<sub>4</sub>+2MnSO<sub>4</sub>+8H<sub>2</sub>O+10CO<sub>2</sub>,<br></br>
    the volume of 0.1M KMnO<sub>4</sub> required to oxidise 25ml of 0.25M H<sub>2</sub>C<sub>2</sub>O<sub>4</sub> solution is
      <br></br>
      Option a:- <b>25 L</b><br></br>
      Option b:- <b>125 mL</b><br></br>
      Option c:- <b>25 mL</b><br></br>
      Option d:- <b>1.25 L</b><br></br> 
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>The volumes of two HCl solutions A(0.5N) and B(0.1N) to be mixed for preparing 2 litre of 0.2N HCl solution      <br></br>
      Option a:- <b>0.5 litre of A+ 1.5 litre of B</b><br></br>
      Option b:- <b>1.5 litre of A+ 0.5 litre of B</b><br></br>
      Option c:- <b>1.0 litre of A+ 1.0 litre of B</b><br></br>
      Option d:- <b>0.75 litre of A+ 0.25 litre of B</b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>During the depression of freezing point experiment an equilibrium is established between the molecules of    <br></br>
      Option a:- <b>Liquid solvent and solid solvent</b><br></br>
      Option b:- <b>Liquid solute and solid solvent</b><br></br>
      Option c:- <b>Liquid solute and solid solute</b><br></br>
      Option d:- <b>Liquid solvent and solid solute</b><br></br>
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>In BaCl<sub>2</sub> ionises to an extent of 80% in aqueous solution, the value of van't Hoff factor is
    <br></br>
      Option a:- <b>2.6</b><br></br>
      Option b:- <b>0.4</b><br></br>
      Option c:- <b>0.8</b><br></br>
      Option d:- <b>2.4</b><br></br>
      Selected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div>
    </div>
    <button onClick={() => exportAsImage(exportRef.current, "Solutions")} style={bstyle} >Download Summary</button></div>

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
export default connect (mapStateToProps,mapDispatchToProps) (ZPsummary)