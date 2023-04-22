import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwentyfour,optBtwentyfour,optCtwentyfour,optDtwentyfour,btnOnetwentyfour,btnTwotwentyfour,btnThreetwentyfour,btnFourtwentyfour,statUpdatetwentyfour,statUpdateAtwentyfour,statUpdateKtwentyfour,statUpdateMtwentyfour,statUpdateNtwentyfour,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
// import Timer from '../../components/Timer ';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import PKtimer from './PKtimer';
import Logo from '../../redux/Images/Logo.jpg'




function PKtwentyfive(props) {
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
    var stat=props.statustwentyfour;
    var opt=props.optiontwentyfour

  const [optiontwentyfour, setOptiontwentyfour] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptiontwentyfour(event.target.value);
    
  }
  
function optionChange(){
 if(optiontwentyfour==="a"){
   props.optAtwentyfour()
 }
 if(optiontwentyfour==="b"){
   props.optBtwentyfour()
 }
 if(optiontwentyfour==="c"){
   props.optCtwentyfour()
 }
 if(optiontwentyfour==="d"){
   props.optDtwentyfour()
 }
}

 useEffect(()=>{
  setOptiontwentyfour(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optiontwentyfour===""){
  props.nextOne();
  props.statUpdatetwentyfour();
  props.btnOnetwentyfour()
  
 }
 
  else if (optiontwentyfour==="a"){
   props.nextTwo();
   props.statUpdateAtwentyfour();
   props.btnFourtwentyfour()
  
   
  }
  else if (optiontwentyfour==="b"){
    props.nextTwo();
    props.statUpdateAtwentyfour();
    props.btnFourtwentyfour()
   }
   else if (optiontwentyfour==="c"){
    props.nextTwo();
    props.statUpdateAtwentyfour();
    props.btnFourtwentyfour()
   }
   else if (optiontwentyfour==="d"){
    props.nextTwo();
    props.statUpdateAtwentyfour();
    props.btnFourtwentyfour()
   }}
   else if (stat==="Not Answered"){
     if(optiontwentyfour===""){
    props.nextThree();
    props.statUpdateKtwentyfour();
    props.btnOnetwentyfour()
    
   }
   
    else if (optiontwentyfour==="a"){
     props.nextFour();
     props.statUpdateAtwentyfour();
     props.btnFourtwentyfour()
     
    }
    else if (optiontwentyfour==="b"){
      props.nextFour();
      props.statUpdateAtwentyfour();
      props.btnFourtwentyfour()
      
     }
     else if (optiontwentyfour==="c"){
      props.nextFour();
      props.statUpdateAtwentyfour();
      props.btnFourtwentyfour()
      
     }
     else if ( optiontwentyfour==="d"){
      props.nextFour();
      props.statUpdateAtwentyfour();
      props.btnFourtwentyfour()
      
     }}
     else if (stat==="Marked"){
     if(optiontwentyfour===""){
      props.nextThree();
      props.statUpdateKtwentyfour();
      props.btnThreetwentyfour()
      
     }
          else if (optiontwentyfour==="a"){
      props.mfrFive();
      props.statUpdateNtwentyfour();
      props.btnThreetwentyfour()

     }
     else if (optiontwentyfour==="b"){
       props.mfrFive();
       props.statUpdateNtwentyfour();
       props.btnThreetwentyfour()

      }
      else if (optiontwentyfour==="c"){
       props.mfrFive();
       props.statUpdateNtwentyfour();
       props.btnThreetwentyfour()

      }
      else if (optiontwentyfour==="d"){
       props.mfrFive();
       props.statUpdateNtwentyfour();
       props.btnThreetwentyfour()

        }}
     
     else if (stat==="Marked For Review"){
     if(optiontwentyfour==="a"){
      props.nextThree();
      props.statUpdateKtwentyfour();
      props.btnThreetwentyfour()

      
     }
     else if (optiontwentyfour==="b"){
      props.nextThree();
      props.statUpdateKtwentyfour();
      props.btnThreetwentyfour() 
     }
     else if (optiontwentyfour==="c"){
      props.nextThree();
      props.statUpdateKtwentyfour();
      props.btnThreetwentyfour()
     }
     else if (optiontwentyfour==="d"){
      props.nextThree();
      props.statUpdateKtwentyfour();
      props.btnThreetwentyfour()
     }}
     else if(stat==="Answered"){
     if (optiontwentyfour==="a"){
      props.nextThree();
      props.statUpdateKtwentyfour();
      props.btnFourtwentyfour()

      
     }
     else if (optiontwentyfour==="b"){
      props.nextThree();
      props.statUpdateKtwentyfour();
      props.btnFourtwentyfour()

      
     }
     else if ( optiontwentyfour==="c"){
      props.nextThree();
      props.statUpdateKtwentyfour();
      props.btnFourtwentyfour()
      
     }
     else if (optiontwentyfour==="d"){
      props.nextThree();
      props.statUpdateKtwentyfour();
      props.btnFourtwentyfour()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optiontwentyfour===""){
  props.mfrOne();
  props.statUpdateMtwentyfour();
  props.btnTwotwentyfour()
 }
 
  else if (optiontwentyfour==="a"){
   props.mfrTwo();
   props.statUpdateNtwentyfour();
   props.btnThreetwentyfour()
  }
  else if (optiontwentyfour==="b"){
    props.mfrTwo();
    props.statUpdateNtwentyfour();
    props.btnThreetwentyfour()
  

   }
   else if (optiontwentyfour==="c"){
    props.mfrTwo();
    props.statUpdateNtwentyfour();
    props.btnThreetwentyfour()
  
   }
   else if (optiontwentyfour==="d"){
    props.mfrTwo();
    props.statUpdateNtwentyfour();
    props.btnThreetwentyfour()

   }}
  
 else if (stat==="Not Answered"){
   if(optiontwentyfour===""){
  props.mfrThree();
  props.statUpdateMtwentyfour();
  props.btnTwotwentyfour();
 }
 else if (optiontwentyfour==="a"){
  props.mfrFour();
  props.statUpdateNtwentyfour();
  props.btnThreetwentyfour()
 }
 else if (optiontwentyfour==="b"){
   props.mfrFour();
   props.statUpdateNtwentyfour();
   props.btnThreetwentyfour()
  }
  else if (optiontwentyfour==="c"){
   props.mfrFour();
   props.statUpdateNtwentyfour();
   props.btnThreetwentyfour()
  }
  else if (optiontwentyfour==="d"){
   props.mfrFour();
   props.statUpdateNtwentyfour();
  props.btnThreetwentyfour()
  }}
  else if (stat==="Marked"){
    if(optiontwentyfour===""){
    props.nextThree();
    props.statUpdateKtwentyfour();
    props.btnTwotwentyfour();
   }
   else if (optiontwentyfour==="a"){
    props.mfrFive();
    props.statUpdateNtwentyfour();
    props.btnThreetwentyfour()


   }
   else if (optiontwentyfour==="b"){
    props.mfrFive();
    props.statUpdateNtwentyfour();
    props.btnThreetwentyfour()
   }
   else if (optiontwentyfour==="c"){
    props.mfrFive();
    props.statUpdateNtwentyfour();
    props.btnThreetwentyfour()
   }
   else if (optiontwentyfour==="d"){
    props.mfrFive();
    props.statUpdateNtwentyfour();
    props.btnThreetwentyfour()
    }}
   else if (stat==="Marked For Review"){
     if(optiontwentyfour==="a"){
    props.nextThree();
    props.statUpdateKtwentyfour();
    props.btnThreetwentyfour()
   }
   else if (optiontwentyfour==="b"){
    props.nextThree();
    props.statUpdateKtwentyfour();
    props.btnThreetwentyfour()
   }
   else if (optiontwentyfour==="c"){
    props.nextThree();
    props.statUpdateKtwentyfour();
    props.btnThreetwentyfour()
   }
   else if (optiontwentyfour==="d"){
    props.nextThree();
    props.statUpdateKtwentyfour();
    props.btnThreetwentyfour()
   }}
   else if (stat==="Answered"){
     if(optiontwentyfour==="a"){
    props.mfrSix();
    props.statUpdateNtwentyfour();
    props.btnThreetwentyfour()
   }
   else if (optiontwentyfour==="b"){
    props.mfrSix();
    props.statUpdateNtwentyfour();
    props.btnThreetwentyfour()
   }
   else if (optiontwentyfour==="c"){
    props.mfrSix();
    props.statUpdateNtwentyfour();
    props.btnThreetwentyfour()
   }
   else if (optiontwentyfour==="d"){
    props.mfrSix();
    props.statUpdateNtwentyfour();
    props.btnThreetwentyfour()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optiontwentyfour===""){
    props.nexttwo();
    props.statUpdatetwentyfour();
    props.btnOnetwentyfour()
  }
  
   else if (optiontwentyfour==="a"){
    props.nextTwo();
    props.statUpdateAtwentyfour();
    props.btnFourtwentyfour()
   }
   else if (optiontwentyfour==="b"){
     props.nextTwo();
     props.statUpdateAtwentyfour();
     props.btnFourtwentyfour()
    }
    else if (optiontwentyfour==="c"){
     props.nextTwo();
     props.statUpdateAtwentyfour();
     props.btnFourtwentyfour()
    }
    else if (optiontwentyfour==="d"){
     props.nextTwo();
     props.statUpdateAtwentyfour();
     props.btnFourtwentyfour()
    }}
   
  else if (stat==="Not Answered"){
    if(optiontwentyfour===""){
   props.nextThree();
   props.statUpdateKtwentyfour();
   props.btnOnetwentyfour()
  }
  else if (optiontwentyfour==="a"){
   props.nextFour();
   props.statUpdateAtwentyfour();
   props.btnFourtwentyfour()
  }
  else if (optiontwentyfour==="b"){
    props.nextFour();
    props.statUpdateAtwentyfour();
    props.btnFourtwentyfour()
   }
   else if (optiontwentyfour==="c"){
    props.nextFour();
    props.statUpdateAtwentyfour();
    props.btnFourtwentyfour()
   }
   else if (optiontwentyfour==="d"){
    props.nextFour();
    props.statUpdateAtwentyfour();
    props.btnFourtwentyfour()
   }}
   else if (stat==="Marked"){
     if(optiontwentyfour===""){
     props.nextThree();
     props.statUpdateKtwentyfour();
     props.btnTwotwentyfour()
    }
    else if (optiontwentyfour==="a"){
     props.mfrFive();
     props.statUpdateNtwentyfour();
     props.btnThreetwentyfour()
    }
    else if (optiontwentyfour==="b"){
     props.mfrFive();
     props.statUpdateNtwentyfour();
     props.btnThreetwentyfour()
    }
    else if ( optiontwentyfour==="c"){
     props.mfrFive();
     props.statUpdateNtwentyfour();
     props.btnThreetwentyfour()
    }
    else if ( optiontwentyfour==="d"){
     props.mfrFive();
     props.statUpdateNtwentyfour();
     props.btnThreetwentyfour()
      }}
    else if (stat==="Marked For Review"){
      if(optiontwentyfour==="a"){
     props.mfrSeven();
     props.statUpdateAtwentyfour();
     props.btnFourtwentyfour()
    }
    else if (optiontwentyfour==="b"){
      props.mfrSeventwo();
      props.statUpdateAtwentyfour();
      props.btnFourtwentyfour()
    }
    else if (optiontwentyfour==="c"){
      props.mfrSeven();
      props.statUpdateAtwentyfour();
      props.btnFourtwentyfour()
    }
    else if ( optiontwentyfour==="d"){
      props.mfrSeven();
      props.statUpdateAtwentyfour();
      props.btnFourtwentyfour()
    }}
    else if (stat==="Answered"){
      if(optiontwentyfour==="a"){
      props.nextThree();
      props.statUpdateKtwentyfour();
      props.btnFourtwentyfour()
    }
    else if (optiontwentyfour==="b"){
      props.nextThree();
      props.statUpdateKtwentyfour();
      props.btnFourtwentyfour()
    }
    else if (optiontwentyfour==="c"){
      props.nextThree();
      props.statUpdateKtwentyfour();
      props.btnFourtwentyfour()
    }
    else if (optiontwentyfour==="d"){
      props.nextThree();
      props.statUpdateKtwentyfour();
      props.btnFourtwentyfour()
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
      {/* <h5>Question No.25</h5> */}
    <p><i>Question No.25</i><br></br>Plants which possess seeds but not fruits are</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwentyfour=== 'a'}
          onClick={handleChange}
        /> bryophytes
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwentyfour === 'b'}
          onClick={handleChange}
        /> pteridophytes
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwentyfour === 'c'}
          onClick={handleChange}
        /> gymnosperms
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwentyfour === 'd'}
          onClick={handleChange}
        /> algae
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/PKtwentysix'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/PKtwentysix'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/PKtwentysix'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/PKtwentyfour'))}>Previous</button>
    
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
     statustwentyfour:state.statustwentyfour,
     optiontwentyfour:state.optiontwentyfour,
     BHealthanddiseaseTwentyseven:state.BHealthanddiseaseTwentyseven,
  BHealthanddiseaseTwentysevenA:state.BHealthanddiseaseTwentysevenA,
  BHealthanddiseaseTwentysevenB:state.BHealthanddiseaseTwentysevenB,
  BHealthanddiseaseTwentysevenC:state.BHealthanddiseaseTwentysevenC,
  BHealthanddiseaseTwentysevenD:state.BHealthanddiseaseTwentysevenD,
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
    optAtwentyfour:()=>dispatch(optAtwentyfour()),
    optBtwentyfour:()=>dispatch(optBtwentyfour()),
    optCtwentyfour:()=>dispatch(optCtwentyfour()),
    optDtwentyfour:()=>dispatch(optDtwentyfour()),
    statUpdatetwentyfour:()=>dispatch(statUpdatetwentyfour()),
    statUpdateAtwentyfour:()=>dispatch(statUpdateAtwentyfour()),
    statUpdateMtwentyfour:()=>dispatch(statUpdateMtwentyfour()),
    statUpdateNtwentyfour:()=>dispatch(statUpdateNtwentyfour()),
    statUpdateKtwentyfour:()=>dispatch(statUpdateKtwentyfour()),
    btnOnetwentyfour:()=>dispatch(btnOnetwentyfour()),
    btnTwotwentyfour:()=>dispatch(btnTwotwentyfour()),
    btnThreetwentyfour:()=>dispatch(btnThreetwentyfour()),
    btnFourtwentyfour:()=>dispatch(btnFourtwentyfour()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (PKtwentyfive)