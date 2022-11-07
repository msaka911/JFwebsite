import {useNavigate} from 'react-router-dom';
import { useParallax } from 'react-scroll-parallax';
import classes from './MainContent.module.css';
import image from "../assets/landscape.jpg"
import Card from '../UI/Card';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from '../UI/Button';
import { Fragment, useEffect } from 'react';

import OR from "../assets/old-republic.png"
import allianz from "../assets/allianz.jpeg"
const MainContent=()=>{
    // const { ref } = useParallax({ speed: -30 })

    const navigate=useNavigate();
  


      const LeftArrow = ({ style, onClick }) => (
        <button
          style={{ ...style,borderWidth: "0", left: "-5rem", backgroundColor: "transparent",top: "50%",position:"absolute", zIndex:"99", border: "0:" }}
          onClick={onClick}
          className="arrowLeft"
        >
          <ArrowBackIosNewIcon fontSize='large'/>
        </button>
        );
        
        const RightArrow = ({ style, onClick }) => (
          <button
            style={{ ...style, borderWidth: "0",right: "-5rem", backgroundColor: "transparent",top: "50%",position:"absolute", zIndex:"99", border: "0:"}}
            onClick={onClick}
            className="arrowRight"
          >
            <ArrowForwardIosIcon fontSize='large'/>
          </button>
          );
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            fade: false,
            arrows:true,
            drggable:true,
            prevArrow: <LeftArrow />,
            nextArrow:<RightArrow/>
          };

     //page animation------------------------------------------------------------

     useEffect(()=>{
        const allSections = document.querySelectorAll('section');
        const revealSection = function (entries, observer) {
          const [entry] = entries;
        
          if (!entry.isIntersecting) return;
          
          console.log(entry.target.classList)
          entry.target.classList.remove('section--hidden');
          observer.unobserve(entry.target);
        };
        
        const sectionObserver = new IntersectionObserver(revealSection, {
          root: null,
          threshold: 0.2,
        });
        
        allSections.forEach(function (section) {
          sectionObserver.observe(section);
          section.classList.add('section--hidden');
        });
     },[])

     //------------------------------------------------------------
  
  
    return (
    <Fragment>
    <header className={classes.welcome}>
      <h2>Welcome To</h2>
      <h1>JF Insurance</h1>
      {/* <img  ref={ref}  src={image}></img> */}
    </header>

    <section  className={classes.slideDisplay}>
    <Slider 
            className={classes.slider}
            {...settings} 
            >
            <div className={classes.card}>
            <Card title="Student" description="Our best advisors" style={{backgroundColor:"white"}}>
                <img src={`https://www.jfgroup.ca/wp-content/uploads/2020/09/Group-100.png`} alt="Image1" />
                <Button onClick={()=>{navigate(`/quote`)}} style={{backgroundColor: "teal",borderWidth:0}}>Apply for Quote</Button>
            </Card>
            </div>

            <div className={classes.card}>
                <Card title="Travel" description="Our best advisors" style={{backgroundColor:"white"}} >
                    <img src={`https://www.jfgroup.ca/wp-content/uploads/2020/09/Path-149.png`}  alt="Image2"/>
                    <Button onClick={()=>{navigate(`/quote`)}}  style={{backgroundColor: "teal",borderWidth:0}}>Apply for Quote</Button>
                </Card>
            </div>

            <div className={classes.card}>
                <Card title="Visitors" description="Our best advisors" style={{backgroundColor:"white"}}>
                    <img src={`https://www.jfgroup.ca/wp-content/uploads/2020/09/Group-103.png`}  alt="Image3"/>
                    <Button onClick={()=>{navigate(`/quote`)}} style={{backgroundColor: "teal",borderWidth:0}}>Apply for Quote</Button>
                </Card>
            </div>
            </Slider>
    </section>



    <section className={classes.introduction}>
     <h1>BUY WITH CONFIDENCE</h1>
     <p>Going places? TOP Travel Insurance is the perfect travel partner. Find the coverage that's right for you and know you're travelling protected.
     </p>
     <p>Study abroad? JF student Insurance is the perfect product for student. tudying abroad is exciting and adventurous! Make sure you have the right insurance coverage while in Canada.
     </p>
    </section>
    





    <section className={classes.underwritter}>
        <h1 style={{color:"black"}}>Our Underwritter</h1>
        <div className={classes.section}>
            <Card title="Berkley" description="Our best partner" button="Details">
                <img src="https://www.berkleycanada.com/wp-content/themes/wp-bootstrap/images/logo.png"/>
            </Card>
            <Card title="Allianz" description="World leader insurance" button="Details">
            <img src={allianz}/>
            </Card>
            <Card i title="Old Republic" description="Your insurance specialist" button="Details">
            <img src={OR}/>
            </Card>
      </div>
    </section>
    
  
    
  
    <section className="section">
        <div className="section__title">
          <h3 className="section__header">
            Get free quote for insurance plan now!
          </h3>
        </div>
        <button className={classes.btn} onClick={()=>{navigate(`/quote`)}}>Free Quote!</button>
      </section>
    </Fragment>
    );
  };


export default MainContent