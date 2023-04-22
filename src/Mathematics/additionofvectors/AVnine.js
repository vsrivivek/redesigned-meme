import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAeight,optBeight,optCeight,optDeight,btnOneeight,btnTwoeight,btnThreeeight,btnFoureight,statUpdateeight,statUpdateAeight,statUpdateKeight,statUpdateMeight,statUpdateNeight,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import AVtimer from './AVtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function AVnine(props) {
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
      {/* <h5>Question No.9</h5> */}
    <p><i>Question No.9</i><br></br> If 2<b>i</b>+3<b>j</b>-6<b>k</b>,6<b>i</b>-2<b>j</b>+3<b>k</b>,3<b>i</b>-6<b>j</b>-2<b>k</b> represent the sides of a triangle then perimeter of the triangle is
<br></br><b>[EAMCET 98]</b>



</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optioneight === 'a'}
          onClick={handleChange}
        /> 14		
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optioneight === 'b'}
          onClick={handleChange}
        /> 21	
      <div>
        <input
          type="radio"
          value="c"
          checked={optioneight === 'c'}
          onClick={handleChange}
        /> 7
        </div> 
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optioneight === 'd'}
          onClick={handleChange}
        /> 6
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/AVten'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/AVten'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/AVten'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/AVeight'))}>Previous</button>
    
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
export default connect(mapStateToProps,mapDispatchToProps) (AVnine)