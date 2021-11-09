import React from "react"
import classes from './Projects.module.css'
import ProjectList from './ProjectsList.json'
const Projects=()=>{
    return(
        <div className={classes.Container}>
            <div className={classes.TopHeadingText}>
                <p>Projects</p>
            </div>
            <div className={classes.InnerContainer}>
                {
                    ProjectList.map((ele,i)=>{
                        return <div className={classes.CardContainer}>
                            <div className={classes.ImageContainer}>
                                <img src={ele.Image} />
                            </div>
                            <div className={classes.HeadingContainer}>
                                <p>{ele.Title}</p>
                                </div>
                                <div className={classes.ParaContainer}>
                                    <p>{ele.Para}</p>
                                </div>
                                <div className={classes.ButtonContainer}>
                                    <a href={ele.Link} ><button type="button">View</button></a>
                                </div>
                                
                        </div>
                       
                    })
                    
                }
            
            </div>
        </div>
    )
}
export default Projects;