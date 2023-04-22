import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirteen,optBthirteen,optCthirteen,optDthirteen,btnOnethirteen,btnTwothirteen,btnThreethirteen,btnFourthirteen,statUpdatethirteen,statUpdateAthirteen,statUpdateKthirteen,statUpdateMthirteen,statUpdateNthirteen,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Timer from '../../components/Timer ';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';



function QuestionFourteen(props) {
  const navigate = useNavigate()  
    var stat=props.statusthirteen;
    var opt=props.optionthirteen

  const [optionthirteen, setOptionthirteen] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirteen(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirteen==="a"){
   props.optAthirteen()
 }
 if(optionthirteen==="b"){
   props.optBthirteen()
 }
 if(optionthirteen==="c"){
   props.optCthirteen()
 }
 if(optionthirteen==="d"){
   props.optDthirteen()
 }
}

 useEffect(()=>{
  setOptionthirteen(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirteen===""){
  props.nextOne();
  props.statUpdatethirteen();
  props.btnOnethirteen()
  
 }
 
  else if (optionthirteen==="a"){
   props.nextTwo();
   props.statUpdateAthirteen();
   props.btnFourthirteen()
  
   
  }
  else if (optionthirteen==="b"){
    props.nextTwo();
    props.statUpdateAthirteen();
    props.btnFourthirteen()
   }
   else if (optionthirteen==="c"){
    props.nextTwo();
    props.statUpdateAthirteen();
    props.btnFourthirteen()
   }
   else if (optionthirteen==="d"){
    props.nextTwo();
    props.statUpdateAthirteen();
    props.btnFourthirteen()
   }}
   else if (stat==="Not Answered"){
     if(optionthirteen===""){
    props.nextThree();
    props.statUpdateKthirteen();
    props.btnOnethirteen()
    
   }
   
    else if (optionthirteen==="a"){
     props.nextFour();
     props.statUpdateAthirteen();
     props.btnFourthirteen()
     
    }
    else if (optionthirteen==="b"){
      props.nextFour();
      props.statUpdateAthirteen();
      props.btnFourthirteen()
      
     }
     else if (optionthirteen==="c"){
      props.nextFour();
      props.statUpdateAthirteen();
      props.btnFourthirteen()
      
     }
     else if ( optionthirteen==="d"){
      props.nextFour();
      props.statUpdateAthirteen();
      props.btnFourthirteen()
      
     }}
     else if (stat==="Marked"){
     if(optionthirteen===""){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnThreethirteen()
      
     }
          else if (optionthirteen==="a"){
      props.mfrFive();
      props.statUpdateNthirteen();
      props.btnThreethirteen()

     }
     else if (optionthirteen==="b"){
       props.mfrFive();
       props.statUpdateNthirteen();
       props.btnThreethirteen()

      }
      else if (optionthirteen==="c"){
       props.mfrFive();
       props.statUpdateNthirteen();
       props.btnThreethirteen()

      }
      else if (optionthirteen==="d"){
       props.mfrFive();
       props.statUpdateNthirteen();
       props.btnThreethirteen()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirteen==="a"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnThreethirteen()

      
     }
     else if (optionthirteen==="b"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnThreethirteen() 
     }
     else if (optionthirteen==="c"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnThreethirteen()
     }
     else if (optionthirteen==="d"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnThreethirteen()
     }}
     else if(stat==="Answered"){
     if (optionthirteen==="a"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()

      
     }
     else if (optionthirteen==="b"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()

      
     }
     else if ( optionthirteen==="c"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()
      
     }
     else if (optionthirteen==="d"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirteen===""){
  props.mfrOne();
  props.statUpdateMthirteen();
  props.btnTwothirteen()
 }
 
  else if (optionthirteen==="a"){
   props.mfrTwo();
   props.statUpdateNthirteen();
   props.btnThreethirteen()
  }
  else if (optionthirteen==="b"){
    props.mfrTwo();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
  

   }
   else if (optionthirteen==="c"){
    props.mfrTwo();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
  
   }
   else if (optionthirteen==="d"){
    props.mfrTwo();
    props.statUpdateNthirteen();
    props.btnThreethirteen()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirteen===""){
  props.mfrThree();
  props.statUpdateMthirteen();
  props.btnTwothirteen();
 }
 else if (optionthirteen==="a"){
  props.mfrFour();
  props.statUpdateNthirteen();
  props.btnThreethirteen()
 }
 else if (optionthirteen==="b"){
   props.mfrFour();
   props.statUpdateNthirteen();
   props.btnThreethirteen()
  }
  else if (optionthirteen==="c"){
   props.mfrFour();
   props.statUpdateNthirteen();
   props.btnThreethirteen()
  }
  else if (optionthirteen==="d"){
   props.mfrFour();
   props.statUpdateNthirteen();
  props.btnThreethirteen()
  }}
  else if (stat==="Marked"){
    if(optionthirteen===""){
    props.nextThree();
    props.statUpdateKthirteen();
    props.btnTwothirteen();
   }
   else if (optionthirteen==="a"){
    props.mfrFive();
    props.statUpdateNthirteen();
    props.btnThreethirteen()


   }
   else if (optionthirteen==="b"){
    props.mfrFive();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="c"){
    props.mfrFive();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="d"){
    props.mfrFive();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirteen==="a"){
    props.nextThree();
    props.statUpdateKthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="b"){
    props.nextThree();
    props.statUpdateKthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="c"){
    props.nextThree();
    props.statUpdateKthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="d"){
    props.nextThree();
    props.statUpdateKthirteen();
    props.btnThreethirteen()
   }}
   else if (stat==="Answered"){
     if(optionthirteen==="a"){
    props.mfrSix();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="b"){
    props.mfrSix();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="c"){
    props.mfrSix();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="d"){
    props.mfrSix();
    props.statUpdateNthirteen();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirteen===""){
    props.nexttwo();
    props.statUpdatethirteen();
    props.btnOnethirteen()
  }
  
   else if (optionthirteen==="a"){
    props.nextTwo();
    props.statUpdateAthirteen();
    props.btnFourthirteen()
   }
   else if (optionthirteen==="b"){
     props.nextTwo();
     props.statUpdateAthirteen();
     props.btnFourthirteen()
    }
    else if (optionthirteen==="c"){
     props.nextTwo();
     props.statUpdateAthirteen();
     props.btnFourthirteen()
    }
    else if (optionthirteen==="d"){
     props.nextTwo();
     props.statUpdateAthirteen();
     props.btnFourthirteen()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirteen===""){
   props.nextThree();
   props.statUpdateKthirteen();
   props.btnOnethirteen()
  }
  else if (optionthirteen==="a"){
   props.nextFour();
   props.statUpdateAthirteen();
   props.btnFourthirteen()
  }
  else if (optionthirteen==="b"){
    props.nextFour();
    props.statUpdateAthirteen();
    props.btnFourthirteen()
   }
   else if (optionthirteen==="c"){
    props.nextFour();
    props.statUpdateAthirteen();
    props.btnFourthirteen()
   }
   else if (optionthirteen==="d"){
    props.nextFour();
    props.statUpdateAthirteen();
    props.btnFourthirteen()
   }}
   else if (stat==="Marked"){
     if(optionthirteen===""){
     props.nextThree();
     props.statUpdateKthirteen();
     props.btnTwothirteen()
    }
    else if (optionthirteen==="a"){
     props.mfrFive();
     props.statUpdateNthirteen();
     props.btnThreethirteen()
    }
    else if (optionthirteen==="b"){
     props.mfrFive();
     props.statUpdateNthirteen();
     props.btnThreethirteen()
    }
    else if ( optionthirteen==="c"){
     props.mfrFive();
     props.statUpdateNthirteen();
     props.btnThreethirteen()
    }
    else if ( optionthirteen==="d"){
     props.mfrFive();
     props.statUpdateNthirteen();
     props.btnThreethirteen()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirteen==="a"){
     props.mfrSeven();
     props.statUpdateAthirteen();
     props.btnFourthirteen()
    }
    else if (optionthirteen==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirteen();
      props.btnFourthirteen()
    }
    else if (optionthirteen==="c"){
      props.mfrSeven();
      props.statUpdateAthirteen();
      props.btnFourthirteen()
    }
    else if ( optionthirteen==="d"){
      props.mfrSeven();
      props.statUpdateAthirteen();
      props.btnFourthirteen()
    }}
    else if (stat==="Answered"){
      if(optionthirteen==="a"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()
    }
    else if (optionthirteen==="b"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()
    }
    else if (optionthirteen==="c"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()
    }
    else if (optionthirteen==="d"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()
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
      <h5>Question No.14</h5>
    <p>  {props.BHealthanddiseaseFifteen}</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirteen === 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseFifteenA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirteen === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseFifteenB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirteen === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseFifteenC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirteen === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseFifteenD}
      </div>       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/fifteen'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/fifteen'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/fifteen'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/thirteen'))}>Previous</button>
    
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
     statusthirteen:state.statusthirteen,
     optionthirteen:state.optionthirteen,
     BHealthanddiseaseFifteen:state.BHealthanddiseaseFifteen,
  BHealthanddiseaseFifteenA:state.BHealthanddiseaseFifteenA,
  BHealthanddiseaseFifteenB:state.BHealthanddiseaseFifteenB,
  BHealthanddiseaseFifteenC:state.BHealthanddiseaseFifteenC,
  BHealthanddiseaseFifteenD:state.BHealthanddiseaseFifteenD,
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
    optAthirteen:()=>dispatch(optAthirteen()),
    optBthirteen:()=>dispatch(optBthirteen()),
    optCthirteen:()=>dispatch(optCthirteen()),
    optDthirteen:()=>dispatch(optDthirteen()),
    statUpdatethirteen:()=>dispatch(statUpdatethirteen()),
    statUpdateAthirteen:()=>dispatch(statUpdateAthirteen()),
    statUpdateMthirteen:()=>dispatch(statUpdateMthirteen()),
    statUpdateNthirteen:()=>dispatch(statUpdateNthirteen()),
    statUpdateKthirteen:()=>dispatch(statUpdateKthirteen()),
    btnOnethirteen:()=>dispatch(btnOnethirteen()),
    btnTwothirteen:()=>dispatch(btnTwothirteen()),
    btnThreethirteen:()=>dispatch(btnThreethirteen()),
    btnFourthirteen:()=>dispatch(btnFourthirteen()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (QuestionFourteen)