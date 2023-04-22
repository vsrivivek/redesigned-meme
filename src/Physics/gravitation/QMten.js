import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAnine,optBnine,optCnine,optDnine,btnOnenine,btnTwonine,btnThreenine,btnFournine,statUpdatenine,statUpdateAnine,statUpdateKnine,statUpdateMnine,statUpdateNnine,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import QMtimer from './QMtimer'
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function QMten(props) {
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
    "width": "195px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const navigate = useNavigate()  
    var stat=props.statusnine;
    var opt=props.optionnine

  const [optionnine, setOptionnine] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionnine(event.target.value);
    
  }
  
function optionChange(){
 if(optionnine==="a"){
   props.optAnine()
 }
 if(optionnine==="b"){
   props.optBnine()
 }
 if(optionnine==="c"){
   props.optCnine()
 }
 if(optionnine==="d"){
   props.optDnine()
 }
}

 useEffect(()=>{
  setOptionnine(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionnine===""){
  props.nextOne();
  props.statUpdatenine();
  props.btnOnenine()
  
 }
 
  else if (optionnine==="a"){
   props.nextTwo();
   props.statUpdateAnine();
   props.btnFournine()
  
   
  }
  else if (optionnine==="b"){
    props.nextTwo();
    props.statUpdateAnine();
    props.btnFournine()
   }
   else if (optionnine==="c"){
    props.nextTwo();
    props.statUpdateAnine();
    props.btnFournine()
   }
   else if (optionnine==="d"){
    props.nextTwo();
    props.statUpdateAnine();
    props.btnFournine()
   }}
   else if (stat==="Not Answered"){
     if(optionnine===""){
    props.nextThree();
    props.statUpdateKnine();
    props.btnOnenine()
    
   }
   
    else if (optionnine==="a"){
     props.nextFour();
     props.statUpdateAnine();
     props.btnFournine()
     
    }
    else if (optionnine==="b"){
      props.nextFour();
      props.statUpdateAnine();
      props.btnFournine()
      
     }
     else if (optionnine==="c"){
      props.nextFour();
      props.statUpdateAnine();
      props.btnFournine()
      
     }
     else if ( optionnine==="d"){
      props.nextFour();
      props.statUpdateAnine();
      props.btnFournine()
      
     }}
     else if (stat==="Marked"){
     if(optionnine===""){
      props.nextThree();
      props.statUpdateKnine();
      props.btnThreenine()
      
     }
          else if (optionnine==="a"){
      props.mfrFive();
      props.statUpdateNnine();
      props.btnThreenine()

     }
     else if (optionnine==="b"){
       props.mfrFive();
       props.statUpdateNnine();
       props.btnThreenine()

      }
      else if (optionnine==="c"){
       props.mfrFive();
       props.statUpdateNnine();
       props.btnThreenine()

      }
      else if (optionnine==="d"){
       props.mfrFive();
       props.statUpdateNnine();
       props.btnThreenine()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionnine==="a"){
      props.nextThree();
      props.statUpdateKnine();
      props.btnThreenine()

      
     }
     else if (optionnine==="b"){
      props.nextThree();
      props.statUpdateKnine();
      props.btnThreenine() 
     }
     else if (optionnine==="c"){
      props.nextThree();
      props.statUpdateKnine();
      props.btnThreenine()
     }
     else if (optionnine==="d"){
      props.nextThree();
      props.statUpdateKnine();
      props.btnThreenine()
     }}
     else if(stat==="Answered"){
     if (optionnine==="a"){
      props.nextThree();
      props.statUpdateKnine();
      props.btnFournine()

      
     }
     else if (optionnine==="b"){
      props.nextThree();
      props.statUpdateKnine();
      props.btnFournine()

      
     }
     else if ( optionnine==="c"){
      props.nextThree();
      props.statUpdateKnine();
      props.btnFournine()
      
     }
     else if (optionnine==="d"){
      props.nextThree();
      props.statUpdateKnine();
      props.btnFournine()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionnine===""){
  props.mfrOne();
  props.statUpdateMnine();
  props.btnTwonine()
 }
 
  else if (optionnine==="a"){
   props.mfrTwo();
   props.statUpdateNnine();
   props.btnThreenine()
  }
  else if (optionnine==="b"){
    props.mfrTwo();
    props.statUpdateNnine();
    props.btnThreenine()
  

   }
   else if (optionnine==="c"){
    props.mfrTwo();
    props.statUpdateNnine();
    props.btnThreenine()
  
   }
   else if (optionnine==="d"){
    props.mfrTwo();
    props.statUpdateNnine();
    props.btnThreenine()

   }}
  
 else if (stat==="Not Answered"){
   if(optionnine===""){
  props.mfrThree();
  props.statUpdateMnine();
  props.btnTwonine();
 }
 else if (optionnine==="a"){
  props.mfrFour();
  props.statUpdateNnine();
  props.btnThreenine()
 }
 else if (optionnine==="b"){
   props.mfrFour();
   props.statUpdateNnine();
   props.btnThreenine()
  }
  else if (optionnine==="c"){
   props.mfrFour();
   props.statUpdateNnine();
   props.btnThreenine()
  }
  else if (optionnine==="d"){
   props.mfrFour();
   props.statUpdateNnine();
  props.btnThreenine()
  }}
  else if (stat==="Marked"){
    if(optionnine===""){
    props.nextThree();
    props.statUpdateKnine();
    props.btnTwonine();
   }
   else if (optionnine==="a"){
    props.mfrFive();
    props.statUpdateNnine();
    props.btnThreenine()


   }
   else if (optionnine==="b"){
    props.mfrFive();
    props.statUpdateNnine();
    props.btnThreenine()
   }
   else if (optionnine==="c"){
    props.mfrFive();
    props.statUpdateNnine();
    props.btnThreenine()
   }
   else if (optionnine==="d"){
    props.mfrFive();
    props.statUpdateNnine();
    props.btnThreenine()
    }}
   else if (stat==="Marked For Review"){
     if(optionnine==="a"){
    props.nextThree();
    props.statUpdateKnine();
    props.btnThreenine()
   }
   else if (optionnine==="b"){
    props.nextThree();
    props.statUpdateKnine();
    props.btnThreenine()
   }
   else if (optionnine==="c"){
    props.nextThree();
    props.statUpdateKnine();
    props.btnThreenine()
   }
   else if (optionnine==="d"){
    props.nextThree();
    props.statUpdateKnine();
    props.btnThreenine()
   }}
   else if (stat==="Answered"){
     if(optionnine==="a"){
    props.mfrSix();
    props.statUpdateNnine();
    props.btnThreenine()
   }
   else if (optionnine==="b"){
    props.mfrSix();
    props.statUpdateNnine();
    props.btnThreenine()
   }
   else if (optionnine==="c"){
    props.mfrSix();
    props.statUpdateNnine();
    props.btnThreenine()
   }
   else if (optionnine==="d"){
    props.mfrSix();
    props.statUpdateNnine();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionnine===""){
    props.nexttwo();
    props.statUpdatenine();
    props.btnOnenine()
  }
  
   else if (optionnine==="a"){
    props.nextTwo();
    props.statUpdateAnine();
    props.btnFournine()
   }
   else if (optionnine==="b"){
     props.nextTwo();
     props.statUpdateAnine();
     props.btnFournine()
    }
    else if (optionnine==="c"){
     props.nextTwo();
     props.statUpdateAnine();
     props.btnFournine()
    }
    else if (optionnine==="d"){
     props.nextTwo();
     props.statUpdateAnine();
     props.btnFournine()
    }}
   
  else if (stat==="Not Answered"){
    if(optionnine===""){
   props.nextThree();
   props.statUpdateKnine();
   props.btnOnenine()
  }
  else if (optionnine==="a"){
   props.nextFour();
   props.statUpdateAnine();
   props.btnFournine()
  }
  else if (optionnine==="b"){
    props.nextFour();
    props.statUpdateAnine();
    props.btnFournine()
   }
   else if (optionnine==="c"){
    props.nextFour();
    props.statUpdateAnine();
    props.btnFournine()
   }
   else if (optionnine==="d"){
    props.nextFour();
    props.statUpdateAnine();
    props.btnFournine()
   }}
   else if (stat==="Marked"){
     if(optionnine===""){
     props.nextThree();
     props.statUpdateKnine();
     props.btnTwonine()
    }
    else if (optionnine==="a"){
     props.mfrFive();
     props.statUpdateNnine();
     props.btnThreenine()
    }
    else if (optionnine==="b"){
     props.mfrFive();
     props.statUpdateNnine();
     props.btnThreenine()
    }
    else if ( optionnine==="c"){
     props.mfrFive();
     props.statUpdateNnine();
     props.btnThreenine()
    }
    else if ( optionnine==="d"){
     props.mfrFive();
     props.statUpdateNnine();
     props.btnThreenine()
      }}
    else if (stat==="Marked For Review"){
      if(optionnine==="a"){
     props.mfrSeven();
     props.statUpdateAnine();
     props.btnFournine()
    }
    else if (optionnine==="b"){
      props.mfrSeventwo();
      props.statUpdateAnine();
      props.btnFournine()
    }
    else if (optionnine==="c"){
      props.mfrSeven();
      props.statUpdateAnine();
      props.btnFournine()
    }
    else if ( optionnine==="d"){
      props.mfrSeven();
      props.statUpdateAnine();
      props.btnFournine()
    }}
    else if (stat==="Answered"){
      if(optionnine==="a"){
      props.nextThree();
      props.statUpdateKnine();
      props.btnFournine()
    }
    else if (optionnine==="b"){
      props.nextThree();
      props.statUpdateKnine();
      props.btnFournine()
    }
    else if (optionnine==="c"){
      props.nextThree();
      props.statUpdateKnine();
      props.btnFournine()
    }
    else if (optionnine==="d"){
      props.nextThree();
      props.statUpdateKnine();
      props.btnFournine()
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
     <p style={wStyle}>Test Name: <b>Gravitation</b></p>
     <p style={wStyle1}>Name of the Candidate: <b>{props.name}</b></p>  
    <form>
    <p><i>Question No.10</i><br></br> In the case of inertial frame of reference<br></br>
    a) Newton's law of motion are not valid<br></br>
    b) The coordinate system may be in accelerated motion<br></br>
    c) A body stays at rest if the resultant force on it is zero<br></br>
    d) The co-ordinate system attached to it may be in uniform motion<br></br>
    </p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionnine === 'a'}
          onClick={handleChange}
        /> a & c are true
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionnine === 'b'}
          onClick={handleChange}
        /> b & d are true
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionnine === 'c'}
          onClick={handleChange}
        /> a, b & c are true                                  
      <div>
        <input
          type="radio"
          value="d"
          checked={optionnine === 'd'}
          onClick={handleChange}
        /> c & d are true  
          </div>
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/QMeleven'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/QMeleven'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/QMeleven'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/QMnine'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><QMtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/QMconfirm'))}>Submit Test</button>
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
     statusnine:state.statusnine,
     optionnine:state.optionnine,
     BHealthanddiseaseEleven:state.BHealthanddiseaseEleven,
  BHealthanddiseaseElevenA:state.BHealthanddiseaseElevenA,
  BHealthanddiseaseElevenB:state.BHealthanddiseaseElevenB,
  BHealthanddiseaseElevenC:state.BHealthanddiseaseElevenC,
  BHealthanddiseaseElevenD:state.BHealthanddiseaseElevenD,
  optionnine:state.optionnine,
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
  divA:state.divA,
  name:state.name

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
    optAnine:()=>dispatch(optAnine()),
    optBnine:()=>dispatch(optBnine()),
    optCnine:()=>dispatch(optCnine()),
    optDnine:()=>dispatch(optDnine()),
    statUpdatenine:()=>dispatch(statUpdatenine()),
    statUpdateAnine:()=>dispatch(statUpdateAnine()),
    statUpdateMnine:()=>dispatch(statUpdateMnine()),
    statUpdateNnine:()=>dispatch(statUpdateNnine()),
    statUpdateKnine:()=>dispatch(statUpdateKnine()),
    btnOnenine:()=>dispatch(btnOnenine()),
    btnTwonine:()=>dispatch(btnTwonine()),
    btnThreenine:()=>dispatch(btnThreenine()),
    btnFournine:()=>dispatch(btnFournine()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (QMten)