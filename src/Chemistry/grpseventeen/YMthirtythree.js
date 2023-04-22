import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirtytwo,optBthirtytwo,optCthirtytwo,optDthirtytwo,btnOnethirtytwo,btnTwothirtytwo,btnThreethirtytwo,btnFourthirtytwo,statUpdatethirtytwo,statUpdateAthirtytwo,statUpdateKthirtytwo,statUpdateMthirtytwo,statUpdateNthirtytwo,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
// import Timer from '../../components/Timer ';
import YMtimer from './YMtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function YMthirtythree(props) {
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
    "width": "275px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const navigate = useNavigate()  
    var stat=props.statusthirtytwo;
    var opt=props.optionthirtytwo

  const [optionthirtytwo, setOptionthirtytwo] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirtytwo(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirtytwo==="a"){
   props.optAthirtytwo()
 }
 if(optionthirtytwo==="b"){
   props.optBthirtytwo()
 }
 if(optionthirtytwo==="c"){
   props.optCthirtytwo()
 }
 if(optionthirtytwo==="d"){
   props.optDthirtytwo()
 }
}

 useEffect(()=>{
  setOptionthirtytwo(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirtytwo===""){
  props.nextOne();
  props.statUpdatethirtytwo();
  props.btnOnethirtytwo()
  
 }
 
  else if (optionthirtytwo==="a"){
   props.nextTwo();
   props.statUpdateAthirtytwo();
   props.btnFourthirtytwo()
  
   
  }
  else if (optionthirtytwo==="b"){
    props.nextTwo();
    props.statUpdateAthirtytwo();
    props.btnFourthirtytwo()
   }
   else if (optionthirtytwo==="c"){
    props.nextTwo();
    props.statUpdateAthirtytwo();
    props.btnFourthirtytwo()
   }
   else if (optionthirtytwo==="d"){
    props.nextTwo();
    props.statUpdateAthirtytwo();
    props.btnFourthirtytwo()
   }}
   else if (stat==="Not Answered"){
     if(optionthirtytwo===""){
    props.nextThree();
    props.statUpdateKthirtytwo();
    props.btnOnethirtytwo()
    
   }
   
    else if (optionthirtytwo==="a"){
     props.nextFour();
     props.statUpdateAthirtytwo();
     props.btnFourthirtytwo()
     
    }
    else if (optionthirtytwo==="b"){
      props.nextFour();
      props.statUpdateAthirtytwo();
      props.btnFourthirtytwo()
      
     }
     else if (optionthirtytwo==="c"){
      props.nextFour();
      props.statUpdateAthirtytwo();
      props.btnFourthirtytwo()
      
     }
     else if ( optionthirtytwo==="d"){
      props.nextFour();
      props.statUpdateAthirtytwo();
      props.btnFourthirtytwo()
      
     }}
     else if (stat==="Marked"){
     if(optionthirtytwo===""){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnThreethirtytwo()
      
     }
          else if (optionthirtytwo==="a"){
      props.mfrFive();
      props.statUpdateNthirtytwo();
      props.btnThreethirtytwo()

     }
     else if (optionthirtytwo==="b"){
       props.mfrFive();
       props.statUpdateNthirtytwo();
       props.btnThreethirtytwo()

      }
      else if (optionthirtytwo==="c"){
       props.mfrFive();
       props.statUpdateNthirtytwo();
       props.btnThreethirtytwo()

      }
      else if (optionthirtytwo==="d"){
       props.mfrFive();
       props.statUpdateNthirtytwo();
       props.btnThreethirtytwo()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirtytwo==="a"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnThreethirtytwo()

      
     }
     else if (optionthirtytwo==="b"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnThreethirtytwo() 
     }
     else if (optionthirtytwo==="c"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnThreethirtytwo()
     }
     else if (optionthirtytwo==="d"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnThreethirtytwo()
     }}
     else if(stat==="Answered"){
     if (optionthirtytwo==="a"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()

      
     }
     else if (optionthirtytwo==="b"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()

      
     }
     else if ( optionthirtytwo==="c"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()
      
     }
     else if (optionthirtytwo==="d"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirtytwo===""){
  props.mfrOne();
  props.statUpdateMthirtytwo();
  props.btnTwothirtytwo()
 }
 
  else if (optionthirtytwo==="a"){
   props.mfrTwo();
   props.statUpdateNthirtytwo();
   props.btnThreethirtytwo()
  }
  else if (optionthirtytwo==="b"){
    props.mfrTwo();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
  

   }
   else if (optionthirtytwo==="c"){
    props.mfrTwo();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
  
   }
   else if (optionthirtytwo==="d"){
    props.mfrTwo();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirtytwo===""){
  props.mfrThree();
  props.statUpdateMthirtytwo();
  props.btnTwothirtytwo();
 }
 else if (optionthirtytwo==="a"){
  props.mfrFour();
  props.statUpdateNthirtytwo();
  props.btnThreethirtytwo()
 }
 else if (optionthirtytwo==="b"){
   props.mfrFour();
   props.statUpdateNthirtytwo();
   props.btnThreethirtytwo()
  }
  else if (optionthirtytwo==="c"){
   props.mfrFour();
   props.statUpdateNthirtytwo();
   props.btnThreethirtytwo()
  }
  else if (optionthirtytwo==="d"){
   props.mfrFour();
   props.statUpdateNthirtytwo();
  props.btnThreethirtytwo()
  }}
  else if (stat==="Marked"){
    if(optionthirtytwo===""){
    props.nextThree();
    props.statUpdateKthirtytwo();
    props.btnTwothirtytwo();
   }
   else if (optionthirtytwo==="a"){
    props.mfrFive();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()


   }
   else if (optionthirtytwo==="b"){
    props.mfrFive();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="c"){
    props.mfrFive();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="d"){
    props.mfrFive();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirtytwo==="a"){
    props.nextThree();
    props.statUpdateKthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="b"){
    props.nextThree();
    props.statUpdateKthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="c"){
    props.nextThree();
    props.statUpdateKthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="d"){
    props.nextThree();
    props.statUpdateKthirtytwo();
    props.btnThreethirtytwo()
   }}
   else if (stat==="Answered"){
     if(optionthirtytwo==="a"){
    props.mfrSix();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="b"){
    props.mfrSix();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="c"){
    props.mfrSix();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="d"){
    props.mfrSix();
    props.statUpdateNthirtytwo();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirtytwo===""){
    props.nexttwo();
    props.statUpdatethirtytwo();
    props.btnOnethirtytwo()
  }
  
   else if (optionthirtytwo==="a"){
    props.nextTwo();
    props.statUpdateAthirtytwo();
    props.btnFourthirtytwo()
   }
   else if (optionthirtytwo==="b"){
     props.nextTwo();
     props.statUpdateAthirtytwo();
     props.btnFourthirtytwo()
    }
    else if (optionthirtytwo==="c"){
     props.nextTwo();
     props.statUpdateAthirtytwo();
     props.btnFourthirtytwo()
    }
    else if (optionthirtytwo==="d"){
     props.nextTwo();
     props.statUpdateAthirtytwo();
     props.btnFourthirtytwo()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirtytwo===""){
   props.nextThree();
   props.statUpdateKthirtytwo();
   props.btnOnethirtytwo()
  }
  else if (optionthirtytwo==="a"){
   props.nextFour();
   props.statUpdateAthirtytwo();
   props.btnFourthirtytwo()
  }
  else if (optionthirtytwo==="b"){
    props.nextFour();
    props.statUpdateAthirtytwo();
    props.btnFourthirtytwo()
   }
   else if (optionthirtytwo==="c"){
    props.nextFour();
    props.statUpdateAthirtytwo();
    props.btnFourthirtytwo()
   }
   else if (optionthirtytwo==="d"){
    props.nextFour();
    props.statUpdateAthirtytwo();
    props.btnFourthirtytwo()
   }}
   else if (stat==="Marked"){
     if(optionthirtytwo===""){
     props.nextThree();
     props.statUpdateKthirtytwo();
     props.btnTwothirtytwo()
    }
    else if (optionthirtytwo==="a"){
     props.mfrFive();
     props.statUpdateNthirtytwo();
     props.btnThreethirtytwo()
    }
    else if (optionthirtytwo==="b"){
     props.mfrFive();
     props.statUpdateNthirtytwo();
     props.btnThreethirtytwo()
    }
    else if ( optionthirtytwo==="c"){
     props.mfrFive();
     props.statUpdateNthirtytwo();
     props.btnThreethirtytwo()
    }
    else if ( optionthirtytwo==="d"){
     props.mfrFive();
     props.statUpdateNthirtytwo();
     props.btnThreethirtytwo()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirtytwo==="a"){
     props.mfrSeven();
     props.statUpdateAthirtytwo();
     props.btnFourthirtytwo()
    }
    else if (optionthirtytwo==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirtytwo();
      props.btnFourthirtytwo()
    }
    else if (optionthirtytwo==="c"){
      props.mfrSeven();
      props.statUpdateAthirtytwo();
      props.btnFourthirtytwo()
    }
    else if ( optionthirtytwo==="d"){
      props.mfrSeven();
      props.statUpdateAthirtytwo();
      props.btnFourthirtytwo()
    }}
    else if (stat==="Answered"){
      if(optionthirtytwo==="a"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()
    }
    else if (optionthirtytwo==="b"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()
    }
    else if (optionthirtytwo==="c"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()
    }
    else if (optionthirtytwo==="d"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()
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
     <p style={wStyle}>Test Name: <b>Group 17 Elements</b></p>
     <p style={wStyle1}>Name Of the Candidate: <b>{props.name}</b></p> 
    <form>
    <p><i>Question No.33</i><br></br> In the presence of Cobalt Chloride(CoCl<sub>2</sub>), bleaching powder decomposes to form .........</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirtytwo === 'a'}
          onClick={handleChange}
        /> CaCO<sub>3</sub> & O<sub>3</sub>
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirtytwo === 'b'}
          onClick={handleChange}
        /> ClO<sub>2</sub> & CaO
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirtytwo === 'c'}
          onClick={handleChange}
        /> Cl<sub>2</sub>O & CaO
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirtytwo === 'd'}
          onClick={handleChange}
        /> CaCl<sub>2</sub> & O<sub>2</sub>
        
        </div>
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/YMthirtyfour'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/YMthirtyfour'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/YMthirtyfour'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/YMthirtytwo'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><YMtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/YMconfirm'))}>Submit Test</button>
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
     statusthirtytwo:state.statusthirtytwo,
     optionthirtytwo:state.optionthirtytwo,
     BHealthanddiseaseThirtyfive:state.BHealthanddiseaseThirtyfive,
  BHealthanddiseaseThirtyfiveA:state.BHealthanddiseaseThirtyfiveA,
  BHealthanddiseaseThirtyfiveB:state.BHealthanddiseaseThirtyfiveB,
  BHealthanddiseaseThirtyfiveC:state.BHealthanddiseaseThirtyfiveC,
  BHealthanddiseaseThirtyfiveD:state.BHealthanddiseaseThirtyfiveD,
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
    optAthirtytwo:()=>dispatch(optAthirtytwo()),
    optBthirtytwo:()=>dispatch(optBthirtytwo()),
    optCthirtytwo:()=>dispatch(optCthirtytwo()),
    optDthirtytwo:()=>dispatch(optDthirtytwo()),
    statUpdatethirtytwo:()=>dispatch(statUpdatethirtytwo()),
    statUpdateAthirtytwo:()=>dispatch(statUpdateAthirtytwo()),
    statUpdateMthirtytwo:()=>dispatch(statUpdateMthirtytwo()),
    statUpdateNthirtytwo:()=>dispatch(statUpdateNthirtytwo()),
    statUpdateKthirtytwo:()=>dispatch(statUpdateKthirtytwo()),
    btnOnethirtytwo:()=>dispatch(btnOnethirtytwo()),
    btnTwothirtytwo:()=>dispatch(btnTwothirtytwo()),
    btnThreethirtytwo:()=>dispatch(btnThreethirtytwo()),
    btnFourthirtytwo:()=>dispatch(btnFourthirtytwo()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (YMthirtythree)