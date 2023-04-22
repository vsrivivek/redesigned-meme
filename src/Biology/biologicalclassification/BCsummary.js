import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux';
import Logo from '../../redux/Images/Logo.jpg'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { statUpdateref } from '../../redux/cake/cakeAction';





function  BCsummary(props) {
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
  // const navigate=useNavigate();
const status=[props.status,props.statusone,props.statustwo,props.statusthree,props.statusfour,props.statusfive,props.statussix,props.statusseven,props.statuseight,props.statusnine,props.statusten,props.statuseleven,props.statustwelve,props.statusthirteen,props.statusfourteen,props.statusfifteen,props.statussixteen,props.statusseventeen,props.statuseighteen,props.statusnineteen,props.statustwenty,props.statustwentyone,props.statustwentytwo,props.statustwentythree,props.statustwentyfour,props.statustwentyfive,props.statustwentysix,props.statustwentyseven,props.statustwentyeight,props.statustwentynine,props.statusthirty,props.statusthirtyone,props.statusthirtytwo,props.statusthirtythree,props.statusthirtyfour,props.statusthirtyfive,props.statusthirtysix,props.statusthirtyseven,props.statusthirtyeight,props.statusthirtynine];
const correct=["a","d","c","b", "c","a","d","a", "d","b","d","d", "d","a","a","c", "b","d","a","d", "b","c","a","a", "a","b","c","c", "d","b","c","d", "c","d","a","c", "d","b","b","d"]; 
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
    }>Performance Summary- Biological Classification</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>

      <p><b>Question No.1:</b><br></br>The classification system proposed by Linnaeus was a ____________________ kingdom system of classificaction
<br></br>
      Option a:- <b>two</b><br></br>
      Option b:- <b>three</b><br></br>
      Option c:- <b>four</b><br></br>
      Option d:- <b>five</b><br></br>
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>Which of the following characters served as the criteria for five kingdom system of classification as used by R.H Whittaker

      <br></br>
      Option a:- <b>Cell structure and thallus organisation</b><br></br>
      Option b:- <b>Mode of nutrition and reproduction</b><br></br>
      Option c:- <b>Phylogenetic relationships</b><br></br>
      Option d:- <b>All of the above</b><br></br>
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>In Whittaker's five kingdom system of classification, eukaryotes are distributed among_______________<br></br>
      Option a:- <b>two kingdoms</b><br></br>
      Option b:- <b>three kingdoms</b><br></br>
      Option c:- <b>four kingdoms</b><br></br>
      Option d:- <b>all the five kingdoms</b><br></br>
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b><br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>Read the statements regarding Methanogens, and select the correct option
I.They are included in the group Archaebacteria
II.They are responsible for the production of biogas in gobar gas plants
III.They live in hot sulphur springs
IV.They are strictly anaerobic<br></br>
      Option a:- <b>Statements I,II are correct</b><br></br>
      Option b:- <b>Statements I,II,IV are correct</b><br></br>
      Option c:- <b>Statements II,III,IV are correct</b><br></br>
      Option d:- <b>All statements are correct</b><br></br>
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>Which of the following statements is incorrect regarding the structure of a typical bacterial cell?
<br></br>
      Option a:- <b>Cell possess naked circular DNA which is folded to form nucleoid</b><br></br>
      Option b:- <b>Cells are sorrounded by a peptidoglycon cell wall and mucilaginous sheath</b><br></br>
      Option c:- <b>Cells possess well developed membrane bound cell organelles</b><br></br>
      Option d:- <b>Rhibosomes in these cells are 70S in nature</b><br></br> 
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>Cyanobacteria are classified into which of the following kingdoms
<br></br>
      Option a:- <b>Monera</b><br></br>
      Option b:- <b>Protista</b><br></br>
      Option c:- <b>Fungi</b><br></br>
      Option d:- <b>Plantae</b><br></br> 
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>Photosynthetic pigments of cyanobacteria (blue green algae) include<br></br>
      Option a:- <b>Chlorophyll a</b><br></br>
      Option b:- <b>Carotenes</b><br></br>
      Option c:- <b>Xanthophylls</b><br></br>
      Option d:- <b>all of these</b><br></br> 
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>Cyanobacteria are used in agricultural fields for crop improvement because they cause<br></br>
      Option a:- <b>Nitrogen fixation</b><br></br>
      Option b:- <b>Algal blooms</b><br></br>
      Option c:- <b>Photosynthesis</b><br></br>
      Option d:- <b>All of these</b><br></br>
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>Select the correct statement regarding heterocysts<br></br>
      Option a:- <b>They are present in some filamentous cyanobacteria such as Nostoc and Anabena</b><br></br>
      Option b:- <b>Select the correct statement regarding heterocysts</b><br></br>
      Option c:- <b>They contain enzyme nitrogenase</b><br></br>
      Option d:- <b>All of the above</b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>_______________bacteria oxidise various inorganic substances such as nitrates, nitrites and ammonia and use the released energy ATP production. They play an important role in recycling nutrients(N,P,Fe,S etc)
