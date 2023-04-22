import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwentyone,optBtwentyone,optCtwentyone,optDtwentyone,btnOnetwentyone,btnTwotwentyone,btnThreetwentyone,btnFourtwentyone,statUpdatetwentyone,statUpdateAtwentyone,statUpdateKtwentyone,statUpdateMtwentyone,statUpdateNtwentyone,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import MFtimer from './MFtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function MFtwentytwo(props) {
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
    var stat=props.statustwentyone;
    var opt=props.optiontwentyone

  const [optiontwentyone, setOptiontwentyone] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptiontwentyone(event.target.value);
    
  }
  
function optionChange(){
 if(optiontwentyone==="a"){
   props.optAtwentyone()
 }
 if(optiontwentyone==="b"){
   props.optBtwentyone()
 }
 if(optiontwentyone==="c"){
   props.optCtwentyone()
 }
 if(optiontwentyone==="d"){
   props.optDtwentyone()
 }
}

 useEffect(()=>{
  setOptiontwentyone(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optiontwentyone===""){
  props.nextOne();
  props.statUpdatetwentyone();
  props.btnOnetwentyone()
  
 }
 
  else if (optiontwentyone==="a"){
   props.nextTwo();
   props.statUpdateAtwentyone();
   props.btnFourtwentyone()
  
   
  }
  else if (optiontwentyone==="b"){
    props.nextTwo();
    props.statUpdateAtwentyone();
    props.btnFourtwentyone()
   }
   else if (optiontwentyone==="c"){
    props.nextTwo();
    props.statUpdateAtwentyone();
    props.btnFourtwentyone()
   }
   else if (optiontwentyone==="d"){
    props.nextTwo();
    props.statUpdateAtwentyone();
    props.btnFourtwentyone()
   }}
   else if (stat==="Not Answered"){
     if(optiontwentyone===""){
    props.nextThree();
    props.statUpdateKtwentyone();
    props.btnOnetwentyone()
    
   }
   
    else if (optiontwentyone==="a"){
     props.nextFour();
     props.statUpdateAtwentyone();
     props.btnFourtwentyone()
     
    }
    else if (optiontwentyone==="b"){
      props.nextFour();
      props.statUpdateAtwentyone();
      props.btnFourtwentyone()
      
     }
     else if (optiontwentyone==="c"){
      props.nextFour();
      props.statUpdateAtwentyone();
      props.btnFourtwentyone()
      
     }
     else if ( optiontwentyone==="d"){
      props.nextFour();
      props.statUpdateAtwentyone();
      props.btnFourtwentyone()
      
     }}
     else if (stat==="Marked"){
     if(optiontwentyone===""){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnThreetwentyone()
      
     }
          else if (optiontwentyone==="a"){
      props.mfrFive();
      props.statUpdateNtwentyone();
      props.btnThreetwentyone()

     }
     else if (optiontwentyone==="b"){
       props.mfrFive();
       props.statUpdateNtwentyone();
       props.btnThreetwentyone()

      }
      else if (optiontwentyone==="c"){
       props.mfrFive();
       props.statUpdateNtwentyone();
       props.btnThreetwentyone()

      }
      else if (optiontwentyone==="d"){
       props.mfrFive();
       props.statUpdateNtwentyone();
       props.btnThreetwentyone()

        }}
     
     else if (stat==="Marked For Review"){
     if(optiontwentyone==="a"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnThreetwentyone()

      
     }
     else if (optiontwentyone==="b"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnThreetwentyone() 
     }
     else if (optiontwentyone==="c"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnThreetwentyone()
     }
     else if (optiontwentyone==="d"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnThreetwentyone()
     }}
     else if(stat==="Answered"){
     if (optiontwentyone==="a"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()

      
     }
     else if (optiontwentyone==="b"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()

      
     }
     else if ( optiontwentyone==="c"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()
      
     }
     else if (optiontwentyone==="d"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optiontwentyone===""){
  props.mfrOne();
  props.statUpdateMtwentyone();
  props.btnTwotwentyone()
 }
 
  else if (optiontwentyone==="a"){
   props.mfrTwo();
   props.statUpdateNtwentyone();
   props.btnThreetwentyone()
  }
  else if (optiontwentyone==="b"){
    props.mfrTwo();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
  

   }
   else if (optiontwentyone==="c"){
    props.mfrTwo();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
  
   }
   else if (optiontwentyone==="d"){
    props.mfrTwo();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()

   }}
  
 else if (stat==="Not Answered"){
   if(optiontwentyone===""){
  props.mfrThree();
  props.statUpdateMtwentyone();
  props.btnTwotwentyone();
 }
 else if (optiontwentyone==="a"){
  props.mfrFour();
  props.statUpdateNtwentyone();
  props.btnThreetwentyone()
 }
 else if (optiontwentyone==="b"){
   props.mfrFour();
   props.statUpdateNtwentyone();
   props.btnThreetwentyone()
  }
  else if (optiontwentyone==="c"){
   props.mfrFour();
   props.statUpdateNtwentyone();
   props.btnThreetwentyone()
  }
  else if (optiontwentyone==="d"){
   props.mfrFour();
   props.statUpdateNtwentyone();
  props.btnThreetwentyone()
  }}
  else if (stat==="Marked"){
    if(optiontwentyone===""){
    props.nextThree();
    props.statUpdateKtwentyone();
    props.btnTwotwentyone();
   }
   else if (optiontwentyone==="a"){
    props.mfrFive();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()


   }
   else if (optiontwentyone==="b"){
    props.mfrFive();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="c"){
    props.mfrFive();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="d"){
    props.mfrFive();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
    }}
   else if (stat==="Marked For Review"){
     if(optiontwentyone==="a"){
    props.nextThree();
    props.statUpdateKtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="b"){
    props.nextThree();
    props.statUpdateKtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="c"){
    props.nextThree();
    props.statUpdateKtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="d"){
    props.nextThree();
    props.statUpdateKtwentyone();
    props.btnThreetwentyone()
   }}
   else if (stat==="Answered"){
     if(optiontwentyone==="a"){
    props.mfrSix();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="b"){
    props.mfrSix();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="c"){
    props.mfrSix();
    props.statUpdateNtwentyone();
    props.btnThreetwentyone()
   }
   else if (optiontwentyone==="d"){
    props.mfrSix();
    props.statUpdateNtwentyone();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optiontwentyone===""){
    props.nexttwo();
    props.statUpdatetwentyone();
    props.btnOnetwentyone()
  }
  
   else if (optiontwentyone==="a"){
    props.nextTwo();
    props.statUpdateAtwentyone();
    props.btnFourtwentyone()
   }
   else if (optiontwentyone==="b"){
     props.nextTwo();
     props.statUpdateAtwentyone();
     props.btnFourtwentyone()
    }
    else if (optiontwentyone==="c"){
     props.nextTwo();
     props.statUpdateAtwentyone();
     props.btnFourtwentyone()
    }
    else if (optiontwentyone==="d"){
     props.nextTwo();
     props.statUpdateAtwentyone();
     props.btnFourtwentyone()
    }}
   
  else if (stat==="Not Answered"){
    if(optiontwentyone===""){
   props.nextThree();
   props.statUpdateKtwentyone();
   props.btnOnetwentyone()
  }
  else if (optiontwentyone==="a"){
   props.nextFour();
   props.statUpdateAtwentyone();
   props.btnFourtwentyone()
  }
  else if (optiontwentyone==="b"){
    props.nextFour();
    props.statUpdateAtwentyone();
    props.btnFourtwentyone()
   }
   else if (optiontwentyone==="c"){
    props.nextFour();
    props.statUpdateAtwentyone();
    props.btnFourtwentyone()
   }
   else if (optiontwentyone==="d"){
    props.nextFour();
    props.statUpdateAtwentyone();
    props.btnFourtwentyone()
   }}
   else if (stat==="Marked"){
     if(optiontwentyone===""){
     props.nextThree();
     props.statUpdateKtwentyone();
     props.btnTwotwentyone()
    }
    else if (optiontwentyone==="a"){
     props.mfrFive();
     props.statUpdateNtwentyone();
     props.btnThreetwentyone()
    }
    else if (optiontwentyone==="b"){
     props.mfrFive();
     props.statUpdateNtwentyone();
     props.btnThreetwentyone()
    }
    else if ( optiontwentyone==="c"){
     props.mfrFive();
     props.statUpdateNtwentyone();
     props.btnThreetwentyone()
    }
    else if ( optiontwentyone==="d"){
     props.mfrFive();
     props.statUpdateNtwentyone();
     props.btnThreetwentyone()
      }}
    else if (stat==="Marked For Review"){
      if(optiontwentyone==="a"){
     props.mfrSeven();
     props.statUpdateAtwentyone();
     props.btnFourtwentyone()
    }
    else if (optiontwentyone==="b"){
      props.mfrSeventwo();
      props.statUpdateAtwentyone();
      props.btnFourtwentyone()
    }
    else if (optiontwentyone==="c"){
      props.mfrSeven();
      props.statUpdateAtwentyone();
      props.btnFourtwentyone()
    }
    else if ( optiontwentyone==="d"){
      props.mfrSeven();
      props.statUpdateAtwentyone();
      props.btnFourtwentyone()
    }}
    else if (stat==="Answered"){
      if(optiontwentyone==="a"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()
    }
    else if (optiontwentyone==="b"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()
    }
    else if (optiontwentyone==="c"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()
    }
    else if (optiontwentyone==="d"){
      props.nextThree();
      props.statUpdateKtwentyone();
      props.btnFourtwentyone()
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
      {/* <h5>Question No.22</h5> */}
    <p> <i>Question No.22</i><br></br> Identify the group of plants possessing leaf tendrils

</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwentyone=== 'a'}
          onClick={handleChange}
        /> Pea, Glory lily
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwentyone === 'b'}
          onClick={handleChange}
        /> Cucumber, Pumpkin
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwentyone === 'c'}
          onClick={handleChange}
        /> Watermelon, Grapevine
       
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwentyone === 'd'}
          onClick={handleChange}
        /> All of these
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/MFtwentythree'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/MFtwentythree'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/MFtwentythree'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/MFtwentyone'))}>Previous</button>
    
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
     statustwentyone:state.statustwentyone,
     optiontwentyone:state.optiontwentyone,
     BHealthanddiseaseTwentythree:state.BHealthanddiseaseTwentythree,
  BHealthanddiseaseTwentythreeA:state.BHealthanddiseaseTwentythreeA,
  BHealthanddiseaseTwentythreeB:state.BHealthanddiseaseTwentythreeB,
  BHealthanddiseaseTwentythreeC:state.BHealthanddiseaseTwentythreeC,
  BHealthanddiseaseTwentythreeD:state.BHealthanddiseaseTwentythreeD,
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
    optAtwentyone:()=>dispatch(optAtwentyone()),
    optBtwentyone:()=>dispatch(optBtwentyone()),
    optCtwentyone:()=>dispatch(optCtwentyone()),
    optDtwentyone:()=>dispatch(optDtwentyone()),
    statUpdatetwentyone:()=>dispatch(statUpdatetwentyone()),
    statUpdateAtwentyone:()=>dispatch(statUpdateAtwentyone()),
    statUpdateMtwentyone:()=>dispatch(statUpdateMtwentyone()),
    statUpdateNtwentyone:()=>dispatch(statUpdateNtwentyone()),
    statUpdateKtwentyone:()=>dispatch(statUpdateKtwentyone()),
    btnOnetwentyone:()=>dispatch(btnOnetwentyone()),
    btnTwotwentyone:()=>dispatch(btnTwotwentyone()),
    btnThreetwentyone:()=>dispatch(btnThreetwentyone()),
    btnFourtwentyone:()=>dispatch(btnFourtwentyone()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (MFtwentytwo)