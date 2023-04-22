import React from 'react'
import { useNavigate } from 'react-router-dom'
 import { timerUpdate} from '../redux'
 import { testcodeupdater,testcodeupdaterone,testcodeupdatertwo,testcodeupdaterthree,testcodeupdaterfour,testcodeupdaterfive,testcodeupdatersix,testcodeupdaterseven,testcodeupdatereight, testcodeupdaternine,testcodeupdaterten,testcodeupdatereleven,testcodeupdatertwelve,testcodeupdaterthirteen,testcodeupdaterfourteen,testcodeupdaterfifteen,testcodeupdatersixteen,testcodeupdaterseventeen,testcodeupdatereighteen,testcodeupdaternineteen,testcodeupdatertwenty } from '../redux/cake/cakeAction'
 import { connect } from 'react-redux'
 import { testcode } from '../redux/cake/cakeAction';
 import agri  from '../redux/Images/agri.png'
 import engg  from '../redux/Images/engg.jpg'
 import arch from '../redux/Images/arch.jpg'
 import vet from '../redux/Images/vet.png'
 import med from '../redux/Images/med.png'
 import pharma from '../redux/Images/pharma.png'
 import Logo from '../redux/Images/Logo.jpg'
  import cover from '../redux/Images/cover.png'
 import { Routes, Route } from 'react-router-dom';

 

 function Firstpage(props) {
  const myStyle = {
    border: "2px solid purple",
  width: "1200px",
  height: "200px",
  margin:"0 0 0 150px",
  "border-collapse":"collapse"

  };
  const myStyle1 = {
    border: "2px solid purple",
    height: "108px",
    "margin-left":"32px",
    "margin-right":"0px"

  };
  const mystyle = {
      "border-bottom": " 1px solid purple",
      "border-collapse":"collapse",
      

    };
    const mystyl = {
      "border-right": " 1px solid purple",
      "border-collapse":"collapse",
    };
    const mystylh = {
      "border-right": " 1px solid purple",
      "border-collapse":"collapse",
      "background-color":"skyblue",
      "border-radius": "12px",
      "color":"purple"
    };
    const mstyle = {
      "background-color":"orange",
      "border-radius": "12px"
    };
    const mstyleh = {
      margin:"0 0 0 135px",
      width:"1250px"
    };
    const mstill = {
      margin:"0 25px 0 25px",
      "text-align":"justify",
      width:"750px",
      padding:"18px 20px 200px 20px"
    };
    const mstilly = {
      margin:"0 0 0 0",
      "text-align":"justify",
      "text-decoration-line": "underline",
      "font-size":"20px",
      width:"750px",
      padding:"20px 20px 10px 20px"
    };
    const imgStyle = {
      margin:"0  0 0 20px",
    };
    const imgStyle1 = {
      margin:"0  0 0 120px",  
    };
    const imgStyle2 = {
      margin:"0  0 0 150px",
    };
    const imgStyle3= {
      margin:"0  0 0 160px",
    };
    const imgStyle4 = {
      margin:"0 0 0 160px" ,
    };
    const imgStyle5 = {
      margin:"0 0 0 155px",
    };
    const imgStyle6 = {
      margin:"0  0 0 30px",
    };
    const imgStyle7 = {
      margin:"0  0 0 135px",
    };
    const imgStyle8 = {
      margin:"0  0 0 145px",
    };
    const imgStyle9= {
      margin:"0  0  0 170px"     
    };
    const imgStyle10 = {
      margin:"0 0 0 187px" ,
    };
    const imgStyle11 = {
      margin:"0 0 0 180px",
    };
    // const logostyle = {
    //   "float":"left",
    // };
    const pStyle = {
      border: "2px solid purple"
    };
    const logoStyle = {
      "margin-left":"100px",
      "border-radius":"25%",
      border:"1px solid purple",
      "align":"center",
    };
    const hStyle = {
      "height":"109px",
      "text-align":"center"
    };
    const tStyle = {
      width:"1400px",
      "height":"109px",
    };
    const bStyle = {
      width:"1520px",
      "height":"114px",
      "background-color":"purple",
    };
    const bStylef = {
      
      width:"1520px",
      "height":"57px",
      "background-color":"#6495ED",
    };
    const bStylei = {
      "margin-left":"15px",
      "margin-top":"5px",
      padding:"5px"
    };
    const xStyle = {
  
      "background-color":"aquamarine",
      width:"850px",
      "margin":"0 0 0 30px",
      padding:"0px",
      height:"320px"
    };
    const yStyle = {
      width:"350px",
      height:"320px",
    

    };
   
    const tStyle1 = {
      width:"1400px",
      "font-size":"18px",
      "margin-left":"50px",
      "margin-top":"15px",
      "margin-bottom":"15px",
      "text-align":"justify",
      "float":"center"
    };
    const container = {
      display: "grid",
  "grid-template-columns":  "1fr 1fr",
  
    };

  
  const navigate = useNavigate();
     
//       const date=new Date();
//    let timer = date.getHours() + ":" + date.getMinutes()+ ":" + date.getSeconds();
//          var a = timer.split(':'); 
//       var timeOne = ((+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]))*1000; 
// //      //  var timeTwo = timeOne+2400000; 
//      var timeTwo = timeOne+10000; 

      
 return (<>
 <div className={props.header} style={bStyle}>
  {/* <h1 style={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1> */}
  <table style={tStyle}>
 
 <tbody >
   <tr style={hStyle}>  
     <td  ><img  style={logoStyle} src={Logo} alt="Logo" /></td> 
   </tr>
 </tbody>
</table>
        </div>
        <div>
          {/* <p style ={mstill} >Vectorise is a Not-for-profit organisation offering Mock Test services to the students appearing various entrance examinations for getting admissions into proffesional courses including Engineering, Agricultural Science,Medicine,Veterinary Science,Pharmacy and Architecture across the Nation. Team Vectorise is unique combination of teachers from across the length and breadth of nation, who helped thousands of students crack exams like JEE and NEET.</p><br></br><br></br> */}
          <table style={tStyle1}>
 
 <tbody >
   <tr >  
     <td >Vectorise is an organisation offering Mock Test services to the students appearing various entrance examinations to get admissions into proffesional courses like Engineering, Medicine, Agricultural Science,Veterinary Science,Pharmacy and Architecture across the Nation. Team Vectorise is unique combination of teachers from across the length and breadth of nation, who helped thousands of students crack exams like JEE and NEET.</td> 
   </tr>
 </tbody>
</table>
          {/* <div style={myStyle1}>
            <img style={imgStyle} src={engg} alt="Logo" />
            <img style={imgStyle1} src={med} alt="Logo" />
            <img style={imgStyle2} src={vet} alt="Logo" />
            <img style={imgStyle3} src={arch} alt="Logo" />
          <img style={imgStyle4} src={agri} alt="Logo" />
          <img style={imgStyle5} src={pharma} alt="Logo" />
          </div> */}
          <table style={myStyle1}>
 
  <tbody >
    <tr >  
      <td ><img style={imgStyle} src={engg} alt="Logo" /></td> 
      <td><img style={imgStyle1} src={med} alt="Logo" /></td>
      <td ><img style={imgStyle2} src={vet} alt="Logo" /></td>
      <td ><img style={imgStyle3} src={arch} alt="Logo" /></td>
      <td ><img style={imgStyle4} src={agri} alt="Logo" /></td>
      <td ><img style={imgStyle5} src={pharma} alt="Logo" /></td>
    </tr>
    <tr >  
      <td  ><p style={imgStyle6}>Engineering</p></td> 
      <td ><p style={imgStyle7}>Medical</p></td>
      <td><p style={imgStyle8}>Veterinary Science</p></td>
      <td><p style={imgStyle9}>Architecture</p></td>
      <td ><p style={imgStyle10}>Agriculture</p></td>
      <td><p style={imgStyle11}>Pharmacy</p></td>
    </tr>
  </tbody>
</table>
</div>
          
          <br></br><br></br>
          
        <div style={container}> <div style= {xStyle}> <p style ={mstilly}>Salient features of the services offered:</p>  
          <ul style ={mstill}>
  <li>Vectorise is a dedicated platform providing Mock Test services <b><i>exclusively to</i></b> those who appear Engineering and Medical Common Entrance Examinations.</li>
  <li>The tests are designed in a such a way so as to simulate  'the real time exam hall experience'.</li>
  <li>Concept wise,unit wise, chapter wise, segment wise tests will be provided so as to cover the entire syllabus.</li> 
  <li>Most of the tests are will be avialable at price as low as Rs 9/- while some tests are absolutely free.</li>
  <li>Questions are framed so as to test the conceptual understanding, problem solving techniques and application ability of the student.</li> 
  <li>Every week four tests will be uploaded and total of tests will be 200+.</li> 
  <li>Performance report and score card will be provided for each test.</li> 


  </ul>  
  
    </div><div style={yStyle}><img  src={cover} alt="Logo" /></div>
    </div>
        <br></br><br></br>
 <h3 style={mstyleh}>List of The Tests Available Now:</h3>
  {/* <p>Diseases:<button onClick={()=>((props.testcodeupdater)(navigate('/register')))}>Click Here</button></p>
  <p>Biological Classification:<button onClick={()=>((props.testcodeupdaterone)(navigate('/register')))}>Click Here</button></p>
  <button onClick={()=>((props.testcodeupdatertwo)(navigate('/register')))}>Plant Kingdom</button>
  <button onClick={()=>((props.testcodeupdaterthree)(navigate('/register')))}>Animal Kingdom</button>
  <button onClick={()=>((props.testcodeupdaterfour)(navigate('/register')))}>Morphology Of Flowering Plants</button>
  <button onClick={()=>((props.testcodeupdaterfive)(navigate('/register')))}>Functions</button>
  <button onClick={()=>((props.testcodeupdatersix)(navigate('/register')))}>Mathematical Induction</button>
  <button onClick={()=>((props.testcodeupdaterseven)(navigate('/register')))}>Addition Of Vectors</button> 
  <button onClick={()=>((props.testcodeupdatereight)(navigate('/register')))}>Products Of Vectors</button>
  <button onClick={()=>((props.testcodeupdaternine)(navigate('/register')))}>Properties of Triangles</button>
  <button onClick={()=>((props.testcodeupdaterten)(navigate('/register')))}>Solutions</button>
  <button onClick={()=>((props.testcodeupdatereleven)(navigate('/register')))}>Wave Optics</button>
  <button onClick={()=>((props.testcodeupdatertwelve)(navigate('/register')))}>Electrochemistry</button>
  <button onClick={()=>((props.testcodeupdaterthirteen)(navigate('/register')))}>General Principles of Metullurgy</button>
  <button onClick={()=>((props.testcodeupdaterfourteen)(navigate('/register')))}>p-Block Elements: Group 17 Elements</button>
  <button onClick={()=>((props.testcodeupdaterfifteen)(navigate('/register')))}>Alkali and Alkaline Earth Metals</button>
  <button onClick={()=>((props.testcodeupdatersixteen)(navigate('/register')))}>Oscillations</button>
  <button onClick={()=>((props.testcodeupdaterseventeen)(navigate('/register')))}>Gravitation</button>
  <button onClick={()=>((props.testcodeupdatereighteen)(navigate('/register')))}>Heat Transfer</button>
  <button onClick={()=>((props.testcodeupdaternineteen)(navigate('/register')))}>Electrostatics</button> */}

  <table style={myStyle}>
  <thead style={mystyle}>
    <tr >
      <th style={mystylh}  colspan="2">Mathematics</th>
      <th style={mystylh}  colspan="2">Physics</th>
      <th style={mystylh}  colspan="2">Chemistry</th>
      <th style={mystylh}  colspan="2">Biology</th>
    </tr>
  </thead>
  <tbody >
    <tr style={mystyle}>  
      <td >Addition Of Vectors</td> 
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdaterseven)(navigate('/register')))}>Click Here</button></td>
      <td >Electrostatics</td>
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdaternineteen)(navigate('/register')))}>Click Here</button></td>
      <td >Alkali and Alkaline Earth Metals</td>
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdaterfifteen)(navigate('/register')))}>Click Here</button></td>
      <td >Diseases</td>
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdater)(navigate('/register')))}>Click Here</button></td>
    </tr>
    <tr style={mystyle}>  
      <td>Mathematical Induction</td> 
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdatersix)(navigate('/register')))}>Click Here</button></td>
      <td>Gravitation</td>
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdaterseventeen)(navigate('/register')))}>Click Here</button></td>
      <td>Solutions</td>
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdaterten)(navigate('/register')))}>Click Here</button></td>
      <td>Biological Classification</td>
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdaterone)(navigate('/register')))}>Click Here</button></td>
    </tr>
    <tr style={mystyle}>  
      <td>Products Of Vectors</td> 
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdatereight)(navigate('/register')))}>Click Here</button></td>
      <td>Heat Transfer</td>
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdatereighteen)(navigate('/register')))}>Click Here</button></td>
      <td>p-Block Elements: Group 17 Elements</td>
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdaterfourteen)(navigate('/register')))}>Click Here</button></td>
      <td>Plant Kingdom</td>
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdatertwo)(navigate('/register')))}>Click Here</button></td>
    </tr>
    <tr style={mystyle}>  
      <td>Functions</td> 
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdaterfive)(navigate('/register')))}>Click Here</button></td>
      <td>Oscillations</td>
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdatersixteen)(navigate('/register')))}>Click Here</button></td>
      <td>Electrochemistry</td>
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdatertwelve)(navigate('/register')))}>Click Here</button></td>
      <td>Animal Kingdom</td>
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdaterthree)(navigate('/register')))}>Click Here</button></td>
    </tr>
    <tr>  
      <td>Properties of Triangles</td> 
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdaternine)(navigate('/register')))}>Click Here</button></td>
      <td>Wave Optics</td>
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdatereleven)(navigate('/register')))}>Click Here</button></td>
      <td>General Principles of Metullurgy</td>
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdaterthirteen)(navigate('/register')))}>Click Here</button></td>
      <td>Morphology Of Flowering Plants</td>
      <td style={mystyl}><button style={mstyle} onClick={()=>((props.testcodeupdaterfour)(navigate('/register')))}>Click Here</button></td>
    </tr>
  </tbody>
