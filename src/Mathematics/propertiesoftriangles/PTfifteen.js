import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAfourteen,optBfourteen,optCfourteen,optDfourteen,btnOnefourteen,btnTwofourteen,btnThreefourteen,btnFourfourteen,statUpdatefourteen,statUpdateAfourteen,statUpdateKfourteen,statUpdateMfourteen,statUpdateNfourteen,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import PTtimer from './PTtimer'
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function PTfifteen(props) {
  const logoStyle = { 
    "margin-left":"10px",
    "align":"center",
    "border-radius":"25%",
    border:"1px solid purple"
  };
  const hStyle = {
    "height":"109px",
    "text-align":"center"
  };
  const bStyle = {
     "background-color":"purple",
     width:"1520px",
  };
  const wStyle = {
    "width": "295px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const navigate = useNavigate()  
    var stat=props.statusfourteen;
    var opt=props.optionfourteen

  const [optionfourteen, setOptionfourteen] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionfourteen(event.target.value);
    
  }
  
function optionChange(){
 if(optionfourteen==="a"){
   props.optAfourteen()
 }
 if(optionfourteen==="b"){
   props.optBfourteen()
 }
 if(optionfourteen==="c"){
   props.optCfourteen()
 }
 if(optionfourteen==="d"){
   props.optDfourteen()
 }
}

 useEffect(()=>{
  setOptionfourteen(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionfourteen===""){
  props.nextOne();
  props.statUpdatefourteen();
  props.btnOnefourteen()
  
 }
 
  else if (optionfourteen==="a"){
   props.nextTwo();
   props.statUpdateAfourteen();
   props.btnFourfourteen()
  
   
  }
  else if (optionfourteen==="b"){
    props.nextTwo();
    props.statUpdateAfourteen();
    props.btnFourfourteen()
   }
   else if (optionfourteen==="c"){
    props.nextTwo();
    props.statUpdateAfourteen();
    props.btnFourfourteen()
   }
   else if (optionfourteen==="d"){
    props.nextTwo();
    props.statUpdateAfourteen();
    props.btnFourfourteen()
   }}
   else if (stat==="Not Answered"){
     if(optionfourteen===""){
    props.nextThree();
    props.statUpdateKfourteen();
    props.btnOnefourteen()
    
   }
   
    else if (optionfourteen==="a"){
     props.nextFour();
     props.statUpdateAfourteen();
     props.btnFourfourteen()
     
    }
    else if (optionfourteen==="b"){
      props.nextFour();
      props.statUpdateAfourteen();
      props.btnFourfourteen()
      
     }
     else if (optionfourteen==="c"){
      props.nextFour();
      props.statUpdateAfourteen();
      props.btnFourfourteen()
      
     }
     else if ( optionfourteen==="d"){
      props.nextFour();
      props.statUpdateAfourteen();
      props.btnFourfourteen()
      
     }}
     else if (stat==="Marked"){
     if(optionfourteen===""){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnThreefourteen()
      
     }
          else if (optionfourteen==="a"){
      props.mfrFive();
      props.statUpdateNfourteen();
      props.btnThreefourteen()

     }
     else if (optionfourteen==="b"){
       props.mfrFive();
       props.statUpdateNfourteen();
       props.btnThreefourteen()

      }
      else if (optionfourteen==="c"){
       props.mfrFive();
       props.statUpdateNfourteen();
       props.btnThreefourteen()

      }
      else if (optionfourteen==="d"){
       props.mfrFive();
       props.statUpdateNfourteen();
       props.btnThreefourteen()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionfourteen==="a"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnThreefourteen()

      
     }
     else if (optionfourteen==="b"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnThreefourteen() 
     }
     else if (optionfourteen==="c"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnThreefourteen()
     }
     else if (optionfourteen==="d"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnThreefourteen()
     }}
     else if(stat==="Answered"){
     if (optionfourteen==="a"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()

      
     }
     else if (optionfourteen==="b"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()

      
     }
     else if ( optionfourteen==="c"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()
      
     }
     else if (optionfourteen==="d"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionfourteen===""){
  props.mfrOne();
  props.statUpdateMfourteen();
  props.btnTwofourteen()
 }
 
  else if (optionfourteen==="a"){
   props.mfrTwo();
   props.statUpdateNfourteen();
   props.btnThreefourteen()
  }
  else if (optionfourteen==="b"){
    props.mfrTwo();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
  

   }
   else if (optionfourteen==="c"){
    props.mfrTwo();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
  
   }
   else if (optionfourteen==="d"){
    props.mfrTwo();
    props.statUpdateNfourteen();
    props.btnThreefourteen()

   }}
  
 else if (stat==="Not Answered"){
   if(optionfourteen===""){
  props.mfrThree();
  props.statUpdateMfourteen();
  props.btnTwofourteen();
 }
 else if (optionfourteen==="a"){
  props.mfrFour();
  props.statUpdateNfourteen();
  props.btnThreefourteen()
 }
 else if (optionfourteen==="b"){
   props.mfrFour();
   props.statUpdateNfourteen();
   props.btnThreefourteen()
  }
  else if (optionfourteen==="c"){
   props.mfrFour();
   props.statUpdateNfourteen();
   props.btnThreefourteen()
  }
  else if (optionfourteen==="d"){
   props.mfrFour();
   props.statUpdateNfourteen();
  props.btnThreefourteen()
  }}
  else if (stat==="Marked"){
    if(optionfourteen===""){
    props.nextThree();
    props.statUpdateKfourteen();
    props.btnTwofourteen();
   }
   else if (optionfourteen==="a"){
    props.mfrFive();
    props.statUpdateNfourteen();
    props.btnThreefourteen()


   }
   else if (optionfourteen==="b"){
    props.mfrFive();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="c"){
    props.mfrFive();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="d"){
    props.mfrFive();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
    }}
   else if (stat==="Marked For Review"){
     if(optionfourteen==="a"){
    props.nextThree();
    props.statUpdateKfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="b"){
    props.nextThree();
    props.statUpdateKfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="c"){
    props.nextThree();
    props.statUpdateKfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="d"){
    props.nextThree();
    props.statUpdateKfourteen();
    props.btnThreefourteen()
   }}
   else if (stat==="Answered"){
     if(optionfourteen==="a"){
    props.mfrSix();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="b"){
    props.mfrSix();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="c"){
    props.mfrSix();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="d"){
    props.mfrSix();
    props.statUpdateNfourteen();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionfourteen===""){
    props.nexttwo();
    props.statUpdatefourteen();
    props.btnOnefourteen()
  }
  
   else if (optionfourteen==="a"){
    props.nextTwo();
    props.statUpdateAfourteen();
    props.btnFourfourteen()
   }
   else if (optionfourteen==="b"){
     props.nextTwo();
     props.statUpdateAfourteen();
     props.btnFourfourteen()
    }
    else if (optionfourteen==="c"){
     props.nextTwo();
     props.statUpdateAfourteen();
     props.btnFourfourteen()
    }
    else if (optionfourteen==="d"){
     props.nextTwo();
     props.statUpdateAfourteen();
     props.btnFourfourteen()
    }}
   
  else if (stat==="Not Answered"){
    if(optionfourteen===""){
   props.nextThree();
   props.statUpdateKfourteen();
   props.btnOnefourteen()
  }
  else if (optionfourteen==="a"){
   props.nextFour();
   props.statUpdateAfourteen();
   props.btnFourfourteen()
  }
  else if (optionfourteen==="b"){
    props.nextFour();
    props.statUpdateAfourteen();
    props.btnFourfourteen()
   }
   else if (optionfourteen==="c"){
    props.nextFour();
    props.statUpdateAfourteen();
    props.btnFourfourteen()
   }
   else if (optionfourteen==="d"){
    props.nextFour();
    props.statUpdateAfourteen();
    props.btnFourfourteen()
   }}
   else if (stat==="Marked"){
     if(optionfourteen===""){
     props.nextThree();
     props.statUpdateKfourteen();
     props.btnTwofourteen()
    }
    else if (optionfourteen==="a"){
     props.mfrFive();
     props.statUpdateNfourteen();
     props.btnThreefourteen()
    }
    else if (optionfourteen==="b"){
     props.mfrFive();
     props.statUpdateNfourteen();
     props.btnThreefourteen()
    }
    else if ( optionfourteen==="c"){
     props.mfrFive();
     props.statUpdateNfourteen();
     props.btnThreefourteen()
    }
    else if ( optionfourteen==="d"){
     props.mfrFive();
     props.statUpdateNfourteen();
     props.btnThreefourteen()
      }}
    else if (stat==="Marked For Review"){
      if(optionfourteen==="a"){
     props.mfrSeven();
     props.statUpdateAfourteen();
     props.btnFourfourteen()
    }
    else if (optionfourteen==="b"){
      props.mfrSeventwo();
      props.statUpdateAfourteen();
      props.btnFourfourteen()
    }
    else if (optionfourteen==="c"){
      props.mfrSeven();
      props.statUpdateAfourteen();
      props.btnFourfourteen()
    }
    else if ( optionfourteen==="d"){
      props.mfrSeven();
      props.statUpdateAfourteen();
      props.btnFourfourteen()
    }}
    else if (stat==="Answered"){
      if(optionfourteen==="a"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()
    }
    else if (optionfourteen==="b"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()
    }
    else if (optionfourteen==="c"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()
    }
    else if (optionfourteen==="d"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()
          }}
    optionChange()
 }

    return (
    <div>
    <div className={props.header} style={bStyle}>
     <h1 style={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1> 
           </div>
    <div className= {props.total}>
     <div className={props.left}>
     <p style={wStyle}>Test Name: <b>Properties of Triangles</b></p>
     <p style={wStyle1}>Name of the Candidate: <b>{props.name}</b></p>  
    <form>
    <p><i>Question No.15</i><br></br>  If {'\u25b3'}ABC is such that {'\u2220'}A=90<sup>o</sup> and {'\u2220'}B{'\u2260'}{'\u2220'}C, then <br>
    </br> [(b<sup>2</sup>+c<sup>2</sup>)/(b<sup>2</sup>-c<sup>2</sup>)] sin(B-C) =</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionfourteen === 'a'}
          onClick={handleChange}
        /> 1/3
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionfourteen === 'b'}
          onClick={handleChange}
        /> 1/2
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionfourteen === 'c'}
          onClick={handleChange}
        /> 1
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionfourteen === 'd'}
          onClick={handleChange}
        /> 3/2
      </div>
       
      
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/PTsixteen'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/PTsixteen'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/PTsixteen'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/PTfourteen'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><PTtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/PTconfirm'))}>Submit Test</button>
        </div>
    </div>
    </div>
    
  )
}

