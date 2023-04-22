import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAthirtytwo,optBthirtytwo,optCthirtytwo,optDthirtytwo,btnOnethirtytwo,btnTwothirtytwo,btnThreethirtytwo,btnFourthirtytwo,statUpdatethirtytwo,statUpdateAthirtytwo,statUpdateKthirtytwo,statUpdateMthirtytwo,statUpdateNthirtytwo,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
// import Timer from '../../components/Timer ';
import DYtimer from './DYtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function DYthirtyThree(props) {
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
    "width": "195px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const navigate = useNavigate()  
    var stat=props.statusthirtytwo;
    var opt=props.optionthirtytwo

  const [optionthirtytwo, setOptionthirtytwo] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionthirtytwo(event.target.value);
    
  }
  
function optionChange(){
 if(optionthirtytwo==="a"){
   props.optAthirtytwo()
 }
 if(optionthirtytwo==="b"){
   props.optBthirtytwo()
 }
 if(optionthirtytwo==="c"){
   props.optCthirtytwo()
 }
 if(optionthirtytwo==="d"){
   props.optDthirtytwo()
 }
}

 useEffect(()=>{
  setOptionthirtytwo(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionthirtytwo===""){
  props.nextOne();
  props.statUpdatethirtytwo();
  props.btnOnethirtytwo()
  
 }
 
  else if (optionthirtytwo==="a"){
   props.nextTwo();
   props.statUpdateAthirtytwo();
   props.btnFourthirtytwo()
  
   
  }
  else if (optionthirtytwo==="b"){
    props.nextTwo();
    props.statUpdateAthirtytwo();
    props.btnFourthirtytwo()
   }
   else if (optionthirtytwo==="c"){
    props.nextTwo();
    props.statUpdateAthirtytwo();
    props.btnFourthirtytwo()
   }
   else if (optionthirtytwo==="d"){
    props.nextTwo();
    props.statUpdateAthirtytwo();
    props.btnFourthirtytwo()
   }}
   else if (stat==="Not Answered"){
     if(optionthirtytwo===""){
    props.nextThree();
    props.statUpdateKthirtytwo();
    props.btnOnethirtytwo()
    
   }
   
    else if (optionthirtytwo==="a"){
     props.nextFour();
     props.statUpdateAthirtytwo();
     props.btnFourthirtytwo()
     
    }
    else if (optionthirtytwo==="b"){
      props.nextFour();
      props.statUpdateAthirtytwo();
      props.btnFourthirtytwo()
      
     }
     else if (optionthirtytwo==="c"){
      props.nextFour();
      props.statUpdateAthirtytwo();
      props.btnFourthirtytwo()
      
     }
     else if ( optionthirtytwo==="d"){
      props.nextFour();
      props.statUpdateAthirtytwo();
      props.btnFourthirtytwo()
      
     }}
     else if (stat==="Marked"){
     if(optionthirtytwo===""){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnThreethirtytwo()
      
     }
          else if (optionthirtytwo==="a"){
      props.mfrFive();
      props.statUpdateNthirtytwo();
      props.btnThreethirtytwo()

     }
     else if (optionthirtytwo==="b"){
       props.mfrFive();
       props.statUpdateNthirtytwo();
       props.btnThreethirtytwo()

      }
      else if (optionthirtytwo==="c"){
       props.mfrFive();
       props.statUpdateNthirtytwo();
       props.btnThreethirtytwo()

      }
      else if (optionthirtytwo==="d"){
       props.mfrFive();
       props.statUpdateNthirtytwo();
       props.btnThreethirtytwo()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionthirtytwo==="a"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnThreethirtytwo()

      
     }
     else if (optionthirtytwo==="b"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnThreethirtytwo() 
     }
     else if (optionthirtytwo==="c"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnThreethirtytwo()
     }
     else if (optionthirtytwo==="d"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnThreethirtytwo()
     }}
     else if(stat==="Answered"){
     if (optionthirtytwo==="a"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()

      
     }
     else if (optionthirtytwo==="b"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()

      
     }
     else if ( optionthirtytwo==="c"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()
      
     }
     else if (optionthirtytwo==="d"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionthirtytwo===""){
  props.mfrOne();
  props.statUpdateMthirtytwo();
  props.btnTwothirtytwo()
 }
 
  else if (optionthirtytwo==="a"){
   props.mfrTwo();
   props.statUpdateNthirtytwo();
   props.btnThreethirtytwo()
  }
  else if (optionthirtytwo==="b"){
    props.mfrTwo();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
  

   }
   else if (optionthirtytwo==="c"){
    props.mfrTwo();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
  
   }
   else if (optionthirtytwo==="d"){
    props.mfrTwo();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()

   }}
  
 else if (stat==="Not Answered"){
   if(optionthirtytwo===""){
  props.mfrThree();
  props.statUpdateMthirtytwo();
  props.btnTwothirtytwo();
 }
 else if (optionthirtytwo==="a"){
  props.mfrFour();
  props.statUpdateNthirtytwo();
  props.btnThreethirtytwo()
 }
 else if (optionthirtytwo==="b"){
   props.mfrFour();
   props.statUpdateNthirtytwo();
   props.btnThreethirtytwo()
  }
  else if (optionthirtytwo==="c"){
   props.mfrFour();
   props.statUpdateNthirtytwo();
   props.btnThreethirtytwo()
  }
  else if (optionthirtytwo==="d"){
   props.mfrFour();
   props.statUpdateNthirtytwo();
  props.btnThreethirtytwo()
  }}
  else if (stat==="Marked"){
    if(optionthirtytwo===""){
    props.nextThree();
    props.statUpdateKthirtytwo();
    props.btnTwothirtytwo();
   }
   else if (optionthirtytwo==="a"){
    props.mfrFive();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()


   }
   else if (optionthirtytwo==="b"){
    props.mfrFive();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="c"){
    props.mfrFive();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="d"){
    props.mfrFive();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
    }}
   else if (stat==="Marked For Review"){
     if(optionthirtytwo==="a"){
    props.nextThree();
    props.statUpdateKthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="b"){
    props.nextThree();
    props.statUpdateKthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="c"){
    props.nextThree();
    props.statUpdateKthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="d"){
    props.nextThree();
    props.statUpdateKthirtytwo();
    props.btnThreethirtytwo()
   }}
   else if (stat==="Answered"){
     if(optionthirtytwo==="a"){
    props.mfrSix();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="b"){
    props.mfrSix();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="c"){
    props.mfrSix();
    props.statUpdateNthirtytwo();
    props.btnThreethirtytwo()
   }
   else if (optionthirtytwo==="d"){
    props.mfrSix();
    props.statUpdateNthirtytwo();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionthirtytwo===""){
    props.nexttwo();
    props.statUpdatethirtytwo();
    props.btnOnethirtytwo()
  }
  
   else if (optionthirtytwo==="a"){
    props.nextTwo();
    props.statUpdateAthirtytwo();
    props.btnFourthirtytwo()
   }
   else if (optionthirtytwo==="b"){
     props.nextTwo();
     props.statUpdateAthirtytwo();
     props.btnFourthirtytwo()
    }
    else if (optionthirtytwo==="c"){
     props.nextTwo();
     props.statUpdateAthirtytwo();
     props.btnFourthirtytwo()
    }
    else if (optionthirtytwo==="d"){
     props.nextTwo();
     props.statUpdateAthirtytwo();
     props.btnFourthirtytwo()
    }}
   
  else if (stat==="Not Answered"){
    if(optionthirtytwo===""){
   props.nextThree();
   props.statUpdateKthirtytwo();
   props.btnOnethirtytwo()
  }
  else if (optionthirtytwo==="a"){
   props.nextFour();
   props.statUpdateAthirtytwo();
   props.btnFourthirtytwo()
  }
  else if (optionthirtytwo==="b"){
    props.nextFour();
    props.statUpdateAthirtytwo();
    props.btnFourthirtytwo()
   }
   else if (optionthirtytwo==="c"){
    props.nextFour();
    props.statUpdateAthirtytwo();
    props.btnFourthirtytwo()
   }
   else if (optionthirtytwo==="d"){
    props.nextFour();
    props.statUpdateAthirtytwo();
    props.btnFourthirtytwo()
   }}
   else if (stat==="Marked"){
     if(optionthirtytwo===""){
     props.nextThree();
     props.statUpdateKthirtytwo();
     props.btnTwothirtytwo()
    }
    else if (optionthirtytwo==="a"){
     props.mfrFive();
     props.statUpdateNthirtytwo();
     props.btnThreethirtytwo()
    }
    else if (optionthirtytwo==="b"){
     props.mfrFive();
     props.statUpdateNthirtytwo();
     props.btnThreethirtytwo()
    }
    else if ( optionthirtytwo==="c"){
     props.mfrFive();
     props.statUpdateNthirtytwo();
     props.btnThreethirtytwo()
    }
    else if ( optionthirtytwo==="d"){
     props.mfrFive();
     props.statUpdateNthirtytwo();
     props.btnThreethirtytwo()
      }}
    else if (stat==="Marked For Review"){
      if(optionthirtytwo==="a"){
     props.mfrSeven();
     props.statUpdateAthirtytwo();
     props.btnFourthirtytwo()
    }
    else if (optionthirtytwo==="b"){
      props.mfrSeventwo();
      props.statUpdateAthirtytwo();
      props.btnFourthirtytwo()
    }
    else if (optionthirtytwo==="c"){
      props.mfrSeven();
      props.statUpdateAthirtytwo();
      props.btnFourthirtytwo()
    }
    else if ( optionthirtytwo==="d"){
      props.mfrSeven();
      props.statUpdateAthirtytwo();
      props.btnFourthirtytwo()
    }}
    else if (stat==="Answered"){
      if(optionthirtytwo==="a"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()
    }
    else if (optionthirtytwo==="b"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()
    }
    else if (optionthirtytwo==="c"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()
    }
    else if (optionthirtytwo==="d"){
      props.nextThree();
      props.statUpdateKthirtytwo();
      props.btnFourthirtytwo()
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
           </div><br></br>
        {/* <div className={props.title}>
          <h3>Test On: Diseases</h3>
        </div> */}
    <div className= {props.total}>
     <div className={props.left}>
     <p style={wStyle}>Test Name: <b>Diseases</b></p>
     <p style={wStyle1}>Name Of the Candidate: <b>{props.name}</b></p>  

    <form>
      <h5>Question No.33</h5>
    <p> Read the following statements and select the correct combination? <br></br>a)In general pathogen have to adapt to life with in environment of the host<br></br> b) Plasmodium initially multiplies in RBC and then it attacks hepatic cells of man<br></br>  c) Plasmodium is intracellular parasite in man and extracellular in mosquito <br></br>d)	Sir Ronald Ross discovered Plasmodium in the RBC of man and received Nobel prize for it</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionthirtytwo === 'a'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtyfiveA}
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionthirtytwo === 'b'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtyfiveB}
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionthirtytwo === 'c'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtyfiveC}
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionthirtytwo === 'd'}
          onClick={handleChange}
        /> {props.BHealthanddiseaseThirtyfiveD}
      </div>
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/DYthirtyfour'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/DYthirtyfour'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/DYthirtyfour'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/DYthirtytwo'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
        {/* <div><p>Name Of the Candidate: <b>{props.name}</b></p></div> */}
          <div className={props.timerdiv}><DYtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/DYconfirm'))}>Submit Test</button>
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
     statusthirtytwo:state.statusthirtytwo,
     optionthirtytwo:state.optionthirtytwo,
     BHealthanddiseaseThirtyfive:state.BHealthanddiseaseThirtyfive,
  BHealthanddiseaseThirtyfiveA:state.BHealthanddiseaseThirtyfiveA,
  BHealthanddiseaseThirtyfiveB:state.BHealthanddiseaseThirtyfiveB,
  BHealthanddiseaseThirtyfiveC:state.BHealthanddiseaseThirtyfiveC,
  BHealthanddiseaseThirtyfiveD:state.BHealthanddiseaseThirtyfiveD,
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
    optAthirtytwo:()=>dispatch(optAthirtytwo()),
    optBthirtytwo:()=>dispatch(optBthirtytwo()),
    optCthirtytwo:()=>dispatch(optCthirtytwo()),
    optDthirtytwo:()=>dispatch(optDthirtytwo()),
    statUpdatethirtytwo:()=>dispatch(statUpdatethirtytwo()),
    statUpdateAthirtytwo:()=>dispatch(statUpdateAthirtytwo()),
    statUpdateMthirtytwo:()=>dispatch(statUpdateMthirtytwo()),
    statUpdateNthirtytwo:()=>dispatch(statUpdateNthirtytwo()),
    statUpdateKthirtytwo:()=>dispatch(statUpdateKthirtytwo()),
    btnOnethirtytwo:()=>dispatch(btnOnethirtytwo()),
    btnTwothirtytwo:()=>dispatch(btnTwothirtytwo()),
    btnThreethirtytwo:()=>dispatch(btnThreethirtytwo()),
    btnFourthirtytwo:()=>dispatch(btnFourthirtytwo()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (DYthirtyThree)