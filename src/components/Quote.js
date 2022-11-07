import { Fragment, useRef,useState } from 'react';

import Select from 'react-select'
import makeAnimated from 'react-select/animated';


import classes from './Quote.module.css';
import validator from 'validator';
import { flexbox } from '@mui/system';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = (props) => {
//------------options for select------------
  const animatedComponents = makeAnimated();
  const options = [
    { value: 'student', label: 'Student insurance' },
    { value: 'visitor', label: 'Vistor insurance' },
    { value: 'travel', label: 'Travel insurance' },
  ]
  const[selected,setSelect]=useState([]);
  const[province,setProvince]=useState([]);

  const [countryOrigin,selectCountry]=useState()
  const [region,selectRegion]=useState()


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

//----------------------------------------

  const firstnameInputRef = useRef();
  const lastnameInputRef = useRef();

  const contactRef=useRef();
  const emailRef=useRef()
  const addressRef=useRef();
  const appointmentRef=useRef("");
  const birthday=useRef();
  const brand=useRef("")
  const year=useRef("")
  const vin=useRef("")
  const address=useRef("")
  const suite=useRef("")

  function submitFormHandler(event) { 
    event.preventDefault();
    const axios = require('axios');
    const enteredFirstName = firstnameInputRef.current.value;
    const enteredLastName = lastnameInputRef.current.value;

    const enteredContact=contactRef.current.value;
    const enteredAddress=addressRef.current.value;
    const enteredEmail=emailRef.current.value;
    const enteredSuite=suite.current.value;

    const enteredYear=year.current.value
    const enteredAppointment=appointmentRef.current.value

    //--------------check email, zip code, phone number---------------------//

    if(!validator.isMobilePhone(enteredContact,['en-CA'])){
      document.getElementById('contact').style.borderColor='red';
      toast.error("Please enter valid phone number",{
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      
      setTimeout(() => {
        document.getElementById('contact').style.borderColor='black';
      }, 5000);

      return
    }
    if(!validator.isPostalCode(enteredAddress,['CA'])){
      document.getElementById('address').style.borderColor='red';


      toast.error("Please enter valid zip code",{
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setTimeout(() => {
        document.getElementById('address').style.borderColor='black';
      }, 5000);
      return
    }
    // if(validator.isMobilePhone(enteredContact,['en-CA'])&&validator.isEmail(enteredEmail)){
    //     axios.post('https://mybackend1.herokuapp.com/appointment',{
    //       name: enteredName,
    //       contact:enteredContact,
    //       address:enteredAddress,
    //       brand: enteredBrand,
    //       vin:enteredVin,
    //       mileage:enteredDistance,
    //       manufacture:enteredYear,
    //       appointment:enteredAppointment
    //     })
    //     .then(function (response) {
    //     alert.show("Thanks! \n We will process your request asap")
    //     document.getElementById('name').value="";
    //     document.getElementById('contact').value="";
    //     document.getElementById('address').value=""
    //     document.getElementById('vin').value=""
    //     document.getElementById('mileage').value=""
    //     document.getElementById('brand').value=""
    //     document.getElementById('appointment').value=""
    //     })
    //     .catch(function (error) {
    //       alert.error("cannot send the data")
    //     })
    // }
    // else{
    //     alert.error("Please fill valid contents")
    // }
  }


  return (
    <Fragment>
      <div className={classes.card} clicked={props.clicked}>
        <form
          className={classes.form}
          onSubmit={submitFormHandler}
        >
        <h2 style={{fontWeight:"600",justifyContent:"center",display:"flex",borderBottom:"0.1rem solid black",paddingBottom:"2rem"}}>Quote</h2>

        <h3 style={{justifyContent:"flex-start",display:"flex",marginBottom:"1rem"}}>Personal Info</h3>

        <div className={classes.selection}>
            <div className={classes.control}>
                <label htmlFor='name'>First Name</label>
                <input type='text' placeholder='first name' id='firstname' ref={firstnameInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='name'>Last Name</label>
                <input type='text' placeholder='last name' id='lastname' ref={lastnameInputRef} />
            </div>
          </div>

          <div className={classes.selection}>
            <div className={classes.control}>
                <label>Birthday</label>
                <input id="birthday"
                type="date"
                ref={birthday}
                    />
                
            </div>

          <div className={classes.control}>
            <label htmlFor='contact'>Contact</label>
            <input type='text' placeholder='Tel' id='contact' ref={contactRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='contact'>Email</label>
            <input type='email' placeholder='Email' id='email' ref={emailRef} />
          </div>
          </div>

          <div className={classes.selection} style={{paddingBottom:"2rem",marginTop:"1rem"}}>
            <div className={classes.control} style={{width:"100%"}}>
                    <label style={{justifyContent:'center',display:'flex'}} htmlFor='text' >Country of Origin
                    </label>
                    <div style={{position:'relative',marginTop:"1rem"}}>
                        <CountryDropdown
                        style={{border:"0.1rem solid black",borderRadius:"0.3rem"  ,height:"2.3rem"}}
                        value={countryOrigin}
                        onChange={(val) => selectCountry(val)} />
                        <RegionDropdown
                        style={{border:"0.1rem solid black",borderRadius:"0.3rem",height:"2.3rem",marginLeft:"0.2rem"}}
                        country={countryOrigin}
                        value={region}
                        onChange={(val) => selectRegion(val)} />
                    </div>
                </div>
            </div>

          <div className={classes.selection}>
          <div className={classes.control}>
                <label htmlFor='text'>Suite number
                </label>
                <input type='address' placeholder='Suite' id='suite' ref={suite} />
            </div>
            <div className={classes.control}>
                <label htmlFor='text'>Address
                </label>
                <input type='address' placeholder='Address' id='address' ref={address} />
            </div>
            <div className={classes.control}>
                <label htmlFor='select' style={{width:"10rem"}}>Province</label>
                <Select 
                    className={classes.control} 
                    components={animatedComponents}
                    onChange={options=>{setProvince(options)}}
                    options={provinceOptions}
                    placeholder="select province"
                    />
                </div>
          </div>

          <div className={classes.control} style={{borderBottom:"0.1rem solid black",paddingBottom:"2rem"}}>
            <div className={classes.control}>
            <label htmlFor='postal code'>Postal Code</label>
            <input  className={classes.postal} type='text' placeholder='Zip Code' id='address' ref={addressRef} />
            </div>
          </div>

          <div className={classes.control}>
              
         <div className={classes.selection}>

         </div>
         <h3 style={{justifyContent:"flex-start",display:"flex",marginBottom:"1rem"}}>Product Selection</h3>

         <div className={classes.control}>
            <label htmlFor='select'>Selection for details</label>
            <Select 
            // closeMenuOnSelect={false}
            className={classes.control} 
            components={animatedComponents}
            onChange={options=>{setSelect(options)}}
            options={options}/>
            </div>
          </div>

          <div className={classes.control}>
            <label htmlFor='appointment'>Trip Detail</label>
            <textarea type='text' rows={3} placeholder='Detail' id='appointment' ref={appointmentRef} />
          </div>
          <div className={classes.actions}>
            <button onClick={submitFormHandler} className={classes.btn}>Submit</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;