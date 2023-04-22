import React from 'react'
import { timerUpdate,left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven,optAone,optBone,optCone,optDone,btnOneone,btnTwoone,btnThreeone,btnFourone,statUpdateone,statUpdateAone,statUpdateKone,statUpdateMone,statUpdateNone } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from '../components/CakeNumbers';
// import QuestionNumbers from '../components/QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
// import Timer from '../../components/Timer ';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import PKtimer from './PKtimer';
import Logo from '../../redux/Images/Logo.jpg'










function PKtwo(props) {
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
    "width": "275px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const navigate = useNavigate()  
    var stat=props.statusone;
    var opt=props.optionone

  const [optionone, setOptionone] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionone(event.target.value);
    
  }
  
function optionChange(){
 if(optionone==="a"){
   props.optAone()
 }
 if(optionone==="b"){
   props.optBone()
 }
 if(optionone==="c"){
   props.optCone()
 }
 if(optionone==="d"){
   props.optDone()
 }
}

 useEffect(()=>{
  setOptionone(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionone===""){
  props.nextOne();
  props.statUpdateone();
  props.btnOneone()
  
 }
 
  else if (optionone==="a"){
   props.nextTwo();
   props.statUpdateAone();
   props.btnFourone()
  
   
  }
  else if (optionone==="b"){
    props.nextTwo();
    props.statUpdateAone();
    props.btnFourone()
   }
   else if (optionone==="c"){
    props.nextTwo();
    props.statUpdateAone();
    props.btnFourone()
   }
   else if (optionone==="d"){
    props.nextTwo();
    props.statUpdateAone();
    props.btnFourone()
   }}
   else if (stat==="Not Answered"){
     if(optionone===""){
    props.nextThree();
    props.statUpdateKone();
    props.btnOneone()
    
   }
   
    else if (optionone==="a"){
     props.nextFour();
     props.statUpdateAone();
     props.btnFourone()
     
    }
    else if (optionone==="b"){
      props.nextFour();
      props.statUpdateAone();
      props.btnFourone()
      
     }
     else if (optionone==="c"){
      props.nextFour();
      props.statUpdateAone();
      props.btnFourone()
      
     }
     else if ( optionone==="d"){
      props.nextFour();
      props.statUpdateAone();
      props.btnFourone()
      
     }}
     else if (stat==="Marked"){
     if(optionone===""){
      props.nextThree();
      props.statUpdateKone();
      props.btnThreeone()
      
     }
          else if (optionone==="a"){
      props.mfrFive();
      props.statUpdateNone();
      props.btnThreeone()

     }
     else if (optionone==="b"){
       props.mfrFive();
       props.statUpdateNone();
       props.btnThreeone()

      }
      else if (optionone==="c"){
       props.mfrFive();
       props.statUpdateNone();
       props.btnThreeone()

      }
      else if (optionone==="d"){
       props.mfrFive();
       props.statUpdateNone();
       props.btnThreeone()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionone==="a"){
      props.nextThree();
      props.statUpdateKone();
      props.btnThreeone()

      
     }
     else if (optionone==="b"){
      props.nextThree();
      props.statUpdateKone();
      props.btnThreeone() 
     }
     else if (optionone==="c"){
      props.nextThree();
      props.statUpdateKone();
      props.btnThreeone()
     }
     else if (optionone==="d"){
      props.nextThree();
      props.statUpdateKone();
      props.btnThreeone()
     }}
     else if(stat==="Answered"){
     if (optionone==="a"){
      props.nextThree();
      props.statUpdateKone();
      props.btnFourone()

      
     }
     else if (optionone==="b"){
      props.nextThree();
      props.statUpdateKone();
      props.btnFourone()

      
     }
     else if ( optionone==="c"){
      props.nextThree();
      props.statUpdateKone();
      props.btnFourone()
      
     }
     else if (optionone==="d"){
      props.nextThree();
      props.statUpdateKone();
      props.btnFourone()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionone===""){
  props.mfrOne();
  props.statUpdateMone();
  props.btnTwoone()
 }
 
  else if (optionone==="a"){
   props.mfrTwo();
   props.statUpdateNone();
   props.btnThreeone()
  }
  else if (optionone==="b"){
    props.mfrTwo();
    props.statUpdateNone();
    props.btnThreeone()
  

   }
   else if (optionone==="c"){
    props.mfrTwo();
    props.statUpdateNone();
    props.btnThreeone()
  
   }
   else if (optionone==="d"){
    props.mfrTwo();
    props.statUpdateNone();
    props.btnThreeone()

   }}
  
 else if (stat==="Not Answered"){
   if(optionone===""){
  props.mfrThree();
  props.statUpdateMone();
  props.btnTwoone();
 }
 else if (optionone==="a"){
  props.mfrFour();
  props.statUpdateNone();
  props.btnThreeone()
 }
 else if (optionone==="b"){
   props.mfrFour();
   props.statUpdateNone();
   props.btnThreeone()
  }
  else if (optionone==="c"){
   props.mfrFour();
   props.statUpdateNone();
   props.btnThreeone()
  }
  else if (optionone==="d"){
   props.mfrFour();
   props.statUpdateNone();
  props.btnThreeone()
  }}
  else if (stat==="Marked"){
    if(optionone===""){
    props.nextThree();
    props.statUpdateKone();
    props.btnTwoone();
   }
   else if (optionone==="a"){
    props.mfrFive();
    props.statUpdateNone();
    props.btnThreeone()


   }
   else if (optionone==="b"){
    props.mfrFive();
    props.statUpdateNone();
    props.btnThreeone()
   }
   else if (optionone==="c"){
    props.mfrFive();
    props.statUpdateNone();
    props.btnThreeone()
   }
   else if (optionone==="d"){
    props.mfrFive();
    props.statUpdateNone();
    props.btnThreeone()
    }}
   else if (stat==="Marked For Review"){
     if(optionone==="a"){
    props.nextThree();
    props.statUpdateKone();
    props.btnThreeone()
   }
   else if (optionone==="b"){
    props.nextThree();
    props.statUpdateKone();
    props.btnThreeone()
   }
   else if (optionone==="c"){
    props.nextThree();
    props.statUpdateKone();
    props.btnThreeone()
   }
   else if (optionone==="d"){
    props.nextThree();
    props.statUpdateKone();
    props.btnThreeone()
   }}
   else if (stat==="Answered"){
     if(optionone==="a"){
    props.mfrSix();
    props.statUpdateNone();
    props.btnThreeone()
   }
   else if (optionone==="b"){
    props.mfrSix();
    props.statUpdateNone();
    props.btnThreeone()
   }
   else if (optionone==="c"){
    props.mfrSix();
    props.statUpdateNone();
    props.btnThreeone()
   }
   else if (optionone==="d"){
    props.mfrSix();
    props.statUpdateNone();
    props.btnThreeone()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionone===""){
    props.nextOne();
    props.statUpdateone();
    props.btnOneone()
  }
  
   else if (optionone==="a"){
    props.nextTwo();
    props.statUpdateAone();
    props.btnFourone()
   }
   else if (optionone==="b"){
     props.nextTwo();
     props.statUpdateAone();
     props.btnFouroneone()
    }
    else if (optionone==="c"){
     props.nextTwo();
     props.statUpdateAone();
     props.btnFourone()
    }
    else if (optionone==="d"){
     props.nextTwo();
     props.statUpdateAone();
     props.btnFourone()
    }}
   
  else if (stat==="Not Answered"){
    if(optionone===""){
   props.nextThree();
   props.statUpdateKone();
   props.btnOneone()
  }
  else if (optionone==="a"){
   props.nextFour();
   props.statUpdateAone();
   props.btnFourone()
  }
  else if (optionone==="b"){
    props.nextFour();
    props.statUpdateAone();
    props.btnFourone()
   }
   else if (optionone==="c"){
    props.nextFour();
    props.statUpdateAone();
    props.btnFourone()
   }
   else if (optionone==="d"){
    props.nextFour();
    props.statUpdateAone();
    props.btnFourone()
   }}
   else if (stat==="Marked"){
     if(optionone===""){
     props.nextThree();
     props.statUpdateKone();
     props.btnTwoone()
    }
    else if (optionone==="a"){
     props.mfrFive();
     props.statUpdateNone();
     props.btnThreeone()
    }
    else if (optionone==="b"){
     props.mfrFive();
     props.statUpdateNone();
     props.btnThreeone()
    }
    else if ( optionone==="c"){
     props.mfrFive();
     props.statUpdateNone();
     props.btnThreeone()
    }
    else if ( optionone==="d"){
     props.mfrFive();
     props.statUpdateNone();
     props.btnThreeone()
      }}
    else if (stat==="Marked For Review"){
      if(optionone==="a"){
     props.mfrSeven();
     props.statUpdateAone();
     props.btnFourone()
    }
    else if (optionone==="b"){
      props.mfrSevenone();
      props.statUpdateAone();
      props.btnFourone()
    }
    else if (optionone==="c"){
      props.mfrSeven();
      props.statUpdateAone();
      props.btnFourone()
    }
    else if ( optionone==="d"){
      props.mfrSeven();
      props.statUpdateAone();
      props.btnFourone()
    }}
    else if (stat==="Answered"){
      if(optionone==="a"){
      props.nextThree();
      props.statUpdateKone();
      props.btnFourone()
    }
    else if (optionone==="b"){
      props.nextThree();
      props.statUpdateKone();
      props.btnFourone()
    }
    else if (optionone==="c"){
      props.nextThree();
      props.statUpdateKone();
      props.btnFourone()
    }
    else if (optionone==="d"){
      props.nextThree();
      props.statUpdateKone();
      props.btnFourone()
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
     <p style={wStyle}>Test Name: <b>Plant Kingdom</b></p>
     <p style={wStyle1}>Name Of the Candidate: <b>{props.name}</b></p>  
    <form>
    {/* <h5>Question No.2 </h5> */}
    <p><i>Question No.2</i><br></br>Each character is given equal importance at the same time hundreds of characters can be considered in 
</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionone=== 'a'}
          onClick={handleChange}
        /> cytotaxonomy
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionone === 'b'}
          onClick={handleChange}
        /> morphotaxonomy
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionone === 'c'}
          onClick={handleChange}
        /> chemotaxonomy
       
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionone=== 'd'}
          onClick={handleChange}
        /> numerical taxonomy
      </div>
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/PKthree'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/PKthree'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/PKthree'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/PKone'))}>Previous</button>
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><PKtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/PKconfirm'))}>Submit Test</button>
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
  statusone:state.statusone,
  optionone:state.optionone,
  BHealthanddiseaseThree:state.BHealthanddiseaseThree,
  BHealthanddiseaseThreeA:state.BHealthanddiseaseThreeA,
  BHealthanddiseaseThreeB:state.BHealthanddiseaseThreeB,
  BHealthanddiseaseThreeC:state.BHealthanddiseaseThreeC,
  BHealthanddiseaseThreeD:state.BHealthanddiseaseThreeD,
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
    optAone:()=>dispatch(optAone()),
    optBone:()=>dispatch(optBone()),
    optCone:()=>dispatch(optCone()),
    optDone:()=>dispatch(optDone()),
    statUpdateone:()=>dispatch(statUpdateone()),
    statUpdateAone:()=>dispatch(statUpdateAone()),
    statUpdateMone:()=>dispatch(statUpdateMone()),
    statUpdateNone:()=>dispatch(statUpdateNone()),
    statUpdateKone:()=>dispatch(statUpdateKone()),
    btnOneone:()=>dispatch(btnOneone()),
    btnTwoone:()=>dispatch(btnTwoone()),
    btnThreeone:()=>dispatch(btnThreeone()),
    btnFourone:()=>dispatch(btnFourone()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (PKtwo)