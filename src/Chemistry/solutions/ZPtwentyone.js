import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwenty,optBtwenty,optCtwenty,optDtwenty,btnOnetwenty,btnTwotwenty,btnThreetwenty,btnFourtwenty,statUpdatetwenty,statUpdateAtwenty,statUpdateKtwenty,statUpdateMtwenty,statUpdateNtwenty,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import ZPtimer from './ZPtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function ZPtwentyOne(props) {
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
    var stat=props.statustwenty;
    var opt=props.optiontwenty

  const [optiontwenty, setOptiontwenty] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptiontwenty(event.target.value);
    
  }
  
function optionChange(){
 if(optiontwenty==="a"){
   props.optAtwenty()
 }
 if(optiontwenty==="b"){
   props.optBtwenty()
 }
 if(optiontwenty==="c"){
   props.optCtwenty()
 }
 if(optiontwenty==="d"){
   props.optDtwenty()
 }
}

 useEffect(()=>{
  setOptiontwenty(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optiontwenty===""){
  props.nextOne();
  props.statUpdatetwenty();
  props.btnOnetwenty()
  
 }
 
  else if (optiontwenty==="a"){
   props.nextTwo();
   props.statUpdateAtwenty();
   props.btnFourtwenty()
  
   
  }
  else if (optiontwenty==="b"){
    props.nextTwo();
    props.statUpdateAtwenty();
    props.btnFourtwenty()
   }
   else if (optiontwenty==="c"){
    props.nextTwo();
    props.statUpdateAtwenty();
    props.btnFourtwenty()
   }
   else if (optiontwenty==="d"){
    props.nextTwo();
    props.statUpdateAtwenty();
    props.btnFourtwenty()
   }}
   else if (stat==="Not Answered"){
     if(optiontwenty===""){
    props.nextThree();
    props.statUpdateKtwenty();
    props.btnOnetwenty()
    
   }
   
    else if (optiontwenty==="a"){
     props.nextFour();
     props.statUpdateAtwenty();
     props.btnFourtwenty()
     
    }
    else if (optiontwenty==="b"){
      props.nextFour();
      props.statUpdateAtwenty();
      props.btnFourtwenty()
      
     }
     else if (optiontwenty==="c"){
      props.nextFour();
      props.statUpdateAtwenty();
      props.btnFourtwenty()
      
     }
     else if ( optiontwenty==="d"){
      props.nextFour();
      props.statUpdateAtwenty();
      props.btnFourtwenty()
      
     }}
     else if (stat==="Marked"){
     if(optiontwenty===""){
      props.nextThree();
      props.statUpdateKtwenty();
      props.btnThreetwenty()
      
     }
          else if (optiontwenty==="a"){
      props.mfrFive();
      props.statUpdateNtwenty();
      props.btnThreetwenty()

     }
     else if (optiontwenty==="b"){
       props.mfrFive();
       props.statUpdateNtwenty();
       props.btnThreetwenty()

      }
      else if (optiontwenty==="c"){
       props.mfrFive();
       props.statUpdateNtwenty();
       props.btnThreetwenty()

      }
      else if (optiontwenty==="d"){
       props.mfrFive();
       props.statUpdateNtwenty();
       props.btnThreetwenty()

        }}
     
     else if (stat==="Marked For Review"){
     if(optiontwenty==="a"){
      props.nextThree();
      props.statUpdateKtwenty();
      props.btnThreetwenty()

      
     }
     else if (optiontwenty==="b"){
      props.nextThree();
      props.statUpdateKtwenty();
      props.btnThreetwenty() 
     }
     else if (optiontwenty==="c"){
      props.nextThree();
      props.statUpdateKtwenty();
      props.btnThreetwenty()
     }
     else if (optiontwenty==="d"){
      props.nextThree();
      props.statUpdateKtwenty();
      props.btnThreetwenty()
     }}
     else if(stat==="Answered"){
     if (optiontwenty==="a"){
      props.nextThree();
      props.statUpdateKtwenty();
      props.btnFourtwenty()

      
     }
     else if (optiontwenty==="b"){
      props.nextThree();
      props.statUpdateKtwenty();
      props.btnFourtwenty()

      
     }
     else if ( optiontwenty==="c"){
      props.nextThree();
      props.statUpdateKtwenty();
      props.btnFourtwenty()
      
     }
     else if (optiontwenty==="d"){
      props.nextThree();
      props.statUpdateKtwenty();
      props.btnFourtwenty()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optiontwenty===""){
  props.mfrOne();
  props.statUpdateMtwenty();
  props.btnTwotwenty()
 }
 
  else if (optiontwenty==="a"){
   props.mfrTwo();
   props.statUpdateNtwenty();
   props.btnThreetwenty()
  }
  else if (optiontwenty==="b"){
    props.mfrTwo();
    props.statUpdateNtwenty();
    props.btnThreetwenty()
  

   }
   else if (optiontwenty==="c"){
    props.mfrTwo();
    props.statUpdateNtwenty();
    props.btnThreetwenty()
  
   }
   else if (optiontwenty==="d"){
    props.mfrTwo();
    props.statUpdateNtwenty();
    props.btnThreetwenty()

   }}
  
 else if (stat==="Not Answered"){
   if(optiontwenty===""){
  props.mfrThree();
  props.statUpdateMtwenty();
  props.btnTwotwenty();
 }
 else if (optiontwenty==="a"){
  props.mfrFour();
  props.statUpdateNtwenty();
  props.btnThreetwenty()
 }
 else if (optiontwenty==="b"){
   props.mfrFour();
   props.statUpdateNtwenty();
   props.btnThreetwenty()
  }
  else if (optiontwenty==="c"){
   props.mfrFour();
   props.statUpdateNtwenty();
   props.btnThreetwenty()
  }
  else if (optiontwenty==="d"){
   props.mfrFour();
   props.statUpdateNtwenty();
  props.btnThreetwenty()
  }}
  else if (stat==="Marked"){
    if(optiontwenty===""){
    props.nextThree();
    props.statUpdateKtwenty();
    props.btnTwotwenty();
   }
   else if (optiontwenty==="a"){
    props.mfrFive();
    props.statUpdateNtwenty();
    props.btnThreetwenty()


   }
   else if (optiontwenty==="b"){
    props.mfrFive();
    props.statUpdateNtwenty();
    props.btnThreetwenty()
   }
   else if (optiontwenty==="c"){
    props.mfrFive();
    props.statUpdateNtwenty();
    props.btnThreetwenty()
   }
   else if (optiontwenty==="d"){
    props.mfrFive();
    props.statUpdateNtwenty();
    props.btnThreetwenty()
    }}
   else if (stat==="Marked For Review"){
     if(optiontwenty==="a"){
    props.nextThree();
    props.statUpdateKtwenty();
    props.btnThreetwenty()
   }
   else if (optiontwenty==="b"){
    props.nextThree();
    props.statUpdateKtwenty();
    props.btnThreetwenty()
   }
   else if (optiontwenty==="c"){
    props.nextThree();
    props.statUpdateKtwenty();
    props.btnThreetwenty()
   }
   else if (optiontwenty==="d"){
    props.nextThree();
    props.statUpdateKtwenty();
    props.btnThreetwenty()
   }}
   else if (stat==="Answered"){
     if(optiontwenty==="a"){
    props.mfrSix();
    props.statUpdateNtwenty();
    props.btnThreetwenty()
   }
   else if (optiontwenty==="b"){
    props.mfrSix();
    props.statUpdateNtwenty();
    props.btnThreetwenty()
   }
   else if (optiontwenty==="c"){
    props.mfrSix();
    props.statUpdateNtwenty();
    props.btnThreetwenty()
   }
   else if (optiontwenty==="d"){
    props.mfrSix();
    props.statUpdateNtwenty();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optiontwenty===""){
    props.nexttwo();
    props.statUpdatetwenty();
    props.btnOnetwenty()
  }
  
   else if (optiontwenty==="a"){
    props.nextTwo();
    props.statUpdateAtwenty();
    props.btnFourtwenty()
   }
   else if (optiontwenty==="b"){
     props.nextTwo();
     props.statUpdateAtwenty();
     props.btnFourtwenty()
    }
    else if (optiontwenty==="c"){
     props.nextTwo();
     props.statUpdateAtwenty();
     props.btnFourtwenty()
    }
    else if (optiontwenty==="d"){
     props.nextTwo();
     props.statUpdateAtwenty();
     props.btnFourtwenty()
    }}
   
  else if (stat==="Not Answered"){
    if(optiontwenty===""){
   props.nextThree();
   props.statUpdateKtwenty();
   props.btnOnetwenty()
  }
  else if (optiontwenty==="a"){
   props.nextFour();
   props.statUpdateAtwenty();
   props.btnFourtwenty()
  }
  else if (optiontwenty==="b"){
    props.nextFour();
    props.statUpdateAtwenty();
    props.btnFourtwenty()
   }
   else if (optiontwenty==="c"){
    props.nextFour();
    props.statUpdateAtwenty();
    props.btnFourtwenty()
   }
   else if (optiontwenty==="d"){
    props.nextFour();
    props.statUpdateAtwenty();
    props.btnFourtwenty()
   }}
   else if (stat==="Marked"){
     if(optiontwenty===""){
     props.nextThree();
     props.statUpdateKtwenty();
     props.btnTwotwenty()
    }
    else if (optiontwenty==="a"){
     props.mfrFive();
     props.statUpdateNtwenty();
     props.btnThreetwenty()
    }
    else if (optiontwenty==="b"){
     props.mfrFive();
     props.statUpdateNtwenty();
     props.btnThreetwenty()
    }
    else if ( optiontwenty==="c"){
     props.mfrFive();
     props.statUpdateNtwenty();
     props.btnThreetwenty()
    }
    else if ( optiontwenty==="d"){
     props.mfrFive();
     props.statUpdateNtwenty();
     props.btnThreetwenty()
      }}
    else if (stat==="Marked For Review"){
      if(optiontwenty==="a"){
     props.mfrSeven();
     props.statUpdateAtwenty();
     props.btnFourtwenty()
    }
    else if (optiontwenty==="b"){
      props.mfrSeventwo();
      props.statUpdateAtwenty();
      props.btnFourtwenty()
    }
    else if (optiontwenty==="c"){
      props.mfrSeven();
      props.statUpdateAtwenty();
      props.btnFourtwenty()
    }
    else if ( optiontwenty==="d"){
      props.mfrSeven();
      props.statUpdateAtwenty();
      props.btnFourtwenty()
    }}
    else if (stat==="Answered"){
      if(optiontwenty==="a"){
      props.nextThree();
      props.statUpdateKtwenty();
      props.btnFourtwenty()
    }
    else if (optiontwenty==="b"){
      props.nextThree();
      props.statUpdateKtwenty();
      props.btnFourtwenty()
    }
    else if (optiontwenty==="c"){
      props.nextThree();
      props.statUpdateKtwenty();
      props.btnFourtwenty()
    }
    else if (optiontwenty==="d"){
      props.nextThree();
      props.statUpdateKtwenty();
      props.btnFourtwenty()
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
     <p style={wStyle}>Test Name: <b>Solutions</b></p>
     <p style={wStyle1}>Name Of the Candidate: <b>{props.name}</b></p> 
    <form>
    <p><i>Question No.21</i><br></br> Molal depression constant is calculated from the enthalpy of fusion ({'\u0394'}H<sub>f</sub>) and boiling point of solvent using the relation </p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwenty=== 'a'}
          onClick={handleChange}
        /> K<sub>f</sub>= [(M<sub>1</sub>RT<sub>o</sub><sup>2</sup>)/(1000{'\u0394'}H<sub>f</sub>)]
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwenty === 'b'}
          onClick={handleChange}
        />  K<sub>f</sub>= [(1000RT<sub>o</sub><sup>2</sup>)/(M<sub>1</sub>{'\u0394'}H<sub>f</sub>)]
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwenty === 'c'}
          onClick={handleChange}
        /> K<sub>f</sub>= [(1000M<sub>1</sub>T<sub>o</sub><sup>2</sup>)/(R{'\u0394'}H<sub>f</sub>)]
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwenty === 'd'}
          onClick={handleChange}
        /> K<sub>f</sub>= [({'\u0394'}H<sub>f</sub>)/(1000M<sub>1</sub>RT<sub>o</sub><sup>2</sup>)]
        
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/ZPtwentytwo'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/ZPtwentytwo'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/ZPtwentytwo'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/ZPtwenty'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><ZPtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/ZPconfirm'))}>Submit Test</button>
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
     statustwenty:state.statustwenty,
     optiontwenty:state.optiontwenty,
     BHealthanddiseaseTwentytwo:state.BHealthanddiseaseTwentytwo,
  BHealthanddiseaseTwentytwoA:state.BHealthanddiseaseTwentytwoA,
  BHealthanddiseaseTwentytwoB:state.BHealthanddiseaseTwentytwoB,
  BHealthanddiseaseTwentytwoC:state.BHealthanddiseaseTwentytwoC,
  BHealthanddiseaseTwentytwoD:state.BHealthanddiseaseTwentytwoD,
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
    optAtwenty:()=>dispatch(optAtwenty()),
    optBtwenty:()=>dispatch(optBtwenty()),
    optCtwenty:()=>dispatch(optCtwenty()),
    optDtwenty:()=>dispatch(optDtwenty()),
    statUpdatetwenty:()=>dispatch(statUpdatetwenty()),
    statUpdateAtwenty:()=>dispatch(statUpdateAtwenty()),
    statUpdateMtwenty:()=>dispatch(statUpdateMtwenty()),
    statUpdateNtwenty:()=>dispatch(statUpdateNtwenty()),
    statUpdateKtwenty:()=>dispatch(statUpdateKtwenty()),
    btnOnetwenty:()=>dispatch(btnOnetwenty()),
    btnTwotwenty:()=>dispatch(btnTwotwenty()),
    btnThreetwenty:()=>dispatch(btnThreetwenty()),
    btnFourtwenty:()=>dispatch(btnFourtwenty()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (ZPtwentyOne)