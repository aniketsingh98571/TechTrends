import React from "react"
import classes from './Footer.module.css'
const Footer=(props)=>{
    return(
        <div className={classes.Container}>
            <div className={classes.InnerContainer}>
                <div className={classes.LogoContainer}>
                    <img src={props.FooterLogo}/>
                </div>
                <div className={classes.ContactContainer}>
                    <p>Contact</p>
                    <p>{props.FooterContents.Contact_Email}</p>
                </div>
                <div className={classes.ListContainer}>
                    <a href="#"><p>Home</p></a>
                    <a href="#"><p>Projects</p></a>
                    <a href="#"><p>Careers</p></a>
                </div>
                <div className={classes.SecondContainer}>
                    <div className={classes.SecondText}>
                        <p>{props.FooterContents.SubHeadingText}</p>
                    </div>
                    <div className={classes.Links}>
                        <a href={props.FooterContents.SocialMedia.Link1}><p>{props.FooterContents.SocialMedia.Text1}</p></a>
                        <a href={props.FooterContents.SocialMedia.Link2}><p>{props.FooterContents.SocialMedia.Text2}</p></a>
                    </div>
                </div>
            </div>
            <p className={classes.FooterText}>Copyright &copy; TechTrends</p>
        </div>
    )
}
export default Footer;