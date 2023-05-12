import React, { useContext } from 'react'
import { AuthContext } from '../../Pages/App'
import { Link } from 'react-router-dom'

export default function AddPostButton() {
    const { user, setUser } = useContext(AuthContext)
    // const navigate = UseNavigate()


    return (
        <>
            <div>AddPost</div>
            {
            user ? 
            <Link 
                to="/login" 
                className="bg-regallight hover:bg-regal text-white font-bold py-2 px-4 rounded-full">
                    Post</Link>

            :
            <Link 
                to="/login" 
                className="bg-regallight hover:bg-regal text-white font-bold py-2 px-4 rounded-full">
                    Login to Post</Link>

            }

        </>
    )
}

{/* <button
className="bg-regallight hover:bg-regal text-white font-bold py-2 px-4 rounded-full"
type="submit"
onSubmit={handleClick} 
>Create a Post</button>    */}