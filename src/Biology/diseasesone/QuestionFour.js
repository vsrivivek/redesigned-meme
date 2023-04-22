import React from 'react'
import { timerUpdate,left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven,optAthree,optBthree,optCthree,optDthree,btnOnethree,btnTwothree,btnThreethree,btnFourthree,statUpdatethree,statUpdateAthree,statUpdateKthree,statUpdateMthree,statUpdateNthree } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Timer from '../../components/Timer ';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';


function QuestionFour(props) {
  const navigate = useNavigate()  
    var stat=props.statusthree;
    var opt=props.optionthree

  const [optionthree, setOptionthree] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthree(event.target.value);
    
  }
  
function optionChange(){
 if(optionthree==="a"){
   props.optAthree()
 }
 if(optionthree==="b"){
   props.optBthree()
 }
 if(optionthree==="c"){
   props.optCthree()
 }
 if(optionthree==="d"){
   props.optDthree()
 }
}

 useEffect(()=>{
  setOptionthree(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthree===""){
  props.nextOne();
  props.statUpdatethree();
  props.btnOnethree()
  
 }
 
  else if (optionthree==="a"){
   props.nextTwo();
   props.statUpdateAthree();
   props.btnFourthree()
  
   
  }
  else if (optionthree==="b"){
    props.nextTwo();
    props.statUpdateAthree();
    props.btnFourthree()
   }
   else if (optionthree==="c"){
    props.nextTwo();
    props.statUpdateAthree();
    props.btnFourthree()
   }
   else if (optionthree==="d"){
    props.nextTwo();
    props.statUpdateAthree();
    props.btnFourthree()
   }}
   else if (stat==="Not Answered"){
     if(optionthree===""){
    props.nextThree();
    props.statUpdateKthree();
    props.btnOnethree()
    
   }
   
    else if (optionthree==="a"){
     props.nextFour();
     props.statUpdateAthree();
     props.btnFourthree()
     
    }
    else if (optionthree==="b"){
      props.nextFour();
      props.statUpdateAthree();
      props.btnFourthree()
      
     }
     else if (optionthree==="c"){
      props.nextFour();
      props.statUpdateAthree();
      props.btnFourthree()
      
     }
     else if ( optionthree==="d"){
      props.nextFour();
      props.statUpdateAthree();
      props.btnFourthree()
      
     }}
     else if (stat==="Marked"){
     if(optionthree===""){
      props.nextThree();
      props.statUpdateKthree();
      props.btnThreethree()
      
     }
          else if (optionthree==="a"){
      props.mfrFive();
      props.statUpdateNthree();
      props.btnThreethree()

     }
     else if (optionthree==="b"){
       props.mfrFive();
       props.statUpdateNthree();
       props.btnThreethree()

      }
      else if (optionthree==="c"){
       props.mfrFive();
       props.statUpdateNthree();
       props.btnThreethree()

      }
      else if (optionthree==="d"){
       props.mfrFive();
       props.statUpdateNthree();
       props.btnThreethree()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthree==="a"){
      props.nextThree();
      props.statUpdateKthree();
      props.btnThreethree()

      
     }
     else if (optionthree==="b"){
      props.nextThree();
      props.statUpdateKthree();
      props.btnThreethree() 
     }
     else if (optionthree==="c"){
      props.nextThree();
      props.statUpdateKthree();
      props.btnThreethree()
     }
     else if (optionthree==="d"){
      props.nextThree();
      props.statUpdateKthree();
      props.btnThreethree()
     }}
     else if(stat==="Answered"){
     if (optionthree==="a"){
      props.nextThree();
      props.statUpdateKthree();
      props.btnFourthree()

      
     }
     else if (optionthree==="b"){
      props.nextThree();
      props.statUpdateKthree();
      props.btnFourthree()

      
     }
     else if ( optionthree==="c"){
      props.nextThree();
      props.statUpdateKthree();
      props.btnFourthree()
      
     }
     else if (optionthree==="d"){
      props.nextThree();
      props.statUpdateKthree();
      props.btnFourthree()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthree===""){
  props.mfrOne();
  props.statUpdateMthree();
  props.btnTwothree()
 }
 
  else if (optionthree==="a"){
   props.mfrTwo();
   props.statUpdateNthree();
   props.btnThreethree()
  }
  else if (optionthree==="b"){
    props.mfrTwo();
    props.statUpdateNthree();
    props.btnThreethree()
  

   }
   else if (optionthree==="c"){
    props.mfrTwo();
    props.statUpdateNthree();
    props.btnThreethree()
  
   }
   else if (optionthree==="d"){
    props.mfrTwo();
    props.statUpdateNthree();
    props.btnThreethree()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthree===""){
  props.mfrThree();
  props.statUpdateMthree();
  props.btnTwothree();
 }
 else if (optionthree==="a"){
  props.mfrFour();
  props.statUpdateNthree();
  props.btnThreethree()
 }
 else if (optionthree==="b"){
   props.mfrFour();
   props.statUpdateNthree();
   props.btnThreethree()
  }
  else if (optionthree==="c"){
   props.mfrFour();
   props.statUpdateNthree();
   props.btnThreethree()
  }
  else if (optionthree==="d"){
   props.mfrFour();
   props.statUpdateNthree();
  props.btnThreethree()
  }}
  else if (stat==="Marked"){
    if(optionthree===""){
    props.nextThree();
    props.statUpdateKthree();
    props.btnTwothree();
   }
   else if (optionthree==="a"){
    props.mfrFive();
    props.statUpdateNthree();
    props.btnThreethree()


   }
   else if (optionthree==="b"){
    props.mfrFive();
    props.statUpdateNthree();
    props.btnThreethree()
   }
   else if (optionthree==="c"){
    props.mfrFive();
    props.statUpdateNthree();
    props.btnThreethree()
   }
   else if (optionthree==="d"){
    props.mfrFive();
    props.statUpdateNthree();
    props.btnThreethree()
    }}
   else if (stat==="Marked For Review"){
     if(optionthree==="a"){
    props.nextThree();
    props.statUpdateKthree();
    props.btnThreethree()
   }
   else if (optionthree==="b"){
    props.nextThree();
    props.statUpdateKthree();
    props.btnThreethree()
   }
   else if (optionthree==="c"){
    props.nextThree();
    props.statUpdateKthree();
    props.btnThreethree()
   }
   else if (optionthree==="d"){
    props.nextThree();
    props.statUpdateKthree();
    props.btnThreethree()
   }}
   else if (stat==="Answered"){
     if(optionthree==="a"){
    props.mfrSix();
    props.statUpdateNthree();
    props.btnThreethree()
   }
   else if (optionthree==="b"){
    props.mfrSix();
    props.statUpdateNthree();
    props.btnThreethree()
   }
   else if (optionthree==="c"){
    props.mfrSix();
    props.statUpdateNthree();
    props.btnThreethree()
   }
   else if (optionthree==="d"){
    props.mfrSix();
    props.statUpdateNthree();
    props.btnThreethree()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthree===""){
    props.nexttwo();
    props.statUpdatethree();
    props.btnOnethree()
  }
  
   else if (optionthree==="a"){
    props.nextTwo();
    props.statUpdateAthree();
    props.btnFourthree()
   }
   else if (optionthree==="b"){
     props.nextTwo();
     props.statUpdateAthree();
     props.btnFourthree()
    }
    else if (optionthree==="c"){
     props.nextTwo();
     props.statUpdateAthree();
     props.btnFourthree()
    }
    else if (optionthree==="d"){
     props.nextTwo();
     props.statUpdateAthree();
     props.btnFourthree()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthree===""){
   props.nextThree();
   props.statUpdateKthree();
   props.btnOnethree()
  }
  else if (optionthree==="a"){
   props.nextFour();
   props.statUpdateAthree();
   props.btnFourthree()
  }
  else if (optionthree==="b"){
    props.nextFour();
    props.statUpdateAthree();
    props.btnFourthree()
   }
   else if (optionthree==="c"){
    props.nextFour();
    props.statUpdateAthree();
    props.btnFourthree()
   }
   else if (optionthree==="d"){
    props.nextFour();
    props.statUpdateAthree();
    props.btnFourthree()
   }}
   else if (stat==="Marked"){
     if(optionthree===""){
     props.nextThree();
     props.statUpdateKthree();
     props.btnTwothree()
    }
    else if (optionthree==="a"){
     props.mfrFive();
     props.statUpdateNthree();
     props.btnThreethree()
    }
    else if (optionthree==="b"){
     props.mfrFive();
     props.statUpdateNthree();
     props.btnThreethree()
    }
    else if ( optionthree==="c"){
     props.mfrFive();
     props.statUpdateNthree();
     props.btnThreethree()
    }
    else if ( optionthree==="d"){
     props.mfrFive();
     props.statUpdateNthree();
     props.btnThreethree()
      }}
    else if (stat==="Marked For Review"){
      if(optionthree==="a"){
     props.mfrSeven();
     props.statUpdateAthree();
     props.btnFourthree()
    }
    else if (optionthree==="b"){
      props.mfrSeventwo();
      props.statUpdateAthree();
      props.btnFourthree()
    }
    else if (optionthree==="c"){
      props.mfrSeven();
      props.statUpdateAthree();
      props.btnFourthree()
    }
    else if ( optionthree==="d"){
      props.mfrSeven();
      props.statUpdateAthree();
      props.btnFourthree()
    }}
    else if (stat==="Answered"){
      if(optionthree==="a"){
      props.nextThree();
      props.statUpdateKthree();
      props.btnFourthree()
    }
    else if (optionthree==="b"){
      props.nextThree();
      props.statUpdateKthree();
      props.btnFourthree()
    }
    else if (optionthree==="c"){
      props.nextThree();
      props.statUpdateKthree();
      props.btnFourthree()
    }
    else if (optionthree==="d"){
      props.nextThree();
      props.statUpdateKthree();
      props.btnFourthree()
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
    <h5>Question No.4 </h5>
    <p>  {props.BHealthanddiseaseFive}</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthree === 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseFiveA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthree === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseFiveB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthree === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseFiveC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthree === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseFiveD}
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>

         
        <button onClick={()=>(clickHanlderNext)(navigate('/five'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/five'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/five'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/three'))}>Previous</button>
        
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
     statusthree:state.statusthree,
     optionthree:state.optionthree,
     BHealthanddiseaseFive:state.BHealthanddiseaseFive,
  BHealthanddiseaseFiveA:state.BHealthanddiseaseFiveA,
  BHealthanddiseaseFiveB:state.BHealthanddiseaseFiveB,
  BHealthanddiseaseFiveC:state.BHealthanddiseaseFiveC,
  BHealthanddiseaseFiveD:state.BHealthanddiseaseFiveD,
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
    optAthree:()=>dispatch(optAthree()),
    optBthree:()=>dispatch(optBthree()),
    optCthree:()=>dispatch(optCthree()),
    optDthree:()=>dispatch(optDthree()),
    statUpdatethree:()=>dispatch(statUpdatethree()),
    statUpdateAthree:()=>dispatch(statUpdateAthree()),
    statUpdateMthree:()=>dispatch(statUpdateMthree()),
    statUpdateNthree:()=>dispatch(statUpdateNthree()),
    statUpdateKthree:()=>dispatch(statUpdateKthree()),
    btnOnethree:()=>dispatch(btnOnethree()),
    btnTwothree:()=>dispatch(btnTwothree()),
    btnThreethree:()=>dispatch(btnThreethree()),
    btnFourthree:()=>dispatch(btnFourthree()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (QuestionFour)