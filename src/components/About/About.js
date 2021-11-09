import React from "react"
import classes from './About.module.css'
import AboutList from  './AboutList.json'
const About=()=>{
    console.log(AboutList)
 return(
     <div className={classes.Container}>
         <div className={classes.TopHeadingText}>
             <p>Who are We?</p>
         </div>
         <div className={classes.ConditionalContainer}>
             {
                 AboutList.map((ele,i)=>{
                    
     
        
            return i%2===0?( <div className={classes.FirstContainer}>
                        <div className={classes.Heading}>
                            <p>{ele.Title}</p>
                            <p>{ele.Para}</p>
                        </div>
                        <div className={classes.ImageContainer}>
                            <img src={ele.image}/>
                            </div>
                    </div>):(
                        <div className={classes.SecondContainer}>
                             <div className={classes.ImageContainerTwo}>
                                <img src={ele.image}/>
                            </div>
                            <div className={classes.HeadingTwo}>
                                <p>{ele.Title}</p>
                                <p>{ele.Para}</p>
                            </div>
                           

                        </div>
                    )
                    
                        
     
        
                 })
                
             }
         </div>
     </div>
 )
}
export default About