import React from 'react'
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {scoreUpdate} from '../../redux';
import Logo from '../../redux/Images/Logo.jpg'
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { statUpdateref } from '../../redux/cake/cakeAction';





function  MFsummary(props) {
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
const correct=["d","a","a","d", "c","c","c","b", "d","a","d","c", "b","b","b","d", "a","d","c","a", "c","a","d","a", "d","b","c","c", "b","c","a","b", "c","a","a","b", "d","a","d","a"]; 
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
    }>Performance Summary- Morphology of Plants</h2>
      <div style={
      {
  
       padding: '0 0 0 50px'
      }
    }><p>Name Of the Candidate: <b>{props.name}</b>                  <button style={fStyle}onClick={()=>(clickHanlder)(navigate('/'))}>Logout</button></p>

      {/* <div><p>Name Of the Candidate: <b>{props.name}</b></p></div> */}
      <p><b>Question No.1:</b><br></br>Edible roots are found in<br></br>
      Option a:- <b>rice</b><br></br>
      Option b:- <b>wheat</b><br></br>
      Option c:- <b>potato</b><br></br>
      Option d:- <b>sweet potato</b><br></br>
      Selected Option:-<b>{props.option}</b><br></br>
      Correct Option:- <b>{correct[0]}</b><br></br>
      Result:- <b>{props.result}</b><br></br>
      Marks:- <b>{props.mark}</b><br></br>
      </p><br></br>

      <p><b>Question No.2:</b><br></br>Select the group of plants that possess stilt roots
      <br></br>
      Option a:- <b>Zea mays, Rhizophora mangle</b><br></br>
      Option b:- <b>Pandanus odoratissimus, Ficus benghalensis</b><br></br>
      Option c:- <b>Rhizophora mangle, Hedera helix</b><br></br>
      Option d:- <b>Ficus benghalensis, Pisum sativum</b><br></br>
      Selected Option:-<b>{props.optionone}</b><br></br>
      Correct Option:- <b>{correct[1]}</b><br></br>
      Result:- <b>{props.resultone}</b><br></br>
      Marks:- <b>{props.markone}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.3:</b><br></br>Which of the following plants bears moniliform roots?<br></br>
      Option a:- <b>Momordica</b><br></br>
      Option b:- <b>Curcuma</b><br></br>
      Option c:- <b>Dahlia</b><br></br>
      Option d:- <b>Asparagus</b><br></br>
      Selected Option:- <b>{props.optiontwo}</b><br></br>
      Correct Option:- <b>{correct[2]}</b><br></br>
      Result:- <b>{props.resulttwo}</b><br></br>
      Marks:- <b>{props.marktwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.4:</b><br></br>Select the incorrect statement out of the following<br></br>
      Option a:- <b>Assimilatory roots capable of photosynthesis are present in Tinospora and trapa</b><br></br>
      Option b:- <b>Haustoria of cuscuta make connections with both xylem and phloem tissues of host</b><br></br>
      Option c:- <b>Reproductive roots of Ipomoea batata help in vegetative propagation</b><br></br>
      Option d:- <b>Epiphytic roots of Vanda possess well developed root caps and root hair</b><br></br>
      Selected Option:- <b>{props.optionthree}</b><br></br>
      Correct Option:- <b>{correct[3]}</b> <br></br>
      Result:- <b>{props.resultthree}</b><br></br>
      Marks:- <b>{props.markthree}</b><br></br>
      </p><br></br>

      <p><b>Question No.5:</b><br></br>Unbranched, erect, cylindrical stout axis with distinct nodes and internodes and with jointed appearence is called as 
<br></br>
      Option a:- <b>runner</b><br></br>
      Option b:- <b>sucker</b><br></br>
      Option c:- <b>culm</b><br></br>
      Option d:- <b>caudex</b><br></br> 
      Selected Option:- <b>{props.optionfour}</b><br></br>
      Correct Option:- <b>{correct[4]}</b> <br></br>
      Result:- <b>{props.resultfour}</b><br></br>
      Marks:- <b>{props.markfour}</b><br></br>
      </p><br></br>

     
      <p><b>Question No.6:</b><br></br>Which of the following plants possess culm?
<br></br>
      Option a:- <b>Cuscuta</b><br></br>
      Option b:- <b>Zingiber</b><br></br>
      Option c:- <b>Bamboo</b><br></br>
      Option d:- <b>Cocos</b><br></br> 
      Selected Option:- <b>{props.optionfive}</b><br></br>
      Correct Option:- <b>{correct[5]}</b> <br></br>
      Result:- <b>{props.resultfive}</b><br></br>
      Marks:- <b>{props.markfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.7:</b><br></br>Read the following statements and select the correct ones<br></br>
(i) Root caps are present in prop roots<br></br>
(ii) Pneumatophores help to get oxygen for respirtation<br></br>
(iii) Edible part of ginger is underground stem<br></br>
(iv) Hydrophytes usually possess a well developed root system<br></br>
      Option a:- <b>(i) and (ii) only</b><br></br>
      Option b:- <b>(ii) and (iii) only</b><br></br>
      Option c:- <b>(i), (ii) and (iii)</b><br></br>
      Option d:- <b>(i),(ii), (iii) & (iv)</b><br></br> 
      Selected Option:- <b>{props.optionsix}</b><br></br>
      Correct Option:- <b>{correct[6]}</b> <br></br>
      Result:- <b>{props.resultsix}</b><br></br>
      Marks:- <b>{props.marksix}</b><br></br>
      </p><br></br>

      <p><b>Question No.8:</b><br></br>Read the given statements and selecct the correct option<br></br>
Statement-I: The stem tubers are the swollen ends of specialised underground stem branches, which help in vegetative propagation of the plant.<br></br>
Statement-II: Solanum Tuberosum is an example of a stem tuber which stores inulin as the main reserve food material<br></br>
      Option a:- <b>Both statements I and II are correct</b><br></br>
      Option b:- <b>Statement I is correct but statement II is incorrect</b><br></br>
      Option c:- <b>Statement II is correct but statement I is incorrect</b><br></br>
      Option d:- <b>Both statements I and II are incorrect</b><br></br>
      Selected Option:- <b>{props.optionseven}</b><br></br>
      Correct Option:- <b>{correct[7]}</b> <br></br>
      Result:- <b>{props.resultseven}</b><br></br>
      Marks:- <b>{props.markseven}</b><br></br>
      </p><br></br>
      
      <p><b>Question No.9:</b><br></br>Which of the following is not an example of corm<br></br>
      Option a:- <b>Colocasia</b><br></br>
      Option b:- <b>Freesia</b><br></br>
      Option c:- <b>Crocus</b><br></br>
      Option d:- <b>Zingiber</b><br></br>
      Selected Option:- <b>{props.optioneight}</b><br></br>
      Correct Option:- <b>{correct[8]}</b> <br></br>
      Result:- <b>{props.resulteight}</b><br></br>
      Marks:- <b>{props.markeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.10:</b><br></br>The 'eyes' of the potato tuber represent<br></br>
      Option a:- <b>nodes</b><br></br>
      Option b:- <b>root buds</b><br></br>
      Option c:- <b>flower buds</b><br></br>
      Option d:- <b>leaf buds</b><br></br>  
      Selected Option:- <b>{props.optionnine}</b><br></br>
      Correct Option:- <b>{correct[9]}</b> <br></br>
      Result:- <b>{props.resultnine}</b><br></br>
      Marks:- <b>{props.marknine}</b><br></br>
      </p><br></br>
    
      <p><b>Question No.11:</b><br></br>In Bougainvilea, weak stems rise up a support by clinging to it with the help of curved thorns, such plants are called as
<br></br>
      Option a:- <b>tendrils</b><br></br>
      Option b:- <b>hooks</b><br></br>
      Option c:- <b> offsets</b><br></br>
      Option d:- <b>scramblers</b><br></br> 
      Selected Option:- <b>{props.optionten}</b><br></br>
      Correct Option:- <b>{correct[10]}</b> <br></br>
      Result:- <b>{props.resultten}</b><br></br>
      Marks:- <b>{props.markten}</b><br></br>
      </p><br></br>

      <p><b>Question No.12:</b><br></br>In Opuntia, the function of photosynthesis is carried out by
<br></br>
      Option a:- <b>cladode</b><br></br>
      Option b:- <b>phyllode</b><br></br>
      Option c:- <b>phylloclade</b><br></br>
      Option d:- <b>stipules</b><br></br>
      Selected Option:- <b>{props.optioneleven}</b><br></br>
      Correct Option:- <b>{correct[11]}</b> <br></br>
      Result:- <b>{props.resulteleven}</b><br></br>
      Marks:- <b>{props.markeleven}</b><br></br>
      </p><br></br>

      <p><b>Question No.13:</b><br></br>__________________________are the green stems of limited growth which have taken over the function of photosynthesis from leaves
<br></br>
      Option a:- <b>Phylloclades</b><br></br>
      Option b:- <b>Cladodes</b><br></br>
      Option c:- <b>Phyllodes</b><br></br>
      Option d:- <b>Stem thorns</b><br></br> 
      Selected Option:- <b>{props.optiontwelve}</b><br></br>
      Correct Option:- <b>{correct[12]}</b> <br></br>
      Result:- <b>{props.resulttwelve}</b><br></br>
      Marks:- <b>{props.marktwelve}</b><br></br>
      </p><br></br>

      <p><b>Question No.14:</b><br></br> __________________are one internode long runners usually found in rosette plants at the ground/water level.
<br></br>
      Option a:- <b>Trailers</b><br></br>
      Option b:- <b>Offsets</b><br></br>
      Option c:- <b>Stolons</b><br></br>
      Option d:- <b>Rhizomes</b><br></br>  
      Selected Option:- <b>{props.optionthirteen}</b><br></br>
      Correct Option:- <b>{correct[13]}</b> <br></br>
      Result:- <b>{props.resultthirteen}</b><br></br>
      Marks:- <b>{props.markthirteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.15:</b><br></br>In some____________________, the leaf base may become swollen and is called as_____________________
<br></br>
      Option a:- <b>monocots, sheathing leaf base</b><br></br>
      Option b:- <b>legumes, pulvinus</b><br></br>
      Option c:- <b>legumes, sheathing leaf base</b><br></br>
      Option d:- <b>monocots, pulvinus</b><br></br>
      Selected Option:- <b>{props.optionfourteen}</b><br></br>
      Correct Option:- <b>{correct[14]}</b> <br></br>
      Result:- <b>{props.resultfourteen}</b><br></br>
      Marks:- <b>{props.markfourteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.16:</b><br></br>Which of the following represents the functions of veins in the leaves

<br></br>
      Option a:- <b>Transport of water and minerals</b><br></br>
      Option b:- <b>Mechanical support</b><br></br>
      Option c:- <b>Transport of organic food material</b><br></br>
      Option d:- <b>All of these</b><br></br> 
      Selected Option:- <b>{props.optionfifteen}</b><br></br>
      Correct Option:- <b>{correct[15]}</b> <br></br>
      Result:- <b>{props.resultfifteen}</b><br></br>
      Marks:- <b>{props.markfifteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.17:</b><br></br>Reticulate venation is a characteristic of dicots. An exception to this generalisation is<br></br>
      Option a:- <b>Calophyllum</b><br></br>
      Option b:- <b>Ficus</b><br></br>
      Option c:- <b>Hibiscus</b><br></br>
      Option d:- <b>Zizyphus</b><br></br>
      Selected Option:- <b>{props.optionsixteen}</b><br></br>
      Correct Option:- <b>{correct[16]}</b> <br></br>
      Result:- <b>{props.resultsixteen}</b><br></br>
      Marks:- <b>{props.marksixteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.18:</b><br></br>Parallel venation is a characteristic of monocots. Which of the following is an exception to this generalisation
<br></br>
      Option a:- <b>Smilax</b><br></br>
      Option b:- <b>Colocasia</b><br></br>
      Option c:- <b>Alocasia</b><br></br>
      Option d:- <b>All of these</b><br></br> 
      Selected Option:- <b>{props.optionseventeen}</b><br></br>
      Correct Option:- <b>{correct[17]}</b> <br></br>
      Result:- <b>{props.resultseventeen}</b><br></br>
      Marks:- <b>{props.markseventeen}</b><br></br>
      </p><br></br>

      <p><b>Question No.19:</b><br></br>A simple leaf can be differeniated from the pinnae of a compound leaf on the basis of presence or absense of 
<br></br>
      Option a:- <b>number pinnae</b><br></br>
      Option b:- <b>shape of laminae</b><br></br>
      Option c:- <b>auxillary bud</b><br></br>
      Option d:- <b>lateral buds</b><br></br>  
      Selected Option:- <b>{props.optioneighteen}</b><br></br>
      Correct Option:- <b>{correct[18]}</b> <br></br>
      Result:- <b>{props.resulteighteen}</b><br></br>
      Marks:- <b>{props.markeighteen}</b><br></br>
      </p><br></br>

      <p><b>Question No.20:</b><br></br>In spiral phyllotaxy, the number of leaves at each node is<br></br>
      Option a:- <b>one</b><br></br>
      Option b:- <b>two</b><br></br>
      Option c:- <b>three</b><br></br>
      Option d:- <b>many</b><br></br> 
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

      <p><b>Question No.22:</b><br></br>Identify the group of plants possessing leaf tendrils<br></br>
      Option a:- <b>Pea, Glory lily</b><br></br>
      Option b:- <b>Cucumber, Pumpkin</b><br></br>
      Option c:- <b>Watermelon, Grapevine</b><br></br>
      Option d:- <b>All of these</b><br></br> 
      Selected Option:- <b>{props.optiontwentyone}</b><br></br>
      Correct Option:- <b>{correct[21]}</b> <br></br>
      Result:- <b>{props.resulttwentyone}</b><br></br>
      Marks:- <b>{props.marktwentyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.23:</b><br></br>Leaf tip tendrils are present in<br></br>
      Option a:- <b>Smilax</b><br></br>
      Option b:- <b>Lathyrus</b><br></br>
      Option c:- <b>Pisum</b><br></br>
      Option d:- <b>Gloriosa</b><br></br>
      Selected Option:- <b>{props.optiontwentytwo}</b><br></br>
      Correct Option:- <b>{correct[22]}</b> <br></br>
      Result:- <b>{props.resulttwentytwo}</b><br></br>
      Marks:- <b>{props.marktwentytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.24:</b><br></br>Spines present on the areoles of opuntia represent<br></br>
      Option a:- <b>stem</b><br></br>
      Option b:- <b>leaves</b><br></br>
      Option c:- <b>buds</b><br></br>
      Option d:- <b>phyllodes</b><br></br> 
      Selected Option:- <b>{props.optiontwentythree}</b><br></br>
      Correct Option:- <b>{correct[23]}</b> <br></br>
      Result:- <b>{props.resulttwentythree}</b><br></br>
      Marks:- <b>{props.marktwentythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.25:</b><br></br>Which one of the following represents the edible swollen portion of Allium cepa<br></br>
      Option a:- <b>Aerial stem</b><br></br>
      Option b:- <b>Roots</b><br></br>
      Option c:- <b>Internodes</b><br></br>
      Option d:- <b>Leaf bases</b><br></br>
      Selected Option:- <b>{props.optiontwentyfour}</b><br></br>
      Correct Option:- <b>{correct[24]}</b><br></br>
      Result:- <b>{props.resulttwentyfour}</b><br></br>
      Marks:- <b>{props.marktwentyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.26:</b><br></br>Which of the following plant parts in garlic and onion are edible
<br></br>
      Option a:- <b>Adventitious roots</b><br></br>
      Option b:- <b>Fleshy scale leaves</b><br></br>
      Option c:- <b>Tunic</b><br></br>
      Option d:- <b>None of these</b><br></br>
      Selected Option:- <b>{props.optiontwentyfive}</b><br></br>
      Correct Option:- <b>{correct[25]}</b> <br></br>
      Result:- <b>{props.resulttwentyfive}</b><br></br>
      Marks:- <b>{props.marktwentyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.27:</b><br></br>Parkinsonia is a good example of<br></br>
      Option a:- <b>phyllocade</b><br></br>
      Option b:- <b>parachute mechanism</b><br></br>
      Option c:- <b>phyllode</b><br></br>
      Option d:- <b>winged fruits</b><br></br> 
      Selected Option:- <b>{props.optiontwentysix}</b><br></br>
      Correct Option:- <b>{correct[26]}</b> <br></br>
      Result:- <b>{props.resulttwentysix}</b><br></br>
      Marks:- <b>{props.marktwentysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.28:</b><br></br>Which plant part is modified into pitcher in a pitcher plants<br></br>
      Option a:- <b>Root</b><br></br>
      Option b:- <b>Stem</b><br></br>
      Option c:- <b>Leaf</b><br></br>
      Option d:- <b>Flower</b><br></br> 
      Selected Option:- <b>{props.optiontwentyseven}</b><br></br>
      Correct Option:- <b>{correct[27]}</b> <br></br>
      Result:- <b>{props.resulttwentyseven}</b><br></br>
      Marks:- <b>{props.marktwentyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.29:</b><br></br>A small rootless aquatic herb in which a portion of leaf froms a tiny stack or bladder which traps water insects is
<br></br>
      Option a:- <b>Dionea</b><br></br>
      Option b:- <b>Utricularia</b><br></br>
      Option c:- <b>Sarracenia</b><br></br>
      Option d:- <b>Drosera</b><br></br>  
      Selected Option:- <b>{props.optiontwentyeight}</b><br></br>
      Correct Option:- <b>{correct[28]}</b> <br></br>
      Result:- <b>{props.resulttwentyeight}</b><br></br>
      Marks:- <b>{props.marktwentyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.30:</b><br></br>_______________inflorescence is a compact spike-like inflorescence with small unisexual flowers<br></br>
      Option a:- <b>Spike</b><br></br>
      Option b:- <b>Corymb</b><br></br>
      Option c:- <b>Catkin</b><br></br>
      Option d:- <b>Umbel</b><br></br>
      Selected Option:- <b>{props.optiontwentynine}</b><br></br>
      Correct Option:- <b>{correct[29]}</b> <br></br>
      Result:- <b>{props.resulttwentynine}</b><br></br>
      Marks:- <b>{props.marktwentynine}</b><br></br>
      </p><br></br>

      <p><b>Question No.31:</b><br></br>If the gynoecium is present in the topmost position of the thalamus, then the flower is referred to as
<br></br>
      Option a:- <b>hypogynous</b><br></br>
      Option b:- <b>perigynous</b><br></br>
      Option c:- <b>epigynous</b><br></br>
      Option d:- <b>none of these</b><br></br>
      Selected Option:- <b>{props.optionthirty}</b><br></br>
      Correct Option:- <b>{correct[30]}</b> <br></br>
      Result:- <b>{props.resultthirty}</b><br></br>
      Marks:- <b>{props.markthirty}</b><br></br>
      </p><br></br>

      <p><b>Question No.32:</b><br></br>Ovary is said to be half inferior in which of the following conditions?<br></br>
      Option a:- <b>hypogynous</b><br></br>
      Option b:- <b>perigynous</b><br></br>
      Option c:- <b>epigynous</b><br></br>
      Option d:- <b>Both (b) and (c)</b><br></br>
      Selected Option:- <b>{props.optionthirtyone}</b><br></br>
      Correct Option:- <b>{correct[31]}</b><br></br>
      Result:- <b>{props.resultthirtyone}</b><br></br>
      Marks:- <b>{props.markthirtyone}</b><br></br>
      </p><br></br>

      <p><b>Question No.33:</b><br></br>In ____________________flowers, margin of thallamus grows upward enclosing the ovary completely and getting fused with it
<br></br>
      Option a:- <b>hypogynous</b><br></br>
      Option b:- <b>perigynous</b><br></br>
      Option c:- <b>epigynous</b><br></br>
      Option d:- <b>Both (b) and (c)</b><br></br>
      Selected Option:- <b>{props.optionthirtytwo}</b><br></br>
      Correct Option:- <b>{correct[32]}</b> <br></br>
      Result:- <b>{props.resultthirtytwo}</b><br></br>
      Marks:- <b>{props.markthirtytwo}</b><br></br>
      </p><br></br>

      <p><b>Question No.34:</b><br></br>In _____________________aestivation,sepals of petals in a whorl just touch one another at the margins, without overlapping, as is found in___________________
<br></br>
      Option a:- <b>valvis, Calotropis</b><br></br>
      Option b:- <b>valvate, Hibiscus</b><br></br>
      Option c:- <b>twisted, Caalotropis</b><br></br>
      Option d:- <b>twisted, Hibiscus</b><br></br>
      Selected Option:- <b>{props.optionthirtythree}</b><br></br>
      Correct Option:- <b>{correct[33]}</b> <br></br>
      Result:- <b>{props.resultthirtythree}</b><br></br>
      Marks:- <b>{props.markthirtythree}</b><br></br>
      </p><br></br>

      <p><b>Question No.35:</b><br></br>Syngenesious condition of stamens is found in Family
<br></br>
      Option a:- <b>Asteraceae</b><br></br>
      Option b:- <b>Liliaceae</b><br></br>
      Option c:- <b>Cruciferae</b><br></br>
      Option d:- <b>Malvaceae</b><br></br>
      Selected Option:- <b>{props.optionthirtyfour}</b><br></br>
      Correct Option:- <b>{correct[34]}</b> <br></br>
      Result:- <b>{props.resultthirtyfour}</b><br></br>
      Marks:- <b>{props.markthirtyfour}</b><br></br>
      </p><br></br>

      <p><b>Question No.36:</b><br></br>Monothecous condition of stamens, i.e presence of a single anther lobe is a characteristic of Family
<br></br>
      Option a:- <b>Cucubitaceae</b><br></br>
      Option b:- <b>Malvaceae</b><br></br>
      Option c:- <b>Asteraceae</b><br></br>
      Option d:- <b>Brassicaceae</b><br></br>
      Selected Option:- <b>{props.optionthirtyfive}</b><br></br>
      Correct Option:- <b>{correct[35]}</b> <br></br>
      Result:- <b>{props.resultthirtyfive}</b><br></br>
      Marks:- <b>{props.markthirtyfive}</b><br></br>
      </p><br></br>

      <p><b>Question No.37:</b><br></br>In _____________________placentation, a monocarpellary ovary bears a single longitudinal ovule along the junction of two fused margins
<br></br>
      Option a:- <b>axile</b><br></br>
      Option b:- <b>parietal</b><br></br>
      Option c:- <b>free central</b><br></br>
      Option d:- <b>marginal</b><br></br>
      Selected Option:- <b>{props.optionthirtysix}</b><br></br>
      Correct Option:- <b>{correct[36]}</b> <br></br>
      Result:- <b>{props.resultthirtysix}</b><br></br>
      Marks:- <b>{props.markthirtysix}</b><br></br>
      </p><br></br>

      <p><b>Question No.38:</b><br></br>Ovary is one-chambered but it becomes two-chambered due to the formation of false septum in
<br></br>
      Option a:- <b>Brassica</b><br></br>
      Option b:- <b>Pisum</b><br></br>
      Option c:- <b>Hibiscus</b><br></br>
      Option d:- <b>Dianthus</b><br></br>
      Selected Option:- <b>{props.optionthirtyseven}</b><br></br>
      Correct Option:- <b>{correct[37]}</b> <br></br>
      Result:- <b>{props.resultthirtyseven}</b><br></br>
      Marks:- <b>{props.markthirtyseven}</b><br></br>
      </p><br></br>

      <p><b>Question No.39:</b><br></br>Endospermic seeds are found in<br></br>
      Option a:- <b>barley</b><br></br>
      Option b:- <b>castor</b><br></br>
      Option c:- <b>pea</b><br></br>
      Option d:- <b>both (a) & (b)</b><br></br>
      Selected Option:- <b>{props.optionthirtyeight}</b><br></br>
      Correct Option:- <b>{correct[38]}</b> <br></br>
      Result:- <b>{props.resultthirtyeight}</b><br></br>
      Marks:- <b>{props.markthirtyeight}</b><br></br>
      </p><br></br>

      <p><b>Question No.40:</b><br></br>In albuminous seeds, food is stored in________________ and in exabalbuminous seeds, food is stored in ________________.
<br></br>
      Option a:- <b>endosperms, cotyledons</b><br></br>
      Option b:- <b>cotyledons, cotyledons</b><br></br>
      Option c:- <b>cotyledons, endosperm</b><br></br>
      Option d:- <b>endosperm,endosperm</b><br></br>
      Selected Option:- <b>{props.optionthirtynine}</b><br></br>
      Correct Option:- <b>{correct[39]}</b> <br></br>
      Result:- <b>{props.resultthirtynine}</b><br></br>
      Marks:- <b>{props.markthirtynine}</b><br></br>
      </p><br></br>
    </div>
    </div>
    <button onClick={() => exportAsImage(exportRef.current, "Morphology of Plants")} style={bstyle} >Download Summary</button></div>

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
export default connect (mapStateToProps,mapDispatchToProps) (MFsummary)