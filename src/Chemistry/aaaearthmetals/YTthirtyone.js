import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirty,optBthirty,optCthirty,optDthirty,btnOnethirty,btnTwothirty,btnThreethirty,btnFourthirty,statUpdatethirty,statUpdateAthirty,statUpdateKthirty,statUpdateMthirty,statUpdateNthirty,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
// import YTtimer from '../../components/YTtimer ';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import YTtimer from './YTtimer';
import Logo from '../../redux/Images/Logo.jpg'



function YTthirtyone(props) {
  const logoStyle = {
    "margin-left":"100px",
    "border-radius":"25%",
    border:"1px solid purple",
    "align":"center",
  };
  const hStyle = {
    "height":"109px",
    "text-align":"center"
  };
  const tStyle = {
    width:"1400px",
    "height":"109px",
  };
  const bStyle = {
    "margin-top":"15px",
    width:"1520px",
    "background-color":"purple",
    "height":"114px",
  };
  const wStyle = {
    "width": "395px",
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
    <table style={tStyle}>
 <tbody  style={hStyle}>
   <tr >  
     <td  ><img  style={logoStyle} src={Logo} alt="Logo" /></td> 
   </tr>
 </tbody>
</table>
    </div>
        <br></br>
    <div className= {props.total}>
     <div className={props.left}>
     <p style={wStyle}>Test Name: <b>Alkali & Alkaline Earth Metals</b></p>
     <p style={wStyle1}>Name Of the Candidate: <b>{props.name}</b></p> 
    <form>
    <p><i>Question No.31</i><br></br>Aqueous sodium hydroxide reacts with white phosporous to form phosphine and</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirty=== 'a'}
          onClick={handleChange}
        /> NaH<sub>2</sub>PO<sub>2</sub>
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirty === 'b'}
          onClick={handleChange}
        /> P<sub>2</sub>O<sub>5</sub>
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirty === 'c'}
          onClick={handleChange}
        /> Na<sub>3</sub>PO<sub>3</sub>
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirty === 'd'}
          onClick={handleChange}
        /> P<sub>2</sub>O<sub>3</sub>
        
      </div>
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/YTthirtytwo'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/YTthirtytwo'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/YTthirtytwo'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/YTthirty'))}>Previous</button>
        
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><YTtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/YTconfirm'))}>Submit Test</button>
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
export default connect(mapStateToProps,mapDispatchToProps) (YTthirtyone)