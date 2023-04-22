import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirtythree,optBthirtythree,optCthirtythree,optDthirtythree,btnOnethirtythree,btnTwothirtythree,btnThreethirtythree,btnFourthirtythree,statUpdatethirtythree,statUpdateAthirtythree,statUpdateKthirtythree,statUpdateMthirtythree,statUpdateNthirtythree,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Timer from '../../components/Timer ';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';

function QuestionThirtyFour(props) {
  const navigate = useNavigate()  
    var stat=props.statusthirtythree;
    var opt=props.optionthirtythree

  const [optionthirtythree, setOptionthirtythree] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirtythree(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirtythree==="a"){
   props.optAthirtythree()
 }
 if(optionthirtythree==="b"){
   props.optBthirtythree()
 }
 if(optionthirtythree==="c"){
   props.optCthirtythree()
 }
 if(optionthirtythree==="d"){
   props.optDthirtythree()
 }
}

 useEffect(()=>{
  setOptionthirtythree(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirtythree===""){
  props.nextOne();
  props.statUpdatethirtythree();
  props.btnOnethirtythree()
  
 }
 
  else if (optionthirtythree==="a"){
   props.nextTwo();
   props.statUpdateAthirtythree();
   props.btnFourthirtythree()
  
   
  }
  else if (optionthirtythree==="b"){
    props.nextTwo();
    props.statUpdateAthirtythree();
    props.btnFourthirtythree()
   }
   else if (optionthirtythree==="c"){
    props.nextTwo();
    props.statUpdateAthirtythree();
    props.btnFourthirtythree()
   }
   else if (optionthirtythree==="d"){
    props.nextTwo();
    props.statUpdateAthirtythree();
    props.btnFourthirtythree()
   }}
   else if (stat==="Not Answered"){
     if(optionthirtythree===""){
    props.nextThree();
    props.statUpdateKthirtythree();
    props.btnOnethirtythree()
    
   }
   
    else if (optionthirtythree==="a"){
     props.nextFour();
     props.statUpdateAthirtythree();
     props.btnFourthirtythree()
     
    }
    else if (optionthirtythree==="b"){
      props.nextFour();
      props.statUpdateAthirtythree();
      props.btnFourthirtythree()
      
     }
     else if (optionthirtythree==="c"){
      props.nextFour();
      props.statUpdateAthirtythree();
      props.btnFourthirtythree()
      
     }
     else if ( optionthirtythree==="d"){
      props.nextFour();
      props.statUpdateAthirtythree();
      props.btnFourthirtythree()
      
     }}
     else if (stat==="Marked"){
     if(optionthirtythree===""){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnThreethirtythree()
      
     }
          else if (optionthirtythree==="a"){
      props.mfrFive();
      props.statUpdateNthirtythree();
      props.btnThreethirtythree()

     }
     else if (optionthirtythree==="b"){
       props.mfrFive();
       props.statUpdateNthirtythree();
       props.btnThreethirtythree()

      }
      else if (optionthirtythree==="c"){
       props.mfrFive();
       props.statUpdateNthirtythree();
       props.btnThreethirtythree()

      }
      else if (optionthirtythree==="d"){
       props.mfrFive();
       props.statUpdateNthirtythree();
       props.btnThreethirtythree()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirtythree==="a"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnThreethirtythree()

      
     }
     else if (optionthirtythree==="b"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnThreethirtythree() 
     }
     else if (optionthirtythree==="c"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnThreethirtythree()
     }
     else if (optionthirtythree==="d"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnThreethirtythree()
     }}
     else if(stat==="Answered"){
     if (optionthirtythree==="a"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()

      
     }
     else if (optionthirtythree==="b"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()

      
     }
     else if ( optionthirtythree==="c"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()
      
     }
     else if (optionthirtythree==="d"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirtythree===""){
  props.mfrOne();
  props.statUpdateMthirtythree();
  props.btnTwothirtythree()
 }
 
  else if (optionthirtythree==="a"){
   props.mfrTwo();
   props.statUpdateNthirtythree();
   props.btnThreethirtythree()
  }
  else if (optionthirtythree==="b"){
    props.mfrTwo();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
  

   }
   else if (optionthirtythree==="c"){
    props.mfrTwo();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
  
   }
   else if (optionthirtythree==="d"){
    props.mfrTwo();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirtythree===""){
  props.mfrThree();
  props.statUpdateMthirtythree();
  props.btnTwothirtythree();
 }
 else if (optionthirtythree==="a"){
  props.mfrFour();
  props.statUpdateNthirtythree();
  props.btnThreethirtythree()
 }
 else if (optionthirtythree==="b"){
   props.mfrFour();
   props.statUpdateNthirtythree();
   props.btnThreethirtythree()
  }
  else if (optionthirtythree==="c"){
   props.mfrFour();
   props.statUpdateNthirtythree();
   props.btnThreethirtythree()
  }
  else if (optionthirtythree==="d"){
   props.mfrFour();
   props.statUpdateNthirtythree();
  props.btnThreethirtythree()
  }}
  else if (stat==="Marked"){
    if(optionthirtythree===""){
    props.nextThree();
    props.statUpdateKthirtythree();
    props.btnTwothirtythree();
   }
   else if (optionthirtythree==="a"){
    props.mfrFive();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()


   }
   else if (optionthirtythree==="b"){
    props.mfrFive();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="c"){
    props.mfrFive();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="d"){
    props.mfrFive();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirtythree==="a"){
    props.nextThree();
    props.statUpdateKthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="b"){
    props.nextThree();
    props.statUpdateKthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="c"){
    props.nextThree();
    props.statUpdateKthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="d"){
    props.nextThree();
    props.statUpdateKthirtythree();
    props.btnThreethirtythree()
   }}
   else if (stat==="Answered"){
     if(optionthirtythree==="a"){
    props.mfrSix();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="b"){
    props.mfrSix();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="c"){
    props.mfrSix();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="d"){
    props.mfrSix();
    props.statUpdateNthirtythree();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirtythree===""){
    props.nexttwo();
    props.statUpdatethirtythree();
    props.btnOnethirtythree()
  }
  
   else if (optionthirtythree==="a"){
    props.nextTwo();
    props.statUpdateAthirtythree();
    props.btnFourthirtythree()
   }
   else if (optionthirtythree==="b"){
     props.nextTwo();
     props.statUpdateAthirtythree();
     props.btnFourthirtythree()
    }
    else if (optionthirtythree==="c"){
     props.nextTwo();
     props.statUpdateAthirtythree();
     props.btnFourthirtythree()
    }
    else if (optionthirtythree==="d"){
     props.nextTwo();
     props.statUpdateAthirtythree();
     props.btnFourthirtythree()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirtythree===""){
   props.nextThree();
   props.statUpdateKthirtythree();
   props.btnOnethirtythree()
  }
  else if (optionthirtythree==="a"){
   props.nextFour();
   props.statUpdateAthirtythree();
   props.btnFourthirtythree()
  }
  else if (optionthirtythree==="b"){
    props.nextFour();
    props.statUpdateAthirtythree();
    props.btnFourthirtythree()
   }
   else if (optionthirtythree==="c"){
    props.nextFour();
    props.statUpdateAthirtythree();
    props.btnFourthirtythree()
   }
   else if (optionthirtythree==="d"){
    props.nextFour();
    props.statUpdateAthirtythree();
    props.btnFourthirtythree()
   }}
   else if (stat==="Marked"){
     if(optionthirtythree===""){
     props.nextThree();
     props.statUpdateKthirtythree();
     props.btnTwothirtythree()
    }
    else if (optionthirtythree==="a"){
     props.mfrFive();
     props.statUpdateNthirtythree();
     props.btnThreethirtythree()
    }
    else if (optionthirtythree==="b"){
     props.mfrFive();
     props.statUpdateNthirtythree();
     props.btnThreethirtythree()
    }
    else if ( optionthirtythree==="c"){
     props.mfrFive();
     props.statUpdateNthirtythree();
     props.btnThreethirtythree()
    }
    else if ( optionthirtythree==="d"){
     props.mfrFive();
     props.statUpdateNthirtythree();
     props.btnThreethirtythree()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirtythree==="a"){
     props.mfrSeven();
     props.statUpdateAthirtythree();
     props.btnFourthirtythree()
    }
    else if (optionthirtythree==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirtythree();
      props.btnFourthirtythree()
    }
    else if (optionthirtythree==="c"){
      props.mfrSeven();
      props.statUpdateAthirtythree();
      props.btnFourthirtythree()
    }
    else if ( optionthirtythree==="d"){
      props.mfrSeven();
      props.statUpdateAthirtythree();
      props.btnFourthirtythree()
    }}
    else if (stat==="Answered"){
      if(optionthirtythree==="a"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()
    }
    else if (optionthirtythree==="b"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()
    }
    else if (optionthirtythree==="c"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()
    }
    else if (optionthirtythree==="d"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()
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
      <h5>Question No.34</h5>
    <p>  {props.BHealthanddiseaseThirtysix}</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirtythree=== 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtysixA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirtythree === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtysixB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirtythree === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtysixC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirtythree === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtysixD}
      </div>
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/thirtyfive'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/thirtyfive'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/thirtyfive'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/thirtythree'))}>Previous</button>
    
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
     statusthirtythree:state.statusthirtythree,
     optionthirtythree:state.optionthirtythree,
     BHealthanddiseaseThirtysix:state.BHealthanddiseaseThirtysix,
  BHealthanddiseaseThirtysixA:state.BHealthanddiseaseThirtysixA,
  BHealthanddiseaseThirtysixB:state.BHealthanddiseaseThirtysixB,
  BHealthanddiseaseThirtysixC:state.BHealthanddiseaseThirtysixC,
  BHealthanddiseaseThirtysixD:state.BHealthanddiseaseThirtysixD,
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
    optAthirtythree:()=>dispatch(optAthirtythree()),
    optBthirtythree:()=>dispatch(optBthirtythree()),
    optCthirtythree:()=>dispatch(optCthirtythree()),
    optDthirtythree:()=>dispatch(optDthirtythree()),
    statUpdatethirtythree:()=>dispatch(statUpdatethirtythree()),
    statUpdateAthirtythree:()=>dispatch(statUpdateAthirtythree()),
    statUpdateMthirtythree:()=>dispatch(statUpdateMthirtythree()),
    statUpdateNthirtythree:()=>dispatch(statUpdateNthirtythree()),
    statUpdateKthirtythree:()=>dispatch(statUpdateKthirtythree()),
    btnOnethirtythree:()=>dispatch(btnOnethirtythree()),
    btnTwothirtythree:()=>dispatch(btnTwothirtythree()),
    btnThreethirtythree:()=>dispatch(btnThreethirtythree()),
    btnFourthirtythree:()=>dispatch(btnFourthirtythree()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (QuestionThirtyFour)