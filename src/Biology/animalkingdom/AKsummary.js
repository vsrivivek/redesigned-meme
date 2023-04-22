import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux';
import Logo from '../../redux/Images/Logo.jpg'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { statUpdateref } from '../../redux/cake/cakeAction';





function  AKsummary(props) {
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
const correct=["c","c","c","a", "d","b","b","c", "c","c","a","c", "a","d","d","a", "c","d","b","a", "d","d","b","a", "c","c","d","a", "b","d","c","a", "a","d","b","a", "c","d","a","b"];  
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
    }>Performance Summary- Animal Kingdom</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>

      <p><b>Question No.1:</b><br></br>Which of the following statements is incorrect regarding bilateral symmetry<br></br>
      Option a:- <b>Body can be divided into two equal halves by a single plane only</b><br></br>
      Option b:- <b>The oraganisms that show bilateral symmetry have paired body organs that occur on the two sides of a central axis</b><br></br>
      Option c:- <b>It is found in all invertebrates and few vertebrates</b><br></br>
      Option d:- <b>Spider and crab show bilateral symmetry</b><br></br>
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>Diploblastic and triploblastic are terms that describe
      <br></br>
      Option a:- <b>the number of invaginations during embryonic development</b><br></br>
      Option b:- <b>the number of heads during embryonic development</b><br></br>
      Option c:- <b>the number of germinal layers during embryonic development</b><br></br>
      Option d:- <b>the number of cell types during embryonic development</b><br></br>
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>Identify the animal which has ladder like nervous system<br></br>
      Option a:- <b>Cockroach(Arthropoda)</b><br></br>
      Option b:- <b>Roundworm(Aschelminthes)</b><br></br>
      Option c:- <b>Earthworm(Annelida)</b><br></br>
      Option d:- <b>natural system</b><br></br> 
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b><br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>In most simple type of canal system of porifera, which of the following ways exhibit water ways?
<br></br>
      Option a:- <b>Ostia{'\u2192'}Spongocoel{'\u2192'}Osculum{'\u2192'}Exterior</b><br></br>
      Option b:- <b>Spongocoel{'\u2192'}Ostia{'\u2192'}Osculum{'\u2192'}Exterior</b><br></br>
      Option c:- <b>Osculum{'\u2192'}Spongocoel{'\u2192'}Ostia{'\u2192'}Exterior</b><br></br>
      Option d:- <b>Osculum{'\u2192'}Ostia{'\u2192'}Spongocoel{'\u2192'}Exterior</b><br></br>
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>Which of the following is not a characteristic feature of sponges?<br></br>
      Option a:- <b>Cellular level of organisation</b><br></br>
      Option b:- <b>Presence of ostia</b><br></br>
      Option c:- <b>Intracellular digestion</b><br></br>
      Option d:- <b>Body supported by chitin</b><br></br> 
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>Select the incorrect characteristic regarding sponges
<br></br>
      Option a:- <b>Internal fertilisation</b><br></br>
      Option b:- <b>External fertilisation</b><br></br>
      Option c:- <b>Gemmule fertilisation</b><br></br>
      Option d:- <b>Gametes are formed from epidermal cells</b><br></br>
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>Which of the following statements is correct for sponges without exception?<br></br>
      Option a:- <b>They all have calcareous spicules</b><br></br>
      Option b:- <b>They have high regenerative power</b><br></br>
      Option c:- <b>They are found only in marine water</b><br></br>
      Option d:- <b>They are all radially symmetrical</b><br></br> 
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>Stinging capsules (nematocysts) are found in<br></br>
      Option a:- <b>Scypha and brain coral</b><br></br>
      Option b:- <b>Cliona and chalina</b><br></br>
      Option c:- <b>Sea pen and sea fan</b><br></br>
      Option d:- <b>Grantia and velella</b><br></br>
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>Which of the following have porous body and diploblastic?<br></br>
      Option a:- <b>Aurelia and Obelia</b><br></br>
      Option b:- <b>Adamsia and Euplectella</b><br></br>
      Option c:- <b>Sycon and Spongilla</b><br></br>
      Option d:- <b>Sycon and Hydra</b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>Read the following characters<br></br>