<br></br>
      Option a:- <b>Photosynthetic autotrophs</b><br></br>
      Option b:- <b>Chemosynthetic autotrophs</b><br></br>
      Option c:- <b>Parasitic</b><br></br>
      Option d:- <b>Saprophytic</b><br></br>  
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>In five-kingdom classification system, the kingdom that includes blue green algae, nitrogen fixing bacteria and methanogenic archaebacteria
<br></br>
      Option a:- <b>Plantae</b><br></br>
      Option b:- <b>Fungi</b><br></br>
      Option c:- <b>Protista</b><br></br>
      Option d:- <b>Monera</b><br></br> 
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>_______________are important decomposers that cause decay and decomposition of dead bodies of plants and animals
<br></br>
      Option a:- <b>Saprophytic bacteria</b><br></br>
      Option b:- <b>Saprophytic fungi</b><br></br>
      Option c:- <b>Plants, like sarracenia</b><br></br>
      Option d:- <b>Both (a) and (b)</b><br></br>
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>Select the pair that consists of plant or animal bacterial diseases<br></br>
      Option a:- <b>Cholera and typhoid</b><br></br>
      Option b:- <b>Citrus canker and crown gall</b><br></br>
      Option c:- <b>Malaria and dengue</b><br></br>
      Option d:- <b>Both (a) and (b)</b><br></br> 
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br>  ________________is the most common method of reproduction in bacteria<br></br>
      Option a:- <b>Binary fission</b><br></br>
      Option b:- <b>Endospore formation</b><br></br>
      Option c:- <b>Conjugation</b><br></br>
      Option d:- <b>Sexual reproduction</b><br></br>  
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>Mycoplasms are classified under which of the following kingdoms
<br></br>
      Option a:- <b>Monera</b><br></br>
      Option b:- <b>protista</b><br></br>
      Option c:- <b>Fungi</b><br></br>
      Option d:- <b>Plantae</b><br></br>
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>Which of the following statements is incorrect regarding mycoplasma
<br></br>
      Option a:- <b>They lack cell wall</b><br></br>
      Option b:- <b>They are the smallest living cells</b><br></br>
      Option c:- <b>They cannot survive without oxygen</b><br></br>
      Option d:- <b>They are pathogenic in plants and animals</b><br></br> 
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>Read the following statements and select the correct option<br></br>
Statement I: Almost all bacetria possess lipoproteinaceous plasma membrane<br></br>
Statement II: The plasma membrane of archaebacteria as well as eubacteria have same type of lipids<br></br>
      Option a:- <b>Both statements I and II are correct</b><br></br>
      Option b:- <b>Statement I is correct but statement II is incorrect</b><br></br>
      Option c:- <b>Statement I is incorrect but statement II is correct</b><br></br>
      Option d:- <b>Both statements I and II are incorrect</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>Which of the following have been placed under kingdom protista
