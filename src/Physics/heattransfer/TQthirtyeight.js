import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirtyseven,optBthirtyseven,optCthirtyseven,optDthirtyseven,btnOnethirtyseven,btnTwothirtyseven,btnThreethirtyseven,btnFourthirtyseven,statUpdatethirtyseven,statUpdateAthirtyseven,statUpdateKthirtyseven,statUpdateMthirtyseven,statUpdateNthirtyseven,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import TQtimer from './TQtimer';
import Logo from "../../redux/Images/Logo.jpg";
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';




function TQthirtyeight(props) {
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
    "width": "245px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const navigate = useNavigate()  
    var stat=props.statusthirtyseven;
    var opt=props.optionthirtyseven

  const [optionthirtyseven, setOptionthirtyseven] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirtyseven(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirtyseven==="a"){
   props.optAthirtyseven()
 }
 if(optionthirtyseven==="b"){
   props.optBthirtyseven()
 }
 if(optionthirtyseven==="c"){
   props.optCthirtyseven()
 }
 if(optionthirtyseven==="d"){
   props.optDthirtyseven()
 }
}

 useEffect(()=>{
  setOptionthirtyseven(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirtyseven===""){
  props.nextOne();
  props.statUpdatethirtyseven();
  props.btnOnethirtyseven()
  
 }
 
  else if (optionthirtyseven==="a"){
   props.nextTwo();
   props.statUpdateAthirtyseven();
   props.btnFourthirtyseven()
  
   
  }
  else if (optionthirtyseven==="b"){
    props.nextTwo();
    props.statUpdateAthirtyseven();
    props.btnFourthirtyseven()
   }
   else if (optionthirtyseven==="c"){
    props.nextTwo();
    props.statUpdateAthirtyseven();
    props.btnFourthirtyseven()
   }
   else if (optionthirtyseven==="d"){
    props.nextTwo();
    props.statUpdateAthirtyseven();
    props.btnFourthirtyseven()
   }}
   else if (stat==="Not Answered"){
     if(optionthirtyseven===""){
    props.nextThree();
    props.statUpdateKthirtyseven();
    props.btnOnethirtyseven()
    
   }
   
    else if (optionthirtyseven==="a"){
     props.nextFour();
     props.statUpdateAthirtyseven();
     props.btnFourthirtyseven()
     
    }
    else if (optionthirtyseven==="b"){
      props.nextFour();
      props.statUpdateAthirtyseven();
      props.btnFourthirtyseven()
      
     }
     else if (optionthirtyseven==="c"){
      props.nextFour();
      props.statUpdateAthirtyseven();
      props.btnFourthirtyseven()
      
     }
     else if ( optionthirtyseven==="d"){
      props.nextFour();
      props.statUpdateAthirtyseven();
      props.btnFourthirtyseven()
      
     }}
     else if (stat==="Marked"){
     if(optionthirtyseven===""){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnThreethirtyseven()
      
     }
          else if (optionthirtyseven==="a"){
      props.mfrFive();
      props.statUpdateNthirtyseven();
      props.btnThreethirtyseven()

     }
     else if (optionthirtyseven==="b"){
       props.mfrFive();
       props.statUpdateNthirtyseven();
       props.btnThreethirtyseven()

      }
      else if (optionthirtyseven==="c"){
       props.mfrFive();
       props.statUpdateNthirtyseven();
       props.btnThreethirtyseven()

      }
      else if (optionthirtyseven==="d"){
       props.mfrFive();
       props.statUpdateNthirtyseven();
       props.btnThreethirtyseven()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirtyseven==="a"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnThreethirtyseven()

      
     }
     else if (optionthirtyseven==="b"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnThreethirtyseven() 
     }
     else if (optionthirtyseven==="c"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnThreethirtyseven()
     }
     else if (optionthirtyseven==="d"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnThreethirtyseven()
     }}
     else if(stat==="Answered"){
     if (optionthirtyseven==="a"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()

      
     }
     else if (optionthirtyseven==="b"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()

      
     }
     else if ( optionthirtyseven==="c"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()
      
     }
     else if (optionthirtyseven==="d"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirtyseven===""){
  props.mfrOne();
  props.statUpdateMthirtyseven();
  props.btnTwothirtyseven()
 }
 
  else if (optionthirtyseven==="a"){
   props.mfrTwo();
   props.statUpdateNthirtyseven();
   props.btnThreethirtyseven()
  }
  else if (optionthirtyseven==="b"){
    props.mfrTwo();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
  

   }
   else if (optionthirtyseven==="c"){
    props.mfrTwo();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
  
   }
   else if (optionthirtyseven==="d"){
    props.mfrTwo();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirtyseven===""){
  props.mfrThree();
  props.statUpdateMthirtyseven();
  props.btnTwothirtyseven();
 }
 else if (optionthirtyseven==="a"){
  props.mfrFour();
  props.statUpdateNthirtyseven();
  props.btnThreethirtyseven()
 }
 else if (optionthirtyseven==="b"){
   props.mfrFour();
   props.statUpdateNthirtyseven();
   props.btnThreethirtyseven()
  }
  else if (optionthirtyseven==="c"){
   props.mfrFour();
   props.statUpdateNthirtyseven();
   props.btnThreethirtyseven()
  }
  else if (optionthirtyseven==="d"){
   props.mfrFour();
   props.statUpdateNthirtyseven();
  props.btnThreethirtyseven()
  }}
  else if (stat==="Marked"){
    if(optionthirtyseven===""){
    props.nextThree();
    props.statUpdateKthirtyseven();
    props.btnTwothirtyseven();
   }
   else if (optionthirtyseven==="a"){
    props.mfrFive();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()


   }
   else if (optionthirtyseven==="b"){
    props.mfrFive();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="c"){
    props.mfrFive();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="d"){
    props.mfrFive();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirtyseven==="a"){
    props.nextThree();
    props.statUpdateKthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="b"){
    props.nextThree();
    props.statUpdateKthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="c"){
    props.nextThree();
    props.statUpdateKthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="d"){
    props.nextThree();
    props.statUpdateKthirtyseven();
    props.btnThreethirtyseven()
   }}
   else if (stat==="Answered"){
     if(optionthirtyseven==="a"){
    props.mfrSix();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="b"){
    props.mfrSix();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="c"){
    props.mfrSix();
    props.statUpdateNthirtyseven();
    props.btnThreethirtyseven()
   }
   else if (optionthirtyseven==="d"){
    props.mfrSix();
    props.statUpdateNthirtyseven();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirtyseven===""){
    props.nexttwo();
    props.statUpdatethirtyseven();
    props.btnOnethirtyseven()
  }
  
   else if (optionthirtyseven==="a"){
    props.nextTwo();
    props.statUpdateAthirtyseven();
    props.btnFourthirtyseven()
   }
   else if (optionthirtyseven==="b"){
     props.nextTwo();
     props.statUpdateAthirtyseven();
     props.btnFourthirtyseven()
    }
    else if (optionthirtyseven==="c"){
     props.nextTwo();
     props.statUpdateAthirtyseven();
     props.btnFourthirtyseven()
    }
    else if (optionthirtyseven==="d"){
     props.nextTwo();
     props.statUpdateAthirtyseven();
     props.btnFourthirtyseven()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirtyseven===""){
   props.nextThree();
   props.statUpdateKthirtyseven();
   props.btnOnethirtyseven()
  }
  else if (optionthirtyseven==="a"){
   props.nextFour();
   props.statUpdateAthirtyseven();
   props.btnFourthirtyseven()
  }
  else if (optionthirtyseven==="b"){
    props.nextFour();
    props.statUpdateAthirtyseven();
    props.btnFourthirtyseven()
   }
   else if (optionthirtyseven==="c"){
    props.nextFour();
    props.statUpdateAthirtyseven();
    props.btnFourthirtyseven()
   }
   else if (optionthirtyseven==="d"){
    props.nextFour();
    props.statUpdateAthirtyseven();
    props.btnFourthirtyseven()
   }}
   else if (stat==="Marked"){
     if(optionthirtyseven===""){
     props.nextThree();
     props.statUpdateKthirtyseven();
     props.btnTwothirtyseven()
    }
    else if (optionthirtyseven==="a"){
     props.mfrFive();
     props.statUpdateNthirtyseven();
     props.btnThreethirtyseven()
    }
    else if (optionthirtyseven==="b"){
     props.mfrFive();
     props.statUpdateNthirtyseven();
     props.btnThreethirtyseven()
    }
    else if ( optionthirtyseven==="c"){
     props.mfrFive();
     props.statUpdateNthirtyseven();
     props.btnThreethirtyseven()
    }
    else if ( optionthirtyseven==="d"){
     props.mfrFive();
     props.statUpdateNthirtyseven();
     props.btnThreethirtyseven()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirtyseven==="a"){
     props.mfrSeven();
     props.statUpdateAthirtyseven();
     props.btnFourthirtyseven()
    }
    else if (optionthirtyseven==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirtyseven();
      props.btnFourthirtyseven()
    }
    else if (optionthirtyseven==="c"){
      props.mfrSeven();
      props.statUpdateAthirtyseven();
      props.btnFourthirtyseven()
    }
    else if ( optionthirtyseven==="d"){
      props.mfrSeven();
      props.statUpdateAthirtyseven();
      props.btnFourthirtyseven()
    }}
    else if (stat==="Answered"){
      if(optionthirtyseven==="a"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()
    }
    else if (optionthirtyseven==="b"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()
    }
    else if (optionthirtyseven==="c"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()
    }
    else if (optionthirtyseven==="d"){
      props.nextThree();
      props.statUpdateKthirtyseven();
      props.btnFourthirtyseven()
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
     <p style={wStyle}>Test Name: <b>Heat Transfer</b></p>
     <p style={wStyle1}>Name of the Candidate: <b>{props.name}</b></p>  
    <form>
    <p><i>Question No.38</i><br></br> A metal rod of length 10cm and area of cross section 2.8x10<sup>-4</sup>m<sup>2</sup> is covered with a non-conducting substance. One end of it is maintained at 80<sup>o</sup>C, while the other end is kept at 0<sup>o</sup>C. It is found that 20g of ice melts in 5 min. The thermal conductivity of the metal in Js<sup>-1</sup>m<sup>-1</sup>K<sup>-1</sup> is (Latent heat of ice is 80calg<sup>-1</sup>) </p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirtyseven === 'a'}
          onClick={handleChange}
        /> 70
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirtyseven === 'b'}
          onClick={handleChange}
        /> 80
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirtyseven === 'c'}
          onClick={handleChange}
        /> 90
       
             </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirtyseven === 'd'}
          onClick={handleChange}
        /> 100

      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/TQthirtynine'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/TQthirtynine'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/TQthirtynine'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/TQthirtyseven'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><TQtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/TQconfirm'))}>Submit Test</button>
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
     statusthirtyseven:state.statusthirtyseven,
     optionthirtyseven:state.optionthirtyseven,
     BHealthanddiseaseforty:state.BHealthanddiseaseforty,
  BHealthanddiseasefortyA:state.BHealthanddiseasefortyA,
  BHealthanddiseasefortyB:state.BHealthanddiseasefortyB,
  BHealthanddiseasefortyC:state.BHealthanddiseasefortyC,
  BHealthanddiseasefortyD:state.BHealthanddiseasefortyD,
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
    optAthirtyseven:()=>dispatch(optAthirtyseven()),
    optBthirtyseven:()=>dispatch(optBthirtyseven()),
    optCthirtyseven:()=>dispatch(optCthirtyseven()),
    optDthirtyseven:()=>dispatch(optDthirtyseven()),
    statUpdatethirtyseven:()=>dispatch(statUpdatethirtyseven()),
    statUpdateAthirtyseven:()=>dispatch(statUpdateAthirtyseven()),
    statUpdateMthirtyseven:()=>dispatch(statUpdateMthirtyseven()),
    statUpdateNthirtyseven:()=>dispatch(statUpdateNthirtyseven()),
    statUpdateKthirtyseven:()=>dispatch(statUpdateKthirtyseven()),
    btnOnethirtyseven:()=>dispatch(btnOnethirtyseven()),
    btnTwothirtyseven:()=>dispatch(btnTwothirtyseven()),
    btnThreethirtyseven:()=>dispatch(btnThreethirtyseven()),
    btnFourthirtyseven:()=>dispatch(btnFourthirtyseven()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (TQthirtyeight)