import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirtyfive,optBthirtyfive,optCthirtyfive,optDthirtyfive,btnOnethirtyfive,btnTwothirtyfive,btnThreethirtyfive,btnFourthirtyfive,statUpdatethirtyfive,statUpdateAthirtyfive,statUpdateKthirtyfive,statUpdateMthirtyfive,statUpdateNthirtyfive,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
// import Timer from '../../components/Timer ';
import DYtimer from './DYtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'









function DYthirtySix(props) {
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
    "width": "195px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const navigate = useNavigate()  
    var stat=props.statusthirtyfive;
    var opt=props.optionthirtyfive

  const [optionthirtyfive, setOptionthirtyfive] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirtyfive(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirtyfive==="a"){
   props.optAthirtyfive()
 }
 if(optionthirtyfive==="b"){
   props.optBthirtyfive()
 }
 if(optionthirtyfive==="c"){
   props.optCthirtyfive()
 }
 if(optionthirtyfive==="d"){
   props.optDthirtyfive()
 }
}

 useEffect(()=>{
  setOptionthirtyfive(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirtyfive===""){
  props.nextOne();
  props.statUpdatethirtyfive();
  props.btnOnethirtyfive()
  
 }
 
  else if (optionthirtyfive==="a"){
   props.nextTwo();
   props.statUpdateAthirtyfive();
   props.btnFourthirtyfive()
  
   
  }
  else if (optionthirtyfive==="b"){
    props.nextTwo();
    props.statUpdateAthirtyfive();
    props.btnFourthirtyfive()
   }
   else if (optionthirtyfive==="c"){
    props.nextTwo();
    props.statUpdateAthirtyfive();
    props.btnFourthirtyfive()
   }
   else if (optionthirtyfive==="d"){
    props.nextTwo();
    props.statUpdateAthirtyfive();
    props.btnFourthirtyfive()
   }}
   else if (stat==="Not Answered"){
     if(optionthirtyfive===""){
    props.nextThree();
    props.statUpdateKthirtyfive();
    props.btnOnethirtyfive()
    
   }
   
    else if (optionthirtyfive==="a"){
     props.nextFour();
     props.statUpdateAthirtyfive();
     props.btnFourthirtyfive()
     
    }
    else if (optionthirtyfive==="b"){
      props.nextFour();
      props.statUpdateAthirtyfive();
      props.btnFourthirtyfive()
      
     }
     else if (optionthirtyfive==="c"){
      props.nextFour();
      props.statUpdateAthirtyfive();
      props.btnFourthirtyfive()
      
     }
     else if ( optionthirtyfive==="d"){
      props.nextFour();
      props.statUpdateAthirtyfive();
      props.btnFourthirtyfive()
      
     }}
     else if (stat==="Marked"){
     if(optionthirtyfive===""){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnThreethirtyfive()
      
     }
          else if (optionthirtyfive==="a"){
      props.mfrFive();
      props.statUpdateNthirtyfive();
      props.btnThreethirtyfive()

     }
     else if (optionthirtyfive==="b"){
       props.mfrFive();
       props.statUpdateNthirtyfive();
       props.btnThreethirtyfive()

      }
      else if (optionthirtyfive==="c"){
       props.mfrFive();
       props.statUpdateNthirtyfive();
       props.btnThreethirtyfive()

      }
      else if (optionthirtyfive==="d"){
       props.mfrFive();
       props.statUpdateNthirtyfive();
       props.btnThreethirtyfive()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirtyfive==="a"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnThreethirtyfive()

      
     }
     else if (optionthirtyfive==="b"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnThreethirtyfive() 
     }
     else if (optionthirtyfive==="c"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnThreethirtyfive()
     }
     else if (optionthirtyfive==="d"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnThreethirtyfive()
     }}
     else if(stat==="Answered"){
     if (optionthirtyfive==="a"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()

      
     }
     else if (optionthirtyfive==="b"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()

      
     }
     else if ( optionthirtyfive==="c"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()
      
     }
     else if (optionthirtyfive==="d"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirtyfive===""){
  props.mfrOne();
  props.statUpdateMthirtyfive();
  props.btnTwothirtyfive()
 }
 
  else if (optionthirtyfive==="a"){
   props.mfrTwo();
   props.statUpdateNthirtyfive();
   props.btnThreethirtyfive()
  }
  else if (optionthirtyfive==="b"){
    props.mfrTwo();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
  

   }
   else if (optionthirtyfive==="c"){
    props.mfrTwo();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
  
   }
   else if (optionthirtyfive==="d"){
    props.mfrTwo();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirtyfive===""){
  props.mfrThree();
  props.statUpdateMthirtyfive();
  props.btnTwothirtyfive();
 }
 else if (optionthirtyfive==="a"){
  props.mfrFour();
  props.statUpdateNthirtyfive();
  props.btnThreethirtyfive()
 }
 else if (optionthirtyfive==="b"){
   props.mfrFour();
   props.statUpdateNthirtyfive();
   props.btnThreethirtyfive()
  }
  else if (optionthirtyfive==="c"){
   props.mfrFour();
   props.statUpdateNthirtyfive();
   props.btnThreethirtyfive()
  }
  else if (optionthirtyfive==="d"){
   props.mfrFour();
   props.statUpdateNthirtyfive();
  props.btnThreethirtyfive()
  }}
  else if (stat==="Marked"){
    if(optionthirtyfive===""){
    props.nextThree();
    props.statUpdateKthirtyfive();
    props.btnTwothirtyfive();
   }
   else if (optionthirtyfive==="a"){
    props.mfrFive();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()


   }
   else if (optionthirtyfive==="b"){
    props.mfrFive();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="c"){
    props.mfrFive();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="d"){
    props.mfrFive();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirtyfive==="a"){
    props.nextThree();
    props.statUpdateKthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="b"){
    props.nextThree();
    props.statUpdateKthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="c"){
    props.nextThree();
    props.statUpdateKthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="d"){
    props.nextThree();
    props.statUpdateKthirtyfive();
    props.btnThreethirtyfive()
   }}
   else if (stat==="Answered"){
     if(optionthirtyfive==="a"){
    props.mfrSix();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="b"){
    props.mfrSix();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="c"){
    props.mfrSix();
    props.statUpdateNthirtyfive();
    props.btnThreethirtyfive()
   }
   else if (optionthirtyfive==="d"){
    props.mfrSix();
    props.statUpdateNthirtyfive();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirtyfive===""){
    props.nexttwo();
    props.statUpdatethirtyfive();
    props.btnOnethirtyfive()
  }
  
   else if (optionthirtyfive==="a"){
    props.nextTwo();
    props.statUpdateAthirtyfive();
    props.btnFourthirtyfive()
   }
   else if (optionthirtyfive==="b"){
     props.nextTwo();
     props.statUpdateAthirtyfive();
     props.btnFourthirtyfive()
    }
    else if (optionthirtyfive==="c"){
     props.nextTwo();
     props.statUpdateAthirtyfive();
     props.btnFourthirtyfive()
    }
    else if (optionthirtyfive==="d"){
     props.nextTwo();
     props.statUpdateAthirtyfive();
     props.btnFourthirtyfive()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirtyfive===""){
   props.nextThree();
   props.statUpdateKthirtyfive();
   props.btnOnethirtyfive()
  }
  else if (optionthirtyfive==="a"){
   props.nextFour();
   props.statUpdateAthirtyfive();
   props.btnFourthirtyfive()
  }
  else if (optionthirtyfive==="b"){
    props.nextFour();
    props.statUpdateAthirtyfive();
    props.btnFourthirtyfive()
   }
   else if (optionthirtyfive==="c"){
    props.nextFour();
    props.statUpdateAthirtyfive();
    props.btnFourthirtyfive()
   }
   else if (optionthirtyfive==="d"){
    props.nextFour();
    props.statUpdateAthirtyfive();
    props.btnFourthirtyfive()
   }}
   else if (stat==="Marked"){
     if(optionthirtyfive===""){
     props.nextThree();
     props.statUpdateKthirtyfive();
     props.btnTwothirtyfive()
    }
    else if (optionthirtyfive==="a"){
     props.mfrFive();
     props.statUpdateNthirtyfive();
     props.btnThreethirtyfive()
    }
    else if (optionthirtyfive==="b"){
     props.mfrFive();
     props.statUpdateNthirtyfive();
     props.btnThreethirtyfive()
    }
    else if ( optionthirtyfive==="c"){
     props.mfrFive();
     props.statUpdateNthirtyfive();
     props.btnThreethirtyfive()
    }
    else if ( optionthirtyfive==="d"){
     props.mfrFive();
     props.statUpdateNthirtyfive();
     props.btnThreethirtyfive()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirtyfive==="a"){
     props.mfrSeven();
     props.statUpdateAthirtyfive();
     props.btnFourthirtyfive()
    }
    else if (optionthirtyfive==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirtyfive();
      props.btnFourthirtyfive()
    }
    else if (optionthirtyfive==="c"){
      props.mfrSeven();
      props.statUpdateAthirtyfive();
      props.btnFourthirtyfive()
    }
    else if ( optionthirtyfive==="d"){
      props.mfrSeven();
      props.statUpdateAthirtyfive();
      props.btnFourthirtyfive()
    }}
    else if (stat==="Answered"){
      if(optionthirtyfive==="a"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()
    }
    else if (optionthirtyfive==="b"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()
    }
    else if (optionthirtyfive==="c"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()
    }
    else if (optionthirtyfive==="d"){
      props.nextThree();
      props.statUpdateKthirtyfive();
      props.btnFourthirtyfive()
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
           </div><br></br>
        {/* <div className={props.title}>
          <h3>Test On: Diseases</h3>
        </div> */}
    <div className= {props.total}>
     <div className={props.left}>
     <p style={wStyle}>Test Name: <b>Diseases</b></p>
     <p style={wStyle1}>Name Of the Candidate: <b>{props.name}</b></p>  

    <form>
      <h5>Question No.36</h5>
    <p>Which of the following measures help to control the spread of malaria and filariasis?<br></br> A)	Avoiding stagnation of water in and around residential areas <br></br>B)	Spraying of insecticides in ditches and drainage areas <br></br>C)	Introducing larvivorus fishes into drainage ponds <br></br>D)	Use of mosquito nets and mosquito repellants <br></br>The correct combination is</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirtyfive=== 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtyeightA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirtyfive === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtyeightB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirtyfive === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtyeightC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirtyfive === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtyeightD}
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/DYthirtyseven'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/DYthirtyseven'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/DYthirtyseven'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/DYthirtyfive'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
        {/* <div><p>Name Of the Candidate: <b>{props.name}</b></p></div> */}
          <div className={props.timerdiv}><DYtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/DYconfirm'))}>Submit Test</button>
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
     statusthirtyfive:state.statusthirtyfive,
     optionthirtyfive:state.optionthirtyfive,
     BHealthanddiseaseThirtyeight:state.BHealthanddiseaseThirtyeight,
  BHealthanddiseaseThirtyeightA:state.BHealthanddiseaseThirtyeightA,
  BHealthanddiseaseThirtyeightB:state.BHealthanddiseaseThirtyeightB,
  BHealthanddiseaseThirtyeightC:state.BHealthanddiseaseThirtyeightC,
  BHealthanddiseaseThirtyeightD:state.BHealthanddiseaseThirtyeightD,
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
    optAthirtyfive:()=>dispatch(optAthirtyfive()),
    optBthirtyfive:()=>dispatch(optBthirtyfive()),
    optCthirtyfive:()=>dispatch(optCthirtyfive()),
    optDthirtyfive:()=>dispatch(optDthirtyfive()),
    statUpdatethirtyfive:()=>dispatch(statUpdatethirtyfive()),
    statUpdateAthirtyfive:()=>dispatch(statUpdateAthirtyfive()),
    statUpdateMthirtyfive:()=>dispatch(statUpdateMthirtyfive()),
    statUpdateNthirtyfive:()=>dispatch(statUpdateNthirtyfive()),
    statUpdateKthirtyfive:()=>dispatch(statUpdateKthirtyfive()),
    btnOnethirtyfive:()=>dispatch(btnOnethirtyfive()),
    btnTwothirtyfive:()=>dispatch(btnTwothirtyfive()),
    btnThreethirtyfive:()=>dispatch(btnThreethirtyfive()),
    btnFourthirtyfive:()=>dispatch(btnFourthirtyfive()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (DYthirtySix)