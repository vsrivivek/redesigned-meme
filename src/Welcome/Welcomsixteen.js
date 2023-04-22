import React from 'react'
import { useNavigate } from 'react-router-dom'
 import { timerUpdate } from '../redux'
 import { connect } from 'react-redux'
 import Logo from '../redux/Images/Logo.jpg'
 import { Routes, Route } from 'react-router-dom';

 

 function Welcomsixteen(props) {
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
    const myStyle = {
          "padding":"0 0 0 135px"  
        };
    const bstyle = {
          "margin":"0 0 0 725px",
          "width": "150px",
  "background-color": "green",
  padding: "5px",
  "font-size": "larger",
        };
    const hStyle1= {
          "margin":"0 0 0 568px",
         "font-size":"30px",
         "font-style": "oblique",
         "width":"450px"
         }
    const fStyle= {
          "font-size":"18px",
          "margin-right":"90px",
          "font-style":"sans-serif",
          "font-family": "Times New Roman", 
          "width":"1250px"
          }        
    const mstyle= {
      "color":"red",  
       "margin":"30px",
       "width":"450px"
            }
    const cstyle= {
  "margin":"30px", 
  "width":"1470px",
  "text-align":"justify",
              }      
  const navigate = useNavigate();
    const [time,setTime]=React.useState("0");
const[checked,setChecked]=React.useState(false);
  const[errmsg,setErrmsg]=React.useState("")
  //       const date=new Date();

  //  let timer = date.getHours() + ":" + date.getMinutes()+ ":" + date.getSeconds();
  //         var a = timer.split(':'); 
  //     var timeOne = ((+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]))*1000; 

 const getTime=()=>{
  const datea=new Date();
  let timerone = datea.getHours() + ":" + datea.getMinutes()+ ":" + datea.getSeconds();
         var aone = timerone.split(':'); 
     var timeThree = ((+aone[0]) * 60 * 60 + (+aone[1]) * 60 + (+aone[2]))*1000; 
  setTime(timeThree)
  setChecked(true)
}

   let timeTwo = time+2402000; 
    // let timeTwo = time+120200; 
       
const clickHandler= function handleClick(){
  if(checked===true){
    (props.timerUpdate(timeTwo)(navigate('/QXone')))
    // props.timerUpdate(timeTwo)
    // navigate('/QXone')
  }else if (checked===false){
    setErrmsg("* Please accept terms and conditions before proceeding.")
  }
}
    // var timeTwo = timeOne+10000; 

      
 return (<>
 <div className={props.header} style={bStyle}>
     <h1 style={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1>
           
           </div>
           <div style={myStyle}>
           <p style={fStyle}>Hi <b>{props.name}</b>,</p>
 <p style={fStyle}> Read the following instructions carefully before taking the test. </p>
 <ol style={fStyle}>
    <li>You can start the test by clicking the green button provided below the instructions.</li>
     <li>The test contains 40 questions for maximum marks 40. All questions carry equal marks.There is no negative marking. </li>
     <li>The test duration is 40 minutes.The timer is provided on the Right-Upper corner of the screen. </li>
     <li>The test gets submitted automatically after the expiry of the alotted time. You can submit the test before the expiry of the duration by clicking the button provide for the purpose.</li>
     <li>At any point of time only one question will appear on the screen. You can navigate from one question to another by clicking appropriate buttons provided.  </li>
     <li>All the questions 'answered' and 'Marked for Review' will be evaluated.</li>
     <li>Donot press 'Refresh' button during the test, which may logout the session.</li>
     <li>Once the test is submitted, you will be directed to the score page. From there you can navigate to summary page, which you download for future reference.</li>

 </ol><br></br>
 <p style={hStyle1} >Good Luck!!!</p>
 </div><br></br>
 <div style ={cstyle}>
 <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          onChange={getTime}
        />
         I have read and understood the instructions. All computer hardware allotted to me are in proper working condition. I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc. /any prohibited material with me into the Examination Hall.I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future Tests / Examinations
      </div>
  <p style ={mstyle}>{errmsg}</p>
 {/* <h3>Hi {props.name}</h3> */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/DYone')))}>Disease</button> */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/BCone')))}>Biological Classification</button> */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/PKone')))}>Plant Kingdom</button> */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/AKone')))}>Animal Kingdom</button> */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/MFone')))}>Morphology Of Flowering Plants</button> */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/Fone')))}>Functions</button> */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/MIone')))}>Mathematical Induction</button> */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/AVone')))}>Addition Of Vectors</button>  */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/PVone')))}>Products Of Vectors</button> */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/PTone')))}>Properties of Triangles</button> */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/ZPone')))}>Solutions</button> */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/ZXone')))}>Wave Optics</button> */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/ZQone')))}>Electrochemistry</button> */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/ZTone')))}>General Principles of Metullurgy</button> */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/YMone')))}>p-Block Elements: Group 17 Elements</button> */}
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/YTone')))}>Alkali and Alkaline Earth Metals</button> */}
  <button style={bstyle} onClick={()=>clickHandler()}>Oscillations</button>
  {/* <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/QMone')))}>Gravitation</button>
  <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/TQone')))}>Heat Transfer</button>
  <button onClick={()=>(props.timerUpdate(timeTwo)(navigate('/ZDone')))}>Electrostatics</button>   */}            
   
   
      </>
)
}

const mapStateToProps=state=>{
 return{
  
      seconds:state.seconds,
      name:state.name
 }
}
const mapDispatchToProps=dispatch=>{
 return{
           timerUpdate : time => dispatch(timerUpdate(time))
    
 }

   }
 export default connect(mapStateToProps,mapDispatchToProps) (Welcomsixteen)
