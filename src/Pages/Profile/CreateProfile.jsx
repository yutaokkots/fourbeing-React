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

export default function CreateProfile( { user, profile, editorChooser, profileExists, setProfile }) {
    const [profileInfo, setProfileInfo] = useState(profile)
    const [error, setError] = useState('');
    
    function handleChange(evt) {
        setProfileInfo({ ...profileInfo, [evt.target.name]: evt.target.value });
      }
    
    // makes a POST request to the server to create a user profile
    async function editProfile(info){
        if (profileExists) {
            await profileAPI.editProfile(info)
                .then((response)=>{
                    setProfile(response)
                    editorChooser()
                }).catch((error) => {
                    console.log(error)
                    setError("There was an error")
                })
        } else
            await profileAPI.createProfile(info)
                .then((response)=>{
                    setProfile(response)
                    editorChooser()
                })
                .catch((error) => {
                    console.log(error)
                    setError("There was an error")
                })
        }


    // handleSubmit activated when form is submitted, activates 'editProfile' function above. 
    function handleSubmit(evt){
        evt.preventDefault()
        profileInfo.username = user
        editProfile(profileInfo)
    }

    // makes the "editProfile" state false to go back to the previous screen
    function handleClick(){
        editorChooser()
    }

    return (
    <>    
        <div className="">Create/Edit Profile</div>
        <form
            onSubmit={handleSubmit}>
            <div className='relative  flex-row justify-between'>
                <label>Title:</label>
                <input
                    className="w-full border border-gray-300 rounded-md px-2 y-2"
                    type="text"
                    name="title"
                    value={ profileInfo.title }
                    onChange={handleChange}
                    ></input>
            </div>
            <div className='relative  flex-row justify-between'>
                <label>Bio:</label>
                <textarea
                    className="w-full resize-y h-auto border border-gray-300 rounded-md px-2 y-2"
                    type="text"
                    name="bio"
                    value={ profileInfo.bio }
                    onChange={handleChange}
                    ></textarea>
            </div>
            <div className='relative  flex-row justify-between'>
                <label>Location:</label>
                <input
                    className="w-full border border-gray-300 rounded-md px-2 y-2"
                    type="text"
                    name="location"
                    value={ profileInfo.location }
                    onChange={handleChange}
                    ></input>
            </div>
            <div className='relative  flex-row justify-between'>
                <label>Website:</label>
                <input
                    className="w-full border border-gray-300 rounded-md px-2 y-2"
                    type="text"
                    name="website"
                    value={ profileInfo.website }
                    onChange={handleChange}
                    ></input>
                <div
                    className="pt-4 flex flex-col items-center">
                    <div>
                        {(error === "There was an error") && "There was an error"}
                    </div>
                    <div
                        className="my-2">
                        
                        <button
                            className="bg-regallight hover:bg-regal text-white font-bold py-1 px-4 rounded-full"
                            type="submit"
                            >save</button>
                    </div>
                    <div>
                        <button
                            className=""
                            onClick={handleClick}>
                            ⬅ Go back
                        </button>
                    </div>
                </div>
            </div>

        </form>
    </>

  )
}

CreateProfile.propTypes = {
    user: PropTypes.string,
    profile: PropTypes.object,
    editorChooser: PropTypes.func,
    profileExists: PropTypes.bool,
    setProfile: PropTypes.func,
    setEditProfile: PropTypes.func
  }
  