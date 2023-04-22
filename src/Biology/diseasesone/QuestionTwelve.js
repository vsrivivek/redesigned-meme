import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAeleven,optBeleven,optCeleven,optDeleven,btnOneeleven,btnTwoeleven,btnThreeeleven,btnFoureleven,statUpdateeleven,statUpdateAeleven,statUpdateKeleven,statUpdateMeleven,statUpdateNeleven,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
import Timer from '../../components/Timer ';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Timer from '../../components/Timer ';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';



function QuestionTwelve(props) {
  const navigate = useNavigate()  
    var stat=props.statuseleven;
    var opt=props.optioneleven

  const [optioneleven, setOptioneleven] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptioneleven(event.target.value);
    
  }
  
function optionChange(){
 if(optioneleven==="a"){
   props.optAeleven()
 }
 if(optioneleven==="b"){
   props.optBeleven()
 }
 if(optioneleven==="c"){
   props.optCeleven()
 }
 if(optioneleven==="d"){
   props.optDeleven()
 }
}

 useEffect(()=>{
  setOptioneleven(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optioneleven===""){
  props.nextOne();
  props.statUpdateeleven();
  props.btnOneeleven()
  
 }
 
  else if (optioneleven==="a"){
   props.nextTwo();
   props.statUpdateAeleven();
   props.btnFoureleven()
  
   
  }
  else if (optioneleven==="b"){
    props.nextTwo();
    props.statUpdateAeleven();
    props.btnFoureleven()
   }
   else if (optioneleven==="c"){
    props.nextTwo();
    props.statUpdateAeleven();
    props.btnFoureleven()
   }
   else if (optioneleven==="d"){
    props.nextTwo();
    props.statUpdateAeleven();
    props.btnFoureleven()
   }}
   else if (stat==="Not Answered"){
     if(optioneleven===""){
    props.nextThree();
    props.statUpdateKeleven();
    props.btnOneeleven()
    
   }
   
    else if (optioneleven==="a"){
     props.nextFour();
     props.statUpdateAeleven();
     props.btnFoureleven()
     
    }
    else if (optioneleven==="b"){
      props.nextFour();
      props.statUpdateAeleven();
      props.btnFoureleven()
      
     }
     else if (optioneleven==="c"){
      props.nextFour();
      props.statUpdateAeleven();
      props.btnFoureleven()
      
     }
     else if ( optioneleven==="d"){
      props.nextFour();
      props.statUpdateAeleven();
      props.btnFoureleven()
      
     }}
     else if (stat==="Marked"){
     if(optioneleven===""){
      props.nextThree();
      props.statUpdateKeleven();
      props.btnThreeeleven()
      
     }
          else if (optioneleven==="a"){
      props.mfrFive();
      props.statUpdateNeleven();
      props.btnThreeeleven()

     }
     else if (optioneleven==="b"){
       props.mfrFive();
       props.statUpdateNeleven();
       props.btnThreeeleven()

      }
      else if (optioneleven==="c"){
       props.mfrFive();
       props.statUpdateNeleven();
       props.btnThreeeleven()

      }
      else if (optioneleven==="d"){
       props.mfrFive();
       props.statUpdateNeleven();
       props.btnThreeeleven()

        }}
     
     else if (stat==="Marked For Review"){
     if(optioneleven==="a"){
      props.nextThree();
      props.statUpdateKeleven();
      props.btnThreeeleven()

      
     }
     else if (optioneleven==="b"){
      props.nextThree();
      props.statUpdateKeleven();
      props.btnThreeeleven() 
     }
     else if (optioneleven==="c"){
      props.nextThree();
      props.statUpdateKeleven();
      props.btnThreeeleven()
     }
     else if (optioneleven==="d"){
      props.nextThree();
      props.statUpdateKeleven();
      props.btnThreeeleven()
     }}
     else if(stat==="Answered"){
     if (optioneleven==="a"){
      props.nextThree();
      props.statUpdateKeleven();
      props.btnFoureleven()

      
     }
     else if (optioneleven==="b"){
      props.nextThree();
      props.statUpdateKeleven();
      props.btnFoureleven()

      
     }
     else if ( optioneleven==="c"){
      props.nextThree();
      props.statUpdateKeleven();
      props.btnFoureleven()
      
     }
     else if (optioneleven==="d"){
      props.nextThree();
      props.statUpdateKeleven();
      props.btnFoureleven()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optioneleven===""){
  props.mfrOne();
  props.statUpdateMeleven();
  props.btnTwoeleven()
 }
 
  else if (optioneleven==="a"){
   props.mfrTwo();
   props.statUpdateNeleven();
   props.btnThreeeleven()
  }
  else if (optioneleven==="b"){
    props.mfrTwo();
    props.statUpdateNeleven();
    props.btnThreeeleven()
  

   }
   else if (optioneleven==="c"){
    props.mfrTwo();
    props.statUpdateNeleven();
    props.btnThreeeleven()
  
   }
   else if (optioneleven==="d"){
    props.mfrTwo();
    props.statUpdateNeleven();
    props.btnThreeeleven()

   }}
  
 else if (stat==="Not Answered"){
   if(optioneleven===""){
  props.mfrThree();
  props.statUpdateMeleven();
  props.btnTwoeleven();
 }
 else if (optioneleven==="a"){
  props.mfrFour();
  props.statUpdateNeleven();
  props.btnThreeeleven()
 }
 else if (optioneleven==="b"){
   props.mfrFour();
   props.statUpdateNeleven();
   props.btnThreeeleven()
  }
  else if (optioneleven==="c"){
   props.mfrFour();
   props.statUpdateNeleven();
   props.btnThreeeleven()
  }
  else if (optioneleven==="d"){
   props.mfrFour();
   props.statUpdateNeleven();
  props.btnThreeeleven()
  }}
  else if (stat==="Marked"){
    if(optioneleven===""){
    props.nextThree();
    props.statUpdateKeleven();
    props.btnTwoeleven();
   }
   else if (optioneleven==="a"){
    props.mfrFive();
    props.statUpdateNeleven();
    props.btnThreeeleven()


   }
   else if (optioneleven==="b"){
    props.mfrFive();
    props.statUpdateNeleven();
    props.btnThreeeleven()
   }
   else if (optioneleven==="c"){
    props.mfrFive();
    props.statUpdateNeleven();
    props.btnThreeeleven()
   }
   else if (optioneleven==="d"){
    props.mfrFive();
    props.statUpdateNeleven();
    props.btnThreeeleven()
    }}
   else if (stat==="Marked For Review"){
     if(optioneleven==="a"){
    props.nextThree();
    props.statUpdateKeleven();
    props.btnThreeeleven()
   }
   else if (optioneleven==="b"){
    props.nextThree();
    props.statUpdateKeleven();
    props.btnThreeeleven()
   }
   else if (optioneleven==="c"){
    props.nextThree();
    props.statUpdateKeleven();
    props.btnThreeeleven()
   }
   else if (optioneleven==="d"){
    props.nextThree();
    props.statUpdateKeleven();
    props.btnThreeeleven()
   }}
   else if (stat==="Answered"){
     if(optioneleven==="a"){
    props.mfrSix();
    props.statUpdateNeleven();
    props.btnThreeeleven()
   }
   else if (optioneleven==="b"){
    props.mfrSix();
    props.statUpdateNeleven();
    props.btnThreeeleven()
   }
   else if (optioneleven==="c"){
    props.mfrSix();
    props.statUpdateNeleven();
    props.btnThreeeleven()
   }
   else if (optioneleven==="d"){
    props.mfrSix();
    props.statUpdateNeleven();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optioneleven===""){
    props.nexttwo();
    props.statUpdateeleven();
    props.btnOneeleven()
  }
  
   else if (optioneleven==="a"){
    props.nextTwo();
    props.statUpdateAeleven();
    props.btnFoureleven()
   }
   else if (optioneleven==="b"){
     props.nextTwo();
     props.statUpdateAeleven();
     props.btnFoureleven()
    }
    else if (optioneleven==="c"){
     props.nextTwo();
     props.statUpdateAeleven();
     props.btnFoureleven()
    }
    else if (optioneleven==="d"){
     props.nextTwo();
     props.statUpdateAeleven();
     props.btnFoureleven()
    }}
   
  else if (stat==="Not Answered"){
    if(optioneleven===""){
   props.nextThree();
   props.statUpdateKeleven();
   props.btnOneeleven()
  }
  else if (optioneleven==="a"){
   props.nextFour();
   props.statUpdateAeleven();
   props.btnFoureleven()
  }
  else if (optioneleven==="b"){
    props.nextFour();
    props.statUpdateAeleven();
    props.btnFoureleven()
   }
   else if (optioneleven==="c"){
    props.nextFour();
    props.statUpdateAeleven();
    props.btnFoureleven()
   }
   else if (optioneleven==="d"){
    props.nextFour();
    props.statUpdateAeleven();
    props.btnFoureleven()
   }}
   else if (stat==="Marked"){
     if(optioneleven===""){
     props.nextThree();
     props.statUpdateKeleven();
     props.btnTwoeleven()
    }
    else if (optioneleven==="a"){
     props.mfrFive();
     props.statUpdateNeleven();
     props.btnThreeeleven()
    }
    else if (optioneleven==="b"){
     props.mfrFive();
     props.statUpdateNeleven();
     props.btnThreeeleven()
    }
    else if ( optioneleven==="c"){
     props.mfrFive();
     props.statUpdateNeleven();
     props.btnThreeeleven()
    }
    else if ( optioneleven==="d"){
     props.mfrFive();
     props.statUpdateNeleven();
     props.btnThreeeleven()
      }}
    else if (stat==="Marked For Review"){
      if(optioneleven==="a"){
     props.mfrSeven();
     props.statUpdateAeleven();
     props.btnFoureleven()
    }
    else if (optioneleven==="b"){
      props.mfrSeventwo();
      props.statUpdateAeleven();
      props.btnFoureleven()
    }
    else if (optioneleven==="c"){
      props.mfrSeven();
      props.statUpdateAeleven();
      props.btnFoureleven()
    }
    else if ( optioneleven==="d"){
      props.mfrSeven();
      props.statUpdateAeleven();
      props.btnFoureleven()
    }}
    else if (stat==="Answered"){
      if(optioneleven==="a"){
      props.nextThree();
      props.statUpdateKeleven();
      props.btnFoureleven()
    }
    else if (optioneleven==="b"){
      props.nextThree();
      props.statUpdateKeleven();
      props.btnFoureleven()
    }
    else if (optioneleven==="c"){
      props.nextThree();
      props.statUpdateKeleven();
      props.btnFoureleven()
    }
    else if (optioneleven==="d"){
      props.nextThree();
      props.statUpdateKeleven();
      props.btnFoureleven()
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
      <h5>Question No.12</h5>
    <p>  {props.BHealthanddiseaseThirteen}</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optioneleven=== 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirteenA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optioneleven === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirteenB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optioneleven === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirteenC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optioneleven === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirteenD}
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/thirteen'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/thirteen'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/thirteen'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/eleven'))}>Previous</button>
    
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
     statuseleven:state.statuseleven,
     optioneleven:state.optioneleven,
     BHealthanddiseaseThirteen:state.BHealthanddiseaseThirteen,
  BHealthanddiseaseThirteenA:state.BHealthanddiseaseThirteenA,
  BHealthanddiseaseThirteenB:state.BHealthanddiseaseThirteenB,
  BHealthanddiseaseThirteenC:state.BHealthanddiseaseThirteenC,
  BHealthanddiseaseThirteenD:state.BHealthanddiseaseThirteenD,
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
    optAeleven:()=>dispatch(optAeleven()),
    optBeleven:()=>dispatch(optBeleven()),
    optCeleven:()=>dispatch(optCeleven()),
    optDeleven:()=>dispatch(optDeleven()),
    statUpdateeleven:()=>dispatch(statUpdateeleven()),
    statUpdateAeleven:()=>dispatch(statUpdateAeleven()),
    statUpdateMeleven:()=>dispatch(statUpdateMeleven()),
    statUpdateNeleven:()=>dispatch(statUpdateNeleven()),
    statUpdateKeleven:()=>dispatch(statUpdateKeleven()),
    btnOneeleven:()=>dispatch(btnOneeleven()),
    btnTwoeleven:()=>dispatch(btnTwoeleven()),
    btnThreeeleven:()=>dispatch(btnThreeeleven()),
    btnFoureleven:()=>dispatch(btnFoureleven()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (QuestionTwelve)