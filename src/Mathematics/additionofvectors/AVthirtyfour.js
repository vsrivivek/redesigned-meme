import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirtythree,optBthirtythree,optCthirtythree,optDthirtythree,btnOnethirtythree,btnTwothirtythree,btnThreethirtythree,btnFourthirtythree,statUpdatethirtythree,statUpdateAthirtythree,statUpdateKthirtythree,statUpdateMthirtythree,statUpdateNthirtythree,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import AVtimer from './AVtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function AVthirtyfour(props) {
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
    var stat=props.statusthirtythree;
    var opt=props.optionthirtythree

  const [optionthirtythree, setOptionthirtythree] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirtythree(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirtythree==="a"){
   props.optAthirtythree()
 }
 if(optionthirtythree==="b"){
   props.optBthirtythree()
 }
 if(optionthirtythree==="c"){
   props.optCthirtythree()
 }
 if(optionthirtythree==="d"){
   props.optDthirtythree()
 }
}

 useEffect(()=>{
  setOptionthirtythree(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirtythree===""){
  props.nextOne();
  props.statUpdatethirtythree();
  props.btnOnethirtythree()
  
 }
 
  else if (optionthirtythree==="a"){
   props.nextTwo();
   props.statUpdateAthirtythree();
   props.btnFourthirtythree()
  
   
  }
  else if (optionthirtythree==="b"){
    props.nextTwo();
    props.statUpdateAthirtythree();
    props.btnFourthirtythree()
   }
   else if (optionthirtythree==="c"){
    props.nextTwo();
    props.statUpdateAthirtythree();
    props.btnFourthirtythree()
   }
   else if (optionthirtythree==="d"){
    props.nextTwo();
    props.statUpdateAthirtythree();
    props.btnFourthirtythree()
   }}
   else if (stat==="Not Answered"){
     if(optionthirtythree===""){
    props.nextThree();
    props.statUpdateKthirtythree();
    props.btnOnethirtythree()
    
   }
   
    else if (optionthirtythree==="a"){
     props.nextFour();
     props.statUpdateAthirtythree();
     props.btnFourthirtythree()
     
    }
    else if (optionthirtythree==="b"){
      props.nextFour();
      props.statUpdateAthirtythree();
      props.btnFourthirtythree()
      
     }
     else if (optionthirtythree==="c"){
      props.nextFour();
      props.statUpdateAthirtythree();
      props.btnFourthirtythree()
      
     }
     else if ( optionthirtythree==="d"){
      props.nextFour();
      props.statUpdateAthirtythree();
      props.btnFourthirtythree()
      
     }}
     else if (stat==="Marked"){
     if(optionthirtythree===""){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnThreethirtythree()
      
     }
          else if (optionthirtythree==="a"){
      props.mfrFive();
      props.statUpdateNthirtythree();
      props.btnThreethirtythree()

     }
     else if (optionthirtythree==="b"){
       props.mfrFive();
       props.statUpdateNthirtythree();
       props.btnThreethirtythree()

      }
      else if (optionthirtythree==="c"){
       props.mfrFive();
       props.statUpdateNthirtythree();
       props.btnThreethirtythree()

      }
      else if (optionthirtythree==="d"){
       props.mfrFive();
       props.statUpdateNthirtythree();
       props.btnThreethirtythree()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirtythree==="a"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnThreethirtythree()

      
     }
     else if (optionthirtythree==="b"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnThreethirtythree() 
     }
     else if (optionthirtythree==="c"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnThreethirtythree()
     }
     else if (optionthirtythree==="d"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnThreethirtythree()
     }}
     else if(stat==="Answered"){
     if (optionthirtythree==="a"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()

      
     }
     else if (optionthirtythree==="b"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()

      
     }
     else if ( optionthirtythree==="c"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()
      
     }
     else if (optionthirtythree==="d"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirtythree===""){
  props.mfrOne();
  props.statUpdateMthirtythree();
  props.btnTwothirtythree()
 }
 
  else if (optionthirtythree==="a"){
   props.mfrTwo();
   props.statUpdateNthirtythree();
   props.btnThreethirtythree()
  }
  else if (optionthirtythree==="b"){
    props.mfrTwo();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
  

   }
   else if (optionthirtythree==="c"){
    props.mfrTwo();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
  
   }
   else if (optionthirtythree==="d"){
    props.mfrTwo();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirtythree===""){
  props.mfrThree();
  props.statUpdateMthirtythree();
  props.btnTwothirtythree();
 }
 else if (optionthirtythree==="a"){
  props.mfrFour();
  props.statUpdateNthirtythree();
  props.btnThreethirtythree()
 }
 else if (optionthirtythree==="b"){
   props.mfrFour();
   props.statUpdateNthirtythree();
   props.btnThreethirtythree()
  }
  else if (optionthirtythree==="c"){
   props.mfrFour();
   props.statUpdateNthirtythree();
   props.btnThreethirtythree()
  }
  else if (optionthirtythree==="d"){
   props.mfrFour();
   props.statUpdateNthirtythree();
  props.btnThreethirtythree()
  }}
  else if (stat==="Marked"){
    if(optionthirtythree===""){
    props.nextThree();
    props.statUpdateKthirtythree();
    props.btnTwothirtythree();
   }
   else if (optionthirtythree==="a"){
    props.mfrFive();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()


   }
   else if (optionthirtythree==="b"){
    props.mfrFive();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="c"){
    props.mfrFive();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="d"){
    props.mfrFive();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirtythree==="a"){
    props.nextThree();
    props.statUpdateKthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="b"){
    props.nextThree();
    props.statUpdateKthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="c"){
    props.nextThree();
    props.statUpdateKthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="d"){
    props.nextThree();
    props.statUpdateKthirtythree();
    props.btnThreethirtythree()
   }}
   else if (stat==="Answered"){
     if(optionthirtythree==="a"){
    props.mfrSix();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="b"){
    props.mfrSix();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="c"){
    props.mfrSix();
    props.statUpdateNthirtythree();
    props.btnThreethirtythree()
   }
   else if (optionthirtythree==="d"){
    props.mfrSix();
    props.statUpdateNthirtythree();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirtythree===""){
    props.nexttwo();
    props.statUpdatethirtythree();
    props.btnOnethirtythree()
  }
  
   else if (optionthirtythree==="a"){
    props.nextTwo();
    props.statUpdateAthirtythree();
    props.btnFourthirtythree()
   }
   else if (optionthirtythree==="b"){
     props.nextTwo();
     props.statUpdateAthirtythree();
     props.btnFourthirtythree()
    }
    else if (optionthirtythree==="c"){
     props.nextTwo();
     props.statUpdateAthirtythree();
     props.btnFourthirtythree()
    }
    else if (optionthirtythree==="d"){
     props.nextTwo();
     props.statUpdateAthirtythree();
     props.btnFourthirtythree()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirtythree===""){
   props.nextThree();
   props.statUpdateKthirtythree();
   props.btnOnethirtythree()
  }
  else if (optionthirtythree==="a"){
   props.nextFour();
   props.statUpdateAthirtythree();
   props.btnFourthirtythree()
  }
  else if (optionthirtythree==="b"){
    props.nextFour();
    props.statUpdateAthirtythree();
    props.btnFourthirtythree()
   }
   else if (optionthirtythree==="c"){
    props.nextFour();
    props.statUpdateAthirtythree();
    props.btnFourthirtythree()
   }
   else if (optionthirtythree==="d"){
    props.nextFour();
    props.statUpdateAthirtythree();
    props.btnFourthirtythree()
   }}
   else if (stat==="Marked"){
     if(optionthirtythree===""){
     props.nextThree();
     props.statUpdateKthirtythree();
     props.btnTwothirtythree()
    }
    else if (optionthirtythree==="a"){
     props.mfrFive();
     props.statUpdateNthirtythree();
     props.btnThreethirtythree()
    }
    else if (optionthirtythree==="b"){
     props.mfrFive();
     props.statUpdateNthirtythree();
     props.btnThreethirtythree()
    }
    else if ( optionthirtythree==="c"){
     props.mfrFive();
     props.statUpdateNthirtythree();
     props.btnThreethirtythree()
    }
    else if ( optionthirtythree==="d"){
     props.mfrFive();
     props.statUpdateNthirtythree();
     props.btnThreethirtythree()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirtythree==="a"){
     props.mfrSeven();
     props.statUpdateAthirtythree();
     props.btnFourthirtythree()
    }
    else if (optionthirtythree==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirtythree();
      props.btnFourthirtythree()
    }
    else if (optionthirtythree==="c"){
      props.mfrSeven();
      props.statUpdateAthirtythree();
      props.btnFourthirtythree()
    }
    else if ( optionthirtythree==="d"){
      props.mfrSeven();
      props.statUpdateAthirtythree();
      props.btnFourthirtythree()
    }}
    else if (stat==="Answered"){
      if(optionthirtythree==="a"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()
    }
    else if (optionthirtythree==="b"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()
    }
    else if (optionthirtythree==="c"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()
    }
    else if (optionthirtythree==="d"){
      props.nextThree();
      props.statUpdateKthirtythree();
      props.btnFourthirtythree()
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
      {/* <h5>Question No.34</h5> */}
    <p>  <i>Question No.34</i><br></br> If the line joining the points <b>i</b>+<b>j</b> and 3<b>i</b>+<b>j</b>-<b>k</b> meets the plane that passes through the point 2<b>i</b>+4<b>j</b> and paraellel to the vectors 3<b>j</b>+5<b>k</b> and 3<b>i</b>-<b>k</b> at P, then the position vector of the point P is
<br></br><b>[EAMCET 18AP]</b>
</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirtythree=== 'a'}
          onClick={handleChange}
        /> -27<b>i</b>+<b>j</b>+14<b>k</b>
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirtythree === 'b'}
          onClick={handleChange}
        /> 29<b>i</b>+<b>j</b>-14<b>k</b>
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirtythree === 'c'}
          onClick={handleChange}
        /> -14<b>i</b>+89<b>j</b>+3<b>k</b>
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirtythree === 'd'}
          onClick={handleChange}
        /> 2<b>i</b>+5<b>j</b>-7<b>k</b>
        
      </div>
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/AVthirtyfive'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/AVthirtyfive'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/AVthirtyfive'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/AVthirtythree'))}>Previous</button>
    
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
     statusthirtythree:state.statusthirtythree,
     optionthirtythree:state.optionthirtythree,
     BHealthanddiseaseThirtysix:state.BHealthanddiseaseThirtysix,
  BHealthanddiseaseThirtysixA:state.BHealthanddiseaseThirtysixA,
  BHealthanddiseaseThirtysixB:state.BHealthanddiseaseThirtysixB,
  BHealthanddiseaseThirtysixC:state.BHealthanddiseaseThirtysixC,
  BHealthanddiseaseThirtysixD:state.BHealthanddiseaseThirtysixD,
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
    optAthirtythree:()=>dispatch(optAthirtythree()),
    optBthirtythree:()=>dispatch(optBthirtythree()),
    optCthirtythree:()=>dispatch(optCthirtythree()),
    optDthirtythree:()=>dispatch(optDthirtythree()),
    statUpdatethirtythree:()=>dispatch(statUpdatethirtythree()),
    statUpdateAthirtythree:()=>dispatch(statUpdateAthirtythree()),
    statUpdateMthirtythree:()=>dispatch(statUpdateMthirtythree()),
    statUpdateNthirtythree:()=>dispatch(statUpdateNthirtythree()),
    statUpdateKthirtythree:()=>dispatch(statUpdateKthirtythree()),
    btnOnethirtythree:()=>dispatch(btnOnethirtythree()),
    btnTwothirtythree:()=>dispatch(btnTwothirtythree()),
    btnThreethirtythree:()=>dispatch(btnThreethirtythree()),
    btnFourthirtythree:()=>dispatch(btnFourthirtythree()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (AVthirtyfour)