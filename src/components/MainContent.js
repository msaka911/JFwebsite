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

import { Fragment } from 'react';

const MainContent=()=>{
    const { ref } = useParallax({ speed: -30 })

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
     const allSections = document.querySelectorAll('section');
     const revealSection = function (entries, observer) {
       const [entry] = entries;
     
       if (!entry.isIntersecting) return;
     
       entry.target.classList.remove('section--hidden');
       observer.unobserve(entry.target);
     };
     
     const sectionObserver = new IntersectionObserver(revealSection, {
       root: null,
       threshold: 0.15,
     });
     
     allSections.forEach(function (section) {
       sectionObserver.observe(section);
       section.classList.add('section--hidden');
     });
     //------------------------------------------------------------
  
  
    return (
    <Fragment>
    <header className={classes.welcome}>
      <h2>Welcome To</h2>
      <h1>JF Insurance</h1>
      <img  ref={ref}  src={image}></img>
    </header>

    <section  className={classes.slideDisplay}>
    <Slider 
            className={classes.slider}
            {...settings} 
            >
            <div className={classes.card}>
            <Card title="Student" description="Our best advisors" button="Apply for Quote">
                <img src={`https://www.jfgroup.ca/wp-content/uploads/2020/09/Group-100.png`} alt="Image1" />
            </Card>
            </div>

            <div className={classes.card}>
                <Card title="Travel" description="Our best advisors" button="Apply for Quote">
                    <img src={`https://www.jfgroup.ca/wp-content/uploads/2020/09/Path-149.png`}  alt="Image2"/>
                </Card>
            </div>

            <div className={classes.card}>
                <Card title="Visitors" description="Our best advisors" button="Apply for Quote">
                    <img src={`https://www.jfgroup.ca/wp-content/uploads/2020/09/Group-103.png`}  alt="Image3"/>
                </Card>
            </div>
            </Slider>
    </section>



    <section className={classes.introduction}>
     <h1>BUY WITH CONFIDENCE</h1>
     <p>With our amazing collection on the lot, we guarantee you’ll be extremely satisfied with your choices. Come and test drive one now. 
        Sometimes we offer an incredible discount on a select vehicle. Right now, that includes our extensive Vehicle collection. Whether you’re 
        looking for new or used, large or small, bare essentials or fully equipped, we know you’ll ride away from YST AUTO SALES with an awesome set of wheels to call your own.
     </p>
    </section>
    





    <section className={classes.underwritter}>
        <h1 style={{color:"black"}}>Our Underwritter</h1>
        <div className={classes.section}>
            <Card title="Berkley" description="Our best advisors" button="Details">
                {/* <img src={finance}/> */}
            </Card>
            <Card title="Allianz" description="Lease can be great options" button="Details">
            {/* <img src={lease}/> */}
            </Card>
            <Card i title="Old Republic" description="Extended Warranty" button="Details">
            {/* <img src={warranty}/> */}
            </Card>
      </div>
    </section>
    
  
    {/* <section className={classes.group}>
    <h2>Auto Group</h2>
    <img src={group} ></img>
    </section> */}
    
  
    <section className="section section--quote">
        <div className="section__title">
          <h3 className="section__header">
            Get free quote for your car now!
          </h3>
        </div>
        <button className={classes.btn} onClick={()=>{navigate(`/new-quote`)}}>Free Quote!</button>
      </section>
    </Fragment>
    );
  };


export default MainContent