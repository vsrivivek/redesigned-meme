import React from 'react'
import { timerUpdate,left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven,optAfive,optBfive,optCfive,optDfive,btnOnefive,btnTwofive,btnThreefive,btnFourfive,statUpdatefive,statUpdateAfive,statUpdateKfive,statUpdateMfive,statUpdateNfive } from '../redux'
import { connect } from 'react-redux';
import CakeNumbers from './CakeNumbers';
import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Timer from './Timer ';




function QuestionSix(props) {
  const navigate = useNavigate()  
    var stat=props.statusfive;
    var opt=props.optionfive

  const [optionfive, setOptionfive] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionfive(event.target.value);
    
  }
  
function optionChange(){
 if(optionfive==="a"){
   props.optAfive()
 }
 if(optionfive==="b"){
   props.optBfive()
 }
 if(optionfive==="c"){
   props.optCfive()
 }
 if(optionfive==="d"){
   props.optDfive()
 }
}

 useEffect(()=>{
  setOptionfive(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionfive===""){
  props.nextOne();
  props.statUpdatefive();
  props.btnOnefive()
  
 }
 
  else if (optionfive==="a"){
   props.nextTwo();
   props.statUpdateAfive();
   props.btnFourfive()
  
   
  }
  else if (optionfive==="b"){
    props.nextTwo();
    props.statUpdateAfive();
    props.btnFourfive()
   }
   else if (optionfive==="c"){
    props.nextTwo();
    props.statUpdateAfive();
    props.btnFourfive()
   }
   else if (optionfive==="d"){
    props.nextTwo();
    props.statUpdateAfive();
    props.btnFourfive()
   }}
   else if (stat==="Not Answered"){
     if(optionfive===""){
    props.nextThree();
    props.statUpdateKfive();
    props.btnOnefive()
    
   }
   
    else if (optionfive==="a"){
     props.nextFour();
     props.statUpdateAfive();
     props.btnFourfive()
     
    }
    else if (optionfive==="b"){
      props.nextFour();
      props.statUpdateAfive();
      props.btnFourfive()
      
     }
     else if (optionfive==="c"){
      props.nextFour();
      props.statUpdateAfive();
      props.btnFourfive()
      
     }
     else if ( optionfive==="d"){
      props.nextFour();
      props.statUpdateAfive();
      props.btnFourfive()
      
     }}
     else if (stat==="Marked"){
     if(optionfive===""){
      props.nextThree();
      props.statUpdateKfive();
      props.btnThreefive()
      
     }
          else if (optionfive==="a"){
      props.mfrFive();
      props.statUpdateNfive();
      props.btnThreefive()

     }
     else if (optionfive==="b"){
       props.mfrFive();
       props.statUpdateNfive();
       props.btnThreefive()

      }
      else if (optionfive==="c"){
       props.mfrFive();
       props.statUpdateNfive();
       props.btnThreefive()

      }
      else if (optionfive==="d"){
       props.mfrFive();
       props.statUpdateNfive();
       props.btnThreefive()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionfive==="a"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnThreefive()

      
     }
     else if (optionfive==="b"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnThreefive() 
     }
     else if (optionfive==="c"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnThreefive()
     }
     else if (optionfive==="d"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnThreefive()
     }}
     else if(stat==="Answered"){
     if (optionfive==="a"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()

      
     }
     else if (optionfive==="b"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()

      
     }
     else if ( optionfive==="c"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()
      
     }
     else if (optionfive==="d"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionfive===""){
  props.mfrOne();
  props.statUpdateMfive();
  props.btnTwofive()
 }
 
  else if (optionfive==="a"){
   props.mfrTwo();
   props.statUpdateNfive();
   props.btnThreefive()
  }
  else if (optionfive==="b"){
    props.mfrTwo();
    props.statUpdateNfive();
    props.btnThreefive()
  

   }
   else if (optionfive==="c"){
    props.mfrTwo();
    props.statUpdateNfive();
    props.btnThreefive()
  
   }
   else if (optionfive==="d"){
    props.mfrTwo();
    props.statUpdateNfive();
    props.btnThreefive()

   }}
  
 else if (stat==="Not Answered"){
   if(optionfive===""){
  props.mfrThree();
  props.statUpdateMfive();
  props.btnTwofive();
 }
 else if (optionfive==="a"){
  props.mfrFour();
  props.statUpdateNfive();
  props.btnThreefive()
 }
 else if (optionfive==="b"){
   props.mfrFour();
   props.statUpdateNfive();
   props.btnThreefive()
  }
  else if (optionfive==="c"){
   props.mfrFour();
   props.statUpdateNfive();
   props.btnThreefive()
  }
  else if (optionfive==="d"){
   props.mfrFour();
   props.statUpdateNfive();
  props.btnThreefive()
  }}
  else if (stat==="Marked"){
    if(optionfive===""){
    props.nextThree();
    props.statUpdateKfive();
    props.btnTwofive();
   }
   else if (optionfive==="a"){
    props.mfrFive();
    props.statUpdateNfive();
    props.btnThreefive()


   }
   else if (optionfive==="b"){
    props.mfrFive();
    props.statUpdateNfive();
    props.btnThreefive()
   }
   else if (optionfive==="c"){
    props.mfrFive();
    props.statUpdateNfive();
    props.btnThreefive()
   }
   else if (optionfive==="d"){
    props.mfrFive();
    props.statUpdateNfive();
    props.btnThreefive()
    }}
   else if (stat==="Marked For Review"){
     if(optionfive==="a"){
    props.nextThree();
    props.statUpdateKfive();
    props.btnThreefive()
   }
   else if (optionfive==="b"){
    props.nextThree();
    props.statUpdateKfive();
    props.btnThreefive()
   }
   else if (optionfive==="c"){
    props.nextThree();
    props.statUpdateKfive();
    props.btnThreefive()
   }
   else if (optionfive==="d"){
    props.nextThree();
    props.statUpdateKfive();
    props.btnThreefive()
   }}
   else if (stat==="Answered"){
     if(optionfive==="a"){
    props.mfrSix();
    props.statUpdateNfive();
    props.btnThreefive()
   }
   else if (optionfive==="b"){
    props.mfrSix();
    props.statUpdateNfive();
    props.btnThreefive()
   }
   else if (optionfive==="c"){
    props.mfrSix();
    props.statUpdateNfive();
    props.btnThreefive()
   }
   else if (optionfive==="d"){
    props.mfrSix();
    props.statUpdateNfive();
    props.btnThreefive()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionfive===""){
    props.nexttwo();
    props.statUpdatefive();
    props.btnOnefive()
  }
  
   else if (optionfive==="a"){
    props.nextTwo();
    props.statUpdateAfive();
    props.btnFourfive()
   }
   else if (optionfive==="b"){
     props.nextTwo();
     props.statUpdateAfive();
     props.btnFourfive()
    }
    else if (optionfive==="c"){
     props.nextTwo();
     props.statUpdateAfive();
     props.btnFourfive()
    }
    else if (optionfive==="d"){
     props.nextTwo();
     props.statUpdateAfive();
     props.btnFourfive()
    }}
   
  else if (stat==="Not Answered"){
    if(optionfive===""){
   props.nextThree();
   props.statUpdateKfive();
   props.btnOnefive()
  }
  else if (optionfive==="a"){
   props.nextFour();
   props.statUpdateAfive();
   props.btnFourfive()
  }
  else if (optionfive==="b"){
    props.nextFour();
    props.statUpdateAfive();
    props.btnFourfive()
   }
   else if (optionfive==="c"){
    props.nextFour();
    props.statUpdateAfive();
    props.btnFourfive()
   }
   else if (optionfive==="d"){
    props.nextFour();
    props.statUpdateAfive();
    props.btnFourfive()
   }}
   else if (stat==="Marked"){
     if(optionfive===""){
     props.nextThree();
     props.statUpdateKfive();
     props.btnTwofive()
    }
    else if (optionfive==="a"){
     props.mfrFive();
     props.statUpdateNfive();
     props.btnThreefive()
    }
    else if (optionfive==="b"){
     props.mfrFive();
     props.statUpdateNfive();
     props.btnThreefive()
    }
    else if ( optionfive==="c"){
     props.mfrFive();
     props.statUpdateNfive();
     props.btnThreefive()
    }
    else if ( optionfive==="d"){
     props.mfrFive();
     props.statUpdateNfive();
     props.btnThreefive()
      }}
    else if (stat==="Marked For Review"){
      if(optionfive==="a"){
     props.mfrSeven();
     props.statUpdateAfive();
     props.btnFourfive()
    }
    else if (optionfive==="b"){
      props.mfrSeventwo();
      props.statUpdateAfive();
      props.btnFourfive()
    }
    else if (optionfive==="c"){
      props.mfrSeven();
      props.statUpdateAfive();
      props.btnFourfive()
    }
    else if ( optionfive==="d"){
      props.mfrSeven();
      props.statUpdateAfive();
      props.btnFourfive()
    }}
    else if (stat==="Answered"){
      if(optionfive==="a"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()
    }
    else if (optionfive==="b"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()
    }
    else if (optionfive==="c"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()
    }
    else if (optionfive==="d"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()
          }}
    optionChange()
 }

    return (
    <div>
    <div className={props.header}>
        <h1>Vectorise</h1>
        </div>
        <div className={props.title}>
          <h3>Test On: Diseases</h3>
        </div>
    <div className= {props.total}>
     <div className={props.left}>
    <form>
      <h5>Question No.6</h5>
    <p>  {props.BHealthanddiseaseSeven}</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionfive === 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseSevenA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionfive === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseSevenB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionfive === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseSevenC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionfive === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseSevenD}
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/seven'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/seven'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/seven'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/five'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><Timer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/score'))}>Submit Test</button>
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
     statusfive:state.statusfive,
     optionfive:state.optionfive,
     BHealthanddiseaseSeven:state.BHealthanddiseaseSeven,
  BHealthanddiseaseSevenA:state.BHealthanddiseaseSevenA,
  BHealthanddiseaseSevenB:state.BHealthanddiseaseSevenB,
  BHealthanddiseaseSevenC:state.BHealthanddiseaseSevenC,
  BHealthanddiseaseSevenD:state.BHealthanddiseaseSevenD,
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
  divA:state.divA
     
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
    optAfive:()=>dispatch(optAfive()),
    optBfive:()=>dispatch(optBfive()),
    optCfive:()=>dispatch(optCfive()),
    optDfive:()=>dispatch(optDfive()),
    statUpdatefive:()=>dispatch(statUpdatefive()),
    statUpdateAfive:()=>dispatch(statUpdateAfive()),
    statUpdateMfive:()=>dispatch(statUpdateMfive()),
    statUpdateNfive:()=>dispatch(statUpdateNfive()),
    statUpdateKfive:()=>dispatch(statUpdateKfive()),
    btnOnefive:()=>dispatch(btnOnefive()),
    btnTwofive:()=>dispatch(btnTwofive()),
    btnThreefive:()=>dispatch(btnThreefive()),
    btnFourfive:()=>dispatch(btnFourfive()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (QuestionSix)