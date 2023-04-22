import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirty,optBthirty,optCthirty,optDthirty,btnOnethirty,btnTwothirty,btnThreethirty,btnFourthirty,statUpdatethirty,statUpdateAthirty,statUpdateKthirty,statUpdateMthirty,statUpdateNthirty,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../redux'
import { connect } from 'react-redux';
import CakeNumbers from './CakeNumbers';
import QuestionNumbers from './QuestionNumbers';
import Submit from './Submit';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Timer from './Timer ';




function QuestionThirtyOne(props) {
  const navigate = useNavigate()  
    var stat=props.statusthirty;
    var opt=props.optionthirty

  const [optionthirty, setOptionthirty] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirty(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirty==="a"){
   props.optAthirty()
 }
 if(optionthirty==="b"){
   props.optBthirty()
 }
 if(optionthirty==="c"){
   props.optCthirty()
 }
 if(optionthirty==="d"){
   props.optDthirty()
 }
}

 useEffect(()=>{
  setOptionthirty(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirty===""){
  props.nextOne();
  props.statUpdatethirty();
  props.btnOnethirty()
  
 }
 
  else if (optionthirty==="a"){
   props.nextTwo();
   props.statUpdateAthirty();
   props.btnFourthirty()
  
   
  }
  else if (optionthirty==="b"){
    props.nextTwo();
    props.statUpdateAthirty();
    props.btnFourthirty()
   }
   else if (optionthirty==="c"){
    props.nextTwo();
    props.statUpdateAthirty();
    props.btnFourthirty()
   }
   else if (optionthirty==="d"){
    props.nextTwo();
    props.statUpdateAthirty();
    props.btnFourthirty()
   }}
   else if (stat==="Not Answered"){
     if(optionthirty===""){
    props.nextThree();
    props.statUpdateKthirty();
    props.btnOnethirty()
    
   }
   
    else if (optionthirty==="a"){
     props.nextFour();
     props.statUpdateAthirty();
     props.btnFourthirty()
     
    }
    else if (optionthirty==="b"){
      props.nextFour();
      props.statUpdateAthirty();
      props.btnFourthirty()
      
     }
     else if (optionthirty==="c"){
      props.nextFour();
      props.statUpdateAthirty();
      props.btnFourthirty()
      
     }
     else if ( optionthirty==="d"){
      props.nextFour();
      props.statUpdateAthirty();
      props.btnFourthirty()
      
     }}
     else if (stat==="Marked"){
     if(optionthirty===""){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnThreethirty()
      
     }
          else if (optionthirty==="a"){
      props.mfrFive();
      props.statUpdateNthirty();
      props.btnThreethirty()

     }
     else if (optionthirty==="b"){
       props.mfrFive();
       props.statUpdateNthirty();
       props.btnThreethirty()

      }
      else if (optionthirty==="c"){
       props.mfrFive();
       props.statUpdateNthirty();
       props.btnThreethirty()

      }
      else if (optionthirty==="d"){
       props.mfrFive();
       props.statUpdateNthirty();
       props.btnThreethirty()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirty==="a"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnThreethirty()

      
     }
     else if (optionthirty==="b"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnThreethirty() 
     }
     else if (optionthirty==="c"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnThreethirty()
     }
     else if (optionthirty==="d"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnThreethirty()
     }}
     else if(stat==="Answered"){
     if (optionthirty==="a"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()

      
     }
     else if (optionthirty==="b"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()

      
     }
     else if ( optionthirty==="c"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()
      
     }
     else if (optionthirty==="d"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirty===""){
  props.mfrOne();
  props.statUpdateMthirty();
  props.btnTwothirty()
 }
 
  else if (optionthirty==="a"){
   props.mfrTwo();
   props.statUpdateNthirty();
   props.btnThreethirty()
  }
  else if (optionthirty==="b"){
    props.mfrTwo();
    props.statUpdateNthirty();
    props.btnThreethirty()
  

   }
   else if (optionthirty==="c"){
    props.mfrTwo();
    props.statUpdateNthirty();
    props.btnThreethirty()
  
   }
   else if (optionthirty==="d"){
    props.mfrTwo();
    props.statUpdateNthirty();
    props.btnThreethirty()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirty===""){
  props.mfrThree();
  props.statUpdateMthirty();
  props.btnTwothirty();
 }
 else if (optionthirty==="a"){
  props.mfrFour();
  props.statUpdateNthirty();
  props.btnThreethirty()
 }
 else if (optionthirty==="b"){
   props.mfrFour();
   props.statUpdateNthirty();
   props.btnThreethirty()
  }
  else if (optionthirty==="c"){
   props.mfrFour();
   props.statUpdateNthirty();
   props.btnThreethirty()
  }
  else if (optionthirty==="d"){
   props.mfrFour();
   props.statUpdateNthirty();
  props.btnThreethirty()
  }}
  else if (stat==="Marked"){
    if(optionthirty===""){
    props.nextThree();
    props.statUpdateKthirty();
    props.btnTwothirty();
   }
   else if (optionthirty==="a"){
    props.mfrFive();
    props.statUpdateNthirty();
    props.btnThreethirty()


   }
   else if (optionthirty==="b"){
    props.mfrFive();
    props.statUpdateNthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="c"){
    props.mfrFive();
    props.statUpdateNthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="d"){
    props.mfrFive();
    props.statUpdateNthirty();
    props.btnThreethirty()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirty==="a"){
    props.nextThree();
    props.statUpdateKthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="b"){
    props.nextThree();
    props.statUpdateKthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="c"){
    props.nextThree();
    props.statUpdateKthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="d"){
    props.nextThree();
    props.statUpdateKthirty();
    props.btnThreethirty()
   }}
   else if (stat==="Answered"){
     if(optionthirty==="a"){
    props.mfrSix();
    props.statUpdateNthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="b"){
    props.mfrSix();
    props.statUpdateNthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="c"){
    props.mfrSix();
    props.statUpdateNthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="d"){
    props.mfrSix();
    props.statUpdateNthirty();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirty===""){
    props.nexttwo();
    props.statUpdatethirty();
    props.btnOnethirty()
  }
  
   else if (optionthirty==="a"){
    props.nextTwo();
    props.statUpdateAthirty();
    props.btnFourthirty()
   }
   else if (optionthirty==="b"){
     props.nextTwo();
     props.statUpdateAthirty();
     props.btnFourthirty()
    }
    else if (optionthirty==="c"){
     props.nextTwo();
     props.statUpdateAthirty();
     props.btnFourthirty()
    }
    else if (optionthirty==="d"){
     props.nextTwo();
     props.statUpdateAthirty();
     props.btnFourthirty()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirty===""){
   props.nextThree();
   props.statUpdateKthirty();
   props.btnOnethirty()
  }
  else if (optionthirty==="a"){
   props.nextFour();
   props.statUpdateAthirty();
   props.btnFourthirty()
  }
  else if (optionthirty==="b"){
    props.nextFour();
    props.statUpdateAthirty();
    props.btnFourthirty()
   }
   else if (optionthirty==="c"){
    props.nextFour();
    props.statUpdateAthirty();
    props.btnFourthirty()
   }
   else if (optionthirty==="d"){
    props.nextFour();
    props.statUpdateAthirty();
    props.btnFourthirty()
   }}
   else if (stat==="Marked"){
     if(optionthirty===""){
     props.nextThree();
     props.statUpdateKthirty();
     props.btnTwothirty()
    }
    else if (optionthirty==="a"){
     props.mfrFive();
     props.statUpdateNthirty();
     props.btnThreethirty()
    }
    else if (optionthirty==="b"){
     props.mfrFive();
     props.statUpdateNthirty();
     props.btnThreethirty()
    }
    else if ( optionthirty==="c"){
     props.mfrFive();
     props.statUpdateNthirty();
     props.btnThreethirty()
    }
    else if ( optionthirty==="d"){
     props.mfrFive();
     props.statUpdateNthirty();
     props.btnThreethirty()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirty==="a"){
     props.mfrSeven();
     props.statUpdateAthirty();
     props.btnFourthirty()
    }
    else if (optionthirty==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirty();
      props.btnFourthirty()
    }
    else if (optionthirty==="c"){
      props.mfrSeven();
      props.statUpdateAthirty();
      props.btnFourthirty()
    }
    else if ( optionthirty==="d"){
      props.mfrSeven();
      props.statUpdateAthirty();
      props.btnFourthirty()
    }}
    else if (stat==="Answered"){
      if(optionthirty==="a"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()
    }
    else if (optionthirty==="b"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()
    }
    else if (optionthirty==="c"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()
    }
    else if (optionthirty==="d"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()
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
      <h5>Question No.31</h5>
    <p>  {props.BHealthanddiseaseOne}</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirty === 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseOneA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirty === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseOneB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirty === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseOneC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirty === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseOneD}
      </div>
       
      
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/thirtytwo'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/thirtytwo'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/thirtytwo'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/thirty'))}>Previous</button>
    
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
     statusthirty:state.statusthirty,
     optionthirty:state.optionthirty,
     question:state.question,
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
    optAthirty:()=>dispatch(optAthirty()),
    optBthirty:()=>dispatch(optBthirty()),
    optCthirty:()=>dispatch(optCthirty()),
    optDthirty:()=>dispatch(optDthirty()),
    statUpdatethirty:()=>dispatch(statUpdatethirty()),
    statUpdateAthirty:()=>dispatch(statUpdateAthirty()),
    statUpdateMthirty:()=>dispatch(statUpdateMthirty()),
    statUpdateNthirty:()=>dispatch(statUpdateNthirty()),
    statUpdateKthirty:()=>dispatch(statUpdateKthirty()),
    btnOnethirty:()=>dispatch(btnOnethirty()),
    btnTwothirty:()=>dispatch(btnTwothirty()),
    btnThreethirty:()=>dispatch(btnThreethirty()),
    btnFourthirty:()=>dispatch(btnFourthirty()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (QuestionThirtyOne)