import React from "react"
import classes from './Services.module.css'
import ServiceList from './ServiceList.json'
const Services=(props)=>{
    return(
        <div id="Services_Id" className={classes.Container}>
            <div className={classes.TopHeadingText}>
                <p>{props.MainText}</p>
            </div>
            <div className={classes.InnerContainer}>
                {
                    ServiceList.map((ele,i)=>{
                        return <div className={classes.CardContainer}>
                            <div className={classes.ImageContainer}>
                                <img src={ele.Image}/>
                            </div>
                            <div className={classes.HeadingContainer}>
                                <p>{ele.Title}</p>
                            </div>
                            <div className={classes.ParaContainer}>
                                <p>{ele.Para}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default Services