</table>
<br></br>
<div style={bStylef}><div style={bStylei}>
  Contact Us:-<b>help.vectorise@gmail.com</b><br></br>
    &copy; Vectorise,All rights reserved
</div></div>
  </>
)
}

const mapStateToProps=state=>{
 return{
  
      seconds:state.seconds,
      testcode:state.testcode,
      header:state.header
 }
}
const mapDispatchToProps=dispatch=>{
 return{
           timerUpdate : time => dispatch(timerUpdate(time)),
           testcodeupdater:()=>dispatch(testcodeupdater()),
           testcodeupdaterone:()=>dispatch(testcodeupdaterone()),
           testcodeupdatertwo:()=>dispatch(testcodeupdatertwo()),
           testcodeupdaterthree:()=>dispatch(testcodeupdaterthree()),
           testcodeupdaterfour:()=>dispatch(testcodeupdaterfour()),
           testcodeupdaterfive:()=>dispatch(testcodeupdaterfive()),
           testcodeupdatersix:()=>dispatch(testcodeupdatersix()),
           testcodeupdaterseven:()=>dispatch(testcodeupdaterseven()),
           testcodeupdatereight:()=>dispatch(testcodeupdatereight()),
           testcodeupdaternine:()=>dispatch(testcodeupdaternine()),
           testcodeupdaterten:()=>dispatch(testcodeupdaterten()),
           testcodeupdatereleven:()=>dispatch(testcodeupdatereleven()),
           testcodeupdatertwelve:()=>dispatch(testcodeupdatertwelve()),
           testcodeupdaterthirteen:()=>dispatch(testcodeupdaterthirteen()),
           testcodeupdaterfourteen:()=>dispatch(testcodeupdaterfourteen()),
           testcodeupdaterfifteen:()=>dispatch(testcodeupdaterfifteen()),
           testcodeupdatersixteen:()=>dispatch(testcodeupdatersixteen()),
           testcodeupdaterseventeen:()=>dispatch(testcodeupdaterseventeen()),
           testcodeupdatereighteen:()=>dispatch(testcodeupdatereighteen()),
           testcodeupdaternineteen:()=>dispatch(testcodeupdaternineteen()),
           

    
 }

   }
 export default connect(mapStateToProps,mapDispatchToProps) (Firstpage)