const mapStateToProps=state=>{
return{
  notVisited:state.notVisited,
  notAnswered:state.notAnswered,
  marked:state.marked,
  markedForReview:state.markedForReview,
  answered:state.answered,
     statusfourteen:state.statusfourteen,
     optionfourteen:state.optionfourteen,
     BHealthanddiseaseSixteen:state.BHealthanddiseaseSixteen,
  BHealthanddiseaseSixteenA:state.BHealthanddiseaseSixteenA,
  BHealthanddiseaseSixteenB:state.BHealthanddiseaseSixteenB,
  BHealthanddiseaseSixteenC:state.BHealthanddiseaseSixteenC,
  BHealthanddiseaseSixteenD:state.BHealthanddiseaseSixteenD,
  left:state.left,
  right:state.right,
  total:state.total,
  header:state.header,
  buttons:state.buttons,
  buttonone:state.buttonone,
  buttontwo:state.buttontwo,
  buttonthree:state.buttonthree,
  buttonfour:state.buttonfour,
  title:state.title,
  timerdiv:state.timerdiv,
  divtwo:state.divtwo,
  divA:state.divA, name:state.name
}

}
const mapDispatchToProps=dispatch=>{
return{
    nextOne:()=>dispatch(nextOne()),
    nextTwo:()=>dispatch(nextTwo()),
    nextThree:()=>dispatch(nextThree()),
    nextFour:()=>dispatch(nextFour()),
    mfrOne:()=>dispatch(mfrOne()),
    mfrTwo:()=>dispatch(mfrTwo()),
    mfrThree:()=>dispatch(mfrThree()),
    mfrFour:()=>dispatch(mfrFour()),
    mfrFive:()=>dispatch(mfrFive()),
    mfrSix:()=>dispatch(mfrSix()),
    mfrSeven:()=>dispatch(mfrSeven()),
    optAfourteen:()=>dispatch(optAfourteen()),
    optBfourteen:()=>dispatch(optBfourteen()),
    optCfourteen:()=>dispatch(optCfourteen()),
    optDfourteen:()=>dispatch(optDfourteen()),
    statUpdatefourteen:()=>dispatch(statUpdatefourteen()),
    statUpdateAfourteen:()=>dispatch(statUpdateAfourteen()),
    statUpdateMfourteen:()=>dispatch(statUpdateMfourteen()),
    statUpdateNfourteen:()=>dispatch(statUpdateNfourteen()),
    statUpdateKfourteen:()=>dispatch(statUpdateKfourteen()),
    btnOnefourteen:()=>dispatch(btnOnefourteen()),
    btnTwofourteen:()=>dispatch(btnTwofourteen()),
    btnThreefourteen:()=>dispatch(btnThreefourteen()),
    btnFourfourteen:()=>dispatch(btnFourfourteen()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (PTfifteen)