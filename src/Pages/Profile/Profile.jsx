import React, { useState, useEffect, useContext } from 'react'
import { useParams }  from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import * as profileAPI from '../../utilities/profile-api'
import { AuthContext } from '../App'
import CreateProfile from './CreateProfile'
import ViewProfile from './ViewProfile'

const initialProfile = {
    title: "",
    bio: "",
    location: "",
    website: "",
    }

export default function Profile() {
    const userId = useParams()
    const [profile, setProfile] = useState(initialProfile)
    // holds bool state to show Profile or CreateProfile components
    const [profileExists, setProfileExists] = useState(false)
    const { user, setUser } = useContext(AuthContext)
    const [editProfile, setEditProfile] = useState(false)

    // loads the screen with a user's profile information, if any. 
    // if no user profile exists, the profileExists state is set to false
    useEffect(()=>{
        async function getProfile(){
            const profile = await profileAPI.getProfile()      
            console.log(profile)   
            if (profile.profile === "None"){
                setProfileExists(false)
            } else if (profile.profile !== "None") {
                setProfile(profile.profile)
                setProfileExists(true)
            }
        }
        getProfile()
    },[editProfile])

    // toggles between showing the profile and editing the profile. 
    function profileEditor(){
        setEditProfile(!editProfile)
    }

    return (
        <>
            <div>
                <Navbar/>
                <div className="mt-20 gap-5 flex flex-col items-center ">
                    <div className="bg-white shadow-md w-60 sm:w-60 md:w-80 lg:w-96 mb-1 p-3 pt-4 border-zinc-400 text-regal  rounded-md">
                            { editProfile ?
                            <CreateProfile 
                                user={user}
                                profile={ profile }
                                profileEditor={ profileEditor } 
                                profileExists={ profileExists }
                                setEditProfile={ setEditProfile }
                                setProfile={setProfile} />
                            :
                            <ViewProfile 
                                profile={ profile }
                                profileEditor={ profileEditor }
                                profileExists={ profileExists } />
                            }
                        </div>

                </div>
            </div>
        </>
    )
}
