import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAfifteen,optBfifteen,optCfifteen,optDfifteen,btnOnefifteen,btnTwofifteen,btnThreefifteen,btnFourfifteen,statUpdatefifteen,statUpdateAfifteen,statUpdateKfifteen,statUpdateMfifteen,statUpdateNfifteen,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import YTtimer from './YTtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'


function YTsixteen(props) {
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
    "width": "395px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };

  const navigate = useNavigate()  
    var stat=props.statusfifteen;
    var opt=props.optionfifteen

  const [optionfifteen, setOptionfifteen] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionfifteen(event.target.value);
    
  }
  
function optionChange(){
 if(optionfifteen==="a"){
   props.optAfifteen()
 }
 if(optionfifteen==="b"){
   props.optBfifteen()
 }
 if(optionfifteen==="c"){
   props.optCfifteen()
 }
 if(optionfifteen==="d"){
   props.optDfifteen()
 }
}

 useEffect(()=>{
  setOptionfifteen(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionfifteen===""){
  props.nextOne();
  props.statUpdatefifteen();
  props.btnOnefifteen()
  
 }
 
  else if (optionfifteen==="a"){
   props.nextTwo();
   props.statUpdateAfifteen();
   props.btnFourfifteen()
  
   
  }
  else if (optionfifteen==="b"){
    props.nextTwo();
    props.statUpdateAfifteen();
    props.btnFourfifteen()
   }
   else if (optionfifteen==="c"){
    props.nextTwo();
    props.statUpdateAfifteen();
    props.btnFourfifteen()
   }
   else if (optionfifteen==="d"){
    props.nextTwo();
    props.statUpdateAfifteen();
    props.btnFourfifteen()
   }}
   else if (stat==="Not Answered"){
     if(optionfifteen===""){
    props.nextThree();
    props.statUpdateKfifteen();
    props.btnOnefifteen()
    
   }
   
    else if (optionfifteen==="a"){
     props.nextFour();
     props.statUpdateAfifteen();
     props.btnFourfifteen()
     
    }
    else if (optionfifteen==="b"){
      props.nextFour();
      props.statUpdateAfifteen();
      props.btnFourfifteen()
      
     }
     else if (optionfifteen==="c"){
      props.nextFour();
      props.statUpdateAfifteen();
      props.btnFourfifteen()
      
     }
     else if ( optionfifteen==="d"){
      props.nextFour();
      props.statUpdateAfifteen();
      props.btnFourfifteen()
      
     }}
     else if (stat==="Marked"){
     if(optionfifteen===""){
      props.nextThree();
      props.statUpdateKfifteen();
      props.btnThreefifteen()
      
     }
          else if (optionfifteen==="a"){
      props.mfrFive();
      props.statUpdateNfifteen();
      props.btnThreefifteen()

     }
     else if (optionfifteen==="b"){
       props.mfrFive();
       props.statUpdateNfifteen();
       props.btnThreefifteen()

      }
      else if (optionfifteen==="c"){
       props.mfrFive();
       props.statUpdateNfifteen();
       props.btnThreefifteen()

      }
      else if (optionfifteen==="d"){
       props.mfrFive();
       props.statUpdateNfifteen();
       props.btnThreefifteen()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionfifteen==="a"){
      props.nextThree();
      props.statUpdateKfifteen();
      props.btnThreefifteen()

      
     }
     else if (optionfifteen==="b"){
      props.nextThree();
      props.statUpdateKfifteen();
      props.btnThreefifteen() 
     }
     else if (optionfifteen==="c"){
      props.nextThree();
      props.statUpdateKfifteen();
      props.btnThreefifteen()
     }
     else if (optionfifteen==="d"){
      props.nextThree();
      props.statUpdateKfifteen();
      props.btnThreefifteen()
     }}
     else if(stat==="Answered"){
     if (optionfifteen==="a"){
      props.nextThree();
      props.statUpdateKfifteen();
      props.btnFourfifteen()

      
     }
     else if (optionfifteen==="b"){
      props.nextThree();
      props.statUpdateKfifteen();
      props.btnFourfifteen()

      
     }
     else if ( optionfifteen==="c"){
      props.nextThree();
      props.statUpdateKfifteen();
      props.btnFourfifteen()
      
     }
     else if (optionfifteen==="d"){
      props.nextThree();
      props.statUpdateKfifteen();
      props.btnFourfifteen()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionfifteen===""){
  props.mfrOne();
  props.statUpdateMfifteen();
  props.btnTwofifteen()
 }
 
  else if (optionfifteen==="a"){
   props.mfrTwo();
   props.statUpdateNfifteen();
   props.btnThreefifteen()
  }
  else if (optionfifteen==="b"){
    props.mfrTwo();
    props.statUpdateNfifteen();
    props.btnThreefifteen()
  

   }
   else if (optionfifteen==="c"){
    props.mfrTwo();
    props.statUpdateNfifteen();
    props.btnThreefifteen()
  
   }
   else if (optionfifteen==="d"){
    props.mfrTwo();
    props.statUpdateNfifteen();
    props.btnThreefifteen()

   }}
  
 else if (stat==="Not Answered"){
   if(optionfifteen===""){
  props.mfrThree();
  props.statUpdateMfifteen();
  props.btnTwofifteen();
 }
 else if (optionfifteen==="a"){
  props.mfrFour();
  props.statUpdateNfifteen();
  props.btnThreefifteen()
 }
 else if (optionfifteen==="b"){
   props.mfrFour();
   props.statUpdateNfifteen();
   props.btnThreefifteen()
  }
  else if (optionfifteen==="c"){
   props.mfrFour();
   props.statUpdateNfifteen();
   props.btnThreefifteen()
  }
  else if (optionfifteen==="d"){
   props.mfrFour();
   props.statUpdateNfifteen();
  props.btnThreefifteen()
  }}
  else if (stat==="Marked"){
    if(optionfifteen===""){
    props.nextThree();
    props.statUpdateKfifteen();
    props.btnTwofifteen();
   }
   else if (optionfifteen==="a"){
    props.mfrFive();
    props.statUpdateNfifteen();
    props.btnThreefifteen()


   }
   else if (optionfifteen==="b"){
    props.mfrFive();
    props.statUpdateNfifteen();
    props.btnThreefifteen()
   }
   else if (optionfifteen==="c"){
    props.mfrFive();
    props.statUpdateNfifteen();
    props.btnThreefifteen()
   }
   else if (optionfifteen==="d"){
    props.mfrFive();
    props.statUpdateNfifteen();
    props.btnThreefifteen()
    }}
   else if (stat==="Marked For Review"){
     if(optionfifteen==="a"){
    props.nextThree();
    props.statUpdateKfifteen();
    props.btnThreefifteen()
   }
   else if (optionfifteen==="b"){
    props.nextThree();
    props.statUpdateKfifteen();
    props.btnThreefifteen()
   }
   else if (optionfifteen==="c"){
    props.nextThree();
    props.statUpdateKfifteen();
    props.btnThreefifteen()
   }
   else if (optionfifteen==="d"){
    props.nextThree();
    props.statUpdateKfifteen();
    props.btnThreefifteen()
   }}
   else if (stat==="Answered"){
     if(optionfifteen==="a"){
    props.mfrSix();
    props.statUpdateNfifteen();
    props.btnThreefifteen()
   }
   else if (optionfifteen==="b"){
    props.mfrSix();
    props.statUpdateNfifteen();
    props.btnThreefifteen()
   }
   else if (optionfifteen==="c"){
    props.mfrSix();
    props.statUpdateNfifteen();
    props.btnThreefifteen()
   }
   else if (optionfifteen==="d"){
    props.mfrSix();
    props.statUpdateNfifteen();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionfifteen===""){
    props.nexttwo();
    props.statUpdatefifteen();
    props.btnOnefifteen()
  }
  
   else if (optionfifteen==="a"){
    props.nextTwo();
    props.statUpdateAfifteen();
    props.btnFourfifteen()
   }
   else if (optionfifteen==="b"){
     props.nextTwo();
     props.statUpdateAfifteen();
     props.btnFourfifteen()
    }
    else if (optionfifteen==="c"){
     props.nextTwo();
     props.statUpdateAfifteen();
     props.btnFourfifteen()
    }
    else if (optionfifteen==="d"){
     props.nextTwo();
     props.statUpdateAfifteen();
     props.btnFourfifteen()
    }}
   
  else if (stat==="Not Answered"){
    if(optionfifteen===""){
   props.nextThree();
   props.statUpdateKfifteen();
   props.btnOnefifteen()
  }
  else if (optionfifteen==="a"){
   props.nextFour();
   props.statUpdateAfifteen();
   props.btnFourfifteen()
  }
  else if (optionfifteen==="b"){
    props.nextFour();
    props.statUpdateAfifteen();
    props.btnFourfifteen()
   }
   else if (optionfifteen==="c"){
    props.nextFour();
    props.statUpdateAfifteen();
    props.btnFourfifteen()
   }
   else if (optionfifteen==="d"){
    props.nextFour();
    props.statUpdateAfifteen();
    props.btnFourfifteen()
   }}
   else if (stat==="Marked"){
     if(optionfifteen===""){
     props.nextThree();
     props.statUpdateKfifteen();
     props.btnTwofifteen()
    }
    else if (optionfifteen==="a"){
     props.mfrFive();
     props.statUpdateNfifteen();
     props.btnThreefifteen()
    }
    else if (optionfifteen==="b"){
     props.mfrFive();
     props.statUpdateNfifteen();
     props.btnThreefifteen()
    }
    else if ( optionfifteen==="c"){
     props.mfrFive();
     props.statUpdateNfifteen();
     props.btnThreefifteen()
    }
    else if ( optionfifteen==="d"){
     props.mfrFive();
     props.statUpdateNfifteen();
     props.btnThreefifteen()
      }}
    else if (stat==="Marked For Review"){
      if(optionfifteen==="a"){
     props.mfrSeven();
     props.statUpdateAfifteen();
     props.btnFourfifteen()
    }
    else if (optionfifteen==="b"){
      props.mfrSeventwo();
      props.statUpdateAfifteen();
      props.btnFourfifteen()
    }
    else if (optionfifteen==="c"){
      props.mfrSeven();
      props.statUpdateAfifteen();
      props.btnFourfifteen()
    }
    else if ( optionfifteen==="d"){
      props.mfrSeven();
      props.statUpdateAfifteen();
      props.btnFourfifteen()
    }}
    else if (stat==="Answered"){
      if(optionfifteen==="a"){
      props.nextThree();
      props.statUpdateKfifteen();
      props.btnFourfifteen()
    }
    else if (optionfifteen==="b"){
      props.nextThree();
      props.statUpdateKfifteen();
      props.btnFourfifteen()
    }
    else if (optionfifteen==="c"){
      props.nextThree();
      props.statUpdateKfifteen();
      props.btnFourfifteen()
    }
    else if (optionfifteen==="d"){
      props.nextThree();
      props.statUpdateKfifteen();
      props.btnFourfifteen()
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
     <p style={wStyle}>Test Name: <b>Alkali & Alkaline Earth Metals</b></p>
     <p style={wStyle1}>Name Of the Candidate: <b>{props.name}</b></p> 
    <form>
    <p><i>Question No.16</i><br></br>A compound X on heating gives a colourelss gas. The residue is diisolved in water to obtain Y. Excess CO<sub>2</sub> is bubbled through aqueous solution of Y,Z is formed. Z on gently heating gives back X. The compound X is</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionfifteen === 'a'}
          onClick={handleChange}
        /> CaCO<sub>3</sub>
        
              </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionfifteen === 'b'}
          onClick={handleChange}
        /> Na<sub>2</sub>CO<sub>3</sub>
        
             </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionfifteen === 'c'}
          onClick={handleChange}
        /> Ca(HCO<sub>3</sub>)<sub>2</sub>
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionfifteen === 'd'}
          onClick={handleChange}
        /> K<sub>2</sub>CO<sub>3</sub>
      </div>       
      
    </form><br></br>
    <div className={props.buttons}>
         
         
        <button onClick={()=>(clickHanlderNext)(navigate('/YTseventeen'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/YTseventeen'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/YTseventeen'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/YTfifteen'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><YTtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/YTscore'))}>Submit Test</button>
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
  statusfifteen:state.statusfifteen,
  optionfifteen:state.optionfifteen,
  BHealthanddiseaseSeventeen:state.BHealthanddiseaseSeventeen,
  BHealthanddiseaseSeventeenA:state.BHealthanddiseaseSeventeenA,
  BHealthanddiseaseSeventeenB:state.BHealthanddiseaseSeventeenB,
  BHealthanddiseaseSeventeenC:state.BHealthanddiseaseSeventeenC,
  BHealthanddiseaseSeventeenD:state.BHealthanddiseaseSeventeenD,
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
    optAfifteen:()=>dispatch(optAfifteen()),
    optBfifteen:()=>dispatch(optBfifteen()),
    optCfifteen:()=>dispatch(optCfifteen()),
    optDfifteen:()=>dispatch(optDfifteen()),
    statUpdatefifteen:()=>dispatch(statUpdatefifteen()),
    statUpdateAfifteen:()=>dispatch(statUpdateAfifteen()),
    statUpdateMfifteen:()=>dispatch(statUpdateMfifteen()),
    statUpdateNfifteen:()=>dispatch(statUpdateNfifteen()),
    statUpdateKfifteen:()=>dispatch(statUpdateKfifteen()),
    btnOnefifteen:()=>dispatch(btnOnefifteen()),
    btnTwofifteen:()=>dispatch(btnTwofifteen()),
    btnThreefifteen:()=>dispatch(btnThreefifteen()),
    btnFourfifteen:()=>dispatch(btnFourfifteen()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (YTsixteen)