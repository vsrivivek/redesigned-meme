import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwentynine,optBtwentynine,optCtwentynine,optDtwentynine,btnOnetwentynine,btnTwotwentynine,btnThreetwentynine,btnFourtwentynine,statUpdatetwentynine,statUpdateAtwentynine,statUpdateKtwentynine,statUpdateMtwentynine,statUpdateNtwentynine,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Timer from '../../components/Timer ';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';



function QuestionThirty(props) {
  const navigate = useNavigate()  
    var stat=props.statustwentynine;
    var opt=props.optiontwentynine

  const [optiontwentynine, setOptiontwentynine] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptiontwentynine(event.target.value);
    
  }
  
function optionChange(){
 if(optiontwentynine==="a"){
   props.optAtwentynine()
 }
 if(optiontwentynine==="b"){
   props.optBtwentynine()
 }
 if(optiontwentynine==="c"){
   props.optCtwentynine()
 }
 if(optiontwentynine==="d"){
   props.optDtwentynine()
 }
}

 useEffect(()=>{
  setOptiontwentynine(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optiontwentynine===""){
  props.nextOne();
  props.statUpdatetwentynine();
  props.btnOnetwentynine()
  
 }
 
  else if (optiontwentynine==="a"){
   props.nextTwo();
   props.statUpdateAtwentynine();
   props.btnFourtwentynine()
  
   
  }
  else if (optiontwentynine==="b"){
    props.nextTwo();
    props.statUpdateAtwentynine();
    props.btnFourtwentynine()
   }
   else if (optiontwentynine==="c"){
    props.nextTwo();
    props.statUpdateAtwentynine();
    props.btnFourtwentynine()
   }
   else if (optiontwentynine==="d"){
    props.nextTwo();
    props.statUpdateAtwentynine();
    props.btnFourtwentynine()
   }}
   else if (stat==="Not Answered"){
     if(optiontwentynine===""){
    props.nextThree();
    props.statUpdateKtwentynine();
    props.btnOnetwentynine()
    
   }
   
    else if (optiontwentynine==="a"){
     props.nextFour();
     props.statUpdateAtwentynine();
     props.btnFourtwentynine()
     
    }
    else if (optiontwentynine==="b"){
      props.nextFour();
      props.statUpdateAtwentynine();
      props.btnFourtwentynine()
      
     }
     else if (optiontwentynine==="c"){
      props.nextFour();
      props.statUpdateAtwentynine();
      props.btnFourtwentynine()
      
     }
     else if ( optiontwentynine==="d"){
      props.nextFour();
      props.statUpdateAtwentynine();
      props.btnFourtwentynine()
      
     }}
     else if (stat==="Marked"){
     if(optiontwentynine===""){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnThreetwentynine()
      
     }
          else if (optiontwentynine==="a"){
      props.mfrFive();
      props.statUpdateNtwentynine();
      props.btnThreetwentynine()

     }
     else if (optiontwentynine==="b"){
       props.mfrFive();
       props.statUpdateNtwentynine();
       props.btnThreetwentynine()

      }
      else if (optiontwentynine==="c"){
       props.mfrFive();
       props.statUpdateNtwentynine();
       props.btnThreetwentynine()

      }
      else if (optiontwentynine==="d"){
       props.mfrFive();
       props.statUpdateNtwentynine();
       props.btnThreetwentynine()

        }}
     
     else if (stat==="Marked For Review"){
     if(optiontwentynine==="a"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnThreetwentynine()

      
     }
     else if (optiontwentynine==="b"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnThreetwentynine() 
     }
     else if (optiontwentynine==="c"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnThreetwentynine()
     }
     else if (optiontwentynine==="d"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnThreetwentynine()
     }}
     else if(stat==="Answered"){
     if (optiontwentynine==="a"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()

      
     }
     else if (optiontwentynine==="b"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()

      
     }
     else if ( optiontwentynine==="c"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()
      
     }
     else if (optiontwentynine==="d"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optiontwentynine===""){
  props.mfrOne();
  props.statUpdateMtwentynine();
  props.btnTwotwentynine()
 }
 
  else if (optiontwentynine==="a"){
   props.mfrTwo();
   props.statUpdateNtwentynine();
   props.btnThreetwentynine()
  }
  else if (optiontwentynine==="b"){
    props.mfrTwo();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
  

   }
   else if (optiontwentynine==="c"){
    props.mfrTwo();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
  
   }
   else if (optiontwentynine==="d"){
    props.mfrTwo();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()

   }}
  
 else if (stat==="Not Answered"){
   if(optiontwentynine===""){
  props.mfrThree();
  props.statUpdateMtwentynine();
  props.btnTwotwentynine();
 }
 else if (optiontwentynine==="a"){
  props.mfrFour();
  props.statUpdateNtwentynine();
  props.btnThreetwentynine()
 }
 else if (optiontwentynine==="b"){
   props.mfrFour();
   props.statUpdateNtwentynine();
   props.btnThreetwentynine()
  }
  else if (optiontwentynine==="c"){
   props.mfrFour();
   props.statUpdateNtwentynine();
   props.btnThreetwentynine()
  }
  else if (optiontwentynine==="d"){
   props.mfrFour();
   props.statUpdateNtwentynine();
  props.btnThreetwentynine()
  }}
  else if (stat==="Marked"){
    if(optiontwentynine===""){
    props.nextThree();
    props.statUpdateKtwentynine();
    props.btnTwotwentynine();
   }
   else if (optiontwentynine==="a"){
    props.mfrFive();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()


   }
   else if (optiontwentynine==="b"){
    props.mfrFive();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="c"){
    props.mfrFive();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="d"){
    props.mfrFive();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
    }}
   else if (stat==="Marked For Review"){
     if(optiontwentynine==="a"){
    props.nextThree();
    props.statUpdateKtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="b"){
    props.nextThree();
    props.statUpdateKtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="c"){
    props.nextThree();
    props.statUpdateKtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="d"){
    props.nextThree();
    props.statUpdateKtwentynine();
    props.btnThreetwentynine()
   }}
   else if (stat==="Answered"){
     if(optiontwentynine==="a"){
    props.mfrSix();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="b"){
    props.mfrSix();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="c"){
    props.mfrSix();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="d"){
    props.mfrSix();
    props.statUpdateNtwentynine();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optiontwentynine===""){
    props.nexttwo();
    props.statUpdatetwentynine();
    props.btnOnetwentynine()
  }
  
   else if (optiontwentynine==="a"){
    props.nextTwo();
    props.statUpdateAtwentynine();
    props.btnFourtwentynine()
   }
   else if (optiontwentynine==="b"){
     props.nextTwo();
     props.statUpdateAtwentynine();
     props.btnFourtwentynine()
    }
    else if (optiontwentynine==="c"){
     props.nextTwo();
     props.statUpdateAtwentynine();
     props.btnFourtwentynine()
    }
    else if (optiontwentynine==="d"){
     props.nextTwo();
     props.statUpdateAtwentynine();
     props.btnFourtwentynine()
    }}
   
  else if (stat==="Not Answered"){
    if(optiontwentynine===""){
   props.nextThree();
   props.statUpdateKtwentynine();
   props.btnOnetwentynine()
  }
  else if (optiontwentynine==="a"){
   props.nextFour();
   props.statUpdateAtwentynine();
   props.btnFourtwentynine()
  }
  else if (optiontwentynine==="b"){
    props.nextFour();
    props.statUpdateAtwentynine();
    props.btnFourtwentynine()
   }
   else if (optiontwentynine==="c"){
    props.nextFour();
    props.statUpdateAtwentynine();
    props.btnFourtwentynine()
   }
   else if (optiontwentynine==="d"){
    props.nextFour();
    props.statUpdateAtwentynine();
    props.btnFourtwentynine()
   }}
   else if (stat==="Marked"){
     if(optiontwentynine===""){
     props.nextThree();
     props.statUpdateKtwentynine();
     props.btnTwotwentynine()
    }
    else if (optiontwentynine==="a"){
     props.mfrFive();
     props.statUpdateNtwentynine();
     props.btnThreetwentynine()
    }
    else if (optiontwentynine==="b"){
     props.mfrFive();
     props.statUpdateNtwentynine();
     props.btnThreetwentynine()
    }
    else if ( optiontwentynine==="c"){
     props.mfrFive();
     props.statUpdateNtwentynine();
     props.btnThreetwentynine()
    }
    else if ( optiontwentynine==="d"){
     props.mfrFive();
     props.statUpdateNtwentynine();
     props.btnThreetwentynine()
      }}
    else if (stat==="Marked For Review"){
      if(optiontwentynine==="a"){
     props.mfrSeven();
     props.statUpdateAtwentynine();
     props.btnFourtwentynine()
    }
    else if (optiontwentynine==="b"){
      props.mfrSeventwo();
      props.statUpdateAtwentynine();
      props.btnFourtwentynine()
    }
    else if (optiontwentynine==="c"){
      props.mfrSeven();
      props.statUpdateAtwentynine();
      props.btnFourtwentynine()
    }
    else if ( optiontwentynine==="d"){
      props.mfrSeven();
      props.statUpdateAtwentynine();
      props.btnFourtwentynine()
    }}
    else if (stat==="Answered"){
      if(optiontwentynine==="a"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()
    }
    else if (optiontwentynine==="b"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()
    }
    else if (optiontwentynine==="c"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()
    }
    else if (optiontwentynine==="d"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()
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
      <h5>Question No.30 </h5>
    <p> {props.BHealthanddiseaseThirtytwo}</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwentynine === 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtytwoA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwentynine === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtytwoB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwentynine === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtytwoC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwentynine === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtytwoD}
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/thirtyone'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/thirtyone'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/thirtyone'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/twentynine'))}>Previous</button>
    
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
     statustwentynine:state.statustwentynine,
     optiontwentynine:state.optiontwentynine,
     BHealthanddiseaseThirtytwo:state.BHealthanddiseaseThirtytwo,
  BHealthanddiseaseThirtytwoA:state.BHealthanddiseaseThirtytwoA,
  BHealthanddiseaseThirtytwoB:state.BHealthanddiseaseThirtytwoB,
  BHealthanddiseaseThirtytwoC:state.BHealthanddiseaseThirtytwoC,
  BHealthanddiseaseThirtytwoD:state.BHealthanddiseaseThirtytwoD,
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
    optAtwentynine:()=>dispatch(optAtwentynine()),
    optBtwentynine:()=>dispatch(optBtwentynine()),
    optCtwentynine:()=>dispatch(optCtwentynine()),
    optDtwentynine:()=>dispatch(optDtwentynine()),
    statUpdatetwentynine:()=>dispatch(statUpdatetwentynine()),
    statUpdateAtwentynine:()=>dispatch(statUpdateAtwentynine()),
    statUpdateMtwentynine:()=>dispatch(statUpdateMtwentynine()),
    statUpdateNtwentynine:()=>dispatch(statUpdateNtwentynine()),
    statUpdateKtwentynine:()=>dispatch(statUpdateKtwentynine()),
    btnOnetwentynine:()=>dispatch(btnOnetwentynine()),
    btnTwotwentynine:()=>dispatch(btnTwotwentynine()),
    btnThreetwentynine:()=>dispatch(btnThreetwentynine()),
    btnFourtwentynine:()=>dispatch(btnFourtwentynine()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (QuestionThirty)