<br></br>
      Option a:- <b>Chrysophytes and dinoflagellates</b><br></br>
      Option b:- <b>Euglenoids</b><br></br>
      Option c:- <b>Slime moulds and protozoans</b><br></br>
      Option d:- <b>All of these</b><br></br>  
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>Chrysophytes are<br></br>
      Option a:- <b>Planktons</b><br></br>
      Option b:- <b>Nektons</b><br></br>
      Option c:- <b>Benthic organisms</b><br></br>
      Option d:- <b>Rooted submerged</b><br></br>  
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>Diatameceous earth is used for all except<br></br>
      Option a:- <b>polishing</b><br></br>
      Option b:- <b>filtration of oils and syrups</b><br></br>
      Option c:- <b>making sound and fire proof rooms</b><br></br>
      Option d:- <b>biogas production</b><br></br> 
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>In ____________________ phyllotaxy, a pair of leaves arise at each node and lie opposite to each others as in __________________ plant
<br></br>
      Option a:- <b>alternate, Hibiscus</b><br></br>
      Option b:- <b>opposite, Hibiscus</b><br></br>
      Option c:- <b>opposite, Calotropis</b><br></br>
      Option d:- <b>whorled, Calotropis</b><br></br> 
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>Dinoflagellates are mostly<br></br>
      Option a:- <b>marine and saprophytic</b><br></br>
      Option b:- <b>freshwater and photosynthetic</b><br></br>
      Option c:- <b>marine and photosynthetic</b><br></br>
      Option d:- <b>terrestrial and photosynthetic</b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>Red tides in warm coastal water develop due to the abundance of <br></br>
      Option a:- <b>Dinoflagellates</b><br></br>
      Option b:- <b>Euglenoids</b><br></br>
      Option c:- <b>Diatoms and desmids</b><br></br>
      Option d:- <b>Slime moulds</b><br></br>
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>Read the following statements and select the correct option<br></br>
 Statement 1: Euglena can be considered as a plant due to the presence of chlorophyll<br></br>
 Statement 2: Euglena cannot be classified on the basis of two kingdom system of classification<br></br>
      Option a:- <b>Both statements 1 & 2 are correct</b><br></br>
      Option b:- <b>Statement 1 is correct and Statement 2 is incorrect</b><br></br>
      Option c:- <b>Statement 1 is incorrect and Statement 2 is correct</b><br></br>
      Option d:- <b>Both statements 1 & 2 are incorrect</b><br></br> 
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>Which one of the following represents the edible swollen portion of Allium cepa<br></br>
      Option a:- <b>plasmodium</b><br></br>
      Option b:- <b>myxamoeba</b><br></br>
      Option c:- <b>sporocytes</b><br></br>
      Option d:- <b>periplasmodium</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>Causal organisms of sleeping sickness and kala-azar belong to which of the following groups of protozoan protists
<br></br>
      Option a:- <b>Amoeboid protozoans</b><br></br>
      Option b:- <b>Flagellated protozoans</b><br></br>
      Option c:- <b>Ciliated protozoans</b><br></br>
      Option d:- <b>Sporozoans</b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>The sporozoa are all internal _________________that typically have an infective cyst stage in their life cycle. An example of sporozoa is the gunus__________________,which causes malaria.
