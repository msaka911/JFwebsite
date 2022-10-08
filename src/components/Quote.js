import { Fragment, useRef,useState } from 'react';

import Select from 'react-select'
import makeAnimated from 'react-select/animated';

import { useAlert } from 'react-alert'

import classes from './Quote.module.css';
import validator from 'validator';

const Form = (props) => {
//------------options for select------------
  const animatedComponents = makeAnimated();
  const options = [
    { value: 'free of accident', label: 'Free of Accident' },
    { value: 'free of repair', label: 'Free of repair' },
    { value: 'second-hand', label: 'Second-Hand' },
    { value: 'lease transfer', label: 'Lease Transfer' },
  ]
  const[selected,setSelect]=useState([]);

//----------------------------------------
  const alert = useAlert()

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
  const country=useRef("")


  function submitFormHandler(event) { 
    event.preventDefault();
    const axios = require('axios');
    const enteredFirstName = firstnameInputRef.current.value;
    const enteredLastName = lastnameInputRef.current.value;

    const enteredContact=contactRef.current.value;
    const enteredAddress=addressRef.current.value;
    const enteredEmail=emailRef.current.value;

    const enteredYear=year.current.value
    const enteredAppointment=appointmentRef.current.value
    const enteredVin=vin.current.value

    //--------------check email, zip code, phone number---------------------//

    if(!validator.isMobilePhone(enteredContact,['en-CA'])){
      document.getElementById('contact').style.borderColor='red';
      alert.error("Please enter valid phone number",{onClose:()=>{
        document.getElementById('contact').style.borderColor='black';
        
      }}
      )
      return
    }
    if(!validator.isPostalCode(enteredAddress,['CA'])){
      document.getElementById('address').style.borderColor='red';
      alert.error("Please enter valid zip code",{onClose:()=>{
        document.getElementById('address').style.borderColor='black';
      }})
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
            <label htmlFor='contact'>Contact</label>
            <input type='text' placeholder='Tel' id='contact' ref={contactRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='contact'>Email</label>
            <input type='email' placeholder='Email' id='email' ref={emailRef} />
          </div>
          </div>

          <div className={classes.selection}>
            <div className={classes.control}>
                <label htmlFor='text'>Address
                <input type='address' placeholder='Address' id='vin' ref={address} />

                </label>
            </div>
            <div className={classes.control}>
                <label htmlFor='text'>Province
                <input type='text' placeholder='Province' id='province' ref={vin} />
                </label>
            </div>
            <div className={classes.control}>
                <label htmlFor='text'>Country<input type='text' placeholder='country' id='country' ref={country} />
                </label>
            </div>
          </div>

          <div className={classes.control}>
              
         <div className={classes.selection}>
         <label>Birthday
         <input
          id="birthday"
          type="date"
          ref={birthday}
            />
         </label>
         {/* <label>Brand/Model
         <input
          id="brand"
          type="text"
          ref={brand}
            />
         </label>
         <label>Manufactured Year
         <input
          type="number"
          min="2000"
          max="2050"
          ref={year}
            />
         </label> */}
         </div>
          <label htmlFor='select'>Selection for extra details</label>
          <Select 
          // closeMenuOnSelect={false}
          className={classes.control} 
          components={animatedComponents}
          isMulti
          onChange={options=>{setSelect(options)}}
          options={options}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='postal code'>Postal Code</label>
            <input  className={classes.postal} type='text' placeholder='Zip Code' id='address' ref={addressRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='appointment'>Vehicle Detail</label>
            <textarea type='text' rows={3} placeholder='Detail' id='appointment' ref={appointmentRef} />
          </div>
          <div className={classes.actions}>
            <button onClick={submitFormHandler} className='btn'>Submit</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Form;