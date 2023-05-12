import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../App'

export default function ViewProfile({ profileEditor, profileExists, profile }) {
    const { user, setUser } = useContext(AuthContext)

    return (
        <>
            <div className="rounded-full"></div>
            {user &&
                <>
                    <div>{user}</div>
                    <div>{ profile.title }</div>
                    <div>{ profile.bio }</div>
                    <div>{ profile.location }</div>
                    <div>{ profile.website }</div>
                </>
            }
            <button
                className="bg-regallight hover:bg-regal text-white font-bold py-2 px-4 rounded-full" 
                type="button"
                onClick={profileEditor}
                >
                {
                profileExists ?
                "Edit"
                :    
                "Create Profile"
                }
                    
                </button>
            <div></div>
        </>
    )
}

ViewProfile.propTypes = {

    profileEditor: PropTypes.func,
    profileExists: PropTypes.bool
  }
  