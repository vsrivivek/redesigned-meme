import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwentytwo,optBtwentytwo,optCtwentytwo,optDtwentytwo,btnOnetwentytwo,btnTwotwentytwo,btnThreetwentytwo,btnFourtwentytwo,statUpdatetwentytwo,statUpdateAtwentytwo,statUpdateKtwentytwo,statUpdateMtwentytwo,statUpdateNtwentytwo,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Timer from '../../components/Timer ';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';



function QuestionTwentyThree(props) {
  const navigate = useNavigate()  
    var stat=props.statustwentytwo;
    var opt=props.optiontwentytwo

  const [optiontwentytwo, setOptiontwentytwo] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptiontwentytwo(event.target.value);
    
  }
  
function optionChange(){
 if(optiontwentytwo==="a"){
   props.optAtwentytwo()
 }
 if(optiontwentytwo==="b"){
   props.optBtwentytwo()
 }
 if(optiontwentytwo==="c"){
   props.optCtwentytwo()
 }
 if(optiontwentytwo==="d"){
   props.optDtwentytwo()
 }
}

 useEffect(()=>{
  setOptiontwentytwo(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optiontwentytwo===""){
  props.nextOne();
  props.statUpdatetwentytwo();
  props.btnOnetwentytwo()
  
 }
 
  else if (optiontwentytwo==="a"){
   props.nextTwo();
   props.statUpdateAtwentytwo();
   props.btnFourtwentytwo()
  
   
  }
  else if (optiontwentytwo==="b"){
    props.nextTwo();
    props.statUpdateAtwentytwo();
    props.btnFourtwentytwo()
   }
   else if (optiontwentytwo==="c"){
    props.nextTwo();
    props.statUpdateAtwentytwo();
    props.btnFourtwentytwo()
   }
   else if (optiontwentytwo==="d"){
    props.nextTwo();
    props.statUpdateAtwentytwo();
    props.btnFourtwentytwo()
   }}
   else if (stat==="Not Answered"){
     if(optiontwentytwo===""){
    props.nextThree();
    props.statUpdateKtwentytwo();
    props.btnOnetwentytwo()
    
   }
   
    else if (optiontwentytwo==="a"){
     props.nextFour();
     props.statUpdateAtwentytwo();
     props.btnFourtwentytwo()
     
    }
    else if (optiontwentytwo==="b"){
      props.nextFour();
      props.statUpdateAtwentytwo();
      props.btnFourtwentytwo()
      
     }
     else if (optiontwentytwo==="c"){
      props.nextFour();
      props.statUpdateAtwentytwo();
      props.btnFourtwentytwo()
      
     }
     else if ( optiontwentytwo==="d"){
      props.nextFour();
      props.statUpdateAtwentytwo();
      props.btnFourtwentytwo()
      
     }}
     else if (stat==="Marked"){
     if(optiontwentytwo===""){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnThreetwentytwo()
      
     }
          else if (optiontwentytwo==="a"){
      props.mfrFive();
      props.statUpdateNtwentytwo();
      props.btnThreetwentytwo()

     }
     else if (optiontwentytwo==="b"){
       props.mfrFive();
       props.statUpdateNtwentytwo();
       props.btnThreetwentytwo()

      }
      else if (optiontwentytwo==="c"){
       props.mfrFive();
       props.statUpdateNtwentytwo();
       props.btnThreetwentytwo()

      }
      else if (optiontwentytwo==="d"){
       props.mfrFive();
       props.statUpdateNtwentytwo();
       props.btnThreetwentytwo()

        }}
     
     else if (stat==="Marked For Review"){
     if(optiontwentytwo==="a"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnThreetwentytwo()

      
     }
     else if (optiontwentytwo==="b"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnThreetwentytwo() 
     }
     else if (optiontwentytwo==="c"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnThreetwentytwo()
     }
     else if (optiontwentytwo==="d"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnThreetwentytwo()
     }}
     else if(stat==="Answered"){
     if (optiontwentytwo==="a"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()

      
     }
     else if (optiontwentytwo==="b"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()

      
     }
     else if ( optiontwentytwo==="c"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()
      
     }
     else if (optiontwentytwo==="d"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optiontwentytwo===""){
  props.mfrOne();
  props.statUpdateMtwentytwo();
  props.btnTwotwentytwo()
 }
 
  else if (optiontwentytwo==="a"){
   props.mfrTwo();
   props.statUpdateNtwentytwo();
   props.btnThreetwentytwo()
  }
  else if (optiontwentytwo==="b"){
    props.mfrTwo();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
  

   }
   else if (optiontwentytwo==="c"){
    props.mfrTwo();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
  
   }
   else if (optiontwentytwo==="d"){
    props.mfrTwo();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()

   }}
  
 else if (stat==="Not Answered"){
   if(optiontwentytwo===""){
  props.mfrThree();
  props.statUpdateMtwentytwo();
  props.btnTwotwentytwo();
 }
 else if (optiontwentytwo==="a"){
  props.mfrFour();
  props.statUpdateNtwentytwo();
  props.btnThreetwentytwo()
 }
 else if (optiontwentytwo==="b"){
   props.mfrFour();
   props.statUpdateNtwentytwo();
   props.btnThreetwentytwo()
  }
  else if (optiontwentytwo==="c"){
   props.mfrFour();
   props.statUpdateNtwentytwo();
   props.btnThreetwentytwo()
  }
  else if (optiontwentytwo==="d"){
   props.mfrFour();
   props.statUpdateNtwentytwo();
  props.btnThreetwentytwo()
  }}
  else if (stat==="Marked"){
    if(optiontwentytwo===""){
    props.nextThree();
    props.statUpdateKtwentytwo();
    props.btnTwotwentytwo();
   }
   else if (optiontwentytwo==="a"){
    props.mfrFive();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()


   }
   else if (optiontwentytwo==="b"){
    props.mfrFive();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="c"){
    props.mfrFive();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="d"){
    props.mfrFive();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
    }}
   else if (stat==="Marked For Review"){
     if(optiontwentytwo==="a"){
    props.nextThree();
    props.statUpdateKtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="b"){
    props.nextThree();
    props.statUpdateKtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="c"){
    props.nextThree();
    props.statUpdateKtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="d"){
    props.nextThree();
    props.statUpdateKtwentytwo();
    props.btnThreetwentytwo()
   }}
   else if (stat==="Answered"){
     if(optiontwentytwo==="a"){
    props.mfrSix();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="b"){
    props.mfrSix();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="c"){
    props.mfrSix();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="d"){
    props.mfrSix();
    props.statUpdateNtwentytwo();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optiontwentytwo===""){
    props.nexttwo();
    props.statUpdatetwentytwo();
    props.btnOnetwentytwo()
  }
  
   else if (optiontwentytwo==="a"){
    props.nextTwo();
    props.statUpdateAtwentytwo();
    props.btnFourtwentytwo()
   }
   else if (optiontwentytwo==="b"){
     props.nextTwo();
     props.statUpdateAtwentytwo();
     props.btnFourtwentytwo()
    }
    else if (optiontwentytwo==="c"){
     props.nextTwo();
     props.statUpdateAtwentytwo();
     props.btnFourtwentytwo()
    }
    else if (optiontwentytwo==="d"){
     props.nextTwo();
     props.statUpdateAtwentytwo();
     props.btnFourtwentytwo()
    }}
   
  else if (stat==="Not Answered"){
    if(optiontwentytwo===""){
   props.nextThree();
   props.statUpdateKtwentytwo();
   props.btnOnetwentytwo()
  }
  else if (optiontwentytwo==="a"){
   props.nextFour();
   props.statUpdateAtwentytwo();
   props.btnFourtwentytwo()
  }
  else if (optiontwentytwo==="b"){
    props.nextFour();
    props.statUpdateAtwentytwo();
    props.btnFourtwentytwo()
   }
   else if (optiontwentytwo==="c"){
    props.nextFour();
    props.statUpdateAtwentytwo();
    props.btnFourtwentytwo()
   }
   else if (optiontwentytwo==="d"){
    props.nextFour();
    props.statUpdateAtwentytwo();
    props.btnFourtwentytwo()
   }}
   else if (stat==="Marked"){
     if(optiontwentytwo===""){
     props.nextThree();
     props.statUpdateKtwentytwo();
     props.btnTwotwentytwo()
    }
    else if (optiontwentytwo==="a"){
     props.mfrFive();
     props.statUpdateNtwentytwo();
     props.btnThreetwentytwo()
    }
    else if (optiontwentytwo==="b"){
     props.mfrFive();
     props.statUpdateNtwentytwo();
     props.btnThreetwentytwo()
    }
    else if ( optiontwentytwo==="c"){
     props.mfrFive();
     props.statUpdateNtwentytwo();
     props.btnThreetwentytwo()
    }
    else if ( optiontwentytwo==="d"){
     props.mfrFive();
     props.statUpdateNtwentytwo();
     props.btnThreetwentytwo()
      }}
    else if (stat==="Marked For Review"){
      if(optiontwentytwo==="a"){
     props.mfrSeven();
     props.statUpdateAtwentytwo();
     props.btnFourtwentytwo()
    }
    else if (optiontwentytwo==="b"){
      props.mfrSeventwo();
      props.statUpdateAtwentytwo();
      props.btnFourtwentytwo()
    }
    else if (optiontwentytwo==="c"){
      props.mfrSeven();
      props.statUpdateAtwentytwo();
      props.btnFourtwentytwo()
    }
    else if ( optiontwentytwo==="d"){
      props.mfrSeven();
      props.statUpdateAtwentytwo();
      props.btnFourtwentytwo()
    }}
    else if (stat==="Answered"){
      if(optiontwentytwo==="a"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()
    }
    else if (optiontwentytwo==="b"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()
    }
    else if (optiontwentytwo==="c"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()
    }
    else if (optiontwentytwo==="d"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()
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
      <h5>Question No.23</h5>
    <p>  {props.BHealthanddiseaseTwentyfive}</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwentytwo=== 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTwentyfiveA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwentytwo === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTwentyfiveB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwentytwo === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTwentyfiveC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwentytwo === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTwentyfiveD}
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/twentyfour'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/twentyfour'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/twentyfour'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/twentytwo'))}>Previous</button>
    
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
     statustwentytwo:state.statustwentytwo,
     optiontwentytwo:state.optiontwentytwo,
     BHealthanddiseaseTwentyfive:state.BHealthanddiseaseTwentyfive,
  BHealthanddiseaseTwentyfiveA:state.BHealthanddiseaseTwentyfiveA,
  BHealthanddiseaseTwentyfiveB:state.BHealthanddiseaseTwentyfiveB,
  BHealthanddiseaseTwentyfiveC:state.BHealthanddiseaseTwentyfiveC,
  BHealthanddiseaseTwentyfiveD:state.BHealthanddiseaseTwentyfiveD,
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
    optAtwentytwo:()=>dispatch(optAtwentytwo()),
    optBtwentytwo:()=>dispatch(optBtwentytwo()),
    optCtwentytwo:()=>dispatch(optCtwentytwo()),
    optDtwentytwo:()=>dispatch(optDtwentytwo()),
    statUpdatetwentytwo:()=>dispatch(statUpdatetwentytwo()),
    statUpdateAtwentytwo:()=>dispatch(statUpdateAtwentytwo()),
    statUpdateMtwentytwo:()=>dispatch(statUpdateMtwentytwo()),
    statUpdateNtwentytwo:()=>dispatch(statUpdateNtwentytwo()),
    statUpdateKtwentytwo:()=>dispatch(statUpdateKtwentytwo()),
    btnOnetwentytwo:()=>dispatch(btnOnetwentytwo()),
    btnTwotwentytwo:()=>dispatch(btnTwotwentytwo()),
    btnThreetwentytwo:()=>dispatch(btnThreetwentytwo()),
    btnFourtwentytwo:()=>dispatch(btnFourtwentytwo()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (QuestionTwentyThree)