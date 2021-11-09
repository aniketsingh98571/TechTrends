import React,{useState} from "react"
import logo from '../../assets/images/logo.svg'
import classes from './Header.module.css'
const Header=()=>{
    const [Open,IsOpen]=useState(false)
     function ChangeState(){
        IsOpen(!Open);
    }
    return(
        <div className={classes.Container}>
                        <div className={classes.NavBar} >
            <div className={classes.ImageContainer}>
                <img src={logo} alt="Weboasis branding logo"/>
            </div>
            <div className={Open ? classes.Show : classes.Hide}>
                <li><a href="#">ABOUT </a></li>
                <li><a href="#">SERVICES </a></li>
                <li><a href="#">PROJECTS </a></li>
                <li><a href="#">TEAM </a></li>
                <li><a href="#">CONTACT </a></li>
          </div>
            <div className={classes.MenuContainer} onClick={ChangeState}>
                { Open ? null : <span>EXPAND</span> }
                <button type="button" className={Open ? classes.Change:null}>
                    <div className={classes.Bar1}></div>
                    <div className={classes.Bar2}></div>
                    <div className={classes.Bar3}></div>
                </button>
            </div>
            </div>

        </div>
    )
}
export default Header;