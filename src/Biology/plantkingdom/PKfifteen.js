import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAfourteen,optBfourteen,optCfourteen,optDfourteen,btnOnefourteen,btnTwofourteen,btnThreefourteen,btnFourfourteen,statUpdatefourteen,statUpdateAfourteen,statUpdateKfourteen,statUpdateMfourteen,statUpdateNfourteen,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
// import Timer from '../../components/Timer ';
import PKtimer from './PKtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function PKfifteen(props) {
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
    var stat=props.statusfourteen;
    var opt=props.optionfourteen

  const [optionfourteen, setOptionfourteen] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionfourteen(event.target.value);
    
  }
  
function optionChange(){
 if(optionfourteen==="a"){
   props.optAfourteen()
 }
 if(optionfourteen==="b"){
   props.optBfourteen()
 }
 if(optionfourteen==="c"){
   props.optCfourteen()
 }
 if(optionfourteen==="d"){
   props.optDfourteen()
 }
}

 useEffect(()=>{
  setOptionfourteen(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionfourteen===""){
  props.nextOne();
  props.statUpdatefourteen();
  props.btnOnefourteen()
  
 }
 
  else if (optionfourteen==="a"){
   props.nextTwo();
   props.statUpdateAfourteen();
   props.btnFourfourteen()
  
   
  }
  else if (optionfourteen==="b"){
    props.nextTwo();
    props.statUpdateAfourteen();
    props.btnFourfourteen()
   }
   else if (optionfourteen==="c"){
    props.nextTwo();
    props.statUpdateAfourteen();
    props.btnFourfourteen()
   }
   else if (optionfourteen==="d"){
    props.nextTwo();
    props.statUpdateAfourteen();
    props.btnFourfourteen()
   }}
   else if (stat==="Not Answered"){
     if(optionfourteen===""){
    props.nextThree();
    props.statUpdateKfourteen();
    props.btnOnefourteen()
    
   }
   
    else if (optionfourteen==="a"){
     props.nextFour();
     props.statUpdateAfourteen();
     props.btnFourfourteen()
     
    }
    else if (optionfourteen==="b"){
      props.nextFour();
      props.statUpdateAfourteen();
      props.btnFourfourteen()
      
     }
     else if (optionfourteen==="c"){
      props.nextFour();
      props.statUpdateAfourteen();
      props.btnFourfourteen()
      
     }
     else if ( optionfourteen==="d"){
      props.nextFour();
      props.statUpdateAfourteen();
      props.btnFourfourteen()
      
     }}
     else if (stat==="Marked"){
     if(optionfourteen===""){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnThreefourteen()
      
     }
          else if (optionfourteen==="a"){
      props.mfrFive();
      props.statUpdateNfourteen();
      props.btnThreefourteen()

     }
     else if (optionfourteen==="b"){
       props.mfrFive();
       props.statUpdateNfourteen();
       props.btnThreefourteen()

      }
      else if (optionfourteen==="c"){
       props.mfrFive();
       props.statUpdateNfourteen();
       props.btnThreefourteen()

      }
      else if (optionfourteen==="d"){
       props.mfrFive();
       props.statUpdateNfourteen();
       props.btnThreefourteen()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionfourteen==="a"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnThreefourteen()

      
     }
     else if (optionfourteen==="b"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnThreefourteen() 
     }
     else if (optionfourteen==="c"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnThreefourteen()
     }
     else if (optionfourteen==="d"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnThreefourteen()
     }}
     else if(stat==="Answered"){
     if (optionfourteen==="a"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()

      
     }
     else if (optionfourteen==="b"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()

      
     }
     else if ( optionfourteen==="c"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()
      
     }
     else if (optionfourteen==="d"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionfourteen===""){
  props.mfrOne();
  props.statUpdateMfourteen();
  props.btnTwofourteen()
 }
 
  else if (optionfourteen==="a"){
   props.mfrTwo();
   props.statUpdateNfourteen();
   props.btnThreefourteen()
  }
  else if (optionfourteen==="b"){
    props.mfrTwo();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
  

   }
   else if (optionfourteen==="c"){
    props.mfrTwo();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
  
   }
   else if (optionfourteen==="d"){
    props.mfrTwo();
    props.statUpdateNfourteen();
    props.btnThreefourteen()

   }}
  
 else if (stat==="Not Answered"){
   if(optionfourteen===""){
  props.mfrThree();
  props.statUpdateMfourteen();
  props.btnTwofourteen();
 }
 else if (optionfourteen==="a"){
  props.mfrFour();
  props.statUpdateNfourteen();
  props.btnThreefourteen()
 }
 else if (optionfourteen==="b"){
   props.mfrFour();
   props.statUpdateNfourteen();
   props.btnThreefourteen()
  }
  else if (optionfourteen==="c"){
   props.mfrFour();
   props.statUpdateNfourteen();
   props.btnThreefourteen()
  }
  else if (optionfourteen==="d"){
   props.mfrFour();
   props.statUpdateNfourteen();
  props.btnThreefourteen()
  }}
  else if (stat==="Marked"){
    if(optionfourteen===""){
    props.nextThree();
    props.statUpdateKfourteen();
    props.btnTwofourteen();
   }
   else if (optionfourteen==="a"){
    props.mfrFive();
    props.statUpdateNfourteen();
    props.btnThreefourteen()


   }
   else if (optionfourteen==="b"){
    props.mfrFive();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="c"){
    props.mfrFive();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="d"){
    props.mfrFive();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
    }}
   else if (stat==="Marked For Review"){
     if(optionfourteen==="a"){
    props.nextThree();
    props.statUpdateKfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="b"){
    props.nextThree();
    props.statUpdateKfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="c"){
    props.nextThree();
    props.statUpdateKfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="d"){
    props.nextThree();
    props.statUpdateKfourteen();
    props.btnThreefourteen()
   }}
   else if (stat==="Answered"){
     if(optionfourteen==="a"){
    props.mfrSix();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="b"){
    props.mfrSix();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="c"){
    props.mfrSix();
    props.statUpdateNfourteen();
    props.btnThreefourteen()
   }
   else if (optionfourteen==="d"){
    props.mfrSix();
    props.statUpdateNfourteen();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionfourteen===""){
    props.nexttwo();
    props.statUpdatefourteen();
    props.btnOnefourteen()
  }
  
   else if (optionfourteen==="a"){
    props.nextTwo();
    props.statUpdateAfourteen();
    props.btnFourfourteen()
   }
   else if (optionfourteen==="b"){
     props.nextTwo();
     props.statUpdateAfourteen();
     props.btnFourfourteen()
    }
    else if (optionfourteen==="c"){
     props.nextTwo();
     props.statUpdateAfourteen();
     props.btnFourfourteen()
    }
    else if (optionfourteen==="d"){
     props.nextTwo();
     props.statUpdateAfourteen();
     props.btnFourfourteen()
    }}
   
  else if (stat==="Not Answered"){
    if(optionfourteen===""){
   props.nextThree();
   props.statUpdateKfourteen();
   props.btnOnefourteen()
  }
  else if (optionfourteen==="a"){
   props.nextFour();
   props.statUpdateAfourteen();
   props.btnFourfourteen()
  }
  else if (optionfourteen==="b"){
    props.nextFour();
    props.statUpdateAfourteen();
    props.btnFourfourteen()
   }
   else if (optionfourteen==="c"){
    props.nextFour();
    props.statUpdateAfourteen();
    props.btnFourfourteen()
   }
   else if (optionfourteen==="d"){
    props.nextFour();
    props.statUpdateAfourteen();
    props.btnFourfourteen()
   }}
   else if (stat==="Marked"){
     if(optionfourteen===""){
     props.nextThree();
     props.statUpdateKfourteen();
     props.btnTwofourteen()
    }
    else if (optionfourteen==="a"){
     props.mfrFive();
     props.statUpdateNfourteen();
     props.btnThreefourteen()
    }
    else if (optionfourteen==="b"){
     props.mfrFive();
     props.statUpdateNfourteen();
     props.btnThreefourteen()
    }
    else if ( optionfourteen==="c"){
     props.mfrFive();
     props.statUpdateNfourteen();
     props.btnThreefourteen()
    }
    else if ( optionfourteen==="d"){
     props.mfrFive();
     props.statUpdateNfourteen();
     props.btnThreefourteen()
      }}
    else if (stat==="Marked For Review"){
      if(optionfourteen==="a"){
     props.mfrSeven();
     props.statUpdateAfourteen();
     props.btnFourfourteen()
    }
    else if (optionfourteen==="b"){
      props.mfrSeventwo();
      props.statUpdateAfourteen();
      props.btnFourfourteen()
    }
    else if (optionfourteen==="c"){
      props.mfrSeven();
      props.statUpdateAfourteen();
      props.btnFourfourteen()
    }
    else if ( optionfourteen==="d"){
      props.mfrSeven();
      props.statUpdateAfourteen();
      props.btnFourfourteen()
    }}
    else if (stat==="Answered"){
      if(optionfourteen==="a"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()
    }
    else if (optionfourteen==="b"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()
    }
    else if (optionfourteen==="c"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()
    }
    else if (optionfourteen==="d"){
      props.nextThree();
      props.statUpdateKfourteen();
      props.btnFourfourteen()
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
      {/* <h5>Question No.15</h5> */}
    <p> <i>Question No.15</i><br></br> Read the given statements and select the correct option<br></br>
Statement-I: Bryophytes are amphibians of plant kingdom<br></br>
Statement-II: They live in soil but depend on water for sexual reproduction<br></br>
</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionfourteen === 'a'}
          onClick={handleChange}
        />Both Statements (I) &(II) are correct
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionfourteen === 'b'}
          onClick={handleChange}
        /> Statement (I) is correct but Statement (II) is wrong
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionfourteen === 'c'}
          onClick={handleChange}
        /> Statement (II) is corect but Statement (I) is wrong
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionfourteen === 'd'}
          onClick={handleChange}
        /> Both Statements (I) &(II) are incorrect
      </div>
       
      
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/PKsixteen'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/PKsixteen'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/PKsixteen'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/PKfourteen'))}>Previous</button>
    
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
     statusfourteen:state.statusfourteen,
     optionfourteen:state.optionfourteen,
     BHealthanddiseaseSixteen:state.BHealthanddiseaseSixteen,
  BHealthanddiseaseSixteenA:state.BHealthanddiseaseSixteenA,
  BHealthanddiseaseSixteenB:state.BHealthanddiseaseSixteenB,
  BHealthanddiseaseSixteenC:state.BHealthanddiseaseSixteenC,
  BHealthanddiseaseSixteenD:state.BHealthanddiseaseSixteenD,
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
    optAfourteen:()=>dispatch(optAfourteen()),
    optBfourteen:()=>dispatch(optBfourteen()),
    optCfourteen:()=>dispatch(optCfourteen()),
    optDfourteen:()=>dispatch(optDfourteen()),
    statUpdatefourteen:()=>dispatch(statUpdatefourteen()),
    statUpdateAfourteen:()=>dispatch(statUpdateAfourteen()),
    statUpdateMfourteen:()=>dispatch(statUpdateMfourteen()),
    statUpdateNfourteen:()=>dispatch(statUpdateNfourteen()),
    statUpdateKfourteen:()=>dispatch(statUpdateKfourteen()),
    btnOnefourteen:()=>dispatch(btnOnefourteen()),
    btnTwofourteen:()=>dispatch(btnTwofourteen()),
    btnThreefourteen:()=>dispatch(btnThreefourteen()),
    btnFourfourteen:()=>dispatch(btnFourfourteen()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (PKfifteen)