import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAsixteen,optBsixteen,optCsixteen,optDsixteen,btnOnesixteen,btnTwosixteen,btnThreesixteen,btnFoursixteen,statUpdatesixteen,statUpdateAsixteen,statUpdateKsixteen,statUpdateMsixteen,statUpdateNsixteen,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
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





function BCseventeen(props) {
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
    var stat=props.statussixteen;
    var opt=props.optionsixteen

  const [optionsixteen, setOptionsixteen] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionsixteen(event.target.value);
    
  }
  
function optionChange(){
 if(optionsixteen==="a"){
   props.optAsixteen()
 }
 if(optionsixteen==="b"){
   props.optBsixteen()
 }
 if(optionsixteen==="c"){
   props.optCsixteen()
 }
 if(optionsixteen==="d"){
   props.optDsixteen()
 }
}

 useEffect(()=>{
  setOptionsixteen(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionsixteen===""){
  props.nextOne();
  props.statUpdatesixteen();
  props.btnOnesixteen()
  
 }
 
  else if (optionsixteen==="a"){
   props.nextTwo();
   props.statUpdateAsixteen();
   props.btnFoursixteen()
  
   
  }
  else if (optionsixteen==="b"){
    props.nextTwo();
    props.statUpdateAsixteen();
    props.btnFoursixteen()
   }
   else if (optionsixteen==="c"){
    props.nextTwo();
    props.statUpdateAsixteen();
    props.btnFoursixteen()
   }
   else if (optionsixteen==="d"){
    props.nextTwo();
    props.statUpdateAsixteen();
    props.btnFoursixteen()
   }}
   else if (stat==="Not Answered"){
     if(optionsixteen===""){
    props.nextThree();
    props.statUpdateKsixteen();
    props.btnOnesixteen()
    
   }
   
    else if (optionsixteen==="a"){
     props.nextFour();
     props.statUpdateAsixteen();
     props.btnFoursixteen()
     
    }
    else if (optionsixteen==="b"){
      props.nextFour();
      props.statUpdateAsixteen();
      props.btnFoursixteen()
      
     }
     else if (optionsixteen==="c"){
      props.nextFour();
      props.statUpdateAsixteen();
      props.btnFoursixteen()
      
     }
     else if ( optionsixteen==="d"){
      props.nextFour();
      props.statUpdateAsixteen();
      props.btnFoursixteen()
      
     }}
     else if (stat==="Marked"){
     if(optionsixteen===""){
      props.nextThree();
      props.statUpdateKsixteen();
      props.btnThreesixteen()
      
     }
          else if (optionsixteen==="a"){
      props.mfrFive();
      props.statUpdateNsixteen();
      props.btnThreesixteen()

     }
     else if (optionsixteen==="b"){
       props.mfrFive();
       props.statUpdateNsixteen();
       props.btnThreesixteen()

      }
      else if (optionsixteen==="c"){
       props.mfrFive();
       props.statUpdateNsixteen();
       props.btnThreesixteen()

      }
      else if (optionsixteen==="d"){
       props.mfrFive();
       props.statUpdateNsixteen();
       props.btnThreesixteen()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionsixteen==="a"){
      props.nextThree();
      props.statUpdateKsixteen();
      props.btnThreesixteen()

      
     }
     else if (optionsixteen==="b"){
      props.nextThree();
      props.statUpdateKsixteen();
      props.btnThreesixteen() 
     }
     else if (optionsixteen==="c"){
      props.nextThree();
      props.statUpdateKsixteen();
      props.btnThreesixteen()
     }
     else if (optionsixteen==="d"){
      props.nextThree();
      props.statUpdateKsixteen();
      props.btnThreesixteen()
     }}
     else if(stat==="Answered"){
     if (optionsixteen==="a"){
      props.nextThree();
      props.statUpdateKsixteen();
      props.btnFoursixteen()

      
     }
     else if (optionsixteen==="b"){
      props.nextThree();
      props.statUpdateKsixteen();
      props.btnFoursixteen()

      
     }
     else if ( optionsixteen==="c"){
      props.nextThree();
      props.statUpdateKsixteen();
      props.btnFoursixteen()
      
     }
     else if (optionsixteen==="d"){
      props.nextThree();
      props.statUpdateKsixteen();
      props.btnFoursixteen()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionsixteen===""){
  props.mfrOne();
  props.statUpdateMsixteen();
  props.btnTwosixteen()
 }
 
  else if (optionsixteen==="a"){
   props.mfrTwo();
   props.statUpdateNsixteen();
   props.btnThreesixteen()
  }
  else if (optionsixteen==="b"){
    props.mfrTwo();
    props.statUpdateNsixteen();
    props.btnThreesixteen()
  

   }
   else if (optionsixteen==="c"){
    props.mfrTwo();
    props.statUpdateNsixteen();
    props.btnThreesixteen()
  
   }
   else if (optionsixteen==="d"){
    props.mfrTwo();
    props.statUpdateNsixteen();
    props.btnThreesixteen()

   }}
  
 else if (stat==="Not Answered"){
   if(optionsixteen===""){
  props.mfrThree();
  props.statUpdateMsixteen();
  props.btnTwosixteen();
 }
 else if (optionsixteen==="a"){
  props.mfrFour();
  props.statUpdateNsixteen();
  props.btnThreesixteen()
 }
 else if (optionsixteen==="b"){
   props.mfrFour();
   props.statUpdateNsixteen();
   props.btnThreesixteen()
  }
  else if (optionsixteen==="c"){
   props.mfrFour();
   props.statUpdateNsixteen();
   props.btnThreesixteen()
  }
  else if (optionsixteen==="d"){
   props.mfrFour();
   props.statUpdateNsixteen();
  props.btnThreesixteen()
  }}
  else if (stat==="Marked"){
    if(optionsixteen===""){
    props.nextThree();
    props.statUpdateKsixteen();
    props.btnTwosixteen();
   }
   else if (optionsixteen==="a"){
    props.mfrFive();
    props.statUpdateNsixteen();
    props.btnThreesixteen()


   }
   else if (optionsixteen==="b"){
    props.mfrFive();
    props.statUpdateNsixteen();
    props.btnThreesixteen()
   }
   else if (optionsixteen==="c"){
    props.mfrFive();
    props.statUpdateNsixteen();
    props.btnThreesixteen()
   }
   else if (optionsixteen==="d"){
    props.mfrFive();
    props.statUpdateNsixteen();
    props.btnThreesixteen()
    }}
   else if (stat==="Marked For Review"){
     if(optionsixteen==="a"){
    props.nextThree();
    props.statUpdateKsixteen();
    props.btnThreesixteen()
   }
   else if (optionsixteen==="b"){
    props.nextThree();
    props.statUpdateKsixteen();
    props.btnThreesixteen()
   }
   else if (optionsixteen==="c"){
    props.nextThree();
    props.statUpdateKsixteen();
    props.btnThreesixteen()
   }
   else if (optionsixteen==="d"){
    props.nextThree();
    props.statUpdateKsixteen();
    props.btnThreesixteen()
   }}
   else if (stat==="Answered"){
     if(optionsixteen==="a"){
    props.mfrSix();
    props.statUpdateNsixteen();
    props.btnThreesixteen()
   }
   else if (optionsixteen==="b"){
    props.mfrSix();
    props.statUpdateNsixteen();
    props.btnThreesixteen()
   }
   else if (optionsixteen==="c"){
    props.mfrSix();
    props.statUpdateNsixteen();
    props.btnThreesixteen()
   }
   else if (optionsixteen==="d"){
    props.mfrSix();
    props.statUpdateNsixteen();
    props.btnThreeeight()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionsixteen===""){
    props.nexttwo();
    props.statUpdatesixteen();
    props.btnOnesixteen()
  }
  
   else if (optionsixteen==="a"){
    props.nextTwo();
    props.statUpdateAsixteen();
    props.btnFoursixteen()
   }
   else if (optionsixteen==="b"){
     props.nextTwo();
     props.statUpdateAsixteen();
     props.btnFoursixteen()
    }
    else if (optionsixteen==="c"){
     props.nextTwo();
     props.statUpdateAsixteen();
     props.btnFoursixteen()
    }
    else if (optionsixteen==="d"){
     props.nextTwo();
     props.statUpdateAsixteen();
     props.btnFoursixteen()
    }}
   
  else if (stat==="Not Answered"){
    if(optionsixteen===""){
   props.nextThree();
   props.statUpdateKsixteen();
   props.btnOnesixteen()
  }
  else if (optionsixteen==="a"){
   props.nextFour();
   props.statUpdateAsixteen();
   props.btnFoursixteen()
  }
  else if (optionsixteen==="b"){
    props.nextFour();
    props.statUpdateAsixteen();
    props.btnFoursixteen()
   }
   else if (optionsixteen==="c"){
    props.nextFour();
    props.statUpdateAsixteen();
    props.btnFoursixteen()
   }
   else if (optionsixteen==="d"){
    props.nextFour();
    props.statUpdateAsixteen();
    props.btnFoursixteen()
   }}
   else if (stat==="Marked"){
     if(optionsixteen===""){
     props.nextThree();
     props.statUpdateKsixteen();
     props.btnTwosixteen()
    }
    else if (optionsixteen==="a"){
     props.mfrFive();
     props.statUpdateNsixteen();
     props.btnThreesixteen()
    }
    else if (optionsixteen==="b"){
     props.mfrFive();
     props.statUpdateNsixteen();
     props.btnThreesixteen()
    }
    else if ( optionsixteen==="c"){
     props.mfrFive();
     props.statUpdateNsixteen();
     props.btnThreesixteen()
    }
    else if ( optionsixteen==="d"){
     props.mfrFive();
     props.statUpdateNsixteen();
     props.btnThreesixteen()
      }}
    else if (stat==="Marked For Review"){
      if(optionsixteen==="a"){
     props.mfrSeven();
     props.statUpdateAsixteen();
     props.btnFoursixteen()
    }
    else if (optionsixteen==="b"){
      props.mfrSeventwo();
      props.statUpdateAsixteen();
      props.btnFoursixteen()
    }
    else if (optionsixteen==="c"){
      props.mfrSeven();
      props.statUpdateAsixteen();
      props.btnFoursixteen()
    }
    else if ( optionsixteen==="d"){
      props.mfrSeven();
      props.statUpdateAsixteen();
      props.btnFoursixteen()
    }}
    else if (stat==="Answered"){
      if(optionsixteen==="a"){
      props.nextThree();
      props.statUpdateKsixteen();
      props.btnFoursixteen()
    }
    else if (optionsixteen==="b"){
      props.nextThree();
      props.statUpdateKsixteen();
      props.btnFoursixteen()
    }
    else if (optionsixteen==="c"){
      props.nextThree();
      props.statUpdateKsixteen();
      props.btnFoursixteen()
    }
    else if (optionsixteen==="d"){
      props.nextThree();
      props.statUpdateKsixteen();
      props.btnFoursixteen()
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
      {/* <h5>Question No.17 </h5> */}
    <p><i>Question No.17</i><br></br>  Read the following statements and select the correct option<br></br>

Statement I: Almost all bacetria possess lipoproteinaceous plasma membrane<br></br>
Statement II: The plasma membrane of archaebacteria as well as eubacteria have same type of lipids<br></br>

</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionsixteen === 'a'}
          onClick={handleChange}
        /> Both statements I and II are correct
        
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionsixteen === 'b'}
          onClick={handleChange}
        />Statement I is correct but statement II is incorrect
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionsixteen === 'c'}
          onClick={handleChange}
        /> Statement I is incorrect but statement II is correct
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionsixteen === 'd'}
          onClick={handleChange}
        /> Both statements I and II are incorrect
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/BCeighteen'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/BCeighteen'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/BCeighteen'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/BCsixteen'))}>Previous</button>
    
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
  statussixteen:state.statussixteen,
  optionsixteen:state.optionsixteen,
  BHealthanddiseaseEighteen:state.BHealthanddiseaseEighteen,
  BHealthanddiseaseEighteenA:state.BHealthanddiseaseEighteenA,
  BHealthanddiseaseEighteenB:state.BHealthanddiseaseEighteenB,
  BHealthanddiseaseEighteenC:state.BHealthanddiseaseEighteenC,
  BHealthanddiseaseEighteenD:state.BHealthanddiseaseEighteenD,
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
    optAsixteen:()=>dispatch(optAsixteen()),
    optBsixteen:()=>dispatch(optBsixteen()),
    optCsixteen:()=>dispatch(optCsixteen()),
    optDsixteen:()=>dispatch(optDsixteen()),
    statUpdatesixteen:()=>dispatch(statUpdatesixteen()),
    statUpdateAsixteen:()=>dispatch(statUpdateAsixteen()),
    statUpdateMsixteen:()=>dispatch(statUpdateMsixteen()),
    statUpdateNsixteen:()=>dispatch(statUpdateNsixteen()),
    statUpdateKsixteen:()=>dispatch(statUpdateKsixteen()),
    btnOnesixteen:()=>dispatch(btnOnesixteen()),
    btnTwosixteen:()=>dispatch(btnTwosixteen()),
    btnThreesixteen:()=>dispatch(btnThreesixteen()),
    btnFoursixteen:()=>dispatch(btnFoursixteen()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (BCseventeen)