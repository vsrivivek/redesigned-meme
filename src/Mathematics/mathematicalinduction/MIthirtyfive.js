import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirtyfour,optBthirtyfour,optCthirtyfour,optDthirtyfour,btnOnethirtyfour,btnTwothirtyfour,btnThreethirtyfour,btnFourthirtyfour,statUpdatethirtyfour,statUpdateAthirtyfour,statUpdateKthirtyfour,statUpdateMthirtyfour,statUpdateNthirtyfour,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import MItimer from './MItimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function MIthirtyfive(props) {
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
    var stat=props.statusthirtyfour;
    var opt=props.optionthirtyfour

  const [optionthirtyfour, setOptionthirtyfour] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirtyfour(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirtyfour==="a"){
   props.optAthirtyfour()
 }
 if(optionthirtyfour==="b"){
   props.optBthirtyfour()
 }
 if(optionthirtyfour==="c"){
   props.optCthirtyfour()
 }
 if(optionthirtyfour==="d"){
   props.optDthirtyfour()
 }
}

 useEffect(()=>{
  setOptionthirtyfour(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirtyfour===""){
  props.nextOne();
  props.statUpdatethirtyfour();
  props.btnOnethirtyfour()
  
 }
 
  else if (optionthirtyfour==="a"){
   props.nextTwo();
   props.statUpdateAthirtyfour();
   props.btnFourthirtyfour()
  
   
  }
  else if (optionthirtyfour==="b"){
    props.nextTwo();
    props.statUpdateAthirtyfour();
    props.btnFourthirtyfour()
   }
   else if (optionthirtyfour==="c"){
    props.nextTwo();
    props.statUpdateAthirtyfour();
    props.btnFourthirtyfour()
   }
   else if (optionthirtyfour==="d"){
    props.nextTwo();
    props.statUpdateAthirtyfour();
    props.btnFourthirtyfour()
   }}
   else if (stat==="Not Answered"){
     if(optionthirtyfour===""){
    props.nextThree();
    props.statUpdateKthirtyfour();
    props.btnOnethirtyfour()
    
   }
   
    else if (optionthirtyfour==="a"){
     props.nextFour();
     props.statUpdateAthirtyfour();
     props.btnFourthirtyfour()
     
    }
    else if (optionthirtyfour==="b"){
      props.nextFour();
      props.statUpdateAthirtyfour();
      props.btnFourthirtyfour()
      
     }
     else if (optionthirtyfour==="c"){
      props.nextFour();
      props.statUpdateAthirtyfour();
      props.btnFourthirtyfour()
      
     }
     else if ( optionthirtyfour==="d"){
      props.nextFour();
      props.statUpdateAthirtyfour();
      props.btnFourthirtyfour()
      
     }}
     else if (stat==="Marked"){
     if(optionthirtyfour===""){
      props.nextThree();
      props.statUpdateKthirtyfour();
      props.btnThreethirtyfour()
      
     }
          else if (optionthirtyfour==="a"){
      props.mfrFive();
      props.statUpdateNthirtyfour();
      props.btnThreethirtyfour()

     }
     else if (optionthirtyfour==="b"){
       props.mfrFive();
       props.statUpdateNthirtyfour();
       props.btnThreethirtyfour()

      }
      else if (optionthirtyfour==="c"){
       props.mfrFive();
       props.statUpdateNthirtyfour();
       props.btnThreethirtyfour()

      }
      else if (optionthirtyfour==="d"){
       props.mfrFive();
       props.statUpdateNthirtyfour();
       props.btnThreethirtyfour()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirtyfour==="a"){
      props.nextThree();
      props.statUpdateKthirtyfour();
      props.btnThreethirtyfour()

      
     }
     else if (optionthirtyfour==="b"){
      props.nextThree();
      props.statUpdateKthirtyfour();
      props.btnThreethirtyfour() 
     }
     else if (optionthirtyfour==="c"){
      props.nextThree();
      props.statUpdateKthirtyfour();
      props.btnThreethirtyfour()
     }
     else if (optionthirtyfour==="d"){
      props.nextThree();
      props.statUpdateKthirtyfour();
      props.btnThreethirtyfour()
     }}
     else if(stat==="Answered"){
     if (optionthirtyfour==="a"){
      props.nextThree();
      props.statUpdateKthirtyfour();
      props.btnFourthirtyfour()

      
     }
     else if (optionthirtyfour==="b"){
      props.nextThree();
      props.statUpdateKthirtyfour();
      props.btnFourthirtyfour()

      
     }
     else if ( optionthirtyfour==="c"){
      props.nextThree();
      props.statUpdateKthirtyfour();
      props.btnFourthirtyfour()
      
     }
     else if (optionthirtyfour==="d"){
      props.nextThree();
      props.statUpdateKthirtyfour();
      props.btnFourthirtyfour()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirtyfour===""){
  props.mfrOne();
  props.statUpdateMthirtyfour();
  props.btnTwothirtyfour()
 }
 
  else if (optionthirtyfour==="a"){
   props.mfrTwo();
   props.statUpdateNthirtyfour();
   props.btnThreethirtyfour()
  }
  else if (optionthirtyfour==="b"){
    props.mfrTwo();
    props.statUpdateNthirtyfour();
    props.btnThreethirtyfour()
  

   }
   else if (optionthirtyfour==="c"){
    props.mfrTwo();
    props.statUpdateNthirtyfour();
    props.btnThreethirtyfour()
  
   }
   else if (optionthirtyfour==="d"){
    props.mfrTwo();
    props.statUpdateNthirtyfour();
    props.btnThreethirtyfour()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirtyfour===""){
  props.mfrThree();
  props.statUpdateMthirtyfour();
  props.btnTwothirtyfour();
 }
 else if (optionthirtyfour==="a"){
  props.mfrFour();
  props.statUpdateNthirtyfour();
  props.btnThreethirtyfour()
 }
 else if (optionthirtyfour==="b"){
   props.mfrFour();
   props.statUpdateNthirtyfour();
   props.btnThreethirtyfour()
  }
  else if (optionthirtyfour==="c"){
   props.mfrFour();
   props.statUpdateNthirtyfour();
   props.btnThreethirtyfour()
  }
  else if (optionthirtyfour==="d"){
   props.mfrFour();
   props.statUpdateNthirtyfour();
  props.btnThreethirtyfour()
  }}
  else if (stat==="Marked"){
    if(optionthirtyfour===""){
    props.nextThree();
    props.statUpdateKthirtyfour();
    props.btnTwothirtyfour();
   }
   else if (optionthirtyfour==="a"){
    props.mfrFive();
    props.statUpdateNthirtyfour();
    props.btnThreethirtyfour()


   }
   else if (optionthirtyfour==="b"){
    props.mfrFive();
    props.statUpdateNthirtyfour();
    props.btnThreethirtyfour()
   }
   else if (optionthirtyfour==="c"){
    props.mfrFive();
    props.statUpdateNthirtyfour();
    props.btnThreethirtyfour()
   }
   else if (optionthirtyfour==="d"){
    props.mfrFive();
    props.statUpdateNthirtyfour();
    props.btnThreethirtyfour()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirtyfour==="a"){
    props.nextThree();
    props.statUpdateKthirtyfour();
    props.btnThreethirtyfour()
   }
   else if (optionthirtyfour==="b"){
    props.nextThree();
    props.statUpdateKthirtyfour();
    props.btnThreethirtyfour()
   }
   else if (optionthirtyfour==="c"){
    props.nextThree();
    props.statUpdateKthirtyfour();
    props.btnThreethirtyfour()
   }
   else if (optionthirtyfour==="d"){
    props.nextThree();
    props.statUpdateKthirtyfour();
    props.btnThreethirtyfour()
   }}
   else if (stat==="Answered"){
     if(optionthirtyfour==="a"){
    props.mfrSix();
    props.statUpdateNthirtyfour();
    props.btnThreethirtyfour()
   }
   else if (optionthirtyfour==="b"){
    props.mfrSix();
    props.statUpdateNthirtyfour();
    props.btnThreethirtyfour()
   }
   else if (optionthirtyfour==="c"){
    props.mfrSix();
    props.statUpdateNthirtyfour();
    props.btnThreethirtyfour()
   }
   else if (optionthirtyfour==="d"){
    props.mfrSix();
    props.statUpdateNthirtyfour();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirtyfour===""){
    props.nexttwo();
    props.statUpdatethirtyfour();
    props.btnOnethirtyfour()
  }
  
   else if (optionthirtyfour==="a"){
    props.nextTwo();
    props.statUpdateAthirtyfour();
    props.btnFourthirtyfour()
   }
   else if (optionthirtyfour==="b"){
     props.nextTwo();
     props.statUpdateAthirtyfour();
     props.btnFourthirtyfour()
    }
    else if (optionthirtyfour==="c"){
     props.nextTwo();
     props.statUpdateAthirtyfour();
     props.btnFourthirtyfour()
    }
    else if (optionthirtyfour==="d"){
     props.nextTwo();
     props.statUpdateAthirtyfour();
     props.btnFourthirtyfour()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirtyfour===""){
   props.nextThree();
   props.statUpdateKthirtyfour();
   props.btnOnethirtyfour()
  }
  else if (optionthirtyfour==="a"){
   props.nextFour();
   props.statUpdateAthirtyfour();
   props.btnFourthirtyfour()
  }
  else if (optionthirtyfour==="b"){
    props.nextFour();
    props.statUpdateAthirtyfour();
    props.btnFourthirtyfour()
   }
   else if (optionthirtyfour==="c"){
    props.nextFour();
    props.statUpdateAthirtyfour();
    props.btnFourthirtyfour()
   }
   else if (optionthirtyfour==="d"){
    props.nextFour();
    props.statUpdateAthirtyfour();
    props.btnFourthirtyfour()
   }}
   else if (stat==="Marked"){
     if(optionthirtyfour===""){
     props.nextThree();
     props.statUpdateKthirtyfour();
     props.btnTwothirtyfour()
    }
    else if (optionthirtyfour==="a"){
     props.mfrFive();
     props.statUpdateNthirtyfour();
     props.btnThreethirtyfour()
    }
    else if (optionthirtyfour==="b"){
     props.mfrFive();
     props.statUpdateNthirtyfour();
     props.btnThreethirtyfour()
    }
    else if ( optionthirtyfour==="c"){
     props.mfrFive();
     props.statUpdateNthirtyfour();
     props.btnThreethirtyfour()
    }
    else if ( optionthirtyfour==="d"){
     props.mfrFive();
     props.statUpdateNthirtyfour();
     props.btnThreethirtyfour()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirtyfour==="a"){
     props.mfrSeven();
     props.statUpdateAthirtyfour();
     props.btnFourthirtyfour()
    }
    else if (optionthirtyfour==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirtyfour();
      props.btnFourthirtyfour()
    }
    else if (optionthirtyfour==="c"){
      props.mfrSeven();
      props.statUpdateAthirtyfour();
      props.btnFourthirtyfour()
    }
    else if ( optionthirtyfour==="d"){
      props.mfrSeven();
      props.statUpdateAthirtyfour();
      props.btnFourthirtyfour()
    }}
    else if (stat==="Answered"){
      if(optionthirtyfour==="a"){
      props.nextThree();
      props.statUpdateKthirtyfour();
      props.btnFourthirtyfour()
    }
    else if (optionthirtyfour==="b"){
      props.nextThree();
      props.statUpdateKthirtyfour();
      props.btnFourthirtyfour()
    }
    else if (optionthirtyfour==="c"){
      props.nextThree();
      props.statUpdateKthirtyfour();
      props.btnFourthirtyfour()
    }
    else if (optionthirtyfour==="d"){
      props.nextThree();
      props.statUpdateKthirtyfour();
      props.btnFourthirtyfour()
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
     <p style={wStyle}>Test Name: <b>Mathematical Induction</b></p>
     <p style={wStyle1}>Name of the Candidate: <b>{props.name}</b></p>  
    <form>
    <p><i>Question No.35</i><br></br>   [1<sup>3</sup>/1]+[(1<sup>3</sup>+2<sup>3</sup>)/(1+3)]+[(1<sup>3</sup>+2<sup>3</sup>+3<sup>3</sup>)/(1+3+5)]+........n terms =      


</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirtyfour === 'a'}
          onClick={handleChange}
        /> [n(2n<sup>2</sup>+9n+13)/24]         
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirtyfour === 'b'}
          onClick={handleChange}
        /> [n(2n<sup>3</sup>+9n+13)/24]   
              
      
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirtyfour === 'c'}
          onClick={handleChange}
        /> [n(n<sup>2</sup>+9n+13)/24]              
        </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirtyfour === 'd'}
          onClick={handleChange}
        /> [n(n<sup>2</sup>+9n+13)/8]
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/MIthirtysix'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/MIthirtysix'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/MIthirtysix'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/MIthirtyfour'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><MItimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/MIconfirm'))}>Submit Test</button>
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
     statusthirtyfour:state.statusthirtyfour,
     optionthirtyfour:state.optionthirtyfour,
     BHealthanddiseaseThirtyseven:state.BHealthanddiseaseThirtyseven,
  BHealthanddiseaseThirtysevenA:state.BHealthanddiseaseThirtysevenA,
  BHealthanddiseaseThirtysevenB:state.BHealthanddiseaseThirtysevenB,
  BHealthanddiseaseThirtysevenC:state.BHealthanddiseaseThirtysevenC,
  BHealthanddiseaseThirtysevenD:state.BHealthanddiseaseThirtysevenD,
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
    optAthirtyfour:()=>dispatch(optAthirtyfour()),
    optBthirtyfour:()=>dispatch(optBthirtyfour()),
    optCthirtyfour:()=>dispatch(optCthirtyfour()),
    optDthirtyfour:()=>dispatch(optDthirtyfour()),
    statUpdatethirtyfour:()=>dispatch(statUpdatethirtyfour()),
    statUpdateAthirtyfour:()=>dispatch(statUpdateAthirtyfour()),
    statUpdateMthirtyfour:()=>dispatch(statUpdateMthirtyfour()),
    statUpdateNthirtyfour:()=>dispatch(statUpdateNthirtyfour()),
    statUpdateKthirtyfour:()=>dispatch(statUpdateKthirtyfour()),
    btnOnethirtyfour:()=>dispatch(btnOnethirtyfour()),
    btnTwothirtyfour:()=>dispatch(btnTwothirtyfour()),
    btnThreethirtyfour:()=>dispatch(btnThreethirtyfour()),
    btnFourthirtyfour:()=>dispatch(btnFourthirtyfour()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (MIthirtyfive)