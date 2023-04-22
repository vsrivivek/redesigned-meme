import React from 'react';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
 
//  import { timerUpdate,nextOne, nextTwo, nextThree,nextFour, mfrOne,mfrTwo,mfrThree,mfrFour,mfrFive,mfrSix,mfrSeven,optAone,optBone,optCone,optDone,btnOneone,btnTwoone,btnThreeone,btnFourone,statUpdateone,statUpdateAone,statUpdateKone,statUpdateMone,statUpdateNone } from '../redux'
 // import Image1 from './Images/not_visited.png'
// import Image2 from './Images/not_answered.png'
// import Image3 from './Images/review.png'
// import Image4 from './Images/review_answer.png'
// import Image5 from './Images/answered.png'


function QuestionNumbers(props) {
    const navigate = useNavigate();
     return (
      <div className ={props.grid}>
        <button className={props.background} onClick={()=>navigate("/MFone")}>1</button> 
        <button className={props.backgroundone} onClick={()=>navigate("/MFtwo")}>2</button>
        <button className={props.backgroundtwo} onClick={()=>navigate("/MFthree")}>3</button>
        <button  className={props.backgroundthree} onClick={()=>navigate("/MFfour")}>4</button>
        <button  className={props.backgroundfour} onClick={()=>navigate("/MFfive")}>5</button>
        <button className={props.backgroundfive} onClick={()=>navigate("/MFsix")}>6</button>
        <button className={props.backgroundsix}  onClick={()=>navigate("/MFseven")}>7</button>
        <button className={props.backgroundseven}  onClick={()=>navigate("/MFeight")}>8</button>
        <button className={props.backgroundeight} onClick={()=>navigate("/MFnine")} >9</button>
        <button className={props.backgroundnine} onClick={()=>navigate("/MFten")}>10</button>
        <button className={props.backgroundten} onClick={()=>navigate("/MFeleven")}>11</button>
        <button className={props.backgroundeleven} onClick={()=>navigate("/MFtwelve")}>12</button>
        <button className={props.backgroundtwelve} onClick={()=>navigate("/MFthirteen")}>13</button>
        <button className={props.backgroundthirteen} onClick={()=>navigate("/MFfourteen")}>14</button>
        <button className={props.backgroundfourteen} onClick={()=>navigate("/MFfifteen")}>15</button>
        <button className={props.backgroundfifteen} onClick={()=>navigate("/MFsixteen")}>16</button>
        <button className={props.backgroundsixteen} onClick={()=>navigate("/MFseventeen")}>17</button>
        <button className={props.backgroundseventeen} onClick={()=>navigate("/MFeighteen")}>18</button>
        <button className={props.backgroundeighteen} onClick={()=>navigate("/MFnineteen")}>19</button>
        <button className={props.backgroundnineteen}onClick={()=>navigate("/MFtwenty")}>20</button>
        <button className={props.backgroundtwenty}onClick={()=>navigate("/MFtwentyone")}>21</button>
        <button className={props.backgroundtwentyone} onClick={()=>navigate("/MFtwentytwo")}>22</button>
        <button className={props.backgroundtwentytwo} onClick={()=>navigate("/MFtwentythree")}>23</button>
        <button className={props.backgroundtwentythree}  onClick={()=>navigate("/MFtwentyfour")}>24</button>
        <button className={props.backgroundtwentyfour}onClick={()=>navigate("/MFtwentyfive")}>25</button>
        <button className={props.backgroundtwentyfive}onClick={()=>navigate("/MFtwentysix")}>26</button>
        <button className={props.backgroundtwentysix}onClick={()=>navigate("/MFtwentyseven")}>27</button>
        <button className={props.backgroundtwentyseven}onClick={()=>navigate("/MFtwentyeight")}>28</button>
        <button className={props.backgroundtwentyeight}onClick={()=>navigate("/MFtwentynine")}>29</button>
        <button className={props.backgroundtwentynine}onClick={()=>navigate("/MFthirty")}>30</button>
        <button className={props.backgroundthirty}onClick={()=>navigate("/MFthirtyone")}>31</button>
        <button className={props.backgroundthirtyone}onClick={()=>navigate("/MFthirtytwo")}>32</button>
        <button className={props.backgroundthirtytwo} onClick={()=>navigate("/MFthirtythree")}>33</button>
        <button className={props.backgroundthirtythree} onClick={()=>navigate("/MFthirtyfour")}>34</button>
        <button className={props.backgroundthirtyfour}   onClick={()=>navigate("/MFthirtyfive")}>35</button>
        <button className={props.backgroundthirtyfive} onClick={()=>navigate("/MFthirtysix")}>36</button>
        <button className={props.backgroundthirtysix}onClick={()=>navigate("/MFthirtyseven")}>37</button>
        <button className={props.backgroundthirtyseven}onClick={()=>navigate("/MFthirtyeight")}>38</button>
        <button className={props.backgroundthirtyeight}onClick={()=>navigate("/MFthirtynine")}>39</button>
        <button className={props.backgroundthirtynine}onClick={()=>navigate("/MFforty")}>40</button>
        
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
         status:state.status,
         option:state.option,
         background:state.background,
         backgroundone:state.backgroundone,
         backgroundtwo:state.backgroundtwo,
         backgroundthree:state.backgroundthree,
         backgroundfour:state.backgroundfour,
         backgroundfive:state.backgroundfive,
         backgroundsix:state.backgroundsix,
         backgroundseven:state.backgroundseven,
         backgroundeight:state.backgroundeight,
         backgroundnine:state.backgroundnine,
         backgroundten:state.backgroundten,
         backgroundeleven:state.backgroundeleven,
         backgroundtwelve:state.backgroundtwelve,
         backgroundthirteen:state.backgroundthirteen,
         backgroundfourteen:state.backgroundfourteen,
         backgroundfifteen:state.backgroundfifteen,
         backgroundsixteen:state.backgroundsixteen,
         backgroundseventeen:state.backgroundseventeen,
         backgroundeighteen:state.backgroundeighteen,
         backgroundnineteen:state.backgroundnineteen,
         backgroundtwenty:state.backgroundtwenty,
         backgroundtwentyone:state.backgroundtwentyone,
         backgroundtwentytwo:state.backgroundtwentytwo,
         backgroundtwentythree:state.backgroundtwentythree,
         backgroundtwentyfour:state.backgroundtwentyfour,
         backgroundtwentyfive:state.backgroundtwentyfive,
         backgroundtwentysix:state.backgroundtwentysix,
         backgroundtwentyseven:state.backgroundtwentyseven,
         backgroundtwentyeight:state.backgroundtwentyeight,
         backgroundtwentynine:state.backgroundtwentynine,
         backgroundthirty:state.backgroundthirty,
         backgroundthirtyone:state.backgroundthirtyone,
         backgroundthirtytwo:state.backgroundthirtytwo,
         backgroundthirtythree:state.backgroundthirtythree,
         backgroundthirtyfour:state.backgroundthirtyfour,
         backgroundthirtyfive:state.backgroundthirtyfive,
         backgroundthirtysix:state.backgroundthirtysix,
         backgroundthirtyseven:state.backgroundthirtyseven,
         backgroundthirtyeight:state.backgroundthirtyeight,
         backgroundthirtynine:state.backgroundthirtynine,
         grid:state.grid
             }
    
    }
    // const mapDispatchToProps=dispatch=>{
    // return{
    //     nextOne:()=>dispatch(nextOne()),
    //     nextTwo:()=>dispatch(nextTwo()),
    //     nextThree:()=>dispatch(nextThree()),
    //     nextFour:()=>dispatch(nextFour()),
    //     mfrOne:()=>dispatch(mfrOne()),
    //     mfrTwo:()=>dispatch(mfrTwo()),
    //     mfrThree:()=>dispatch(mfrThree()),
    //     mfrFour:()=>dispatch(mfrFour()),
    //     mfrFive:()=>dispatch(mfrFive()),
    //     mfrSix:()=>dispatch(mfrSix()),
    //     mfrSeven:()=>dispatch(mfrSeven()),
    //     optA:()=>dispatch(optA()),
    //     optB:()=>dispatch(optB()),
    //     optC:()=>dispatch(optC()),
    //     optD:()=>dispatch(optD()),
    //     statUpdate:()=>dispatch(statUpdate()),
    //     statUpdateA:()=>dispatch(statUpdateA()),
    //     statUpdateM:()=>dispatch(statUpdateM()),
    //     statUpdateN:()=>dispatch(statUpdateN()),
    //     statUpdateK:()=>dispatch(statUpdateK()),
        
    // }
    
    // }
    export default connect(mapStateToProps) (QuestionNumbers)
 