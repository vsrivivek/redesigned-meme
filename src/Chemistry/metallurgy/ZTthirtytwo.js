import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirtyone,optBthirtyone,optCthirtyone,optDthirtyone,btnOnethirtyone,btnTwothirtyone,btnThreethirtyone,btnFourthirtyone,statUpdatethirtyone,statUpdateAthirtyone,statUpdateKthirtyone,statUpdateMthirtyone,statUpdateNthirtyone,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import ZTtimer from './ZTtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function ZTthirtytwo(props) {
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
    var stat=props.statusthirtyone;
    var opt=props.optionthirtyone

  const [optionthirtyone, setOptionthirtyone] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirtyone(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirtyone==="a"){
   props.optAthirtyone()
 }
 if(optionthirtyone==="b"){
   props.optBthirtyone()
 }
 if(optionthirtyone==="c"){
   props.optCthirtyone()
 }
 if(optionthirtyone==="d"){
   props.optDthirtyone()
 }
}

 useEffect(()=>{
  setOptionthirtyone(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirtyone===""){
  props.nextOne();
  props.statUpdatethirtyone();
  props.btnOnethirtyone()
  
 }
 
  else if (optionthirtyone==="a"){
   props.nextTwo();
   props.statUpdateAthirtyone();
   props.btnFourthirtyone()
  
   
  }
  else if (optionthirtyone==="b"){
    props.nextTwo();
    props.statUpdateAthirtyone();
    props.btnFourthirtyone()
   }
   else if (optionthirtyone==="c"){
    props.nextTwo();
    props.statUpdateAthirtyone();
    props.btnFourthirtyone()
   }
   else if (optionthirtyone==="d"){
    props.nextTwo();
    props.statUpdateAthirtyone();
    props.btnFourthirtyone()
   }}
   else if (stat==="Not Answered"){
     if(optionthirtyone===""){
    props.nextThree();
    props.statUpdateKthirtyone();
    props.btnOnethirtyone()
    
   }
   
    else if (optionthirtyone==="a"){
     props.nextFour();
     props.statUpdateAthirtyone();
     props.btnFourthirtyone()
     
    }
    else if (optionthirtyone==="b"){
      props.nextFour();
      props.statUpdateAthirtyone();
      props.btnFourthirtyone()
      
     }
     else if (optionthirtyone==="c"){
      props.nextFour();
      props.statUpdateAthirtyone();
      props.btnFourthirtyone()
      
     }
     else if ( optionthirtyone==="d"){
      props.nextFour();
      props.statUpdateAthirtyone();
      props.btnFourthirtyone()
      
     }}
     else if (stat==="Marked"){
     if(optionthirtyone===""){
      props.nextThree();
      props.statUpdateKthirtyone();
      props.btnThreethirtyone()
      
     }
          else if (optionthirtyone==="a"){
      props.mfrFive();
      props.statUpdateNthirtyone();
      props.btnThreethirtyone()

     }
     else if (optionthirtyone==="b"){
       props.mfrFive();
       props.statUpdateNthirtyone();
       props.btnThreethirtyone()

      }
      else if (optionthirtyone==="c"){
       props.mfrFive();
       props.statUpdateNthirtyone();
       props.btnThreethirtyone()

      }
      else if (optionthirtyone==="d"){
       props.mfrFive();
       props.statUpdateNthirtyone();
       props.btnThreethirtyone()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirtyone==="a"){
      props.nextThree();
      props.statUpdateKthirtyone();
      props.btnThreethirtyone()

      
     }
     else if (optionthirtyone==="b"){
      props.nextThree();
      props.statUpdateKthirtyone();
      props.btnThreethirtyone() 
     }
     else if (optionthirtyone==="c"){
      props.nextThree();
      props.statUpdateKthirtyone();
      props.btnThreethirtyone()
     }
     else if (optionthirtyone==="d"){
      props.nextThree();
      props.statUpdateKthirtyone();
      props.btnThreethirtyone()
     }}
     else if(stat==="Answered"){
     if (optionthirtyone==="a"){
      props.nextThree();
      props.statUpdateKthirtyone();
      props.btnFourthirtyone()

      
     }
     else if (optionthirtyone==="b"){
      props.nextThree();
      props.statUpdateKthirtyone();
      props.btnFourthirtyone()

      
     }
     else if ( optionthirtyone==="c"){
      props.nextThree();
      props.statUpdateKthirtyone();
      props.btnFourthirtyone()
      
     }
     else if (optionthirtyone==="d"){
      props.nextThree();
      props.statUpdateKthirtyone();
      props.btnFourthirtyone()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirtyone===""){
  props.mfrOne();
  props.statUpdateMthirtyone();
  props.btnTwothirtyone()
 }
 
  else if (optionthirtyone==="a"){
   props.mfrTwo();
   props.statUpdateNthirtyone();
   props.btnThreethirtyone()
  }
  else if (optionthirtyone==="b"){
    props.mfrTwo();
    props.statUpdateNthirtyone();
    props.btnThreethirtyone()
  

   }
   else if (optionthirtyone==="c"){
    props.mfrTwo();
    props.statUpdateNthirtyone();
    props.btnThreethirtyone()
  
   }
   else if (optionthirtyone==="d"){
    props.mfrTwo();
    props.statUpdateNthirtyone();
    props.btnThreethirtyone()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirtyone===""){
  props.mfrThree();
  props.statUpdateMthirtyone();
  props.btnTwothirtyone();
 }
 else if (optionthirtyone==="a"){
  props.mfrFour();
  props.statUpdateNthirtyone();
  props.btnThreethirtyone()
 }
 else if (optionthirtyone==="b"){
   props.mfrFour();
   props.statUpdateNthirtyone();
   props.btnThreethirtyone()
  }
  else if (optionthirtyone==="c"){
   props.mfrFour();
   props.statUpdateNthirtyone();
   props.btnThreethirtyone()
  }
  else if (optionthirtyone==="d"){
   props.mfrFour();
   props.statUpdateNthirtyone();
  props.btnThreethirtyone()
  }}
  else if (stat==="Marked"){
    if(optionthirtyone===""){
    props.nextThree();
    props.statUpdateKthirtyone();
    props.btnTwothirtyone();
   }
   else if (optionthirtyone==="a"){
    props.mfrFive();
    props.statUpdateNthirtyone();
    props.btnThreethirtyone()


   }
   else if (optionthirtyone==="b"){
    props.mfrFive();
    props.statUpdateNthirtyone();
    props.btnThreethirtyone()
   }
   else if (optionthirtyone==="c"){
    props.mfrFive();
    props.statUpdateNthirtyone();
    props.btnThreethirtyone()
   }
   else if (optionthirtyone==="d"){
    props.mfrFive();
    props.statUpdateNthirtyone();
    props.btnThreethirtyone()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirtyone==="a"){
    props.nextThree();
    props.statUpdateKthirtyone();
    props.btnThreethirtyone()
   }
   else if (optionthirtyone==="b"){
    props.nextThree();
    props.statUpdateKthirtyone();
    props.btnThreethirtyone()
   }
   else if (optionthirtyone==="c"){
    props.nextThree();
    props.statUpdateKthirtyone();
    props.btnThreethirtyone()
   }
   else if (optionthirtyone==="d"){
    props.nextThree();
    props.statUpdateKthirtyone();
    props.btnThreethirtyone()
   }}
   else if (stat==="Answered"){
     if(optionthirtyone==="a"){
    props.mfrSix();
    props.statUpdateNthirtyone();
    props.btnThreethirtyone()
   }
   else if (optionthirtyone==="b"){
    props.mfrSix();
    props.statUpdateNthirtyone();
    props.btnThreethirtyone()
   }
   else if (optionthirtyone==="c"){
    props.mfrSix();
    props.statUpdateNthirtyone();
    props.btnThreethirtyone()
   }
   else if (optionthirtyone==="d"){
    props.mfrSix();
    props.statUpdateNthirtyone();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirtyone===""){
    props.nexttwo();
    props.statUpdatethirtyone();
    props.btnOnethirtyone()
  }
  
   else if (optionthirtyone==="a"){
    props.nextTwo();
    props.statUpdateAthirtyone();
    props.btnFourthirtyone()
   }
   else if (optionthirtyone==="b"){
     props.nextTwo();
     props.statUpdateAthirtyone();
     props.btnFourthirtyone()
    }
    else if (optionthirtyone==="c"){
     props.nextTwo();
     props.statUpdateAthirtyone();
     props.btnFourthirtyone()
    }
    else if (optionthirtyone==="d"){
     props.nextTwo();
     props.statUpdateAthirtyone();
     props.btnFourthirtyone()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirtyone===""){
   props.nextThree();
   props.statUpdateKthirtyone();
   props.btnOnethirtyone()
  }
  else if (optionthirtyone==="a"){
   props.nextFour();
   props.statUpdateAthirtyone();
   props.btnFourthirtyone()
  }
  else if (optionthirtyone==="b"){
    props.nextFour();
    props.statUpdateAthirtyone();
    props.btnFourthirtyone()
   }
   else if (optionthirtyone==="c"){
    props.nextFour();
    props.statUpdateAthirtyone();
    props.btnFourthirtyone()
   }
   else if (optionthirtyone==="d"){
    props.nextFour();
    props.statUpdateAthirtyone();
    props.btnFourthirtyone()
   }}
   else if (stat==="Marked"){
     if(optionthirtyone===""){
     props.nextThree();
     props.statUpdateKthirtyone();
     props.btnTwothirtyone()
    }
    else if (optionthirtyone==="a"){
     props.mfrFive();
     props.statUpdateNthirtyone();
     props.btnThreethirtyone()
    }
    else if (optionthirtyone==="b"){
     props.mfrFive();
     props.statUpdateNthirtyone();
     props.btnThreethirtyone()
    }
    else if ( optionthirtyone==="c"){
     props.mfrFive();
     props.statUpdateNthirtyone();
     props.btnThreethirtyone()
    }
    else if ( optionthirtyone==="d"){
     props.mfrFive();
     props.statUpdateNthirtyone();
     props.btnThreethirtyone()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirtyone==="a"){
     props.mfrSeven();
     props.statUpdateAthirtyone();
     props.btnFourthirtyone()
    }
    else if (optionthirtyone==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirtyone();
      props.btnFourthirtyone()
    }
    else if (optionthirtyone==="c"){
      props.mfrSeven();
      props.statUpdateAthirtyone();
      props.btnFourthirtyone()
    }
    else if ( optionthirtyone==="d"){
      props.mfrSeven();
      props.statUpdateAthirtyone();
      props.btnFourthirtyone()
    }}
    else if (stat==="Answered"){
      if(optionthirtyone==="a"){
      props.nextThree();
      props.statUpdateKthirtyone();
      props.btnFourthirtyone()
    }
    else if (optionthirtyone==="b"){
      props.nextThree();
      props.statUpdateKthirtyone();
      props.btnFourthirtyone()
    }
    else if (optionthirtyone==="c"){
      props.nextThree();
      props.statUpdateKthirtyone();
      props.btnFourthirtyone()
    }
    else if (optionthirtyone==="d"){
      props.nextThree();
      props.statUpdateKthirtyone();
      props.btnFourthirtyone()
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
    <p><i>Question No.32</i><br></br> Observe the following statements regarding purification of bauxite<br></br>
    I. During Hall's process, silica is removed Si(vapour)<br></br>
    II. Bauxite ore contaminated with Fe<sub>2</sub>O<sub>3</sub> is purified in baeyer's process.<br></br>
    III. During serpeck's process AIN is formed<br></br>
    The correct answer is
</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirtyone=== 'a'}
          onClick={handleChange}
        /> I,II and III are correct
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirtyone === 'b'}
          onClick={handleChange}
        /> Only I and II are correct
       
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirtyone === 'c'}
          onClick={handleChange}
        /> Only I and III are correct
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirtyone === 'd'}
          onClick={handleChange}
        /> Only II and III are correct
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/ZTthirtythree'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/ZTthirtythree'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/ZTthirtythree'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/ZTthirtyone'))}>Previous</button>
    
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
     statusthirtyone:state.statusthirtyone,
     optionthirtyone:state.optionthirtyone,
     BHealthanddiseaseThirtyfour:state.BHealthanddiseaseThirtyfour,
  BHealthanddiseaseThirtyfourA:state.BHealthanddiseaseThirtyfourA,
  BHealthanddiseaseThirtyfourB:state.BHealthanddiseaseThirtyfourB,
  BHealthanddiseaseThirtyfourC:state.BHealthanddiseaseThirtyfourC,
  BHealthanddiseaseThirtyfourD:state.BHealthanddiseaseThirtyfourD,
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
    optAthirtyone:()=>dispatch(optAthirtyone()),
    optBthirtyone:()=>dispatch(optBthirtyone()),
    optCthirtyone:()=>dispatch(optCthirtyone()),
    optDthirtyone:()=>dispatch(optDthirtyone()),
    statUpdatethirtyone:()=>dispatch(statUpdatethirtyone()),
    statUpdateAthirtyone:()=>dispatch(statUpdateAthirtyone()),
    statUpdateMthirtyone:()=>dispatch(statUpdateMthirtyone()),
    statUpdateNthirtyone:()=>dispatch(statUpdateNthirtyone()),
    statUpdateKthirtyone:()=>dispatch(statUpdateKthirtyone()),
    btnOnethirtyone:()=>dispatch(btnOnethirtyone()),
    btnTwothirtyone:()=>dispatch(btnTwothirtyone()),
    btnThreethirtyone:()=>dispatch(btnThreethirtyone()),
    btnFourthirtyone:()=>dispatch(btnFourthirtyone()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (ZTthirtytwo)