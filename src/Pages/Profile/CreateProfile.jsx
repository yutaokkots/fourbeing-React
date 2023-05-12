import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as profileAPI from '../../utilities/profile-api'

const initialState = {
    user_id: "",
    username: "",
    title: "",
    bio: "",
    location: "",
    website: "",
}

export default function CreateProfile( { user, profileEditor, profileExists }) {
    const [profileInfo, setProfileInfo] = useState(initialState)

    function handleChange(evt) {
        setProfileInfo({ ...profileInfo, [evt.target.name]: evt.target.value });
      }
    
    // makes a POST request to the server to create a user profile
    async function editProfile(info){
        
        const profile = profileExists ? await profileAPI.editProfile(info) : await profileAPI.createProfile(info)
        //const profile = await profileAPI.editProfile(info)

    }

    // handleSubmit activated when form is submitted, activates 'editProfile' function above. 
    function handleSubmit(evt){
        evt.preventDefault()
        profileInfo.username = user
        editProfile(profileInfo)
        profileEditor()
    }

    return (
    <>    
        <div>CreateProfile</div>
        <form
            onSubmit={handleSubmit}>
            <div className='relative  flex-row justify-between'>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={ profileInfo.title }
                    onChange={handleChange}
                    ></input>
            </div>
            <div className='relative  flex-row justify-between'>
                <label>Bio:</label>
                <input
                    type="text"
                    name="bio"
                    value={ profileInfo.bio }
                    onChange={handleChange}
                    ></input>
            </div>
            <div className='relative  flex-row justify-between'>
                <label>Location:</label>
                <input
                    type="text"
                    name="location"
                    value={ profileInfo.location }
                    onChange={handleChange}
                    ></input>
            </div>
            <div className='relative  flex-row justify-between'>
                <label>Website:</label>
                <input
                    type="text"
                    name="website"
                    value={ profileInfo.website }
                    onChange={handleChange}
                    ></input>
                <button
                    className="bg-regallight hover:bg-regal text-white font-bold py-2 px-4 rounded-full"
                    type="submit"
                    >submit</button>
            </div>

        </form>
    </>

  )
}

CreateProfile.propTypes = {
    user: PropTypes.string,
    profileEditor: PropTypes.func,
    profileExists: PropTypes.bool
  }
  