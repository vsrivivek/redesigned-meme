import React from 'react'
import { timerUpdate,left,right,total,title,grid,divAtimerdiv,divtwo,header,buttons,buttonone,buttontwo,buttonthree,buttonfour,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven,optAtwo,optBtwo,optCtwo,optDtwo,btnOnetwo,btnTwotwo,btnThreetwo,btnFourtwo,statUpdatetwo,statUpdateAtwo,statUpdateKtwo,statUpdateMtwo,statUpdateNtwo } from '../../redux'
import { connect } from 'react-redux';
// import CakeNumbers from './CakeNumbers';
// import QuestionNumbers from './QuestionNumbers';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import MFtimer from './MFtimer';
import QuestionNumbers from './QuestionNumbers';
import CakeNumbers from '../../components/CakeNumbers';
import Logo from '../../redux/Images/Logo.jpg'



function MFthree(props) {
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
    "width": "400px",
    "float":"right",
    "text-decoration-line": "underline"
  };
  const wStyle1 = {
    "text-decoration-line": "underline"
  };
  const navigate = useNavigate()  
    var stat=props.statustwo;
    var opt=props.optiontwo

  const [optiontwo, setOptiontwo] = React.useState('');
  const [image,setImage]= React.useState('');
  
  const handleChange = (event) => {
    setOptiontwo(event.target.value);
    
  }
  
function optionChange(){
 if(optiontwo==="a"){
   props.optAtwo()
 }
 if(optiontwo==="b"){
   props.optBtwo()
 }
 if(optiontwo==="c"){
   props.optCtwo()
 }
 if(optiontwo==="d"){
   props.optDtwo()
 }
}

 useEffect(()=>{
  setOptiontwo(opt);
 },[]
  )

 const clickHanlderNext = function handleClickNext(){
  
 if (stat==="Not Visited"){ 
   if (optiontwo===""){
  props.nextOne();
  props.statUpdatetwo();
  props.btnOnetwo()
  
 }
 
  else if (optiontwo==="a"){
   props.nextTwo();
   props.statUpdateAtwo();
   props.btnFourtwo()
  
   
  }
  else if (optiontwo==="b"){
    props.nextTwo();
    props.statUpdateAtwo();
    props.btnFourtwo()
   }
   else if (optiontwo==="c"){
    props.nextTwo();
    props.statUpdateAtwo();
    props.btnFourtwo()
   }
   else if (optiontwo==="d"){
    props.nextTwo();
    props.statUpdateAtwo();
    props.btnFourtwo()
   }}
   else if (stat==="Not Answered"){
     if(optiontwo===""){
    props.nextThree();
    props.statUpdateKtwo();
    props.btnOnetwo()
    
   }
   
    else if (optiontwo==="a"){
     props.nextFour();
     props.statUpdateAtwo();
     props.btnFourtwo()
     
    }
    else if (optiontwo==="b"){
      props.nextFour();
      props.statUpdateAtwo();
      props.btnFourtwo()
      
     }
     else if (optiontwo==="c"){
      props.nextFour();
      props.statUpdateAtwo();
      props.btnFourtwo()
      
     }
     else if ( optiontwo==="d"){
      props.nextFour();
      props.statUpdateAtwo();
      props.btnFourtwo()
      
     }}
     else if (stat==="Marked"){
     if(optiontwo===""){
      props.nextThree();
      props.statUpdateKtwo();
      props.btnThreetwo()
      
     }
          else if (optiontwo==="a"){
      props.mfrFive();
      props.statUpdateNtwo();
      props.btnThreetwo()

     }
     else if (optiontwo==="b"){
       props.mfrFive();
       props.statUpdateNtwo();
       props.btnThreetwo()

      }
      else if (optiontwo==="c"){
       props.mfrFive();
       props.statUpdateNtwo();
       props.btnThreetwo()

      }
      else if (optiontwo==="d"){
       props.mfrFive();
       props.statUpdateNtwo();
       props.btnThreetwo()

        }}
     
     else if (stat==="Marked For Review"){
     if(optiontwo==="a"){
      props.nextThree();
      props.statUpdateKtwo();
      props.btnThreetwo()

      
     }
     else if (optiontwo==="b"){
      props.nextThree();
      props.statUpdateKtwo();
      props.btnThreetwo() 
     }
     else if (optiontwo==="c"){
      props.nextThree();
      props.statUpdateKtwo();
      props.btnThreetwo()
     }
     else if (optiontwo==="d"){
      props.nextThree();
      props.statUpdateKtwo();
      props.btnThreetwo()
     }}
     else if(stat==="Answered"){
     if (optiontwo==="a"){
      props.nextThree();
      props.statUpdateKtwo();
      props.btnFourtwo()

      
     }
     else if (optiontwo==="b"){
      props.nextThree();
      props.statUpdateKtwo();
      props.btnFourtwo()

      
     }
     else if ( optiontwo==="c"){
      props.nextThree();
      props.statUpdateKtwo();
      props.btnFourtwo()
      
     }
     else if (optiontwo==="d"){
      props.nextThree();
      props.statUpdateKtwo();
      props.btnFourtwo()
      
     }}
  optionChange()
 }


