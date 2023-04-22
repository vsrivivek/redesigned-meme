import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAseven,optBseven,optCseven,optDseven,btnOneseven,btnTwoseven,btnThreeseven,btnFourseven,statUpdateseven,statUpdateAseven,statUpdateKseven,statUpdateMseven,statUpdateNseven,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
// import PTtimer from './PTtimer ';
import ZDtimer from './ZDtimer'
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function ZDeight(props) {
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
    var stat=props.statusseven;
    var opt=props.optionseven

  const [optionseven, setOptionseven] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionseven(event.target.value);
    
  }
  
function optionChange(){
 if(optionseven==="a"){
   props.optAseven()
 }
 if(optionseven==="b"){
   props.optBseven()
 }
 if(optionseven==="c"){
   props.optCseven()
 }
 if(optionseven==="d"){
   props.optDseven()
 }
}

 useEffect(()=>{
  setOptionseven(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionseven===""){
  props.nextOne();
  props.statUpdateseven();
  props.btnOneseven()
  
 }
 
  else if (optionseven==="a"){
   props.nextTwo();
   props.statUpdateAseven();
   props.btnFourseven()
  
   
  }
  else if (optionseven==="b"){
    props.nextTwo();
    props.statUpdateAseven();
    props.btnFourseven()
   }
   else if (optionseven==="c"){
    props.nextTwo();
    props.statUpdateAseven();
    props.btnFourseven()
   }
   else if (optionseven==="d"){
    props.nextTwo();
    props.statUpdateAseven();
    props.btnFourseven()
   }}
   else if (stat==="Not Answered"){
     if(optionseven===""){
    props.nextThree();
    props.statUpdateKseven();
    props.btnOneseven()
    
   }
   
    else if (optionseven==="a"){
     props.nextFour();
     props.statUpdateAseven();
     props.btnFourseven()
     
    }
    else if (optionseven==="b"){
      props.nextFour();
      props.statUpdateAseven();
      props.btnFourseven()
      
     }
     else if (optionseven==="c"){
      props.nextFour();
      props.statUpdateAseven();
      props.btnFourseven()
      
     }
     else if ( optionseven==="d"){
      props.nextFour();
      props.statUpdateAseven();
      props.btnFourseven()
      
     }}
     else if (stat==="Marked"){
     if(optionseven===""){
      props.nextThree();
      props.statUpdateKseven();
      props.btnThreeseven()
      
     }
          else if (optionseven==="a"){
      props.mfrFive();
      props.statUpdateNseven();
      props.btnThreeseven()

     }
     else if (optionseven==="b"){
       props.mfrFive();
       props.statUpdateNseven();
       props.btnThreeseven()

      }
      else if (optionseven==="c"){
       props.mfrFive();
       props.statUpdateNseven();
       props.btnThreeseven()

      }
      else if (optionseven==="d"){
       props.mfrFive();
       props.statUpdateNseven();
       props.btnThreeseven()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionseven==="a"){
      props.nextThree();
      props.statUpdateKseven();
      props.btnThreeseven()

      
     }
     else if (optionseven==="b"){
      props.nextThree();
      props.statUpdateKseven();
      props.btnThreeseven() 
     }
     else if (optionseven==="c"){
      props.nextThree();
      props.statUpdateKseven();
      props.btnThreeseven()
     }
     else if (optionseven==="d"){
      props.nextThree();
      props.statUpdateKseven();
      props.btnThreeseven()
     }}
     else if(stat==="Answered"){
     if (optionseven==="a"){
      props.nextThree();
      props.statUpdateKseven();
      props.btnFourseven()

      
     }
     else if (optionseven==="b"){
      props.nextThree();
      props.statUpdateKseven();
      props.btnFourseven()

      
     }
     else if ( optionseven==="c"){
      props.nextThree();
      props.statUpdateKseven();
      props.btnFourseven()
      
     }
     else if (optionseven==="d"){
      props.nextThree();
      props.statUpdateKseven();
      props.btnFourseven()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionseven===""){
  props.mfrOne();
  props.statUpdateMseven();
  props.btnTwoseven()
 }
 
  else if (optionseven==="a"){
   props.mfrTwo();
   props.statUpdateNseven();
   props.btnThreeseven()
  }
  else if (optionseven==="b"){
    props.mfrTwo();
    props.statUpdateNseven();
    props.btnThreeseven()
  

   }
   else if (optionseven==="c"){
    props.mfrTwo();
    props.statUpdateNseven();
    props.btnThreeseven()
  
   }
   else if (optionseven==="d"){
    props.mfrTwo();
    props.statUpdateNseven();
    props.btnThreeseven()

   }}
  
 else if (stat==="Not Answered"){
   if(optionseven===""){
  props.mfrThree();
  props.statUpdateMseven();
  props.btnTwoseven();
 }
 else if (optionseven==="a"){
  props.mfrFour();
  props.statUpdateNseven();
  props.btnThreeseven()
 }
 else if (optionseven==="b"){
   props.mfrFour();
   props.statUpdateNseven();
   props.btnThreeseven()
  }
  else if (optionseven==="c"){
   props.mfrFour();
   props.statUpdateNseven();
   props.btnThreeseven()
  }
  else if (optionseven==="d"){
   props.mfrFour();
   props.statUpdateNseven();
  props.btnThreeseven()
  }}
  else if (stat==="Marked"){
    if(optionseven===""){
    props.nextThree();
    props.statUpdateKseven();
    props.btnTwoseven();
   }
   else if (optionseven==="a"){
    props.mfrFive();
    props.statUpdateNseven();
    props.btnThreeseven()


   }
   else if (optionseven==="b"){
    props.mfrFive();
    props.statUpdateNseven();
    props.btnThreeseven()
   }
   else if (optionseven==="c"){
    props.mfrFive();
    props.statUpdateNseven();
    props.btnThreeseven()
   }
   else if (optionseven==="d"){
    props.mfrFive();
    props.statUpdateNseven();
    props.btnThreeseven()
    }}
   else if (stat==="Marked For Review"){
     if(optionseven==="a"){
    props.nextThree();
    props.statUpdateKseven();
    props.btnThreeseven()
   }
   else if (optionseven==="b"){
    props.nextThree();
    props.statUpdateKseven();
    props.btnThreeseven()
   }
   else if (optionseven==="c"){
    props.nextThree();
    props.statUpdateKseven();
    props.btnThreeseven()
   }
   else if (optionseven==="d"){
    props.nextThree();
    props.statUpdateKseven();
    props.btnThreeseven()
   }}
   else if (stat==="Answered"){
     if(optionseven==="a"){
    props.mfrSix();
    props.statUpdateNseven();
    props.btnThreeseven()
   }
   else if (optionseven==="b"){
    props.mfrSix();
    props.statUpdateNseven();
    props.btnThreeseven()
   }
   else if (optionseven==="c"){
    props.mfrSix();
    props.statUpdateNseven();
    props.btnThreeseven()
   }
   else if (optionseven==="d"){
    props.mfrSix();
    props.statUpdateNseven();
    props.btnThreeseven()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionseven===""){
    props.nexttwo();
    props.statUpdateseven();
    props.btnOneseven()
  }
  
   else if (optionseven==="a"){
    props.nextTwo();
    props.statUpdateAseven();
    props.btnFourseven()
   }
   else if (optionseven==="b"){
     props.nextTwo();
     props.statUpdateAseven();
     props.btnFourseven()
    }
    else if (optionseven==="c"){
     props.nextTwo();
     props.statUpdateAseven();
     props.btnFourseven()
    }
    else if (optionseven==="d"){
     props.nextTwo();
     props.statUpdateAseven();
     props.btnFourseven()
    }}
   
  else if (stat==="Not Answered"){
    if(optionseven===""){
   props.nextThree();
   props.statUpdateKseven();
   props.btnOneseven()
  }
  else if (optionseven==="a"){
   props.nextFour();
   props.statUpdateAseven();
   props.btnFourseven()
  }
  else if (optionseven==="b"){
    props.nextFour();
    props.statUpdateAseven();
    props.btnFourseven()
   }
   else if (optionseven==="c"){
    props.nextFour();
    props.statUpdateAseven();
    props.btnFourseven()
   }
   else if (optionseven==="d"){
    props.nextFour();
    props.statUpdateAseven();
    props.btnFourseven()
   }}
   else if (stat==="Marked"){
     if(optionseven===""){
     props.nextThree();
     props.statUpdateKseven();
     props.btnTwoseven()
    }
    else if (optionseven==="a"){
     props.mfrFive();
     props.statUpdateNseven();
     props.btnThreeseven()
    }
    else if (optionseven==="b"){
     props.mfrFive();
     props.statUpdateNseven();
     props.btnThreeseven()
    }
    else if ( optionseven==="c"){
     props.mfrFive();
     props.statUpdateNseven();
     props.btnThreeseven()
    }
    else if ( optionseven==="d"){
     props.mfrFive();
     props.statUpdateNseven();
     props.btnThreeseven()
      }}
    else if (stat==="Marked For Review"){
      if(optionseven==="a"){
     props.mfrSeven();
     props.statUpdateAseven();
     props.btnFourseven()
    }
    else if (optionseven==="b"){
      props.mfrSeventwo();
      props.statUpdateAseven();
      props.btnFourseven()
    }
    else if (optionseven==="c"){
      props.mfrSeven();
      props.statUpdateAseven();
      props.btnFourseven()
    }
    else if ( optionseven==="d"){
      props.mfrSeven();
      props.statUpdateAseven();
      props.btnFourseven()
    }}
    else if (stat==="Answered"){
      if(optionseven==="a"){
      props.nextThree();
      props.statUpdateKseven();
      props.btnFourseven()
    }
    else if (optionseven==="b"){
      props.nextThree();
      props.statUpdateKseven();
      props.btnFourseven()
    }
    else if (optionseven==="c"){
      props.nextThree();
      props.statUpdateKseven();
      props.btnFourseven()
    }
    else if (optionseven==="d"){
      props.nextThree();
      props.statUpdateKseven();
      props.btnFourseven()
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
     <p style={wStyle}>Test Name: <b>Electrostatics</b></p>
     <p style={wStyle1}>Name of the Candidate: <b>{props.name}</b></p>  
    <form>
    <p><i>Question No.8</i><br></br>A parallel plate capacitor has area of each plate A, the separation between the plates is d. It is charged to a potential V and then disconnected from the battery. How much work will be done in filling the capacitor completely with a dielectric of constant K?</p> 
      <div>
        <input
          type="radio"
          value="a"
          checked={optionseven === 'a'}
          onClick={handleChange}
        /> [({'\u03b5'}<sub>0</sub>AV<sup>2</sup>)/2d][1-(1/K<sup>2</sup>)]
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionseven === 'b'}
          onClick={handleChange}
        /> [({'\u03b5'}<sub>0</sub>AV<sup>2</sup>)/2Kd]                
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionseven === 'c'}
          onClick={handleChange}
        /> [({'\u03b5'}<sub>0</sub>AV<sup>2</sup>)/2K<sup>2</sup>d]                    
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionseven === 'd'}
          onClick={handleChange}
        /> [({'\u03b5'}<sub>0</sub>AV<sup>2</sup>)/2d][1-(1/K)]
      </div>
     
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/ZDnine'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/ZDnine'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/ZDnine'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/ZDseven'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><ZDtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/ZDconfirm'))}>Submit Test</button>
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
     statusseven:state.statusseven,
     optionseven:state.optionseven,
  BHealthanddiseaseNine:state.BHealthanddiseaseNine,
  BHealthanddiseaseNineA:state.BHealthanddiseaseNineA,
  BHealthanddiseaseNineB:state.BHealthanddiseaseNineB,
  BHealthanddiseaseNineC:state.BHealthanddiseaseNineC,
  BHealthanddiseaseNineD:state.BHealthanddiseaseNineD,
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
    optAseven:()=>dispatch(optAseven()),
    optBseven:()=>dispatch(optBseven()),
    optCseven:()=>dispatch(optCseven()),
    optDseven:()=>dispatch(optDseven()),
    statUpdateseven:()=>dispatch(statUpdateseven()),
    statUpdateAseven:()=>dispatch(statUpdateAseven()),
    statUpdateMseven:()=>dispatch(statUpdateMseven()),
    statUpdateNseven:()=>dispatch(statUpdateNseven()),
    statUpdateKseven:()=>dispatch(statUpdateKseven()),
    btnOneseven:()=>dispatch(btnOneseven()),
    btnTwoseven:()=>dispatch(btnTwoseven()),
    btnThreeseven:()=>dispatch(btnThreeseven()),
    btnFourseven:()=>dispatch(btnFourseven()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (ZDeight)