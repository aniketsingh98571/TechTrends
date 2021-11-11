import React from "react"
import classes from './SectionOne.module.css'
import team from '../../assets/images/team.svg'
const SectionOne=()=>{
    return(
        <div className={classes.Container}>
            <div className={classes.InnerContainer}>
                <div className={classes.ContainerOne}>            
                <div className={classes.LeftTextContainer}>
                    <p>Your Commitment, Our Priority.</p>
                </div>
                <div className={classes.RightContainer}>
                    <img src="https://res.cloudinary.com/aniket98571/image/upload/v1636621109/team_esifr6.svg" alt="Hero Image"/>
                </div>
                </div>
 
            </div>
        </div>
    )
}
export default SectionOne;