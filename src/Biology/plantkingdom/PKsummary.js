import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux';
import Logo from '../../redux/Images/Logo.jpg'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { statUpdateref } from '../../redux/cake/cakeAction';






function  PKsummary(props) {
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
const correct=["d","d","d","d", "c","a","c","c", "a","a","b","d", "d","c","a","a", "b","c","a","d", "c","d","d","c", "c","c","a","c", "b","c","b","a", "c","a","c","b", "a","a","b","b"]; 
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
    }>Performance Summary- Plant Kingdom</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>

      <p><b>Question No.1:</b><br></br>Artificial systems of classification were based on<br></br>
      Option a:- <b>vegetative characters</b><br></br>
      Option b:- <b>androecium structure</b><br></br>
      Option c:- <b>habit and habitat</b><br></br>
      Option d:- <b>all of these</b><br></br>
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>Each character is given equal importance at the same time hundreds of characters can be considered in
      <br></br>
      Option a:- <b>cytotaxonomy</b><br></br>
      Option b:- <b>morphotaxonomy</b><br></br>
      Option c:- <b>chemotaxonomy</b><br></br>
      Option d:- <b>numerical taxonomy</b><br></br>
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>A system of classification in which a large number of traits are considered is <br></br>
      Option a:- <b>artificial system</b><br></br>
      Option b:- <b>phylogenetic system</b><br></br>
      Option c:- <b>synthetic system</b><br></br>
      Option d:- <b>natural system</b><br></br>
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b><br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>Which of the following are included under Tracheophyta i.e, vascular plants?<br></br>
      Option a:- <b>Pteridophytes</b><br></br>
      Option b:- <b>Gymnosperms</b><br></br>
      Option c:- <b>Angiosperms</b><br></br>
      Option d:- <b>All of these</b><br></br>
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>Read the given statements about algae and select the correct option<br></br>
(i) Plant body is thalloid<br></br>
(ii) They are largely aquatic<br></br>
(iii) Reproduction occurs by vegetative, asexual and sexual methods<br></br>
(iv) chlamydomonous, Volvox and ulothrix are the mutlicellular algae<br></br>
      Option a:- <b>only statements(i) & (ii) are true</b><br></br>
      Option b:- <b>only statements(ii) & (iii) are true</b><br></br>
      Option c:- <b>statements (i),(ii) &(iii) are true</b><br></br>
      Option d:- <b>All the statements are true.</b><br></br> 
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>Fusion between morphologically alikw gametes is referred to as
<br></br>
      Option a:- <b>Isogamy</b><br></br>
      Option b:- <b>Anisogamy</b><br></br>
      Option c:- <b>Oogamy</b><br></br>
      Option d:- <b>Syngamy</b><br></br> 
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>Atleast half of the total CO2 fixation on earth is acrried out through photosynthesis by
<br></br>
      Option a:- <b>angiosperms</b><br></br>
      Option b:- <b>gymnosperms</b><br></br>
      Option c:- <b>algae</b><br></br>
      Option d:- <b>bryophyte</b><br></br> 
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>Seaweeds are a source of <br></br>
      Option a:- <b>chlorine</b><br></br>
      Option b:- <b>flourine</b><br></br>
      Option c:- <b>bromine</b><br></br>
      Option d:- <b>iodine</b><br></br>
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>In most green algae, pyrenoids, the storage bodies, are located in<br></br>
      Option a:- <b>chloroplasts</b><br></br>
      Option b:- <b>mitochondria</b><br></br>
      Option c:- <b>cytoplasm</b><br></br>
      Option d:- <b>nucleus</b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>In Ulothrix, sexual reprodcution is by<br></br>
      Option a:- <b>isogamy</b><br></br>
      Option b:- <b>anisogamy</b><br></br>
      Option c:- <b>oogamy</b><br></br>
      Option d:- <b>conjugation</b><br></br> 
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>Laminarin and mannitol, the reserve food of brown algae are<br></br>
      Option a:- <b>lipids</b><br></br>
      Option b:- <b>complex carbohydrates</b><br></br>
      Option c:- <b>proteins</b><br></br>
      Option d:- <b>lipoproteins</b><br></br> 
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>Photosynthetic pigments of Rhodophyceae(red agae) are
<br></br>
      Option a:- <b>Chl a and b</b><br></br>
      Option b:- <b>Chl a and c, fucoxanthin</b><br></br>
      Option c:- <b>Chl a and e</b><br></br>
      Option d:- <b>Chl a, d and phycoerythrin</b><br></br>
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>Common example of red algae is<br></br>
      Option a:- <b>porphyra</b><br></br>
      Option b:- <b>Bactrachospermum</b><br></br>
      Option c:- <b>Ectocarpus</b><br></br>
      Option d:- <b>both (a) & (b)</b><br></br>   
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>Bryophytes include<br></br>
      Option a:- <b>liverworts and ferns</b><br></br>
      Option b:- <b>mosses and ferns</b><br></br>
      Option c:- <b>mosses and liverworts</b><br></br>
      Option d:- <b>all of these </b><br></br>  
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>Read the given statements and select the correct option<br></br>
Statement-I: Bryophytes are amphibians of plant kingdom<br></br>
Statement-II: They live in soil but depend on water for sexual reproduction<br></br>
      Option a:- <b>Both Statements (I) &(II) are correct</b><br></br>
      Option b:- <b>Statement (I) is correct but Statement (II) is wrong</b><br></br>
      Option c:- <b>Statement (II) is corect but Statement (I) is wrong</b><br></br>
      Option d:- <b>Both Statements (I) &(II) are incorrect</b><br></br>
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>A sterile jacket around gametangia is found among
<br></br>
      Option a:- <b>bryophytes</b><br></br>
      Option b:- <b>lichens</b><br></br>
      Option c:- <b>algae</b><br></br>
      Option d:- <b>fungi</b><br></br> 
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>The moss which forms dense extensive mats on the soil pavments<br></br>
      Option a:- <b>uprooting of tree</b><br></br>
      Option b:- <b>soil erosion</b><br></br>
      Option c:- <b>falling of leaves</b><br></br>
      Option d:- <b>none of these</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>Gemmae are the specialised structures produced in liverworts.These are<br></br>
      Option a:- <b>non-green,multicellular, asexual buds which develop in gemma cups</b><br></br>
      Option b:- <b>green,multicellular, asexual buds which develop in gemma cups</b><br></br>
      Option c:- <b>non-green, multicellular, diploid, sexual spores</b><br></br>
      Option d:- <b>green, unicellular, diploid, sexual spore</b><br></br> 
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>In Funaria, The haploid structure is<br></br>
      Option a:- <b>protonema</b><br></br>
      Option b:- <b>capsule</b><br></br>
      Option c:- <b>columella</b><br></br>
      Option d:- <b>seta</b><br></br>  
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>Which of the following statements is incorrect?<br></br>
      Option a:- <b>Mosses along with lichens are the first organisms to colonise rocks</b><br></br>
      Option b:- <b>Spagnum is used as packing material for transportation of living material</b><br></br>
      Option c:- <b>In liverworts, spores are produced after meiosis within the capsule</b><br></br>
      Option d:- <b>Funaria possesses unicellular unbranched rhizoids</b><br></br> 
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>In pteridophytes, a spore germinates to produce<br></br>
      Option a:- <b>sporophyte</b><br></br>
      Option b:- <b>sporogonium</b><br></br>
      Option c:- <b>prothallus</b><br></br>
      Option d:- <b>microsporophyll</b><br></br> 
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>The spread of living pteridophytes is limited and is restricted to narrow geographical region because 
<br></br>
      Option a:- <b>gametophytic growth needs cool,damp and shady places</b><br></br>
      Option b:- <b>there is requirement of water for fertilisation</b><br></br>
      Option c:- <b>there is absence of stomata in leaf and absence of vascular tissue</b><br></br>
      Option d:- <b>both (a) &(b)</b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>Heterosporous pteridophytes show certain characteristics, which are precursor to the 'seed habit' in gymnosperms. One of such characteristics is 
