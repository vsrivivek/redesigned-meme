import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirteen,optBthirteen,optCthirteen,optDthirteen,btnOnethirteen,btnTwothirteen,btnThreethirteen,btnFourthirteen,statUpdatethirteen,statUpdateAthirteen,statUpdateKthirteen,statUpdateMthirteen,statUpdateNthirteen,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Ftimer from './Ftimer'
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function Ffourteen(props) {
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
    var stat=props.statusthirteen;
    var opt=props.optionthirteen

  const [optionthirteen, setOptionthirteen] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirteen(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirteen==="a"){
   props.optAthirteen()
 }
 if(optionthirteen==="b"){
   props.optBthirteen()
 }
 if(optionthirteen==="c"){
   props.optCthirteen()
 }
 if(optionthirteen==="d"){
   props.optDthirteen()
 }
}

 useEffect(()=>{
  setOptionthirteen(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirteen===""){
  props.nextOne();
  props.statUpdatethirteen();
  props.btnOnethirteen()
  
 }
 
  else if (optionthirteen==="a"){
   props.nextTwo();
   props.statUpdateAthirteen();
   props.btnFourthirteen()
  
   
  }
  else if (optionthirteen==="b"){
    props.nextTwo();
    props.statUpdateAthirteen();
    props.btnFourthirteen()
   }
   else if (optionthirteen==="c"){
    props.nextTwo();
    props.statUpdateAthirteen();
    props.btnFourthirteen()
   }
   else if (optionthirteen==="d"){
    props.nextTwo();
    props.statUpdateAthirteen();
    props.btnFourthirteen()
   }}
   else if (stat==="Not Answered"){
     if(optionthirteen===""){
    props.nextThree();
    props.statUpdateKthirteen();
    props.btnOnethirteen()
    
   }
   
    else if (optionthirteen==="a"){
     props.nextFour();
     props.statUpdateAthirteen();
     props.btnFourthirteen()
     
    }
    else if (optionthirteen==="b"){
      props.nextFour();
      props.statUpdateAthirteen();
      props.btnFourthirteen()
      
     }
     else if (optionthirteen==="c"){
      props.nextFour();
      props.statUpdateAthirteen();
      props.btnFourthirteen()
      
     }
     else if ( optionthirteen==="d"){
      props.nextFour();
      props.statUpdateAthirteen();
      props.btnFourthirteen()
      
     }}
     else if (stat==="Marked"){
     if(optionthirteen===""){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnThreethirteen()
      
     }
          else if (optionthirteen==="a"){
      props.mfrFive();
      props.statUpdateNthirteen();
      props.btnThreethirteen()

     }
     else if (optionthirteen==="b"){
       props.mfrFive();
       props.statUpdateNthirteen();
       props.btnThreethirteen()

      }
      else if (optionthirteen==="c"){
       props.mfrFive();
       props.statUpdateNthirteen();
       props.btnThreethirteen()

      }
      else if (optionthirteen==="d"){
       props.mfrFive();
       props.statUpdateNthirteen();
       props.btnThreethirteen()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirteen==="a"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnThreethirteen()

      
     }
     else if (optionthirteen==="b"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnThreethirteen() 
     }
     else if (optionthirteen==="c"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnThreethirteen()
     }
     else if (optionthirteen==="d"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnThreethirteen()
     }}
     else if(stat==="Answered"){
     if (optionthirteen==="a"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()

      
     }
     else if (optionthirteen==="b"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()

      
     }
     else if ( optionthirteen==="c"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()
      
     }
     else if (optionthirteen==="d"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirteen===""){
  props.mfrOne();
  props.statUpdateMthirteen();
  props.btnTwothirteen()
 }
 
  else if (optionthirteen==="a"){
   props.mfrTwo();
   props.statUpdateNthirteen();
   props.btnThreethirteen()
  }
  else if (optionthirteen==="b"){
    props.mfrTwo();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
  

   }
   else if (optionthirteen==="c"){
    props.mfrTwo();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
  
   }
   else if (optionthirteen==="d"){
    props.mfrTwo();
    props.statUpdateNthirteen();
    props.btnThreethirteen()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirteen===""){
  props.mfrThree();
  props.statUpdateMthirteen();
  props.btnTwothirteen();
 }
 else if (optionthirteen==="a"){
  props.mfrFour();
  props.statUpdateNthirteen();
  props.btnThreethirteen()
 }
 else if (optionthirteen==="b"){
   props.mfrFour();
   props.statUpdateNthirteen();
   props.btnThreethirteen()
  }
  else if (optionthirteen==="c"){
   props.mfrFour();
   props.statUpdateNthirteen();
   props.btnThreethirteen()
  }
  else if (optionthirteen==="d"){
   props.mfrFour();
   props.statUpdateNthirteen();
  props.btnThreethirteen()
  }}
  else if (stat==="Marked"){
    if(optionthirteen===""){
    props.nextThree();
    props.statUpdateKthirteen();
    props.btnTwothirteen();
   }
   else if (optionthirteen==="a"){
    props.mfrFive();
    props.statUpdateNthirteen();
    props.btnThreethirteen()


   }
   else if (optionthirteen==="b"){
    props.mfrFive();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="c"){
    props.mfrFive();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="d"){
    props.mfrFive();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirteen==="a"){
    props.nextThree();
    props.statUpdateKthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="b"){
    props.nextThree();
    props.statUpdateKthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="c"){
    props.nextThree();
    props.statUpdateKthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="d"){
    props.nextThree();
    props.statUpdateKthirteen();
    props.btnThreethirteen()
   }}
   else if (stat==="Answered"){
     if(optionthirteen==="a"){
    props.mfrSix();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="b"){
    props.mfrSix();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="c"){
    props.mfrSix();
    props.statUpdateNthirteen();
    props.btnThreethirteen()
   }
   else if (optionthirteen==="d"){
    props.mfrSix();
    props.statUpdateNthirteen();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirteen===""){
    props.nexttwo();
    props.statUpdatethirteen();
    props.btnOnethirteen()
  }
  
   else if (optionthirteen==="a"){
    props.nextTwo();
    props.statUpdateAthirteen();
    props.btnFourthirteen()
   }
   else if (optionthirteen==="b"){
     props.nextTwo();
     props.statUpdateAthirteen();
     props.btnFourthirteen()
    }
    else if (optionthirteen==="c"){
     props.nextTwo();
     props.statUpdateAthirteen();
     props.btnFourthirteen()
    }
    else if (optionthirteen==="d"){
     props.nextTwo();
     props.statUpdateAthirteen();
     props.btnFourthirteen()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirteen===""){
   props.nextThree();
   props.statUpdateKthirteen();
   props.btnOnethirteen()
  }
  else if (optionthirteen==="a"){
   props.nextFour();
   props.statUpdateAthirteen();
   props.btnFourthirteen()
  }
  else if (optionthirteen==="b"){
    props.nextFour();
    props.statUpdateAthirteen();
    props.btnFourthirteen()
   }
   else if (optionthirteen==="c"){
    props.nextFour();
    props.statUpdateAthirteen();
    props.btnFourthirteen()
   }
   else if (optionthirteen==="d"){
    props.nextFour();
    props.statUpdateAthirteen();
    props.btnFourthirteen()
   }}
   else if (stat==="Marked"){
     if(optionthirteen===""){
     props.nextThree();
     props.statUpdateKthirteen();
     props.btnTwothirteen()
    }
    else if (optionthirteen==="a"){
     props.mfrFive();
     props.statUpdateNthirteen();
     props.btnThreethirteen()
    }
    else if (optionthirteen==="b"){
     props.mfrFive();
     props.statUpdateNthirteen();
     props.btnThreethirteen()
    }
    else if ( optionthirteen==="c"){
     props.mfrFive();
     props.statUpdateNthirteen();
     props.btnThreethirteen()
    }
    else if ( optionthirteen==="d"){
     props.mfrFive();
     props.statUpdateNthirteen();
     props.btnThreethirteen()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirteen==="a"){
     props.mfrSeven();
     props.statUpdateAthirteen();
     props.btnFourthirteen()
    }
    else if (optionthirteen==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirteen();
      props.btnFourthirteen()
    }
    else if (optionthirteen==="c"){
      props.mfrSeven();
      props.statUpdateAthirteen();
      props.btnFourthirteen()
    }
    else if ( optionthirteen==="d"){
      props.mfrSeven();
      props.statUpdateAthirteen();
      props.btnFourthirteen()
    }}
    else if (stat==="Answered"){
      if(optionthirteen==="a"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()
    }
    else if (optionthirteen==="b"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()
    }
    else if (optionthirteen==="c"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()
    }
    else if (optionthirteen==="d"){
      props.nextThree();
      props.statUpdateKthirteen();
      props.btnFourthirteen()
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
     <p style={wStyle1}>Name Of the Candidate: <b>{props.name}</b></p> 
    <form>
    <p><i>Question No.14</i><br></br> f{'\u2099'}(x)= (tan x/2)(1+secx)(1+sec2x)……….(1+sec{'\u207f'}x) then which of the following is not true


</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirteen === 'a'}
          onClick={handleChange}
        /> f{'\u2082'}({'\u03c0'}/6) = 1 
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirteen === 'b'}
          onClick={handleChange}
        /> f{'\u2083'}({'\u03c0'}/32) = 1
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirteen === 'c'}
          onClick={handleChange}
        /> f{'\u2084'}({'\u03c0'}/64) = 1 
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirteen === 'd'}
          onClick={handleChange}
        /> f{'\u2085'}({'\u03c0'}/128) = 0
      </div>       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/Ffifteen'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/Ffifteen'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/Ffifteen'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/Fthirteen'))}>Previous</button>
    
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
     statusthirteen:state.statusthirteen,
     optionthirteen:state.optionthirteen,
     BHealthanddiseaseFifteen:state.BHealthanddiseaseFifteen,
  BHealthanddiseaseFifteenA:state.BHealthanddiseaseFifteenA,
  BHealthanddiseaseFifteenB:state.BHealthanddiseaseFifteenB,
  BHealthanddiseaseFifteenC:state.BHealthanddiseaseFifteenC,
  BHealthanddiseaseFifteenD:state.BHealthanddiseaseFifteenD,
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
    optAthirteen:()=>dispatch(optAthirteen()),
    optBthirteen:()=>dispatch(optBthirteen()),
    optCthirteen:()=>dispatch(optCthirteen()),
    optDthirteen:()=>dispatch(optDthirteen()),
    statUpdatethirteen:()=>dispatch(statUpdatethirteen()),
    statUpdateAthirteen:()=>dispatch(statUpdateAthirteen()),
    statUpdateMthirteen:()=>dispatch(statUpdateMthirteen()),
    statUpdateNthirteen:()=>dispatch(statUpdateNthirteen()),
    statUpdateKthirteen:()=>dispatch(statUpdateKthirteen()),
    btnOnethirteen:()=>dispatch(btnOnethirteen()),
    btnTwothirteen:()=>dispatch(btnTwothirteen()),
    btnThreethirteen:()=>dispatch(btnThreethirteen()),
    btnFourthirteen:()=>dispatch(btnFourthirteen()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (Ffourteen)