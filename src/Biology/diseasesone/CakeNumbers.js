import React from 'react'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import store from '../redux/store'
import App from '../App.css'
import { cakeone,caketwo,cakethree,cakefour,cakefive,cakediv} from '../redux'


function CakeNumbers(props) {
  return (
    <div className={props.cakediv}>
    <p className={props.cakeone}>Not Visited- <button className={"btn1"}>{props.notVisited}</button></p>
    <p className={props.caketwo}> Not Answered-<button className={"btn2"}>{props.notAnswered}</button></p>
    <p className={props.cakethree}> Marked-<button className={"btn3"}>{props.marked}</button></p>
    <p className={props.cakefour}> Marked For Review-<button className={"btn4"}>{props.markedForReview}</button></p>
    <p className={props.cakefive}> Answered-<button className={"btn5"}>{props.answered}</button></p>
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
      
      cakediv:state.cakediv,
      cakeone:state.cakeone,
      caketwo:state.caketwo,
      cakethree:state.cakethree,
      cakefour:state.cakefour,
      cakefive:state.cakefive,
         
    }
    
    }
export default connect (mapStateToProps)(CakeNumbers)