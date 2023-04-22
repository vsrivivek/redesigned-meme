import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux'
import Logo from '../../redux/Images/Logo.jpg'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { statUpdateref } from '../../redux/cake/cakeAction';






function  ZTsummary(props) {
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
const correct=["b","a","b","b", "b","a","d","c", "a","c","d","a", "a","d","b","a", "b","a","a","a", "a","b","b","b", "d","d","a","c", "a","c","d","a", "a","a","c","d", "a","a","c","b"]; 
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
    <div>
       <div id="divToPrint" >
      <h1 style={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1>
      <h2 style={
      {
  textAlign:"center",
  backgroundColor:"#A7CC13"

      }
    }>Performance Summary- General Principles of Metallurgy</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>

      <p><b>Question No.1:</b><br></br>The function of flux during the smelting of the ore is<br></br>
      Option a:- <b>To make ore porous</b><br></br>
      Option b:- <b>To remove gangue</b><br></br>
      Option c:- <b>To facilitate reduction</b><br></br>
      Option d:- <b>To facilitate oxidation</b><br></br> 
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>Poling process is used
      <br></br>
      Option a:- <b>For the removal of Cu<sub>2</sub>O from Cu</b><br></br>
      Option b:- <b>For the removal of Al<sub>2</sub>O<sub>3</sub> from Al</b><br></br>
      Option c:- <b>For the removal of Fe<sub>2</sub>O<sub>3</sub> from Fe</b><br></br>
      Option d:- <b>All of the above</b><br></br>
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>Asbestos is a silicate mineral of calcium and<br></br>
      Option a:- <b>Al</b><br></br>
      Option b:- <b>Mg</b><br></br>
      Option c:- <b>Ba</b><br></br>
      Option d:- <b>K</b><br></br>            
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b><br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>In gold schmidt aluminothermic process, thermite contains<br></br>
      Option a:- <b>3 parts Fe<sub>2</sub>O<sub>3</sub> and two parts  Al</b><br></br>
      Option b:- <b>3 parts Fe<sub>2</sub>O<sub>3</sub> and 1 part Al</b><br></br>
      Option c:- <b>3 parts Al<sub>2</sub>O<sub>3</sub> and two parts Al</b><br></br>
      Option d:- <b>1 part Fe<sub>2</sub>O<sub>3</sub> and 1 part Al</b><br></br>
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>The chief constituent and impurity of the gemstone 'Ruby' respectively are    <br></br>
      Option a:- <b>Cr<sub>2</sub>O<sub>3</sub> and Al</b><br></br>
      Option b:- <b>Al<sub>2</sub>O<sub>3</sub> and Cr</b><br></br>
      Option c:- <b>CrO<sub>3</sub> and Cu</b><br></br>
      Option d:- <b>Al<sub>2</sub>O<sub>3</sub> and Cu</b><br></br> 
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>Which of the following is called Fool's gold?<br></br>
      Option a:- <b>FeS<sub>2</sub></b><br></br>
      Option b:- <b>Cu<sub>2</sub>S</b><br></br>
      Option c:- <b>CuFeS<sub>2</sub></b><br></br>
      Option d:- <b>ZnO</b><br></br>
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>Identify the wrongly matched pair<br></br>
      Option a:- <b>Depresent:NaCN</b><br></br>
      Option b:- <b>Slag:FeSiO<sub>3</sub></b><br></br>
      Option c:- <b>Flux:SiO<sub>2</sub></b><br></br>
      Option d:- <b>Gangue:Fe<sub>2</sub>O<sub>3</sub></b><br></br> 
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>In a refining method, the impure metal is heated on the sloping hearth of a furnace. The metal melts and flows down leaving behind the infusible material(dross) on the hearth. This refining method is called
<br></br>
      Option a:- <b>Zone refining</b><br></br>
      Option b:- <b>Vapour phase refining</b><br></br>
      Option c:- <b>Liquation</b><br></br>
      Option d:- <b>Poling</b><br></br>
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>The semiconductor grade metals of very high purity (viz., Si, Ge,B, Ga and In) are purified by      <br></br>
      Option a:- <b>Zone refining</b><br></br>
      Option b:- <b>Vapour phase refining</b><br></br>
      Option c:- <b>Poling</b><br></br>
      Option d:- <b>Electrolytic refining</b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>The principle involved in levigation process is      <br></br>
      Option a:- <b>Difference in magnetic property</b><br></br>
      Option b:- <b>Difference in electrical property</b><br></br>
      Option c:- <b>Difference in the gravities</b><br></br>
      Option d:- <b>Difference in melting points</b><br></br>  
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>A solution is 36% water and 64% acetaldehyde(CH<sub>3</sub>CHO) by mass. Mole fraction of acetaldehyde is
      <br></br>
      Option a:- <b>The gibbs energy change ({'\u0394'}G) for any process at any specified temparature is given by the equation</b><br></br>
      Option b:- <b>{'\u0394'}G=RT ln K</b><br></br>
      Option c:- <b>{'\u0394'}G=-{'\u0394'}H+T{'\u0394'}S</b><br></br>
      Option d:- <b>-{'\u0394'}G=-{'\u0394'}H+T{'\u0394'}S</b><br></br> 
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>Ellingham diagram provides the basis for<br></br>
      Option a:- <b>The choice of reducing agent in the reduction of metal oxides in the extraction of metals</b><br></br>
      Option b:- <b>The choice of oxidising agent for the conversion of the metal</b><br></br>
      Option c:- <b>The rate of reduction of metal oxide into metal</b><br></br>
      Option d:- <b>All of the above</b><br></br> 
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>The term "coupling of reactions" means<br></br>
      Option a:- <b>The point of intersection in Ellingham diagram</b><br></br>
      Option b:- <b>Carrying two spontaneous reactions simultaneously</b><br></br>
      Option c:- <b>Carrying bith spontaneous and non spontaneous reactions simultaneously</b><br></br>
      Option d:- <b>Getting a very large positive Gibbs energy change</b><br></br> 
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>If it is difficult to reduce metal oxides to the metal using carbon, the reduction is done using<br></br>
      Option a:- <b>CO</b><br></br>
      Option b:- <b>CS<sub>2</sub></b><br></br>
      Option c:- <b>H<sub>2</sub></b><br></br>
      Option d:- <b>Electrolytic method</b><br></br>  
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>Arrange the following metals in the increasing order of their reactivity as reducing agents<br></br>
    Cu(+0.34V), Fe(-0.44V), Ag(+0.80V) and Zn(-0.76V)<br></br>
      Option a:- <b>Cu{'\u003e'}Fe{'\u003e'}Zn{'\u003e'}Ag</b><br></br>
      Option b:- <b>Zn{'\u003e'}Fe{'\u003e'}Cu{'\u003e'}Ag</b><br></br>
      Option c:- <b>Ag{'\u003e'}Cu{'\u003e'}Fe{'\u003e'}Zn</b><br></br>
      Option d:- <b>Ag{'\u003e'}Zn{'\u003e'}Fe{'\u003e'}Cu</b><br></br> 
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>In the extraction of copper, metal is formed in the Bessemer converter due to reaction<br></br>
      Option a:- <b>Cu<sub>2</sub>S+2Cu<sub>2</sub>O{'\u2192'}6Cu+SO<sub>2</sub></b><br></br>
      Option b:- <b>Cu<sub>2</sub>S{'\u2192'}2Cu+S</b><br></br>
      Option c:- <b>Fe+Cu<sub>2</sub>O{'\u2192'}2Cu+FeO</b><br></br>
      Option d:- <b>2Cu<sub>2</sub>O{'\u2192'}4Cu+O<sub>2</sub></b><br></br> 
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>The composition of german silver is<br></br>
      Option a:- <b>Cu:40%, Zn:60%</b><br></br>
      Option b:- <b>Cu:25-40%,Zn:25-35%,Ni:40-50%</b><br></br>
      Option c:- <b>Cu:25-35%,Zn:25-40%,Ni:40-50%</b><br></br>
      Option d:- <b>Cu:60%,Zn:40%</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>"Copper matter" is a mixture of<br></br>
      Option a:- <b>Cu<sub>2</sub>S and FeS</b><br></br>
      Option b:- <b>CuS and CuFeS<sub>2</sub></b><br></br>
      Option c:- <b>CuO and FeS</b><br></br>
      Option d:- <b>Cu<sub>2</sub>O and FeO</b><br></br> 
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>The percentage of Cu in blister copper is<br></br>
      Option a:- <b>98-99%</b><br></br>
      Option b:- <b>95-96%</b><br></br>
      Option c:- <b>90-95%</b><br></br>
      Option d:- <b>100%</b><br></br> 
     Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>Brass is an alloy of ......................and .......................<br></br>
      Option a:- <b>Cu,Zn</b><br></br>
      Option b:- <b>Cu,Sn</b><br></br>
      Option c:- <b>Cu,Al</b><br></br>
      Option d:- <b>Cu, Ni</b><br></br>  
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>Sulphide ore of zinc is concentrated by<br></br>
      Option a:- <b>Froth Floatation</b><br></br>
      Option b:- <b>Electromagnetic process</b><br></br>
      Option c:- <b>Gravity Process</b><br></br>
      Option d:- <b>Distillation</b><br></br> 
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>Calamine is<br></br>
      Option a:- <b>CaCO<sub>3</sub></b><br></br>
      Option b:- <b>ZnCO<sub>3</sub></b><br></br>
      Option c:- <b>MgCO<sub>3</sub></b><br></br>
      Option d:- <b>CaCO<sub>3</sub>MgCO<sub>3</sub></b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>If NaOH is added to an aqueous solution of zinc ions, a white precipitate appears and on adding excess of NaOH, the precipitate dissolves. In this solution zinc exist in the
      <br></br>
      Option a:- <b>Cationic part</b><br></br>
      Option b:- <b>Anionic part</b><br></br>
      Option c:- <b>Both Cationic and anionic parts</b><br></br>
      Option d:- <b>There is no zinc in the solution</b><br></br>  
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>The materials mixed before the calcined ore is subjected for smelting in the extraction of iron are<br></br>
      Option a:- <b>Coke and silica</b><br></br>
      Option b:- <b>Coke and limestone</b><br></br>
      Option c:- <b>Limestone and silica</b><br></br>
      Option d:- <b>Coke, limestone and silica</b><br></br> 
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>Stainless steel contains iron and<br></br>
      Option a:- <b>Zn</b><br></br>
      Option b:- <b>Al</b><br></br>
      Option c:- <b>Cu</b><br></br>
      Option d:- <b>Cr</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>Rusting of iron is catalysed by<br></br>
      Option a:- <b>Fe</b><br></br>
      Option b:- <b>O<sub>2</sub></b><br></br>
      Option c:- <b>Zn</b><br></br>
      Option d:- <b>H<sup>+</sup></b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>Hoope's process is used in the refining of<br></br>
      Option a:- <b>Al</b><br></br>
      Option b:- <b>Zn</b><br></br>
      Option c:- <b>Ag</b><br></br>
      Option d:- <b>Cu</b><br></br>        
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>During the electrolytic reduction of alumina, the reaction at cathode is<br></br>
      Option a:- <b>2H<sub>2</sub>{'\u2192'}O<sub>2</sub>+4H<sup>+</sup>+4e<sup>-</sup></b><br></br>
      Option b:- <b>2F<sup>-</sup>{'\u2192'}F<sub>2</sub>+2e<sup>-</sup></b><br></br>
      Option c:- <b>Al<sup>+3</sup>+3e<sup>-</sup>{'\u2192'}Al</b><br></br>
      Option d:- <b>2H<sup>+</sup>+e<sup>-</sup>{'\u2192'}H<sub>2</sub></b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br>Alumino thermic process is used for the spot welding of large iron structures is based upon the fact that<br></br>
      Option a:- <b>As compared to iron, Al has greater affinity for oxygen</b><br></br>
      Option b:- <b>As compared to Al, Fe has greater affinity for oxygen</b><br></br>
      Option c:- <b>Reaction between Al and O<sub>2</sub> is endothermic</b><br></br>
      Option d:- <b>Reaction between iron and Oxygen is endothermic</b><br></br> 
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>The digester present in bauxite ore is (are)<br></br>
      Option a:- <b>KOH</b><br></br>
      Option b:- <b>NaHCO<sub>3</sub></b><br></br>
      Option c:- <b>NaOH</b><br></br>
      Option d:- <b>H<sub>2</sub>SO<sub>4</sub></b><br></br> 
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>During the serpecks's process, silica is eliminated as
<br></br>
      Option a:- <b>Si(solid)</b><br></br>
      Option b:- <b>SiO<sub>2</sub>(vapour)</b><br></br>
      Option c:- <b>SiO<sub>2</sub>(solid)</b><br></br>
      Option d:- <b>Si(Vapour)</b><br></br> 
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>Observe the following statements regarding purification of bauxite<br></br>
    I. During Hall's process, silica is removed Si(vapour)<br></br>
    II. Bauxite ore contaminated with Fe<sub>2</sub>O<sub>3</sub> is purified in baeyer's process.<br></br>
    III. During serpeck's process AIN is formed<br></br>
    The correct answer is<br></br>
      Option a:- <b>I,II and III are correct</b><br></br>
      Option b:- <b>Only I and II are correct</b><br></br>
      Option c:- <b>Only I and III are correct</b><br></br>
      Option d:- <b>Only II and III are correct</b><br></br>
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b><br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>The chemical formula of feldspar is<br></br>
      Option a:- <b>KAlSi<sub>3</sub>O<sub>8</sub></b><br></br>
      Option b:- <b>Na<sub>3</sub>AlF<sub>6</sub></b><br></br>
      Option c:- <b>NaAlO<sub>2</sub></b><br></br>
      Option d:- <b>K<sub>2</sub>SO<sub>4</sub>.Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>.4Al(OH)<sub>3</sub></b><br></br> 
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>In the castner's process of extraction of sodium, cathode is<br></br>
      Option a:- <b>Iron rod</b><br></br>
      Option b:- <b>Nickel rod</b><br></br>
      Option c:- <b>Copper rod</b><br></br>
      Option d:- <b>Graphite rod</b><br></br>  
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>The chemical reaction that involves roasting process is<br></br>
      Option a:- <b>Fe<sub>2</sub>O<sub>3</sub>+3CO{'\u2192'}2Fe+3CO<sub>2</sub></b><br></br>
      Option b:- <b>2Al+Fe<sub>2</sub>O<sub>3</sub>{'\u2192'}2Fe+Al<sub>2</sub>O<sub>3</sub></b><br></br>
      Option c:- <b>2ZnS+3O<sub>2</sub>{'\u2192'}2ZnO+3SO<sub>2</sub></b><br></br>
      Option d:- <b>FeO+SiO<sub>2</sub>{'\u2192'}FeSiO<sub>3</sub></b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>Which of the following is not added during the extraction of silver by cyanide process
      <br></br>
      Option a:- <b>NaCN</b><br></br>
      Option b:- <b>Air</b><br></br>
      Option c:- <b>Zn</b><br></br>
      Option d:- <b>Na<sub>2</sub>S<sub>2</sub>O<sub>3</sub></b><br></br>     
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>Identify the correct statement with respect to Ellingham's diagram from the following statements
      <br></br>
      Option a:- <b>Magnesium reduces aluminium oxide below 1700 K</b><br></br>
      Option b:- <b>Aluminium reduces Magnesium oxide above 1700 K</b><br></br>
      Option c:- <b>Aluminium reduces Magnesium oxide below 1700 K</b><br></br>
      Option d:- <b>Magnesium reduces aluminium oxide above 1700 K</b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>Reduction of a metal oxide state in liquid state is easier than in solid state because <br></br>
      Option a:- <b>The value of entropy change of the reduction process is more</b><br></br>
      Option b:- <b>The value of entropy change is negligible</b><br></br>
      Option c:- <b>The volume is more</b><br></br>
      Option d:- <b>The temparature attained is more</b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>Copper matte contains <br></br>
      Option a:- <b>CuO, Cu<sub>2</sub>S</b><br></br>
      Option b:- <b>CuO,FeS</b><br></br>
      Option c:- <b>Cu<sub>2</sub>S,FeS</b><br></br>
      Option d:- <b>Cu<sub>2</sub>S, FeO</b><br></br> 
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>The ore which is concentrated by leaching is    <br></br>
      Option a:- <b>PbS</b><br></br>
      Option b:- <b>Al<sub>2</sub>O<sub>3</sub>,2H<sub>2</sub>O</b><br></br>
      Option c:- <b>SnO<sub>2</sub></b><br></br>
      Option d:- <b>Fe<sub>2</sub>O<sub>3</sub></b><br></br>
      Selected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div>
    </div>
    <button onClick={() => exportAsImage(exportRef.current, "Metallurgy")} style={bstyle} >Download Summary</button></div>
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
export default connect (mapStateToProps,mapDispatchToProps) (ZTsummary)