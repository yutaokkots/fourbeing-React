import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../Pages/App'
import { Link } from 'react-router-dom'


export default function AddPostButton() {
    const { user, setUser } = useContext(AuthContext)
    // const navigate = UseNavigate()

    return (
        <>
            <div className="p2 mt-5">
            {
            user ? 
            <Link 
                to="/createpost" 
                className="bg-regallight btn-sm hover:bg-regal text-white font-bold y-1 px-4 rounded-full transition duration-300">
                    Post</Link>

            :
            <Link 
                to="/login" 
                className="bg-regallight hover:bg-regal text-white font-bold py-1 px-4 rounded-full">
                    Login to Post</Link>

            }
            </div>
        </>
    )
}

{/* <button
className="bg-regallight hover:bg-regal text-white font-bold py-2 px-4 rounded-full"
type="submit"
onSubmit={handleClick} 
>Create a Post</button>    */}