<br></br>
      Option a:- <b>Presence of vascular tissues</b><br></br>
      Option b:- <b>external water required for fertilisation</b><br></br>
      Option c:- <b>presence of embryo stage</b><br></br>
      Option d:- <b>development of embryo inside the female gametophy </b><br></br>
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>Which of the following is an aquatic fern<br></br>
      Option a:- <b>Adiantum</b><br></br>
      Option b:- <b>Dryopteris</b><br></br>
      Option c:- <b>Salvinia</b><br></br>
      Option d:- <b>Equisetum</b><br></br> 
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>Plants which possess seeds but not fruits are<br></br>
      Option a:- <b>bryophytes</b><br></br>
      Option b:- <b>pteridophytes</b><br></br>
      Option c:- <b>gymnosperms</b><br></br>
      Option d:- <b>algae</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>Coralloid roots of __________________ have symbiotic association with Nitrogen fixing cyanobacteria<br></br>
      Option a:- <b>Pinus</b><br></br>
      Option b:- <b>Cedrus</b><br></br>
      Option c:- <b>Cycas</b><br></br>
      Option d:- <b>Ginkgo</b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>Seed plants are all<br></br>
      Option a:- <b>heterosporous</b><br></br>
      Option b:- <b>dioecious</b><br></br>
      Option c:- <b>monoecious</b><br></br>
      Option d:- <b>homosporous</b><br></br> 
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>In pinus, male strobilus bears a large number of<br></br>
      Option a:- <b>anthers</b><br></br>
      Option b:- <b>stamens</b><br></br>
      Option c:- <b>microsporophylls</b><br></br>
      Option d:- <b>megasporophylls</b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br>Which of the following structures are haploid in gymnosperms<br></br>
      Option a:- <b>Pollen grain, mega spore, embryo</b><br></br>
      Option b:- <b>Pollen grain, mega spore, endosperm</b><br></br>
      Option c:- <b>Mega spore, leaf, root</b><br></br>
      Option d:- <b>Leaf, root, integument</b><br></br> 
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>______________________ do not have free living gametophyte<br></br>
      Option a:- <b>Bryophytes</b><br></br>
      Option b:- <b>Pteridophytes</b><br></br>
      Option c:- <b>Gymnosperms</b><br></br>
      Option d:- <b>both (b) & (c)</b><br></br>
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>Megasporophyll of gymnosperms is homologous to _______________________of angiosperms<br></br>
      Option a:- <b>stamen</b><br></br>
      Option b:- <b>carpel</b><br></br>
      Option c:- <b>sepal</b><br></br>
      Option d:- <b>petal</b><br></br>
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>In angiosperms,functional megaspore develops into <br></br>
      Option a:- <b>embryosac</b><br></br>
      Option b:- <b>ovule</b><br></br>
      Option c:- <b>endosperm</b><br></br>
      Option d:- <b>pollen sac</b><br></br>
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b><br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>Which of the following statements regarding haplontic life cycle is incorrect?<br></br>
      Option a:- <b>Sporophytic generation is represented only by the one-celled zygote</b><br></br>
      Option b:- <b>There is no free-living sporophyte</b><br></br>
      Option c:- <b>Mitosis in the zygote results in the formation of haploid spores</b><br></br>
      Option d:- <b>The haploid spores divide mitotically and from the gametophyte </b><br></br>
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>Haplontic life cycle generally occurs in
<br></br>
      Option a:- <b>most algae</b><br></br>
      Option b:- <b>bryophytes</b><br></br>
      Option c:- <b>pteridophytes</b><br></br>
      Option d:- <b>gymnosperm </b><br></br>
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>Read the given statements and select the incorrect ones.<br></br>
(i) Sporophyte in mosses is more ealborate than that in liverworts<br></br>
(ii) Salvinia is homosporous<br></br>
(iii) Lifecycle in all spermatophytes is dilpontic<br></br>
(iv) in Cycas, male cones and megasporophylls are borne on the same trees<br></br>
      Option a:- <b>(i) and (ii)</b><br></br>
      Option b:- <b>(i) and (iii)</b><br></br>
      Option c:- <b>(ii) and (iv)</b><br></br>
      Option d:- <b>(iii) and (iv)</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>In________________, a dominant independent haploid gametophyte alternates with a short-lived, dependent sporophyte
