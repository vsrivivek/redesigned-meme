import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwentynine,optBtwentynine,optCtwentynine,optDtwentynine,btnOnetwentynine,btnTwotwentynine,btnThreetwentynine,btnFourtwentynine,statUpdatetwentynine,statUpdateAtwentynine,statUpdateKtwentynine,statUpdateMtwentynine,statUpdateNtwentynine,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import AVtimer from './AVtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function AVthirty(props) {
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
    var stat=props.statustwentynine;
    var opt=props.optiontwentynine

  const [optiontwentynine, setOptiontwentynine] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptiontwentynine(event.target.value);
    
  }
  
function optionChange(){
 if(optiontwentynine==="a"){
   props.optAtwentynine()
 }
 if(optiontwentynine==="b"){
   props.optBtwentynine()
 }
 if(optiontwentynine==="c"){
   props.optCtwentynine()
 }
 if(optiontwentynine==="d"){
   props.optDtwentynine()
 }
}

 useEffect(()=>{
  setOptiontwentynine(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optiontwentynine===""){
  props.nextOne();
  props.statUpdatetwentynine();
  props.btnOnetwentynine()
  
 }
 
  else if (optiontwentynine==="a"){
   props.nextTwo();
   props.statUpdateAtwentynine();
   props.btnFourtwentynine()
  
   
  }
  else if (optiontwentynine==="b"){
    props.nextTwo();
    props.statUpdateAtwentynine();
    props.btnFourtwentynine()
   }
   else if (optiontwentynine==="c"){
    props.nextTwo();
    props.statUpdateAtwentynine();
    props.btnFourtwentynine()
   }
   else if (optiontwentynine==="d"){
    props.nextTwo();
    props.statUpdateAtwentynine();
    props.btnFourtwentynine()
   }}
   else if (stat==="Not Answered"){
     if(optiontwentynine===""){
    props.nextThree();
    props.statUpdateKtwentynine();
    props.btnOnetwentynine()
    
   }
   
    else if (optiontwentynine==="a"){
     props.nextFour();
     props.statUpdateAtwentynine();
     props.btnFourtwentynine()
     
    }
    else if (optiontwentynine==="b"){
      props.nextFour();
      props.statUpdateAtwentynine();
      props.btnFourtwentynine()
      
     }
     else if (optiontwentynine==="c"){
      props.nextFour();
      props.statUpdateAtwentynine();
      props.btnFourtwentynine()
      
     }
     else if ( optiontwentynine==="d"){
      props.nextFour();
      props.statUpdateAtwentynine();
      props.btnFourtwentynine()
      
     }}
     else if (stat==="Marked"){
     if(optiontwentynine===""){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnThreetwentynine()
      
     }
          else if (optiontwentynine==="a"){
      props.mfrFive();
      props.statUpdateNtwentynine();
      props.btnThreetwentynine()

     }
     else if (optiontwentynine==="b"){
       props.mfrFive();
       props.statUpdateNtwentynine();
       props.btnThreetwentynine()

      }
      else if (optiontwentynine==="c"){
       props.mfrFive();
       props.statUpdateNtwentynine();
       props.btnThreetwentynine()

      }
      else if (optiontwentynine==="d"){
       props.mfrFive();
       props.statUpdateNtwentynine();
       props.btnThreetwentynine()

        }}
     
     else if (stat==="Marked For Review"){
     if(optiontwentynine==="a"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnThreetwentynine()

      
     }
     else if (optiontwentynine==="b"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnThreetwentynine() 
     }
     else if (optiontwentynine==="c"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnThreetwentynine()
     }
     else if (optiontwentynine==="d"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnThreetwentynine()
     }}
     else if(stat==="Answered"){
     if (optiontwentynine==="a"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()

      
     }
     else if (optiontwentynine==="b"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()

      
     }
     else if ( optiontwentynine==="c"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()
      
     }
     else if (optiontwentynine==="d"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optiontwentynine===""){
  props.mfrOne();
  props.statUpdateMtwentynine();
  props.btnTwotwentynine()
 }
 
  else if (optiontwentynine==="a"){
   props.mfrTwo();
   props.statUpdateNtwentynine();
   props.btnThreetwentynine()
  }
  else if (optiontwentynine==="b"){
    props.mfrTwo();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
  

   }
   else if (optiontwentynine==="c"){
    props.mfrTwo();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
  
   }
   else if (optiontwentynine==="d"){
    props.mfrTwo();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()

   }}
  
 else if (stat==="Not Answered"){
   if(optiontwentynine===""){
  props.mfrThree();
  props.statUpdateMtwentynine();
  props.btnTwotwentynine();
 }
 else if (optiontwentynine==="a"){
  props.mfrFour();
  props.statUpdateNtwentynine();
  props.btnThreetwentynine()
 }
 else if (optiontwentynine==="b"){
   props.mfrFour();
   props.statUpdateNtwentynine();
   props.btnThreetwentynine()
  }
  else if (optiontwentynine==="c"){
   props.mfrFour();
   props.statUpdateNtwentynine();
   props.btnThreetwentynine()
  }
  else if (optiontwentynine==="d"){
   props.mfrFour();
   props.statUpdateNtwentynine();
  props.btnThreetwentynine()
  }}
  else if (stat==="Marked"){
    if(optiontwentynine===""){
    props.nextThree();
    props.statUpdateKtwentynine();
    props.btnTwotwentynine();
   }
   else if (optiontwentynine==="a"){
    props.mfrFive();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()


   }
   else if (optiontwentynine==="b"){
    props.mfrFive();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="c"){
    props.mfrFive();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="d"){
    props.mfrFive();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
    }}
   else if (stat==="Marked For Review"){
     if(optiontwentynine==="a"){
    props.nextThree();
    props.statUpdateKtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="b"){
    props.nextThree();
    props.statUpdateKtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="c"){
    props.nextThree();
    props.statUpdateKtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="d"){
    props.nextThree();
    props.statUpdateKtwentynine();
    props.btnThreetwentynine()
   }}
   else if (stat==="Answered"){
     if(optiontwentynine==="a"){
    props.mfrSix();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="b"){
    props.mfrSix();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="c"){
    props.mfrSix();
    props.statUpdateNtwentynine();
    props.btnThreetwentynine()
   }
   else if (optiontwentynine==="d"){
    props.mfrSix();
    props.statUpdateNtwentynine();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optiontwentynine===""){
    props.nexttwo();
    props.statUpdatetwentynine();
    props.btnOnetwentynine()
  }
  
   else if (optiontwentynine==="a"){
    props.nextTwo();
    props.statUpdateAtwentynine();
    props.btnFourtwentynine()
   }
   else if (optiontwentynine==="b"){
     props.nextTwo();
     props.statUpdateAtwentynine();
     props.btnFourtwentynine()
    }
    else if (optiontwentynine==="c"){
     props.nextTwo();
     props.statUpdateAtwentynine();
     props.btnFourtwentynine()
    }
    else if (optiontwentynine==="d"){
     props.nextTwo();
     props.statUpdateAtwentynine();
     props.btnFourtwentynine()
    }}
   
  else if (stat==="Not Answered"){
    if(optiontwentynine===""){
   props.nextThree();
   props.statUpdateKtwentynine();
   props.btnOnetwentynine()
  }
  else if (optiontwentynine==="a"){
   props.nextFour();
   props.statUpdateAtwentynine();
   props.btnFourtwentynine()
  }
  else if (optiontwentynine==="b"){
    props.nextFour();
    props.statUpdateAtwentynine();
    props.btnFourtwentynine()
   }
   else if (optiontwentynine==="c"){
    props.nextFour();
    props.statUpdateAtwentynine();
    props.btnFourtwentynine()
   }
   else if (optiontwentynine==="d"){
    props.nextFour();
    props.statUpdateAtwentynine();
    props.btnFourtwentynine()
   }}
   else if (stat==="Marked"){
     if(optiontwentynine===""){
     props.nextThree();
     props.statUpdateKtwentynine();
     props.btnTwotwentynine()
    }
    else if (optiontwentynine==="a"){
     props.mfrFive();
     props.statUpdateNtwentynine();
     props.btnThreetwentynine()
    }
    else if (optiontwentynine==="b"){
     props.mfrFive();
     props.statUpdateNtwentynine();
     props.btnThreetwentynine()
    }
    else if ( optiontwentynine==="c"){
     props.mfrFive();
     props.statUpdateNtwentynine();
     props.btnThreetwentynine()
    }
    else if ( optiontwentynine==="d"){
     props.mfrFive();
     props.statUpdateNtwentynine();
     props.btnThreetwentynine()
      }}
    else if (stat==="Marked For Review"){
      if(optiontwentynine==="a"){
     props.mfrSeven();
     props.statUpdateAtwentynine();
     props.btnFourtwentynine()
    }
    else if (optiontwentynine==="b"){
      props.mfrSeventwo();
      props.statUpdateAtwentynine();
      props.btnFourtwentynine()
    }
    else if (optiontwentynine==="c"){
      props.mfrSeven();
      props.statUpdateAtwentynine();
      props.btnFourtwentynine()
    }
    else if ( optiontwentynine==="d"){
      props.mfrSeven();
      props.statUpdateAtwentynine();
      props.btnFourtwentynine()
    }}
    else if (stat==="Answered"){
      if(optiontwentynine==="a"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()
    }
    else if (optiontwentynine==="b"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()
    }
    else if (optiontwentynine==="c"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()
    }
    else if (optiontwentynine==="d"){
      props.nextThree();
      props.statUpdateKtwentynine();
      props.btnFourtwentynine()
          }}
    optionChange()
 }

    return (
    <div>
    <div className={props.header} style={bStyle}>
     <h1 style={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1> 
           </div>
        {/* <div className={props.title}>
          <h3>Addition of Vectors(Previously asked Questions)</h3>
        </div> */}
    <div className= {props.total}>
     <div className={props.left}>

     <p style={wStyle}>Test Name: <b>Addition of Vectors</b></p>
     <p style={wStyle1}>Name Of the Candidate: <b>{props.name}</b></p>  
    <form>
      {/* <h5>Question No.30 </h5> */}
    <p><i>Question No.30</i><br></br>If A(4,7,8),B(2,3,4) and C(2,5,7) are the position vectors of the vertices of a triangle ABC and if the internal bisector of {'\u2220'}A meets BC at D then AD=
    <br></br><b>[EAMCET 17AP]</b>
</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwentynine === 'a'}
          onClick={handleChange}
        /> (3{'\u221a'}34)/2
        
          </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwentynine === 'b'}
          onClick={handleChange}
        /> (2{'\u221a'}34)/3
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwentynine === 'c'}
          onClick={handleChange}
        /> {'\u221a'}34/2
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwentynine === 'd'}
          onClick={handleChange}
        /> {'\u221a'}34/6
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/AVthirtyone'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/AVthirtyone'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/AVthirtyone'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/AVtwentynine'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><AVtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/AVconfirm'))}>Submit Test</button>
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
     statustwentynine:state.statustwentynine,
     optiontwentynine:state.optiontwentynine,
     BHealthanddiseaseThirtytwo:state.BHealthanddiseaseThirtytwo,
  BHealthanddiseaseThirtytwoA:state.BHealthanddiseaseThirtytwoA,
  BHealthanddiseaseThirtytwoB:state.BHealthanddiseaseThirtytwoB,
  BHealthanddiseaseThirtytwoC:state.BHealthanddiseaseThirtytwoC,
  BHealthanddiseaseThirtytwoD:state.BHealthanddiseaseThirtytwoD,
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
    optAtwentynine:()=>dispatch(optAtwentynine()),
    optBtwentynine:()=>dispatch(optBtwentynine()),
    optCtwentynine:()=>dispatch(optCtwentynine()),
    optDtwentynine:()=>dispatch(optDtwentynine()),
    statUpdatetwentynine:()=>dispatch(statUpdatetwentynine()),
    statUpdateAtwentynine:()=>dispatch(statUpdateAtwentynine()),
    statUpdateMtwentynine:()=>dispatch(statUpdateMtwentynine()),
    statUpdateNtwentynine:()=>dispatch(statUpdateNtwentynine()),
    statUpdateKtwentynine:()=>dispatch(statUpdateKtwentynine()),
    btnOnetwentynine:()=>dispatch(btnOnetwentynine()),
    btnTwotwentynine:()=>dispatch(btnTwotwentynine()),
    btnThreetwentynine:()=>dispatch(btnThreetwentynine()),
    btnFourtwentynine:()=>dispatch(btnFourtwentynine()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (AVthirty)