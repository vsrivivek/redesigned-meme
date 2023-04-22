import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAfifteen,optBfifteen,optCfifteen,optDfifteen,btnOnefifteen,btnTwofifteen,btnThreefifteen,btnFourfifteen,statUpdatefifteen,statUpdateAfifteen,statUpdateKfifteen,statUpdateMfifteen,statUpdateNfifteen,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
// import Timer from '../../components/Timer ';
import BCtimer from './BCtimer';
import QuestionNumbers from '../biologicalclassification/QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'




function BCsixteen(props) {
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
    "width": "335px",
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
     <p style={wStyle}>Test Name: <b>Biological Classification</b></p>
     <p style={wStyle1}>Name Of the Candidate: <b>{props.name}</b></p>


    <form>
      {/* <h5>Question No.16</h5> */}
    <p><i>Question No.16</i><br></br>   Which of the following statements is incorrect regarding mycoplasma
</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionfifteen === 'a'}
          onClick={handleChange}
        /> They lack cell wall
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionfifteen === 'b'}
          onClick={handleChange}
        /> They are the smallest living cells
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionfifteen === 'c'}
          onClick={handleChange}
        /> They cannot survive without oxygen 
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionfifteen === 'd'}
          onClick={handleChange}
        /> They are pathogenic in plants and animals
      </div>       
      
    </form><br></br>
    <div className={props.buttons}>
         
         
        <button onClick={()=>(clickHanlderNext)(navigate('/BCseventeen'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/BCseventeen'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/BCseventeen'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/BCfifteen'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
        {/* <div><p>Name Of the Candidate: <b>{props.name}</b></p></div> */}
          <div className={props.timerdiv}><BCtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/BCconfirm'))}>Submit Test</button>
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
export default connect(mapStateToProps,mapDispatchToProps) (BCsixteen)