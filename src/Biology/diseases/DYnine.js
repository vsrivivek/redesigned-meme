import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAeight,optBeight,optCeight,optDeight,btnOneeight,btnTwoeight,btnThreeeight,btnFoureight,statUpdateeight,statUpdateAeight,statUpdateKeight,statUpdateMeight,statUpdateNeight,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
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




function DYnine(props) {
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
    var stat=props.statuseight;
    var opt=props.optioneight

  const [optioneight, setOptioneight] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptioneight(event.target.value);
    
  }
  
function optionChange(){
 if(optioneight==="a"){
   props.optAeight()
 }
 if(optioneight==="b"){
   props.optBeight()
 }
 if(optioneight==="c"){
   props.optCeight()
 }
 if(optioneight==="d"){
   props.optDeight()
 }
}

 useEffect(()=>{
  setOptioneight(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optioneight===""){
  props.nextOne();
  props.statUpdateeight();
  props.btnOneeight()
  
 }
 
  else if (optioneight==="a"){
   props.nextTwo();
   props.statUpdateAeight();
   props.btnFoureight()
  
   
  }
  else if (optioneight==="b"){
    props.nextTwo();
    props.statUpdateAeight();
    props.btnFoureight()
   }
   else if (optioneight==="c"){
    props.nextTwo();
    props.statUpdateAeight();
    props.btnFoureight()
   }
   else if (optioneight==="d"){
    props.nextTwo();
    props.statUpdateAeight();
    props.btnFoureight()
   }}
   else if (stat==="Not Answered"){
     if(optioneight===""){
    props.nextThree();
    props.statUpdateKeight();
    props.btnOneeight()
    
   }
   
    else if (optioneight==="a"){
     props.nextFour();
     props.statUpdateAeight();
     props.btnFoureight()
     
    }
    else if (optioneight==="b"){
      props.nextFour();
      props.statUpdateAeight();
      props.btnFoureight()
      
     }
     else if (optioneight==="c"){
      props.nextFour();
      props.statUpdateAeight();
      props.btnFoureight()
      
     }
     else if ( optioneight==="d"){
      props.nextFour();
      props.statUpdateAeight();
      props.btnFoureight()
      
     }}
     else if (stat==="Marked"){
     if(optioneight===""){
      props.nextThree();
      props.statUpdateKeight();
      props.btnThreeeight()
      
     }
          else if (optioneight==="a"){
      props.mfrFive();
      props.statUpdateNeight();
      props.btnThreeeight()

     }
     else if (optioneight==="b"){
       props.mfrFive();
       props.statUpdateNeight();
       props.btnThreeeight()

      }
      else if (optioneight==="c"){
       props.mfrFive();
       props.statUpdateNeight();
       props.btnThreeeight()

      }
      else if (optioneight==="d"){
       props.mfrFive();
       props.statUpdateNeight();
       props.btnThreeeight()

        }}
     
     else if (stat==="Marked For Review"){
     if(optioneight==="a"){
      props.nextThree();
      props.statUpdateKeight();
      props.btnThreeeight()

      
     }
     else if (optioneight==="b"){
      props.nextThree();
      props.statUpdateKeight();
      props.btnThreeeight() 
     }
     else if (optioneight==="c"){
      props.nextThree();
      props.statUpdateKeight();
      props.btnThreeeight()
     }
     else if (optioneight==="d"){
      props.nextThree();
      props.statUpdateKeight();
      props.btnThreeeight()
     }}
     else if(stat==="Answered"){
     if (optioneight==="a"){
      props.nextThree();
      props.statUpdateKeight();
      props.btnFoureight()

      
     }
     else if (optioneight==="b"){
      props.nextThree();
      props.statUpdateKeight();
      props.btnFoureight()

      
     }
     else if ( optioneight==="c"){
      props.nextThree();
      props.statUpdateKeight();
      props.btnFoureight()
      
     }
     else if (optioneight==="d"){
      props.nextThree();
      props.statUpdateKeight();
      props.btnFoureight()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optioneight===""){
  props.mfrOne();
  props.statUpdateMeight();
  props.btnTwoeight()
 }
 
  else if (optioneight==="a"){
   props.mfrTwo();
   props.statUpdateNeight();
   props.btnThreeeight()
  }
  else if (optioneight==="b"){
    props.mfrTwo();
    props.statUpdateNeight();
    props.btnThreeeight()
  

   }
   else if (optioneight==="c"){
    props.mfrTwo();
    props.statUpdateNeight();
    props.btnThreeeight()
  
   }
   else if (optioneight==="d"){
    props.mfrTwo();
    props.statUpdateNeight();
    props.btnThreeeight()

   }}
  
 else if (stat==="Not Answered"){
   if(optioneight===""){
  props.mfrThree();
  props.statUpdateMeight();
  props.btnTwoeight();
 }
 else if (optioneight==="a"){
  props.mfrFour();
  props.statUpdateNeight();
  props.btnThreeeight()
 }
 else if (optioneight==="b"){
   props.mfrFour();
   props.statUpdateNeight();
   props.btnThreeeight()
  }
  else if (optioneight==="c"){
   props.mfrFour();
   props.statUpdateNeight();
   props.btnThreeeight()
  }
  else if (optioneight==="d"){
   props.mfrFour();
   props.statUpdateNeight();
  props.btnThreeeight()
  }}
  else if (stat==="Marked"){
    if(optioneight===""){
    props.nextThree();
    props.statUpdateKeight();
    props.btnTwoeight();
   }
   else if (optioneight==="a"){
    props.mfrFive();
    props.statUpdateNeight();
    props.btnThreeeight()


   }
   else if (optioneight==="b"){
    props.mfrFive();
    props.statUpdateNeight();
    props.btnThreeeight()
   }
   else if (optioneight==="c"){
    props.mfrFive();
    props.statUpdateNeight();
    props.btnThreeeight()
   }
   else if (optioneight==="d"){
    props.mfrFive();
    props.statUpdateNeight();
    props.btnThreeeight()
    }}
   else if (stat==="Marked For Review"){
     if(optioneight==="a"){
    props.nextThree();
    props.statUpdateKeight();
    props.btnThreeeight()
   }
   else if (optioneight==="b"){
    props.nextThree();
    props.statUpdateKeight();
    props.btnThreeeight()
   }
   else if (optioneight==="c"){
    props.nextThree();
    props.statUpdateKeight();
    props.btnThreeeight()
   }
   else if (optioneight==="d"){
    props.nextThree();
    props.statUpdateKeight();
    props.btnThreeeight()
   }}
   else if (stat==="Answered"){
     if(optioneight==="a"){
    props.mfrSix();
    props.statUpdateNeight();
    props.btnThreeeight()
   }
   else if (optioneight==="b"){
    props.mfrSix();
    props.statUpdateNeight();
    props.btnThreeeight()
   }
   else if (optioneight==="c"){
    props.mfrSix();
    props.statUpdateNeight();
    props.btnThreeeight()
   }
   else if (optioneight==="d"){
    props.mfrSix();
    props.statUpdateNeight();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optioneight===""){
    props.nexttwo();
    props.statUpdateeight();
    props.btnOneeight()
  }
  
   else if (optioneight==="a"){
    props.nextTwo();
    props.statUpdateAeight();
    props.btnFoureight()
   }
   else if (optioneight==="b"){
     props.nextTwo();
     props.statUpdateAeight();
     props.btnFoureight()
    }
    else if (optioneight==="c"){
     props.nextTwo();
     props.statUpdateAeight();
     props.btnFoureight()
    }
    else if (optioneight==="d"){
     props.nextTwo();
     props.statUpdateAeight();
     props.btnFoureight()
    }}
   
  else if (stat==="Not Answered"){
    if(optioneight===""){
   props.nextThree();
   props.statUpdateKeight();
   props.btnOneeight()
  }
  else if (optioneight==="a"){
   props.nextFour();
   props.statUpdateAeight();
   props.btnFoureight()
  }
  else if (optioneight==="b"){
    props.nextFour();
    props.statUpdateAeight();
    props.btnFoureight()
   }
   else if (optioneight==="c"){
    props.nextFour();
    props.statUpdateAeight();
    props.btnFoureight()
   }
   else if (optioneight==="d"){
    props.nextFour();
    props.statUpdateAeight();
    props.btnFoureight()
   }}
   else if (stat==="Marked"){
     if(optioneight===""){
     props.nextThree();
     props.statUpdateKeight();
     props.btnTwoeight()
    }
    else if (optioneight==="a"){
     props.mfrFive();
     props.statUpdateNeight();
     props.btnThreeeight()
    }
    else if (optioneight==="b"){
     props.mfrFive();
     props.statUpdateNeight();
     props.btnThreeeight()
    }
    else if ( optioneight==="c"){
     props.mfrFive();
     props.statUpdateNeight();
     props.btnThreeeight()
    }
    else if ( optioneight==="d"){
     props.mfrFive();
     props.statUpdateNeight();
     props.btnThreeeight()
      }}
    else if (stat==="Marked For Review"){
      if(optioneight==="a"){
     props.mfrSeven();
     props.statUpdateAeight();
     props.btnFoureight()
    }
    else if (optioneight==="b"){
      props.mfrSeventwo();
      props.statUpdateAeight();
      props.btnFoureight()
    }
    else if (optioneight==="c"){
      props.mfrSeven();
      props.statUpdateAeight();
      props.btnFoureight()
    }
    else if ( optioneight==="d"){
      props.mfrSeven();
      props.statUpdateAeight();
      props.btnFoureight()
    }}
    else if (stat==="Answered"){
      if(optioneight==="a"){
      props.nextThree();
      props.statUpdateKeight();
      props.btnFoureight()
    }
    else if (optioneight==="b"){
      props.nextThree();
      props.statUpdateKeight();
      props.btnFoureight()
    }
    else if (optioneight==="c"){
      props.nextThree();
      props.statUpdateKeight();
      props.btnFoureight()
    }
    else if (optioneight==="d"){
      props.nextThree();
      props.statUpdateKeight();
      props.btnFoureight()
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
      <h5>Question No.9</h5>
    <p>  {props.BHealthanddiseaseTen}</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optioneight === 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTenA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optioneight === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTenB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optioneight === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTenC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optioneight === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseTenD}
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/DYten'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/DYten'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/DYten'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/DYeight'))}>Previous</button>
    
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
  statuseight:state.statuseight,
  optioneight:state.optioneight,
  BHealthanddiseaseTen:state.BHealthanddiseaseTen,
  BHealthanddiseaseTenA:state.BHealthanddiseaseTenA,
  BHealthanddiseaseTenB:state.BHealthanddiseaseTenB,
  BHealthanddiseaseTenC:state.BHealthanddiseaseTenC,
  BHealthanddiseaseTenD:state.BHealthanddiseaseTenD,
  optioneight:state.optioneight,
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
    optAeight:()=>dispatch(optAeight()),
    optBeight:()=>dispatch(optBeight()),
    optCeight:()=>dispatch(optCeight()),
    optDeight:()=>dispatch(optDeight()),
    statUpdateeight:()=>dispatch(statUpdateeight()),
    statUpdateAeight:()=>dispatch(statUpdateAeight()),
    statUpdateMeight:()=>dispatch(statUpdateMeight()),
    statUpdateNeight:()=>dispatch(statUpdateNeight()),
    statUpdateKeight:()=>dispatch(statUpdateKeight()),
    btnOneeight:()=>dispatch(btnOneeight()),
    btnTwoeight:()=>dispatch(btnTwoeight()),
    btnThreeeight:()=>dispatch(btnThreeeight()),
    btnFoureight:()=>dispatch(btnFoureight()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (DYnine)