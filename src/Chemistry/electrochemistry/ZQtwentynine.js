import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwentyeight,optBtwentyeight,optCtwentyeight,optDtwentyeight,btnOnetwentyeight,btnTwotwentyeight,btnThreetwentyeight,btnFourtwentyeight,statUpdatetwentyeight,statUpdateAtwentyeight,statUpdateKtwentyeight,statUpdateMtwentyeight,statUpdateNtwentyeight,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
// import Timer from '../../components/Timer ';
import ZQtimer from './ZQtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function ZQtwentynine(props) {
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
    "width": "275px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const navigate = useNavigate()  
    var stat=props.statustwentyeight;
    var opt=props.optiontwentyeight

  const [optiontwentyeight, setOptiontwentyeight] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptiontwentyeight(event.target.value);
    
  }
  
function optionChange(){
 if(optiontwentyeight==="a"){
   props.optAtwentyeight()
 }
 if(optiontwentyeight==="b"){
   props.optBtwentyeight()
 }
 if(optiontwentyeight==="c"){
   props.optCtwentyeight()
 }
 if(optiontwentyeight==="d"){
   props.optDtwentyeight()
 }
}

 useEffect(()=>{
  setOptiontwentyeight(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optiontwentyeight===""){
  props.nextOne();
  props.statUpdatetwentyeight();
  props.btnOnetwentyeight()
  
 }
 
  else if (optiontwentyeight==="a"){
   props.nextTwo();
   props.statUpdateAtwentyeight();
   props.btnFourtwentyeight()
  
   
  }
  else if (optiontwentyeight==="b"){
    props.nextTwo();
    props.statUpdateAtwentyeight();
    props.btnFourtwentyeight()
   }
   else if (optiontwentyeight==="c"){
    props.nextTwo();
    props.statUpdateAtwentyeight();
    props.btnFourtwentyeight()
   }
   else if (optiontwentyeight==="d"){
    props.nextTwo();
    props.statUpdateAtwentyeight();
    props.btnFourtwentyeight()
   }}
   else if (stat==="Not Answered"){
     if(optiontwentyeight===""){
    props.nextThree();
    props.statUpdateKtwentyeight();
    props.btnOnetwentyeight()
    
   }
   
    else if (optiontwentyeight==="a"){
     props.nextFour();
     props.statUpdateAtwentyeight();
     props.btnFourtwentyeight()
     
    }
    else if (optiontwentyeight==="b"){
      props.nextFour();
      props.statUpdateAtwentyeight();
      props.btnFourtwentyeight()
      
     }
     else if (optiontwentyeight==="c"){
      props.nextFour();
      props.statUpdateAtwentyeight();
      props.btnFourtwentyeight()
      
     }
     else if ( optiontwentyeight==="d"){
      props.nextFour();
      props.statUpdateAtwentyeight();
      props.btnFourtwentyeight()
      
     }}
     else if (stat==="Marked"){
     if(optiontwentyeight===""){
      props.nextThree();
      props.statUpdateKtwentyeight();
      props.btnThreetwentyeight()
      
     }
          else if (optiontwentyeight==="a"){
      props.mfrFive();
      props.statUpdateNtwentyeight();
      props.btnThreetwentyeight()

     }
     else if (optiontwentyeight==="b"){
       props.mfrFive();
       props.statUpdateNtwentyeight();
       props.btnThreetwentyeight()

      }
      else if (optiontwentyeight==="c"){
       props.mfrFive();
       props.statUpdateNtwentyeight();
       props.btnThreetwentyeight()

      }
      else if (optiontwentyeight==="d"){
       props.mfrFive();
       props.statUpdateNtwentyeight();
       props.btnThreetwentyeight()

        }}
     
     else if (stat==="Marked For Review"){
     if(optiontwentyeight==="a"){
      props.nextThree();
      props.statUpdateKtwentyeight();
      props.btnThreetwentyeight()

      
     }
     else if (optiontwentyeight==="b"){
      props.nextThree();
      props.statUpdateKtwentyeight();
      props.btnThreetwentyeight() 
     }
     else if (optiontwentyeight==="c"){
      props.nextThree();
      props.statUpdateKtwentyeight();
      props.btnThreetwentyeight()
     }
     else if (optiontwentyeight==="d"){
      props.nextThree();
      props.statUpdateKtwentyeight();
      props.btnThreetwentyeight()
     }}
     else if(stat==="Answered"){
     if (optiontwentyeight==="a"){
      props.nextThree();
      props.statUpdateKtwentyeight();
      props.btnFourtwentyeight()

      
     }
     else if (optiontwentyeight==="b"){
      props.nextThree();
      props.statUpdateKtwentyeight();
      props.btnFourtwentyeight()

      
     }
     else if ( optiontwentyeight==="c"){
      props.nextThree();
      props.statUpdateKtwentyeight();
      props.btnFourtwentyeight()
      
     }
     else if (optiontwentyeight==="d"){
      props.nextThree();
      props.statUpdateKtwentyeight();
      props.btnFourtwentyeight()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optiontwentyeight===""){
  props.mfrOne();
  props.statUpdateMtwentyeight();
  props.btnTwotwentyeight()
 }
 
  else if (optiontwentyeight==="a"){
   props.mfrTwo();
   props.statUpdateNtwentyeight();
   props.btnThreetwentyeight()
  }
  else if (optiontwentyeight==="b"){
    props.mfrTwo();
    props.statUpdateNtwentyeight();
    props.btnThreetwentyeight()
  

   }
   else if (optiontwentyeight==="c"){
    props.mfrTwo();
    props.statUpdateNtwentyeight();
    props.btnThreetwentyeight()
  
   }
   else if (optiontwentyeight==="d"){
    props.mfrTwo();
    props.statUpdateNtwentyeight();
    props.btnThreetwentyeight()

   }}
  
 else if (stat==="Not Answered"){
   if(optiontwentyeight===""){
  props.mfrThree();
  props.statUpdateMtwentyeight();
  props.btnTwotwentyeight();
 }
 else if (optiontwentyeight==="a"){
  props.mfrFour();
  props.statUpdateNtwentyeight();
  props.btnThreetwentyeight()
 }
 else if (optiontwentyeight==="b"){
   props.mfrFour();
   props.statUpdateNtwentyeight();
   props.btnThreetwentyeight()
  }
  else if (optiontwentyeight==="c"){
   props.mfrFour();
   props.statUpdateNtwentyeight();
   props.btnThreetwentyeight()
  }
  else if (optiontwentyeight==="d"){
   props.mfrFour();
   props.statUpdateNtwentyeight();
  props.btnThreetwentyeight()
  }}
  else if (stat==="Marked"){
    if(optiontwentyeight===""){
    props.nextThree();
    props.statUpdateKtwentyeight();
    props.btnTwotwentyeight();
   }
   else if (optiontwentyeight==="a"){
    props.mfrFive();
    props.statUpdateNtwentyeight();
    props.btnThreetwentyeight()


   }
   else if (optiontwentyeight==="b"){
    props.mfrFive();
    props.statUpdateNtwentyeight();
    props.btnThreetwentyeight()
   }
   else if (optiontwentyeight==="c"){
    props.mfrFive();
    props.statUpdateNtwentyeight();
    props.btnThreetwentyeight()
   }
   else if (optiontwentyeight==="d"){
    props.mfrFive();
    props.statUpdateNtwentyeight();
    props.btnThreetwentyeight()
    }}
   else if (stat==="Marked For Review"){
     if(optiontwentyeight==="a"){
    props.nextThree();
    props.statUpdateKtwentyeight();
    props.btnThreetwentyeight()
   }
   else if (optiontwentyeight==="b"){
    props.nextThree();
    props.statUpdateKtwentyeight();
    props.btnThreetwentyeight()
   }
   else if (optiontwentyeight==="c"){
    props.nextThree();
    props.statUpdateKtwentyeight();
    props.btnThreetwentyeight()
   }
   else if (optiontwentyeight==="d"){
    props.nextThree();
    props.statUpdateKtwentyeight();
    props.btnThreetwentyeight()
   }}
   else if (stat==="Answered"){
     if(optiontwentyeight==="a"){
    props.mfrSix();
    props.statUpdateNtwentyeight();
    props.btnThreetwentyeight()
   }
   else if (optiontwentyeight==="b"){
    props.mfrSix();
    props.statUpdateNtwentyeight();
    props.btnThreetwentyeight()
   }
   else if (optiontwentyeight==="c"){
    props.mfrSix();
    props.statUpdateNtwentyeight();
    props.btnThreetwentyeight()
   }
   else if (optiontwentyeight==="d"){
    props.mfrSix();
    props.statUpdateNtwentyeight();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optiontwentyeight===""){
    props.nexttwo();
    props.statUpdatetwentyeight();
    props.btnOnetwentyeight()
  }
  
   else if (optiontwentyeight==="a"){
    props.nextTwo();
    props.statUpdateAtwentyeight();
    props.btnFourtwentyeight()
   }
   else if (optiontwentyeight==="b"){
     props.nextTwo();
     props.statUpdateAtwentyeight();
     props.btnFourtwentyeight()
    }
    else if (optiontwentyeight==="c"){
     props.nextTwo();
     props.statUpdateAtwentyeight();
     props.btnFourtwentyeight()
    }
    else if (optiontwentyeight==="d"){
     props.nextTwo();
     props.statUpdateAtwentyeight();
     props.btnFourtwentyeight()
    }}
   
  else if (stat==="Not Answered"){
    if(optiontwentyeight===""){
   props.nextThree();
   props.statUpdateKtwentyeight();
   props.btnOnetwentyeight()
  }
  else if (optiontwentyeight==="a"){
   props.nextFour();
   props.statUpdateAtwentyeight();
   props.btnFourtwentyeight()
  }
  else if (optiontwentyeight==="b"){
    props.nextFour();
    props.statUpdateAtwentyeight();
    props.btnFourtwentyeight()
   }
   else if (optiontwentyeight==="c"){
    props.nextFour();
    props.statUpdateAtwentyeight();
    props.btnFourtwentyeight()
   }
   else if (optiontwentyeight==="d"){
    props.nextFour();
    props.statUpdateAtwentyeight();
    props.btnFourtwentyeight()
   }}
   else if (stat==="Marked"){
     if(optiontwentyeight===""){
     props.nextThree();
     props.statUpdateKtwentyeight();
     props.btnTwotwentyeight()
    }
    else if (optiontwentyeight==="a"){
     props.mfrFive();
     props.statUpdateNtwentyeight();
     props.btnThreetwentyeight()
    }
    else if (optiontwentyeight==="b"){
     props.mfrFive();
     props.statUpdateNtwentyeight();
     props.btnThreetwentyeight()
    }
    else if ( optiontwentyeight==="c"){
     props.mfrFive();
     props.statUpdateNtwentyeight();
     props.btnThreetwentyeight()
    }
    else if ( optiontwentyeight==="d"){
     props.mfrFive();
     props.statUpdateNtwentyeight();
     props.btnThreetwentyeight()
      }}
    else if (stat==="Marked For Review"){
      if(optiontwentyeight==="a"){
     props.mfrSeven();
     props.statUpdateAtwentyeight();
     props.btnFourtwentyeight()
    }
    else if (optiontwentyeight==="b"){
      props.mfrSeventwo();
      props.statUpdateAtwentyeight();
      props.btnFourtwentyeight()
    }
    else if (optiontwentyeight==="c"){
      props.mfrSeven();
      props.statUpdateAtwentyeight();
      props.btnFourtwentyeight()
    }
    else if ( optiontwentyeight==="d"){
      props.mfrSeven();
      props.statUpdateAtwentyeight();
      props.btnFourtwentyeight()
    }}
    else if (stat==="Answered"){
      if(optiontwentyeight==="a"){
      props.nextThree();
      props.statUpdateKtwentyeight();
      props.btnFourtwentyeight()
    }
    else if (optiontwentyeight==="b"){
      props.nextThree();
      props.statUpdateKtwentyeight();
      props.btnFourtwentyeight()
    }
    else if (optiontwentyeight==="c"){
      props.nextThree();
      props.statUpdateKtwentyeight();
      props.btnFourtwentyeight()
    }
    else if (optiontwentyeight==="d"){
      props.nextThree();
      props.statUpdateKtwentyeight();
      props.btnFourtwentyeight()
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
     <p style={wStyle}>Test Name: <b>Electrochemistry</b></p>
     <p style={wStyle1}>Name Of the Candidate: <b>{props.name}</b></p> 
    <form>
    <p><i>Question No.29</i><br></br> Which of the following is the strongest oxidising agent<br></br>
    
    MnO<sup>-</sup><sub>4</sub>/Mn<sup>+2</sup>, E=+1.52V<br></br>
    Fe<sup>+3</sup>/Fe<sup>+2</sup>, E=+0.76V<br></br>
    BrO<sup>-</sup><sub>3</sub>/Br<sub>2</sub>, E=-1.50V<br></br>
    Cr<sub>2</sub>O<sub>7</sub><sup>-2</sup>/Cr<sup>+3</sup>, E=+1.33V<br></br>
    
    
    </p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwentyeight=== 'a'}
          onClick={handleChange}
        /> MnO<sup>-</sup><sub>4</sub>
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwentyeight === 'b'}
          onClick={handleChange}
        /> Fe<sup>+3</sup>
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwentyeight === 'c'}
          onClick={handleChange}
        /> BrO<sup>-</sup><sub>3</sub>
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwentyeight === 'd'}
          onClick={handleChange}
        /> Cr<sub>2</sub>O<sub>7</sub><sup>-2</sup>
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/ZQthirty'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/ZQthirty'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/ZQthirty'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/ZQtwentyeight'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><ZQtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/ZQconfirm'))}>Submit Test</button>
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
     statustwentyeight:state.statustwentyeight,
     optiontwentyeight:state.optiontwentyeight,
     BHealthanddiseaseThirtyone:state.BHealthanddiseaseThirtyone,
  BHealthanddiseaseThirtyoneA:state.BHealthanddiseaseThirtyoneA,
  BHealthanddiseaseThirtyoneB:state.BHealthanddiseaseThirtyoneB,
  BHealthanddiseaseThirtyoneC:state.BHealthanddiseaseThirtyoneC,
  BHealthanddiseaseThirtyoneD:state.BHealthanddiseaseThirtyoneD,
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
    optAtwentyeight:()=>dispatch(optAtwentyeight()),
    optBtwentyeight:()=>dispatch(optBtwentyeight()),
    optCtwentyeight:()=>dispatch(optCtwentyeight()),
    optDtwentyeight:()=>dispatch(optDtwentyeight()),
    statUpdatetwentyeight:()=>dispatch(statUpdatetwentyeight()),
    statUpdateAtwentyeight:()=>dispatch(statUpdateAtwentyeight()),
    statUpdateMtwentyeight:()=>dispatch(statUpdateMtwentyeight()),
    statUpdateNtwentyeight:()=>dispatch(statUpdateNtwentyeight()),
    statUpdateKtwentyeight:()=>dispatch(statUpdateKtwentyeight()),
    btnOnetwentyeight:()=>dispatch(btnOnetwentyeight()),
    btnTwotwentyeight:()=>dispatch(btnTwotwentyeight()),
    btnThreetwentyeight:()=>dispatch(btnThreetwentyeight()),
    btnFourtwentyeight:()=>dispatch(btnFourtwentyeight()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (ZQtwentynine)