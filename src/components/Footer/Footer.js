import React from "react"
import classes from './Footer.module.css'
import logo from '../../assets/images/logo.svg'
const Footer=()=>{
    return(
        <div className={classes.Container}>
            <div className={classes.InnerContainer}>
                <div className={classes.LogoContainer}>
                    <img src="https://res.cloudinary.com/aniket98571/image/upload/v1636621222/logo_denw3g.svg"/>
                </div>
                <div className={classes.ContactContainer}>
                    <p>Contact</p>
                    <p>thor98571@gmail.com</p>
                </div>
                <div className={classes.ListContainer}>
                    <a href="#"><p>Home</p></a>
                    <a href="#"><p>Projects</p></a>
                    <a href="#"><p>Careers</p></a>
                </div>
                <div className={classes.SecondContainer}>
                    <div className={classes.SecondText}>
                        <p>We Strive for better future</p>
                    </div>
                    <div className={classes.Links}>
                        <a href="#"><p>Linkedin</p></a>
                        <a href="#"><p>Facebook</p></a>
                    </div>
                </div>
            </div>
            <p className={classes.FooterText}>Copyright &copy; TechTrends</p>
        </div>
    )
}
export default Footer;