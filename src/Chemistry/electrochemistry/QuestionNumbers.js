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
        <button className={props.background} onClick={()=>navigate("/ZQone")}>1</button> 
        <button className={props.backgroundone} onClick={()=>navigate("/ZQtwo")}>2</button>
        <button className={props.backgroundtwo} onClick={()=>navigate("/ZQthree")}>3</button>
        <button  className={props.backgroundthree} onClick={()=>navigate("/ZQfour")}>4</button>
        <button  className={props.backgroundfour} onClick={()=>navigate("/ZQfive")}>5</button>
        <button className={props.backgroundfive} onClick={()=>navigate("/ZQsix")}>6</button>
        <button className={props.backgroundsix}  onClick={()=>navigate("/ZQseven")}>7</button>
        <button className={props.backgroundseven}  onClick={()=>navigate("/ZQeight")}>8</button>
        <button className={props.backgroundeight} onClick={()=>navigate("/ZQnine")} >9</button>
        <button className={props.backgroundnine} onClick={()=>navigate("/ZQten")}>10</button>
        <button className={props.backgroundten} onClick={()=>navigate("/ZQeleven")}>11</button>
        <button className={props.backgroundeleven} onClick={()=>navigate("/ZQtwelve")}>12</button>
        <button className={props.backgroundtwelve} onClick={()=>navigate("/ZQthirteen")}>13</button>
        <button className={props.backgroundthirteen} onClick={()=>navigate("/ZQfourteen")}>14</button>
        <button className={props.backgroundfourteen} onClick={()=>navigate("/ZQfifteen")}>15</button>
        <button className={props.backgroundfifteen} onClick={()=>navigate("/ZQsixteen")}>16</button>
        <button className={props.backgroundsixteen} onClick={()=>navigate("/ZQseventeen")}>17</button>
        <button className={props.backgroundseventeen} onClick={()=>navigate("/ZQeighteen")}>18</button>
        <button className={props.backgroundeighteen} onClick={()=>navigate("/ZQnineteen")}>19</button>
        <button className={props.backgroundnineteen}onClick={()=>navigate("/ZQtwenty")}>20</button>
        <button className={props.backgroundtwenty}onClick={()=>navigate("/ZQtwentyone")}>21</button>
        <button className={props.backgroundtwentyone} onClick={()=>navigate("/ZQtwentytwo")}>22</button>
        <button className={props.backgroundtwentytwo} onClick={()=>navigate("/ZQtwentythree")}>23</button>
        <button className={props.backgroundtwentythree}  onClick={()=>navigate("/ZQtwentyfour")}>24</button>
        <button className={props.backgroundtwentyfour}onClick={()=>navigate("/ZQtwentyfive")}>25</button>
        <button className={props.backgroundtwentyfive}onClick={()=>navigate("/ZQtwentysix")}>26</button>
        <button className={props.backgroundtwentysix}onClick={()=>navigate("/ZQtwentyseven")}>27</button>
        <button className={props.backgroundtwentyseven}onClick={()=>navigate("/ZQtwentyeight")}>28</button>
        <button className={props.backgroundtwentyeight}onClick={()=>navigate("/ZQtwentynine")}>29</button>
        <button className={props.backgroundtwentynine}onClick={()=>navigate("/ZQthirty")}>30</button>
        <button className={props.backgroundthirty}onClick={()=>navigate("/ZQthirtyone")}>31</button>
        <button className={props.backgroundthirtyone}onClick={()=>navigate("/ZQthirtytwo")}>32</button>
        <button className={props.backgroundthirtytwo} onClick={()=>navigate("/ZQthirtythree")}>33</button>
        <button className={props.backgroundthirtythree} onClick={()=>navigate("/ZQthirtyfour")}>34</button>
        <button className={props.backgroundthirtyfour}   onClick={()=>navigate("/ZQthirtyfive")}>35</button>
        <button className={props.backgroundthirtyfive} onClick={()=>navigate("/ZQthirtysix")}>36</button>
        <button className={props.backgroundthirtysix}onClick={()=>navigate("/ZQthirtyseven")}>37</button>
        <button className={props.backgroundthirtyseven}onClick={()=>navigate("/ZQthirtyeight")}>38</button>
        <button className={props.backgroundthirtyeight}onClick={()=>navigate("/ZQthirtynine")}>39</button>
        <button className={props.backgroundthirtynine}onClick={()=>navigate("/ZQforty")}>40</button>
        
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
 