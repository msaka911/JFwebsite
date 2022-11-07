import classes from './Card.module.css';
import Button from './Button';
const Card = (props) => {


  return (  
  <div className={classes.card} style={props.style}>
      <h3>{props.title}</h3>
     <label>{props.description}</label>
     {/* <Button >{props.button}</Button> */}
     {props.children}
  </div>)

};

export default Card;
