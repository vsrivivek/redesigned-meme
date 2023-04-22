import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwentyseven,optBtwentyseven,optCtwentyseven,optDtwentyseven,btnOnetwentyseven,btnTwotwentyseven,btnThreetwentyseven,btnFourtwentyseven,statUpdatetwentyseven,statUpdateAtwentyseven,statUpdateKtwentyseven,statUpdateMtwentyseven,statUpdateNtwentyseven,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import PVtimer from './PVtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function PVtwentyteight(props) {
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
    var stat=props.statustwentyseven;
    var opt=props.optiontwentyseven

  const [optiontwentyseven, setOptiontwentyseven] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptiontwentyseven(event.target.value);
    
  }
  
function optionChange(){
 if(optiontwentyseven==="a"){
   props.optAtwentyseven()
 }
 if(optiontwentyseven==="b"){
   props.optBtwentyseven()
 }
 if(optiontwentyseven==="c"){
   props.optCtwentyseven()
 }
 if(optiontwentyseven==="d"){
   props.optDtwentyseven()
 }
}

 useEffect(()=>{
  setOptiontwentyseven(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optiontwentyseven===""){
  props.nextOne();
  props.statUpdatetwentyseven();
  props.btnOnetwentyseven()
  
 }
 
  else if (optiontwentyseven==="a"){
   props.nextTwo();
   props.statUpdateAtwentyseven();
   props.btnFourtwentyseven()
  
   
  }
  else if (optiontwentyseven==="b"){
    props.nextTwo();
    props.statUpdateAtwentyseven();
    props.btnFourtwentyseven()
   }
   else if (optiontwentyseven==="c"){
    props.nextTwo();
    props.statUpdateAtwentyseven();
    props.btnFourtwentyseven()
   }
   else if (optiontwentyseven==="d"){
    props.nextTwo();
    props.statUpdateAtwentyseven();
    props.btnFourtwentyseven()
   }}
   else if (stat==="Not Answered"){
     if(optiontwentyseven===""){
    props.nextThree();
    props.statUpdateKtwentyseven();
    props.btnOnetwentyseven()
    
   }
   
    else if (optiontwentyseven==="a"){
     props.nextFour();
     props.statUpdateAtwentyseven();
     props.btnFourtwentyseven()
     
    }
    else if (optiontwentyseven==="b"){
      props.nextFour();
      props.statUpdateAtwentyseven();
      props.btnFourtwentyseven()
      
     }
     else if (optiontwentyseven==="c"){
      props.nextFour();
      props.statUpdateAtwentyseven();
      props.btnFourtwentyseven()
      
     }
     else if ( optiontwentyseven==="d"){
      props.nextFour();
      props.statUpdateAtwentyseven();
      props.btnFourtwentyseven()
      
     }}
     else if (stat==="Marked"){
     if(optiontwentyseven===""){
      props.nextThree();
      props.statUpdateKtwentyseven();
      props.btnThreetwentyseven()
      
     }
          else if (optiontwentyseven==="a"){
      props.mfrFive();
      props.statUpdateNtwentyseven();
      props.btnThreetwentyseven()

     }
     else if (optiontwentyseven==="b"){
       props.mfrFive();
       props.statUpdateNtwentyseven();
       props.btnThreetwentyseven()

      }
      else if (optiontwentyseven==="c"){
       props.mfrFive();
       props.statUpdateNtwentyseven();
       props.btnThreetwentyseven()

      }
      else if (optiontwentyseven==="d"){
       props.mfrFive();
       props.statUpdateNtwentyseven();
       props.btnThreetwentyseven()

        }}
     
     else if (stat==="Marked For Review"){
     if(optiontwentyseven==="a"){
      props.nextThree();
      props.statUpdateKtwentyseven();
      props.btnThreetwentyseven()

      
     }
     else if (optiontwentyseven==="b"){
      props.nextThree();
      props.statUpdateKtwentyseven();
      props.btnThreetwentyseven() 
     }
     else if (optiontwentyseven==="c"){
      props.nextThree();
      props.statUpdateKtwentyseven();
      props.btnThreetwentyseven()
     }
     else if (optiontwentyseven==="d"){
      props.nextThree();
      props.statUpdateKtwentyseven();
      props.btnThreetwentyseven()
     }}
     else if(stat==="Answered"){
     if (optiontwentyseven==="a"){
      props.nextThree();
      props.statUpdateKtwentyseven();
      props.btnFourtwentyseven()

      
     }
     else if (optiontwentyseven==="b"){
      props.nextThree();
      props.statUpdateKtwentyseven();
      props.btnFourtwentyseven()

      
     }
     else if ( optiontwentyseven==="c"){
      props.nextThree();
      props.statUpdateKtwentyseven();
      props.btnFourtwentyseven()
      
     }
     else if (optiontwentyseven==="d"){
      props.nextThree();
      props.statUpdateKtwentyseven();
      props.btnFourtwentyseven()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optiontwentyseven===""){
  props.mfrOne();
  props.statUpdateMtwentyseven();
  props.btnTwotwentyseven()
 }
 
  else if (optiontwentyseven==="a"){
   props.mfrTwo();
   props.statUpdateNtwentyseven();
   props.btnThreetwentyseven()
  }
  else if (optiontwentyseven==="b"){
    props.mfrTwo();
    props.statUpdateNtwentyseven();
    props.btnThreetwentyseven()
  

   }
   else if (optiontwentyseven==="c"){
    props.mfrTwo();
    props.statUpdateNtwentyseven();
    props.btnThreetwentyseven()
  
   }
   else if (optiontwentyseven==="d"){
    props.mfrTwo();
    props.statUpdateNtwentyseven();
    props.btnThreetwentyseven()

   }}
  
 else if (stat==="Not Answered"){
   if(optiontwentyseven===""){
  props.mfrThree();
  props.statUpdateMtwentyseven();
  props.btnTwotwentyseven();
 }
 else if (optiontwentyseven==="a"){
  props.mfrFour();
  props.statUpdateNtwentyseven();
  props.btnThreetwentyseven()
 }
 else if (optiontwentyseven==="b"){
   props.mfrFour();
   props.statUpdateNtwentyseven();
   props.btnThreetwentyseven()
  }
  else if (optiontwentyseven==="c"){
   props.mfrFour();
   props.statUpdateNtwentyseven();
   props.btnThreetwentyseven()
  }
  else if (optiontwentyseven==="d"){
   props.mfrFour();
   props.statUpdateNtwentyseven();
  props.btnThreetwentyseven()
  }}
  else if (stat==="Marked"){
    if(optiontwentyseven===""){
    props.nextThree();
    props.statUpdateKtwentyseven();
    props.btnTwotwentyseven();
   }
   else if (optiontwentyseven==="a"){
    props.mfrFive();
    props.statUpdateNtwentyseven();
    props.btnThreetwentyseven()


   }
   else if (optiontwentyseven==="b"){
    props.mfrFive();
    props.statUpdateNtwentyseven();
    props.btnThreetwentyseven()
   }
   else if (optiontwentyseven==="c"){
    props.mfrFive();
    props.statUpdateNtwentyseven();
    props.btnThreetwentyseven()
   }
   else if (optiontwentyseven==="d"){
    props.mfrFive();
    props.statUpdateNtwentyseven();
    props.btnThreetwentyseven()
    }}
   else if (stat==="Marked For Review"){
     if(optiontwentyseven==="a"){
    props.nextThree();
    props.statUpdateKtwentyseven();
    props.btnThreetwentyseven()
   }
   else if (optiontwentyseven==="b"){
    props.nextThree();
    props.statUpdateKtwentyseven();
    props.btnThreetwentyseven()
   }
   else if (optiontwentyseven==="c"){
    props.nextThree();
    props.statUpdateKtwentyseven();
    props.btnThreetwentyseven()
   }
   else if (optiontwentyseven==="d"){
    props.nextThree();
    props.statUpdateKtwentyseven();
    props.btnThreetwentyseven()
   }}
   else if (stat==="Answered"){
     if(optiontwentyseven==="a"){
    props.mfrSix();
    props.statUpdateNtwentyseven();
    props.btnThreetwentyseven()
   }
   else if (optiontwentyseven==="b"){
    props.mfrSix();
    props.statUpdateNtwentyseven();
    props.btnThreetwentyseven()
   }
   else if (optiontwentyseven==="c"){
    props.mfrSix();
    props.statUpdateNtwentyseven();
    props.btnThreetwentyseven()
   }
   else if (optiontwentyseven==="d"){
    props.mfrSix();
    props.statUpdateNtwentyseven();
    props.btnThreeseven()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optiontwentyseven===""){
    props.nexttwo();
    props.statUpdatetwentyseven();
    props.btnOnetwentyseven()
  }
  
   else if (optiontwentyseven==="a"){
    props.nextTwo();
    props.statUpdateAtwentyseven();
    props.btnFourtwentyseven()
   }
   else if (optiontwentyseven==="b"){
     props.nextTwo();
     props.statUpdateAtwentyseven();
     props.btnFourtwentyseven()
    }
    else if (optiontwentyseven==="c"){
     props.nextTwo();
     props.statUpdateAtwentyseven();
     props.btnFourtwentyseven()
    }
    else if (optiontwentyseven==="d"){
     props.nextTwo();
     props.statUpdateAtwentyseven();
     props.btnFourtwentyseven()
    }}
   
  else if (stat==="Not Answered"){
    if(optiontwentyseven===""){
   props.nextThree();
   props.statUpdateKtwentyseven();
   props.btnOnetwentyseven()
  }
  else if (optiontwentyseven==="a"){
   props.nextFour();
   props.statUpdateAtwentyseven();
   props.btnFourtwentyseven()
  }
  else if (optiontwentyseven==="b"){
    props.nextFour();
    props.statUpdateAtwentyseven();
    props.btnFourtwentyseven()
   }
   else if (optiontwentyseven==="c"){
    props.nextFour();
    props.statUpdateAtwentyseven();
    props.btnFourtwentyseven()
   }
   else if (optiontwentyseven==="d"){
    props.nextFour();
    props.statUpdateAtwentyseven();
    props.btnFourtwentyseven()
   }}
   else if (stat==="Marked"){
     if(optiontwentyseven===""){
     props.nextThree();
     props.statUpdateKtwentyseven();
     props.btnTwotwentyseven()
    }
    else if (optiontwentyseven==="a"){
     props.mfrFive();
     props.statUpdateNtwentyseven();
     props.btnThreetwentyseven()
    }
    else if (optiontwentyseven==="b"){
     props.mfrFive();
     props.statUpdateNtwentyseven();
     props.btnThreetwentyseven()
    }
    else if ( optiontwentyseven==="c"){
     props.mfrFive();
     props.statUpdateNtwentyseven();
     props.btnThreetwentyseven()
    }
    else if ( optiontwentyseven==="d"){
     props.mfrFive();
     props.statUpdateNtwentyseven();
     props.btnThreetwentyseven()
      }}
    else if (stat==="Marked For Review"){
      if(optiontwentyseven==="a"){
     props.mfrSeven();
     props.statUpdateAtwentyseven();
     props.btnFourtwentyseven()
    }
    else if (optiontwentyseven==="b"){
      props.mfrSeventwo();
      props.statUpdateAtwentyseven();
      props.btnFourtwentyseven()
    }
    else if (optiontwentyseven==="c"){
      props.mfrSeven();
      props.statUpdateAtwentyseven();
      props.btnFourtwentyseven()
    }
    else if ( optiontwentyseven==="d"){
      props.mfrSeven();
      props.statUpdateAtwentyseven();
      props.btnFourtwentyseven()
    }}
    else if (stat==="Answered"){
      if(optiontwentyseven==="a"){
      props.nextThree();
      props.statUpdateKtwentyseven();
      props.btnFourtwentyseven()
    }
    else if (optiontwentyseven==="b"){
      props.nextThree();
      props.statUpdateKtwentyseven();
      props.btnFourtwentyseven()
    }
    else if (optiontwentyseven==="c"){
      props.nextThree();
      props.statUpdateKtwentyseven();
      props.btnFourtwentyseven()
    }
    else if (optiontwentyseven==="d"){
      props.nextThree();
      props.statUpdateKtwentyseven();
      props.btnFourtwentyseven()
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
     <p style={wStyle}>Test Name: <b>Product of Vectors</b></p>
     <p style={wStyle1}>Name of the Candidate: <b>{props.name}</b></p>  
    <form>
    <p><i>Question No.28</i><br></br> If <b>a</b> is perpendicular to <b>b</b> and <b>c</b>,|<b>a</b>|=2, |<b>b</b>|=3, |<b>c</b>|=4 and the angle between <b>b</b> and <b>c</b> is 2π/3, then |[<b>a</b> <b>b</b> <b>c</b>]|
</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwentyseven=== 'a'}
          onClick={handleChange}
        /> 24
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwentyseven === 'b'}
          onClick={handleChange}
        /> 12
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwentyseven === 'c'}
          onClick={handleChange}
        /> 12√3 
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwentyseven=== 'd'}
          onClick={handleChange}
        /> 24√3 
        
      </div>
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/PVtwentynine'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/PVtwentynine'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/PVtwentynine'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/PVtwentyseven'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><PVtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/PVconfirm'))}>Submit Test</button>
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
     statustwentyseven:state.statustwentyseven,
     optiontwentyseven:state.optiontwentyseven,
     BHealthanddiseaseThirty:state.BHealthanddiseaseThirty,
  BHealthanddiseaseThirtyA:state.BHealthanddiseaseThirtyA,
  BHealthanddiseaseThirtyB:state.BHealthanddiseaseThirtyB,
  BHealthanddiseaseThirtyC:state.BHealthanddiseaseThirtyC,
  BHealthanddiseaseThirtyD:state.BHealthanddiseaseThirtyD,
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
    optAtwentyseven:()=>dispatch(optAtwentyseven()),
    optBtwentyseven:()=>dispatch(optBtwentyseven()),
    optCtwentyseven:()=>dispatch(optCtwentyseven()),
    optDtwentyseven:()=>dispatch(optDtwentyseven()),
    statUpdatetwentyseven:()=>dispatch(statUpdatetwentyseven()),
    statUpdateAtwentyseven:()=>dispatch(statUpdateAtwentyseven()),
    statUpdateMtwentyseven:()=>dispatch(statUpdateMtwentyseven()),
    statUpdateNtwentyseven:()=>dispatch(statUpdateNtwentyseven()),
    statUpdateKtwentyseven:()=>dispatch(statUpdateKtwentyseven()),
    btnOnetwentyseven:()=>dispatch(btnOnetwentyseven()),
    btnTwotwentyseven:()=>dispatch(btnTwotwentyseven()),
    btnThreetwentyseven:()=>dispatch(btnThreetwentyseven()),
    btnFourtwentyseven:()=>dispatch(btnFourtwentyseven()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (PVtwentyteight)