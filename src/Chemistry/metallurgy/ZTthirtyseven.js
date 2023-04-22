import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirtysix,optBthirtysix,optCthirtysix,optDthirtysix,btnOnethirtysix,btnTwothirtysix,btnThreethirtysix,btnFourthirtysix,statUpdatethirtysix,statUpdateAthirtysix,statUpdateKthirtysix,statUpdateMthirtysix,statUpdateNthirtysix,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import ZTtimer from './ZTtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function ZTthirtyseven(props) {
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
    "width": "375px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const navigate = useNavigate()  
    var stat=props.statusthirtysix;
    var opt=props.optionthirtysix

  const [optionthirtysix, setOptionthirtysix] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirtysix(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirtysix==="a"){
   props.optAthirtysix()
 }
 if(optionthirtysix==="b"){
   props.optBthirtysix()
 }
 if(optionthirtysix==="c"){
   props.optCthirtysix()
 }
 if(optionthirtysix==="d"){
   props.optDthirtysix()
 }
}

 useEffect(()=>{
  setOptionthirtysix(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirtysix===""){
  props.nextOne();
  props.statUpdatethirtysix();
  props.btnOnethirtysix()
  
 }
 
  else if (optionthirtysix==="a"){
   props.nextTwo();
   props.statUpdateAthirtysix();
   props.btnFourthirtysix()
  
   
  }
  else if (optionthirtysix==="b"){
    props.nextTwo();
    props.statUpdateAthirtysix();
    props.btnFourthirtysix()
   }
   else if (optionthirtysix==="c"){
    props.nextTwo();
    props.statUpdateAthirtysix();
    props.btnFourthirtysix()
   }
   else if (optionthirtysix==="d"){
    props.nextTwo();
    props.statUpdateAthirtysix();
    props.btnFourthirtysix()
   }}
   else if (stat==="Not Answered"){
     if(optionthirtysix===""){
    props.nextThree();
    props.statUpdateKthirtysix();
    props.btnOnethirtysix()
    
   }
   
    else if (optionthirtysix==="a"){
     props.nextFour();
     props.statUpdateAthirtysix();
     props.btnFourthirtysix()
     
    }
    else if (optionthirtysix==="b"){
      props.nextFour();
      props.statUpdateAthirtysix();
      props.btnFourthirtysix()
      
     }
     else if (optionthirtysix==="c"){
      props.nextFour();
      props.statUpdateAthirtysix();
      props.btnFourthirtysix()
      
     }
     else if ( optionthirtysix==="d"){
      props.nextFour();
      props.statUpdateAthirtysix();
      props.btnFourthirtysix()
      
     }}
     else if (stat==="Marked"){
     if(optionthirtysix===""){
      props.nextThree();
      props.statUpdateKthirtysix();
      props.btnThreethirtysix()
      
     }
          else if (optionthirtysix==="a"){
      props.mfrFive();
      props.statUpdateNthirtysix();
      props.btnThreethirtysix()

     }
     else if (optionthirtysix==="b"){
       props.mfrFive();
       props.statUpdateNthirtysix();
       props.btnThreethirtysix()

      }
      else if (optionthirtysix==="c"){
       props.mfrFive();
       props.statUpdateNthirtysix();
       props.btnThreethirtysix()

      }
      else if (optionthirtysix==="d"){
       props.mfrFive();
       props.statUpdateNthirtysix();
       props.btnThreethirtysix()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirtysix==="a"){
      props.nextThree();
      props.statUpdateKthirtysix();
      props.btnThreethirtysix()

      
     }
     else if (optionthirtysix==="b"){
      props.nextThree();
      props.statUpdateKthirtysix();
      props.btnThreethirtysix() 
     }
     else if (optionthirtysix==="c"){
      props.nextThree();
      props.statUpdateKthirtysix();
      props.btnThreethirtysix()
     }
     else if (optionthirtysix==="d"){
      props.nextThree();
      props.statUpdateKthirtysix();
      props.btnThreethirtysix()
     }}
     else if(stat==="Answered"){
     if (optionthirtysix==="a"){
      props.nextThree();
      props.statUpdateKthirtysix();
      props.btnFourthirtysix()

      
     }
     else if (optionthirtysix==="b"){
      props.nextThree();
      props.statUpdateKthirtysix();
      props.btnFourthirtysix()

      
     }
     else if ( optionthirtysix==="c"){
      props.nextThree();
      props.statUpdateKthirtysix();
      props.btnFourthirtysix()
      
     }
     else if (optionthirtysix==="d"){
      props.nextThree();
      props.statUpdateKthirtysix();
      props.btnFourthirtysix()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirtysix===""){
  props.mfrOne();
  props.statUpdateMthirtysix();
  props.btnTwothirtysix()
 }
 
  else if (optionthirtysix==="a"){
   props.mfrTwo();
   props.statUpdateNthirtysix();
   props.btnThreethirtysix()
  }
  else if (optionthirtysix==="b"){
    props.mfrTwo();
    props.statUpdateNthirtysix();
    props.btnThreethirtysix()
  

   }
   else if (optionthirtysix==="c"){
    props.mfrTwo();
    props.statUpdateNthirtysix();
    props.btnThreethirtysix()
  
   }
   else if (optionthirtysix==="d"){
    props.mfrTwo();
    props.statUpdateNthirtysix();
    props.btnThreethirtysix()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirtysix===""){
  props.mfrThree();
  props.statUpdateMthirtysix();
  props.btnTwothirtysix();
 }
 else if (optionthirtysix==="a"){
  props.mfrFour();
  props.statUpdateNthirtysix();
  props.btnThreethirtysix()
 }
 else if (optionthirtysix==="b"){
   props.mfrFour();
   props.statUpdateNthirtysix();
   props.btnThreethirtysix()
  }
  else if (optionthirtysix==="c"){
   props.mfrFour();
   props.statUpdateNthirtysix();
   props.btnThreethirtysix()
  }
  else if (optionthirtysix==="d"){
   props.mfrFour();
   props.statUpdateNthirtysix();
  props.btnThreethirtysix()
  }}
  else if (stat==="Marked"){
    if(optionthirtysix===""){
    props.nextThree();
    props.statUpdateKthirtysix();
    props.btnTwothirtysix();
   }
   else if (optionthirtysix==="a"){
    props.mfrFive();
    props.statUpdateNthirtysix();
    props.btnThreethirtysix()


   }
   else if (optionthirtysix==="b"){
    props.mfrFive();
    props.statUpdateNthirtysix();
    props.btnThreethirtysix()
   }
   else if (optionthirtysix==="c"){
    props.mfrFive();
    props.statUpdateNthirtysix();
    props.btnThreethirtysix()
   }
   else if (optionthirtysix==="d"){
    props.mfrFive();
    props.statUpdateNthirtysix();
    props.btnThreethirtysix()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirtysix==="a"){
    props.nextThree();
    props.statUpdateKthirtysix();
    props.btnThreethirtysix()
   }
   else if (optionthirtysix==="b"){
    props.nextThree();
    props.statUpdateKthirtysix();
    props.btnThreethirtysix()
   }
   else if (optionthirtysix==="c"){
    props.nextThree();
    props.statUpdateKthirtysix();
    props.btnThreethirtysix()
   }
   else if (optionthirtysix==="d"){
    props.nextThree();
    props.statUpdateKthirtysix();
    props.btnThreethirtysix()
   }}
   else if (stat==="Answered"){
     if(optionthirtysix==="a"){
    props.mfrSix();
    props.statUpdateNthirtysix();
    props.btnThreethirtysix()
   }
   else if (optionthirtysix==="b"){
    props.mfrSix();
    props.statUpdateNthirtysix();
    props.btnThreethirtysix()
   }
   else if (optionthirtysix==="c"){
    props.mfrSix();
    props.statUpdateNthirtysix();
    props.btnThreethirtysix()
   }
   else if (optionthirtysix==="d"){
    props.mfrSix();
    props.statUpdateNthirtysix();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirtysix===""){
    props.nexttwo();
    props.statUpdatethirtysix();
    props.btnOnethirtysix()
  }
  
   else if (optionthirtysix==="a"){
    props.nextTwo();
    props.statUpdateAthirtysix();
    props.btnFourthirtysix()
   }
   else if (optionthirtysix==="b"){
     props.nextTwo();
     props.statUpdateAthirtysix();
     props.btnFourthirtysix()
    }
    else if (optionthirtysix==="c"){
     props.nextTwo();
     props.statUpdateAthirtysix();
     props.btnFourthirtysix()
    }
    else if (optionthirtysix==="d"){
     props.nextTwo();
     props.statUpdateAthirtysix();
     props.btnFourthirtysix()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirtysix===""){
   props.nextThree();
   props.statUpdateKthirtysix();
   props.btnOnethirtysix()
  }
  else if (optionthirtysix==="a"){
   props.nextFour();
   props.statUpdateAthirtysix();
   props.btnFourthirtysix()
  }
  else if (optionthirtysix==="b"){
    props.nextFour();
    props.statUpdateAthirtysix();
    props.btnFourthirtysix()
   }
   else if (optionthirtysix==="c"){
    props.nextFour();
    props.statUpdateAthirtysix();
    props.btnFourthirtysix()
   }
   else if (optionthirtysix==="d"){
    props.nextFour();
    props.statUpdateAthirtysix();
    props.btnFourthirtysix()
   }}
   else if (stat==="Marked"){
     if(optionthirtysix===""){
     props.nextThree();
     props.statUpdateKthirtysix();
     props.btnTwothirtysix()
    }
    else if (optionthirtysix==="a"){
     props.mfrFive();
     props.statUpdateNthirtysix();
     props.btnThreethirtysix()
    }
    else if (optionthirtysix==="b"){
     props.mfrFive();
     props.statUpdateNthirtysix();
     props.btnThreethirtysix()
    }
    else if ( optionthirtysix==="c"){
     props.mfrFive();
     props.statUpdateNthirtysix();
     props.btnThreethirtysix()
    }
    else if ( optionthirtysix==="d"){
     props.mfrFive();
     props.statUpdateNthirtysix();
     props.btnThreethirtysix()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirtysix==="a"){
     props.mfrSeven();
     props.statUpdateAthirtysix();
     props.btnFourthirtysix()
    }
    else if (optionthirtysix==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirtysix();
      props.btnFourthirtysix()
    }
    else if (optionthirtysix==="c"){
      props.mfrSeven();
      props.statUpdateAthirtysix();
      props.btnFourthirtysix()
    }
    else if ( optionthirtysix==="d"){
      props.mfrSeven();
      props.statUpdateAthirtysix();
      props.btnFourthirtysix()
    }}
    else if (stat==="Answered"){
      if(optionthirtysix==="a"){
      props.nextThree();
      props.statUpdateKthirtysix();
      props.btnFourthirtysix()
    }
    else if (optionthirtysix==="b"){
      props.nextThree();
      props.statUpdateKthirtysix();
      props.btnFourthirtysix()
    }
    else if (optionthirtysix==="c"){
      props.nextThree();
      props.statUpdateKthirtysix();
      props.btnFourthirtysix()
    }
    else if (optionthirtysix==="d"){
      props.nextThree();
      props.statUpdateKthirtysix();
      props.btnFourthirtysix()
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
     <p style={wStyle}>Test Name: <b>General Principles of Metallurgy</b></p>
     <p style={wStyle1}>Name Of the Candidate: <b>{props.name}</b></p> 
    <form>
    <p><i>Question No.37</i><br></br>Identify the correct statement with respect to Ellingham's diagram from the following statements</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirtysix=== 'a'}
          onClick={handleChange}
        /> Magnesium reduces aluminium oxide below 1700 K
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirtysix === 'b'}
          onClick={handleChange}
        /> Aluminium reduces Magnesium oxide above 1700 K
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirtysix === 'c'}
          onClick={handleChange}
        /> Aluminium reduces Magnesium oxide below 1700 K
        
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirtysix === 'd'}
          onClick={handleChange}
        /> Magnesium reduces aluminium oxide above 1700 K
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/ZTthirtyeight'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/ZTthirtyeight'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/ZTthirtyeight'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/ZTthirtysix'))}>Previous</button>
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><ZTtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/ZTconfirm'))}>Submit Test</button>
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
     statusthirtysix:state.statusthirtysix,
     optionthirtysix:state.optionthirtysix,
     BHealthanddiseaseThirtynine:state.BHealthanddiseaseThirtynine,
  BHealthanddiseaseThirtynineA:state.BHealthanddiseaseThirtynineA,
  BHealthanddiseaseThirtynineB:state.BHealthanddiseaseThirtynineB,
  BHealthanddiseaseThirtynineC:state.BHealthanddiseaseThirtynineC,
  BHealthanddiseaseThirtynineD:state.BHealthanddiseaseThirtynineD,
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


}}
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
    optAthirtysix:()=>dispatch(optAthirtysix()),
    optBthirtysix:()=>dispatch(optBthirtysix()),
    optCthirtysix:()=>dispatch(optCthirtysix()),
    optDthirtysix:()=>dispatch(optDthirtysix()),
    statUpdatethirtysix:()=>dispatch(statUpdatethirtysix()),
    statUpdateAthirtysix:()=>dispatch(statUpdateAthirtysix()),
    statUpdateMthirtysix:()=>dispatch(statUpdateMthirtysix()),
    statUpdateNthirtysix:()=>dispatch(statUpdateNthirtysix()),
    statUpdateKthirtysix:()=>dispatch(statUpdateKthirtysix()),
    btnOnethirtysix:()=>dispatch(btnOnethirtysix()),
    btnTwothirtysix:()=>dispatch(btnTwothirtysix()),
    btnThreethirtysix:()=>dispatch(btnThreethirtysix()),
    btnFourthirtysix:()=>dispatch(btnFourthirtysix()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (ZTthirtyseven)