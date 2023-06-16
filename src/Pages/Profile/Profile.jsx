import React, { useState, useEffect, useContext } from 'react'
import { useParams }  from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import EditPhoto from '../../components/ProfilePhoto/EditPhoto'
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
    const [editProfile, setEditProfile] = useState(0)
    const [profilePhoto, setProfilePhoto] =  useState("")
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
            }
        }
        async function getProfilePhoto(){
            const profilePhotoRes = await profileAPI.getProfilePhoto()
            if (profilePhotoRes.photo.url === "undefined"){
                setProfilePhoto("")
            } else if (profilePhotoRes.photo.url !== "undefined"){
                setProfilePhoto(profilePhotoRes.photo.url)
            }
        }
        getProfile()
        getProfilePhoto()
    },[editProfile])

    function setPhoto(photoUrl){
        setProfilePhoto(photoUrl)
    }


    // toggles between showing the profile, editing the profile, and editing a photo
    function editorChooser(pageNum=0){
        setEditProfile(pageNum)
    }

    return (
        <>
            <div className="bg-gradient-to-b h-screen from-emerald-100 via-slate-50 to-transparent">
                <Navbar/>
                <div className="pt-20 gap-5 flex flex-col items-center ">
                    <div className="bg-white shadow-md w-60 sm:w-60 md:w-80 lg:w-96 mb-1 p-3 pt-4 border-zinc-400 text-regal  rounded-md">
                            { editProfile == 0 && 
                                <ViewProfile 
                                profile={ profile }
                                editorChooser={ editorChooser }
                                profileExists={ profileExists }
                                profilePhoto={ profilePhoto }
                                />
                            }
                            { editProfile == 1 && 
                            <CreateProfile 
                                user={user}
                                profile={ profile }
                                editorChooser={ editorChooser }
                                profileExists={ profileExists }
                                setEditProfile={ setEditProfile }
                                profilePhoto={ profilePhoto }
                                setProfile={setProfile} />
                            }
                            { editProfile == 2 && 
                            <EditPhoto
                                editorChooser={ editorChooser }
                                profilePhoto={ profilePhoto }
                                setPhoto={ setPhoto }
                            />

                            }
                        </div>

                </div>
            </div>
        </>
    )
}
