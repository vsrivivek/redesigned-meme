import React, { useState } from "react"
import { useEffect, useRef} from "react"
import "./register.css"
import axios from "axios"
import Welcom from "./Welcom"
import Firstpage from "./Firstpage"
import { useNavigate } from "react-router-dom"
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import store from '../redux/store'
import { testcodeupdater } from "../redux/cake/cakeAction"
//  import Cname from "./Cname";
 import { nameUpdater } from "../redux/cake/cakeAction"
 import Logo from '../redux/Images/Logo.jpg'




const Register = (props) => {

 const rStyle={
    "margin": " 120px 0 0 525px"
 };
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
    width:"1540px",
    "height":"114px",
    "background-color":"purple",
  };
  const inputRef= useRef(null);
  useEffect(()=>{
   inputRef.current.focus()
  },[])

    const navigate = useNavigate()
     const [ name, setName ] =useState("");
     const [ password, setPassword ] =useState("");
     const [ email, setEmail ] =useState("");
     const [mobile,setMobile] = useState("")
     const [errmsgname, setErrmsgname ] =useState("");
     const [errmsgpwd, setErrmsgpwd ] =useState("");
     const [errmsgemail, setErrmsgemail ] =useState("");
    const [errmsgmobile, setErrmsgmobile ]= useState("")
    //  const nameUpdate=(name)=>{
    //     props.nameUpdater(name)
    //  }

    //  const [ user, setUser] = useState({
        //  name: "",
        //  email:"",
        //  password:"",
    //     reEnterPassword: ""
    //  })

    // const handleChange = e => {
    //      const { name, value } = e.target
       
    //     setUser({
    //         ...user,
    //         [name]: value
    //     })
    // }

    

     async function register (e) {
        
        // if(name===""&& password===""&&email===""&&mobile===""){
        //     setErrmsgname("Name field cannot be empty");
        //      setErrmsgemail("Email Field cannot be empty");
        //      setErrmsgpwd("Password Field cannot be empty");
        //      setErrmsgmobile("Mobile Field cannot be empty")
        // }
        // else if(name===""&& password===""&&email===""){
        //     setErrmsgname("Name field cannot be empty");
        //     setErrmsgemail("Email Field cannot be empty");
        //     setErrmsgpwd("Password Field cannot be empty");
        //     setErrmsgmobile("")
        // }
        // else if(name===""&& password===""&&mobile===""){
        //     setErrmsgname("Name field cannot be empty");
        //     setErrmsgemail("");
        //     setErrmsgpwd("Password Field cannot be empty");
        //     setErrmsgmobile("Mobile Field cannot be empty")
        // }
         if(name===""&&email===""&&mobile===""){
            setErrmsgname("Name field cannot be empty");
            setErrmsgemail("Email Field cannot be empty");
            setErrmsgpwd("");
            setErrmsgmobile("Mobile Field cannot be empty")
        }
        // else if(password===""&&email===""&&mobile===""){
        //     setErrmsgname("");
        //     setErrmsgemail("Email Field cannot be empty");
        //     setErrmsgpwd("Password Field cannot be empty");
        //     setErrmsgmobile("Mobile Field cannot be empty")
        // }

            
        // else if(name===""&& password===""){
        //     setErrmsgname("Name field cannot be empty");
        //     setErrmsgpwd("Password Field cannot be empty");
        //     setErrmsgemail("");
        //     setErrmsgmobile("")
        // }
        // else if(email===""&& password===""){
        //     setErrmsgemail("Email Field cannot be empty");
        //     setErrmsgpwd("Password Field cannot be empty");
        //     setErrmsgname("");
        //     setErrmsgmobile("")
        // }
        else if(name===""&& email===""){
            setErrmsgname("Name field cannot be empty");
            setErrmsgemail("Email Field cannot be empty");
            setErrmsgpwd("");
            setErrmsgmobile("")
        }
        else if(email===""&& mobile===""){
            setErrmsgname("");
            setErrmsgemail("Email field cannot be empty");
            setErrmsgpwd("");
            setErrmsgmobile("Mobile field cannot be empty")
        }
        // else if(password===""&& mobile===""){
        //     setErrmsgname("");
        //     setErrmsgemail("");
        //     setErrmsgpwd("Password field cannot be empty");
        //     setErrmsgmobile("Mobile field cannot be empty")
        // }
        else if(name===""&& mobile===""){
            setErrmsgname("Name field cannot be empty");
            setErrmsgemail("");
            setErrmsgpwd("");
            setErrmsgmobile("Mobile field cannot be empty")
        }
        else if(name===""){
            setErrmsgname("Name field cannot be empty");
            setErrmsgemail("");
            setErrmsgpwd("");
            setErrmsgmobile("")
        }
        // else if(password===""){
        //     setErrmsgname("");
        //     setErrmsgemail("");
        //     setErrmsgpwd("Password field cannot be empty");
        //     setErrmsgmobile("")

        // }
        else if(email===""){
            setErrmsgname("");
            setErrmsgemail("Email field cannot be empty");
            setErrmsgpwd("");
            setErrmsgmobile("")
        }
        else if(mobile===""){
            setErrmsgname("");
            setErrmsgemail("");
            setErrmsgpwd("");
            setErrmsgmobile("Mobile field cannot be empty")
        }
        else  { 
            //   if(!/^[a-zA-Z]*$/.test(name)){
    if(!/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z]*$/.test(email)){
            // if((mobile<0)||(`${mobile}`.length < 10 ||`${mobile}`.length>10)||((mobile)/1000000000)<6){        
                //  if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)) {   
                setErrmsgname("");
                setErrmsgemail("Email shall be in valid format");
                // setErrmsgpwd("The password Shall Contain atleast 8 characters,The password Shall Contain atleast 1 lower case English letter characters,The password Shall Contain atleast One UPPER CASE Eglish letter,The password Shall Contain atleast one Speccial characters from (?=.*?[#?!@$%^&*-])");
                setErrmsgmobile("");
                setErrmsgpwd("")
             }
             else{
        e.preventDefault()
        
        
        try{
            
            
         if(props.testcode==="1"){(navigate('/Welcom'))}
            // if(props.testcode==="1"){(navigate('/Welcom'))}
        else if(props.testcode==="2"){navigate('/Welcomone')}
        else if(props.testcode==="3"){navigate('/Welcomtwo')}
        else if(props.testcode==="4"){navigate('/Welcomthree')}
        else if(props.testcode==="5"){navigate('/Welcomfour')}
        else if(props.testcode==="6"){navigate('/Welcomfive')}
        else if(props.testcode==="7"){navigate('/Welcomsix')}
        else if(props.testcode==="8"){navigate('/Welcomseven')}
        else if(props.testcode==="9"){navigate('/Welcomeight')}
        else if(props.testcode==="10"){navigate('/Welcomnine')}
        else if(props.testcode==="11"){navigate('/Welcomten')}
        else if(props.testcode==="12"){navigate('/Welcomeleven')}
        else if(props.testcode==="13"){navigate('/Welcomtwelve')}
        else if(props.testcode==="14"){navigate('/Welcomthirteen')}
        else if(props.testcode==="15"){navigate('/Welcomfourteen')}
        else if(props.testcode==="16"){navigate('/Welcomfifteen')}
        else if(props.testcode==="17"){navigate('/Welcomsixteen')}
        else if(props.testcode==="18"){navigate('/Welcomseventeen')}
        else if(props.testcode==="19"){navigate('/Welcomeighteen')}
        else if(props.testcode==="20"){navigate('/Welcomnineteen')}
        
        
        

        props.nameUpdater(name);
             await axios.post('https://api.vectorise.in/register',{name,mobile,email});
            // props.nameUpdater(name)
             
            // await axios.get('http://localhost:5000/allusers').
            // then(res=>{console.log(res)}).catch(err=>{console.log(err)})
        }
         catch(name){
             console.log(name,mobile)
         }
        
                 
    }}}

    return (<div>
        <div className={props.header} style={bStyle}>
        <table style={tStyle}>
 
 <tbody >
   <tr >  
     <td style={hStyle} ><img  style={logoStyle} src={Logo} alt="Logo" /></td> 
   </tr>
 </tbody>
</table>
        
        </div>
        <div  style={rStyle} className="register">
             {/* {console.log("User",user)}   */}
            <h1>Say something about you!!!</h1>
                <input type="text" name="name" ref={inputRef} value={name} placeholder="Your Name" onChange={((e)=>{setName(e.target.value)})}></input>
            <p id ="errmsg">{errmsgname}</p>
           {/* <input type="password" name="password" value={password} placeholder="Your Password" onChange={(e)=>{setPassword(e.target.value)} }></input> 
             <p id ="errmsg">{errmsgpwd}</p>  */}
            <input type="text" name="email" value={email} placeholder="Your Email" onChange={ (e)=>{setEmail(e.target.value)} }></input>
            <p id ="errmsg">{errmsgemail}</p>
            <input type="number" name="mobile" value={mobile} placeholder="Your Mobile Number" onChange={ (e)=>{setMobile(e.target.value)}}></input>
            <p id ="errmsg">{errmsgmobile}</p>
            {/* <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input> */}  
            <div className="button" onClick={ register} >Take me to the test page</div> 
            {/* <p>{props.name}</p> */}
            {/* <div>or</div> */}
            {/* <div className="button" onClick={() => (navigate('/login'))}>Login</div> */}
            
            </div>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
      testcode:state.testcode,
      name:state.name 
    }
    }
const mapDispatchToProps=dispatch=>{
        return{
                  nameUpdater : name=> dispatch(nameUpdater(name))
           
        }
       
          }
export default connect (mapStateToProps,mapDispatchToProps)(Register)