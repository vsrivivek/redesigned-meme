import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwentyone,optBtwentyone,optCtwentyone,optDtwentyone,btnOnetwentyone,btnTwotwentyone,btnThreetwentyone,btnFourtwentyone,statUpdatetwentyone,statUpdateAtwentyone,statUpdateKtwentyone,statUpdateMtwentyone,statUpdateNtwentyone,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import MItimer from './MItimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function MItwentytwo(props) {
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
    var stat=props.statustwentyone;
    var opt=props.optiontwentyone

  const [optiontwentyone, setOptiontwentyone] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptiontwentyone(event.target.value);
    
  }
  
function optionChange(){
 if(optiontwentyone==="a"){
   props.optAtwentyone()
 }
 if(optiontwentyone==="b"){
   props.optBtwentyone()
 }
 if(optiontwentyone==="c"){
   props.optCtwentyone()
 }
 if(optiontwentyone==="d"){
   props.optDtwentyone()
 }
}

 useEffect(()=>{
  setOptiontwentyone(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optiontwentyone===""){
  props.nextOne();
  props.statUpdatetwentyone();
  props.btnOnetwentyone()
  
 }
 
  else if (optiontwentyone==="a"){
   props.nextTwo();
   props.statUpdateAtwentyone();
   props.btnFourtwentyone()
  
   
  }
  else if (optiontwentyone==="b"){
    props.nextTwo();
    props.statUpdateAtwentyone();
    props.btnFourtwentyone()
   }
   else if (optiontwentyone==="c"){
    props.nextTwo();
    props.statUpdateAtwentyone();
    props.btnFourtwentyone()
   }
   else if (optiontwentyone==="d"){
    props.nextTwo();
    props.statUpdateAtwentyone();
    props.btnFourtwentyone()
   }}
   else if (stat==="Not Answered"){
     if(optiontwentyone===""){
    props.nextThree();
    props.statUpdateKtwentyone();
    props.btnOnetwentyone()
    
   }
   
    else if (optiontwentyone==="a"){
     props.nextFour();
     props.statUpdateAtwentyone();
     props.btnFourtwentyone()
     
    }
    else if (optiontwentyone==="b"){
      props.nextFour();
      props.statUpdateAtwentyone();
      props.btnFourtwentyone()
      
     }
     else if (optiontwentyone==="c"){
      props.nextFour();
      props.statUpdateAtwentyone();
      props.btnFourtwentyone()
      
     }
     else if ( optiontwentyone==="d"){
      props.nextFour();
      props.statUpdateAtwentyone();
      props.btnFourtwentyone()
      
     }}
     else if (stat==="Marked"){
     if(optiontwentyone===""){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnThreetwentyone()
      
     }
          else if (optiontwentyone==="a"){
      props.mfrFive();
      props.statUpdateNtwentyone();
      props.btnThreetwentyone()

     }
     else if (optiontwentyone==="b"){
       props.mfrFive();
       props.statUpdateNtwentyone();
       props.btnThreetwentyone()

      }
      else if (optiontwentyone==="c"){
       props.mfrFive();
       props.statUpdateNtwentyone();
       props.btnThreetwentyone()

      }
      else if (optiontwentyone==="d"){
       props.mfrFive();
       props.statUpdateNtwentyone();
       props.btnThreetwentyone()

        }}
     
     else if (stat==="Marked For Review"){
     if(optiontwentyone==="a"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnThreetwentyone()

      
     }
     else if (optiontwentyone==="b"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnThreetwentyone() 
     }
     else if (optiontwentyone==="c"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnThreetwentyone()
     }
     else if (optiontwentyone==="d"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnThreetwentyone()
     }}
     else if(stat==="Answered"){
     if (optiontwentyone==="a"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()

      
     }
     else if (optiontwentyone==="b"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()

      
     }
     else if ( optiontwentyone==="c"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()
      
     }
     else if (optiontwentyone==="d"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optiontwentyone===""){
  props.mfrOne();
  props.statUpdateMtwentyone();
  props.btnTwotwentyone()
 }
 
  else if (optiontwentyone==="a"){
   props.mfrTwo();
   props.statUpdateNtwentyone();
   props.btnThreetwentyone()
  }
  else if (optiontwentyone==="b"){
    props.mfrTwo();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
  

   }
   else if (optiontwentyone==="c"){
    props.mfrTwo();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
  
   }
   else if (optiontwentyone==="d"){
    props.mfrTwo();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()

   }}
  
 else if (stat==="Not Answered"){
   if(optiontwentyone===""){
  props.mfrThree();
  props.statUpdateMtwentyone();
  props.btnTwotwentyone();
 }
 else if (optiontwentyone==="a"){
  props.mfrFour();
  props.statUpdateNtwentyone();
  props.btnThreetwentyone()
 }
 else if (optiontwentyone==="b"){
   props.mfrFour();
   props.statUpdateNtwentyone();
   props.btnThreetwentyone()
  }
  else if (optiontwentyone==="c"){
   props.mfrFour();
   props.statUpdateNtwentyone();
   props.btnThreetwentyone()
  }
  else if (optiontwentyone==="d"){
   props.mfrFour();
   props.statUpdateNtwentyone();
  props.btnThreetwentyone()
  }}
  else if (stat==="Marked"){
    if(optiontwentyone===""){
    props.nextThree();
    props.statUpdateKtwentyone();
    props.btnTwotwentyone();
   }
   else if (optiontwentyone==="a"){
    props.mfrFive();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()


   }
   else if (optiontwentyone==="b"){
    props.mfrFive();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="c"){
    props.mfrFive();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="d"){
    props.mfrFive();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
    }}
   else if (stat==="Marked For Review"){
     if(optiontwentyone==="a"){
    props.nextThree();
    props.statUpdateKtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="b"){
    props.nextThree();
    props.statUpdateKtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="c"){
    props.nextThree();
    props.statUpdateKtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="d"){
    props.nextThree();
    props.statUpdateKtwentyone();
    props.btnThreetwentyone()
   }}
   else if (stat==="Answered"){
     if(optiontwentyone==="a"){
    props.mfrSix();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="b"){
    props.mfrSix();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="c"){
    props.mfrSix();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="d"){
    props.mfrSix();
    props.statUpdateNtwentyone();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optiontwentyone===""){
    props.nexttwo();
    props.statUpdatetwentyone();
    props.btnOnetwentyone()
  }
  
   else if (optiontwentyone==="a"){
    props.nextTwo();
    props.statUpdateAtwentyone();
    props.btnFourtwentyone()
   }
   else if (optiontwentyone==="b"){
     props.nextTwo();
     props.statUpdateAtwentyone();
     props.btnFourtwentyone()
    }
    else if (optiontwentyone==="c"){
     props.nextTwo();
     props.statUpdateAtwentyone();
     props.btnFourtwentyone()
    }
    else if (optiontwentyone==="d"){
     props.nextTwo();
     props.statUpdateAtwentyone();
     props.btnFourtwentyone()
    }}
   
  else if (stat==="Not Answered"){
    if(optiontwentyone===""){
   props.nextThree();
   props.statUpdateKtwentyone();
   props.btnOnetwentyone()
  }
  else if (optiontwentyone==="a"){
   props.nextFour();
   props.statUpdateAtwentyone();
   props.btnFourtwentyone()
  }
  else if (optiontwentyone==="b"){
    props.nextFour();
    props.statUpdateAtwentyone();
    props.btnFourtwentyone()
   }
   else if (optiontwentyone==="c"){
    props.nextFour();
    props.statUpdateAtwentyone();
    props.btnFourtwentyone()
   }
   else if (optiontwentyone==="d"){
    props.nextFour();
    props.statUpdateAtwentyone();
    props.btnFourtwentyone()
   }}
   else if (stat==="Marked"){
     if(optiontwentyone===""){
     props.nextThree();
     props.statUpdateKtwentyone();
     props.btnTwotwentyone()
    }
    else if (optiontwentyone==="a"){
     props.mfrFive();
     props.statUpdateNtwentyone();
     props.btnThreetwentyone()
    }
    else if (optiontwentyone==="b"){
     props.mfrFive();
     props.statUpdateNtwentyone();
     props.btnThreetwentyone()
    }
    else if ( optiontwentyone==="c"){
     props.mfrFive();
     props.statUpdateNtwentyone();
     props.btnThreetwentyone()
    }
    else if ( optiontwentyone==="d"){
     props.mfrFive();
     props.statUpdateNtwentyone();
     props.btnThreetwentyone()
      }}
    else if (stat==="Marked For Review"){
      if(optiontwentyone==="a"){
     props.mfrSeven();
     props.statUpdateAtwentyone();
     props.btnFourtwentyone()
    }
    else if (optiontwentyone==="b"){
      props.mfrSeventwo();
      props.statUpdateAtwentyone();
      props.btnFourtwentyone()
    }
    else if (optiontwentyone==="c"){
      props.mfrSeven();
      props.statUpdateAtwentyone();
      props.btnFourtwentyone()
    }
    else if ( optiontwentyone==="d"){
      props.mfrSeven();
      props.statUpdateAtwentyone();
      props.btnFourtwentyone()
    }}
    else if (stat==="Answered"){
      if(optiontwentyone==="a"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()
    }
    else if (optiontwentyone==="b"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()
    }
    else if (optiontwentyone==="c"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()
    }
    else if (optiontwentyone==="d"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()
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
    <p><i>Question No.22</i><br></br>  1.2.3+2.3.4+3.4.5+.......n terms=



</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwentyone=== 'a'}
          onClick={handleChange}
        />[n(n+1)(n+2)(3n+5)]/12                       
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwentyone === 'b'}
          onClick={handleChange}
        />[n(n+1)(n+2)(n+3)]/4
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwentyone === 'c'}
          onClick={handleChange}
        /> 2n(n+1)(n+2)(n+3)			    
       
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwentyone === 'd'}
          onClick={handleChange}
        /> [n(n+1)(n+2)(3n+1)]/12 
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/MItwentythree'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/MItwentythree'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/MItwentythree'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/MItwentyone'))}>Previous</button>
    
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
     statustwentyone:state.statustwentyone,
     optiontwentyone:state.optiontwentyone,
     BHealthanddiseaseTwentythree:state.BHealthanddiseaseTwentythree,
  BHealthanddiseaseTwentythreeA:state.BHealthanddiseaseTwentythreeA,
  BHealthanddiseaseTwentythreeB:state.BHealthanddiseaseTwentythreeB,
  BHealthanddiseaseTwentythreeC:state.BHealthanddiseaseTwentythreeC,
  BHealthanddiseaseTwentythreeD:state.BHealthanddiseaseTwentythreeD,
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
    optAtwentyone:()=>dispatch(optAtwentyone()),
    optBtwentyone:()=>dispatch(optBtwentyone()),
    optCtwentyone:()=>dispatch(optCtwentyone()),
    optDtwentyone:()=>dispatch(optDtwentyone()),
    statUpdatetwentyone:()=>dispatch(statUpdatetwentyone()),
    statUpdateAtwentyone:()=>dispatch(statUpdateAtwentyone()),
    statUpdateMtwentyone:()=>dispatch(statUpdateMtwentyone()),
    statUpdateNtwentyone:()=>dispatch(statUpdateNtwentyone()),
    statUpdateKtwentyone:()=>dispatch(statUpdateKtwentyone()),
    btnOnetwentyone:()=>dispatch(btnOnetwentyone()),
    btnTwotwentyone:()=>dispatch(btnTwotwentyone()),
    btnThreetwentyone:()=>dispatch(btnThreetwentyone()),
    btnFourtwentyone:()=>dispatch(btnFourtwentyone()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (MItwentytwo)