(i) Extracellular and intracellular digestion
(ii) Exclusively marine, radially symmetrical, diploblastic, tissue level of organisation<br></br>
(iii) Bisexual, fertilisation external and indirect development<br></br>
(iv) No sexual reproduction<br></br>
(v) Presence of comb plates<br></br>
The characters given above are shown by<br></br>
      Option a:- <b>cnidaria</b><br></br>
      Option b:- <b>porifera</b><br></br>
      Option c:- <b>ctenophora</b><br></br>
      Option d:- <b>none of these</b><br></br>  
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>IGiven below are three statements regarding aschelminthes<br></br>
(i) They are bilaterally symmetrical and triploblastic<br></br>
(ii) They are dioecious<br></br>
(iii) All are plant or animal parasites<br></br>
Select the correct option that has both the correct statements
<br></br>
      Option a:- <b>(i) and(ii)</b><br></br>
      Option b:- <b>(i) and (iii)</b><br></br>
      Option c:- <b>(ii) and (iii)</b><br></br>
      Option d:- <b>None of these</b><br></br> 
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>In which of the following, segmentation in the body is first observed<br></br>
      Option a:- <b>Aschelminthes</b><br></br>
      Option b:- <b>Arthropoda</b><br></br>
      Option c:- <b>Annelida</b><br></br>
      Option d:- <b>Platyhelminthes</b><br></br>
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>Read the given statements and selecct the correct option<br></br>
Statement-I: Blood is colourless in the insects<br></br>
Statement-II: Insect blood has no role in O2 transport<br></br>
      Option a:- <b>Both statements I and II are correct</b><br></br>
      Option b:- <b>Statement I is correct but statement II is incorrect</b><br></br>
      Option c:- <b>Statement II is correct but statement I is incorrect</b><br></br>
      Option d:- <b>Both statements I and II are incorrect</b><br></br> 
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br> What is common between earthworm and periplaneta<br></br>
      Option a:- <b>Both have red coloured blood</b><br></br>
      Option b:- <b>Both possess anal styles</b><br></br>
      Option c:- <b>Both have malphigian tubules</b><br></br>
      Option d:- <b>Both have segmented body</b><br></br>  
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>Which of the following are examples of phylum arthropoda
<br></br>
      Option a:- <b>Silverfish, starfish, prawn</b><br></br>
      Option b:- <b>Clam worm, apple snail, honeybee</b><br></br>
      Option c:- <b>Sea star, tongue worm, scorpion</b><br></br>
      Option d:- <b>Cockroach, scorpion, prawn</b><br></br>
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>Among the following organisms which is a completely non-parasitic form
<br></br>
      Option a:- <b>Sea anemone</b><br></br>
      Option b:- <b>Tapeworm</b><br></br>
      Option c:- <b>Leech</b><br></br>
      Option d:- <b>Mosquito</b><br></br> 
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>Which of the following features is common in silverfish, scorpion, dragonfly and prawn<br></br>
      Option a:- <b>Three pairs of legs and segmented body</b><br></br>
      Option b:- <b>Chitinous cuticle and two pairs of antennae</b><br></br>
      Option c:- <b>Jointed appendages and chitinous exoskeleton</b><br></br>
      Option d:- <b>Cephalothorax and tracheae</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>Which one of the following is a matching set of a phylum and its three examples?
