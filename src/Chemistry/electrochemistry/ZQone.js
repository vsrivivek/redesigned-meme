import React from 'react'
import { timerUpdate,nextOne,left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven,optA,optB,optC,optD,btnOne,btnTwo,btnThree,btnFour,statUpdate,statUpdateA,statUpdateK,statUpdateM,statUpdateN } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from '../components/CakeNumbers';
// import QuestionNumbers from '../components/QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
// import Timer from '../components/Timer ';
// import Timer from '../../components/Timer ';
import ZQtimer from './ZQtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function ZQone(props) {
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
    "width": "275px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const navigate = useNavigate()  
    var stat=props.status;
    var opt=props.option

  const [option, setOption] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOption(event.target.value);
    
  }
  
function optionChange(){
 if(option==="a"){
   props.optA()
 }
 if(option==="b"){
   props.optB()
 }
 if(option==="c"){
   props.optC()
 }
 if(option==="d"){
   props.optD()
 }
}

 useEffect(()=>{
  setOption(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (option===""){
  props.nextOne();
  props.statUpdate();
  props.btnOne()
  
 }
 
  else if (option==="a"){
   props.nextTwo();
   props.statUpdateA();
   props.btnFour()
  
   
  }
  else if (option==="b"){
    props.nextTwo();
    props.statUpdateA();
    props.btnFour()
   }
   else if (option==="c"){
    props.nextTwo();
    props.statUpdateA();
    props.btnFour()
   }
   else if (option==="d"){
    props.nextTwo();
    props.statUpdateA();
    props.btnFour()
   }}
   else if (stat==="Not Answered"){
     if(option===""){
    props.nextThree();
    props.statUpdateK();
    props.btnOne()
    
   }
   
    else if (option==="a"){
     props.nextFour();
     props.statUpdateA();
     props.btnFour()
     
    }
    else if (option==="b"){
      props.nextFour();
      props.statUpdateA();
      props.btnFour()
      
     }
     else if (option==="c"){
      props.nextFour();
      props.statUpdateA();
      props.btnFour()
      
     }
     else if ( option==="d"){
      props.nextFour();
      props.statUpdateA();
      props.btnFour()
      
     }}
     else if (stat==="Marked"){
     if(option===""){
      props.nextThree();
      props.statUpdateK();
      props.btnThree()
      
     }
          else if (option==="a"){
      props.mfrFive();
      props.statUpdateN();
      props.btnThree()

     }
     else if (option==="b"){
       props.mfrFive();
       props.statUpdateN();
       props.btnThree()

      }
      else if (option==="c"){
       props.mfrFive();
       props.statUpdateN();
       props.btnThree()

      }
      else if (option==="d"){
       props.mfrFive();
       props.statUpdateN();
       props.btnThree()

        }}
     
     else if (stat==="Marked For Review"){
     if(option==="a"){
      props.nextThree();
      props.statUpdateK();
      props.btnThree()

      
     }
     else if (option==="b"){
      props.nextThree();
      props.statUpdateK();
      props.btnThree() 
     }
     else if (option==="c"){
      props.nextThree();
      props.statUpdateK();
      props.btnThree()
     }
     else if (option==="d"){
      props.nextThree();
      props.statUpdateK();
      props.btnThree()
     }}
     else if(stat==="Answered"){
     if (option==="a"){
      props.nextThree();
      props.statUpdateK();
      props.btnFour()

      
     }
     else if (option==="b"){
      props.nextThree();
      props.statUpdateK();
      props.btnFour()

      
     }
     else if ( option==="c"){
      props.nextThree();
      props.statUpdateK();
      props.btnFour()
      
     }
     else if (option==="d"){
      props.nextThree();
      props.statUpdateK();
      props.btnFour()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(option===""){
  props.mfrOne();
  props.statUpdateM();
  props.btnTwo()
 }
 
  else if (option==="a"){
   props.mfrTwo();
   props.statUpdateN();
   props.btnThree()
  }
  else if (option==="b"){
    props.mfrTwo();
    props.statUpdateN();
    props.btnThree()
  

   }
   else if (option==="c"){
    props.mfrTwo();
    props.statUpdateN();
    props.btnThree()
  
   }
   else if (option==="d"){
    props.mfrTwo();
    props.statUpdateN();
    props.btnThree()

   }}
  
 else if (stat==="Not Answered"){
   if(option===""){
  props.mfrThree();
  props.statUpdateM();
  props.btnTwo();
 }
 else if (option==="a"){
  props.mfrFour();
  props.statUpdateN();
  props.btnThree()
 }
 else if (option==="b"){
   props.mfrFour();
   props.statUpdateN();
   props.btnThree()
  }
  else if (option==="c"){
   props.mfrFour();
   props.statUpdateN();
   props.btnThree()
  }
  else if (option==="d"){
   props.mfrFour();
   props.statUpdateN();
  props.btnThree()
  }}
  else if (stat==="Marked"){
    if(option===""){
    props.nextThree();
    props.statUpdateK();
    props.btnTwo();
   }
   else if (option==="a"){
    props.mfrFive();
    props.statUpdateN();
    props.btnThree()


   }
   else if (option==="b"){
    props.mfrFive();
    props.statUpdateN();
    props.btnThree()
   }
   else if (option==="c"){
    props.mfrFive();
    props.statUpdateN();
    props.btnThree()
   }
   else if (option==="d"){
    props.mfrFive();
    props.statUpdateN();
    props.btnThree()
    }}
   else if (stat==="Marked For Review"){
     if(option==="a"){
    props.nextThree();
    props.statUpdateK();
    props.btnThree()
   }
   else if (option==="b"){
    props.nextThree();
    props.statUpdateK();
    props.btnThree()
   }
   else if (option==="c"){
    props.nextThree();
    props.statUpdateK();
    props.btnThree()
   }
   else if (option==="d"){
    props.nextThree();
    props.statUpdateK();
    props.btnThree()
   }}
   else if (stat==="Answered"){
     if(option==="a"){
    props.mfrSix();
    props.statUpdateN();
    props.btnThree()
   }
   else if (option==="b"){
    props.mfrSix();
    props.statUpdateN();
    props.btnThree()
   }
   else if (option==="c"){
    props.mfrSix();
    props.statUpdateN();
    props.btnThree()
   }
   else if (option==="d"){
    props.mfrSix();
    props.statUpdateN();
    props.btnThree()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(option===""){
    props.nextOne();
    props.statUpdate();
    props.btnOne()
  }
  
   else if (option==="a"){
    props.nextTwo();
    props.statUpdateA();
    props.btnFour()
   }
   else if (option==="b"){
     props.nextTwo();
     props.statUpdateA();
     props.btnFour()
    }
    else if (option==="c"){
     props.nextTwo();
     props.statUpdateA();
     props.btnFour()
    }
    else if (option==="d"){
     props.nextTwo();
     props.statUpdateA();
     props.btnFour()
    }}
   
  else if (stat==="Not Answered"){
    if(option===""){
   props.nextThree();
   props.statUpdateK();
   props.btnOne()
  }
  else if (option==="a"){
   props.nextFour();
   props.statUpdateA();
   props.btnFour()
  }
  else if (option==="b"){
    props.nextFour();
    props.statUpdateA();
    props.btnFour()
   }
   else if (option==="c"){
    props.nextFour();
    props.statUpdateA();
    props.btnFour()
   }
   else if (option==="d"){
    props.nextFour();
    props.statUpdateA();
    props.btnFour()
   }}
   else if (stat==="Marked"){
     if(option===""){
     props.nextThree();
     props.statUpdateK();
     props.btnTwo()
    }
    else if (option==="a"){
     props.mfrFive();
     props.statUpdateN();
     props.btnThree()
    }
    else if (option==="b"){
     props.mfrFive();
     props.statUpdateN();
     props.btnThree()
    }
    else if ( option==="c"){
     props.mfrFive();
     props.statUpdateN();
     props.btnThree()
    }
    else if ( option==="d"){
     props.mfrFive();
     props.statUpdateN();
     props.btnThree()
      }}
    else if (stat==="Marked For Review"){
      if(option==="a"){
     props.mfrSeven();
     props.statUpdateA();
     props.btnFour()
    }
    else if (option==="b"){
      props.mfrSeven();
      props.statUpdateA();
      props.btnFour()
    }
    else if (option==="c"){
      props.mfrSeven();
      props.statUpdateA();
      props.btnFour()
    }
    else if ( option==="d"){
      props.mfrSeven();
      props.statUpdateA();
      props.btnFour()
    }}
    else if (stat==="Answered"){
      if(option==="a"){
      props.nextThree();
      props.statUpdateK();
      props.btnFour()
    }
    else if (option==="b"){
      props.nextThree();
      props.statUpdateK();
      props.btnFour()
    }
    else if (option==="c"){
      props.nextThree();
      props.statUpdateK();
      props.btnFour()
    }
    else if (option==="d"){
      props.nextThree();
      props.statUpdateK();
      props.btnFour()
          }}
    optionChange()
 }

    return (<div>
      <div className={props.header} style={bStyle}>
     <h1 style={hStyle}> <img  style={logoStyle} src={Logo} alt="Logo" /></h1> 
           </div>
    <div className= {props.total}>
     <div className={props.left}>
     <p style={wStyle}>Test Name: <b>Electrochemistry</b></p>
     <p style={wStyle1}>Name Of the Candidate: <b>{props.name}</b></p> 
    <form>
    <p><i>Question No.1</i><br></br>The flow of current in an electroylte is due to movement of 

 </p>
      <div>
        <input
          type="radio"
          value="a"
          checked={option === 'a'}
          onClick={handleChange}
        /> Electrons
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={option === 'b'}
          onClick={handleChange}
        /> Protons
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={option === 'c'}
          onClick={handleChange}
        /> Ions
        
        </div>
        
      <div>
        <input
          type="radio"
          value="d"
          checked={option === 'd'}
          onClick={handleChange}
        /> Molecules
 
      </div>
    </form> <br></br>
    <div className={props.buttons}>
        <button  onClick={()=>(clickHanlderNext)(navigate('/ZQtwo'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/ZQtwo'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/ZQtwo'))}>Save & Next</button>
        </div>
        </div> 

        <div className={props.right}>
          <div className={props.timerdiv}><ZQtimer /></div> 
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/ZQconfirm'))}>Submit Test</button>
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
  status:state.status,
  option:state.option,
BHealthanddiseaseOne: state.BHealthanddiseaseOne,
BHealthanddiseaseOneA: state.BHealthanddiseaseOneA,    
BHealthanddiseaseOneB: state.BHealthanddiseaseOneB,	          
BHealthanddiseaseOneC: state.BHealthanddiseaseOneC,
BHealthanddiseaseOneD: state.BHealthanddiseaseOneD,
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
    optA:()=>dispatch(optA()),
    optB:()=>dispatch(optB()),
    optC:()=>dispatch(optC()),
    optD:()=>dispatch(optD()),
    statUpdate:()=>dispatch(statUpdate()),
    statUpdateA:()=>dispatch(statUpdateA()),
    statUpdateM:()=>dispatch(statUpdateM()),
    statUpdateN:()=>dispatch(statUpdateN()),
    statUpdateK:()=>dispatch(statUpdateK()),
    btnOne:()=>dispatch(btnOne()),
    btnTwo:()=>dispatch(btnTwo()),
    btnThree:()=>dispatch(btnThree()),
    btnFour:()=>dispatch(btnFour()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (ZQone)