const clickHanlderMfr = function handleClickMfr(){
  
 if (stat==="Not Visited"){
   if(optiontwo===""){
  props.mfrOne();
  props.statUpdateMtwo();
  props.btnTwotwo()
 }
 
  else if (optiontwo==="a"){
   props.mfrTwo();
   props.statUpdateNtwo();
   props.btnThreetwo()
  }
  else if (optiontwo==="b"){
    props.mfrTwo();
    props.statUpdateNtwo();
    props.btnThreetwo()
  

   }
   else if (optiontwo==="c"){
    props.mfrTwo();
    props.statUpdateNtwo();
    props.btnThreetwo()
  
   }
   else if (optiontwo==="d"){
    props.mfrTwo();
    props.statUpdateNtwo();
    props.btnThreetwo()

   }}
  
 else if (stat==="Not Answered"){
   if(optiontwo===""){
  props.mfrThree();
  props.statUpdateMtwo();
  props.btnTwotwo();
 }
 else if (optiontwo==="a"){
  props.mfrFour();
  props.statUpdateNtwo();
  props.btnThreetwo()
 }
 else if (optiontwo==="b"){
   props.mfrFour();
   props.statUpdateNtwo();
   props.btnThreetwo()
  }
  else if (optiontwo==="c"){
   props.mfrFour();
   props.statUpdateNtwo();
   props.btnThreetwo()
  }
  else if (optiontwo==="d"){
   props.mfrFour();
   props.statUpdateNtwo();
  props.btnThreetwo()
  }}
  else if (stat==="Marked"){
    if(optiontwo===""){
    props.nextThree();
    props.statUpdateKtwo();
    props.btnTwotwo();
   }
   else if (optiontwo==="a"){
    props.mfrFive();
    props.statUpdateNtwo();
    props.btnThreetwo()


   }
   else if (optiontwo==="b"){
    props.mfrFive();
    props.statUpdateNtwo();
    props.btnThreetwo()
   }
   else if (optiontwo==="c"){
    props.mfrFive();
    props.statUpdateNtwo();
    props.btnThreetwo()
   }
   else if (optiontwo==="d"){
    props.mfrFive();
    props.statUpdateNtwo();
    props.btnThreetwo()
    }}
   else if (stat==="Marked For Review"){
     if(optiontwo==="a"){
    props.nextThree();
    props.statUpdateKtwo();
    props.btnThreetwo()
   }
   else if (optiontwo==="b"){
    props.nextThree();
    props.statUpdateKtwo();
    props.btnThreetwo()
   }
   else if (optiontwo==="c"){
    props.nextThree();
    props.statUpdateKtwo();
    props.btnThreetwo()
   }
   else if (optiontwo==="d"){
    props.nextThree();
    props.statUpdateKtwo();
    props.btnThreetwo()
   }}
   else if (stat==="Answered"){
     if(optiontwo==="a"){
    props.mfrSix();
    props.statUpdateNtwo();
    props.btnThreetwo()
   }
   else if (optiontwo==="b"){
    props.mfrSix();
    props.statUpdateNtwo();
    props.btnThreetwo()
   }
   else if (optiontwo==="c"){
    props.mfrSix();
    props.statUpdateNtwo();
    props.btnThreetwo()
   }
   else if (optiontwo==="d"){
    props.mfrSix();
    props.statUpdateNtwo();
    props.btnThreetwo()
   }}
   optionChange()
}
const clickHanlderSan = function handleClickSan(){
  
  if (stat==="Not Visited"){
    if(optiontwo===""){
    props.nexttwo();
    props.statUpdatetwo();
    props.btnOnetwo()
  }
  
   else if (optiontwo==="a"){
    props.nextTwo();
    props.statUpdateAtwo();
    props.btnFourtwo()
   }
   else if (optiontwo==="b"){
     props.nextTwo();
     props.statUpdateAtwo();
     props.btnFourtwo()
    }
    else if (optiontwo==="c"){
     props.nextTwo();
     props.statUpdateAtwo();
     props.btnFourtwo()
    }
    else if (optiontwo==="d"){
     props.nextTwo();
     props.statUpdateAtwo();
     props.btnFourtwo()
    }}
   
  else if (stat==="Not Answered"){
    if(optiontwo===""){
   props.nextThree();
   props.statUpdateKtwo();
   props.btnOnetwo()
  }
  else if (optiontwo==="a"){
   props.nextFour();
   props.statUpdateAtwo();
   props.btnFourtwo()
  }
  else if (optiontwo==="b"){
    props.nextFour();
    props.statUpdateAtwo();
    props.btnFourtwo()
   }
   else if (optiontwo==="c"){
    props.nextFour();
    props.statUpdateAtwo();
    props.btnFourtwo()
   }
   else if (optiontwo==="d"){
    props.nextFour();
    props.statUpdateAtwo();
    props.btnFourtwo()
   }}
   else if (stat==="Marked"){
     if(optiontwo===""){
     props.nextThree();
     props.statUpdateKtwo();
     props.btnTwotwo()
    }
    else if (optiontwo==="a"){
     props.mfrFive();
     props.statUpdateNtwo();
     props.btnThreetwo()
    }
    else if (optiontwo==="b"){
     props.mfrFive();
     props.statUpdateNtwo();
     props.btnThreetwo()
    }
    else if ( optiontwo==="c"){
     props.mfrFive();
     props.statUpdateNtwo();
     props.btnThreetwo()
    }
    else if ( optiontwo==="d"){
     props.mfrFive();
     props.statUpdateNtwo();
     props.btnThreetwo()
      }}
    else if (stat==="Marked For Review"){
      if(optiontwo==="a"){
     props.mfrSeven();
     props.statUpdateAtwo();
     props.btnFourtwo()
    }
    else if (optiontwo==="b"){
      props.mfrSeventwo();
      props.statUpdateAtwo();
      props.btnFourtwo()
    }
    else if (optiontwo==="c"){
      props.mfrSeven();
      props.statUpdateAtwo();
      props.btnFourtwo()
    }
    else if ( optiontwo==="d"){
      props.mfrSeven();
      props.statUpdateAtwo();
      props.btnFourtwo()
    }}
    else if (stat==="Answered"){
      if(optiontwo==="a"){
      props.nextThree();
      props.statUpdateKtwo();
      props.btnFourtwo()
    }
    else if (optiontwo==="b"){
      props.nextThree();
      props.statUpdateKtwo();
      props.btnFourtwo()
    }
    else if (optiontwo==="c"){
      props.nextThree();
      props.statUpdateKtwo();
      props.btnFourtwo()
    }
    else if (optiontwo==="d"){
      props.nextThree();
      props.statUpdateKtwo();
      props.btnFourtwo()
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
     <p style={wStyle}>Test Name: <b>Morphology of Flowering Plants</b></p>
     <p style={wStyle1}>Name Of the Candidate: <b>{props.name}</b></p>  
    

    <form>
    {/* <h5>Question No.3 </h5> */}
    <p><i>Question No.3</i><br></br>Which of the following plants bears moniliform roots?

 </p>
      <div>
        <input
          type="radio"
          value="a"
          checked={optiontwo=== 'a'}
          onClick={handleChange}
        /> Momordica
       
      </div>
      <div>
        <input
          type="radio"
          value="b"
          checked={optiontwo === 'b'}
          onClick={handleChange}
        /> Curcuma
        
      </div> 
      <div>
        <input
          type="radio"
          value="c"
          checked={optiontwo === 'c'}
          onClick={handleChange}
        /> Dahlia
        
      </div>
      <div>
        <input
          type="radio"
          value="d"
          checked={optiontwo=== 'd'}
          onClick={handleChange}
        /> Asparagus
        
      </div>
       
      
    </form><br></br>
    <div className={props.buttons}>

         
        <button onClick={()=>(clickHanlderNext)(navigate('/MFfour'))}>Next</button>
        <button onClick={()=>(clickHanlderMfr)(navigate('/MFfour'))}>Mark For Review</button>
        <button onClick={()=>(clickHanlderSan)(navigate('/MFfour'))}>Save & Next</button>
        <button onClick={()=>(clickHanlderNext)(navigate('/MFtwo'))}>Previous</button>
        
        </div>
        </div> 
    
        <div className={props.right}>
        {/* <div><p>Name Of the Candidate: <b>{props.name}</b></p></div> */}
          <div className={props.timerdiv}><MFtimer /></div>
          <div className={props.grid}><QuestionNumbers /></div>
          <div className={props.divtwo}><CakeNumbers /></div>
          <button className={props.divA}onClick ={()=>(navigate('/MFconfirm'))}>Submit Test</button>
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
     statustwo:state.statustwo,
     optiontwo:state.optiontwo,
     BHealthanddiseaseFour:state.BHealthanddiseaseFour,
  BHealthanddiseaseFourA:state.BHealthanddiseaseFourA,
  BHealthanddiseaseFourB:state.BHealthanddiseaseFourB,
  BHealthanddiseaseFourC:state.BHealthanddiseaseFourC,
  BHealthanddiseaseFourD:state.BHealthanddiseaseFourD,
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
    optAtwo:()=>dispatch(optAtwo()),
    optBtwo:()=>dispatch(optBtwo()),
    optCtwo:()=>dispatch(optCtwo()),
    optDtwo:()=>dispatch(optDtwo()),
    statUpdatetwo:()=>dispatch(statUpdatetwo()),
    statUpdateAtwo:()=>dispatch(statUpdateAtwo()),
    statUpdateMtwo:()=>dispatch(statUpdateMtwo()),
    statUpdateNtwo:()=>dispatch(statUpdateNtwo()),
    statUpdateKtwo:()=>dispatch(statUpdateKtwo()),
    btnOnetwo:()=>dispatch(btnOnetwo()),
    btnTwotwo:()=>dispatch(btnTwotwo()),
    btnThreetwo:()=>dispatch(btnThreetwo()),
    btnFourtwo:()=>dispatch(btnFourtwo()),
    
}

}
export default connect(mapStateToProps,mapDispatchToProps) (MFthree)