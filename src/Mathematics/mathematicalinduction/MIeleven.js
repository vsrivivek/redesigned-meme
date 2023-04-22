import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAten,optBten,optCten,optDten,btnOneten,btnTwoten,btnThreeten,btnFourten,statUpdateten,statUpdateAten,statUpdateKten,statUpdateMten,statUpdateNten,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import MItimer from './MItimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function MIeleven(props) {
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
    var stat=props.statusten;
    var opt=props.optionten

  const [optionten, setOptionten] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionten(event.target.value);
    
  }
  
function optionChange(){
 if(optionten==="a"){
   props.optAten()
 }
 if(optionten==="b"){
   props.optBten()
 }
 if(optionten==="c"){
   props.optCten()
 }
 if(optionten==="d"){
   props.optDten()
 }
}

 useEffect(()=>{
  setOptionten(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionten===""){
  props.nextOne();
  props.statUpdateten();
  props.btnOneten()
  
 }
 
  else if (optionten==="a"){
   props.nextTwo();
   props.statUpdateAten();
   props.btnFourten()
  
   
  }
  else if (optionten==="b"){
    props.nextTwo();
    props.statUpdateAten();
    props.btnFourten()
   }
   else if (optionten==="c"){
    props.nextTwo();
    props.statUpdateAten();
    props.btnFourten()
   }
   else if (optionten==="d"){
    props.nextTwo();
    props.statUpdateAten();
    props.btnFourten()
   }}
   else if (stat==="Not Answered"){
     if(optionten===""){
    props.nextThree();
    props.statUpdateKten();
    props.btnOneten()
    
   }
   
    else if (optionten==="a"){
     props.nextFour();
     props.statUpdateAten();
     props.btnFourten()
     
    }
    else if (optionten==="b"){
      props.nextFour();
      props.statUpdateAten();
      props.btnFourten()
      
     }
     else if (optionten==="c"){
      props.nextFour();
      props.statUpdateAten();
      props.btnFourten()
      
     }
     else if ( optionten==="d"){
      props.nextFour();
      props.statUpdateAten();
      props.btnFourten()
      
     }}
     else if (stat==="Marked"){
     if(optionten===""){
      props.nextThree();
      props.statUpdateKten();
      props.btnThreeten()
      
     }
          else if (optionten==="a"){
      props.mfrFive();
      props.statUpdateNten();
      props.btnThreeten()

     }
     else if (optionten==="b"){
       props.mfrFive();
       props.statUpdateNten();
       props.btnThreeten()

      }
      else if (optionten==="c"){
       props.mfrFive();
       props.statUpdateNten();
       props.btnThreeten()

      }
      else if (optionten==="d"){
       props.mfrFive();
       props.statUpdateNten();
       props.btnThreeten()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionten==="a"){
      props.nextThree();
      props.statUpdateKten();
      props.btnThreeten()

      
     }
     else if (optionten==="b"){
      props.nextThree();
      props.statUpdateKten();
      props.btnThreeten() 
     }
     else if (optionten==="c"){
      props.nextThree();
      props.statUpdateKten();
      props.btnThreeten()
     }
     else if (optionten==="d"){
      props.nextThree();
      props.statUpdateKten();
      props.btnThreeten()
     }}
     else if(stat==="Answered"){
     if (optionten==="a"){
      props.nextThree();
      props.statUpdateKten();
      props.btnFourten()

      
     }
     else if (optionten==="b"){
      props.nextThree();
      props.statUpdateKten();
      props.btnFourten()

      
     }
     else if ( optionten==="c"){
      props.nextThree();
      props.statUpdateKten();
      props.btnFourten()
      
     }
     else if (optionten==="d"){
      props.nextThree();
      props.statUpdateKten();
      props.btnFourten()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionten===""){
  props.mfrOne();
  props.statUpdateMten();
  props.btnTwoten()
 }
 
  else if (optionten==="a"){
   props.mfrTwo();
   props.statUpdateNten();
   props.btnThreeten()
  }
  else if (optionten==="b"){
    props.mfrTwo();
    props.statUpdateNten();
    props.btnThreeten()
  

   }
   else if (optionten==="c"){
    props.mfrTwo();
    props.statUpdateNten();
    props.btnThreeten()
  
   }
   else if (optionten==="d"){
    props.mfrTwo();
    props.statUpdateNten();
    props.btnThreeten()

   }}
  
 else if (stat==="Not Answered"){
   if(optionten===""){
  props.mfrThree();
  props.statUpdateMten();
  props.btnTwoten();
 }
 else if (optionten==="a"){
  props.mfrFour();
  props.statUpdateNten();
  props.btnThreeten()
 }
 else if (optionten==="b"){
   props.mfrFour();
   props.statUpdateNten();
   props.btnThreeten()
  }
  else if (optionten==="c"){
   props.mfrFour();
   props.statUpdateNten();
   props.btnThreeten()
  }
  else if (optionten==="d"){
   props.mfrFour();
   props.statUpdateNten();
  props.btnThreeten()
  }}
  else if (stat==="Marked"){
    if(optionten===""){
    props.nextThree();
    props.statUpdateKten();
    props.btnTwoten();
   }
   else if (optionten==="a"){
    props.mfrFive();
    props.statUpdateNten();
    props.btnThreeten()


   }
   else if (optionten==="b"){
    props.mfrFive();
    props.statUpdateNten();
    props.btnThreeten()
   }
   else if (optionten==="c"){
    props.mfrFive();
    props.statUpdateNten();
    props.btnThreeten()
   }
   else if (optionten==="d"){
    props.mfrFive();
    props.statUpdateNten();
    props.btnThreeten()
    }}
   else if (stat==="Marked For Review"){
     if(optionten==="a"){
    props.nextThree();
    props.statUpdateKten();
    props.btnThreeten()
   }
   else if (optionten==="b"){
    props.nextThree();
    props.statUpdateKten();
    props.btnThreeten()
   }
   else if (optionten==="c"){
    props.nextThree();
    props.statUpdateKten();
    props.btnThreeten()
   }
   else if (optionten==="d"){
    props.nextThree();
    props.statUpdateKten();
    props.btnThreeten()
   }}
   else if (stat==="Answered"){
     if(optionten==="a"){
    props.mfrSix();
    props.statUpdateNten();
    props.btnThreeten()
   }
   else if (optionten==="b"){
    props.mfrSix();
    props.statUpdateNten();
    props.btnThreeten()
   }
   else if (optionten==="c"){
    props.mfrSix();
    props.statUpdateNten();
    props.btnThreeten()
   }
   else if (optionten==="d"){
    props.mfrSix();
    props.statUpdateNten();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionten===""){
    props.nexttwo();
    props.statUpdateten();
    props.btnOneten()
  }
  
   else if (optionten==="a"){
    props.nextTwo();
    props.statUpdateAten();
    props.btnFourten()
   }
   else if (optionten==="b"){
     props.nextTwo();
     props.statUpdateAten();
     props.btnFourten()
    }
    else if (optionten==="c"){
     props.nextTwo();
     props.statUpdateAten();
     props.btnFourten()
    }
    else if (optionten==="d"){
     props.nextTwo();
     props.statUpdateAten();
     props.btnFourten()
    }}
   
  else if (stat==="Not Answered"){
    if(optionten===""){
   props.nextThree();
   props.statUpdateKten();
   props.btnOneten()
  }
  else if (optionten==="a"){
   props.nextFour();
   props.statUpdateAten();
   props.btnFourten()
  }
  else if (optionten==="b"){
    props.nextFour();
    props.statUpdateAten();
    props.btnFourten()
   }
   else if (optionten==="c"){
    props.nextFour();
    props.statUpdateAten();
    props.btnFourten()
   }
   else if (optionten==="d"){
    props.nextFour();
    props.statUpdateAten();
    props.btnFourten()
   }}
   else if (stat==="Marked"){
     if(optionten===""){
     props.nextThree();
     props.statUpdateKten();
     props.btnTwoten()
    }
    else if (optionten==="a"){
     props.mfrFive();
     props.statUpdateNten();
     props.btnThreeten()
    }
    else if (optionten==="b"){
     props.mfrFive();
     props.statUpdateNten();
     props.btnThreeten()
    }
    else if ( optionten==="c"){
     props.mfrFive();
     props.statUpdateNten();
     props.btnThreeten()
    }
    else if ( optionten==="d"){
     props.mfrFive();
     props.statUpdateNten();
     props.btnThreeten()
      }}
    else if (stat==="Marked For Review"){
      if(optionten==="a"){
     props.mfrSeven();
     props.statUpdateAten();
     props.btnFourten()
    }
    else if (optionten==="b"){
      props.mfrSeventwo();
      props.statUpdateAten();
      props.btnFourten()
    }
    else if (optionten==="c"){
      props.mfrSeven();
      props.statUpdateAten();
      props.btnFourten()
    }
    else if ( optionten==="d"){
      props.mfrSeven();
      props.statUpdateAten();
      props.btnFourten()
    }}
    else if (stat==="Answered"){
      if(optionten==="a"){
      props.nextThree();
      props.statUpdateKten();
      props.btnFourten()
    }
    else if (optionten==="b"){
      props.nextThree();
      props.statUpdateKten();
      props.btnFourten()
    }
    else if (optionten==="c"){
      props.nextThree();
      props.statUpdateKten();
      props.btnFourten()
    }
    else if (optionten==="d"){
      props.nextThree();
      props.statUpdateKten();
      props.btnFourten()
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
     <p style={wStyle}>Test Name: <b>Mathematical Induction</b></p>
     <p style={wStyle1}>Name of the Candidate: <b>{props.name}</b></p>  
    <form>
    <p><i>Question No.11</i><br></br> 2<sup>3</sup>+4<sup>3</sup>+6<sup>3</sup>+⋯+(2n)<sup>3</sup>= kn<sup>2</sup>(n+1)<sup>2</sup>,then k=



 </p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionten === 'a'}
          onClick={handleChange}
        /> 1/2	 </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionten === 'b'}
          onClick={handleChange}
        /> 1          
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionten === 'c'}
          onClick={handleChange}
        /> 3/2   
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionten === 'd'}
          onClick={handleChange}
        /> 2 
       
      </div>
       
      
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/MItwelve'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/MItwelve'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/MItwelve'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/MIten'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><MItimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/MIconfirm'))}>Submit Test</button>
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
     statusten:state.statusten,
     optionten:state.optionten,
     BHealthanddiseaseTwelve:state.BHealthanddiseaseTwelve,
  BHealthanddiseaseTwelveA:state.BHealthanddiseaseTwelveA,
  BHealthanddiseaseTwelveB:state.BHealthanddiseaseTwelveB,
  BHealthanddiseaseTwelveC:state.BHealthanddiseaseTwelveC,
  BHealthanddiseaseTwelveD:state.BHealthanddiseaseTwelveD,
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
    optAten:()=>dispatch(optAten()),
    optBten:()=>dispatch(optBten()),
    optCten:()=>dispatch(optCten()),
    optDten:()=>dispatch(optDten()),
    statUpdateten:()=>dispatch(statUpdateten()),
    statUpdateAten:()=>dispatch(statUpdateAten()),
    statUpdateMten:()=>dispatch(statUpdateMten()),
    statUpdateNten:()=>dispatch(statUpdateNten()),
    statUpdateKten:()=>dispatch(statUpdateKten()),
    btnOneten:()=>dispatch(btnOneten()),
    btnTwoten:()=>dispatch(btnTwoten()),
    btnThreeten:()=>dispatch(btnThreeten()),
    btnFourten:()=>dispatch(btnFourten()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (MIeleven)