<br></br>
      Option a:- <b>Porifera- Spongilla, Euplectella, Pennatula</b><br></br>
      Option b:- <b>Cnidaria-Dentalium, Physalia, Aurelia</b><br></br>
      Option c:- <b>Platyhelminthes- Planaria, Schistosoma, Enterobius</b><br></br>
      Option d:- <b>Mollusca- Loligo, Teredo, Octopuspse</b><br></br>  
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>You have discovered an animal having chacaters like, triploblastic, bilteral symmetry,  coelomate, chitinous exoskeleton, head, thorax and abdomen as body parts and jointed appendages. You should place the animal under
<br></br>
      Option a:- <b>mollusca</b><br></br>
      Option b:- <b>arthropoda</b><br></br>
      Option c:- <b>annelida</b><br></br>
      Option d:- <b>echinodermata  </b><br></br>
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>Which of the following statements are incorect?<br></br>
(i) Parapodia are lateral appendages in arthropods used for swimming<br></br>
(ii) Radula in molluscs are the structures involved in excretion<br></br>
(iii) Aschelminthes are dioecious<br></br>
(iv) Echinoderm adults show radial symmetry<br></br>
(v) Ctenophorans diploblastic<br></br>
      Option a:- <b>(i) and(ii)</b><br></br>
      Option b:- <b>(i) and (iii)</b><br></br>
      Option c:- <b>(i), (iv) and (v)</b><br></br>
      Option d:- <b>(iii) and (v)</b><br></br> 
      Selected Option:- <b>{props.optionnineteen}</b><br></br>
      Correct Option:- <b>{correct[19]}</b> <br></br>
      Result:- <b>{props.resultnineteen}</b><br></br>
      Marks:- <b>{props.marknineteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.21:</b><br></br>Which of the following is/are examples of subphylum Urochordata?<br></br>
      Option a:- <b>Ascidia</b><br></br>
      Option b:- <b>Salpa</b><br></br>
      Option c:- <b>Doliolum</b><br></br>
      Option d:- <b>All of these</b><br></br> 
      Selected Option:- <b>{props.optiontwenty}</b><br></br>
      Correct Option:- <b>{correct[20]}</b> <br></br>
      Result:- <b>{props.resulttwenty}</b><br></br>
      Marks:- <b>{props.marktwenty}</b><br></br>
      </p><br></br>

      <p><b>Question No.22:</b><br></br>Crocodile and penguine are similar to whale and dogfish in which of the following features<br></br>
      Option a:- <b>Possess a solid stranded central nervous system</b><br></br>
      Option b:- <b>Lay eggs and guard them till they hatch</b><br></br>
      Option c:- <b>Possess bony skeleton</b><br></br>
      Option d:- <b>Have gill slits at some stage</b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>Read the given statements and selecct the correct option<br></br>
Statement-I: Urochordates and cephalochordates are often called invertebrate chordates<br></br>
Statement-II: Urochordates and cephalochordates are a connecting link between the invertebrates and chordates<br></br>
      Option a:- <b>Both statements I and II are correct</b><br></br>
      Option b:- <b>Statement I is correct but statement II is incorrect</b><br></br>
      Option c:- <b>Statement II is correct but statement I is incorrect</b><br></br>
      Option d:- <b>Both statements I and II are incorrect</b><br></br>
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>Read the given statements and selecct the correct option<br></br>
Statement-I: Cephalochordata bears notochord throughout their life.<br></br>
Statement-II: In cephalochordates, notochord extends from head to tail.<br></br>
      Option a:- <b>Both statements I and II are correct</b><br></br>
      Option b:- <b>Statement I is correct but statement II is incorrect</b><br></br>
      Option c:- <b>Statement II is correct but statement I is incorrect</b><br></br>
      Option d:- <b>Both statements I and II are incorrect</b><br></br> 
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>Which one of the following statements is incorrect about the occurence of notochord<br></br>
      Option a:- <b>It is present only in larval tail in ascidian</b><br></br>
      Option b:- <b>It is replaced by a vertebral column in adult frog</b><br></br>
      Option c:- <b>It is absent throughout life in humans from the very beginning</b><br></br>
      Option d:- <b>It is present throughout life in Amphioxus</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>In some chordates, the notochord is modified as the vertebral column. Such animals are called vertebrates. Which one of the following statements is correct?
<br></br>
      Option a:- <b>All chordates are vertebrates but all vertebrates are not chordates</b><br></br>
      Option b:- <b>All vertebrates are chordates and all chordates are vertebrates</b><br></br>
      Option c:- <b>All vertebrates are chordates but all chordates are not vertebrates</b><br></br>
      Option d:- <b>Chordates are not vertebrates but all vertebrates are chordates </b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>A common chacateristic of all vertebrates without exception is<br></br>
      Option a:- <b>the division of body inot head,neck,trunk and tail.</b><br></br>
      Option b:- <b>their body covered with an exoskeleton</b><br></br>
      Option c:- <b>the possession of two pairs of functional appendages</b><br></br>
      Option d:- <b>the presence of well developed skull</b><br></br> 
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>To which classes do the following animals belong<br></br>
A-Petromyzon,B-Scoliodon,C-Pristis<br></br>
      Option a:- <b>A-Cyclostoamata, B-Chondrichthyes,C-Chondrichtyes</b><br></br>
      Option b:- <b>A-Osteichthyes, B-Chondrichthyes,C-Chondrichtyes</b><br></br>
      Option c:- <b>A-Osteichthyes, B-Chondrichthyes,C-Osteichthyes</b><br></br>
      Option d:- <b>A-Osteichthyes, B-Chondrichthyes,C-Cyclostomata</b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br>Which of the following is/are not the characteristic of the class Osteichthyes<br></br>
(i) Body is streamlined and mouth is terminal<br></br>
(ii) Gills are covered by operculum<br></br>
(iii) Skin covered with cycloid and placoid scales<br></br>
(iv) Many of them viviparous<br></br>
      Option a:- <b>(iv) only</b><br></br>
      Option b:- <b>(iii) and (iv)</b><br></br>
      Option c:- <b>(i), (iii) and (iv)</b><br></br>
      Option d:- <b>(i) and (ii)</b><br></br>  
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>Which of the following group is formed of only the hermaphrodite organisms<br></br>
      Option a:- <b>Earthworm, tapeworm, housefly, frog</b><br></br>
      Option b:- <b>Earthworm, tapeworm, sea horse, housefly</b><br></br>
      Option c:- <b>Earthworm,leech, sponge, roundworm</b><br></br>
      Option d:- <b>Earthworm,tapeworm,leech, sponge</b><br></br>
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>Which of the following statements is/are correct or incoorect regarding Class Amphibia<br></br>
(i) Body is divisible into head and trunk. Tail is present in some amphibians<br></br>
(ii) Show respiration by gills, lungs and through skin<br></br>
(iii) Has scales in all its members<br></br>
(iv) Can lead dual life(aquatic and terrestrial)<br></br>
(v) Has eyelids<br></br>
      Option a:- <b>All are correct</b><br></br>
      Option b:- <b>(i) and (iv) are correct</b><br></br>
      Option c:- <b>Only (iii) is correct</b><br></br>
      Option d:- <b>Only (ii) is correct</b><br></br>
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>Read the given statements and selecct the correct option<br></br>
Statement-I: Amphibians often hibernate in winter and aestivate in summer<br></br>
Statement-II: Amphibians are poikilothermic animals and cannot regulate body temparature<br></br>
      Option a:- <b>Both statements I and II are correct</b><br></br>
      Option b:- <b>Statement I is correct but statement II is incorrect</b><br></br>
      Option c:- <b>Statement II is correct but statement I is incorrect</b><br></br>
      Option d:- <b>Both statements I and II are incorrect</b><br></br> 
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b><br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>The limbless amphibian is<br></br>
      Option a:- <b>Ichthyophis</b><br></br>
      Option b:- <b>Hyla</b><br></br>
      Option c:- <b>Rana</b><br></br>
      Option d:- <b>Salamandra</b><br></br>
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>Which of the following groups of animals are coelomates<br></br>
      Option a:- <b>Reptiles, birds, coelenterates</b><br></br>
      Option b:- <b>Reptiles, flatworms, landslides</b><br></br>
      Option c:- <b>Hemichordates, birds, roundworms</b><br></br>
      Option d:- <b>Reptiles, birds, insects</b><br></br> 
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>Amphibians share with reptiles all of the following characters exept
<br></br>
      Option a:- <b>ventral heart</b><br></br>
      Option b:- <b>external fertilisation and indirect development</b><br></br>
      Option c:- <b>dioecious, oviparous</b><br></br>
      Option d:- <b>cold blooded or poikilotherms</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>The characterisitcs given above are associated with<br></br>
      Option a:- <b>reptile</b><br></br>
      Option b:- <b>bird</b><br></br>
      Option c:- <b>amphibian</b><br></br>
      Option d:- <b>osteichthyes</b><br></br>
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>The flightless bird among the following is<br></br>
      Option a:- <b>Columba</b><br></br>
      Option b:- <b>Neophron</b><br></br>
      Option c:- <b>Struthio</b><br></br>
      Option d:- <b>Corvus</b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>Which of the following characters doesnot fit for Class Aves
<br></br>
      Option a:- <b>Skin is dry, without glands except oil/preen glands at the base of tails</b><br></br>
      Option b:- <b>Alimentary canal has 2 additional chambers, crop and gizzard</b><br></br>
      Option c:- <b>Hindlimbs are modified for walking, swimming or clasping. Fore limbs are modified into wings.</b><br></br>
      Option d:- <b>Beak has teeth</b><br></br>   
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>Which of the following classes is incorrectly matched with its general characters?<br></br>
      Option a:- <b>Cyclostomata: Lack jaws and pairs fins and body is covered with placoid scales</b><br></br>
      Option b:- <b>Osteichthyes: Fout pairs of gills are covered with an operculum and skin is covered with cycloid scales</b><br></br>
      Option c:- <b>Reptilia: Tympanum represents ear and fertilisation is internaly</b><br></br>
      Option d:- <b>Aves: Endoskeleton is fully ossified and long bones are hollow with air cavities called as pneumatic bones</b><br></br>
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>Which among these is not a homeothermw<br></br>
      Option a:- <b>Aptenodytese</b><br></br>
      Option b:- <b>Testudo</b><br></br>
      Option c:- <b>Columba</b><br></br>
      Option d:- <b>Neophron</b><br></br>
      Selected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div>
    </div>
    <button onClick={() => exportAsImage(exportRef.current, "Animal Kingdom")} style={bstyle} >Download Summary</button></div>

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
        
     }
    
     }
export default connect (mapStateToProps,mapDispatchToProps) (AKsummary)