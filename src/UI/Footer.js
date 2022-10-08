import { Fragment } from 'react';
import classes from './Footer.module.css';

const Footer=()=>{
    return(
        <Fragment>
        <div className={classes.wrapper}>
            <div>
                <h4>Visit Our Location</h4>
            </div>
            <div>
                <h4>Contact Us</h4>
            </div>
            <div>
                <h4>Hourse Of Operation</h4>
            </div>
        </div>
        <div>
            <h6 style={{margin:"auto",width:"100%",color:"white", textAlign:"center"}}>All Rights reserved CANLOVEADA INC.</h6>
        </div>
        </Fragment>
    )
}

export default Footer;