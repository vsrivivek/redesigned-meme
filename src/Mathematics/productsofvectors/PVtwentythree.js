import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAtwentytwo,optBtwentytwo,optCtwentytwo,optDtwentytwo,btnOnetwentytwo,btnTwotwentytwo,btnThreetwentytwo,btnFourtwentytwo,statUpdatetwentytwo,statUpdateAtwentytwo,statUpdateKtwentytwo,statUpdateMtwentytwo,statUpdateNtwentytwo,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import PVtimer from './PVtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function PVtwentythree(props) {
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
    var stat=props.statustwentytwo;
    var opt=props.optiontwentytwo

  const [optiontwentytwo, setOptiontwentytwo] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptiontwentytwo(event.target.value);
    
  }
  
function optionChange(){
 if(optiontwentytwo==="a"){
   props.optAtwentytwo()
 }
 if(optiontwentytwo==="b"){
   props.optBtwentytwo()
 }
 if(optiontwentytwo==="c"){
   props.optCtwentytwo()
 }
 if(optiontwentytwo==="d"){
   props.optDtwentytwo()
 }
}

 useEffect(()=>{
  setOptiontwentytwo(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optiontwentytwo===""){
  props.nextOne();
  props.statUpdatetwentytwo();
  props.btnOnetwentytwo()
  
 }
 
  else if (optiontwentytwo==="a"){
   props.nextTwo();
   props.statUpdateAtwentytwo();
   props.btnFourtwentytwo()
  
   
  }
  else if (optiontwentytwo==="b"){
    props.nextTwo();
    props.statUpdateAtwentytwo();
    props.btnFourtwentytwo()
   }
   else if (optiontwentytwo==="c"){
    props.nextTwo();
    props.statUpdateAtwentytwo();
    props.btnFourtwentytwo()
   }
   else if (optiontwentytwo==="d"){
    props.nextTwo();
    props.statUpdateAtwentytwo();
    props.btnFourtwentytwo()
   }}
   else if (stat==="Not Answered"){
     if(optiontwentytwo===""){
    props.nextThree();
    props.statUpdateKtwentytwo();
    props.btnOnetwentytwo()
    
   }
   
    else if (optiontwentytwo==="a"){
     props.nextFour();
     props.statUpdateAtwentytwo();
     props.btnFourtwentytwo()
     
    }
    else if (optiontwentytwo==="b"){
      props.nextFour();
      props.statUpdateAtwentytwo();
      props.btnFourtwentytwo()
      
     }
     else if (optiontwentytwo==="c"){
      props.nextFour();
      props.statUpdateAtwentytwo();
      props.btnFourtwentytwo()
      
     }
     else if ( optiontwentytwo==="d"){
      props.nextFour();
      props.statUpdateAtwentytwo();
      props.btnFourtwentytwo()
      
     }}
     else if (stat==="Marked"){
     if(optiontwentytwo===""){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnThreetwentytwo()
      
     }
          else if (optiontwentytwo==="a"){
      props.mfrFive();
      props.statUpdateNtwentytwo();
      props.btnThreetwentytwo()

     }
     else if (optiontwentytwo==="b"){
       props.mfrFive();
       props.statUpdateNtwentytwo();
       props.btnThreetwentytwo()

      }
      else if (optiontwentytwo==="c"){
       props.mfrFive();
       props.statUpdateNtwentytwo();
       props.btnThreetwentytwo()

      }
      else if (optiontwentytwo==="d"){
       props.mfrFive();
       props.statUpdateNtwentytwo();
       props.btnThreetwentytwo()

        }}
     
     else if (stat==="Marked For Review"){
     if(optiontwentytwo==="a"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnThreetwentytwo()

      
     }
     else if (optiontwentytwo==="b"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnThreetwentytwo() 
     }
     else if (optiontwentytwo==="c"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnThreetwentytwo()
     }
     else if (optiontwentytwo==="d"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnThreetwentytwo()
     }}
     else if(stat==="Answered"){
     if (optiontwentytwo==="a"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()

      
     }
     else if (optiontwentytwo==="b"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()

      
     }
     else if ( optiontwentytwo==="c"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()
      
     }
     else if (optiontwentytwo==="d"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optiontwentytwo===""){
  props.mfrOne();
  props.statUpdateMtwentytwo();
  props.btnTwotwentytwo()
 }
 
  else if (optiontwentytwo==="a"){
   props.mfrTwo();
   props.statUpdateNtwentytwo();
   props.btnThreetwentytwo()
  }
  else if (optiontwentytwo==="b"){
    props.mfrTwo();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
  

   }
   else if (optiontwentytwo==="c"){
    props.mfrTwo();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
  
   }
   else if (optiontwentytwo==="d"){
    props.mfrTwo();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()

   }}
  
 else if (stat==="Not Answered"){
   if(optiontwentytwo===""){
  props.mfrThree();
  props.statUpdateMtwentytwo();
  props.btnTwotwentytwo();
 }
 else if (optiontwentytwo==="a"){
  props.mfrFour();
  props.statUpdateNtwentytwo();
  props.btnThreetwentytwo()
 }
 else if (optiontwentytwo==="b"){
   props.mfrFour();
   props.statUpdateNtwentytwo();
   props.btnThreetwentytwo()
  }
  else if (optiontwentytwo==="c"){
   props.mfrFour();
   props.statUpdateNtwentytwo();
   props.btnThreetwentytwo()
  }
  else if (optiontwentytwo==="d"){
   props.mfrFour();
   props.statUpdateNtwentytwo();
  props.btnThreetwentytwo()
  }}
  else if (stat==="Marked"){
    if(optiontwentytwo===""){
    props.nextThree();
    props.statUpdateKtwentytwo();
    props.btnTwotwentytwo();
   }
   else if (optiontwentytwo==="a"){
    props.mfrFive();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()


   }
   else if (optiontwentytwo==="b"){
    props.mfrFive();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="c"){
    props.mfrFive();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="d"){
    props.mfrFive();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
    }}
   else if (stat==="Marked For Review"){
     if(optiontwentytwo==="a"){
    props.nextThree();
    props.statUpdateKtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="b"){
    props.nextThree();
    props.statUpdateKtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="c"){
    props.nextThree();
    props.statUpdateKtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="d"){
    props.nextThree();
    props.statUpdateKtwentytwo();
    props.btnThreetwentytwo()
   }}
   else if (stat==="Answered"){
     if(optiontwentytwo==="a"){
    props.mfrSix();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="b"){
    props.mfrSix();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="c"){
    props.mfrSix();
    props.statUpdateNtwentytwo();
    props.btnThreetwentytwo()
   }
   else if (optiontwentytwo==="d"){
    props.mfrSix();
    props.statUpdateNtwentytwo();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optiontwentytwo===""){
    props.nexttwo();
    props.statUpdatetwentytwo();
    props.btnOnetwentytwo()
  }
  
   else if (optiontwentytwo==="a"){
    props.nextTwo();
    props.statUpdateAtwentytwo();
    props.btnFourtwentytwo()
   }
   else if (optiontwentytwo==="b"){
     props.nextTwo();
     props.statUpdateAtwentytwo();
     props.btnFourtwentytwo()
    }
    else if (optiontwentytwo==="c"){
     props.nextTwo();
     props.statUpdateAtwentytwo();
     props.btnFourtwentytwo()
    }
    else if (optiontwentytwo==="d"){
     props.nextTwo();
     props.statUpdateAtwentytwo();
     props.btnFourtwentytwo()
    }}
   
  else if (stat==="Not Answered"){
    if(optiontwentytwo===""){
   props.nextThree();
   props.statUpdateKtwentytwo();
   props.btnOnetwentytwo()
  }
  else if (optiontwentytwo==="a"){
   props.nextFour();
   props.statUpdateAtwentytwo();
   props.btnFourtwentytwo()
  }
  else if (optiontwentytwo==="b"){
    props.nextFour();
    props.statUpdateAtwentytwo();
    props.btnFourtwentytwo()
   }
   else if (optiontwentytwo==="c"){
    props.nextFour();
    props.statUpdateAtwentytwo();
    props.btnFourtwentytwo()
   }
   else if (optiontwentytwo==="d"){
    props.nextFour();
    props.statUpdateAtwentytwo();
    props.btnFourtwentytwo()
   }}
   else if (stat==="Marked"){
     if(optiontwentytwo===""){
     props.nextThree();
     props.statUpdateKtwentytwo();
     props.btnTwotwentytwo()
    }
    else if (optiontwentytwo==="a"){
     props.mfrFive();
     props.statUpdateNtwentytwo();
     props.btnThreetwentytwo()
    }
    else if (optiontwentytwo==="b"){
     props.mfrFive();
     props.statUpdateNtwentytwo();
     props.btnThreetwentytwo()
    }
    else if ( optiontwentytwo==="c"){
     props.mfrFive();
     props.statUpdateNtwentytwo();
     props.btnThreetwentytwo()
    }
    else if ( optiontwentytwo==="d"){
     props.mfrFive();
     props.statUpdateNtwentytwo();
     props.btnThreetwentytwo()
      }}
    else if (stat==="Marked For Review"){
      if(optiontwentytwo==="a"){
     props.mfrSeven();
     props.statUpdateAtwentytwo();
     props.btnFourtwentytwo()
    }
    else if (optiontwentytwo==="b"){
      props.mfrSeventwo();
      props.statUpdateAtwentytwo();
      props.btnFourtwentytwo()
    }
    else if (optiontwentytwo==="c"){
      props.mfrSeven();
      props.statUpdateAtwentytwo();
      props.btnFourtwentytwo()
    }
    else if ( optiontwentytwo==="d"){
      props.mfrSeven();
      props.statUpdateAtwentytwo();
      props.btnFourtwentytwo()
    }}
    else if (stat==="Answered"){
      if(optiontwentytwo==="a"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()
    }
    else if (optiontwentytwo==="b"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()
    }
    else if (optiontwentytwo==="c"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()
    }
    else if (optiontwentytwo==="d"){
      props.nextThree();
      props.statUpdateKtwentytwo();
      props.btnFourtwentytwo()
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
    <p><i>Question No.23</i><br></br> If <b>a</b>+<b>b</b>+<b>c</b>=<b>0</b> then
    </p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwentytwo=== 'a'}
          onClick={handleChange}
        /> <b>a</b>.<b>b</b>=<b>b</b>.<b>c</b>=<b>c</b>.<b>a</b>
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwentytwo === 'b'}
          onClick={handleChange}
        /> <b>a</b>x<b>b</b>=<b>b</b>x<b>c</b>=<b>c</b>x<b>a</b>
       
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwentytwo === 'c'}
          onClick={handleChange}
        /> <b>a</b>x<b>b</b>=<b>b</b>.<b>c</b>
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwentytwo === 'd'}
          onClick={handleChange}
        /> <b>a</b>+<b>b</b>=(<b>a</b>x<b>c</b>)+(<b>b</b>x<b>c</b>)
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/PVtwentyfour'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/PVtwentyfour'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/PVtwentyfour'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/PVtwentytwo'))}>Previous</button>
    
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
     statustwentytwo:state.statustwentytwo,
     optiontwentytwo:state.optiontwentytwo,
     BHealthanddiseaseTwentyfive:state.BHealthanddiseaseTwentyfive,
  BHealthanddiseaseTwentyfiveA:state.BHealthanddiseaseTwentyfiveA,
  BHealthanddiseaseTwentyfiveB:state.BHealthanddiseaseTwentyfiveB,
  BHealthanddiseaseTwentyfiveC:state.BHealthanddiseaseTwentyfiveC,
  BHealthanddiseaseTwentyfiveD:state.BHealthanddiseaseTwentyfiveD,
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
    optAtwentytwo:()=>dispatch(optAtwentytwo()),
    optBtwentytwo:()=>dispatch(optBtwentytwo()),
    optCtwentytwo:()=>dispatch(optCtwentytwo()),
    optDtwentytwo:()=>dispatch(optDtwentytwo()),
    statUpdatetwentytwo:()=>dispatch(statUpdatetwentytwo()),
    statUpdateAtwentytwo:()=>dispatch(statUpdateAtwentytwo()),
    statUpdateMtwentytwo:()=>dispatch(statUpdateMtwentytwo()),
    statUpdateNtwentytwo:()=>dispatch(statUpdateNtwentytwo()),
    statUpdateKtwentytwo:()=>dispatch(statUpdateKtwentytwo()),
    btnOnetwentytwo:()=>dispatch(btnOnetwentytwo()),
    btnTwotwentytwo:()=>dispatch(btnTwotwentytwo()),
    btnThreetwentytwo:()=>dispatch(btnThreetwentytwo()),
    btnFourtwentytwo:()=>dispatch(btnFourtwentytwo()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (PVtwentythree)