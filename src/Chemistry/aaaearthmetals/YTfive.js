import React from 'react'
import { timerUpdate,left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven,optAfour,optBfour,optCfour,optDfour,btnOnefour,btnTwofour,btnThreefour,btnFourfour,statUpdatefour,statUpdateAfour,statUpdateKfour,statUpdateMfour,statUpdateNfour } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import YTtimer from './YTtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function YTfive(props) {
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
    var stat=props.statusfour;
    var opt=props.optionfour

  const [optionfour, setOptionfour] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptionfour(event.target.value);
    
  }
  
function optionChange(){
 if(optionfour==="a"){
   props.optAfour()
 }
 if(optionfour==="b"){
   props.optBfour()
 }
 if(optionfour==="c"){
   props.optCfour()
 }
 if(optionfour==="d"){
   props.optDfour()
 }
}

 useEffect(()=>{
  setOptionfour(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optionfour===""){
  props.nextOne();
  props.statUpdatefour();
  props.btnOnefour()
  
 }
 
  else if (optionfour==="a"){
   props.nextTwo();
   props.statUpdateAfour();
   props.btnFourfour()
  
   
  }
  else if (optionfour==="b"){
    props.nextTwo();
    props.statUpdateAfour();
    props.btnFourfour()
   }
   else if (optionfour==="c"){
    props.nextTwo();
    props.statUpdateAfour();
    props.btnFourfour()
   }
   else if (optionfour==="d"){
    props.nextTwo();
    props.statUpdateAfour();
    props.btnFourfour()
   }}
   else if (stat==="Not Answered"){
     if(optionfour===""){
    props.nextThree();
    props.statUpdateKfour();
    props.btnOnefour()
    
   }
   
    else if (optionfour==="a"){
     props.nextFour();
     props.statUpdateAfour();
     props.btnFourfour()
     
    }
    else if (optionfour==="b"){
      props.nextFour();
      props.statUpdateAfour();
      props.btnFourfour()
      
     }
     else if (optionfour==="c"){
      props.nextFour();
      props.statUpdateAfour();
      props.btnFourfour()
      
     }
     else if ( optionfour==="d"){
      props.nextFour();
      props.statUpdateAfour();
      props.btnFourfour()
      
     }}
     else if (stat==="Marked"){
     if(optionfour===""){
      props.nextThree();
      props.statUpdateKfour();
      props.btnThreefour()
      
     }
          else if (optionfour==="a"){
      props.mfrFive();
      props.statUpdateNfour();
      props.btnThreefour()

     }
     else if (optionfour==="b"){
       props.mfrFive();
       props.statUpdateNfour();
       props.btnThreefour()

      }
      else if (optionfour==="c"){
       props.mfrFive();
       props.statUpdateNfour();
       props.btnThreefour()

      }
      else if (optionfour==="d"){
       props.mfrFive();
       props.statUpdateNfour();
       props.btnThreefour()

        }}
     
     else if (stat==="Marked For Review"){
     if(optionfour==="a"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnThreefour()

      
     }
     else if (optionfour==="b"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnThreefour() 
     }
     else if (optionfour==="c"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnThreefour()
     }
     else if (optionfour==="d"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnThreefour()
     }}
     else if(stat==="Answered"){
     if (optionfour==="a"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()

      
     }
     else if (optionfour==="b"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()

      
     }
     else if ( optionfour==="c"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()
      
     }
     else if (optionfour==="d"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optionfour===""){
  props.mfrOne();
  props.statUpdateMfour();
  props.btnTwofour()
 }
 
  else if (optionfour==="a"){
   props.mfrTwo();
   props.statUpdateNfour();
   props.btnThreefour()
  }
  else if (optionfour==="b"){
    props.mfrTwo();
    props.statUpdateNfour();
    props.btnThreefour()
  

   }
   else if (optionfour==="c"){
    props.mfrTwo();
    props.statUpdateNfour();
    props.btnThreefour()
  
   }
   else if (optionfour==="d"){
    props.mfrTwo();
    props.statUpdateNfour();
    props.btnThreefour()

   }}
  
 else if (stat==="Not Answered"){
   if(optionfour===""){
  props.mfrThree();
  props.statUpdateMfour();
  props.btnTwofour();
 }
 else if (optionfour==="a"){
  props.mfrFour();
  props.statUpdateNfour();
  props.btnThreefour()
 }
 else if (optionfour==="b"){
   props.mfrFour();
   props.statUpdateNfour();
   props.btnThreefour()
  }
  else if (optionfour==="c"){
   props.mfrFour();
   props.statUpdateNfour();
   props.btnThreefour()
  }
  else if (optionfour==="d"){
   props.mfrFour();
   props.statUpdateNfour();
  props.btnThreefour()
  }}
  else if (stat==="Marked"){
    if(optionfour===""){
    props.nextThree();
    props.statUpdateKfour();
    props.btnTwofour();
   }
   else if (optionfour==="a"){
    props.mfrFive();
    props.statUpdateNfour();
    props.btnThreefour()


   }
   else if (optionfour==="b"){
    props.mfrFive();
    props.statUpdateNfour();
    props.btnThreefour()
   }
   else if (optionfour==="c"){
    props.mfrFive();
    props.statUpdateNfour();
    props.btnThreefour()
   }
   else if (optionfour==="d"){
    props.mfrFive();
    props.statUpdateNfour();
    props.btnThreefour()
    }}
   else if (stat==="Marked For Review"){
     if(optionfour==="a"){
    props.nextThree();
    props.statUpdateKfour();
    props.btnThreefour()
   }
   else if (optionfour==="b"){
    props.nextThree();
    props.statUpdateKfour();
    props.btnThreefour()
   }
   else if (optionfour==="c"){
    props.nextThree();
    props.statUpdateKfour();
    props.btnThreefour()
   }
   else if (optionfour==="d"){
    props.nextThree();
    props.statUpdateKfour();
    props.btnThreefour()
   }}
   else if (stat==="Answered"){
     if(optionfour==="a"){
    props.mfrSix();
    props.statUpdateNfour();
    props.btnThreefour()
   }
   else if (optionfour==="b"){
    props.mfrSix();
    props.statUpdateNfour();
    props.btnThreefour()
   }
   else if (optionfour==="c"){
    props.mfrSix();
    props.statUpdateNfour();
    props.btnThreefour()
   }
   else if (optionfour==="d"){
    props.mfrSix();
    props.statUpdateNfour();
    props.btnThreefour()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optionfour===""){
    props.nexttwo();
    props.statUpdatefour();
    props.btnOnefour()
  }
  
   else if (optionfour==="a"){
    props.nextTwo();
    props.statUpdateAfour();
    props.btnFourfour()
   }
   else if (optionfour==="b"){
     props.nextTwo();
     props.statUpdateAfour();
     props.btnFourfour()
    }
    else if (optionfour==="c"){
     props.nextTwo();
     props.statUpdateAfour();
     props.btnFourfour()
    }
    else if (optionfour==="d"){
     props.nextTwo();
     props.statUpdateAfour();
     props.btnFourfour()
    }}
   
  else if (stat==="Not Answered"){
    if(optionfour===""){
   props.nextThree();
   props.statUpdateKfour();
   props.btnOnefour()
  }
  else if (optionfour==="a"){
   props.nextFour();
   props.statUpdateAfour();
   props.btnFourfour()
  }
  else if (optionfour==="b"){
    props.nextFour();
    props.statUpdateAfour();
    props.btnFourfour()
   }
   else if (optionfour==="c"){
    props.nextFour();
    props.statUpdateAfour();
    props.btnFourfour()
   }
   else if (optionfour==="d"){
    props.nextFour();
    props.statUpdateAfour();
    props.btnFourfour()
   }}
   else if (stat==="Marked"){
     if(optionfour===""){
     props.nextThree();
     props.statUpdateKfour();
     props.btnTwofour()
    }
    else if (optionfour==="a"){
     props.mfrFive();
     props.statUpdateNfour();
     props.btnThreefour()
    }
    else if (optionfour==="b"){
     props.mfrFive();
     props.statUpdateNfour();
     props.btnThreefour()
    }
    else if ( optionfour==="c"){
     props.mfrFive();
     props.statUpdateNfour();
     props.btnThreefour()
    }
    else if ( optionfour==="d"){
     props.mfrFive();
     props.statUpdateNfour();
     props.btnThreefour()
      }}
    else if (stat==="Marked For Review"){
      if(optionfour==="a"){
     props.mfrSeven();
     props.statUpdateAfour();
     props.btnFourfour()
    }
    else if (optionfour==="b"){
      props.mfrSeventwo();
      props.statUpdateAfour();
      props.btnFourfour()
    }
    else if (optionfour==="c"){
      props.mfrSeven();
      props.statUpdateAfour();
      props.btnFourfour()
    }
    else if ( optionfour==="d"){
      props.mfrSeven();
      props.statUpdateAfour();
      props.btnFourfour()
    }}
    else if (stat==="Answered"){
      if(optionfour==="a"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()
    }
    else if (optionfour==="b"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()
    }
    else if (optionfour==="c"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()
    }
    else if (optionfour==="d"){
      props.nextThree();
      props.statUpdateKfour();
      props.btnFourfour()
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
    <p><i>Question No.5</i><br></br>NH<sub>3</sub> can be recovered from a solution of (NH<sub>4</sub>)<sub>2</sub>CO<sub>3</sub> by the addition of
       </p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optionfour === 'a'}
          onClick={handleChange}
        /> NaCl			
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optionfour === 'b'}
          onClick={handleChange}
        /> HCl			
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optionfour === 'c'}
          onClick={handleChange}
        /> Ca(OH)<sub>2</sub>			
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optionfour === 'd'}
          onClick={handleChange}
        /> C<sub>2</sub>H<sub>5</sub>OH	 
      </div>
       
      
       
      
    </form><br></br>
    <div className={props.buttons}>
         
        <button onClick={()=>(clickHanlderNext)(navigate('/YTsix'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/YTsix'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/YTsix'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/YTfour'))}>Previous</button>
    
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
     statusfour:state.statusfour,
     optionfour:state.optionfour,
     BHealthanddiseaseSix:state.BHealthanddiseaseSix,
  BHealthanddiseaseSixA:state.BHealthanddiseaseSixA,
  BHealthanddiseaseSixB:state.BHealthanddiseaseSixB,
  BHealthanddiseaseSixC:state.BHealthanddiseaseSixC,
  BHealthanddiseaseSixD:state.BHealthanddiseaseSixD,
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
    optAfour:()=>dispatch(optAfour()),
    optBfour:()=>dispatch(optBfour()),
    optCfour:()=>dispatch(optCfour()),
    optDfour:()=>dispatch(optDfour()),
    statUpdatefour:()=>dispatch(statUpdatefour()),
    statUpdateAfour:()=>dispatch(statUpdateAfour()),
    statUpdateMfour:()=>dispatch(statUpdateMfour()),
    statUpdateNfour:()=>dispatch(statUpdateNfour()),
    statUpdateKfour:()=>dispatch(statUpdateKfour()),
    btnOnefour:()=>dispatch(btnOnefour()),
    btnTwofour:()=>dispatch(btnTwofour()),
    btnThreefour:()=>dispatch(btnThreefour()),
    btnFourfour:()=>dispatch(btnFourfour()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (YTfive)