<br></br>
      Option a:- <b>algae</b><br></br>
      Option b:- <b>bryophytes</b><br></br>
      Option c:- <b>pteridophytes</b><br></br>
      Option d:- <b>gymnosperms</b><br></br>
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>Most of the algal genera are ___________________but Fucus is_____________________<br></br>
      Option a:- <b>haplontic, diplontic</b><br></br>
      Option b:- <b>diplontic, haplontic</b><br></br>
      Option c:- <b>haplontic, haplo-diplontic</b><br></br>
      Option d:- <b>diplontic, haplo-diplontic</b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>Plant classification as proposed by Carlous Linnaeus was artificial because it was based on 
<br></br>
      Option a:- <b>only few morphological characters</b><br></br>
      Option b:- <b>all the possible characters</b><br></br>
      Option c:- <b>anatomical characters which are adaptive in nature</b><br></br>
      Option d:- <b>physiological and morpohological characters</b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>______________classification systems were based on evolutionary relationships between various organisms
<br></br>
      Option a:- <b>natural</b><br></br>
      Option b:- <b>artificial</b><br></br>
      Option c:- <b>phylogenetic</b><br></br>
      Option d:- <b>both (a) &(b)</b><br></br>
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>Gymnosperms do not bear fruits because they do not have<br></br>
      Option a:- <b>seeds</b><br></br>
      Option b:- <b>ovary</b><br></br>
      Option c:- <b>ovule</b><br></br>
      Option d:- <b>leaves</b><br></br>
      Selected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div>
    </div>
    <button onClick={() => exportAsImage(exportRef.current, "Plant Kingdom")} style={bstyle} >Download Summary</button></div>

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
export default connect (mapStateToProps,mapDispatchToProps) (PKsummary)