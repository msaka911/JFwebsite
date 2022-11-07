import { Fragment } from 'react';
import classes from './Footer.module.css';

const Footer=()=>{
    return(
        <Fragment  >
        <div className={classes.footer}>
        <div className={classes.wrapper}>
            <div>
                <h4>About Insurance</h4>
                <div>
                    <h5>our coverage</h5>
               </div>
            </div>
            <div>
                <h4>Contact Us</h4>
                <div>
                    <h5>tel</h5>
               </div>
               <div>
                    <h5>location</h5>
               </div>
            </div>
            <div>
                <h4>Resources</h4>
                <div>
                <h5>FAQs</h5>
               </div>
               <div>
                <h5>policy wording</h5>
               </div>
            </div>
        </div>
 
        <div style={{margin:"0 auto",justifySelf:'center',width:"100%",display:'flex'}}>
            <label style={{margin:"0 auto"}}>
           © JF Insurance Agency Group Inc. 2022. All Rights Reserved.
           </label>
        </div>
        </div>
        </Fragment>
    )
}

export default Footer;