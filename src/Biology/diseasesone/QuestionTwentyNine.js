import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwentyeight,optBtwentyeight,optCtwentyeight,optDtwentyeight,btnOnetwentyeight,btnTwotwentyeight,btnThreetwentyeight,btnFourtwentyeight,statUpdatetwentyeight,statUpdateAtwentyeight,statUpdateKtwentyeight,statUpdateMtwentyeight,statUpdateNtwentyeight,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
import Timer from '../../components/Timer ';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Timer from '../../components/Timer ';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';



function QuestionTwentyNine(props) {
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
    <div className={props.header}>
        <h1>Vectorise</h1>
        </div>
        <div className={props.title}>
          <h3>Test On: Diseases</h3>
        </div>
    <div className= {props.total}>
     <div className={props.left}>
    

    <form>
      <h5>Question No.29</h5>
    <p>  {props.BHealthanddiseaseThirtyone}</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwentyeight=== 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtyoneA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwentyeight === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtyoneB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwentyeight === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtyoneC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwentyeight === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtyoneD}
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/thirty'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/thirty'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/thirty'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/twentyeight'))}>Previous</button>
    
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
export default connect(mapStateToProps,mapDispatchToProps) (QuestionTwentyNine)