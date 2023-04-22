import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwentyfive,optBtwentyfive,optCtwentyfive,optDtwentyfive,btnOnetwentyfive,btnTwotwentyfive,btnThreetwentyfive,btnFourtwentyfive,statUpdatetwentyfive,statUpdateAtwentyfive,statUpdateKtwentyfive,statUpdateMtwentyfive,statUpdateNtwentyfive,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import QXtimer from './QXtimer';
import Logo from "../../redux/Images/Logo.jpg";
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';




function QXtwentysix(props) {
  const logoStyle = { 
    "margin-left":"10px",
    "align":"center",
    "border-radius":"25%",
    border:"1px solid purple"
  };
  const hStyle = {
    "height":"109px",
    "text-align":"center"
  };
  const bStyle = {
     "background-color":"purple",
     width:"1520px",
  };
  const wStyle = {
    "width": "245px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const navigate = useNavigate()  
    var stat=props.statustwentyfive;
    var opt=props.optiontwentyfive

  const [optiontwentyfive, setOptiontwentyfive] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptiontwentyfive(event.target.value);
    
  }
  
function optionChange(){
 if(optiontwentyfive==="a"){
   props.optAtwentyfive()
 }
 if(optiontwentyfive==="b"){
   props.optBtwentyfive()
 }
 if(optiontwentyfive==="c"){
   props.optCtwentyfive()
 }
 if(optiontwentyfive==="d"){
   props.optDtwentyfive()
 }
}

 useEffect(()=>{
  setOptiontwentyfive(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optiontwentyfive===""){
  props.nextOne();
  props.statUpdatetwentyfive();
  props.btnOnetwentyfive()
  
 }
 
  else if (optiontwentyfive==="a"){
   props.nextTwo();
   props.statUpdateAtwentyfive();
   props.btnFourtwentyfive()
  
   
  }
  else if (optiontwentyfive==="b"){
    props.nextTwo();
    props.statUpdateAtwentyfive();
    props.btnFourtwentyfive()
   }
   else if (optiontwentyfive==="c"){
    props.nextTwo();
    props.statUpdateAtwentyfive();
    props.btnFourtwentyfive()
   }
   else if (optiontwentyfive==="d"){
    props.nextTwo();
    props.statUpdateAtwentyfive();
    props.btnFourtwentyfive()
   }}
   else if (stat==="Not Answered"){
     if(optiontwentyfive===""){
    props.nextThree();
    props.statUpdateKtwentyfive();
    props.btnOnetwentyfive()
    
   }
   
    else if (optiontwentyfive==="a"){
     props.nextFour();
     props.statUpdateAtwentyfive();
     props.btnFourtwentyfive()
     
    }
    else if (optiontwentyfive==="b"){
      props.nextFour();
      props.statUpdateAtwentyfive();
      props.btnFourtwentyfive()
      
     }
     else if (optiontwentyfive==="c"){
      props.nextFour();
      props.statUpdateAtwentyfive();
      props.btnFourtwentyfive()
      
     }
     else if ( optiontwentyfive==="d"){
      props.nextFour();
      props.statUpdateAtwentyfive();
      props.btnFourtwentyfive()
      
     }}
     else if (stat==="Marked"){
     if(optiontwentyfive===""){
      props.nextThree();
      props.statUpdateKtwentyfive();
      props.btnThreetwentyfive()
      
     }
          else if (optiontwentyfive==="a"){
      props.mfrFive();
      props.statUpdateNtwentyfive();
      props.btnThreetwentyfive()

     }
     else if (optiontwentyfive==="b"){
       props.mfrFive();
       props.statUpdateNtwentyfive();
       props.btnThreetwentyfive()

      }
      else if (optiontwentyfive==="c"){
       props.mfrFive();
       props.statUpdateNtwentyfive();
       props.btnThreetwentyfive()

      }
      else if (optiontwentyfive==="d"){
       props.mfrFive();
       props.statUpdateNtwentyfive();
       props.btnThreetwentyfive()

        }}
     
     else if (stat==="Marked For Review"){
     if(optiontwentyfive==="a"){
      props.nextThree();
      props.statUpdateKtwentyfive();
      props.btnThreetwentyfive()

      
     }
     else if (optiontwentyfive==="b"){
      props.nextThree();
      props.statUpdateKtwentyfive();
      props.btnThreetwentyfive() 
     }
     else if (optiontwentyfive==="c"){
      props.nextThree();
      props.statUpdateKtwentyfive();
      props.btnThreetwentyfive()
     }
     else if (optiontwentyfive==="d"){
      props.nextThree();
      props.statUpdateKtwentyfive();
      props.btnThreetwentyfive()
     }}
     else if(stat==="Answered"){
     if (optiontwentyfive==="a"){
      props.nextThree();
      props.statUpdateKtwentyfive();
      props.btnFourtwentyfive()

      
     }
     else if (optiontwentyfive==="b"){
      props.nextThree();
      props.statUpdateKtwentyfive();
      props.btnFourtwentyfive()

      
     }
     else if ( optiontwentyfive==="c"){
      props.nextThree();
      props.statUpdateKtwentyfive();
      props.btnFourtwentyfive()
      
     }
     else if (optiontwentyfive==="d"){
      props.nextThree();
      props.statUpdateKtwentyfive();
      props.btnFourtwentyfive()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optiontwentyfive===""){
  props.mfrOne();
  props.statUpdateMtwentyfive();
  props.btnTwotwentyfive()
 }
 
  else if (optiontwentyfive==="a"){
   props.mfrTwo();
   props.statUpdateNtwentyfive();
   props.btnThreetwentyfive()
  }
  else if (optiontwentyfive==="b"){
    props.mfrTwo();
    props.statUpdateNtwentyfive();
    props.btnThreetwentyfive()
  

   }
   else if (optiontwentyfive==="c"){
    props.mfrTwo();
    props.statUpdateNtwentyfive();
    props.btnThreetwentyfive()
  
   }
   else if (optiontwentyfive==="d"){
    props.mfrTwo();
    props.statUpdateNtwentyfive();
    props.btnThreetwentyfive()

   }}
  
 else if (stat==="Not Answered"){
   if(optiontwentyfive===""){
  props.mfrThree();
  props.statUpdateMtwentyfive();
  props.btnTwotwentyfive();
 }
 else if (optiontwentyfive==="a"){
  props.mfrFour();
  props.statUpdateNtwentyfive();
  props.btnThreetwentyfive()
 }
 else if (optiontwentyfive==="b"){
   props.mfrFour();
   props.statUpdateNtwentyfive();
   props.btnThreetwentyfive()
  }
  else if (optiontwentyfive==="c"){
   props.mfrFour();
   props.statUpdateNtwentyfive();
   props.btnThreetwentyfive()
  }
  else if (optiontwentyfive==="d"){
   props.mfrFour();
   props.statUpdateNtwentyfive();
  props.btnThreetwentyfive()
  }}
  else if (stat==="Marked"){
    if(optiontwentyfive===""){
    props.nextThree();
    props.statUpdateKtwentyfive();
    props.btnTwotwentyfive();
   }
   else if (optiontwentyfive==="a"){
    props.mfrFive();
    props.statUpdateNtwentyfive();
    props.btnThreetwentyfive()


   }
   else if (optiontwentyfive==="b"){
    props.mfrFive();
    props.statUpdateNtwentyfive();
    props.btnThreetwentyfive()
   }
   else if (optiontwentyfive==="c"){
    props.mfrFive();
    props.statUpdateNtwentyfive();
    props.btnThreetwentyfive()
   }
   else if (optiontwentyfive==="d"){
    props.mfrFive();
    props.statUpdateNtwentyfive();
    props.btnThreetwentyfive()
    }}
   else if (stat==="Marked For Review"){
     if(optiontwentyfive==="a"){
    props.nextThree();
    props.statUpdateKtwentyfive();
    props.btnThreetwentyfive()
   }
   else if (optiontwentyfive==="b"){
    props.nextThree();
    props.statUpdateKtwentyfive();
    props.btnThreetwentyfive()
   }
   else if (optiontwentyfive==="c"){
    props.nextThree();
    props.statUpdateKtwentyfive();
    props.btnThreetwentyfive()
   }
   else if (optiontwentyfive==="d"){
    props.nextThree();
    props.statUpdateKtwentyfive();
    props.btnThreetwentyfive()
   }}
   else if (stat==="Answered"){
     if(optiontwentyfive==="a"){
    props.mfrSix();
    props.statUpdateNtwentyfive();
    props.btnThreetwentyfive()
   }
   else if (optiontwentyfive==="b"){
    props.mfrSix();
    props.statUpdateNtwentyfive();
    props.btnThreetwentyfive()
   }
   else if (optiontwentyfive==="c"){
    props.mfrSix();
    props.statUpdateNtwentyfive();
    props.btnThreetwentyfive()
   }
   else if (optiontwentyfive==="d"){
    props.mfrSix();
    props.statUpdateNtwentyfive();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optiontwentyfive===""){
    props.nexttwo();
    props.statUpdatetwentyfive();
    props.btnOnetwentyfive()
  }
  
   else if (optiontwentyfive==="a"){
    props.nextTwo();
    props.statUpdateAtwentyfive();
    props.btnFourtwentyfive()
   }
   else if (optiontwentyfive==="b"){
     props.nextTwo();
     props.statUpdateAtwentyfive();
     props.btnFourtwentyfive()
    }
    else if (optiontwentyfive==="c"){
     props.nextTwo();
     props.statUpdateAtwentyfive();
     props.btnFourtwentyfive()
    }
    else if (optiontwentyfive==="d"){
     props.nextTwo();
     props.statUpdateAtwentyfive();
     props.btnFourtwentyfive()
    }}
   
  else if (stat==="Not Answered"){
    if(optiontwentyfive===""){
   props.nextThree();
   props.statUpdateKtwentyfive();
   props.btnOnetwentyfive()
  }
  else if (optiontwentyfive==="a"){
   props.nextFour();
   props.statUpdateAtwentyfive();
   props.btnFourtwentyfive()
  }
  else if (optiontwentyfive==="b"){
    props.nextFour();
    props.statUpdateAtwentyfive();
    props.btnFourtwentyfive()
   }
   else if (optiontwentyfive==="c"){
    props.nextFour();
    props.statUpdateAtwentyfive();
    props.btnFourtwentyfive()
   }
   else if (optiontwentyfive==="d"){
    props.nextFour();
    props.statUpdateAtwentyfive();
    props.btnFourtwentyfive()
   }}
   else if (stat==="Marked"){
     if(optiontwentyfive===""){
     props.nextThree();
     props.statUpdateKtwentyfive();
     props.btnTwotwentyfive()
    }
    else if (optiontwentyfive==="a"){
     props.mfrFive();
     props.statUpdateNtwentyfive();
     props.btnThreetwentyfive()
    }
    else if (optiontwentyfive==="b"){
     props.mfrFive();
     props.statUpdateNtwentyfive();
     props.btnThreetwentyfive()
    }
    else if ( optiontwentyfive==="c"){
     props.mfrFive();
     props.statUpdateNtwentyfive();
     props.btnThreetwentyfive()
    }
    else if ( optiontwentyfive==="d"){
     props.mfrFive();
     props.statUpdateNtwentyfive();
     props.btnThreetwentyfive()
      }}
    else if (stat==="Marked For Review"){
      if(optiontwentyfive==="a"){
     props.mfrSeven();
     props.statUpdateAtwentyfive();
     props.btnFourtwentyfive()
    }
    else if (optiontwentyfive==="b"){
      props.mfrSeventwo();
      props.statUpdateAtwentyfive();
      props.btnFourtwentyfive()
    }
    else if (optiontwentyfive==="c"){
      props.mfrSeven();
      props.statUpdateAtwentyfive();
      props.btnFourtwentyfive()
    }
    else if ( optiontwentyfive==="d"){
      props.mfrSeven();
      props.statUpdateAtwentyfive();
      props.btnFourtwentyfive()
    }}
    else if (stat==="Answered"){
      if(optiontwentyfive==="a"){
      props.nextThree();
      props.statUpdateKtwentyfive();
      props.btnFourtwentyfive()
    }
    else if (optiontwentyfive==="b"){
      props.nextThree();
      props.statUpdateKtwentyfive();
      props.btnFourtwentyfive()
    }
    else if (optiontwentyfive==="c"){
      props.nextThree();
      props.statUpdateKtwentyfive();
      props.btnFourtwentyfive()
    }
    else if (optiontwentyfive==="d"){
      props.nextThree();
      props.statUpdateKtwentyfive();
      props.btnFourtwentyfive()
          }}
    optionChange()
 }

    return (
    <div>
      <div className={props.header} style={bStyle}>
     <h1 style={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1> 
           </div>
    <div className= {props.total}>
     <div className={props.left}>
     <p style={wStyle}>Test Name: <b>Oscillations</b></p>
     <p style={wStyle1}>Name of the Candidate: <b>{props.name}</b></p>  
    <form>
    <p><i>Question No.26</i><br></br>  The time period of a simple pendulum is T. When the length is increased by 10cm, its period is T<sub>1</sub>.When the length is decreased by 10cm, its period is T<sub>2</sub>.Then relation between T,T<sub>1</sub>,T<sub>2</sub> is
    <br></br>[<b>EAMCET 2004 E</b>]
</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwentyfive=== 'a'}
          onClick={handleChange}
        /> 2/T<sup>2</sup>=1/T<sub>1</sub><sup>2</sup>+1/T<sub>2</sub><sup>2</sup>
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwentyfive === 'b'}
          onClick={handleChange}
        /> 2/T<sup>2</sup>=1/T<sub>1</sub><sup>2</sup>-1/T<sub>2</sub><sup>2</sup>
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwentyfive === 'c'}
          onClick={handleChange}
        /> 2T<sup>2</sup>=T<sub>1</sub><sup>2</sup>+T<sub>2</sub><sup>2</sup>
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwentyfive === 'd'}
          onClick={handleChange}
        /> 2T<sup>2</sup>=T<sub>1</sub><sup>2</sup>-T<sub>2</sub><sup>2</sup>
        
        
      </div>
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/QXtwentyseven'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/QXtwentyseven'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/QXtwentyseven'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/QXtwentyfive'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><QXtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/QXconfirm'))}>Submit Test</button>
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
     statustwentyfive:state.statustwentyfive,
     optiontwentyfive:state.optiontwentyfive,
     BHealthanddiseaseTwentyeight:state.BHealthanddiseaseTwentyeight,
  BHealthanddiseaseTwentyeightA:state.BHealthanddiseaseTwentyeightA,
  BHealthanddiseaseTwentyeightB:state.BHealthanddiseaseTwentyeightB,
  BHealthanddiseaseTwentyeightC:state.BHealthanddiseaseTwentyeightC,
  BHealthanddiseaseTwentyeightD:state.BHealthanddiseaseTwentyeightD,
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
  divA:state.divA, name:state.name
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
    optAtwentyfive:()=>dispatch(optAtwentyfive()),
    optBtwentyfive:()=>dispatch(optBtwentyfive()),
    optCtwentyfive:()=>dispatch(optCtwentyfive()),
    optDtwentyfive:()=>dispatch(optDtwentyfive()),
    statUpdatetwentyfive:()=>dispatch(statUpdatetwentyfive()),
    statUpdateAtwentyfive:()=>dispatch(statUpdateAtwentyfive()),
    statUpdateMtwentyfive:()=>dispatch(statUpdateMtwentyfive()),
    statUpdateNtwentyfive:()=>dispatch(statUpdateNtwentyfive()),
    statUpdateKtwentyfive:()=>dispatch(statUpdateKtwentyfive()),
    btnOnetwentyfive:()=>dispatch(btnOnetwentyfive()),
    btnTwotwentyfive:()=>dispatch(btnTwotwentyfive()),
    btnThreetwentyfive:()=>dispatch(btnThreetwentyfive()),
    btnFourtwentyfive:()=>dispatch(btnFourtwentyfive()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (QXtwentysix)
