import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirty,optBthirty,optCthirty,optDthirty,btnOnethirty,btnTwothirty,btnThreethirty,btnFourthirty,statUpdatethirty,statUpdateAthirty,statUpdateKthirty,statUpdateMthirty,statUpdateNthirty,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import PTtimer from './PTtimer'
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function PTthirtyone(props) {
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
    "width": "295px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const navigate = useNavigate()  
    var stat=props.statusthirty;
    var opt=props.optionthirty

  const [optionthirty, setOptionthirty] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirty(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirty==="a"){
   props.optAthirty()
 }
 if(optionthirty==="b"){
   props.optBthirty()
 }
 if(optionthirty==="c"){
   props.optCthirty()
 }
 if(optionthirty==="d"){
   props.optDthirty()
 }
}

 useEffect(()=>{
  setOptionthirty(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirty===""){
  props.nextOne();
  props.statUpdatethirty();
  props.btnOnethirty()
  
 }
 
  else if (optionthirty==="a"){
   props.nextTwo();
   props.statUpdateAthirty();
   props.btnFourthirty()
  
   
  }
  else if (optionthirty==="b"){
    props.nextTwo();
    props.statUpdateAthirty();
    props.btnFourthirty()
   }
   else if (optionthirty==="c"){
    props.nextTwo();
    props.statUpdateAthirty();
    props.btnFourthirty()
   }
   else if (optionthirty==="d"){
    props.nextTwo();
    props.statUpdateAthirty();
    props.btnFourthirty()
   }}
   else if (stat==="Not Answered"){
     if(optionthirty===""){
    props.nextThree();
    props.statUpdateKthirty();
    props.btnOnethirty()
    
   }
   
    else if (optionthirty==="a"){
     props.nextFour();
     props.statUpdateAthirty();
     props.btnFourthirty()
     
    }
    else if (optionthirty==="b"){
      props.nextFour();
      props.statUpdateAthirty();
      props.btnFourthirty()
      
     }
     else if (optionthirty==="c"){
      props.nextFour();
      props.statUpdateAthirty();
      props.btnFourthirty()
      
     }
     else if ( optionthirty==="d"){
      props.nextFour();
      props.statUpdateAthirty();
      props.btnFourthirty()
      
     }}
     else if (stat==="Marked"){
     if(optionthirty===""){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnThreethirty()
      
     }
          else if (optionthirty==="a"){
      props.mfrFive();
      props.statUpdateNthirty();
      props.btnThreethirty()

     }
     else if (optionthirty==="b"){
       props.mfrFive();
       props.statUpdateNthirty();
       props.btnThreethirty()

      }
      else if (optionthirty==="c"){
       props.mfrFive();
       props.statUpdateNthirty();
       props.btnThreethirty()

      }
      else if (optionthirty==="d"){
       props.mfrFive();
       props.statUpdateNthirty();
       props.btnThreethirty()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirty==="a"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnThreethirty()

      
     }
     else if (optionthirty==="b"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnThreethirty() 
     }
     else if (optionthirty==="c"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnThreethirty()
     }
     else if (optionthirty==="d"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnThreethirty()
     }}
     else if(stat==="Answered"){
     if (optionthirty==="a"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()

      
     }
     else if (optionthirty==="b"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()

      
     }
     else if ( optionthirty==="c"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()
      
     }
     else if (optionthirty==="d"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirty===""){
  props.mfrOne();
  props.statUpdateMthirty();
  props.btnTwothirty()
 }
 
  else if (optionthirty==="a"){
   props.mfrTwo();
   props.statUpdateNthirty();
   props.btnThreethirty()
  }
  else if (optionthirty==="b"){
    props.mfrTwo();
    props.statUpdateNthirty();
    props.btnThreethirty()
  

   }
   else if (optionthirty==="c"){
    props.mfrTwo();
    props.statUpdateNthirty();
    props.btnThreethirty()
  
   }
   else if (optionthirty==="d"){
    props.mfrTwo();
    props.statUpdateNthirty();
    props.btnThreethirty()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirty===""){
  props.mfrThree();
  props.statUpdateMthirty();
  props.btnTwothirty();
 }
 else if (optionthirty==="a"){
  props.mfrFour();
  props.statUpdateNthirty();
  props.btnThreethirty()
 }
 else if (optionthirty==="b"){
   props.mfrFour();
   props.statUpdateNthirty();
   props.btnThreethirty()
  }
  else if (optionthirty==="c"){
   props.mfrFour();
   props.statUpdateNthirty();
   props.btnThreethirty()
  }
  else if (optionthirty==="d"){
   props.mfrFour();
   props.statUpdateNthirty();
  props.btnThreethirty()
  }}
  else if (stat==="Marked"){
    if(optionthirty===""){
    props.nextThree();
    props.statUpdateKthirty();
    props.btnTwothirty();
   }
   else if (optionthirty==="a"){
    props.mfrFive();
    props.statUpdateNthirty();
    props.btnThreethirty()


   }
   else if (optionthirty==="b"){
    props.mfrFive();
    props.statUpdateNthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="c"){
    props.mfrFive();
    props.statUpdateNthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="d"){
    props.mfrFive();
    props.statUpdateNthirty();
    props.btnThreethirty()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirty==="a"){
    props.nextThree();
    props.statUpdateKthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="b"){
    props.nextThree();
    props.statUpdateKthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="c"){
    props.nextThree();
    props.statUpdateKthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="d"){
    props.nextThree();
    props.statUpdateKthirty();
    props.btnThreethirty()
   }}
   else if (stat==="Answered"){
     if(optionthirty==="a"){
    props.mfrSix();
    props.statUpdateNthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="b"){
    props.mfrSix();
    props.statUpdateNthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="c"){
    props.mfrSix();
    props.statUpdateNthirty();
    props.btnThreethirty()
   }
   else if (optionthirty==="d"){
    props.mfrSix();
    props.statUpdateNthirty();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirty===""){
    props.nexttwo();
    props.statUpdatethirty();
    props.btnOnethirty()
  }
  
   else if (optionthirty==="a"){
    props.nextTwo();
    props.statUpdateAthirty();
    props.btnFourthirty()
   }
   else if (optionthirty==="b"){
     props.nextTwo();
     props.statUpdateAthirty();
     props.btnFourthirty()
    }
    else if (optionthirty==="c"){
     props.nextTwo();
     props.statUpdateAthirty();
     props.btnFourthirty()
    }
    else if (optionthirty==="d"){
     props.nextTwo();
     props.statUpdateAthirty();
     props.btnFourthirty()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirty===""){
   props.nextThree();
   props.statUpdateKthirty();
   props.btnOnethirty()
  }
  else if (optionthirty==="a"){
   props.nextFour();
   props.statUpdateAthirty();
   props.btnFourthirty()
  }
  else if (optionthirty==="b"){
    props.nextFour();
    props.statUpdateAthirty();
    props.btnFourthirty()
   }
   else if (optionthirty==="c"){
    props.nextFour();
    props.statUpdateAthirty();
    props.btnFourthirty()
   }
   else if (optionthirty==="d"){
    props.nextFour();
    props.statUpdateAthirty();
    props.btnFourthirty()
   }}
   else if (stat==="Marked"){
     if(optionthirty===""){
     props.nextThree();
     props.statUpdateKthirty();
     props.btnTwothirty()
    }
    else if (optionthirty==="a"){
     props.mfrFive();
     props.statUpdateNthirty();
     props.btnThreethirty()
    }
    else if (optionthirty==="b"){
     props.mfrFive();
     props.statUpdateNthirty();
     props.btnThreethirty()
    }
    else if ( optionthirty==="c"){
     props.mfrFive();
     props.statUpdateNthirty();
     props.btnThreethirty()
    }
    else if ( optionthirty==="d"){
     props.mfrFive();
     props.statUpdateNthirty();
     props.btnThreethirty()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirty==="a"){
     props.mfrSeven();
     props.statUpdateAthirty();
     props.btnFourthirty()
    }
    else if (optionthirty==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirty();
      props.btnFourthirty()
    }
    else if (optionthirty==="c"){
      props.mfrSeven();
      props.statUpdateAthirty();
      props.btnFourthirty()
    }
    else if ( optionthirty==="d"){
      props.mfrSeven();
      props.statUpdateAthirty();
      props.btnFourthirty()
    }}
    else if (stat==="Answered"){
      if(optionthirty==="a"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()
    }
    else if (optionthirty==="b"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()
    }
    else if (optionthirty==="c"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()
    }
    else if (optionthirty==="d"){
      props.nextThree();
      props.statUpdateKthirty();
      props.btnFourthirty()
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
     <p style={wStyle}>Test Name: <b>Properties of Triangles</b></p>
     <p style={wStyle1}>Name of the Candidate: <b>{props.name}</b></p>  
    <form>
    <p><i>Question No.31</i><br></br>  In {'\u25b3'}ABC, if C=A-B=60<sup>o</sup>, then the value of (a-b)/c=
</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirty=== 'a'}
          onClick={handleChange}
        /> 1/{'\u221a3'}
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirty === 'b'}
          onClick={handleChange}
        /> 2
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirty === 'c'}
          onClick={handleChange}
        /> 3
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirty === 'd'}
          onClick={handleChange}
        /> 4
        
      </div>
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/PTthirtytwo'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/PTthirtytwo'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/PTthirtytwo'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/PTthirty'))}>Previous</button>
        
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><PTtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/PTconfirm'))}>Submit Test</button>
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
     statusthirty:state.statusthirty,
     optionthirty:state.optionthirty,
     BHealthanddiseaseThirtythree:state.BHealthanddiseaseThirtythree,
  BHealthanddiseaseThirtythreeA:state.BHealthanddiseaseThirtythreeA,
  BHealthanddiseaseThirtythreeB:state.BHealthanddiseaseThirtythreeB,
  BHealthanddiseaseThirtythreeC:state.BHealthanddiseaseThirtythreeC,
  BHealthanddiseaseThirtythreeD:state.BHealthanddiseaseThirtythreeD,
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
    optAthirty:()=>dispatch(optAthirty()),
    optBthirty:()=>dispatch(optBthirty()),
    optCthirty:()=>dispatch(optCthirty()),
    optDthirty:()=>dispatch(optDthirty()),
    statUpdatethirty:()=>dispatch(statUpdatethirty()),
    statUpdateAthirty:()=>dispatch(statUpdateAthirty()),
    statUpdateMthirty:()=>dispatch(statUpdateMthirty()),
    statUpdateNthirty:()=>dispatch(statUpdateNthirty()),
    statUpdateKthirty:()=>dispatch(statUpdateKthirty()),
    btnOnethirty:()=>dispatch(btnOnethirty()),
    btnTwothirty:()=>dispatch(btnTwothirty()),
    btnThreethirty:()=>dispatch(btnThreethirty()),
    btnFourthirty:()=>dispatch(btnFourthirty()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (PTthirtyone)