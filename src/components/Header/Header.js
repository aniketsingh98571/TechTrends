import React,{useState} from "react"
import classes from './Header.module.css'
import { Link } from "react-scroll";
const Header=(props)=>{
    const [Open,IsOpen]=useState(false)
     function ChangeState(){
        IsOpen(!Open);
    }
    return(
        <div className={classes.Container}>
                        <div className={classes.NavBar} >
            <div className={classes.ImageContainer}>
                <img src={props.LogoImage} alt="branding logo"/>
            </div>
            <div className={Open ? classes.Show : classes.Hide}>
            <Link
                         to="About_Id"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >
                    <li>{props.Link1}</li>
                    </Link>
                    <Link
                        activeClass={classes.Active}
                        to="Services_Id"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >
                        <li>{props.Link2} </li>
                        </Link>
                        <Link
                        activeClass={classes.Active}
                        to="Projects_Id"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    >
                        <li>{props.Link3}</li>
                        </Link>
                        <Link
                        activeClass={classes.Active}
                        to="Teams_Id"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    > 
                    <li>{props.Link4} </li>
                    </Link>
                    <Link
                        activeClass={classes.Active}
                        to="Contact_Id"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                    > <li>{props.Link5} </li></Link>
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