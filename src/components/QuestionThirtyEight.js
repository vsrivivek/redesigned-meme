import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirtyseven,optBthirtyseven,optCthirtyseven,optDthirtyseven,btnOnethirtyseven,btnTwothirtyseven,btnThreethirtyseven,btnFourthirtyseven,statUpdatethirtyseven,statUpdateAthirtyseven,statUpdateKthirtyseven,statUpdateMthirtyseven,statUpdateNthirtyseven,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../redux'
import { connect } from 'react-redux';
import CakeNumbers from './CakeNumbers';
import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Timer from './Timer ';




function QuestionThirtyEight(props) {
  const navigate = useNavigate()  
    var stat=props.statusthirtyseven;
    var opt=props.optionthirtyseven

  const [optionthirtyseven, setOptionthirtyseven] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirtyseven(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirtyseven==="a"){
   props.optAthirtyseven()
 }
 if(optionthirtyseven==="b"){
   props.optBthirtyseven()
 }
 if(optionthirtyseven==="c"){
   props.optCthirtyseven()
 }
 if(optionthirtyseven==="d"){
   props.optDthirtyseven()
 }
}

 useEffect(()=>{
  setOptionthirtyseven(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirtyseven===""){
  props.nextOne();
  props.statUpdatethirtyseven();
  props.btnOnethirtyseven()
  
 }
 
  else if (optionthirtyseven==="a"){
   props.nextTwo();
   props.statUpdateAthirtyseven();
   props.btnFourthirtyseven()
  
   
  }
  else if (optionthirtyseven==="b"){
    props.nextTwo();
    props.statUpdateAthirtyseven();
    props.btnFourthirtyseven()
   }
   else if (optionthirtyseven==="c"){
    props.nextTwo();
    props.statUpdateAthirtyseven();
    props.btnFourthirtyseven()
   }
   else if (optionthirtyseven==="d"){
    props.nextTwo();
    props.statUpdateAthirtyseven();
    props.btnFourthirtyseven()
   }}
   else if (stat==="Not Answered"){
     if(optionthirtyseven===""){
    props.nextThree();
    props.statUpdateKthirtyseven();
    props.btnOnethirtyseven()
    
   }
   
    else if (optionthirtyseven==="a"){
     props.nextFour();
     props.statUpdateAthirtyseven();
     props.btnFourthirtyseven()
     
    }
    else if (optionthirtyseven==="b"){
      props.nextFour();
      props.statUpdateAthirtyseven();
      props.btnFourthirtyseven()
      
     }
     else if (optionthirtyseven==="c"){
      props.nextFour();
      props.statUpdateAthirtyseven();
      props.btnFourthirtyseven()
      
     }
     else if ( optionthirtyseven==="d"){
      props.nextFour();
      props.statUpdateAthirtyseven();
      props.btnFourthirtyseven()
      
     }}
     else if (stat==="Marked"){
     if(optionthirtyseven===""){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnThreethirtyseven()
      
     }
          else if (optionthirtyseven==="a"){
      props.mfrFive();
      props.statUpdateNthirtyseven();
      props.btnThreethirtyseven()

     }
     else if (optionthirtyseven==="b"){
       props.mfrFive();
       props.statUpdateNthirtyseven();
       props.btnThreethirtyseven()

      }
      else if (optionthirtyseven==="c"){
       props.mfrFive();
       props.statUpdateNthirtyseven();
       props.btnThreethirtyseven()

      }
      else if (optionthirtyseven==="d"){
       props.mfrFive();
       props.statUpdateNthirtyseven();
       props.btnThreethirtyseven()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirtyseven==="a"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnThreethirtyseven()

      
     }
     else if (optionthirtyseven==="b"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnThreethirtyseven() 
     }
     else if (optionthirtyseven==="c"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnThreethirtyseven()
     }
     else if (optionthirtyseven==="d"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnThreethirtyseven()
     }}
     else if(stat==="Answered"){
     if (optionthirtyseven==="a"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()

      
     }
     else if (optionthirtyseven==="b"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()

      
     }
     else if ( optionthirtyseven==="c"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()
      
     }
     else if (optionthirtyseven==="d"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirtyseven===""){
  props.mfrOne();
  props.statUpdateMthirtyseven();
  props.btnTwothirtyseven()
 }
 
  else if (optionthirtyseven==="a"){
   props.mfrTwo();
   props.statUpdateNthirtyseven();
   props.btnThreethirtyseven()
  }
  else if (optionthirtyseven==="b"){
    props.mfrTwo();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
  

   }
   else if (optionthirtyseven==="c"){
    props.mfrTwo();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
  
   }
   else if (optionthirtyseven==="d"){
    props.mfrTwo();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirtyseven===""){
  props.mfrThree();
  props.statUpdateMthirtyseven();
  props.btnTwothirtyseven();
 }
 else if (optionthirtyseven==="a"){
  props.mfrFour();
  props.statUpdateNthirtyseven();
  props.btnThreethirtyseven()
 }
 else if (optionthirtyseven==="b"){
   props.mfrFour();
   props.statUpdateNthirtyseven();
   props.btnThreethirtyseven()
  }
  else if (optionthirtyseven==="c"){
   props.mfrFour();
   props.statUpdateNthirtyseven();
   props.btnThreethirtyseven()
  }
  else if (optionthirtyseven==="d"){
   props.mfrFour();
   props.statUpdateNthirtyseven();
  props.btnThreethirtyseven()
  }}
  else if (stat==="Marked"){
    if(optionthirtyseven===""){
    props.nextThree();
    props.statUpdateKthirtyseven();
    props.btnTwothirtyseven();
   }
   else if (optionthirtyseven==="a"){
    props.mfrFive();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()


   }
   else if (optionthirtyseven==="b"){
    props.mfrFive();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="c"){
    props.mfrFive();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="d"){
    props.mfrFive();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirtyseven==="a"){
    props.nextThree();
    props.statUpdateKthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="b"){
    props.nextThree();
    props.statUpdateKthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="c"){
    props.nextThree();
    props.statUpdateKthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="d"){
    props.nextThree();
    props.statUpdateKthirtyseven();
    props.btnThreethirtyseven()
   }}
   else if (stat==="Answered"){
     if(optionthirtyseven==="a"){
    props.mfrSix();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="b"){
    props.mfrSix();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="c"){
    props.mfrSix();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="d"){
    props.mfrSix();
    props.statUpdateNthirtyseven();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirtyseven===""){
    props.nexttwo();
    props.statUpdatethirtyseven();
    props.btnOnethirtyseven()
  }
  
   else if (optionthirtyseven==="a"){
    props.nextTwo();
    props.statUpdateAthirtyseven();
    props.btnFourthirtyseven()
   }
   else if (optionthirtyseven==="b"){
     props.nextTwo();
     props.statUpdateAthirtyseven();
     props.btnFourthirtyseven()
    }
    else if (optionthirtyseven==="c"){
     props.nextTwo();
     props.statUpdateAthirtyseven();
     props.btnFourthirtyseven()
    }
    else if (optionthirtyseven==="d"){
     props.nextTwo();
     props.statUpdateAthirtyseven();
     props.btnFourthirtyseven()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirtyseven===""){
   props.nextThree();
   props.statUpdateKthirtyseven();
   props.btnOnethirtyseven()
  }
  else if (optionthirtyseven==="a"){
   props.nextFour();
   props.statUpdateAthirtyseven();
   props.btnFourthirtyseven()
  }
  else if (optionthirtyseven==="b"){
    props.nextFour();
    props.statUpdateAthirtyseven();
    props.btnFourthirtyseven()
   }
   else if (optionthirtyseven==="c"){
    props.nextFour();
    props.statUpdateAthirtyseven();
    props.btnFourthirtyseven()
   }
   else if (optionthirtyseven==="d"){
    props.nextFour();
    props.statUpdateAthirtyseven();
    props.btnFourthirtyseven()
   }}
   else if (stat==="Marked"){
     if(optionthirtyseven===""){
     props.nextThree();
     props.statUpdateKthirtyseven();
     props.btnTwothirtyseven()
    }
    else if (optionthirtyseven==="a"){
     props.mfrFive();
     props.statUpdateNthirtyseven();
     props.btnThreethirtyseven()
    }
    else if (optionthirtyseven==="b"){
     props.mfrFive();
     props.statUpdateNthirtyseven();
     props.btnThreethirtyseven()
    }
    else if ( optionthirtyseven==="c"){
     props.mfrFive();
     props.statUpdateNthirtyseven();
     props.btnThreethirtyseven()
    }
    else if ( optionthirtyseven==="d"){
     props.mfrFive();
     props.statUpdateNthirtyseven();
     props.btnThreethirtyseven()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirtyseven==="a"){
     props.mfrSeven();
     props.statUpdateAthirtyseven();
     props.btnFourthirtyseven()
    }
    else if (optionthirtyseven==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirtyseven();
      props.btnFourthirtyseven()
    }
    else if (optionthirtyseven==="c"){
      props.mfrSeven();
      props.statUpdateAthirtyseven();
      props.btnFourthirtyseven()
    }
    else if ( optionthirtyseven==="d"){
      props.mfrSeven();
      props.statUpdateAthirtyseven();
      props.btnFourthirtyseven()
    }}
    else if (stat==="Answered"){
      if(optionthirtyseven==="a"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()
    }
    else if (optionthirtyseven==="b"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()
    }
    else if (optionthirtyseven==="c"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()
    }
    else if (optionthirtyseven==="d"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()
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
      <h5>Question No.38</h5>
    <p>  {props.BHealthanddiseaseforty}</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirtyseven === 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseasefortyA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirtyseven === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseasefortyB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirtyseven === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseasefortyC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirtyseven === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseasefortyD}
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/thirtynine'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/thirtynine'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/thirtynine'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/thirtyseven'))}>Previous</button>
    
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
     statusthirtyseven:state.statusthirtyseven,
     optionthirtyseven:state.optionthirtyseven,
     BHealthanddiseaseforty:state.BHealthanddiseaseforty,
  BHealthanddiseasefortyA:state.BHealthanddiseasefortyA,
  BHealthanddiseasefortyB:state.BHealthanddiseasefortyB,
  BHealthanddiseasefortyC:state.BHealthanddiseasefortyC,
  BHealthanddiseasefortyD:state.BHealthanddiseasefortyD,
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
    optAthirtyseven:()=>dispatch(optAthirtyseven()),
    optBthirtyseven:()=>dispatch(optBthirtyseven()),
    optCthirtyseven:()=>dispatch(optCthirtyseven()),
    optDthirtyseven:()=>dispatch(optDthirtyseven()),
    statUpdatethirtyseven:()=>dispatch(statUpdatethirtyseven()),
    statUpdateAthirtyseven:()=>dispatch(statUpdateAthirtyseven()),
    statUpdateMthirtyseven:()=>dispatch(statUpdateMthirtyseven()),
    statUpdateNthirtyseven:()=>dispatch(statUpdateNthirtyseven()),
    statUpdateKthirtyseven:()=>dispatch(statUpdateKthirtyseven()),
    btnOnethirtyseven:()=>dispatch(btnOnethirtyseven()),
    btnTwothirtyseven:()=>dispatch(btnTwothirtyseven()),
    btnThreethirtyseven:()=>dispatch(btnThreethirtyseven()),
    btnFourthirtyseven:()=>dispatch(btnFourthirtyseven()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (QuestionThirtyEight)