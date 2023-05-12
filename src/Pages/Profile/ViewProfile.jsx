import React, {useContext} from 'react'
import { AuthContext } from '../App'

export default function ViewProfile({ profileEditor }) {
    const { user, setUser } = useContext(AuthContext)

    return (
        <>
            <div className="rounded-full"></div>
            {user &&
                <>
                    <div>{user}</div>
                    <div>Title</div>
                    <div>Bio</div>
                    <div>description</div>
                    <div>location</div>
                    <div>website</div>
                </>
            }
            <button
                className="bg-regallight hover:bg-regal text-white font-bold py-2 px-4 rounded-full" 
                type="button"
                onClick={profileEditor}
                >Create Profile
                </button>
            <div></div>
        </>
    )
}
