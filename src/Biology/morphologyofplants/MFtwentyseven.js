import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwentysix,optBtwentysix,optCtwentysix,optDtwentysix,btnOnetwentysix,btnTwotwentysix,btnThreetwentysix,btnFourtwentysix,statUpdatetwentysix,statUpdateAtwentysix,statUpdateKtwentysix,statUpdateMtwentysix,statUpdateNtwentysix,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import MFtimer from '../../components/MFtimer ';
// import QuestionNumbers from '../biologicalclassification/QuestionNumbers';
// import CakeNumbers from '../../components/CakeNumbers';

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import MFtimer from './MFtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function MFtwentyseven(props) {
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
    "width": "400px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const navigate = useNavigate()  
    var stat=props.statustwentysix;
    var opt=props.optiontwentysix

  const [optiontwentysix, setOptiontwentysix] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptiontwentysix(event.target.value);
    
  }
  
function optionChange(){
 if(optiontwentysix==="a"){
   props.optAtwentysix()
 }
 if(optiontwentysix==="b"){
   props.optBtwentysix()
 }
 if(optiontwentysix==="c"){
   props.optCtwentysix()
 }
 if(optiontwentysix==="d"){
   props.optDtwentysix()
 }
}

 useEffect(()=>{
  setOptiontwentysix(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optiontwentysix===""){
  props.nextOne();
  props.statUpdatetwentysix();
  props.btnOnetwentysix()
  
 }
 
  else if (optiontwentysix==="a"){
   props.nextTwo();
   props.statUpdateAtwentysix();
   props.btnFourtwentysix()
  
   
  }
  else if (optiontwentysix==="b"){
    props.nextTwo();
    props.statUpdateAtwentysix();
    props.btnFourtwentysix()
   }
   else if (optiontwentysix==="c"){
    props.nextTwo();
    props.statUpdateAtwentysix();
    props.btnFourtwentysix()
   }
   else if (optiontwentysix==="d"){
    props.nextTwo();
    props.statUpdateAtwentysix();
    props.btnFourtwentysix()
   }}
   else if (stat==="Not Answered"){
     if(optiontwentysix===""){
    props.nextThree();
    props.statUpdateKtwentysix();
    props.btnOnetwentysix()
    
   }
   
    else if (optiontwentysix==="a"){
     props.nextFour();
     props.statUpdateAtwentysix();
     props.btnFourtwentysix()
     
    }
    else if (optiontwentysix==="b"){
      props.nextFour();
      props.statUpdateAtwentysix();
      props.btnFourtwentysix()
      
     }
     else if (optiontwentysix==="c"){
      props.nextFour();
      props.statUpdateAtwentysix();
      props.btnFourtwentysix()
      
     }
     else if ( optiontwentysix==="d"){
      props.nextFour();
      props.statUpdateAtwentysix();
      props.btnFourtwentysix()
      
     }}
     else if (stat==="Marked"){
     if(optiontwentysix===""){
      props.nextThree();
      props.statUpdateKtwentysix();
      props.btnThreetwentysix()
      
     }
          else if (optiontwentysix==="a"){
      props.mfrFive();
      props.statUpdateNtwentysix();
      props.btnThreetwentysix()

     }
     else if (optiontwentysix==="b"){
       props.mfrFive();
       props.statUpdateNtwentysix();
       props.btnThreetwentysix()

      }
      else if (optiontwentysix==="c"){
       props.mfrFive();
       props.statUpdateNtwentysix();
       props.btnThreetwentysix()

      }
      else if (optiontwentysix==="d"){
       props.mfrFive();
       props.statUpdateNtwentysix();
       props.btnThreetwentysix()

        }}
     
     else if (stat==="Marked For Review"){
     if(optiontwentysix==="a"){
      props.nextThree();
      props.statUpdateKtwentysix();
      props.btnThreetwentysix()

      
     }
     else if (optiontwentysix==="b"){
      props.nextThree();
      props.statUpdateKtwentysix();
      props.btnThreetwentysix() 
     }
     else if (optiontwentysix==="c"){
      props.nextThree();
      props.statUpdateKtwentysix();
      props.btnThreetwentysix()
     }
     else if (optiontwentysix==="d"){
      props.nextThree();
      props.statUpdateKtwentysix();
      props.btnThreetwentysix()
     }}
     else if(stat==="Answered"){
     if (optiontwentysix==="a"){
      props.nextThree();
      props.statUpdateKtwentysix();
      props.btnFourtwentysix()

      
     }
     else if (optiontwentysix==="b"){
      props.nextThree();
      props.statUpdateKtwentysix();
      props.btnFourtwentysix()

      
     }
     else if ( optiontwentysix==="c"){
      props.nextThree();
      props.statUpdateKtwentysix();
      props.btnFourtwentysix()
      
     }
     else if (optiontwentysix==="d"){
      props.nextThree();
      props.statUpdateKtwentysix();
      props.btnFourtwentysix()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optiontwentysix===""){
  props.mfrOne();
  props.statUpdateMtwentysix();
  props.btnTwotwentysix()
 }
 
  else if (optiontwentysix==="a"){
   props.mfrTwo();
   props.statUpdateNtwentysix();
   props.btnThreetwentysix()
  }
  else if (optiontwentysix==="b"){
    props.mfrTwo();
    props.statUpdateNtwentysix();
    props.btnThreetwentysix()
  

   }
   else if (optiontwentysix==="c"){
    props.mfrTwo();
    props.statUpdateNtwentysix();
    props.btnThreetwentysix()
  
   }
   else if (optiontwentysix==="d"){
    props.mfrTwo();
    props.statUpdateNtwentysix();
    props.btnThreetwentysix()

   }}
  
 else if (stat==="Not Answered"){
   if(optiontwentysix===""){
  props.mfrThree();
  props.statUpdateMtwentysix();
  props.btnTwotwentysix();
 }
 else if (optiontwentysix==="a"){
  props.mfrFour();
  props.statUpdateNtwentysix();
  props.btnThreetwentysix()
 }
 else if (optiontwentysix==="b"){
   props.mfrFour();
   props.statUpdateNtwentysix();
   props.btnThreetwentysix()
  }
  else if (optiontwentysix==="c"){
   props.mfrFour();
   props.statUpdateNtwentysix();
   props.btnThreetwentysix()
  }
  else if (optiontwentysix==="d"){
   props.mfrFour();
   props.statUpdateNtwentysix();
  props.btnThreetwentysix()
  }}
  else if (stat==="Marked"){
    if(optiontwentysix===""){
    props.nextThree();
    props.statUpdateKtwentysix();
    props.btnTwotwentysix();
   }
   else if (optiontwentysix==="a"){
    props.mfrFive();
    props.statUpdateNtwentysix();
    props.btnThreetwentysix()


   }
   else if (optiontwentysix==="b"){
    props.mfrFive();
    props.statUpdateNtwentysix();
    props.btnThreetwentysix()
   }
   else if (optiontwentysix==="c"){
    props.mfrFive();
    props.statUpdateNtwentysix();
    props.btnThreetwentysix()
   }
   else if (optiontwentysix==="d"){
    props.mfrFive();
    props.statUpdateNtwentysix();
    props.btnThreetwentysix()
    }}
   else if (stat==="Marked For Review"){
     if(optiontwentysix==="a"){
    props.nextThree();
    props.statUpdateKtwentysix();
    props.btnThreetwentysix()
   }
   else if (optiontwentysix==="b"){
    props.nextThree();
    props.statUpdateKtwentysix();
    props.btnThreetwentysix()
   }
   else if (optiontwentysix==="c"){
    props.nextThree();
    props.statUpdateKtwentysix();
    props.btnThreetwentysix()
   }
   else if (optiontwentysix==="d"){
    props.nextThree();
    props.statUpdateKtwentysix();
    props.btnThreetwentysix()
   }}
   else if (stat==="Answered"){
     if(optiontwentysix==="a"){
    props.mfrSix();
    props.statUpdateNtwentysix();
    props.btnThreetwentysix()
   }
   else if (optiontwentysix==="b"){
    props.mfrSix();
    props.statUpdateNtwentysix();
    props.btnThreetwentysix()
   }
   else if (optiontwentysix==="c"){
    props.mfrSix();
    props.statUpdateNtwentysix();
    props.btnThreetwentysix()
   }
   else if (optiontwentysix==="d"){
    props.mfrSix();
    props.statUpdateNtwentysix();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optiontwentysix===""){
    props.nexttwo();
    props.statUpdatetwentysix();
    props.btnOnetwentysix()
  }
  
   else if (optiontwentysix==="a"){
    props.nextTwo();
    props.statUpdateAtwentysix();
    props.btnFourtwentysix()
   }
   else if (optiontwentysix==="b"){
     props.nextTwo();
     props.statUpdateAtwentysix();
     props.btnFourtwentysix()
    }
    else if (optiontwentysix==="c"){
     props.nextTwo();
     props.statUpdateAtwentysix();
     props.btnFourtwentysix()
    }
    else if (optiontwentysix==="d"){
     props.nextTwo();
     props.statUpdateAtwentysix();
     props.btnFourtwentysix()
    }}
   
  else if (stat==="Not Answered"){
    if(optiontwentysix===""){
   props.nextThree();
   props.statUpdateKtwentysix();
   props.btnOnetwentysix()
  }
  else if (optiontwentysix==="a"){
   props.nextFour();
   props.statUpdateAtwentysix();
   props.btnFourtwentysix()
  }
  else if (optiontwentysix==="b"){
    props.nextFour();
    props.statUpdateAtwentysix();
    props.btnFourtwentysix()
   }
   else if (optiontwentysix==="c"){
    props.nextFour();
    props.statUpdateAtwentysix();
    props.btnFourtwentysix()
   }
   else if (optiontwentysix==="d"){
    props.nextFour();
    props.statUpdateAtwentysix();
    props.btnFourtwentysix()
   }}
   else if (stat==="Marked"){
     if(optiontwentysix===""){
     props.nextThree();
     props.statUpdateKtwentysix();
     props.btnTwotwentysix()
    }
    else if (optiontwentysix==="a"){
     props.mfrFive();
     props.statUpdateNtwentysix();
     props.btnThreetwentysix()
    }
    else if (optiontwentysix==="b"){
     props.mfrFive();
     props.statUpdateNtwentysix();
     props.btnThreetwentysix()
    }
    else if ( optiontwentysix==="c"){
     props.mfrFive();
     props.statUpdateNtwentysix();
     props.btnThreetwentysix()
    }
    else if ( optiontwentysix==="d"){
     props.mfrFive();
     props.statUpdateNtwentysix();
     props.btnThreetwentysix()
      }}
    else if (stat==="Marked For Review"){
      if(optiontwentysix==="a"){
     props.mfrSeven();
     props.statUpdateAtwentysix();
     props.btnFourtwentysix()
    }
    else if (optiontwentysix==="b"){
      props.mfrSeventwo();
      props.statUpdateAtwentysix();
      props.btnFourtwentysix()
    }
    else if (optiontwentysix==="c"){
      props.mfrSeven();
      props.statUpdateAtwentysix();
      props.btnFourtwentysix()
    }
    else if ( optiontwentysix==="d"){
      props.mfrSeven();
      props.statUpdateAtwentysix();
      props.btnFourtwentysix()
    }}
    else if (stat==="Answered"){
      if(optiontwentysix==="a"){
      props.nextThree();
      props.statUpdateKtwentysix();
      props.btnFourtwentysix()
    }
    else if (optiontwentysix==="b"){
      props.nextThree();
      props.statUpdateKtwentysix();
      props.btnFourtwentysix()
    }
    else if (optiontwentysix==="c"){
      props.nextThree();
      props.statUpdateKtwentysix();
      props.btnFourtwentysix()
    }
    else if (optiontwentysix==="d"){
      props.nextThree();
      props.statUpdateKtwentysix();
      props.btnFourtwentysix()
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
     <p style={wStyle}>Test Name: <b>Morphology of Flowering Plants</b></p>
     <p style={wStyle1}>Name Of the Candidate: <b>{props.name}</b></p>  
    

    <form>
      {/* <h5>Question No.27</h5> */}
    <p><i>Question No.27</i><br></br>Parkinsonia is a good example of 

</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwentysix=== 'a'}
          onClick={handleChange}
        /> phyllocade
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwentysix === 'b'}
          onClick={handleChange}
        /> parachute mechanism
       
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwentysix === 'c'}
          onClick={handleChange}
        /> phyllode
       
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwentysix === 'd'}
          onClick={handleChange}
        /> winged fruits
      </div>
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/MFtwentyeight'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/MFtwentyeight'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/MFtwentyeight'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/MFtwentysix'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
        {/* <div><p>Name Of the Candidate: <b>{props.name}</b></p></div> */}
          <div className={props.timerdiv}><MFtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/MFconfirm'))}>Submit Test</button>
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
     statustwentysix:state.statustwentysix,
     optiontwentysix:state.optiontwentysix,
     BHealthanddiseaseTwentynine:state.BHealthanddiseaseTwentynine,
  BHealthanddiseaseTwentynineA:state.BHealthanddiseaseTwentynineA,
  BHealthanddiseaseTwentynineB:state.BHealthanddiseaseTwentynineB,
  BHealthanddiseaseTwentynineC:state.BHealthanddiseaseTwentynineC,
  BHealthanddiseaseTwentynineD:state.BHealthanddiseaseTwentynineD,
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
    optAtwentysix:()=>dispatch(optAtwentysix()),
    optBtwentysix:()=>dispatch(optBtwentysix()),
    optCtwentysix:()=>dispatch(optCtwentysix()),
    optDtwentysix:()=>dispatch(optDtwentysix()),
    statUpdatetwentysix:()=>dispatch(statUpdatetwentysix()),
    statUpdateAtwentysix:()=>dispatch(statUpdateAtwentysix()),
    statUpdateMtwentysix:()=>dispatch(statUpdateMtwentysix()),
    statUpdateNtwentysix:()=>dispatch(statUpdateNtwentysix()),
    statUpdateKtwentysix:()=>dispatch(statUpdateKtwentysix()),
    btnOnetwentysix:()=>dispatch(btnOnetwentysix()),
    btnTwotwentysix:()=>dispatch(btnTwotwentysix()),
    btnThreetwentysix:()=>dispatch(btnThreetwentysix()),
    btnFourtwentysix:()=>dispatch(btnFourtwentysix()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (MFtwentyseven)