<br></br>
      Option a:- <b>ciliates, plasmodium</b><br></br>
      Option b:- <b>flagellates,plasmodium</b><br></br>
      Option c:- <b>parasites, plasmodium</b><br></br>
      Option d:- <b>parasites,trypanosoma</b><br></br> 
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>Coenocytic mycelium is <br></br>
      Option a:- <b>Uninucleate,septate</b><br></br>
      Option b:- <b>Multinucleate,septate</b><br></br>
      Option c:- <b>Multinucleate,aseptate</b><br></br>
      Option d:- <b>both (b) and (c)</b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br>Dikaryophase is a charactertistic of<br></br>
      Option a:- <b>all fungi</b><br></br>
      Option b:- <b>phycomycetes and ascomycetes</b><br></br>
      Option c:- <b>basidiomycetes and deuteromycetes</b><br></br>
      Option d:- <b>ascomycetes and basidiomycetes</b><br></br>  
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>Which of the following statements regarding the class phycomycetes is incorrect?<br></br>
      Option a:- <b>these are found in aquatic habitats and on decaying wood in moist and damp places or as obligate parasites on plants</b><br></br>
      Option b:- <b>mycelium in these fungi is septate and branched</b><br></br>
      Option c:- <b>asexual reproduction occurs by motile zoospores and by non-motile alpanospores</b><br></br>
      Option d:- <b>Mucor and Rhizopus are the examples of phycomecetes</b><br></br>
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>Common character found in ascomycetes member, deuteromycetes member and basidiomycetes member is 
<br></br>
      Option a:- <b>asexual reproduction by conidia</b><br></br>
      Option b:- <b>vegetative reproduction by budding</b><br></br>
      Option c:- <b>branched,septate mycelium</b><br></br>
      Option d:- <b>meiosis takes place in fruting bodies</b><br></br>
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>Which of the following statements is correct regarding sexual reproduction in Basidiomycetes<br></br>
      Option a:- <b>Plasmogamy occurs by the fusion of two somantic cells of different strains</b><br></br>
      Option b:- <b>Karyogamy and meiosis occur in the basidium producing four basidiospores</b><br></br>
      Option c:- <b>Basidiospores areexogenously produced on the basidium</b><br></br>
      Option d:- <b>All of these</b><br></br> 
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b><br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>Which of the following statements is incorrect about the Class deuteromycetes<br></br>
      Option a:- <b>The reproduce only by asexual spores(Conidia)</b><br></br>
      Option b:- <b>Mycelium in these fungi is branched and septate</b><br></br>
      Option c:- <b>They have only parasitic forms</b><br></br>
      Option d:- <b>Examples of these fungi are Alternaria, Collectotrichum, and Trichoderma</b><br></br>
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>Which of the following regarding Kingdom Plantae is correct?<br></br>
      Option a:- <b>It includes all eukaryotic chlorpohyll containing organisms</b><br></br>
      Option b:- <b>Few of its members are partially heterotrophic</b><br></br>
      Option c:- <b>The cell wall made up of cellulose</b><br></br>
      Option d:- <b>All of these</b><br></br> 
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>Which of the following regarding Kingdom Animalia is incorrect
<br></br>
      Option a:- <b>It includes heterotrophic, unicellular eukaryotic organisms</b><br></br>
      Option b:- <b>The members of this kingdom lack cell wall</b><br></br>
      Option c:- <b>The mode of nutrition is holozoic</b><br></br>
      Option d:- <b>The sexual reproduction in its memebers is by copulation of male and female</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>Which of the following statements regarding viruses are correct<br></br>
(I). These are cellular, infectious, nucleoprotein particles<br></br>
(II). They can be grown in culture medium<br></br>
(III). Genetic material is either DNA or RNA, but never both<br></br>
      Option a:- <b>(I) &(II)</b><br></br>
      Option b:- <b>(II) &(III)</b><br></br>
      Option c:- <b>(III) &(IV)</b><br></br>
      Option d:- <b>(I), (II), (III) &(IV)</b><br></br>
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>Select the pair that consists of viral diseases<br></br>
      Option a:- <b>Mumps and small pox</b><br></br>
      Option b:- <b>Herpes and influenza</b><br></br>
      Option c:- <b>Pneumonia and syphilis</b><br></br>
      Option d:- <b>Both (a) & (b)</b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>Read the given statements that describe certain infectious particle<br></br>
(i) It was discovered by T.O Diener and was found to be smaller than viruses<br></br>
(ii) It causes potato spindle tuber disease<br></br>
(iii) It is a free RNA particle which lacks the protein coat<br></br>
(iv) It has low molecular weight RNA as genetic material<br></br>
which of the following is referred to here

<br></br>
      Option a:- <b>virus</b><br></br>
      Option b:- <b>viroid</b><br></br>
      Option c:- <b>virion</b><br></br>
      Option d:- <b>bacteriophage</b><br></br>  
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>Conatagium vivum fluidam was proposed by<br></br>
      Option a:- <b>D J Ivanowsky</b><br></br>
      Option b:- <b>M W Beijerinck</b><br></br>
      Option c:- <b>Stanley</b><br></br>
      Option d:- <b>Robert Hooke</b><br></br>
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>Members of phycomycetes are found in<br></br>
(i) aquatic habitats<br></br>
(ii) on deaacying wood<br></br>
(iii) moist and damp places<br></br>
(iv) as obligate parasites on plants<br></br>
choose from the options below<br></br>
      Option a:- <b>None of the above</b><br></br>
      Option b:- <b>(i) and (iv)</b><br></br>
      Option c:- <b>(ii) and (iii)</b><br></br>
      Option d:- <b>All of the above</b><br></br>
      Selected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div>
    </div>
    <button onClick={() => exportAsImage(exportRef.current, "Biological Classification")} style={bstyle} >Download Summary</button></div>

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
export default connect (mapStateToProps,mapDispatchToProps) (BCsummary)