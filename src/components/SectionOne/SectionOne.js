import React from "react"
import classes from './SectionOne.module.css'
const SectionOne=(props)=>{
    return(
        <div className={classes.Container}>
            <div className={classes.InnerContainer}>
                <div className={classes.ContainerOne}>            
                <div className={classes.LeftTextContainer}>
                    <p>{props.HeroText}</p>
                </div>
                <div className={classes.RightContainer}>
                    <img src={props.HeroImage} alt="Hero Image"/>
                </div>
                </div>
 
            </div>
        </div>
    )
}
export default SectionOne;