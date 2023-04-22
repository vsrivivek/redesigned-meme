import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAnineteen,optBnineteen,optCnineteen,optDnineteen,btnOnenineteen,btnTwonineteen,btnThreenineteen,btnFournineteen,statUpdatenineteen,statUpdateAnineteen,statUpdateKnineteen,statUpdateMnineteen,statUpdateNnineteen,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import MItimer from './MItimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function MItwenty(props) {
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
    var stat=props.statusnineteen;
    var opt=props.optionnineteen

  const [optionnineteen, setOptionnineteen] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionnineteen(event.target.value);
    
  }
  
function optionChange(){
 if(optionnineteen==="a"){
   props.optAnineteen()
 }
 if(optionnineteen==="b"){
   props.optBnineteen()
 }
 if(optionnineteen==="c"){
   props.optCnineteen()
 }
 if(optionnineteen==="d"){
   props.optDnineteen()
 }
}

 useEffect(()=>{
  setOptionnineteen(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionnineteen===""){
  props.nextOne();
  props.statUpdatenineteen();
  props.btnOnenineteen()
  
 }
 
  else if (optionnineteen==="a"){
   props.nextTwo();
   props.statUpdateAnineteen();
   props.btnFournineteen()
  
   
  }
  else if (optionnineteen==="b"){
    props.nextTwo();
    props.statUpdateAnineteen();
    props.btnFournineteen()
   }
   else if (optionnineteen==="c"){
    props.nextTwo();
    props.statUpdateAnineteen();
    props.btnFournineteen()
   }
   else if (optionnineteen==="d"){
    props.nextTwo();
    props.statUpdateAnineteen();
    props.btnFournineteen()
   }}
   else if (stat==="Not Answered"){
     if(optionnineteen===""){
    props.nextThree();
    props.statUpdateKnineteen();
    props.btnOnenineteen()
    
   }
   
    else if (optionnineteen==="a"){
     props.nextFour();
     props.statUpdateAnineteen();
     props.btnFournineteen()
     
    }
    else if (optionnineteen==="b"){
      props.nextFour();
      props.statUpdateAnineteen();
      props.btnFournineteen()
      
     }
     else if (optionnineteen==="c"){
      props.nextFour();
      props.statUpdateAnineteen();
      props.btnFournineteen()
      
     }
     else if ( optionnineteen==="d"){
      props.nextFour();
      props.statUpdateAnineteen();
      props.btnFournineteen()
      
     }}
     else if (stat==="Marked"){
     if(optionnineteen===""){
      props.nextThree();
      props.statUpdateKnineteen();
      props.btnThreenineteen()
      
     }
          else if (optionnineteen==="a"){
      props.mfrFive();
      props.statUpdateNnineteen();
      props.btnThreenineteen()

     }
     else if (optionnineteen==="b"){
       props.mfrFive();
       props.statUpdateNnineteen();
       props.btnThreenineteen()

      }
      else if (optionnineteen==="c"){
       props.mfrFive();
       props.statUpdateNnineteen();
       props.btnThreenineteen()

      }
      else if (optionnineteen==="d"){
       props.mfrFive();
       props.statUpdateNnineteen();
       props.btnThreenineteen()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionnineteen==="a"){
      props.nextThree();
      props.statUpdateKnineteen();
      props.btnThreenineteen()

      
     }
     else if (optionnineteen==="b"){
      props.nextThree();
      props.statUpdateKnineteen();
      props.btnThreenineteen() 
     }
     else if (optionnineteen==="c"){
      props.nextThree();
      props.statUpdateKnineteen();
      props.btnThreenineteen()
     }
     else if (optionnineteen==="d"){
      props.nextThree();
      props.statUpdateKnineteen();
      props.btnThreenineteen()
     }}
     else if(stat==="Answered"){
     if (optionnineteen==="a"){
      props.nextThree();
      props.statUpdateKnineteen();
      props.btnFournineteen()

      
     }
     else if (optionnineteen==="b"){
      props.nextThree();
      props.statUpdateKnineteen();
      props.btnFournineteen()

      
     }
     else if ( optionnineteen==="c"){
      props.nextThree();
      props.statUpdateKnineteen();
      props.btnFournineteen()
      
     }
     else if (optionnineteen==="d"){
      props.nextThree();
      props.statUpdateKnineteen();
      props.btnFournineteen()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionnineteen===""){
  props.mfrOne();
  props.statUpdateMnineteen();
  props.btnTwonineteen()
 }
 
  else if (optionnineteen==="a"){
   props.mfrTwo();
   props.statUpdateNnineteen();
   props.btnThreenineteen()
  }
  else if (optionnineteen==="b"){
    props.mfrTwo();
    props.statUpdateNnineteen();
    props.btnThreenineteen()
  

   }
   else if (optionnineteen==="c"){
    props.mfrTwo();
    props.statUpdateNnineteen();
    props.btnThreenineteen()
  
   }
   else if (optionnineteen==="d"){
    props.mfrTwo();
    props.statUpdateNnineteen();
    props.btnThreenineteen()

   }}
  
 else if (stat==="Not Answered"){
   if(optionnineteen===""){
  props.mfrThree();
  props.statUpdateMnineteen();
  props.btnTwonineteen();
 }
 else if (optionnineteen==="a"){
  props.mfrFour();
  props.statUpdateNnineteen();
  props.btnThreenineteen()
 }
 else if (optionnineteen==="b"){
   props.mfrFour();
   props.statUpdateNnineteen();
   props.btnThreenineteen()
  }
  else if (optionnineteen==="c"){
   props.mfrFour();
   props.statUpdateNnineteen();
   props.btnThreenineteen()
  }
  else if (optionnineteen==="d"){
   props.mfrFour();
   props.statUpdateNnineteen();
  props.btnThreenineteen()
  }}
  else if (stat==="Marked"){
    if(optionnineteen===""){
    props.nextThree();
    props.statUpdateKnineteen();
    props.btnTwonineteen();
   }
   else if (optionnineteen==="a"){
    props.mfrFive();
    props.statUpdateNnineteen();
    props.btnThreenineteen()


   }
   else if (optionnineteen==="b"){
    props.mfrFive();
    props.statUpdateNnineteen();
    props.btnThreenineteen()
   }
   else if (optionnineteen==="c"){
    props.mfrFive();
    props.statUpdateNnineteen();
    props.btnThreenineteen()
   }
   else if (optionnineteen==="d"){
    props.mfrFive();
    props.statUpdateNnineteen();
    props.btnThreenineteen()
    }}
   else if (stat==="Marked For Review"){
     if(optionnineteen==="a"){
    props.nextThree();
    props.statUpdateKnineteen();
    props.btnThreenineteen()
   }
   else if (optionnineteen==="b"){
    props.nextThree();
    props.statUpdateKnineteen();
    props.btnThreenineteen()
   }
   else if (optionnineteen==="c"){
    props.nextThree();
    props.statUpdateKnineteen();
    props.btnThreenineteen()
   }
   else if (optionnineteen==="d"){
    props.nextThree();
    props.statUpdateKnineteen();
    props.btnThreenineteen()
   }}
   else if (stat==="Answered"){
     if(optionnineteen==="a"){
    props.mfrSix();
    props.statUpdateNnineteen();
    props.btnThreenineteen()
   }
   else if (optionnineteen==="b"){
    props.mfrSix();
    props.statUpdateNnineteen();
    props.btnThreenineteen()
   }
   else if (optionnineteen==="c"){
    props.mfrSix();
    props.statUpdateNnineteen();
    props.btnThreenineteen()
   }
   else if (optionnineteen==="d"){
    props.mfrSix();
    props.statUpdateNnineteen();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionnineteen===""){
    props.nexttwo();
    props.statUpdatenineteen();
    props.btnOnenineteen()
  }
  
   else if (optionnineteen==="a"){
    props.nextTwo();
    props.statUpdateAnineteen();
    props.btnFournineteen()
   }
   else if (optionnineteen==="b"){
     props.nextTwo();
     props.statUpdateAnineteen();
     props.btnFournineteen()
    }
    else if (optionnineteen==="c"){
     props.nextTwo();
     props.statUpdateAnineteen();
     props.btnFournineteen()
    }
    else if (optionnineteen==="d"){
     props.nextTwo();
     props.statUpdateAnineteen();
     props.btnFournineteen()
    }}
   
  else if (stat==="Not Answered"){
    if(optionnineteen===""){
   props.nextThree();
   props.statUpdateKnineteen();
   props.btnOnenineteen()
  }
  else if (optionnineteen==="a"){
   props.nextFour();
   props.statUpdateAnineteen();
   props.btnFournineteen()
  }
  else if (optionnineteen==="b"){
    props.nextFour();
    props.statUpdateAnineteen();
    props.btnFournineteen()
   }
   else if (optionnineteen==="c"){
    props.nextFour();
    props.statUpdateAnineteen();
    props.btnFournineteen()
   }
   else if (optionnineteen==="d"){
    props.nextFour();
    props.statUpdateAnineteen();
    props.btnFournineteen()
   }}
   else if (stat==="Marked"){
     if(optionnineteen===""){
     props.nextThree();
     props.statUpdateKnineteen();
     props.btnTwonineteen()
    }
    else if (optionnineteen==="a"){
     props.mfrFive();
     props.statUpdateNnineteen();
     props.btnThreenineteen()
    }
    else if (optionnineteen==="b"){
     props.mfrFive();
     props.statUpdateNnineteen();
     props.btnThreenineteen()
    }
    else if ( optionnineteen==="c"){
     props.mfrFive();
     props.statUpdateNnineteen();
     props.btnThreenineteen()
    }
    else if ( optionnineteen==="d"){
     props.mfrFive();
     props.statUpdateNnineteen();
     props.btnThreenineteen()
      }}
    else if (stat==="Marked For Review"){
      if(optionnineteen==="a"){
     props.mfrSeven();
     props.statUpdateAnineteen();
     props.btnFournineteen()
    }
    else if (optionnineteen==="b"){
      props.mfrSeventwo();
      props.statUpdateAnineteen();
      props.btnFournineteen()
    }
    else if (optionnineteen==="c"){
      props.mfrSeven();
      props.statUpdateAnineteen();
      props.btnFournineteen()
    }
    else if ( optionnineteen==="d"){
      props.mfrSeven();
      props.statUpdateAnineteen();
      props.btnFournineteen()
    }}
    else if (stat==="Answered"){
      if(optionnineteen==="a"){
      props.nextThree();
      props.statUpdateKnineteen();
      props.btnFournineteen()
    }
    else if (optionnineteen==="b"){
      props.nextThree();
      props.statUpdateKnineteen();
      props.btnFournineteen()
    }
    else if (optionnineteen==="c"){
      props.nextThree();
      props.statUpdateKnineteen();
      props.btnFournineteen()
    }
    else if (optionnineteen==="d"){
      props.nextThree();
      props.statUpdateKnineteen();
      props.btnFournineteen()
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
    <p><i>Question No.20</i><br></br> 1.2<sup>2</sup>+2.3<sup>2</sup>+3.4<sup>2</sup>+....+n(n+1)<sup>2</sup>=


</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionnineteen=== 'a'}
          onClick={handleChange}
        /> n(n+1)(n+2)(3n+5)/12                       
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionnineteen === 'b'}
          onClick={handleChange}
        /> n(n+1)(n+2)(n+3)/4
        
       
      
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionnineteen === 'c'}
          onClick={handleChange}
        /> 2n(n+1)(n+2)(n+3)			     
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionnineteen === 'd'}
          onClick={handleChange}
        /> n(n+1)(n+2)(3n+1)/12 
          
      </div>
       
    </form><br></br>
    <div className={props.buttons}>
         
         
        <button onClick={()=>(clickHanlderNext)(navigate('/MItwentyone'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/MItwentyone'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/MItwentyone'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/MInineteen'))}>Previous</button>
    
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
     statusnineteen:state.statusnineteen,
     optionnineteen:state.optionnineteen,
     BHealthanddiseaseTwentyone:state.BHealthanddiseaseTwentyone,
  BHealthanddiseaseTwentyoneA:state.BHealthanddiseaseTwentyoneA,
  BHealthanddiseaseTwentyoneB:state.BHealthanddiseaseTwentyoneB,
  BHealthanddiseaseTwentyoneC:state.BHealthanddiseaseTwentyoneC,
  BHealthanddiseaseTwentyoneD:state.BHealthanddiseaseTwentyoneD,
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
    optAnineteen:()=>dispatch(optAnineteen()),
    optBnineteen:()=>dispatch(optBnineteen()),
    optCnineteen:()=>dispatch(optCnineteen()),
    optDnineteen:()=>dispatch(optDnineteen()),
    statUpdatenineteen:()=>dispatch(statUpdatenineteen()),
    statUpdateAnineteen:()=>dispatch(statUpdateAnineteen()),
    statUpdateMnineteen:()=>dispatch(statUpdateMnineteen()),
    statUpdateNnineteen:()=>dispatch(statUpdateNnineteen()),
    statUpdateKnineteen:()=>dispatch(statUpdateKnineteen()),
    btnOnenineteen:()=>dispatch(btnOnenineteen()),
    btnTwonineteen:()=>dispatch(btnTwonineteen()),
    btnThreenineteen:()=>dispatch(btnThreenineteen()),
    btnFournineteen:()=>dispatch(btnFournineteen()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (MItwenty)