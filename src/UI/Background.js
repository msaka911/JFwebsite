import image from "../assets/landscape.jpg"
import { useParallax } from 'react-scroll-parallax';

import classes from './Background.module.css';



const Background=()=>{
    const { ref } = useParallax({ speed: -30 })


   return    <img className={classes.image}  ref={ref}  src={image}></img>

}


export default Background