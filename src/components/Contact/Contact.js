import React, { useReducer, useState } from "react"
import classes from './Contact.module.css'
import Popup from "../popups/Popup"
const Contact=()=>{
   
    const [data,setdata]=useState({
        name:"",
        email:"",
        message:""
    })
    
    let name, value;
    const SubmitHandler=(e)=>{
       
     
     name=e.target.name;
     value=e.target.value;
     setdata({...data,[name]:value})
      
      
    }
      const PostData= async(e)=>{
            e.preventDefault();
            const env=process.env.REACT_APP_API_URL;
           
            const {name,email,message}=data
            if(name&&email&&message){
                const rest= await fetch(env,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    name,
                    email,
                    message,
                })
            })
            if(rest){
                setdata({
                    name:"",
                    email:"",
                    message:""
                })
                alert("Data Stored")
            }
           
            }
            else{
                alert("Please Fill all Details")
            }
            
      }
      
      
    
    return(
        <div className={classes.Container}>
            <div className={classes.InnerContainer}>
                <div className={classes.TopHeadingText}>
                    <p>Contact</p>
                </div>
                <div className={classes.FormContainer} >
                    <div className={classes.NameContainer}>
                        <label>Name</label>
                        <input type="text" name="name" value={data.name} onChange={SubmitHandler} required/>
                    </div>
                    <div className={classes.EmailContainer}>
                        <label>Email</label>
                        <input type="email" name="email" value={data.email} onChange={SubmitHandler}/>
                    </div>
                    <div className={classes.MessageArea}>
                        <label>Your Message</label>
                        <textarea name="message" value={data.message} onChange={SubmitHandler}></textarea>
                    </div>
                    <div className={classes.ButtonContainer}>
                        <button type="button" onClick={PostData}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;