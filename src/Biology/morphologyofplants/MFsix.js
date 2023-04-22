import React from 'react'
import { timerUpdate,left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven,optAfive,optBfive,optCfive,optDfive,btnOnefive,btnTwofive,btnThreefive,btnFourfive,statUpdatefive,statUpdateAfive,statUpdateKfive,statUpdateMfive,statUpdateNfive } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import MFtimer from './MFtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function MFsix(props) {
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
    var stat=props.statusfive;
    var opt=props.optionfive

  const [optionfive, setOptionfive] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionfive(event.target.value);
    
  }
  
function optionChange(){
 if(optionfive==="a"){
   props.optAfive()
 }
 if(optionfive==="b"){
   props.optBfive()
 }
 if(optionfive==="c"){
   props.optCfive()
 }
 if(optionfive==="d"){
   props.optDfive()
 }
}

 useEffect(()=>{
  setOptionfive(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionfive===""){
  props.nextOne();
  props.statUpdatefive();
  props.btnOnefive()
  
 }
 
  else if (optionfive==="a"){
   props.nextTwo();
   props.statUpdateAfive();
   props.btnFourfive()
  
   
  }
  else if (optionfive==="b"){
    props.nextTwo();
    props.statUpdateAfive();
    props.btnFourfive()
   }
   else if (optionfive==="c"){
    props.nextTwo();
    props.statUpdateAfive();
    props.btnFourfive()
   }
   else if (optionfive==="d"){
    props.nextTwo();
    props.statUpdateAfive();
    props.btnFourfive()
   }}
   else if (stat==="Not Answered"){
     if(optionfive===""){
    props.nextThree();
    props.statUpdateKfive();
    props.btnOnefive()
    
   }
   
    else if (optionfive==="a"){
     props.nextFour();
     props.statUpdateAfive();
     props.btnFourfive()
     
    }
    else if (optionfive==="b"){
      props.nextFour();
      props.statUpdateAfive();
      props.btnFourfive()
      
     }
     else if (optionfive==="c"){
      props.nextFour();
      props.statUpdateAfive();
      props.btnFourfive()
      
     }
     else if ( optionfive==="d"){
      props.nextFour();
      props.statUpdateAfive();
      props.btnFourfive()
      
     }}
     else if (stat==="Marked"){
     if(optionfive===""){
      props.nextThree();
      props.statUpdateKfive();
      props.btnThreefive()
      
     }
          else if (optionfive==="a"){
      props.mfrFive();
      props.statUpdateNfive();
      props.btnThreefive()

     }
     else if (optionfive==="b"){
       props.mfrFive();
       props.statUpdateNfive();
       props.btnThreefive()

      }
      else if (optionfive==="c"){
       props.mfrFive();
       props.statUpdateNfive();
       props.btnThreefive()

      }
      else if (optionfive==="d"){
       props.mfrFive();
       props.statUpdateNfive();
       props.btnThreefive()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionfive==="a"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnThreefive()

      
     }
     else if (optionfive==="b"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnThreefive() 
     }
     else if (optionfive==="c"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnThreefive()
     }
     else if (optionfive==="d"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnThreefive()
     }}
     else if(stat==="Answered"){
     if (optionfive==="a"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()

      
     }
     else if (optionfive==="b"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()

      
     }
     else if ( optionfive==="c"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()
      
     }
     else if (optionfive==="d"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionfive===""){
  props.mfrOne();
  props.statUpdateMfive();
  props.btnTwofive()
 }
 
  else if (optionfive==="a"){
   props.mfrTwo();
   props.statUpdateNfive();
   props.btnThreefive()
  }
  else if (optionfive==="b"){
    props.mfrTwo();
    props.statUpdateNfive();
    props.btnThreefive()
  

   }
   else if (optionfive==="c"){
    props.mfrTwo();
    props.statUpdateNfive();
    props.btnThreefive()
  
   }
   else if (optionfive==="d"){
    props.mfrTwo();
    props.statUpdateNfive();
    props.btnThreefive()

   }}
  
 else if (stat==="Not Answered"){
   if(optionfive===""){
  props.mfrThree();
  props.statUpdateMfive();
  props.btnTwofive();
 }
 else if (optionfive==="a"){
  props.mfrFour();
  props.statUpdateNfive();
  props.btnThreefive()
 }
 else if (optionfive==="b"){
   props.mfrFour();
   props.statUpdateNfive();
   props.btnThreefive()
  }
  else if (optionfive==="c"){
   props.mfrFour();
   props.statUpdateNfive();
   props.btnThreefive()
  }
  else if (optionfive==="d"){
   props.mfrFour();
   props.statUpdateNfive();
  props.btnThreefive()
  }}
  else if (stat==="Marked"){
    if(optionfive===""){
    props.nextThree();
    props.statUpdateKfive();
    props.btnTwofive();
   }
   else if (optionfive==="a"){
    props.mfrFive();
    props.statUpdateNfive();
    props.btnThreefive()


   }
   else if (optionfive==="b"){
    props.mfrFive();
    props.statUpdateNfive();
    props.btnThreefive()
   }
   else if (optionfive==="c"){
    props.mfrFive();
    props.statUpdateNfive();
    props.btnThreefive()
   }
   else if (optionfive==="d"){
    props.mfrFive();
    props.statUpdateNfive();
    props.btnThreefive()
    }}
   else if (stat==="Marked For Review"){
     if(optionfive==="a"){
    props.nextThree();
    props.statUpdateKfive();
    props.btnThreefive()
   }
   else if (optionfive==="b"){
    props.nextThree();
    props.statUpdateKfive();
    props.btnThreefive()
   }
   else if (optionfive==="c"){
    props.nextThree();
    props.statUpdateKfive();
    props.btnThreefive()
   }
   else if (optionfive==="d"){
    props.nextThree();
    props.statUpdateKfive();
    props.btnThreefive()
   }}
   else if (stat==="Answered"){
     if(optionfive==="a"){
    props.mfrSix();
    props.statUpdateNfive();
    props.btnThreefive()
   }
   else if (optionfive==="b"){
    props.mfrSix();
    props.statUpdateNfive();
    props.btnThreefive()
   }
   else if (optionfive==="c"){
    props.mfrSix();
    props.statUpdateNfive();
    props.btnThreefive()
   }
   else if (optionfive==="d"){
    props.mfrSix();
    props.statUpdateNfive();
    props.btnThreefive()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionfive===""){
    props.nexttwo();
    props.statUpdatefive();
    props.btnOnefive()
  }
  
   else if (optionfive==="a"){
    props.nextTwo();
    props.statUpdateAfive();
    props.btnFourfive()
   }
   else if (optionfive==="b"){
     props.nextTwo();
     props.statUpdateAfive();
     props.btnFourfive()
    }
    else if (optionfive==="c"){
     props.nextTwo();
     props.statUpdateAfive();
     props.btnFourfive()
    }
    else if (optionfive==="d"){
     props.nextTwo();
     props.statUpdateAfive();
     props.btnFourfive()
    }}
   
  else if (stat==="Not Answered"){
    if(optionfive===""){
   props.nextThree();
   props.statUpdateKfive();
   props.btnOnefive()
  }
  else if (optionfive==="a"){
   props.nextFour();
   props.statUpdateAfive();
   props.btnFourfive()
  }
  else if (optionfive==="b"){
    props.nextFour();
    props.statUpdateAfive();
    props.btnFourfive()
   }
   else if (optionfive==="c"){
    props.nextFour();
    props.statUpdateAfive();
    props.btnFourfive()
   }
   else if (optionfive==="d"){
    props.nextFour();
    props.statUpdateAfive();
    props.btnFourfive()
   }}
   else if (stat==="Marked"){
     if(optionfive===""){
     props.nextThree();
     props.statUpdateKfive();
     props.btnTwofive()
    }
    else if (optionfive==="a"){
     props.mfrFive();
     props.statUpdateNfive();
     props.btnThreefive()
    }
    else if (optionfive==="b"){
     props.mfrFive();
     props.statUpdateNfive();
     props.btnThreefive()
    }
    else if ( optionfive==="c"){
     props.mfrFive();
     props.statUpdateNfive();
     props.btnThreefive()
    }
    else if ( optionfive==="d"){
     props.mfrFive();
     props.statUpdateNfive();
     props.btnThreefive()
      }}
    else if (stat==="Marked For Review"){
      if(optionfive==="a"){
     props.mfrSeven();
     props.statUpdateAfive();
     props.btnFourfive()
    }
    else if (optionfive==="b"){
      props.mfrSeventwo();
      props.statUpdateAfive();
      props.btnFourfive()
    }
    else if (optionfive==="c"){
      props.mfrSeven();
      props.statUpdateAfive();
      props.btnFourfive()
    }
    else if ( optionfive==="d"){
      props.mfrSeven();
      props.statUpdateAfive();
      props.btnFourfive()
    }}
    else if (stat==="Answered"){
      if(optionfive==="a"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()
    }
    else if (optionfive==="b"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()
    }
    else if (optionfive==="c"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()
    }
    else if (optionfive==="d"){
      props.nextThree();
      props.statUpdateKfive();
      props.btnFourfive()
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
      {/* <h5>Question No.6</h5> */}
    <p><i>Question No.6</i><br></br>Which of the following plants possess culm?

</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionfive === 'a'}
          onClick={handleChange}
        /> Cuscuta
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionfive === 'b'}
          onClick={handleChange}
        /> Zingiber
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionfive === 'c'}
          onClick={handleChange}
        /> Bamboo 
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionfive === 'd'}
          onClick={handleChange}
        /> Cocos
        
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/MFseven'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/MFseven'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/MFseven'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/MFfive'))}>Previous</button>
    
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
     statusfive:state.statusfive,
     optionfive:state.optionfive,
     BHealthanddiseaseSeven:state.BHealthanddiseaseSeven,
  BHealthanddiseaseSevenA:state.BHealthanddiseaseSevenA,
  BHealthanddiseaseSevenB:state.BHealthanddiseaseSevenB,
  BHealthanddiseaseSevenC:state.BHealthanddiseaseSevenC,
  BHealthanddiseaseSevenD:state.BHealthanddiseaseSevenD,
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
    optAfive:()=>dispatch(optAfive()),
    optBfive:()=>dispatch(optBfive()),
    optCfive:()=>dispatch(optCfive()),
    optDfive:()=>dispatch(optDfive()),
    statUpdatefive:()=>dispatch(statUpdatefive()),
    statUpdateAfive:()=>dispatch(statUpdateAfive()),
    statUpdateMfive:()=>dispatch(statUpdateMfive()),
    statUpdateNfive:()=>dispatch(statUpdateNfive()),
    statUpdateKfive:()=>dispatch(statUpdateKfive()),
    btnOnefive:()=>dispatch(btnOnefive()),
    btnTwofive:()=>dispatch(btnTwofive()),
    btnThreefive:()=>dispatch(btnThreefive()),
    btnFourfive:()=>dispatch(btnFourfive()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (MFsix)