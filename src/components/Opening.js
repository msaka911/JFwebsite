import {useNavigate} from 'react-router-dom';
import classes from './Opening.module.css';
import image from "../assets/landscape.jpg"
import Card from '../UI/Card';

import Select from 'react-select'
import Button from '../UI/Button';
import { Fragment, useEffect,useState} from 'react';
import makeAnimated from 'react-select/animated';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Opening=()=>{

    const navigate=useNavigate();
    const animatedComponents = makeAnimated();

    const[province,setProvince]=useState(null);

    const provinceOptions=[
        { value: 'ON', label: 'Ontario' },
        { value: 'QC', label: 'Qeubec' },
        { value: 'NS', label: 'Nova Scotia' },
        { value: 'NB', label: 'New Brunswick' },
        { value: 'MB', label: 'Manitoba' },
        { value: 'BC', label: 'British Columbia' },
        { value: 'PE', label: 'Prince Edward Island' },
        { value: 'SK', label: 'Saskatchewan' },
        { value: 'AB', label: 'Alberta' },
        { value: 'NL', label: 'Newfoundland and Labrador' },
    ]


    const onClick=()=>{
        if (province!=null){
            navigate(`/home`)
        }else{

            toast.error("Please select your province",{
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
              })
            document.getElementById('card').style.border='0.1rem solid red';
            document.getElementById('card').style.borderRadius='0.3rem';

            setTimeout(() => {
                document.getElementById('card').style.border='0.1rem solid black';
            }, 2000);
        }
    }
  return(<Fragment>
            <div className={classes.overlay}>
                <Card  style={{borderWidth:0,boxShadow:"none",height:"30rem"}} >
                    <div className={classes.wrapper} >
                        <label htmlFor='select' className={classes.label}>Select your province</label>
                        <Select
                            id="card"
                            className={classes.control} 
                            components={animatedComponents}
                            onChange={options=>{setProvince(options)}}
                            options={provinceOptions}
                            placeholder="select province"
                            />
                        <div className={classes.button}>    
                           <Button style={{backgroundColor:"#11acac", borderWidth:0}} onClick={onClick}>Next</Button>     
                        </div>  
                    </div>                
                </Card>
            </div>
         </Fragment>)
}


export default Opening;