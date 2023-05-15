import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useParams }  from 'react-router-dom'
import ViewUserProfile from './ViewUserProfile'
import * as profileAPI from '../../utilities/profile-api'
import { AuthContext } from '../App'

const initialProfile = {
    title: "",
    bio: "",
    location: "",
    website: "",
    }

export default function UserProfile() {
    const userId = useParams()
    const [profile, setProfile] = useState(initialProfile)
    const [profileExists, setProfileExists] = useState(false)
    const { user, setUser } = useContext(AuthContext)

    // loads the screen with a user's profile information, if any. 
    // if no user profile exists, the profileExists state is set to false
    useEffect(()=>{
        async function getProfile(){
            const profile = await profileAPI.getUserProfile(userId.userid)      
            if (profile.profile === "None"){
                setProfileExists(false)
            } else if (profile.profile !== "None") {
                setProfile(profile.profile)
                setProfileExists(true)
            }
            console.log(profile)
        }
        getProfile()
    },[])


    return (
        <>
            <div>
                <Navbar/>
                <div className="mt-20 gap-5 flex flex-col items-center ">
                    <div className="shadow-md w-60 sm:w-60 md:w-80 lg:w-96 mb-1 p-3 pt-4 border-zinc-400 text-regal  rounded-md">
                        {
                        profileExists ?
                            <ViewUserProfile 
                                profile={ profile }
                                profileExists={ profileExists } />
                        :    
                        "User not found"
                        }        
                    </div>
                </div>
            </div>
        </>   
    )
}
