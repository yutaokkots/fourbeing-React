import React, { useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import { AuthContext } from "../../Pages/App"

const initialState = {
    username: '',
    password: ''
}

export default function LoginForm() {
    const { user, setUser } = useContext(AuthContext)
    const [credentials, setCredentials] = useState(initialState);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    
    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
        }
    
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const userInfo = await userService.login(credentials);
            setUser(userInfo);
        } catch {
            setError('Log In Failed - Try Again');
        }
        navigate("/")
    }

  


    return (
        <>
            <div className="shadow-md w-60 sm:w-60 md:w-80 lg:w-96 mb-1 p-3 pt-4 border-zinc-400 text-regal  rounded-md">
                <form 
                    autoComplete="off" 
                    onSubmit={handleSubmit}>
                    <div className='relative flex-row justify-between  mt-2 mb-2'>
                        <div><label>Username</label></div>
                        <div><input 
                            className="w-full resize-y h-auto border border-gray-300 rounded-md px-2 y-2"
                            type="text" 
                            name="username" 
                            value={credentials.login} 
                            onChange={handleChange} 
                            required /></div>
                    </div>

                    <div className='relative flex-row justify-between'>
                        <div><label>Password</label></div>
                        <div><input 
                            className="w-full resize-y h-auto border border-gray-300 rounded-md px-2 y-2"
                            type="password" 
                            name="password" 
                            value={credentials.password} 
                            onChange={handleChange} 
                            required /></div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <button 
                        className=' bg-moonlight hover:bg-land hover:text-vanilla py-1 px-4 rounded mt-5 mb-3'  
                        type="submit"
                        >Log in</button>
                    </div>
                    </form>

                <p className="error-message">&nbsp;{error}</p>
            </div>
        
        </>
    )
}



