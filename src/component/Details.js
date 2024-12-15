    import React, { useEffect, useState } from 'react'
    import axios from 'axios'
    import { Link,Route,Routes } from 'react-router-dom';

    const Details = () => {

        var [del,setDel] = useState(1);
        var [data,setData] = useState([]);
        async function getData() {
            var data = await axios.get('https://json-server-for-crud-operations.onrender.com/users')
            setData(data.data)
        }

        useEffect(()=>{
            getData();
        },[del])

        function handleDelete(id){
            axios.delete(`https://json-server-for-crud-operations.onrender.com/users/${id}`).then((res)=>{
                console.log(res);
                setDel(del=>del+1);
            }).catch((rej)=>{
                console.log(rej);
            })
        }
        
    return (<>
        <div className='bg-gray-200 text-center w-screen m-0.5'>
            <div className='flex flex-col items-center'>
            <h1 className='text-4xl text-black-500'>Student Details</h1>
                {data.map(ele=>{return (
                    <div className='bg-blue-300 text-white  m-2 h-full w-2/3 rounded-2xl p-1'> 
                        <h1 className='text-2xl text-black m-1'>{ele.name}</h1>
                        <p className='text-1xl'>{ele.age}</p>
                        <p className='text-1xl'>{ele.email}</p>
                        <p className='text-1xl'>{ele.password}</p>
                        <p className='text-1xl'>{ele.country}</p>
                        <div className='flex flex-row justify-center'>
                            <Link to={`/CRUD-operations-on-React-App/details/updateRecord/${ele.id}`} ><button  className='rounded-3xl w-24 m-1 bg-green-500 p-1 flex items-center justify-center'>
                            <svg width="25px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className='m-1 text-gray-100'>Edit</span>
                            </button>
                            </Link>
                            <button onClick={()=>handleDelete(ele.id)} className='rounded-3xl w-24 m-1 bg-red-500 p-1 flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                            </svg>
                            <span className='m-1 text-gray-100'>Delete</span>
                            </button>
                        </div>
                    </div>
                )} )}
            </div>
        </div>
        </>
    )
    }

    export default Details
