import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import Model from './Model'; 
import { Link, useNavigate } from 'react-router-dom';
// import Details from './Details';
import { useParams } from 'react-router-dom';

const Update = () => {

    const [showModal, setShowModal] = useState(false);
    const [inputValues, setInputValues] = useState({
            name: '',
            age: '',
            email: '',
            password: '',
            country:''
    });
    var {id} = useParams();   
    var navigator = useNavigate(); 
    useEffect(()=>{
        axios.get(`https://json-server-for-crud-operations.onrender.com/users/${id}`).then((res)=>{            
            setInputValues({
                name: res.data.name,
                age: res.data.age,
                email: res.data.email,
                password: res.data.password,
                country: res.data.country
            });          
        }).catch((rej)=>{
            console.log(rej);
        })
    },[id])
    
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
    function update(){
        var {name,age,email,password,country} = inputValues;
        if (name!='' && age!='' && email!='' && password!='' && country!=''){
          axios.patch(`https://json-server-for-crud-operations.onrender.com/users/${id}`,{name,age,email,password,country}).then((res)=>{
            console.log('Data add to server');
            setShowModal(true);
          }).catch((rej)=>{
            console.log('Data not added');
            setShowModal(false); 
          })}
        else{
          setShowModal(false); 
        }           
        setTimeout(()=>{
            navigator('/details')
        },3000) 
    }

  return (
    <div className='bg-gray-200 text-center w-62 m-2'>
            <div className='bg-blue-300 p-2 w-92 rounded-2xl text-2xl' >
                <h1 className='text-3xl m-2 text-3xl text-white'>Update Student Records</h1>
                <label className='p-1 '>Enter your name : <input value={inputValues.name}  className='m-2 rounded p-0.5' type='text' placeholder=' Name' name='name' onChange={updateState}/></label><br/>
                <label className='p-1 '>Enter your age : <input value={inputValues.age} className='m-2 rounded p-0.5' type='number' placeholder=' Age' name='age' onChange={updateState}/></label><br/>
                <label className='p-1 '>Enter your email : <input  value={inputValues.email} className='m-2 rounded p-0.5' type='email' placeholder=' Email' name='email' onChange={updateState}/></label><br/>
                <label className='p-1 '>Enter your password : <input value={inputValues.password} className='m-2 rounded p-0.5' type='password' placeholder=' Password' name='password' onChange={updateState}/></label><br/>
                <label className='p-1 '>Enter your country : 
                    <select className='rounded p-0.5 m-1' name='country' value={inputValues.country} onChange={updateState}>
                        <option value='India'>India</option>
                        <option value='Germany'>Germany</option>
                        <option value='Dubai'>Dubai</option>
                    </select>
                </label><br/>
                {showModal && 
                <Model
                  showModal={showModal}
                  closeModal={closeModal}
                  message="updated submitted successfully!"
                />}
            <div className='bg-blue-300 text-center w-screen'>
                <Link to='/details'><button className='bg-green-500 text-white rounded-2xl p-2 w-24 text-2xl m-3'>Cancel</button></Link>
                <button className='bg-red-500 text-white rounded-2xl p-2 w-24 text-2xl m-3' onClick={update}>Save</button>
            </div>  
              </div>
        </div>
  )
}

export default Update
