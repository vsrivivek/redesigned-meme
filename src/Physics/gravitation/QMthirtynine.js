import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirtyeight,optBthirtyeight,optCthirtyeight,optDthirtyeight,btnOnethirtyeight,btnTwothirtyeight,btnThreethirtyeight,btnFourthirtyeight,statUpdatethirtyeight,statUpdateAthirtyeight,statUpdateKthirtyeight,statUpdateMthirtyeight,statUpdateNthirtyeight,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import QMtimer from './QMtimer'
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function QMthirtynine(props) {
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
    var stat=props.statusthirtyeight;
    var opt=props.optionthirtyeight

  const [optionthirtyeight, setOptionthirtyeight] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirtyeight(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirtyeight==="a"){
   props.optAthirtyeight()
 }
 if(optionthirtyeight==="b"){
   props.optBthirtyeight()
 }
 if(optionthirtyeight==="c"){
   props.optCthirtyeight()
 }
 if(optionthirtyeight==="d"){
   props.optDthirtyeight()
 }
}

 useEffect(()=>{
  setOptionthirtyeight(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirtyeight===""){
  props.nextOne();
  props.statUpdatethirtyeight();
  props.btnOnethirtyeight()
  
 }
 
  else if (optionthirtyeight==="a"){
   props.nextTwo();
   props.statUpdateAthirtyeight();
   props.btnFourthirtyeight()
  
   
  }
  else if (optionthirtyeight==="b"){
    props.nextTwo();
    props.statUpdateAthirtyeight();
    props.btnFourthirtyeight()
   }
   else if (optionthirtyeight==="c"){
    props.nextTwo();
    props.statUpdateAthirtyeight();
    props.btnFourthirtyeight()
   }
   else if (optionthirtyeight==="d"){
    props.nextTwo();
    props.statUpdateAthirtyeight();
    props.btnFourthirtyeight()
   }}
   else if (stat==="Not Answered"){
     if(optionthirtyeight===""){
    props.nextThree();
    props.statUpdateKthirtyeight();
    props.btnOnethirtyeight()
    
   }
   
    else if (optionthirtyeight==="a"){
     props.nextFour();
     props.statUpdateAthirtyeight();
     props.btnFourthirtyeight()
     
    }
    else if (optionthirtyeight==="b"){
      props.nextFour();
      props.statUpdateAthirtyeight();
      props.btnFourthirtyeight()
      
     }
     else if (optionthirtyeight==="c"){
      props.nextFour();
      props.statUpdateAthirtyeight();
      props.btnFourthirtyeight()
      
     }
     else if ( optionthirtyeight==="d"){
      props.nextFour();
      props.statUpdateAthirtyeight();
      props.btnFourthirtyeight()
      
     }}
     else if (stat==="Marked"){
     if(optionthirtyeight===""){
      props.nextThree();
      props.statUpdateKthirtyeight();
      props.btnThreethirtyeight()
      
     }
          else if (optionthirtyeight==="a"){
      props.mfrFive();
      props.statUpdateNthirtyeight();
      props.btnThreethirtyeight()

     }
     else if (optionthirtyeight==="b"){
       props.mfrFive();
       props.statUpdateNthirtyeight();
       props.btnThreethirtyeight()

      }
      else if (optionthirtyeight==="c"){
       props.mfrFive();
       props.statUpdateNthirtyeight();
       props.btnThreethirtyeight()

      }
      else if (optionthirtyeight==="d"){
       props.mfrFive();
       props.statUpdateNthirtyeight();
       props.btnThreethirtyeight()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirtyeight==="a"){
      props.nextThree();
      props.statUpdateKthirtyeight();
      props.btnThreethirtyeight()

      
     }
     else if (optionthirtyeight==="b"){
      props.nextThree();
      props.statUpdateKthirtyeight();
      props.btnThreethirtyeight() 
     }
     else if (optionthirtyeight==="c"){
      props.nextThree();
      props.statUpdateKthirtyeight();
      props.btnThreethirtyeight()
     }
     else if (optionthirtyeight==="d"){
      props.nextThree();
      props.statUpdateKthirtyeight();
      props.btnThreethirtyeight()
     }}
     else if(stat==="Answered"){
     if (optionthirtyeight==="a"){
      props.nextThree();
      props.statUpdateKthirtyeight();
      props.btnFourthirtyeight()

      
     }
     else if (optionthirtyeight==="b"){
      props.nextThree();
      props.statUpdateKthirtyeight();
      props.btnFourthirtyeight()

      
     }
     else if ( optionthirtyeight==="c"){
      props.nextThree();
      props.statUpdateKthirtyeight();
      props.btnFourthirtyeight()
      
     }
     else if (optionthirtyeight==="d"){
      props.nextThree();
      props.statUpdateKthirtyeight();
      props.btnFourthirtyeight()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirtyeight===""){
  props.mfrOne();
  props.statUpdateMthirtyeight();
  props.btnTwothirtyeight()
 }
 
  else if (optionthirtyeight==="a"){
   props.mfrTwo();
   props.statUpdateNthirtyeight();
   props.btnThreethirtyeight()
  }
  else if (optionthirtyeight==="b"){
    props.mfrTwo();
    props.statUpdateNthirtyeight();
    props.btnThreethirtyeight()
  

   }
   else if (optionthirtyeight==="c"){
    props.mfrTwo();
    props.statUpdateNthirtyeight();
    props.btnThreethirtyeight()
  
   }
   else if (optionthirtyeight==="d"){
    props.mfrTwo();
    props.statUpdateNthirtyeight();
    props.btnThreethirtyeight()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirtyeight===""){
  props.mfrThree();
  props.statUpdateMthirtyeight();
  props.btnTwothirtyeight();
 }
 else if (optionthirtyeight==="a"){
  props.mfrFour();
  props.statUpdateNthirtyeight();
  props.btnThreethirtyeight()
 }
 else if (optionthirtyeight==="b"){
   props.mfrFour();
   props.statUpdateNthirtyeight();
   props.btnThreethirtyeight()
  }
  else if (optionthirtyeight==="c"){
   props.mfrFour();
   props.statUpdateNthirtyeight();
   props.btnThreethirtyeight()
  }
  else if (optionthirtyeight==="d"){
   props.mfrFour();
   props.statUpdateNthirtyeight();
  props.btnThreethirtyeight()
  }}
  else if (stat==="Marked"){
    if(optionthirtyeight===""){
    props.nextThree();
    props.statUpdateKthirtyeight();
    props.btnTwothirtyeight();
   }
   else if (optionthirtyeight==="a"){
    props.mfrFive();
    props.statUpdateNthirtyeight();
    props.btnThreethirtyeight()


   }
   else if (optionthirtyeight==="b"){
    props.mfrFive();
    props.statUpdateNthirtyeight();
    props.btnThreethirtyeight()
   }
   else if (optionthirtyeight==="c"){
    props.mfrFive();
    props.statUpdateNthirtyeight();
    props.btnThreethirtyeight()
   }
   else if (optionthirtyeight==="d"){
    props.mfrFive();
    props.statUpdateNthirtyeight();
    props.btnThreethirtyeight()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirtyeight==="a"){
    props.nextThree();
    props.statUpdateKthirtyeight();
    props.btnThreethirtyeight()
   }
   else if (optionthirtyeight==="b"){
    props.nextThree();
    props.statUpdateKthirtyeight();
    props.btnThreethirtyeight()
   }
   else if (optionthirtyeight==="c"){
    props.nextThree();
    props.statUpdateKthirtyeight();
    props.btnThreethirtyeight()
   }
   else if (optionthirtyeight==="d"){
    props.nextThree();
    props.statUpdateKthirtyeight();
    props.btnThreethirtyeight()
   }}
   else if (stat==="Answered"){
     if(optionthirtyeight==="a"){
    props.mfrSix();
    props.statUpdateNthirtyeight();
    props.btnThreethirtyeight()
   }
   else if (optionthirtyeight==="b"){
    props.mfrSix();
    props.statUpdateNthirtyeight();
    props.btnThreethirtyeight()
   }
   else if (optionthirtyeight==="c"){
    props.mfrSix();
    props.statUpdateNthirtyeight();
    props.btnThreethirtyeight()
   }
   else if (optionthirtyeight==="d"){
    props.mfrSix();
    props.statUpdateNthirtyeight();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirtyeight===""){
    props.nexttwo();
    props.statUpdatethirtyeight();
    props.btnOnethirtyeight()
  }
  
   else if (optionthirtyeight==="a"){
    props.nextTwo();
    props.statUpdateAthirtyeight();
    props.btnFourthirtyeight()
   }
   else if (optionthirtyeight==="b"){
     props.nextTwo();
     props.statUpdateAthirtyeight();
     props.btnFourthirtyeight()
    }
    else if (optionthirtyeight==="c"){
     props.nextTwo();
     props.statUpdateAthirtyeight();
     props.btnFourthirtyeight()
    }
    else if (optionthirtyeight==="d"){
     props.nextTwo();
     props.statUpdateAthirtyeight();
     props.btnFourthirtyeight()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirtyeight===""){
   props.nextThree();
   props.statUpdateKthirtyeight();
   props.btnOnethirtyeight()
  }
  else if (optionthirtyeight==="a"){
   props.nextFour();
   props.statUpdateAthirtyeight();
   props.btnFourthirtyeight()
  }
  else if (optionthirtyeight==="b"){
    props.nextFour();
    props.statUpdateAthirtyeight();
    props.btnFourthirtyeight()
   }
   else if (optionthirtyeight==="c"){
    props.nextFour();
    props.statUpdateAthirtyeight();
    props.btnFourthirtyeight()
   }
   else if (optionthirtyeight==="d"){
    props.nextFour();
    props.statUpdateAthirtyeight();
    props.btnFourthirtyeight()
   }}
   else if (stat==="Marked"){
     if(optionthirtyeight===""){
     props.nextThree();
     props.statUpdateKthirtyeight();
     props.btnTwothirtyeight()
    }
    else if (optionthirtyeight==="a"){
     props.mfrFive();
     props.statUpdateNthirtyeight();
     props.btnThreethirtyeight()
    }
    else if (optionthirtyeight==="b"){
     props.mfrFive();
     props.statUpdateNthirtyeight();
     props.btnThreethirtyeight()
    }
    else if ( optionthirtyeight==="c"){
     props.mfrFive();
     props.statUpdateNthirtyeight();
     props.btnThreethirtyeight()
    }
    else if ( optionthirtyeight==="d"){
     props.mfrFive();
     props.statUpdateNthirtyeight();
     props.btnThreethirtyeight()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirtyeight==="a"){
     props.mfrSeven();
     props.statUpdateAthirtyeight();
     props.btnFourthirtyeight()
    }
    else if (optionthirtyeight==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirtyeight();
      props.btnFourthirtyeight()
    }
    else if (optionthirtyeight==="c"){
      props.mfrSeven();
      props.statUpdateAthirtyeight();
      props.btnFourthirtyeight()
    }
    else if ( optionthirtyeight==="d"){
      props.mfrSeven();
      props.statUpdateAthirtyeight();
      props.btnFourthirtyeight()
    }}
    else if (stat==="Answered"){
      if(optionthirtyeight==="a"){
      props.nextThree();
      props.statUpdateKthirtyeight();
      props.btnFourthirtyeight()
    }
    else if (optionthirtyeight==="b"){
      props.nextThree();
      props.statUpdateKthirtyeight();
      props.btnFourthirtyeight()
    }
    else if (optionthirtyeight==="c"){
      props.nextThree();
      props.statUpdateKthirtyeight();
      props.btnFourthirtyeight()
    }
    else if (optionthirtyeight==="d"){
      props.nextThree();
      props.statUpdateKthirtyeight();
      props.btnFourthirtyeight()
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
     <p style={wStyle}>Test Name: <b>Gravitation</b></p>
     <p style={wStyle1}>Name of the Candidate: <b>{props.name}</b></p>  
    <form>
    <p><i>Question No.39</i><br></br>  The angular velocity of the earth with which it has to rotate so that acceleration due to gravity on 60<sup>o</sup> latitude becomes zero is (Radius of earth is 6400km)</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirtyeight=== 'a'}
          onClick={handleChange}
        /> 2.5x10<sup>-3</sup> rad s<sup>-1</sup>
        
            <div>
        <input
          type="radio"
          value="b"
          checked={optionthirtyeight=== 'b'}
          onClick={handleChange}
        /> 5x10<sup>-1</sup> rad s<sup>-1</sup>
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirtyeight=== 'c'}
          onClick={handleChange}
        /> 10x10<sup>3</sup> rad s<sup>-1</sup>
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirtyeight === 'd'}
          onClick={handleChange}
        /> 7.8x10<sup>-2</sup> rad s<sup>-1</sup>
        
        </div>
       
      </div>
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/QMforty'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/QMforty'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/QMforty'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/QMthirtyeight'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><QMtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/QMconfirm'))}>Submit Test</button>
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
     statusthirtyeight:state.statusthirtyeight,
     optionthirtyeight:state.optionthirtyeight,
     BHealthanddiseasefortyone:state.BHealthanddiseasefortyone,
  BHealthanddiseasefortyoneA:state.BHealthanddiseasefortyoneA,
  BHealthanddiseasefortyoneB:state.BHealthanddiseasefortyoneB,
  BHealthanddiseasefortyoneC:state.BHealthanddiseasefortyoneC,
  BHealthanddiseasefortyoneD:state.BHealthanddiseasefortyoneD,
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
  divA:state.divA,
  name:state.name

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
    optAthirtyeight:()=>dispatch(optAthirtyeight()),
    optBthirtyeight:()=>dispatch(optBthirtyeight()),
    optCthirtyeight:()=>dispatch(optCthirtyeight()),
    optDthirtyeight:()=>dispatch(optDthirtyeight()),
    statUpdatethirtyeight:()=>dispatch(statUpdatethirtyeight()),
    statUpdateAthirtyeight:()=>dispatch(statUpdateAthirtyeight()),
    statUpdateMthirtyeight:()=>dispatch(statUpdateMthirtyeight()),
    statUpdateNthirtyeight:()=>dispatch(statUpdateNthirtyeight()),
    statUpdateKthirtyeight:()=>dispatch(statUpdateKthirtyeight()),
    btnOnethirtyeight:()=>dispatch(btnOnethirtyeight()),
    btnTwothirtyeight:()=>dispatch(btnTwothirtyeight()),
    btnThreethirtyeight:()=>dispatch(btnThreethirtyeight()),
    btnFourthirtyeight:()=>dispatch(btnFourthirtyeight()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (QMthirtynine)