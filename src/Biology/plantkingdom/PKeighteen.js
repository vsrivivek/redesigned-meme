import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAseventeen,optBseventeen,optCseventeen,optDseventeen,btnOneseventeen,btnTwoseventeen,btnThreeseventeen,btnFourseventeen,statUpdateseventeen,statUpdateAseventeen,statUpdateKseventeen,statUpdateMseventeen,statUpdateNseventeen,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
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




function PKeighteen(props) {
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
    var stat=props.statusseventeen;
    var opt=props.optionseventeen

  const [optionseventeen, setOptionseventeen] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionseventeen(event.target.value);
    
  }
  
function optionChange(){
 if(optionseventeen==="a"){
   props.optAseventeen()
 }
 if(optionseventeen==="b"){
   props.optBseventeen()
 }
 if(optionseventeen==="c"){
   props.optCseventeen()
 }
 if(optionseventeen==="d"){
   props.optDseventeen()
 }
}

 useEffect(()=>{
  setOptionseventeen(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionseventeen===""){
  props.nextOne();
  props.statUpdateseventeen();
  props.btnOneseventeen()
  
 }
 
  else if (optionseventeen==="a"){
   props.nextTwo();
   props.statUpdateAseventeen();
   props.btnFourseventeen()
  
   
  }
  else if (optionseventeen==="b"){
    props.nextTwo();
    props.statUpdateAseventeen();
    props.btnFourseventeen()
   }
   else if (optionseventeen==="c"){
    props.nextTwo();
    props.statUpdateAseventeen();
    props.btnFourseventeen()
   }
   else if (optionseventeen==="d"){
    props.nextTwo();
    props.statUpdateAseventeen();
    props.btnFourseventeen()
   }}
   else if (stat==="Not Answered"){
     if(optionseventeen===""){
    props.nextThree();
    props.statUpdateKseventeen();
    props.btnOneseventeen()
    
   }
   
    else if (optionseventeen==="a"){
     props.nextFour();
     props.statUpdateAseventeen();
     props.btnFourseventeen()
     
    }
    else if (optionseventeen==="b"){
      props.nextFour();
      props.statUpdateAseventeen();
      props.btnFourseventeen()
      
     }
     else if (optionseventeen==="c"){
      props.nextFour();
      props.statUpdateAseventeen();
      props.btnFourseventeen()
      
     }
     else if ( optionseventeen==="d"){
      props.nextFour();
      props.statUpdateAseventeen();
      props.btnFourseventeen()
      
     }}
     else if (stat==="Marked"){
     if(optionseventeen===""){
      props.nextThree();
      props.statUpdateKseventeen();
      props.btnThreeseventeen()
      
     }
          else if (optionseventeen==="a"){
      props.mfrFive();
      props.statUpdateNseventeen();
      props.btnThreeseventeen()

     }
     else if (optionseventeen==="b"){
       props.mfrFive();
       props.statUpdateNseventeen();
       props.btnThreeseventeen()

      }
      else if (optionseventeen==="c"){
       props.mfrFive();
       props.statUpdateNseventeen();
       props.btnThreeseventeen()

      }
      else if (optionseventeen==="d"){
       props.mfrFive();
       props.statUpdateNseventeen();
       props.btnThreeseventeen()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionseventeen==="a"){
      props.nextThree();
      props.statUpdateKseventeen();
      props.btnThreeseventeen()

      
     }
     else if (optionseventeen==="b"){
      props.nextThree();
      props.statUpdateKseventeen();
      props.btnThreeseventeen() 
     }
     else if (optionseventeen==="c"){
      props.nextThree();
      props.statUpdateKseventeen();
      props.btnThreeseventeen()
     }
     else if (optionseventeen==="d"){
      props.nextThree();
      props.statUpdateKseventeen();
      props.btnThreeseventeen()
     }}
     else if(stat==="Answered"){
     if (optionseventeen==="a"){
      props.nextThree();
      props.statUpdateKseventeen();
      props.btnFourseventeen()

      
     }
     else if (optionseventeen==="b"){
      props.nextThree();
      props.statUpdateKseventeen();
      props.btnFourseventeen()

      
     }
     else if ( optionseventeen==="c"){
      props.nextThree();
      props.statUpdateKseventeen();
      props.btnFourseventeen()
      
     }
     else if (optionseventeen==="d"){
      props.nextThree();
      props.statUpdateKseventeen();
      props.btnFourseventeen()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionseventeen===""){
  props.mfrOne();
  props.statUpdateMseventeen();
  props.btnTwoseventeen()
 }
 
  else if (optionseventeen==="a"){
   props.mfrTwo();
   props.statUpdateNseventeen();
   props.btnThreeseventeen()
  }
  else if (optionseventeen==="b"){
    props.mfrTwo();
    props.statUpdateNseventeen();
    props.btnThreeseventeen()
  

   }
   else if (optionseventeen==="c"){
    props.mfrTwo();
    props.statUpdateNseventeen();
    props.btnThreeseventeen()
  
   }
   else if (optionseventeen==="d"){
    props.mfrTwo();
    props.statUpdateNseventeen();
    props.btnThreeseventeen()

   }}
  
 else if (stat==="Not Answered"){
   if(optionseventeen===""){
  props.mfrThree();
  props.statUpdateMseventeen();
  props.btnTwoseventeen();
 }
 else if (optionseventeen==="a"){
  props.mfrFour();
  props.statUpdateNseventeen();
  props.btnThreeseventeen()
 }
 else if (optionseventeen==="b"){
   props.mfrFour();
   props.statUpdateNseventeen();
   props.btnThreeseventeen()
  }
  else if (optionseventeen==="c"){
   props.mfrFour();
   props.statUpdateNseventeen();
   props.btnThreeseventeen()
  }
  else if (optionseventeen==="d"){
   props.mfrFour();
   props.statUpdateNseventeen();
  props.btnThreeseventeen()
  }}
  else if (stat==="Marked"){
    if(optionseventeen===""){
    props.nextThree();
    props.statUpdateKseventeen();
    props.btnTwoseventeen();
   }
   else if (optionseventeen==="a"){
    props.mfrFive();
    props.statUpdateNseventeen();
    props.btnThreeseventeen()


   }
   else if (optionseventeen==="b"){
    props.mfrFive();
    props.statUpdateNseventeen();
    props.btnThreeseventeen()
   }
   else if (optionseventeen==="c"){
    props.mfrFive();
    props.statUpdateNseventeen();
    props.btnThreeseventeen()
   }
   else if (optionseventeen==="d"){
    props.mfrFive();
    props.statUpdateNseventeen();
    props.btnThreeseventeen()
    }}
   else if (stat==="Marked For Review"){
     if(optionseventeen==="a"){
    props.nextThree();
    props.statUpdateKseventeen();
    props.btnThreeseventeen()
   }
   else if (optionseventeen==="b"){
    props.nextThree();
    props.statUpdateKseventeen();
    props.btnThreeseventeen()
   }
   else if (optionseventeen==="c"){
    props.nextThree();
    props.statUpdateKseventeen();
    props.btnThreeseventeen()
   }
   else if (optionseventeen==="d"){
    props.nextThree();
    props.statUpdateKseventeen();
    props.btnThreeseventeen()
   }}
   else if (stat==="Answered"){
     if(optionseventeen==="a"){
    props.mfrSix();
    props.statUpdateNseventeen();
    props.btnThreeseventeen()
   }
   else if (optionseventeen==="b"){
    props.mfrSix();
    props.statUpdateNseventeen();
    props.btnThreeseventeen()
   }
   else if (optionseventeen==="c"){
    props.mfrSix();
    props.statUpdateNseventeen();
    props.btnThreeseventeen()
   }
   else if (optionseventeen==="d"){
    props.mfrSix();
    props.statUpdateNseventeen();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionseventeen===""){
    props.nexttwo();
    props.statUpdateseventeen();
    props.btnOneseventeen()
  }
  
   else if (optionseventeen==="a"){
    props.nextTwo();
    props.statUpdateAseventeen();
    props.btnFourseventeen()
   }
   else if (optionseventeen==="b"){
     props.nextTwo();
     props.statUpdateAseventeen();
     props.btnFourseventeen()
    }
    else if (optionseventeen==="c"){
     props.nextTwo();
     props.statUpdateAseventeen();
     props.btnFourseventeen()
    }
    else if (optionseventeen==="d"){
     props.nextTwo();
     props.statUpdateAseventeen();
     props.btnFourseventeen()
    }}
   
  else if (stat==="Not Answered"){
    if(optionseventeen===""){
   props.nextThree();
   props.statUpdateKseventeen();
   props.btnOneseventeen()
  }
  else if (optionseventeen==="a"){
   props.nextFour();
   props.statUpdateAseventeen();
   props.btnFourseventeen()
  }
  else if (optionseventeen==="b"){
    props.nextFour();
    props.statUpdateAseventeen();
    props.btnFourseventeen()
   }
   else if (optionseventeen==="c"){
    props.nextFour();
    props.statUpdateAseventeen();
    props.btnFourseventeen()
   }
   else if (optionseventeen==="d"){
    props.nextFour();
    props.statUpdateAseventeen();
    props.btnFourseventeen()
   }}
   else if (stat==="Marked"){
     if(optionseventeen===""){
     props.nextThree();
     props.statUpdateKseventeen();
     props.btnTwoseventeen()
    }
    else if (optionseventeen==="a"){
     props.mfrFive();
     props.statUpdateNseventeen();
     props.btnThreeseventeen()
    }
    else if (optionseventeen==="b"){
     props.mfrFive();
     props.statUpdateNseventeen();
     props.btnThreeseventeen()
    }
    else if ( optionseventeen==="c"){
     props.mfrFive();
     props.statUpdateNseventeen();
     props.btnThreeseventeen()
    }
    else if ( optionseventeen==="d"){
     props.mfrFive();
     props.statUpdateNseventeen();
     props.btnThreeseventeen()
      }}
    else if (stat==="Marked For Review"){
      if(optionseventeen==="a"){
     props.mfrSeven();
     props.statUpdateAseventeen();
     props.btnFourseventeen()
    }
    else if (optionseventeen==="b"){
      props.mfrSeventwo();
      props.statUpdateAseventeen();
      props.btnFourseventeen()
    }
    else if (optionseventeen==="c"){
      props.mfrSeven();
      props.statUpdateAseventeen();
      props.btnFourseventeen()
    }
    else if ( optionseventeen==="d"){
      props.mfrSeven();
      props.statUpdateAseventeen();
      props.btnFourseventeen()
    }}
    else if (stat==="Answered"){
      if(optionseventeen==="a"){
      props.nextThree();
      props.statUpdateKseventeen();
      props.btnFourseventeen()
    }
    else if (optionseventeen==="b"){
      props.nextThree();
      props.statUpdateKseventeen();
      props.btnFourseventeen()
    }
    else if (optionseventeen==="c"){
      props.nextThree();
      props.statUpdateKseventeen();
      props.btnFourseventeen()
    }
    else if (optionseventeen==="d"){
      props.nextThree();
      props.statUpdateKseventeen();
      props.btnFourseventeen()
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
      {/* <h5>Question No.18</h5> */}
    <p> <i>Question No.18</i><br></br>  Gemmae are the specialised structures produced in liverworts.These are

</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionseventeen === 'a'}
          onClick={handleChange}
        /> non-green,multicellular, asexual buds which develop in gemma cups
        
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionseventeen === 'b'}
          onClick={handleChange}
        /> green,multicellular, asexual buds which develop in gemma cups
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionseventeen === 'c'}
          onClick={handleChange}
        /> non-green, multicellular, diploid, sexual spores
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionseventeen === 'd'}
          onClick={handleChange}
        /> green, unicellular, diploid, sexual spore
      </div>
       
      
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/PKnineteen'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/PKnineteen'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/PKnineteen'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/PKseventeen'))}>Previous</button>
    
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
     statusseventeen:state.statusseventeen,
     optionseventeen:state.optionseventeen,
     BHealthanddiseaseNineteen:state.BHealthanddiseaseNineteen,
  BHealthanddiseaseNineteenA:state.BHealthanddiseaseNineteenA,
  BHealthanddiseaseNineteenB:state.BHealthanddiseaseNineteenB,
  BHealthanddiseaseNineteenC:state.BHealthanddiseaseNineteenC,
  BHealthanddiseaseNineteenD:state.BHealthanddiseaseNineteenD,
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
    optAseventeen:()=>dispatch(optAseventeen()),
    optBseventeen:()=>dispatch(optBseventeen()),
    optCseventeen:()=>dispatch(optCseventeen()),
    optDseventeen:()=>dispatch(optDseventeen()),
    statUpdateseventeen:()=>dispatch(statUpdateseventeen()),
    statUpdateAseventeen:()=>dispatch(statUpdateAseventeen()),
    statUpdateMseventeen:()=>dispatch(statUpdateMseventeen()),
    statUpdateNseventeen:()=>dispatch(statUpdateNseventeen()),
    statUpdateKseventeen:()=>dispatch(statUpdateKseventeen()),
    btnOneseventeen:()=>dispatch(btnOneseventeen()),
    btnTwoseventeen:()=>dispatch(btnTwoseventeen()),
    btnThreeseventeen:()=>dispatch(btnThreeseventeen()),
    btnFourseventeen:()=>dispatch(btnFourseventeen()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (PKeighteen)