import React from 'react';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'



function QuestionNumbers(props) {
    const navigate = useNavigate();
     return (
      <div className ={props.grid}>
        <button className={props.background} onClick={()=>navigate("/AVone")}>1</button> 
        <button className={props.backgroundone} onClick={()=>navigate("/AVtwo")}>2</button>
        <button className={props.backgroundtwo} onClick={()=>navigate("/AVthree")}>3</button>
        <button  className={props.backgroundthree} onClick={()=>navigate("/AVfour")}>4</button>
        <button  className={props.backgroundfour} onClick={()=>navigate("/AVfive")}>5</button>
        <button className={props.backgroundfive} onClick={()=>navigate("/AVsix")}>6</button>
        <button className={props.backgroundsix}  onClick={()=>navigate("/AVseven")}>7</button>
        <button className={props.backgroundseven}  onClick={()=>navigate("/AVeight")}>8</button>
        <button className={props.backgroundeight} onClick={()=>navigate("/AVnine")} >9</button>
        <button className={props.backgroundnine} onClick={()=>navigate("/AVten")}>10</button>
        <button className={props.backgroundten} onClick={()=>navigate("/AVeleven")}>11</button>
        <button className={props.backgroundeleven} onClick={()=>navigate("/AVtwelve")}>12</button>
        <button className={props.backgroundtwelve} onClick={()=>navigate("/AVthirteen")}>13</button>
        <button className={props.backgroundthirteen} onClick={()=>navigate("/AVfourteen")}>14</button>
        <button className={props.backgroundfourteen} onClick={()=>navigate("/AVfifteen")}>15</button>
        <button className={props.backgroundfifteen} onClick={()=>navigate("/AVsixteen")}>16</button>
        <button className={props.backgroundsixteen} onClick={()=>navigate("/AVseventeen")}>17</button>
        <button className={props.backgroundseventeen} onClick={()=>navigate("/AVeighteen")}>18</button>
        <button className={props.backgroundeighteen} onClick={()=>navigate("/AVnineteen")}>19</button>
        <button className={props.backgroundnineteen}onClick={()=>navigate("/AVtwenty")}>20</button>
        <button className={props.backgroundtwenty}onClick={()=>navigate("/AVtwentyone")}>21</button>
        <button className={props.backgroundtwentyone} onClick={()=>navigate("/AVtwentytwo")}>22</button>
        <button className={props.backgroundtwentytwo} onClick={()=>navigate("/AVtwentythree")}>23</button>
        <button className={props.backgroundtwentythree}  onClick={()=>navigate("/AVtwentyfour")}>24</button>
        <button className={props.backgroundtwentyfour}onClick={()=>navigate("/AVtwentyfive")}>25</button>
        <button className={props.backgroundtwentyfive}onClick={()=>navigate("/AVtwentysix")}>26</button>
        <button className={props.backgroundtwentysix}onClick={()=>navigate("/AVtwentyseven")}>27</button>
        <button className={props.backgroundtwentyseven}onClick={()=>navigate("/AVtwentyeight")}>28</button>
        <button className={props.backgroundtwentyeight}onClick={()=>navigate("/AVtwentynine")}>29</button>
        <button className={props.backgroundtwentynine}onClick={()=>navigate("/AVthirty")}>30</button>
        <button className={props.backgroundthirty}onClick={()=>navigate("/AVthirtyone")}>31</button>
        <button className={props.backgroundthirtyone}onClick={()=>navigate("/AVthirtytwo")}>32</button>
        <button className={props.backgroundthirtytwo} onClick={()=>navigate("/AVthirtythree")}>33</button>
        <button className={props.backgroundthirtythree} onClick={()=>navigate("/AVthirtyfour")}>34</button>
        <button className={props.backgroundthirtyfour}   onClick={()=>navigate("/AVthirtyfive")}>35</button>
        <button className={props.backgroundthirtyfive} onClick={()=>navigate("/AVthirtysix")}>36</button>
        <button className={props.backgroundthirtysix}onClick={()=>navigate("/AVthirtyseven")}>37</button>
        <button className={props.backgroundthirtyseven}onClick={()=>navigate("/AVthirtyeight")}>38</button>
        <button className={props.backgroundthirtyeight}onClick={()=>navigate("/AVthirtynine")}>39</button>
        <button className={props.backgroundthirtynine}onClick={()=>navigate("/AVforty")}>40</button>
        
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
 