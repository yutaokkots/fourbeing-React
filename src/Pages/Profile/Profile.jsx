import React, { useState, useEffect, useContext } from 'react'
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
            
            if (profile.profile === "None"){
                setProfileExists(false)
            } else if (profile.profile !== "None") {
                setProfile(profile.profile)
                setProfileExists(true)
                console.log(profile.profile)
            }
        }
        getProfile()
    },[])

    // toggles between showing the profile and editing the profile. 
    function profileEditor(){
        setEditProfile(!editProfile)
    }

    return (
        <>
            <div>
                <Navbar/>
                <div className="mt-16">
                    <div className="grid grid-cols-7 gap-5">
                        <div className='flex flex-col bg-moonlight col-start-2 col-span-2 items-center'>
                            { editProfile ?
                            <CreateProfile 
                                user={user}
                                profileEditor={ profileEditor } 
                                profileExists={ profileExists } />
                            :
                            <ViewProfile 
                                profile={ profile }
                                profileEditor={ profileEditor }
                                profileExists={ profileExists } />
                            }
                        </div>

                        <div className='bg-regal col-start-4 col-span-3'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
// 'midnight': '#091123',
// 'afterhour':'#212A3E',
// 'moonlight':'#F1F6F9',
// 'regal': '#34172D',
// 'regallight': '#5c4556',
// 'lining':'#d678a4',