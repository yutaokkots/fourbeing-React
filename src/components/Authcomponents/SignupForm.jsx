import React from 'react'
import { useState, useContext } from 'react'
import * as userService from '../../utilities/users-service'
import { Link, useNavigate  } from 'react-router-dom'
import { AuthContext } from "../../Pages/App"
import * as usersAPI from '../../utilities/users-api'

const initialState = {
    username: '',
    email: '',
    password:'',
    passwordConfirm:''
}

export default function LoginForm() {
    const [credentials, setCredentials] = useState(initialState);
    const navigate = useNavigate()
    const { user, setUser } = useContext(AuthContext)
    const [error, setError] = useState('');

    const disable = false;

    function handleChange(evt){
        setCredentials({...credentials, [evt.target.name]:evt.target.value})
    }
    // handlesubmit() -> invokes signUp() function 
    async function handleSubmit(evt){
        evt.preventDefault();
        await userService.signUp(credentials).
        then((response) => {
            setUser(response)
            setUser(userService.getUser)
        }).then(()=>{
            navigate("/")
        }).catch((error) => {
            setError('Signup Failed - Try Again', error);
        })
    }

    return (
        <>
            <div className="bg-white shadow-md w-9/12 mb-1 p-3 pt-4 border-zinc-400 text-regal  rounded-md">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className='relative flex-row justify-between mt-2 mb-2'>
                        <label>username</label>
                        <input 
                            className="w-full resize-y h-auto border border-gray-300 rounded-md px-2 y-2"
                            type="text" 
                            name="username" 
                            value={credentials.username}
                            onChange={handleChange}
                            required></input>
                    </div>
                    <div className='relative flex-row justify-between mt-2 mb-2'>
                        <label>email</label>
                        <input 
                            className="w-full resize-y h-auto border border-gray-300 rounded-md px-2 y-2"
                            type="email" 
                            name="email" 
                            value={credentials.email}
                            onChange={handleChange}
                            required></input>
                    </div>
                    <div className='relative flex-row justify-between mt-2 mb-2'>
                        <label>password</label>
                        <input 
                            className="w-full resize-y h-auto border border-gray-300 rounded-md px-2 y-2"
                            type="password" 
                            name="password" 
                            value={credentials.password}
                            onChange={handleChange}
                            required></input>
                    </div>
                    <div className='relative flex-row justify-between mt-2 mb-2'>
                        <label>confirm password</label>
                        <input 
                            className="w-full resize-y h-auto border border-gray-300 rounded-md px-2 y-2"
                            type="password" 
                            name="passwordConfirm" 
                            value={credentials.passwordConfirm}
                            onChange={handleChange}
                            required></input>
                    </div>
                    <div className="flex flex-col items-center ">
                        <button 
                            className=' bg-moonlight hover:bg-land hover:text-vanilla py-1 px-4 rounded mt-5 mb-3' 
                            type="submit" 
                            >Sign up</button>
                    </div>
                </form>

            </div>
        </>
    )
}

// 'midnight': '#091123',
// 'afterhour':'#212A3E',
// 'moonlight':'#F1F6F9',
// 'regal': '#34172D',
// 'lining':'#d678a4',