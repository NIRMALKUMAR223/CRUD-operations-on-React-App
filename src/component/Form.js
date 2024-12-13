import React, { useState } from 'react';
import axios from 'axios';
import Model from './Model'; 

const Form = () => {

    const [showModal, setShowModal] = useState(false);
    const [inputValues, setInputValues] = useState({
            name: '',
            age: '',
            email: '',
            password: '',
            country:''
    });

    function updateState(e){
        const name = e.target.name;
        const value = e.target.value;
        setInputValues((previousDocs)=>{
            return {...previousDocs, [name]:value}
        })
    }

    function closeModal() {
      setShowModal(false); 
    }

    function record(){
      var {name,age,email,password,country} = inputValues;
      if (name!='' && age!='' && email!='' && password!='' && country!=''){
        axios.post('https://json-server-for-crud-operations.onrender.com/users',{name,age,email,password,country}).then((res)=>{
          console.log('Data add to server');
          setShowModal(true);
        }).catch((rej)=>{
          console.log('Data not added');
          setShowModal(false); 
        })}
      else{
        setShowModal(false); 
      }
    }

    return (
      <div className='bg-gray-200 text-center w-62 m-2'>
            <div className='bg-blue-300 p-2 w-92 rounded-2xl text-2xl' >
            <h1 className='text-4xl text-black-500'>Add Student Details</h1>
                <label className='p-1 text-gray-800' >Enter your name : <input value={inputValues.name} className='m-2 rounded p-0.5' type='text' placeholder=' Name' name='name' onChange={updateState}/></label><br/>
                <label className='p-1 text-gray-800'>Enter your age : <input value={inputValues.age} className='m-2 rounded p-0.5' type='number' placeholder=' Age' name='age' onChange={updateState}/></label><br/>
                <label className='p-1 text-gray-800'>Enter your email : <input value={inputValues.email}  className='m-2 rounded p-0.5' type='email' placeholder=' Email' name='email' onChange={updateState}/></label><br/>
                <label className='p-1 text-gray-800'>Enter your password : <input value={inputValues.password} className='m-2 rounded p-0.5' type='password' placeholder=' Password' name='password' onChange={updateState}/></label><br/>
                <label className='p-1 text-gray-800'>Enter your country : 
                    <select className='rounded p-0.5 m-1' name='country' value={inputValues.country}  onChange={updateState}>
                        <option value=''>Select</option>
                        <option value='India'>India</option>
                        <option value='Germany'>Germany</option>
                        <option value='Dubai'>Dubai</option>
                    </select>
                </label><br/>
                {showModal && 
                <Model
                  showModal={showModal}
                  closeModal={closeModal}
                  message="Form submitted successfully!"
                />}
                <button onClick={record}  className='bg-green-600 p-3 rounded-xl text-white' >Submit</button>
            </div>
        </div>
  )
}
export default Form