import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux';
import Logo from '../../redux/Images/Logo.jpg'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { statUpdateref } from '../../redux/cake/cakeAction';



function  YTsummary(props) {
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
const correct=["a","b","a","a", "c","c","a","c", "a","a","b","b", "b","d","b","a", "a","a","a","c", "c","b","b","b", "c","a","d","a", "b","a","a","a", "c","c","a","a", "d","d","b","b"]; 
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
    }>Performance Summary- Alkali and Alkaline Earth Metals</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>

      <p><b>Question No.1:</b><br></br>The blue colour of the alkali metals in liquor ammonia is<br></br>
      Option a:- <b>Solvated electrons</b><br></br>
      Option b:- <b>High concentration of Na</b><br></br>
      Option c:- <b>The impurities Fe</b><br></br>
      Option d:- <b>Any of the three</b><br></br>
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>Which one of the following alkali metals is a nutrient element required for theplant growth
      <br></br>
      Option a:- <b>Na</b><br></br>
      Option b:- <b>K</b><br></br>
      Option c:- <b>Li</b><br></br>
      Option d:- <b>Rb</b><br></br>
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>Which is the best peroxide used in quantitative analysis in identification of chromium salts<br></br>
      Option a:- <b>Na<sub>2</sub>O<sub>2</sub></b><br></br>
      Option b:- <b>K<sub>2</sub>O<sub>2</sub></b><br></br>
      Option c:- <b>K<sub>2</sub>O</b><br></br>
      Option d:- <b>Cs<sub>2</sub>O<sub>2</sub></b><br></br>
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b><br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>The best CO<sub>2</sub> absorber as well as source of oxygen in submarines is<br></br>
      Option a:- <b>KO<sub>2</sub></b><br></br>
      Option b:- <b>K<sub>2</sub> O<sub>2</sub></b><br></br>
      Option c:- <b>KOH</b><br></br>
      Option d:- <b>LiOH</b><br></br>        
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>NH<sub>3</sub> can be recovered from a solution of (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> by the addition of
<br></br>
      Option a:- <b>NaCl</b><br></br>
      Option b:- <b>HCl</b><br></br>
      Option c:- <b>Ca(OH)<sub>2</sub></b><br></br>
      Option d:- <b>C<sub>2</sub>H<sub>5</sub>OH</b><br></br> 
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>The oxidation state of potassium in KO<sub>3</sub> is
<br></br>
      Option a:- <b>+1/3</b><br></br>
      Option b:- <b>+1/2</b><br></br>
      Option c:- <b>+1</b><br></br>
      Option d:- <b>+6</b><br></br> 
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>The gaseous products in Castner-Kellener process are
<br></br>
      Option a:- <b>Cl<sub>2</sub> & H<sub>2</sub></b><br></br>
      Option b:- <b>O<sub>2</sub> & H<sub>2</sub></b><br></br>
      Option c:- <b>Cl<sub>2</sub></b><br></br>
      Option d:- <b>Cl<sub>2</sub>,O<sub>2</sub> & H<sub>2</sub></b><br></br> 
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>Mixture of NaOH and CaO is called<br></br>
      Option a:- <b>Sodamide</b><br></br>
      Option b:- <b>Caustic soda</b><br></br>
      Option c:- <b>Soda lime</b><br></br>
      Option d:- <b>Caustic potash</b><br></br>
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>When excess of NaOH is added to ZnSO<sub>4</sub> the following is formed finally<br></br>
      Option a:- <b>Na<sub>2</sub>ZnO<sub>2</sub></b><br></br>
      Option b:- <b>Na<sub>2</sub>ZnO<sub>3</sub></b><br></br>
      Option c:- <b>Na<sub>2</sub>ZnO<sub>4</sub></b><br></br>
      Option d:- <b>Zn(OH)<sub>2</sub></b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>Consider the following reaction<br></br>
    6NaOH+3Cl<sub>2</sub>{'\u1292'}5NaCl+A+3H<sub>2</sub>O<br></br>
    What is the oxidation number of chlorine in A is<br></br>
      Option a:- <b>+5</b><br></br>
      Option b:- <b>-1</b><br></br>
      Option c:- <b>+3</b><br></br>
      Option d:- <b>+1</b><br></br> 
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>Which of the following is not correct?<br></br>
      Option a:- <b>In Nelson method of NaOH preparation, Cl<sub>2</sub> is liberated at anode</b><br></br>
      Option b:- <b>With hot and concentrated NaOH,Cl<sub>2</sub> gas gives NaOCl</b><br></br>
      Option c:- <b>NaOH reacts with white phosphorous giving phosphine</b><br></br>
      Option d:- <b>NaOH is used in rayon industry</b><br></br>  
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>The following is used in the softening of water
<br></br>
      Option a:- <b>NaHCO<sub>3</sub></b><br></br>
      Option b:- <b>Na<sub>2</sub>CO<sub>3</sub></b><br></br>
      Option c:- <b>Na<sub>2</sub>O<sub>2</sub></b><br></br>
      Option d:- <b>NaHSO<sub>4</sub></b><br></br>
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>The alkali waste in Leblanc process is<br></br>
      Option a:- <b>CdS</b><br></br>
      Option b:- <b>CaS</b><br></br>
      Option c:- <b>Na<sub>2</sub>SO<sub>4</sub></b><br></br>
      Option d:- <b>HCl</b><br></br>  
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>Na<sub>2</sub>CO<sub>3</sub> and NaHCO<sub>3</sub> can be distinguished by treating with<br></br>
      Option a:- <b>Litmus solution</b><br></br>
      Option b:- <b>dil H<sub>2</sub>SO<sub>4</sub></b><br></br>
      Option c:- <b>MgCO<sub>3</sub></b><br></br>
      Option d:- <b>Phenophthalein</b><br></br>   
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>Which of the following gives crimson red during flame test<br></br>
      Option a:- <b>Ba<sup>+2</sup></b><br></br>
      Option b:- <b>Sr<sup>+2</sup></b><br></br>
      Option c:- <b>Ca<sup>+2</sup></b><br></br>
      Option d:- <b>Na<sup>+</sup></b><br></br>
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>A compound X on heating gives a colourelss gas. The residue is diisolved in water to obtain Y. Excess CO<sub>2</sub> is bubbled through aqueous solution of Y,Z is formed. Z on gently heating gives back X. The compound X is
<br></br>
      Option a:- <b>CaCO<sub>3</sub></b><br></br>
      Option b:- <b>Na<sub>2</sub>CO<sub>3</sub></b><br></br>
      Option c:- <b>Ca(HCO<sub>3</sub>)<sub>2</sub></b><br></br>
      Option d:- <b>K<sub>2</sub>CO<sub>3</sub></b><br></br> 
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>The mixture of MgCl<sub>2</sub> and MgO is called<br></br>
      Option a:- <b>sorel cement</b><br></br>
      Option b:- <b>Mixed salt</b><br></br>
      Option c:- <b>Portland cement</b><br></br>
      Option d:- <b>Magnesium oxy chloride</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>Heat of hydration is maximum for<br></br>
      Option a:- <b>Be<sup>+2</sup></b><br></br>
      Option b:- <b>Mg<sup>+2</sup></b><br></br>
      Option c:- <b>Ca<sup>+2</sup></b><br></br>
      Option d:- <b>Sr<sup>+2</sup></b><br></br> 
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>Above 1200<sup>o</sup> the hybridisation of beryllium in its chloride is<br></br>
      Option a:- <b>sp</b><br></br>
      Option b:- <b>sp<sup>2</sup></b><br></br>
      Option c:- <b>sp<sup>3</sup></b><br></br>
      Option d:- <b>No hybridisation</b><br></br>  
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>Compound formed when chlorine react with dry slacked lime is<br></br>
      Option a:- <b>Washing powder</b><br></br>
      Option b:- <b>Common salt</b><br></br>
      Option c:- <b>Bleaching powder</b><br></br>
      Option d:- <b>Glauber's salt</b><br></br> 
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>The compound formed when gypsum is dissolved in aqueous ammonium sulphate solution is
<br></br>
      Option a:- <b>CaSO<sub>4</sub> NH<sub>4</sub>Cl H<sub>2</sub>O</b><br></br>
      Option b:- <b>CaCl<sub>2</sub> (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub> H<sub>2</sub>O</b><br></br>
      Option c:- <b>CaSO<sub>4</sub> (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub></b><br></br>
      Option d:- <b>CaCl<sub>2</sub> NH<sub>4</sub>Cl 2H<sub>2</sub>O</b><br></br> 
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>Which of the following on thermal decomposition yields a basic as well as acidic oxide<br></br>
      Option a:- <b>KClO<sub>3</sub></b><br></br>
      Option b:- <b>CaCO<sub>3</sub></b><br></br>
      Option c:- <b>NH<sub>4</sub>NO<sub>3</sub></b><br></br>
      Option d:- <b>NaNO<sub>3</sub></b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>The setting of cement involves<br></br>
      Option a:- <b>Decomposition</b><br></br>
      Option b:- <b>Hydration</b><br></br>
      Option c:- <b>Oxidation</b><br></br>
      Option d:- <b>Dehydration</b><br></br>  
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A): Group -I elements are known as the alkali metals<br></br>
        Reason(R): S-Orbital can accomodate only two electrons<br></br>
   Choose the correct answer from the options given below<br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true but R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true and R is false</b><br></br>
      Option d:- <b>A is false and R is true</b><br></br> 
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A): The first ionization energy of Be is greater than that of B<br></br>
        Reason(R): 2P-Orbital is lower in energy than 2S-Orbital<br></br>
   Choose the correct answer from the options given below<br></br>
      Option a:- <b>Both A and R are true and R is the correct explanation of A</b><br></br>
      Option b:- <b>Both A and R are true but R is not the correct explanation of A</b><br></br>
      Option c:- <b>A is true and R is false</b><br></br>
      Option d:- <b>A is false and R is true</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>Read the following Assertion and Reason.<br></br>
        Assertion(A): Fused alkali metal hydrides conduct electricity and liberate H<sub>2</sub> at anode when electrolysed<br></br>
        Reason(R): Alkali metals form saline hydrides<br></br>
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

      <p><b>Question No.27:</b><br></br>Alkali metals are characterised by<br></br>
    I: Good conductor of heat and electricity<br></br>
    II: High oxidation potential<br></br>
    III: High melting points<br></br>
    IV: Solubility in liquid ammonia<br></br>
    The coorect answer is<br></br>
      Option a:- <b>I,II,III</b><br></br>
      Option b:- <b>II,III,IV</b><br></br>
      Option c:- <b>I,III,IV</b><br></br>
      Option d:- <b>I,II,IV</b><br></br>   
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>Read the following statements  <br></br>
  I: Mg can be burnt in the atmosphere of CO<sub>2</sub> and SO<sub>2</sub><br></br>
  II: Mg reacts with alkyl halides to form grignard's reagents<br></br>
  III: Out of Mg and Ca only Mg reacts with nitrogen to form Mg<su>3</su>N<sub>2</sub><br></br>
  IV: Calcium is less reactive than magnesium<br></br>
 Select the option with the combination of correct statements<br></br>
      Option a:- <b>I,II</b><br></br>
      Option b:- <b>I,III</b><br></br>
      Option c:- <b>III,IV</b><br></br>
      Option d:- <b>All are correct</b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br>Which of the following are readily soluble in water <br></br>
  A: BeSO<sub>4</sub><br></br>
  B: Li<sub>2</sub>CO<sub>3</sub><br></br>
  C: Na<sub>2</sub>CO<sub>3</sub><br></br>
  D: LiF<br></br>
 Select the correct answer<br></br>
      Option a:- <b>A,B</b><br></br>
      Option b:- <b>A,C</b><br></br>
      Option c:- <b>B,C</b><br></br>
      Option d:- <b>B,D</b><br></br>  
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>What is the molecular formula of Plaster of Paris<br></br>
      Option a:- <b>CaSO<sub>4</sub> H<sub>2</sub>O</b><br></br>
      Option b:- <b>2CaSO<sub>4</sub> 2H<sub>2</sub>O</b><br></br>
      Option c:- <b>CaSO<sub>4</sub> 2H<sub>2</sub>O</b><br></br>
      Option d:- <b>CaSO<sub>4</sub> 3H<sub>2</sub>O</b><br></br>
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>Aqueous sodium hydroxide reacts with white phosporous to form phosphine and
<br></br>
      Option a:- <b>NaH<sub>2</sub>PO<sub>2</sub></b><br></br>
      Option b:- <b>P<sub>2</sub>O<sub>5</sub></b><br></br>
      Option c:- <b>Na<sub>3</sub>PO<sub>3</sub></b><br></br>
      Option d:- <b>P<sub>2</sub>O<sub>3</sub></b><br></br> 
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>In organic reactions, sodium in liquid ammonia is used as<br></br>
      Option a:- <b>Reducing agent</b><br></br>
      Option b:- <b>Hydrloysing agent</b><br></br>
      Option c:- <b>Oxidising agent</b><br></br>
      Option d:- <b>Precipitating agent</b><br></br>
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b><br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>What are the products formed when Li<sub>2</sub>O<sub>3</sub> undergoes decomposition<br></br>
      Option a:- <b>Li<sub>2</sub>O<sub>2</sub>+CO</b><br></br>
      Option b:- <b>Li<sub>2</sub>O+CO</b><br></br>
      Option c:- <b>Li<sub>2</sub>O<sub>2</sub>+CO<sub>2</sub></b><br></br>
      Option d:- <b>LiO<sub>2</sub>+CO</b><br></br> 
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>Sodium metal reacts with Al<sub>2</sub>O<sub>3</sub> at high temperarture to give a sodium compound X. X reacts with CO<sub>2</sub> in water to form Y. what is Y 
<br></br>
      Option a:- <b>Na<sub>2</sub>O<sub>2</sub></b><br></br>
      Option b:- <b>Na<sub>2</sub>O</b><br></br>
      Option c:- <b>Na<sub>2</sub>CO<sub>3</sub></b><br></br>
      Option d:- <b>NaAlO<sub>2</sub></b><br></br> 
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>Which one of the following is the correct order for the decomposition temperarture of CaCO<sub>3</sub>(X),MgCO<sub>3</sub>(Y),BaCO<sub>3</sub>(Z)
<br></br>
      Option a:- <b>Z{'\u003e'}X{'\u003e'}Y</b><br></br>
      Option b:- <b>X{'\u003e'}Y{'\u003e'}Z</b><br></br>
      Option c:- <b>Y{'\u003e'}Z{'\u003e'}X</b><br></br>
      Option d:- <b>X{'\u003e'}Z{'\u003e'}Y</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>What are the prodcuts formed when an aqueous solution of magnesium bicarbonate is boiled<br></br>
      Option a:- <b>MgCO<sub>3</sub>, H<sub>2</sub>O, CO<sub>2</sub></b><br></br>
      Option b:- <b>Mg(HCO<sub>3</sub>)<sub>2</sub>, H<sub>2</sub>O</b><br></br>
      Option c:- <b>Mg(OH)<sub>2</sub>, H<sub>2</sub>O</b><br></br>
      Option d:- <b>Mg,CO<sub>2</sub>, H<sub>2</sub>O</b><br></br> 
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>One of the elements present in carnallite shows flame colouration. The colour of the flame is<br></br>
      Option a:- <b>Orange</b><br></br>
      Option b:- <b>Green</b><br></br>
      Option c:- <b>Yellow</b><br></br>
      Option d:- <b>Lilac</b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>In the hardening stage of plaster of paris, the compound formed is<br></br>
      Option a:- <b>CaSO<sub>4</sub></b><br></br>
      Option b:- <b>CaSO<sub>4</sub>H<sub>2</sub>O</b><br></br>
      Option c:- <b>Orthorhombic CaSO<sub>4</sub>2H<sub>2</sub>O</b><br></br>
      Option d:- <b>Monoclinic CaSO<sub>4</sub>2H<sub>2</sub>O</b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>Sodium is heated in air at 300<sup>o</sup>C to form X. X absorbs CO<sub>2</sub> and forms Na<sub>2</sub>CO<sub>3</sub> and Y. Idetify Y from the following options<br></br>
      Option a:- <b>H<sub>2</sub></b><br></br>
      Option b:- <b>O<sub>2</sub></b><br></br>
      Option c:- <b>H<sub>2</sub>O<sub>2</sub></b><br></br>
      Option d:- <b>O<sub>3</sub></b><br></br> 
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>Which of the following pairs liberates a gas when react with each other<br></br>
      Option a:- <b>SiO<sub>2</sub>,Na</b><br></br>
      Option b:- <b>Fused NaOH, F<sub>2</sub></b><br></br>
      Option c:- <b>Mg,B<sub>2</sub>O<sub>3</sub></b><br></br>
      Option d:- <b>Mg,CO<sub>2</sub></b><br></br>
      Selected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div>
    </div>
    <button onClick={() => exportAsImage(exportRef.current, "Alkali & Alkaline EM")} style={bstyle} >Download Summary</button></div>

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
export default connect (mapStateToProps,mapDispatchToProps) (YTsummary)