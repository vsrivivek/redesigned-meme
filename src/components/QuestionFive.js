import React from 'react'
import { timerUpdate,left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven,optAfour,optBfour,optCfour,optDfour,btnOnefour,btnTwofour,btnThreefour,btnFourfour,statUpdatefour,statUpdateAfour,statUpdateKfour,statUpdateMfour,statUpdateNfour } from '../redux'
import { connect } from 'react-redux';
import CakeNumbers from './CakeNumbers';
import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Timer from './Timer ';




function QuestionFive(props) {
  const navigate = useNavigate()  
    var stat=props.statusfour;
    var opt=props.optionfour

  const [optionfour, setOptionfour] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionfour(event.target.value);
    
  }
  
function optionChange(){
 if(optionfour==="a"){
   props.optAfour()
 }
 if(optionfour==="b"){
   props.optBfour()
 }
 if(optionfour==="c"){
   props.optCfour()
 }
 if(optionfour==="d"){
   props.optDfour()
 }
}

 useEffect(()=>{
  setOptionfour(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionfour===""){
  props.nextOne();
  props.statUpdatefour();
  props.btnOnefour()
  
 }
 
  else if (optionfour==="a"){
   props.nextTwo();
   props.statUpdateAfour();
   props.btnFourfour()
  
   
  }
  else if (optionfour==="b"){
    props.nextTwo();
    props.statUpdateAfour();
    props.btnFourfour()
   }
   else if (optionfour==="c"){
    props.nextTwo();
    props.statUpdateAfour();
    props.btnFourfour()
   }
   else if (optionfour==="d"){
    props.nextTwo();
    props.statUpdateAfour();
    props.btnFourfour()
   }}
   else if (stat==="Not Answered"){
     if(optionfour===""){
    props.nextThree();
    props.statUpdateKfour();
    props.btnOnefour()
    
   }
   
    else if (optionfour==="a"){
     props.nextFour();
     props.statUpdateAfour();
     props.btnFourfour()
     
    }
    else if (optionfour==="b"){
      props.nextFour();
      props.statUpdateAfour();
      props.btnFourfour()
      
     }
     else if (optionfour==="c"){
      props.nextFour();
      props.statUpdateAfour();
      props.btnFourfour()
      
     }
     else if ( optionfour==="d"){
      props.nextFour();
      props.statUpdateAfour();
      props.btnFourfour()
      
     }}
     else if (stat==="Marked"){
     if(optionfour===""){
      props.nextThree();
      props.statUpdateKfour();
      props.btnThreefour()
      
     }
          else if (optionfour==="a"){
      props.mfrFive();
      props.statUpdateNfour();
      props.btnThreefour()

     }
     else if (optionfour==="b"){
       props.mfrFive();
       props.statUpdateNfour();
       props.btnThreefour()

      }
      else if (optionfour==="c"){
       props.mfrFive();
       props.statUpdateNfour();
       props.btnThreefour()

      }
      else if (optionfour==="d"){
       props.mfrFive();
       props.statUpdateNfour();
       props.btnThreefour()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionfour==="a"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnThreefour()

      
     }
     else if (optionfour==="b"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnThreefour() 
     }
     else if (optionfour==="c"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnThreefour()
     }
     else if (optionfour==="d"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnThreefour()
     }}
     else if(stat==="Answered"){
     if (optionfour==="a"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()

      
     }
     else if (optionfour==="b"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()

      
     }
     else if ( optionfour==="c"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()
      
     }
     else if (optionfour==="d"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionfour===""){
  props.mfrOne();
  props.statUpdateMfour();
  props.btnTwofour()
 }
 
  else if (optionfour==="a"){
   props.mfrTwo();
   props.statUpdateNfour();
   props.btnThreefour()
  }
  else if (optionfour==="b"){
    props.mfrTwo();
    props.statUpdateNfour();
    props.btnThreefour()
  

   }
   else if (optionfour==="c"){
    props.mfrTwo();
    props.statUpdateNfour();
    props.btnThreefour()
  
   }
   else if (optionfour==="d"){
    props.mfrTwo();
    props.statUpdateNfour();
    props.btnThreefour()

   }}
  
 else if (stat==="Not Answered"){
   if(optionfour===""){
  props.mfrThree();
  props.statUpdateMfour();
  props.btnTwofour();
 }
 else if (optionfour==="a"){
  props.mfrFour();
  props.statUpdateNfour();
  props.btnThreefour()
 }
 else if (optionfour==="b"){
   props.mfrFour();
   props.statUpdateNfour();
   props.btnThreefour()
  }
  else if (optionfour==="c"){
   props.mfrFour();
   props.statUpdateNfour();
   props.btnThreefour()
  }
  else if (optionfour==="d"){
   props.mfrFour();
   props.statUpdateNfour();
  props.btnThreefour()
  }}
  else if (stat==="Marked"){
    if(optionfour===""){
    props.nextThree();
    props.statUpdateKfour();
    props.btnTwofour();
   }
   else if (optionfour==="a"){
    props.mfrFive();
    props.statUpdateNfour();
    props.btnThreefour()


   }
   else if (optionfour==="b"){
    props.mfrFive();
    props.statUpdateNfour();
    props.btnThreefour()
   }
   else if (optionfour==="c"){
    props.mfrFive();
    props.statUpdateNfour();
    props.btnThreefour()
   }
   else if (optionfour==="d"){
    props.mfrFive();
    props.statUpdateNfour();
    props.btnThreefour()
    }}
   else if (stat==="Marked For Review"){
     if(optionfour==="a"){
    props.nextThree();
    props.statUpdateKfour();
    props.btnThreefour()
   }
   else if (optionfour==="b"){
    props.nextThree();
    props.statUpdateKfour();
    props.btnThreefour()
   }
   else if (optionfour==="c"){
    props.nextThree();
    props.statUpdateKfour();
    props.btnThreefour()
   }
   else if (optionfour==="d"){
    props.nextThree();
    props.statUpdateKfour();
    props.btnThreefour()
   }}
   else if (stat==="Answered"){
     if(optionfour==="a"){
    props.mfrSix();
    props.statUpdateNfour();
    props.btnThreefour()
   }
   else if (optionfour==="b"){
    props.mfrSix();
    props.statUpdateNfour();
    props.btnThreefour()
   }
   else if (optionfour==="c"){
    props.mfrSix();
    props.statUpdateNfour();
    props.btnThreefour()
   }
   else if (optionfour==="d"){
    props.mfrSix();
    props.statUpdateNfour();
    props.btnThreefour()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionfour===""){
    props.nexttwo();
    props.statUpdatefour();
    props.btnOnefour()
  }
  
   else if (optionfour==="a"){
    props.nextTwo();
    props.statUpdateAfour();
    props.btnFourfour()
   }
   else if (optionfour==="b"){
     props.nextTwo();
     props.statUpdateAfour();
     props.btnFourfour()
    }
    else if (optionfour==="c"){
     props.nextTwo();
     props.statUpdateAfour();
     props.btnFourfour()
    }
    else if (optionfour==="d"){
     props.nextTwo();
     props.statUpdateAfour();
     props.btnFourfour()
    }}
   
  else if (stat==="Not Answered"){
    if(optionfour===""){
   props.nextThree();
   props.statUpdateKfour();
   props.btnOnefour()
  }
  else if (optionfour==="a"){
   props.nextFour();
   props.statUpdateAfour();
   props.btnFourfour()
  }
  else if (optionfour==="b"){
    props.nextFour();
    props.statUpdateAfour();
    props.btnFourfour()
   }
   else if (optionfour==="c"){
    props.nextFour();
    props.statUpdateAfour();
    props.btnFourfour()
   }
   else if (optionfour==="d"){
    props.nextFour();
    props.statUpdateAfour();
    props.btnFourfour()
   }}
   else if (stat==="Marked"){
     if(optionfour===""){
     props.nextThree();
     props.statUpdateKfour();
     props.btnTwofour()
    }
    else if (optionfour==="a"){
     props.mfrFive();
     props.statUpdateNfour();
     props.btnThreefour()
    }
    else if (optionfour==="b"){
     props.mfrFive();
     props.statUpdateNfour();
     props.btnThreefour()
    }
    else if ( optionfour==="c"){
     props.mfrFive();
     props.statUpdateNfour();
     props.btnThreefour()
    }
    else if ( optionfour==="d"){
     props.mfrFive();
     props.statUpdateNfour();
     props.btnThreefour()
      }}
    else if (stat==="Marked For Review"){
      if(optionfour==="a"){
     props.mfrSeven();
     props.statUpdateAfour();
     props.btnFourfour()
    }
    else if (optionfour==="b"){
      props.mfrSeventwo();
      props.statUpdateAfour();
      props.btnFourfour()
    }
    else if (optionfour==="c"){
      props.mfrSeven();
      props.statUpdateAfour();
      props.btnFourfour()
    }
    else if ( optionfour==="d"){
      props.mfrSeven();
      props.statUpdateAfour();
      props.btnFourfour()
    }}
    else if (stat==="Answered"){
      if(optionfour==="a"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()
    }
    else if (optionfour==="b"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()
    }
    else if (optionfour==="c"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()
    }
    else if (optionfour==="d"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()
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
    <h5>Question No.5 </h5>
    <p> {props.BHealthanddiseaseSix}</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionfour === 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseSixA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionfour === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseSixB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionfour === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseSixC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionfour === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseSixD}
      </div>
       
      
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/six'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/six'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/six'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/four'))}>Previous</button>
    
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
     statusfour:state.statusfour,
     optionfour:state.optionfour,
     BHealthanddiseaseSix:state.BHealthanddiseaseSix,
  BHealthanddiseaseSixA:state.BHealthanddiseaseSixA,
  BHealthanddiseaseSixB:state.BHealthanddiseaseSixB,
  BHealthanddiseaseSixC:state.BHealthanddiseaseSixC,
  BHealthanddiseaseSixD:state.BHealthanddiseaseSixD,
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
    optAfour:()=>dispatch(optAfour()),
    optBfour:()=>dispatch(optBfour()),
    optCfour:()=>dispatch(optCfour()),
    optDfour:()=>dispatch(optDfour()),
    statUpdatefour:()=>dispatch(statUpdatefour()),
    statUpdateAfour:()=>dispatch(statUpdateAfour()),
    statUpdateMfour:()=>dispatch(statUpdateMfour()),
    statUpdateNfour:()=>dispatch(statUpdateNfour()),
    statUpdateKfour:()=>dispatch(statUpdateKfour()),
    btnOnefour:()=>dispatch(btnOnefour()),
    btnTwofour:()=>dispatch(btnTwofour()),
    btnThreefour:()=>dispatch(btnThreefour()),
    btnFourfour:()=>dispatch(btnFourfour()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (QuestionFive)