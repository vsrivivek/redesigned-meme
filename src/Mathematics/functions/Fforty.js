import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirtynine,optBthirtynine,optCthirtynine,optDthirtynine,btnOnethirtynine,btnTwothirtynine,btnThreethirtynine,btnFourthirtynine,statUpdatethirtynine,statUpdateAthirtynine,statUpdateKthirtynine,statUpdateMthirtynine,statUpdateNthirtynine,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import Ftimer from './Ftimer'
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function Fforty(props) {
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
    var stat=props.statusthirtynine;
    var opt=props.optionthirtynine;
    const currentDate = new Date();
     let timeNow = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
     var a = timeNow.split(':'); 
     var time = ((+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]))*1000; 

  
    var dateOne=props.seconds;

    let difference =  props.seconds- time;

  const [optionthirtynine, setOptionthirtynine] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirtynine(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirtynine==="a"){
   props.optAthirtynine()
 }
 if(optionthirtynine==="b"){
   props.optBthirtynine()
 }
 if(optionthirtynine==="c"){
   props.optCthirtynine()
 }
 if(optionthirtynine==="d"){
   props.optDthirtynine()
 }
}

 useEffect(()=>{
  setOptionthirtynine(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirtynine===""){
  props.nextOne();
  props.statUpdatethirtynine();
  props.btnOnethirtynine()
  
 }
 
  else if (optionthirtynine==="a"){
   props.nextTwo();
   props.statUpdateAthirtynine();
   props.btnFourthirtynine()
  
   
  }
  else if (optionthirtynine==="b"){
    props.nextTwo();
    props.statUpdateAthirtynine();
    props.btnFourthirtynine()
   }
   else if (optionthirtynine==="c"){
    props.nextTwo();
    props.statUpdateAthirtynine();
    props.btnFourthirtynine()
   }
   else if (optionthirtynine==="d"){
    props.nextTwo();
    props.statUpdateAthirtynine();
    props.btnFourthirtynine()
   }}
   else if (stat==="Not Answered"){
     if(optionthirtynine===""){
    props.nextThree();
    props.statUpdateKthirtynine();
    props.btnOnethirtynine()
    
   }
   
    else if (optionthirtynine==="a"){
     props.nextFour();
     props.statUpdateAthirtynine();
     props.btnFourthirtynine()
     
    }
    else if (optionthirtynine==="b"){
      props.nextFour();
      props.statUpdateAthirtynine();
      props.btnFourthirtynine()
      
     }
     else if (optionthirtynine==="c"){
      props.nextFour();
      props.statUpdateAthirtynine();
      props.btnFourthirtynine()
      
     }
     else if ( optionthirtynine==="d"){
      props.nextFour();
      props.statUpdateAthirtynine();
      props.btnFourthirtynine()
      
     }}
     else if (stat==="Marked"){
     if(optionthirtynine===""){
      props.nextThree();
      props.statUpdateKthirtynine();
      props.btnThreethirtynine()
      
     }
          else if (optionthirtynine==="a"){
      props.mfrFive();
      props.statUpdateNthirtynine();
      props.btnThreethirtynine()

     }
     else if (optionthirtynine==="b"){
       props.mfrFive();
       props.statUpdateNthirtynine();
       props.btnThreethirtynine()

      }
      else if (optionthirtynine==="c"){
       props.mfrFive();
       props.statUpdateNthirtynine();
       props.btnThreethirtynine()

      }
      else if (optionthirtynine==="d"){
       props.mfrFive();
       props.statUpdateNthirtynine();
       props.btnThreethirtynine()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirtynine==="a"){
      props.nextThree();
      props.statUpdateKthirtynine();
      props.btnThreethirtynine()

      
     }
     else if (optionthirtynine==="b"){
      props.nextThree();
      props.statUpdateKthirtynine();
      props.btnThreethirtynine() 
     }
     else if (optionthirtynine==="c"){
      props.nextThree();
      props.statUpdateKthirtynine();
      props.btnThreethirtynine()
     }
     else if (optionthirtynine==="d"){
      props.nextThree();
      props.statUpdateKthirtynine();
      props.btnThreethirtynine()
     }}
     else if(stat==="Answered"){
     if (optionthirtynine==="a"){
      props.nextThree();
      props.statUpdateKthirtynine();
      props.btnFourthirtynine()

      
     }
     else if (optionthirtynine==="b"){
      props.nextThree();
      props.statUpdateKthirtynine();
      props.btnFourthirtynine()

      
     }
     else if ( optionthirtynine==="c"){
      props.nextThree();
      props.statUpdateKthirtynine();
      props.btnFourthirtynine()
      
     }
     else if (optionthirtynine==="d"){
      props.nextThree();
      props.statUpdateKthirtynine();
      props.btnFourthirtynine()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirtynine===""){
  props.mfrOne();
  props.statUpdateMthirtynine();
  props.btnTwothirtynine()
 }
 
  else if (optionthirtynine==="a"){
   props.mfrTwo();
   props.statUpdateNthirtynine();
   props.btnThreethirtynine()
  }
  else if (optionthirtynine==="b"){
    props.mfrTwo();
    props.statUpdateNthirtynine();
    props.btnThreethirtynine()
  

   }
   else if (optionthirtynine==="c"){
    props.mfrTwo();
    props.statUpdateNthirtynine();
    props.btnThreethirtynine()
  
   }
   else if (optionthirtynine==="d"){
    props.mfrTwo();
    props.statUpdateNthirtynine();
    props.btnThreethirtynine()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirtynine===""){
  props.mfrThree();
  props.statUpdateMthirtynine();
  props.btnTwothirtynine();
 }
 else if (optionthirtynine==="a"){
  props.mfrFour();
  props.statUpdateNthirtynine();
  props.btnThreethirtynine()
 }
 else if (optionthirtynine==="b"){
   props.mfrFour();
   props.statUpdateNthirtynine();
   props.btnThreethirtynine()
  }
  else if (optionthirtynine==="c"){
   props.mfrFour();
   props.statUpdateNthirtynine();
   props.btnThreethirtynine()
  }
  else if (optionthirtynine==="d"){
   props.mfrFour();
   props.statUpdateNthirtynine();
  props.btnThreethirtynine()
  }}
  else if (stat==="Marked"){
    if(optionthirtynine===""){
    props.nextThree();
    props.statUpdateKthirtynine();
    props.btnTwothirtynine();
   }
   else if (optionthirtynine==="a"){
    props.mfrFive();
    props.statUpdateNthirtynine();
    props.btnThreethirtynine()


   }
   else if (optionthirtynine==="b"){
    props.mfrFive();
    props.statUpdateNthirtynine();
    props.btnThreethirtynine()
   }
   else if (optionthirtynine==="c"){
    props.mfrFive();
    props.statUpdateNthirtynine();
    props.btnThreethirtynine()
   }
   else if (optionthirtynine==="d"){
    props.mfrFive();
    props.statUpdateNthirtynine();
    props.btnThreethirtynine()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirtynine==="a"){
    props.nextThree();
    props.statUpdateKthirtynine();
    props.btnThreethirtynine()
   }
   else if (optionthirtynine==="b"){
    props.nextThree();
    props.statUpdateKthirtynine();
    props.btnThreethirtynine()
   }
   else if (optionthirtynine==="c"){
    props.nextThree();
    props.statUpdateKthirtynine();
    props.btnThreethirtynine()
   }
   else if (optionthirtynine==="d"){
    props.nextThree();
    props.statUpdateKthirtynine();
    props.btnThreethirtynine()
   }}
   else if (stat==="Answered"){
     if(optionthirtynine==="a"){
    props.mfrSix();
    props.statUpdateNthirtynine();
    props.btnThreethirtynine()
   }
   else if (optionthirtynine==="b"){
    props.mfrSix();
    props.statUpdateNthirtynine();
    props.btnThreethirtynine()
   }
   else if (optionthirtynine==="c"){
    props.mfrSix();
    props.statUpdateNthirtynine();
    props.btnThreethirtynine()
   }
   else if (optionthirtynine==="d"){
    props.mfrSix();
    props.statUpdateNthirtynine();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirtynine===""){
    props.nexttwo();
    props.statUpdatethirtynine();
    props.btnOnethirtynine()
  }
  
   else if (optionthirtynine==="a"){
    props.nextTwo();
    props.statUpdateAthirtynine();
    props.btnFourthirtynine()
   }
   else if (optionthirtynine==="b"){
     props.nextTwo();
     props.statUpdateAthirtynine();
     props.btnFourthirtynine()
    }
    else if (optionthirtynine==="c"){
     props.nextTwo();
     props.statUpdateAthirtynine();
     props.btnFourthirtynine()
    }
    else if (optionthirtynine==="d"){
     props.nextTwo();
     props.statUpdateAthirtynine();
     props.btnFourthirtynine()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirtynine===""){
   props.nextThree();
   props.statUpdateKthirtynine();
   props.btnOnethirtynine()
  }
  else if (optionthirtynine==="a"){
   props.nextFour();
   props.statUpdateAthirtynine();
   props.btnFourthirtynine()
  }
  else if (optionthirtynine==="b"){
    props.nextFour();
    props.statUpdateAthirtynine();
    props.btnFourthirtynine()
   }
   else if (optionthirtynine==="c"){
    props.nextFour();
    props.statUpdateAthirtynine();
    props.btnFourthirtynine()
   }
   else if (optionthirtynine==="d"){
    props.nextFour();
    props.statUpdateAthirtynine();
    props.btnFourthirtynine()
   }}
   else if (stat==="Marked"){
     if(optionthirtynine===""){
     props.nextThree();
     props.statUpdateKthirtynine();
     props.btnTwothirtynine()
    }
    else if (optionthirtynine==="a"){
     props.mfrFive();
     props.statUpdateNthirtynine();
     props.btnThreethirtynine()
    }
    else if (optionthirtynine==="b"){
     props.mfrFive();
     props.statUpdateNthirtynine();
     props.btnThreethirtynine()
    }
    else if ( optionthirtynine==="c"){
     props.mfrFive();
     props.statUpdateNthirtynine();
     props.btnThreethirtynine()
    }
    else if ( optionthirtynine==="d"){
     props.mfrFive();
     props.statUpdateNthirtynine();
     props.btnThreethirtynine()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirtynine==="a"){
     props.mfrSeven();
     props.statUpdateAthirtynine();
     props.btnFourthirtynine()
    }
    else if (optionthirtynine==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirtynine();
      props.btnFourthirtynine()
    }
    else if (optionthirtynine==="c"){
      props.mfrSeven();
      props.statUpdateAthirtynine();
      props.btnFourthirtynine()
    }
    else if ( optionthirtynine==="d"){
      props.mfrSeven();
      props.statUpdateAthirtynine();
      props.btnFourthirtynine()
    }}
    else if (stat==="Answered"){
      if(optionthirtynine==="a"){
      props.nextThree();
      props.statUpdateKthirtynine();
      props.btnFourthirtynine()
    }
    else if (optionthirtynine==="b"){
      props.nextThree();
      props.statUpdateKthirtynine();
      props.btnFourthirtynine()
    }
    else if (optionthirtynine==="c"){
      props.nextThree();
      props.statUpdateKthirtynine();
      props.btnFourthirtynine()
    }
    else if (optionthirtynine==="d"){
      props.nextThree();
      props.statUpdateKthirtynine();
      props.btnFourthirtynine()
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
    <p><i>Question No.40</i><br></br> The range of the function f(x)= cos[x] where -{'\u03c0'}/2{'\u003c'}x{'\u003c'}{'\u03c0'}/2 is
</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirtynine === 'a'}
          onClick={handleChange}
        /> {`{-1,1,0}`}
       
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirtynine === 'b'}
          onClick={handleChange}
        /> {`{1,cos1,cos2}`}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirtynine === 'c'}
          onClick={handleChange}
        /> {`{cos1,-cos1,1}`}
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirtynine === 'd'}
          onClick={handleChange}
        /> none
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
    <button onClick={()=>(clickHanlderNext)(navigate('/Fthirtynine'))}>Previous</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/Fthirtynine'))}>Save & Previous</button>
        <button onClick={()=>clickHanlderSan()}>Save</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/Fthirtynine'))}>Mark For Review</button>
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
     statusthirtynine:state.statusthirtynine,
     optionthirtynine:state.optionthirtynine,
     BHealthanddiseasefortytwo:state.BHealthanddiseasefortytwo,
  BHealthanddiseasefortytwoA:state.BHealthanddiseasefortytwoA,
  BHealthanddiseasefortytwoB:state.BHealthanddiseasefortytwoB,
  BHealthanddiseasefortytwoC:state.BHealthanddiseasefortytwoC,
  BHealthanddiseasefortytwoD:state.BHealthanddiseasefortytwoD,
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
  divA:state.divA, name:state.name,
  seconds:state.seconds
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
    optAthirtynine:()=>dispatch(optAthirtynine()),
    optBthirtynine:()=>dispatch(optBthirtynine()),
    optCthirtynine:()=>dispatch(optCthirtynine()),
    optDthirtynine:()=>dispatch(optDthirtynine()),
    statUpdatethirtynine:()=>dispatch(statUpdatethirtynine()),
    statUpdateAthirtynine:()=>dispatch(statUpdateAthirtynine()),
    statUpdateMthirtynine:()=>dispatch(statUpdateMthirtynine()),
    statUpdateNthirtynine:()=>dispatch(statUpdateNthirtynine()),
    statUpdateKthirtynine:()=>dispatch(statUpdateKthirtynine()),
    btnOnethirtynine:()=>dispatch(btnOnethirtynine()),
    btnTwothirtynine:()=>dispatch(btnTwothirtynine()),
    btnThreethirtynine:()=>dispatch(btnThreethirtynine()),
    btnFourthirtynine:()=>dispatch(btnFourthirtynine()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (Fforty)