import React, { useState } from 'react'
import * as profileAPI from '../../utilities/profile-api'

const initialState = {
    title: "",
    bio: "",
    location: "",
    website: "",
}

export default function CreateProfile( {profileEditor }) {
    const [profileInfo, setProfileInfo] = useState(initialState)

    function handleChange(evt) {
        setProfileInfo({ ...profileInfo, [evt.target.name]: evt.target.value });
      }
    
    async function editProfile(info){
        const profile = await profileAPI.getProfile(info)
    }

    function handleSubmit(evt){
        evt.preventDefault()
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
                <label>Title:</label>
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
