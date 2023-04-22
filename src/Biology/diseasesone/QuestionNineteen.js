import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAeighteen,optBeighteen,optCeighteen,optDeighteen,btnOneeighteen,btnTwoeighteen,btnThreeeighteen,btnFoureighteen,statUpdateeighteen,statUpdateAeighteen,statUpdateKeighteen,statUpdateMeighteen,statUpdateNeighteen,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Timer from '../../components/Timer ';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';



function QuestionNineteen(props) {
  const navigate = useNavigate()  
    var stat=props.statuseighteen;
    var opt=props.optioneighteen

  const [optioneighteen, setOptioneighteen] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptioneighteen(event.target.value);
    
  }
  
function optionChange(){
 if(optioneighteen==="a"){
   props.optAeighteen()
 }
 if(optioneighteen==="b"){
   props.optBeighteen()
 }
 if(optioneighteen==="c"){
   props.optCeighteen()
 }
 if(optioneighteen==="d"){
   props.optDeighteen()
 }
}

 useEffect(()=>{
  setOptioneighteen(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optioneighteen===""){
  props.nextOne();
  props.statUpdateeighteen();
  props.btnOneeighteen()
  
 }
 
  else if (optioneighteen==="a"){
   props.nextTwo();
   props.statUpdateAeighteen();
   props.btnFoureighteen()
  
   
  }
  else if (optioneighteen==="b"){
    props.nextTwo();
    props.statUpdateAeighteen();
    props.btnFoureighteen()
   }
   else if (optioneighteen==="c"){
    props.nextTwo();
    props.statUpdateAeighteen();
    props.btnFoureighteen()
   }
   else if (optioneighteen==="d"){
    props.nextTwo();
    props.statUpdateAeighteen();
    props.btnFoureighteen()
   }}
   else if (stat==="Not Answered"){
     if(optioneighteen===""){
    props.nextThree();
    props.statUpdateKeighteen();
    props.btnOneeighteen()
    
   }
   
    else if (optioneighteen==="a"){
     props.nextFour();
     props.statUpdateAeighteen();
     props.btnFoureighteen()
     
    }
    else if (optioneighteen==="b"){
      props.nextFour();
      props.statUpdateAeighteen();
      props.btnFoureighteen()
      
     }
     else if (optioneighteen==="c"){
      props.nextFour();
      props.statUpdateAeighteen();
      props.btnFoureighteen()
      
     }
     else if ( optioneighteen==="d"){
      props.nextFour();
      props.statUpdateAeighteen();
      props.btnFoureighteen()
      
     }}
     else if (stat==="Marked"){
     if(optioneighteen===""){
      props.nextThree();
      props.statUpdateKeighteen();
      props.btnThreeeighteen()
      
     }
          else if (optioneighteen==="a"){
      props.mfrFive();
      props.statUpdateNeighteen();
      props.btnThreeeighteen()

     }
     else if (optioneighteen==="b"){
       props.mfrFive();
       props.statUpdateNeighteen();
       props.btnThreeeighteen()

      }
      else if (optioneighteen==="c"){
       props.mfrFive();
       props.statUpdateNeighteen();
       props.btnThreeeighteen()

      }
      else if (optioneighteen==="d"){
       props.mfrFive();
       props.statUpdateNeighteen();
       props.btnThreeeighteen()

        }}
     
     else if (stat==="Marked For Review"){
     if(optioneighteen==="a"){
      props.nextThree();
      props.statUpdateKeighteen();
      props.btnThreeeighteen()

      
     }
     else if (optioneighteen==="b"){
      props.nextThree();
      props.statUpdateKeighteen();
      props.btnThreeeighteen() 
     }
     else if (optioneighteen==="c"){
      props.nextThree();
      props.statUpdateKeighteen();
      props.btnThreeeighteen()
     }
     else if (optioneighteen==="d"){
      props.nextThree();
      props.statUpdateKeighteen();
      props.btnThreeeighteen()
     }}
     else if(stat==="Answered"){
     if (optioneighteen==="a"){
      props.nextThree();
      props.statUpdateKeighteen();
      props.btnFoureighteen()

      
     }
     else if (optioneighteen==="b"){
      props.nextThree();
      props.statUpdateKeighteen();
      props.btnFoureighteen()

      
     }
     else if ( optioneighteen==="c"){
      props.nextThree();
      props.statUpdateKeighteen();
      props.btnFoureighteen()
      
     }
     else if (optioneighteen==="d"){
      props.nextThree();
      props.statUpdateKeighteen();
      props.btnFoureighteen()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optioneighteen===""){
  props.mfrOne();
  props.statUpdateMeighteen();
  props.btnTwoeighteen()
 }
 
  else if (optioneighteen==="a"){
   props.mfrTwo();
   props.statUpdateNeighteen();
   props.btnThreeeighteen()
  }
  else if (optioneighteen==="b"){
    props.mfrTwo();
    props.statUpdateNeighteen();
    props.btnThreeeighteen()
  

   }
   else if (optioneighteen==="c"){
    props.mfrTwo();
    props.statUpdateNeighteen();
    props.btnThreeeighteen()
  
   }
   else if (optioneighteen==="d"){
    props.mfrTwo();
    props.statUpdateNeighteen();
    props.btnThreeeighteen()

   }}
  
 else if (stat==="Not Answered"){
   if(optioneighteen===""){
  props.mfrThree();
  props.statUpdateMeighteen();
  props.btnTwoeighteen();
 }
 else if (optioneighteen==="a"){
  props.mfrFour();
  props.statUpdateNeighteen();
  props.btnThreeeighteen()
 }
 else if (optioneighteen==="b"){
   props.mfrFour();
   props.statUpdateNeighteen();
   props.btnThreeeighteen()
  }
  else if (optioneighteen==="c"){
   props.mfrFour();
   props.statUpdateNeighteen();
   props.btnThreeeighteen()
  }
  else if (optioneighteen==="d"){
   props.mfrFour();
   props.statUpdateNeighteen();
  props.btnThreeeighteen()
  }}
  else if (stat==="Marked"){
    if(optioneighteen===""){
    props.nextThree();
    props.statUpdateKeighteen();
    props.btnTwoeighteen();
   }
   else if (optioneighteen==="a"){
    props.mfrFive();
    props.statUpdateNeighteen();
    props.btnThreeeighteen()


   }
   else if (optioneighteen==="b"){
    props.mfrFive();
    props.statUpdateNeighteen();
    props.btnThreeeighteen()
   }
   else if (optioneighteen==="c"){
    props.mfrFive();
    props.statUpdateNeighteen();
    props.btnThreeeighteen()
   }
   else if (optioneighteen==="d"){
    props.mfrFive();
    props.statUpdateNeighteen();
    props.btnThreeeighteen()
    }}
   else if (stat==="Marked For Review"){
     if(optioneighteen==="a"){
    props.nextThree();
    props.statUpdateKeighteen();
    props.btnThreeeighteen()
   }
   else if (optioneighteen==="b"){
    props.nextThree();
    props.statUpdateKeighteen();
    props.btnThreeeighteen()
   }
   else if (optioneighteen==="c"){
    props.nextThree();
    props.statUpdateKeighteen();
    props.btnThreeeighteen()
   }
   else if (optioneighteen==="d"){
    props.nextThree();
    props.statUpdateKeighteen();
    props.btnThreeeighteen()
   }}
   else if (stat==="Answered"){
     if(optioneighteen==="a"){
    props.mfrSix();
    props.statUpdateNeighteen();
    props.btnThreeeighteen()
   }
   else if (optioneighteen==="b"){
    props.mfrSix();
    props.statUpdateNeighteen();
    props.btnThreeeighteen()
   }
   else if (optioneighteen==="c"){
    props.mfrSix();
    props.statUpdateNeighteen();
    props.btnThreeeighteen()
   }
   else if (optioneighteen==="d"){
    props.mfrSix();
    props.statUpdateNeighteen();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optioneighteen===""){
    props.nexttwo();
    props.statUpdateeighteen();
    props.btnOneeighteen()
  }
  
   else if (optioneighteen==="a"){
    props.nextTwo();
    props.statUpdateAeighteen();
    props.btnFoureighteen()
   }
   else if (optioneighteen==="b"){
     props.nextTwo();
     props.statUpdateAeighteen();
     props.btnFoureighteen()
    }
    else if (optioneighteen==="c"){
     props.nextTwo();
     props.statUpdateAeighteen();
     props.btnFoureighteen()
    }
    else if (optioneighteen==="d"){
     props.nextTwo();
     props.statUpdateAeighteen();
     props.btnFoureighteen()
    }}
   
  else if (stat==="Not Answered"){
    if(optioneighteen===""){
   props.nextThree();
   props.statUpdateKeighteen();
   props.btnOneeighteen()
  }
  else if (optioneighteen==="a"){
   props.nextFour();
   props.statUpdateAeighteen();
   props.btnFoureighteen()
  }
  else if (optioneighteen==="b"){
    props.nextFour();
    props.statUpdateAeighteen();
    props.btnFoureighteen()
   }
   else if (optioneighteen==="c"){
    props.nextFour();
    props.statUpdateAeighteen();
    props.btnFoureighteen()
   }
   else if (optioneighteen==="d"){
    props.nextFour();
    props.statUpdateAeighteen();
    props.btnFoureighteen()
   }}
   else if (stat==="Marked"){
     if(optioneighteen===""){
     props.nextThree();
     props.statUpdateKeighteen();
     props.btnTwoeighteen()
    }
    else if (optioneighteen==="a"){
     props.mfrFive();
     props.statUpdateNeighteen();
     props.btnThreeeighteen()
    }
    else if (optioneighteen==="b"){
     props.mfrFive();
     props.statUpdateNeighteen();
     props.btnThreeeighteen()
    }
    else if ( optioneighteen==="c"){
     props.mfrFive();
     props.statUpdateNeighteen();
     props.btnThreeeighteen()
    }
    else if ( optioneighteen==="d"){
     props.mfrFive();
     props.statUpdateNeighteen();
     props.btnThreeeighteen()
      }}
    else if (stat==="Marked For Review"){
      if(optioneighteen==="a"){
     props.mfrSeven();
     props.statUpdateAeighteen();
     props.btnFoureighteen()
    }
    else if (optioneighteen==="b"){
      props.mfrSeventwo();
      props.statUpdateAeighteen();
      props.btnFoureighteen()
    }
    else if (optioneighteen==="c"){
      props.mfrSeven();
      props.statUpdateAeighteen();
      props.btnFoureighteen()
    }
    else if ( optioneighteen==="d"){
      props.mfrSeven();
      props.statUpdateAeighteen();
      props.btnFoureighteen()
    }}
    else if (stat==="Answered"){
      if(optioneighteen==="a"){
      props.nextThree();
      props.statUpdateKeighteen();
      props.btnFoureighteen()
    }
    else if (optioneighteen==="b"){
      props.nextThree();
      props.statUpdateKeighteen();
      props.btnFoureighteen()
    }
    else if (optioneighteen==="c"){
      props.nextThree();
      props.statUpdateKeighteen();
      props.btnFoureighteen()
    }
    else if (optioneighteen==="d"){
      props.nextThree();
      props.statUpdateKeighteen();
      props.btnFoureighteen()
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
      <h5>Question No.19</h5>
    <p>  {props.BHealthanddiseaseTwenty}</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optioneighteen=== 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTwentyA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optioneighteen === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTwentyB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optioneighteen === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTwentyC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optioneighteen === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTwentyD}
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/twenty'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/twenty'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/twenty'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/eighteen'))}>Previous</button>
    
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
     statuseighteen:state.statuseighteen,
     optioneighteen:state.optioneighteen,
     BHealthanddiseaseTwenty:state.BHealthanddiseaseTwenty,
  BHealthanddiseaseTwentyA:state.BHealthanddiseaseTwentyA,
  BHealthanddiseaseTwentyB:state.BHealthanddiseaseTwentyB,
  BHealthanddiseaseTwentyC:state.BHealthanddiseaseTwentyC,
  BHealthanddiseaseTwentyD:state.BHealthanddiseaseTwentyD,
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
    optAeighteen:()=>dispatch(optAeighteen()),
    optBeighteen:()=>dispatch(optBeighteen()),
    optCeighteen:()=>dispatch(optCeighteen()),
    optDeighteen:()=>dispatch(optDeighteen()),
    statUpdateeighteen:()=>dispatch(statUpdateeighteen()),
    statUpdateAeighteen:()=>dispatch(statUpdateAeighteen()),
    statUpdateMeighteen:()=>dispatch(statUpdateMeighteen()),
    statUpdateNeighteen:()=>dispatch(statUpdateNeighteen()),
    statUpdateKeighteen:()=>dispatch(statUpdateKeighteen()),
    btnOneeighteen:()=>dispatch(btnOneeighteen()),
    btnTwoeighteen:()=>dispatch(btnTwoeighteen()),
    btnThreeeighteen:()=>dispatch(btnThreeeighteen()),
    btnFoureighteen:()=>dispatch(btnFoureighteen()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (QuestionNineteen)