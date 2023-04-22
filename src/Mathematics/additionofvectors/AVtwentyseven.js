import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwentysix,optBtwentysix,optCtwentysix,optDtwentysix,btnOnetwentysix,btnTwotwentysix,btnThreetwentysix,btnFourtwentysix,statUpdatetwentysix,statUpdateAtwentysix,statUpdateKtwentysix,statUpdateMtwentysix,statUpdateNtwentysix,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import AVtimer from './AVtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'
import { useNavigate } from 'react-router-dom'



function AVtwentyseven(props) {
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
      {/* <h5>Question No.27</h5> */}
    <p><i>Question No.27</i><br></br>If m<sub>1</sub>,m<sub>2</sub>,m<sub>3</sub> and m<sub>4</sub> are respectively the magnitudes of the vectors <b>a</b><sub>1</sub>=2<b>i</b>-<b>j</b>+<b>k</b>, <b>a</b><sub>2</sub>=3<b>i</b>-4<b>j</b>-4<b>k</b>,<b>a</b><sub>3</sub>=<b>i</b>+<b>j</b>-<b>k</b>,<b>a</b><sub>4</sub>=-<b>i</b>+3<b>j</b>+<b>k</b> then the correct order of m<sub>1</sub>,m<sub>2</sub>,m<sub>3</sub> and m<sub>4</sub> is:
    <br></br><b>[EAMCET 15AP,09]</b>
</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwentysix=== 'a'}
          onClick={handleChange}
        /> m<sub>3</sub>{'\u003c'}m<sub>1</sub>{'\u003c'}m<sub>4</sub>{'\u003c'}m<sub>2</sub>
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwentysix === 'b'}
          onClick={handleChange}
        /> m<sub>3</sub>{'\u003c'}m<sub>1</sub>{'\u003c'}m<sub>2</sub>{'\u003c'}m<sub>4</sub>
       
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwentysix === 'c'}
          onClick={handleChange}
        /> m<sub>3</sub>{'\u003c'}m<sub>4</sub>{'\u003c'}m<sub>1</sub>{'\u003c'}m<sub>2</sub>
       
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwentysix === 'd'}
          onClick={handleChange}
        /> m<sub>3</sub>{'\u003c'}m<sub>4</sub>{'\u003c'}m<sub>2</sub>{'\u003c'}m<sub>1</sub>
      </div>
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/AVtwentyeight'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/AVtwentyeight'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/AVtwentyeight'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/AVtwentysix'))}>Previous</button>
    
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
export default connect(mapStateToProps,mapDispatchToProps) (AVtwentyseven)