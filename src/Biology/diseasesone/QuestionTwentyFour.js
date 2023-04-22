import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwentythree,optBtwentythree,optCtwentythree,optDtwentythree,btnOnetwentythree,btnTwotwentythree,btnThreetwentythree,btnFourtwentythree,statUpdatetwentythree,statUpdateAtwentythree,statUpdateKtwentythree,statUpdateMtwentythree,statUpdateNtwentythree,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Timer from '../../components/Timer ';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';




function QuestionTwentyFour(props) {
  const navigate = useNavigate()  
    var stat=props.statustwentythree;
    var opt=props.optiontwentythree

  const [optiontwentythree, setOptiontwentythree] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptiontwentythree(event.target.value);
    
  }
  
function optionChange(){
 if(optiontwentythree==="a"){
   props.optAtwentythree()
 }
 if(optiontwentythree==="b"){
   props.optBtwentythree()
 }
 if(optiontwentythree==="c"){
   props.optCtwentythree()
 }
 if(optiontwentythree==="d"){
   props.optDtwentythree()
 }
}

 useEffect(()=>{
  setOptiontwentythree(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optiontwentythree===""){
  props.nextOne();
  props.statUpdatetwentythree();
  props.btnOnetwentythree()
  
 }
 
  else if (optiontwentythree==="a"){
   props.nextTwo();
   props.statUpdateAtwentythree();
   props.btnFourtwentythree()
  
   
  }
  else if (optiontwentythree==="b"){
    props.nextTwo();
    props.statUpdateAtwentythree();
    props.btnFourtwentythree()
   }
   else if (optiontwentythree==="c"){
    props.nextTwo();
    props.statUpdateAtwentythree();
    props.btnFourtwentythree()
   }
   else if (optiontwentythree==="d"){
    props.nextTwo();
    props.statUpdateAtwentythree();
    props.btnFourtwentythree()
   }}
   else if (stat==="Not Answered"){
     if(optiontwentythree===""){
    props.nextThree();
    props.statUpdateKtwentythree();
    props.btnOnetwentythree()
    
   }
   
    else if (optiontwentythree==="a"){
     props.nextFour();
     props.statUpdateAtwentythree();
     props.btnFourtwentythree()
     
    }
    else if (optiontwentythree==="b"){
      props.nextFour();
      props.statUpdateAtwentythree();
      props.btnFourtwentythree()
      
     }
     else if (optiontwentythree==="c"){
      props.nextFour();
      props.statUpdateAtwentythree();
      props.btnFourtwentythree()
      
     }
     else if ( optiontwentythree==="d"){
      props.nextFour();
      props.statUpdateAtwentythree();
      props.btnFourtwentythree()
      
     }}
     else if (stat==="Marked"){
     if(optiontwentythree===""){
      props.nextThree();
      props.statUpdateKtwentythree();
      props.btnThreetwentythree()
      
     }
          else if (optiontwentythree==="a"){
      props.mfrFive();
      props.statUpdateNtwentythree();
      props.btnThreetwentythree()

     }
     else if (optiontwentythree==="b"){
       props.mfrFive();
       props.statUpdateNtwentythree();
       props.btnThreetwentythree()

      }
      else if (optiontwentythree==="c"){
       props.mfrFive();
       props.statUpdateNtwentythree();
       props.btnThreetwentythree()

      }
      else if (optiontwentythree==="d"){
       props.mfrFive();
       props.statUpdateNtwentythree();
       props.btnThreetwentythree()

        }}
     
     else if (stat==="Marked For Review"){
     if(optiontwentythree==="a"){
      props.nextThree();
      props.statUpdateKtwentythree();
      props.btnThreetwentythree()

      
     }
     else if (optiontwentythree==="b"){
      props.nextThree();
      props.statUpdateKtwentythree();
      props.btnThreetwentythree() 
     }
     else if (optiontwentythree==="c"){
      props.nextThree();
      props.statUpdateKtwentythree();
      props.btnThreetwentythree()
     }
     else if (optiontwentythree==="d"){
      props.nextThree();
      props.statUpdateKtwentythree();
      props.btnThreetwentythree()
     }}
     else if(stat==="Answered"){
     if (optiontwentythree==="a"){
      props.nextThree();
      props.statUpdateKtwentythree();
      props.btnFourtwentythree()

      
     }
     else if (optiontwentythree==="b"){
      props.nextThree();
      props.statUpdateKtwentythree();
      props.btnFourtwentythree()

      
     }
     else if ( optiontwentythree==="c"){
      props.nextThree();
      props.statUpdateKtwentythree();
      props.btnFourtwentythree()
      
     }
     else if (optiontwentythree==="d"){
      props.nextThree();
      props.statUpdateKtwentythree();
      props.btnFourtwentythree()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optiontwentythree===""){
  props.mfrOne();
  props.statUpdateMtwentythree();
  props.btnTwotwentythree()
 }
 
  else if (optiontwentythree==="a"){
   props.mfrTwo();
   props.statUpdateNtwentythree();
   props.btnThreetwentythree()
  }
  else if (optiontwentythree==="b"){
    props.mfrTwo();
    props.statUpdateNtwentythree();
    props.btnThreetwentythree()
  

   }
   else if (optiontwentythree==="c"){
    props.mfrTwo();
    props.statUpdateNtwentythree();
    props.btnThreetwentythree()
  
   }
   else if (optiontwentythree==="d"){
    props.mfrTwo();
    props.statUpdateNtwentythree();
    props.btnThreetwentythree()

   }}
  
 else if (stat==="Not Answered"){
   if(optiontwentythree===""){
  props.mfrThree();
  props.statUpdateMtwentythree();
  props.btnTwotwentythree();
 }
 else if (optiontwentythree==="a"){
  props.mfrFour();
  props.statUpdateNtwentythree();
  props.btnThreetwentythree()
 }
 else if (optiontwentythree==="b"){
   props.mfrFour();
   props.statUpdateNtwentythree();
   props.btnThreetwentythree()
  }
  else if (optiontwentythree==="c"){
   props.mfrFour();
   props.statUpdateNtwentythree();
   props.btnThreetwentythree()
  }
  else if (optiontwentythree==="d"){
   props.mfrFour();
   props.statUpdateNtwentythree();
  props.btnThreetwentythree()
  }}
  else if (stat==="Marked"){
    if(optiontwentythree===""){
    props.nextThree();
    props.statUpdateKtwentythree();
    props.btnTwotwentythree();
   }
   else if (optiontwentythree==="a"){
    props.mfrFive();
    props.statUpdateNtwentythree();
    props.btnThreetwentythree()


   }
   else if (optiontwentythree==="b"){
    props.mfrFive();
    props.statUpdateNtwentythree();
    props.btnThreetwentythree()
   }
   else if (optiontwentythree==="c"){
    props.mfrFive();
    props.statUpdateNtwentythree();
    props.btnThreetwentythree()
   }
   else if (optiontwentythree==="d"){
    props.mfrFive();
    props.statUpdateNtwentythree();
    props.btnThreetwentythree()
    }}
   else if (stat==="Marked For Review"){
     if(optiontwentythree==="a"){
    props.nextThree();
    props.statUpdateKtwentythree();
    props.btnThreetwentythree()
   }
   else if (optiontwentythree==="b"){
    props.nextThree();
    props.statUpdateKtwentythree();
    props.btnThreetwentythree()
   }
   else if (optiontwentythree==="c"){
    props.nextThree();
    props.statUpdateKtwentythree();
    props.btnThreetwentythree()
   }
   else if (optiontwentythree==="d"){
    props.nextThree();
    props.statUpdateKtwentythree();
    props.btnThreetwentythree()
   }}
   else if (stat==="Answered"){
     if(optiontwentythree==="a"){
    props.mfrSix();
    props.statUpdateNtwentythree();
    props.btnThreetwentythree()
   }
   else if (optiontwentythree==="b"){
    props.mfrSix();
    props.statUpdateNtwentythree();
    props.btnThreetwentythree()
   }
   else if (optiontwentythree==="c"){
    props.mfrSix();
    props.statUpdateNtwentythree();
    props.btnThreetwentythree()
   }
   else if (optiontwentythree==="d"){
    props.mfrSix();
    props.statUpdateNtwentythree();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optiontwentythree===""){
    props.nexttwo();
    props.statUpdatetwentythree();
    props.btnOnetwentythree()
  }
  
   else if (optiontwentythree==="a"){
    props.nextTwo();
    props.statUpdateAtwentythree();
    props.btnFourtwentythree()
   }
   else if (optiontwentythree==="b"){
     props.nextTwo();
     props.statUpdateAtwentythree();
     props.btnFourtwentythree()
    }
    else if (optiontwentythree==="c"){
     props.nextTwo();
     props.statUpdateAtwentythree();
     props.btnFourtwentythree()
    }
    else if (optiontwentythree==="d"){
     props.nextTwo();
     props.statUpdateAtwentythree();
     props.btnFourtwentythree()
    }}
   
  else if (stat==="Not Answered"){
    if(optiontwentythree===""){
   props.nextThree();
   props.statUpdateKtwentythree();
   props.btnOnetwentythree()
  }
  else if (optiontwentythree==="a"){
   props.nextFour();
   props.statUpdateAtwentythree();
   props.btnFourtwentythree()
  }
  else if (optiontwentythree==="b"){
    props.nextFour();
    props.statUpdateAtwentythree();
    props.btnFourtwentythree()
   }
   else if (optiontwentythree==="c"){
    props.nextFour();
    props.statUpdateAtwentythree();
    props.btnFourtwentythree()
   }
   else if (optiontwentythree==="d"){
    props.nextFour();
    props.statUpdateAtwentythree();
    props.btnFourtwentythree()
   }}
   else if (stat==="Marked"){
     if(optiontwentythree===""){
     props.nextThree();
     props.statUpdateKtwentythree();
     props.btnTwotwentythree()
    }
    else if (optiontwentythree==="a"){
     props.mfrFive();
     props.statUpdateNtwentythree();
     props.btnThreetwentythree()
    }
    else if (optiontwentythree==="b"){
     props.mfrFive();
     props.statUpdateNtwentythree();
     props.btnThreetwentythree()
    }
    else if ( optiontwentythree==="c"){
     props.mfrFive();
     props.statUpdateNtwentythree();
     props.btnThreetwentythree()
    }
    else if ( optiontwentythree==="d"){
     props.mfrFive();
     props.statUpdateNtwentythree();
     props.btnThreetwentythree()
      }}
    else if (stat==="Marked For Review"){
      if(optiontwentythree==="a"){
     props.mfrSeven();
     props.statUpdateAtwentythree();
     props.btnFourtwentythree()
    }
    else if (optiontwentythree==="b"){
      props.mfrSeventwo();
      props.statUpdateAtwentythree();
      props.btnFourtwentythree()
    }
    else if (optiontwentythree==="c"){
      props.mfrSeven();
      props.statUpdateAtwentythree();
      props.btnFourtwentythree()
    }
    else if ( optiontwentythree==="d"){
      props.mfrSeven();
      props.statUpdateAtwentythree();
      props.btnFourtwentythree()
    }}
    else if (stat==="Answered"){
      if(optiontwentythree==="a"){
      props.nextThree();
      props.statUpdateKtwentythree();
      props.btnFourtwentythree()
    }
    else if (optiontwentythree==="b"){
      props.nextThree();
      props.statUpdateKtwentythree();
      props.btnFourtwentythree()
    }
    else if (optiontwentythree==="c"){
      props.nextThree();
      props.statUpdateKtwentythree();
      props.btnFourtwentythree()
    }
    else if (optiontwentythree==="d"){
      props.nextThree();
      props.statUpdateKtwentythree();
      props.btnFourtwentythree()
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
      <h5>Question No.24</h5>
    <p>  {props.BHealthanddiseaseTwentysix}</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwentythree=== 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTwentysixA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwentythree === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTwentysixB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwentythree === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTwentysixC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwentythree === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTwentysixD}
      </div>
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/twentyfive'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/twentyfive'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/twentyfive'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/twentythree'))}>Previous</button>
    
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
     statustwentythree:state.statustwentythree,
     optiontwentythree:state.optiontwentythree,
     BHealthanddiseaseTwentysix:state.BHealthanddiseaseTwentysix,
  BHealthanddiseaseTwentysixA:state.BHealthanddiseaseTwentysixA,
  BHealthanddiseaseTwentysixB:state.BHealthanddiseaseTwentysixB,
  BHealthanddiseaseTwentysixC:state.BHealthanddiseaseTwentysixC,
  BHealthanddiseaseTwentysixD:state.BHealthanddiseaseTwentysixD,
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
    optAtwentythree:()=>dispatch(optAtwentythree()),
    optBtwentythree:()=>dispatch(optBtwentythree()),
    optCtwentythree:()=>dispatch(optCtwentythree()),
    optDtwentythree:()=>dispatch(optDtwentythree()),
    statUpdatetwentythree:()=>dispatch(statUpdatetwentythree()),
    statUpdateAtwentythree:()=>dispatch(statUpdateAtwentythree()),
    statUpdateMtwentythree:()=>dispatch(statUpdateMtwentythree()),
    statUpdateNtwentythree:()=>dispatch(statUpdateNtwentythree()),
    statUpdateKtwentythree:()=>dispatch(statUpdateKtwentythree()),
    btnOnetwentythree:()=>dispatch(btnOnetwentythree()),
    btnTwotwentythree:()=>dispatch(btnTwotwentythree()),
    btnThreetwentythree:()=>dispatch(btnThreetwentythree()),
    btnFourtwentythree:()=>dispatch(btnFourtwentythree()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (QuestionTwentyFour)