import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirtyfive,optBthirtyfive,optCthirtyfive,optDthirtyfive,btnOnethirtyfive,btnTwothirtyfive,btnThreethirtyfive,btnFourthirtyfive,statUpdatethirtyfive,statUpdateAthirtyfive,statUpdateKthirtyfive,statUpdateMthirtyfive,statUpdateNthirtyfive,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Ftimer from './Ftimer'
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function Fthirtysix(props) {
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
    "width": "195px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const navigate = useNavigate()  
    var stat=props.statusthirtyfive;
    var opt=props.optionthirtyfive

  const [optionthirtyfive, setOptionthirtyfive] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirtyfive(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirtyfive==="a"){
   props.optAthirtyfive()
 }
 if(optionthirtyfive==="b"){
   props.optBthirtyfive()
 }
 if(optionthirtyfive==="c"){
   props.optCthirtyfive()
 }
 if(optionthirtyfive==="d"){
   props.optDthirtyfive()
 }
}

 useEffect(()=>{
  setOptionthirtyfive(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirtyfive===""){
  props.nextOne();
  props.statUpdatethirtyfive();
  props.btnOnethirtyfive()
  
 }
 
  else if (optionthirtyfive==="a"){
   props.nextTwo();
   props.statUpdateAthirtyfive();
   props.btnFourthirtyfive()
  
   
  }
  else if (optionthirtyfive==="b"){
    props.nextTwo();
    props.statUpdateAthirtyfive();
    props.btnFourthirtyfive()
   }
   else if (optionthirtyfive==="c"){
    props.nextTwo();
    props.statUpdateAthirtyfive();
    props.btnFourthirtyfive()
   }
   else if (optionthirtyfive==="d"){
    props.nextTwo();
    props.statUpdateAthirtyfive();
    props.btnFourthirtyfive()
   }}
   else if (stat==="Not Answered"){
     if(optionthirtyfive===""){
    props.nextThree();
    props.statUpdateKthirtyfive();
    props.btnOnethirtyfive()
    
   }
   
    else if (optionthirtyfive==="a"){
     props.nextFour();
     props.statUpdateAthirtyfive();
     props.btnFourthirtyfive()
     
    }
    else if (optionthirtyfive==="b"){
      props.nextFour();
      props.statUpdateAthirtyfive();
      props.btnFourthirtyfive()
      
     }
     else if (optionthirtyfive==="c"){
      props.nextFour();
      props.statUpdateAthirtyfive();
      props.btnFourthirtyfive()
      
     }
     else if ( optionthirtyfive==="d"){
      props.nextFour();
      props.statUpdateAthirtyfive();
      props.btnFourthirtyfive()
      
     }}
     else if (stat==="Marked"){
     if(optionthirtyfive===""){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnThreethirtyfive()
      
     }
          else if (optionthirtyfive==="a"){
      props.mfrFive();
      props.statUpdateNthirtyfive();
      props.btnThreethirtyfive()

     }
     else if (optionthirtyfive==="b"){
       props.mfrFive();
       props.statUpdateNthirtyfive();
       props.btnThreethirtyfive()

      }
      else if (optionthirtyfive==="c"){
       props.mfrFive();
       props.statUpdateNthirtyfive();
       props.btnThreethirtyfive()

      }
      else if (optionthirtyfive==="d"){
       props.mfrFive();
       props.statUpdateNthirtyfive();
       props.btnThreethirtyfive()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirtyfive==="a"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnThreethirtyfive()

      
     }
     else if (optionthirtyfive==="b"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnThreethirtyfive() 
     }
     else if (optionthirtyfive==="c"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnThreethirtyfive()
     }
     else if (optionthirtyfive==="d"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnThreethirtyfive()
     }}
     else if(stat==="Answered"){
     if (optionthirtyfive==="a"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()

      
     }
     else if (optionthirtyfive==="b"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()

      
     }
     else if ( optionthirtyfive==="c"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()
      
     }
     else if (optionthirtyfive==="d"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirtyfive===""){
  props.mfrOne();
  props.statUpdateMthirtyfive();
  props.btnTwothirtyfive()
 }
 
  else if (optionthirtyfive==="a"){
   props.mfrTwo();
   props.statUpdateNthirtyfive();
   props.btnThreethirtyfive()
  }
  else if (optionthirtyfive==="b"){
    props.mfrTwo();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
  

   }
   else if (optionthirtyfive==="c"){
    props.mfrTwo();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
  
   }
   else if (optionthirtyfive==="d"){
    props.mfrTwo();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirtyfive===""){
  props.mfrThree();
  props.statUpdateMthirtyfive();
  props.btnTwothirtyfive();
 }
 else if (optionthirtyfive==="a"){
  props.mfrFour();
  props.statUpdateNthirtyfive();
  props.btnThreethirtyfive()
 }
 else if (optionthirtyfive==="b"){
   props.mfrFour();
   props.statUpdateNthirtyfive();
   props.btnThreethirtyfive()
  }
  else if (optionthirtyfive==="c"){
   props.mfrFour();
   props.statUpdateNthirtyfive();
   props.btnThreethirtyfive()
  }
  else if (optionthirtyfive==="d"){
   props.mfrFour();
   props.statUpdateNthirtyfive();
  props.btnThreethirtyfive()
  }}
  else if (stat==="Marked"){
    if(optionthirtyfive===""){
    props.nextThree();
    props.statUpdateKthirtyfive();
    props.btnTwothirtyfive();
   }
   else if (optionthirtyfive==="a"){
    props.mfrFive();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()


   }
   else if (optionthirtyfive==="b"){
    props.mfrFive();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="c"){
    props.mfrFive();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="d"){
    props.mfrFive();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirtyfive==="a"){
    props.nextThree();
    props.statUpdateKthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="b"){
    props.nextThree();
    props.statUpdateKthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="c"){
    props.nextThree();
    props.statUpdateKthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="d"){
    props.nextThree();
    props.statUpdateKthirtyfive();
    props.btnThreethirtyfive()
   }}
   else if (stat==="Answered"){
     if(optionthirtyfive==="a"){
    props.mfrSix();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="b"){
    props.mfrSix();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="c"){
    props.mfrSix();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="d"){
    props.mfrSix();
    props.statUpdateNthirtyfive();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirtyfive===""){
    props.nexttwo();
    props.statUpdatethirtyfive();
    props.btnOnethirtyfive()
  }
  
   else if (optionthirtyfive==="a"){
    props.nextTwo();
    props.statUpdateAthirtyfive();
    props.btnFourthirtyfive()
   }
   else if (optionthirtyfive==="b"){
     props.nextTwo();
     props.statUpdateAthirtyfive();
     props.btnFourthirtyfive()
    }
    else if (optionthirtyfive==="c"){
     props.nextTwo();
     props.statUpdateAthirtyfive();
     props.btnFourthirtyfive()
    }
    else if (optionthirtyfive==="d"){
     props.nextTwo();
     props.statUpdateAthirtyfive();
     props.btnFourthirtyfive()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirtyfive===""){
   props.nextThree();
   props.statUpdateKthirtyfive();
   props.btnOnethirtyfive()
  }
  else if (optionthirtyfive==="a"){
   props.nextFour();
   props.statUpdateAthirtyfive();
   props.btnFourthirtyfive()
  }
  else if (optionthirtyfive==="b"){
    props.nextFour();
    props.statUpdateAthirtyfive();
    props.btnFourthirtyfive()
   }
   else if (optionthirtyfive==="c"){
    props.nextFour();
    props.statUpdateAthirtyfive();
    props.btnFourthirtyfive()
   }
   else if (optionthirtyfive==="d"){
    props.nextFour();
    props.statUpdateAthirtyfive();
    props.btnFourthirtyfive()
   }}
   else if (stat==="Marked"){
     if(optionthirtyfive===""){
     props.nextThree();
     props.statUpdateKthirtyfive();
     props.btnTwothirtyfive()
    }
    else if (optionthirtyfive==="a"){
     props.mfrFive();
     props.statUpdateNthirtyfive();
     props.btnThreethirtyfive()
    }
    else if (optionthirtyfive==="b"){
     props.mfrFive();
     props.statUpdateNthirtyfive();
     props.btnThreethirtyfive()
    }
    else if ( optionthirtyfive==="c"){
     props.mfrFive();
     props.statUpdateNthirtyfive();
     props.btnThreethirtyfive()
    }
    else if ( optionthirtyfive==="d"){
     props.mfrFive();
     props.statUpdateNthirtyfive();
     props.btnThreethirtyfive()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirtyfive==="a"){
     props.mfrSeven();
     props.statUpdateAthirtyfive();
     props.btnFourthirtyfive()
    }
    else if (optionthirtyfive==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirtyfive();
      props.btnFourthirtyfive()
    }
    else if (optionthirtyfive==="c"){
      props.mfrSeven();
      props.statUpdateAthirtyfive();
      props.btnFourthirtyfive()
    }
    else if ( optionthirtyfive==="d"){
      props.mfrSeven();
      props.statUpdateAthirtyfive();
      props.btnFourthirtyfive()
    }}
    else if (stat==="Answered"){
      if(optionthirtyfive==="a"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()
    }
    else if (optionthirtyfive==="b"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()
    }
    else if (optionthirtyfive==="c"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()
    }
    else if (optionthirtyfive==="d"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()
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
     <p style={wStyle}>Test Name: <b>Functions</b></p>
     <p style={wStyle1}>Name of the Candidate: <b>{props.name}</b></p> 
    <form>
    <p><i>Question No.36</i><br></br>  The domain of {'\u221a'}1-{'\u221a'}1-{'\u221a'}1-x{'\u00b2'}</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirtyfive=== 'a'}
          onClick={handleChange}
        /> (0,1]
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirtyfive === 'b'}
          onClick={handleChange}
        /> [-1,1]
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirtyfive === 'c'}
          onClick={handleChange}
        /> (- ∞,∞)        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirtyfive === 'd'}
          onClick={handleChange}
        /> None      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/Fthirtyseven'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/Fthirtyseven'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/Fthirtyseven'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/Fthirtyfive'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><Ftimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/Fconfirm'))}>Submit Test</button>
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
     statusthirtyfive:state.statusthirtyfive,
     optionthirtyfive:state.optionthirtyfive,
     BHealthanddiseaseThirtyeight:state.BHealthanddiseaseThirtyeight,
  BHealthanddiseaseThirtyeightA:state.BHealthanddiseaseThirtyeightA,
  BHealthanddiseaseThirtyeightB:state.BHealthanddiseaseThirtyeightB,
  BHealthanddiseaseThirtyeightC:state.BHealthanddiseaseThirtyeightC,
  BHealthanddiseaseThirtyeightD:state.BHealthanddiseaseThirtyeightD,
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
    optAthirtyfive:()=>dispatch(optAthirtyfive()),
    optBthirtyfive:()=>dispatch(optBthirtyfive()),
    optCthirtyfive:()=>dispatch(optCthirtyfive()),
    optDthirtyfive:()=>dispatch(optDthirtyfive()),
    statUpdatethirtyfive:()=>dispatch(statUpdatethirtyfive()),
    statUpdateAthirtyfive:()=>dispatch(statUpdateAthirtyfive()),
    statUpdateMthirtyfive:()=>dispatch(statUpdateMthirtyfive()),
    statUpdateNthirtyfive:()=>dispatch(statUpdateNthirtyfive()),
    statUpdateKthirtyfive:()=>dispatch(statUpdateKthirtyfive()),
    btnOnethirtyfive:()=>dispatch(btnOnethirtyfive()),
    btnTwothirtyfive:()=>dispatch(btnTwothirtyfive()),
    btnThreethirtyfive:()=>dispatch(btnThreethirtyfive()),
    btnFourthirtyfive:()=>dispatch(btnFourthirtyfive()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (Fthirtysix)