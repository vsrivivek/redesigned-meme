import React from 'react'
import {left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,optAsix,optBsix,optCsix,optDsix,btnOnesix,btnTwosix,btnThreesix,btnFoursix,statUpdatesix,statUpdateAsix,statUpdateKsix,statUpdateMsix,statUpdateNsix,timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import YTtimer from './YTtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function YTseven(props) {
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
    var stat=props.statussix;
    var opt=props.optionsix

  const [optionsix, setOptionsix] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionsix(event.target.value);
    
  }
  
function optionChange(){
 if(optionsix==="a"){
   props.optAsix()
 }
 if(optionsix==="b"){
   props.optBsix()
 }
 if(optionsix==="c"){
   props.optCsix()
 }
 if(optionsix==="d"){
   props.optDsix()
 }
}

 useEffect(()=>{
  setOptionsix(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionsix===""){
  props.nextOne();
  props.statUpdatesix();
  props.btnOnesix()
  
 }
 
  else if (optionsix==="a"){
   props.nextTwo();
   props.statUpdateAsix();
   props.btnFoursix()
  
   
  }
  else if (optionsix==="b"){
    props.nextTwo();
    props.statUpdateAsix();
    props.btnFoursix()
   }
   else if (optionsix==="c"){
    props.nextTwo();
    props.statUpdateAsix();
    props.btnFoursix()
   }
   else if (optionsix==="d"){
    props.nextTwo();
    props.statUpdateAsix();
    props.btnFoursix()
   }}
   else if (stat==="Not Answered"){
     if(optionsix===""){
    props.nextThree();
    props.statUpdateKsix();
    props.btnOnesix()
    
   }
   
    else if (optionsix==="a"){
     props.nextFour();
     props.statUpdateAsix();
     props.btnFoursix()
     
    }
    else if (optionsix==="b"){
      props.nextFour();
      props.statUpdateAsix();
      props.btnFoursix()
      
     }
     else if (optionsix==="c"){
      props.nextFour();
      props.statUpdateAsix();
      props.btnFoursix()
      
     }
     else if ( optionsix==="d"){
      props.nextFour();
      props.statUpdateAsix();
      props.btnFoursix()
      
     }}
     else if (stat==="Marked"){
     if(optionsix===""){
      props.nextThree();
      props.statUpdateKsix();
      props.btnThreesix()
      
     }
          else if (optionsix==="a"){
      props.mfrFive();
      props.statUpdateNsix();
      props.btnThreesix()

     }
     else if (optionsix==="b"){
       props.mfrFive();
       props.statUpdateNsix();
       props.btnThreesix()

      }
      else if (optionsix==="c"){
       props.mfrFive();
       props.statUpdateNsix();
       props.btnThreesix()

      }
      else if (optionsix==="d"){
       props.mfrFive();
       props.statUpdateNsix();
       props.btnThreesix()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionsix==="a"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnThreesix()

      
     }
     else if (optionsix==="b"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnThreesix() 
     }
     else if (optionsix==="c"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnThreesix()
     }
     else if (optionsix==="d"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnThreesix()
     }}
     else if(stat==="Answered"){
     if (optionsix==="a"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()

      
     }
     else if (optionsix==="b"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()

      
     }
     else if ( optionsix==="c"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()
      
     }
     else if (optionsix==="d"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionsix===""){
  props.mfrOne();
  props.statUpdateMsix();
  props.btnTwosix()
 }
 
  else if (optionsix==="a"){
   props.mfrTwo();
   props.statUpdateNsix();
   props.btnThreesix()
  }
  else if (optionsix==="b"){
    props.mfrTwo();
    props.statUpdateNsix();
    props.btnThreesix()
  

   }
   else if (optionsix==="c"){
    props.mfrTwo();
    props.statUpdateNsix();
    props.btnThreesix()
  
   }
   else if (optionsix==="d"){
    props.mfrTwo();
    props.statUpdateNsix();
    props.btnThreesix()

   }}
  
 else if (stat==="Not Answered"){
   if(optionsix===""){
  props.mfrThree();
  props.statUpdateMsix();
  props.btnTwosix();
 }
 else if (optionsix==="a"){
  props.mfrFour();
  props.statUpdateNsix();
  props.btnThreesix()
 }
 else if (optionsix==="b"){
   props.mfrFour();
   props.statUpdateNsix();
   props.btnThreesix()
  }
  else if (optionsix==="c"){
   props.mfrFour();
   props.statUpdateNsix();
   props.btnThreesix()
  }
  else if (optionsix==="d"){
   props.mfrFour();
   props.statUpdateNsix();
  props.btnThreesix()
  }}
  else if (stat==="Marked"){
    if(optionsix===""){
    props.nextThree();
    props.statUpdateKsix();
    props.btnTwosix();
   }
   else if (optionsix==="a"){
    props.mfrFive();
    props.statUpdateNsix();
    props.btnThreesix()


   }
   else if (optionsix==="b"){
    props.mfrFive();
    props.statUpdateNsix();
    props.btnThreesix()
   }
   else if (optionsix==="c"){
    props.mfrFive();
    props.statUpdateNsix();
    props.btnThreesix()
   }
   else if (optionsix==="d"){
    props.mfrFive();
    props.statUpdateNsix();
    props.btnThreesix()
    }}
   else if (stat==="Marked For Review"){
     if(optionsix==="a"){
    props.nextThree();
    props.statUpdateKsix();
    props.btnThreesix()
   }
   else if (optionsix==="b"){
    props.nextThree();
    props.statUpdateKsix();
    props.btnThreesix()
   }
   else if (optionsix==="c"){
    props.nextThree();
    props.statUpdateKsix();
    props.btnThreesix()
   }
   else if (optionsix==="d"){
    props.nextThree();
    props.statUpdateKsix();
    props.btnThreesix()
   }}
   else if (stat==="Answered"){
     if(optionsix==="a"){
    props.mfrSix();
    props.statUpdateNsix();
    props.btnThreesix()
   }
   else if (optionsix==="b"){
    props.mfrSix();
    props.statUpdateNsix();
    props.btnThreesix()
   }
   else if (optionsix==="c"){
    props.mfrSix();
    props.statUpdateNsix();
    props.btnThreesix()
   }
   else if (optionsix==="d"){
    props.mfrSix();
    props.statUpdateNsix();
    props.btnThreesix()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionsix===""){
    props.nexttwo();
    props.statUpdatesix();
    props.btnOnesix()
  }
  
   else if (optionsix==="a"){
    props.nextTwo();
    props.statUpdateAsix();
    props.btnFoursix()
   }
   else if (optionsix==="b"){
     props.nextTwo();
     props.statUpdateAsix();
     props.btnFoursix()
    }
    else if (optionsix==="c"){
     props.nextTwo();
     props.statUpdateAsix();
     props.btnFoursix()
    }
    else if (optionsix==="d"){
     props.nextTwo();
     props.statUpdateAsix();
     props.btnFoursix()
    }}
   
  else if (stat==="Not Answered"){
    if(optionsix===""){
   props.nextThree();
   props.statUpdateKsix();
   props.btnOnesix()
  }
  else if (optionsix==="a"){
   props.nextFour();
   props.statUpdateAsix();
   props.btnFoursix()
  }
  else if (optionsix==="b"){
    props.nextFour();
    props.statUpdateAsix();
    props.btnFoursix()
   }
   else if (optionsix==="c"){
    props.nextFour();
    props.statUpdateAsix();
    props.btnFoursix()
   }
   else if (optionsix==="d"){
    props.nextFour();
    props.statUpdateAsix();
    props.btnFoursix()
   }}
   else if (stat==="Marked"){
     if(optionsix===""){
     props.nextThree();
     props.statUpdateKsix();
     props.btnTwosix()
    }
    else if (optionsix==="a"){
     props.mfrFive();
     props.statUpdateNsix();
     props.btnThreesix()
    }
    else if (optionsix==="b"){
     props.mfrFive();
     props.statUpdateNsix();
     props.btnThreesix()
    }
    else if ( optionsix==="c"){
     props.mfrFive();
     props.statUpdateNsix();
     props.btnThreesix()
    }
    else if ( optionsix==="d"){
     props.mfrFive();
     props.statUpdateNsix();
     props.btnThreesix()
      }}
    else if (stat==="Marked For Review"){
      if(optionsix==="a"){
     props.mfrSeven();
     props.statUpdateAsix();
     props.btnFoursix()
    }
    else if (optionsix==="b"){
      props.mfrSeventwo();
      props.statUpdateAsix();
      props.btnFoursix()
    }
    else if (optionsix==="c"){
      props.mfrSeven();
      props.statUpdateAsix();
      props.btnFoursix()
    }
    else if ( optionsix==="d"){
      props.mfrSeven();
      props.statUpdateAsix();
      props.btnFoursix()
    }}
    else if (stat==="Answered"){
      if(optionsix==="a"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()
    }
    else if (optionsix==="b"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()
    }
    else if (optionsix==="c"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()
    }
    else if (optionsix==="d"){
      props.nextThree();
      props.statUpdateKsix();
      props.btnFoursix()
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
    <p><i>Question No.7</i><br></br>The gaseous products in Castner-Kellener process are
</p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionsix === 'a'}
          onClick={handleChange}
        /> Cl<sub>2</sub> & H<sub>2</sub>                             
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionsix === 'b'}
          onClick={handleChange}
        /> O<sub>2</sub> & H<sub>2</sub>                        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionsix === 'c'}
          onClick={handleChange}
        /> Cl<sub>2</sub>                   
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionsix === 'd'}
          onClick={handleChange}
        /> Cl<sub>2</sub>,O<sub>2</sub> & H<sub>2</sub>
        
      </div>   
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/YTeight'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/YTeight'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/YTeight'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/YTsix'))}>Previous</button>
    
        </div>
        </div> 
    
        <div className={props.right}>
          <div className={props.timerdiv}><YTtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/YTconfirm'))}>Submit Test</button>
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
     statussix:state.statussix,
     optionsix:state.optionsix,
     BHealthanddiseaseEight:state.BHealthanddiseaseEight,
  BHealthanddiseaseEightA:state.BHealthanddiseaseEightA,
  BHealthanddiseaseEightB:state.BHealthanddiseaseEightB,
  BHealthanddiseaseEightC:state.BHealthanddiseaseEightC,
  BHealthanddiseaseEightD:state.BHealthanddiseaseEightD,
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
    optAsix:()=>dispatch(optAsix()),
    optBsix:()=>dispatch(optBsix()),
    optCsix:()=>dispatch(optCsix()),
    optDsix:()=>dispatch(optDsix()),
    statUpdatesix:()=>dispatch(statUpdatesix()),
    statUpdateAsix:()=>dispatch(statUpdateAsix()),
    statUpdateMsix:()=>dispatch(statUpdateMsix()),
    statUpdateNsix:()=>dispatch(statUpdateNsix()),
    statUpdateKsix:()=>dispatch(statUpdateKsix()),
    btnOnesix:()=>dispatch(btnOnesix()),
    btnTwosix:()=>dispatch(btnTwosix()),
    btnThreesix:()=>dispatch(btnThreesix()),
    btnFoursix:()=>dispatch(btnFoursix()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (YTseven)