import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAsix,optBsix,optCsix,optDsix,btnOnesix,btnTwosix,btnThreesix,btnFoursix,statUpdatesix,statUpdateAsix,statUpdateKsix,statUpdateMsix,statUpdateNsix,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import AVtimer from './AVtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function AVseven(props) {
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
    var stat=props.statussix;
    var opt=props.optionsix

  const [optionsix, setOptionsix] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionsix(event.target.value);
    
  }
  
function optionChange(){
 if(optionsix==="a"){
   props.optAsix()
 }
 if(optionsix==="b"){
   props.optBsix()
 }
 if(optionsix==="c"){
   props.optCsix()
 }
 if(optionsix==="d"){
   props.optDsix()
 }
}

 useEffect(()=>{
  setOptionsix(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionsix===""){
  props.nextOne();
  props.statUpdatesix();
  props.btnOnesix()
  
 }
 
  else if (optionsix==="a"){
   props.nextTwo();
   props.statUpdateAsix();
   props.btnFoursix()
  
   
  }
  else if (optionsix==="b"){
    props.nextTwo();
    props.statUpdateAsix();
    props.btnFoursix()
   }
   else if (optionsix==="c"){
    props.nextTwo();
    props.statUpdateAsix();
    props.btnFoursix()
   }
   else if (optionsix==="d"){
    props.nextTwo();
    props.statUpdateAsix();
    props.btnFoursix()
   }}
   else if (stat==="Not Answered"){
     if(optionsix===""){
    props.nextThree();
    props.statUpdateKsix();
    props.btnOnesix()
    
   }
   
    else if (optionsix==="a"){
     props.nextFour();
     props.statUpdateAsix();
     props.btnFoursix()
     
    }
    else if (optionsix==="b"){
      props.nextFour();
      props.statUpdateAsix();
      props.btnFoursix()
      
     }
     else if (optionsix==="c"){
      props.nextFour();
      props.statUpdateAsix();
      props.btnFoursix()
      
     }
     else if ( optionsix==="d"){
      props.nextFour();
      props.statUpdateAsix();
      props.btnFoursix()
      
     }}
     else if (stat==="Marked"){
     if(optionsix===""){
      props.nextThree();
      props.statUpdateKsix();
      props.btnThreesix()
      
     }
          else if (optionsix==="a"){
      props.mfrFive();
      props.statUpdateNsix();
      props.btnThreesix()

     }
     else if (optionsix==="b"){
       props.mfrFive();
       props.statUpdateNsix();
       props.btnThreesix()

      }
      else if (optionsix==="c"){
       props.mfrFive();
       props.statUpdateNsix();
       props.btnThreesix()

      }
      else if (optionsix==="d"){
       props.mfrFive();
       props.statUpdateNsix();
       props.btnThreesix()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionsix==="a"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnThreesix()

      
     }
     else if (optionsix==="b"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnThreesix() 
     }
     else if (optionsix==="c"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnThreesix()
     }
     else if (optionsix==="d"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnThreesix()
     }}
     else if(stat==="Answered"){
     if (optionsix==="a"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()

      
     }
     else if (optionsix==="b"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()

      
     }
     else if ( optionsix==="c"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()
      
     }
     else if (optionsix==="d"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionsix===""){
  props.mfrOne();
  props.statUpdateMsix();
  props.btnTwosix()
 }
 
  else if (optionsix==="a"){
   props.mfrTwo();
   props.statUpdateNsix();
   props.btnThreesix()
  }
  else if (optionsix==="b"){
    props.mfrTwo();
    props.statUpdateNsix();
    props.btnThreesix()
  

   }
   else if (optionsix==="c"){
    props.mfrTwo();
    props.statUpdateNsix();
    props.btnThreesix()
  
   }
   else if (optionsix==="d"){
    props.mfrTwo();
    props.statUpdateNsix();
    props.btnThreesix()

   }}
  
 else if (stat==="Not Answered"){
   if(optionsix===""){
  props.mfrThree();
  props.statUpdateMsix();
  props.btnTwosix();
 }
 else if (optionsix==="a"){
  props.mfrFour();
  props.statUpdateNsix();
  props.btnThreesix()
 }
 else if (optionsix==="b"){
   props.mfrFour();
   props.statUpdateNsix();
   props.btnThreesix()
  }
  else if (optionsix==="c"){
   props.mfrFour();
   props.statUpdateNsix();
   props.btnThreesix()
  }
  else if (optionsix==="d"){
   props.mfrFour();
   props.statUpdateNsix();
  props.btnThreesix()
  }}
  else if (stat==="Marked"){
    if(optionsix===""){
    props.nextThree();
    props.statUpdateKsix();
    props.btnTwosix();
   }
   else if (optionsix==="a"){
    props.mfrFive();
    props.statUpdateNsix();
    props.btnThreesix()


   }
   else if (optionsix==="b"){
    props.mfrFive();
    props.statUpdateNsix();
    props.btnThreesix()
   }
   else if (optionsix==="c"){
    props.mfrFive();
    props.statUpdateNsix();
    props.btnThreesix()
   }
   else if (optionsix==="d"){
    props.mfrFive();
    props.statUpdateNsix();
    props.btnThreesix()
    }}
   else if (stat==="Marked For Review"){
     if(optionsix==="a"){
    props.nextThree();
    props.statUpdateKsix();
    props.btnThreesix()
   }
   else if (optionsix==="b"){
    props.nextThree();
    props.statUpdateKsix();
    props.btnThreesix()
   }
   else if (optionsix==="c"){
    props.nextThree();
    props.statUpdateKsix();
    props.btnThreesix()
   }
   else if (optionsix==="d"){
    props.nextThree();
    props.statUpdateKsix();
    props.btnThreesix()
   }}
   else if (stat==="Answered"){
     if(optionsix==="a"){
    props.mfrSix();
    props.statUpdateNsix();
    props.btnThreesix()
   }
   else if (optionsix==="b"){
    props.mfrSix();
    props.statUpdateNsix();
    props.btnThreesix()
   }
   else if (optionsix==="c"){
    props.mfrSix();
    props.statUpdateNsix();
    props.btnThreesix()
   }
   else if (optionsix==="d"){
    props.mfrSix();
    props.statUpdateNsix();
    props.btnThreesix()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionsix===""){
    props.nexttwo();
    props.statUpdatesix();
    props.btnOnesix()
  }
  
   else if (optionsix==="a"){
    props.nextTwo();
    props.statUpdateAsix();
    props.btnFoursix()
   }
   else if (optionsix==="b"){
     props.nextTwo();
     props.statUpdateAsix();
     props.btnFoursix()
    }
    else if (optionsix==="c"){
     props.nextTwo();
     props.statUpdateAsix();
     props.btnFoursix()
    }
    else if (optionsix==="d"){
     props.nextTwo();
     props.statUpdateAsix();
     props.btnFoursix()
    }}
   
  else if (stat==="Not Answered"){
    if(optionsix===""){
   props.nextThree();
   props.statUpdateKsix();
   props.btnOnesix()
  }
  else if (optionsix==="a"){
   props.nextFour();
   props.statUpdateAsix();
   props.btnFoursix()
  }
  else if (optionsix==="b"){
    props.nextFour();
    props.statUpdateAsix();
    props.btnFoursix()
   }
   else if (optionsix==="c"){
    props.nextFour();
    props.statUpdateAsix();
    props.btnFoursix()
   }
   else if (optionsix==="d"){
    props.nextFour();
    props.statUpdateAsix();
    props.btnFoursix()
   }}
   else if (stat==="Marked"){
     if(optionsix===""){
     props.nextThree();
     props.statUpdateKsix();
     props.btnTwosix()
    }
    else if (optionsix==="a"){
     props.mfrFive();
     props.statUpdateNsix();
     props.btnThreesix()
    }
    else if (optionsix==="b"){
     props.mfrFive();
     props.statUpdateNsix();
     props.btnThreesix()
    }
    else if ( optionsix==="c"){
     props.mfrFive();
     props.statUpdateNsix();
     props.btnThreesix()
    }
    else if ( optionsix==="d"){
     props.mfrFive();
     props.statUpdateNsix();
     props.btnThreesix()
      }}
    else if (stat==="Marked For Review"){
      if(optionsix==="a"){
     props.mfrSeven();
     props.statUpdateAsix();
     props.btnFoursix()
    }
    else if (optionsix==="b"){
      props.mfrSeventwo();
      props.statUpdateAsix();
      props.btnFoursix()
    }
    else if (optionsix==="c"){
      props.mfrSeven();
      props.statUpdateAsix();
      props.btnFoursix()
    }
    else if ( optionsix==="d"){
      props.mfrSeven();
      props.statUpdateAsix();
      props.btnFoursix()
    }}
    else if (stat==="Answered"){
      if(optionsix==="a"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()
    }
    else if (optionsix==="b"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()
    }
    else if (optionsix==="c"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()
    }
    else if (optionsix==="d"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()
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
      {/* <h5>Question No.7</h5> */}
    <p><i>Question No.7</i><br></br>  If <b>a</b>=3<b>i</b>-2<b>j</b>+<b>k</b>,<b>a</b>=-<b>i</b>+<b>j</b>+<b>k</b> then the unit vector parallel to the vector <b>a</b>+<b>b</b> is
<br></br><b>[EAMCET 96]</b></p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionsix === 'a'}
          onClick={handleChange}
        /> (2/3)<b>i</b>-(1/3)<b>j</b>+(2/3)<b>k</b>      
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionsix === 'b'}
          onClick={handleChange}
        /> (2/5)<b>i</b>-(1/5)<b>j</b>+(2/5)<b>k</b>          
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionsix === 'c'}
          onClick={handleChange}
        /> (2/√3)<b>i</b>-(1/√3)<b>j</b>+(2/3)<b>k</b>             
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionsix === 'd'}
          onClick={handleChange}
        /> -(2/√3)<b>i</b>+(1/√3)<b>j</b>-(2/3)<b>k</b>  

        
      </div>   
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/AVeight'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/AVeight'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/AVeight'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/AVsix'))}>Previous</button>
    
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
     statussix:state.statussix,
     optionsix:state.optionsix,
     BHealthanddiseaseEight:state.BHealthanddiseaseEight,
  BHealthanddiseaseEightA:state.BHealthanddiseaseEightA,
  BHealthanddiseaseEightB:state.BHealthanddiseaseEightB,
  BHealthanddiseaseEightC:state.BHealthanddiseaseEightC,
  BHealthanddiseaseEightD:state.BHealthanddiseaseEightD,
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
    optAsix:()=>dispatch(optAsix()),
    optBsix:()=>dispatch(optBsix()),
    optCsix:()=>dispatch(optCsix()),
    optDsix:()=>dispatch(optDsix()),
    statUpdatesix:()=>dispatch(statUpdatesix()),
    statUpdateAsix:()=>dispatch(statUpdateAsix()),
    statUpdateMsix:()=>dispatch(statUpdateMsix()),
    statUpdateNsix:()=>dispatch(statUpdateNsix()),
    statUpdateKsix:()=>dispatch(statUpdateKsix()),
    btnOnesix:()=>dispatch(btnOnesix()),
    btnTwosix:()=>dispatch(btnTwosix()),
    btnThreesix:()=>dispatch(btnThreesix()),
    btnFoursix:()=>dispatch(btnFoursix()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (AVseven)