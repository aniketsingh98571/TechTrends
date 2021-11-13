import React from "react"
import classes from './Teams.module.css'
import TeamList from './TeamList.json'
import Instagram from '../../assets/images/insta.svg'
import Facebook from '../../assets/images/fb.svg'
import Twitter from '../../assets/images/twitter.svg'
const Teams=(props)=>{
    return(
        <div id="Teams_Id" className={classes.Container}>
            <div className={classes.TopHeadingText}>
                <p>{props.MainText}</p>
            </div>
            <div className={classes.InnerContainer}>
                {
                    TeamList.map((ele,i)=>{
                        return <div className={classes.CardContainer}>
                            <div className={classes.ImageContainer}>
                                <img src={ele.Image}/>
                            </div>
                            <div className={classes.NameContainer}>
                                <p>{ele.Name}</p>
                            </div>
                            <div className={classes.PositionContainer}>
                                <p>{ele.Position}</p>
                            </div>
                        <div className={classes.SocialContainer}>
                            <a href={ele.Instagram}><img src={Instagram}/></a>
                            <a href={ele.Facebook}><img src={Facebook}/></a>
                            <a href={ele.Twitter}><img src={Twitter}/></a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default Teams;