import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwelve,optBtwelve,optCtwelve,optDtwelve,btnOnetwelve,btnTwotwelve,btnThreetwelve,btnFourtwelve,statUpdatetwelve,statUpdateAtwelve,statUpdateKtwelve,statUpdateMtwelve,statUpdateNtwelve,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import MFtimer from './MFtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function MFthirteen(props) {
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
    var stat=props.statustwelve;
    var opt=props.optiontwelve

  const [optiontwelve, setOptiontwelve] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptiontwelve(event.target.value);
    
  }
  
function optionChange(){
 if(optiontwelve==="a"){
   props.optAtwelve()
 }
 if(optiontwelve==="b"){
   props.optBtwelve()
 }
 if(optiontwelve==="c"){
   props.optCtwelve()
 }
 if(optiontwelve==="d"){
   props.optDtwelve()
 }
}

 useEffect(()=>{
  setOptiontwelve(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optiontwelve===""){
  props.nextOne();
  props.statUpdatetwelve();
  props.btnOnetwelve()
  
 }
 
  else if (optiontwelve==="a"){
   props.nextTwo();
   props.statUpdateAtwelve();
   props.btnFourtwelve()
  
   
  }
  else if (optiontwelve==="b"){
    props.nextTwo();
    props.statUpdateAtwelve();
    props.btnFourtwelve()
   }
   else if (optiontwelve==="c"){
    props.nextTwo();
    props.statUpdateAtwelve();
    props.btnFourtwelve()
   }
   else if (optiontwelve==="d"){
    props.nextTwo();
    props.statUpdateAtwelve();
    props.btnFourtwelve()
   }}
   else if (stat==="Not Answered"){
     if(optiontwelve===""){
    props.nextThree();
    props.statUpdateKtwelve();
    props.btnOnetwelve()
    
   }
   
    else if (optiontwelve==="a"){
     props.nextFour();
     props.statUpdateAtwelve();
     props.btnFourtwelve()
     
    }
    else if (optiontwelve==="b"){
      props.nextFour();
      props.statUpdateAtwelve();
      props.btnFourtwelve()
      
     }
     else if (optiontwelve==="c"){
      props.nextFour();
      props.statUpdateAtwelve();
      props.btnFourtwelve()
      
     }
     else if ( optiontwelve==="d"){
      props.nextFour();
      props.statUpdateAtwelve();
      props.btnFourtwelve()
      
     }}
     else if (stat==="Marked"){
     if(optiontwelve===""){
      props.nextThree();
      props.statUpdateKtwelve();
      props.btnThreetwelve()
      
     }
          else if (optiontwelve==="a"){
      props.mfrFive();
      props.statUpdateNtwelve();
      props.btnThreetwelve()

     }
     else if (optiontwelve==="b"){
       props.mfrFive();
       props.statUpdateNtwelve();
       props.btnThreetwelve()

      }
      else if (optiontwelve==="c"){
       props.mfrFive();
       props.statUpdateNtwelve();
       props.btnThreetwelve()

      }
      else if (optiontwelve==="d"){
       props.mfrFive();
       props.statUpdateNtwelve();
       props.btnThreetwelve()

        }}
     
     else if (stat==="Marked For Review"){
     if(optiontwelve==="a"){
      props.nextThree();
      props.statUpdateKtwelve();
      props.btnThreetwelve()

      
     }
     else if (optiontwelve==="b"){
      props.nextThree();
      props.statUpdateKtwelve();
      props.btnThreetwelve() 
     }
     else if (optiontwelve==="c"){
      props.nextThree();
      props.statUpdateKtwelve();
      props.btnThreetwelve()
     }
     else if (optiontwelve==="d"){
      props.nextThree();
      props.statUpdateKtwelve();
      props.btnThreetwelve()
     }}
     else if(stat==="Answered"){
     if (optiontwelve==="a"){
      props.nextThree();
      props.statUpdateKtwelve();
      props.btnFourtwelve()

      
     }
     else if (optiontwelve==="b"){
      props.nextThree();
      props.statUpdateKtwelve();
      props.btnFourtwelve()

      
     }
     else if ( optiontwelve==="c"){
      props.nextThree();
      props.statUpdateKtwelve();
      props.btnFourtwelve()
      
     }
     else if (optiontwelve==="d"){
      props.nextThree();
      props.statUpdateKtwelve();
      props.btnFourtwelve()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optiontwelve===""){
  props.mfrOne();
  props.statUpdateMtwelve();
  props.btnTwotwelve()
 }
 
  else if (optiontwelve==="a"){
   props.mfrTwo();
   props.statUpdateNtwelve();
   props.btnThreetwelve()
  }
  else if (optiontwelve==="b"){
    props.mfrTwo();
    props.statUpdateNtwelve();
    props.btnThreetwelve()
  

   }
   else if (optiontwelve==="c"){
    props.mfrTwo();
    props.statUpdateNtwelve();
    props.btnThreetwelve()
  
   }
   else if (optiontwelve==="d"){
    props.mfrTwo();
    props.statUpdateNtwelve();
    props.btnThreetwelve()

   }}
  
 else if (stat==="Not Answered"){
   if(optiontwelve===""){
  props.mfrThree();
  props.statUpdateMtwelve();
  props.btnTwotwelve();
 }
 else if (optiontwelve==="a"){
  props.mfrFour();
  props.statUpdateNtwelve();
  props.btnThreetwelve()
 }
 else if (optiontwelve==="b"){
   props.mfrFour();
   props.statUpdateNtwelve();
   props.btnThreetwelve()
  }
  else if (optiontwelve==="c"){
   props.mfrFour();
   props.statUpdateNtwelve();
   props.btnThreetwelve()
  }
  else if (optiontwelve==="d"){
   props.mfrFour();
   props.statUpdateNtwelve();
  props.btnThreetwelve()
  }}
  else if (stat==="Marked"){
    if(optiontwelve===""){
    props.nextThree();
    props.statUpdateKtwelve();
    props.btnTwotwelve();
   }
   else if (optiontwelve==="a"){
    props.mfrFive();
    props.statUpdateNtwelve();
    props.btnThreetwelve()


   }
   else if (optiontwelve==="b"){
    props.mfrFive();
    props.statUpdateNtwelve();
    props.btnThreetwelve()
   }
   else if (optiontwelve==="c"){
    props.mfrFive();
    props.statUpdateNtwelve();
    props.btnThreetwelve()
   }
   else if (optiontwelve==="d"){
    props.mfrFive();
    props.statUpdateNtwelve();
    props.btnThreetwelve()
    }}
   else if (stat==="Marked For Review"){
     if(optiontwelve==="a"){
    props.nextThree();
    props.statUpdateKtwelve();
    props.btnThreetwelve()
   }
   else if (optiontwelve==="b"){
    props.nextThree();
    props.statUpdateKtwelve();
    props.btnThreetwelve()
   }
   else if (optiontwelve==="c"){
    props.nextThree();
    props.statUpdateKtwelve();
    props.btnThreetwelve()
   }
   else if (optiontwelve==="d"){
    props.nextThree();
    props.statUpdateKtwelve();
    props.btnThreetwelve()
   }}
   else if (stat==="Answered"){
     if(optiontwelve==="a"){
    props.mfrSix();
    props.statUpdateNtwelve();
    props.btnThreetwelve()
   }
   else if (optiontwelve==="b"){
    props.mfrSix();
    props.statUpdateNtwelve();
    props.btnThreetwelve()
   }
   else if (optiontwelve==="c"){
    props.mfrSix();
    props.statUpdateNtwelve();
    props.btnThreetwelve()
   }
   else if (optiontwelve==="d"){
    props.mfrSix();
    props.statUpdateNtwelve();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optiontwelve===""){
    props.nexttwo();
    props.statUpdatetwelve();
    props.btnOnetwelve()
  }
  
   else if (optiontwelve==="a"){
    props.nextTwo();
    props.statUpdateAtwelve();
    props.btnFourtwelve()
   }
   else if (optiontwelve==="b"){
     props.nextTwo();
     props.statUpdateAtwelve();
     props.btnFourtwelve()
    }
    else if (optiontwelve==="c"){
     props.nextTwo();
     props.statUpdateAtwelve();
     props.btnFourtwelve()
    }
    else if (optiontwelve==="d"){
     props.nextTwo();
     props.statUpdateAtwelve();
     props.btnFourtwelve()
    }}
   
  else if (stat==="Not Answered"){
    if(optiontwelve===""){
   props.nextThree();
   props.statUpdateKtwelve();
   props.btnOnetwelve()
  }
  else if (optiontwelve==="a"){
   props.nextFour();
   props.statUpdateAtwelve();
   props.btnFourtwelve()
  }
  else if (optiontwelve==="b"){
    props.nextFour();
    props.statUpdateAtwelve();
    props.btnFourtwelve()
   }
   else if (optiontwelve==="c"){
    props.nextFour();
    props.statUpdateAtwelve();
    props.btnFourtwelve()
   }
   else if (optiontwelve==="d"){
    props.nextFour();
    props.statUpdateAtwelve();
    props.btnFourtwelve()
   }}
   else if (stat==="Marked"){
     if(optiontwelve===""){
     props.nextThree();
     props.statUpdateKtwelve();
     props.btnTwotwelve()
    }
    else if (optiontwelve==="a"){
     props.mfrFive();
     props.statUpdateNtwelve();
     props.btnThreetwelve()
    }
    else if (optiontwelve==="b"){
     props.mfrFive();
     props.statUpdateNtwelve();
     props.btnThreetwelve()
    }
    else if ( optiontwelve==="c"){
     props.mfrFive();
     props.statUpdateNtwelve();
     props.btnThreetwelve()
    }
    else if ( optiontwelve==="d"){
     props.mfrFive();
     props.statUpdateNtwelve();
     props.btnThreetwelve()
      }}
    else if (stat==="Marked For Review"){
      if(optiontwelve==="a"){
     props.mfrSeven();
     props.statUpdateAtwelve();
     props.btnFourtwelve()
    }
    else if (optiontwelve==="b"){
      props.mfrSeventwo();
      props.statUpdateAtwelve();
      props.btnFourtwelve()
    }
    else if (optiontwelve==="c"){
      props.mfrSeven();
      props.statUpdateAtwelve();
      props.btnFourtwelve()
    }
    else if ( optiontwelve==="d"){
      props.mfrSeven();
      props.statUpdateAtwelve();
      props.btnFourtwelve()
    }}
    else if (stat==="Answered"){
      if(optiontwelve==="a"){
      props.nextThree();
      props.statUpdateKtwelve();
      props.btnFourtwelve()
    }
    else if (optiontwelve==="b"){
      props.nextThree();
      props.statUpdateKtwelve();
      props.btnFourtwelve()
    }
    else if (optiontwelve==="c"){
      props.nextThree();
      props.statUpdateKtwelve();
      props.btnFourtwelve()
    }
    else if (optiontwelve==="d"){
      props.nextThree();
      props.statUpdateKtwelve();
      props.btnFourtwelve()
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
      {/* <h5>Question No.13</h5> */}
    <p><i>Question No.13</i><br></br>   __________________________are the green stems of limited growth which have taken over the function of photosynthesis from leaves

</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwelve === 'a'}
          onClick={handleChange}
        /> Phylloclades
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwelve === 'b'}
          onClick={handleChange}
        /> Cladodes
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwelve === 'c'}
          onClick={handleChange}
        /> Phyllodes
       
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwelve === 'd'}
          onClick={handleChange}
        /> Stem thorns
      </div> 
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/MFfourteen'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/MFfourteen'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/MFfourteen'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/MFtwelve'))}>Previous</button>
    
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
     statustwelve:state.statustwelve,
     optiontwelve:state.optiontwelve,
     BHealthanddiseaseFourteen:state.BHealthanddiseaseFourteen,
  BHealthanddiseaseFourteenA:state.BHealthanddiseaseFourteenA,
  BHealthanddiseaseFourteenB:state.BHealthanddiseaseFourteenB,
  BHealthanddiseaseFourteenC:state.BHealthanddiseaseFourteenC,
  BHealthanddiseaseFourteenD:state.BHealthanddiseaseFourteenD,
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
    optAtwelve:()=>dispatch(optAtwelve()),
    optBtwelve:()=>dispatch(optBtwelve()),
    optCtwelve:()=>dispatch(optCtwelve()),
    optDtwelve:()=>dispatch(optDtwelve()),
    statUpdatetwelve:()=>dispatch(statUpdatetwelve()),
    statUpdateAtwelve:()=>dispatch(statUpdateAtwelve()),
    statUpdateMtwelve:()=>dispatch(statUpdateMtwelve()),
    statUpdateNtwelve:()=>dispatch(statUpdateNtwelve()),
    statUpdateKtwelve:()=>dispatch(statUpdateKtwelve()),
    btnOnetwelve:()=>dispatch(btnOnetwelve()),
    btnTwotwelve:()=>dispatch(btnTwotwelve()),
    btnThreetwelve:()=>dispatch(btnThreetwelve()),
    btnFourtwelve:()=>dispatch(btnFourtwelve()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (MFthirteen)