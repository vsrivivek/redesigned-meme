import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwenty,optBtwenty,optCtwenty,optDtwenty,btnOnetwenty,btnTwotwenty,btnThreetwenty,btnFourtwenty,statUpdatetwenty,statUpdateAtwenty,statUpdateKtwenty,statUpdateMtwenty,statUpdateNtwenty,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import PVtimer from './PVtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function PVtwentyOne(props) {
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
     <h1 style={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1> 
           </div>
    <div className= {props.total}>
     <div className={props.left}>
     <p style={wStyle}>Test Name: <b>Product of Vectors</b></p>
     <p style={wStyle1}>Name of the Candidate: <b>{props.name}</b></p>  
    <form>
    <p><i>Question No.21</i><br></br> If <b>a</b>=<b>i</b>+2<b>j</b>-3<b>k</b>, <b>b</b>=2<b>i</b>+<b>j</b>+<b>k</b> and <b>c</b>=<b>i</b>+3<b>j</b>-2<b>k</b>  then(<b>a</b> x <b>b</b>) x (<b>b</b> x <b>c</b>)=

</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwenty=== 'a'}
          onClick={handleChange}
        /> 5(2<b>i</b>+<b>j</b>+<b>k</b>)
       
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwenty === 'b'}
          onClick={handleChange}
        />  -5(2<b>i</b>+<b>j</b>+<b>k</b>)
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwenty === 'c'}
          onClick={handleChange}
        /> 10(2<b>i</b>+<b>j</b>+<b>k</b>)
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwenty === 'd'}
          onClick={handleChange}
        /> -10(2<b>i</b>+<b>j</b>+<b>k</b>)
        
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/PVtwentytwo'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/PVtwentytwo'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/PVtwentytwo'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/PVtwenty'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><PVtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/PVconfirm'))}>Submit Test</button>
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
export default connect(mapStateToProps,mapDispatchToProps) (PVtwentyOne)