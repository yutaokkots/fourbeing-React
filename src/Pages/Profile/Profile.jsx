import React, { useState, useEffect, useContext } from 'react'
import { useParams }  from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import EditPhoto from '../../components/ProfilePhoto/EditPhoto'
import * as profileAPI from '../../utilities/profile-api'
import { AuthContext } from '../App'
import CreateProfile from './CreateProfile'
import ViewProfile from './ViewProfile'
import * as usersService from '../../utilities/users-service'
import PostHistory from './PostHistory'
import Posts from '../../components/Postcard/Posts'

const initialProfile = {
    title: "",
    bio: "",
    location: "",
    website: "",
    }
const initialUserPost = [{}, {}]

export default function Profile() {
    let { userid } = useParams()

    // 'profile' state holds profile object information
    const [profile, setProfile] = useState(initialProfile)
    
    // 'profileExists' holds boolean state to show Profile or CreateProfile components
    const [profileExists, setProfileExists] = useState(false)
    
    // 'user': destructured user information that is stored in AuthContext 
    const { user, setUser } = useContext(AuthContext)

    // 'editProfile' contains an integer that controls what sub-component is shown.
    // 0: ViewProfile, 1: CreateProfile, 2: EditPhoto
    const [editProfile, setEditProfile] = useState(0)

    // 'profileProfile' holds the profile photo url as a string. 
    const [profilePhoto, setProfilePhoto] =  useState("")

    // 'currentUser' holds boolean state, checks that userID in localStorage token is the same 
    // as the profile being viewed. If 'currentUser' is set to 'false', the user cannot access
    // editing features of profile page. 
    const [currentUser, setCurrentUser] = useState(false)

    // 'userPosts' holds an object that stores all user posts
    const [userPosts, setUserPosts] = useState(initialUserPost)

    function checkTokenAndProfile(userId){
        return usersService.getUserId() === parseInt(userId)
    }


    // loads the screen with a user's profile information, if any. 
    // if no user profile exists, the profileExists state is set to false
    useEffect(()=>{
        // loads the user's profile information
        async function getProfile(){
            await profileAPI.getProfile(userid)
                .then((profile)=>{
                    console.log(profile)
                    if (profile.profile === "None"){
                        setProfileExists(false)
                    } else if (profile.profile !== "None") {
                        setProfile(profile.profile)
                        setProfileExists(true)
                    }
                    return profile
                })
                .then((profile)=>{
                    let boolUser = checkTokenAndProfile(profile.profile.user_id)
                    setCurrentUser(boolUser)
                    return profile.profile.user_id
                })
                .then((userId)=>{
                    return profileAPI.getUserPost(userId)
                }).then((response)=>{
                    setUserPosts(response.data)
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
        
        // loads the user's photo information
        async function getProfilePhoto(){

            await profileAPI.getProfilePhoto(userid)
                .then((profilePhotoRes) =>{
                    if (profilePhotoRes.photo.url === undefined){
                        setProfilePhoto("")
                    } else if (profilePhotoRes.photo.url !== undefined){
                        setProfilePhoto(profilePhotoRes.photo.url)
                    }
                })              
                .catch((err)=>{
                    console.log(err)
                })
        }

        async function getPosts(){
            console.log(profile.user_id)
            await profileAPI.getUserPost(profile.user_id)
                .then((posts)=>{
                    setUserPosts(posts)
                    console.log(posts)
                }).catch((err)=>{
                    console.log(err)
                })
        }
        getProfile()
        getProfilePhoto()
        //getPosts()

    },[editProfile])
    console.log(userPosts)

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
                <div className="pt-20 px-5 grid gap-5 grid-cols-12 md:mt-10 md:pt-10">
                    <div className="col-span-12  sm:col-span-5 sm:order-2">

                        <div className="gap-5 flex flex-col items-center ">
                            <div className="bg-white shadow-md w-60 sm:w-60 md:w-80 lg:w-96 mb-1 p-3 pt-4 border-zinc-400 text-regal  rounded-md">
                                    { editProfile == 0 && 
                                        <ViewProfile 
                                            profile={ profile }
                                            editorChooser={ editorChooser }
                                            profileExists={ profileExists }
                                            currentUser={ currentUser }
                                            profilePhoto={ profilePhoto } />
                                    }
                                    { editProfile == 1 && 
                                        <CreateProfile 
                                            user={user}
                                            profile={ profile }
                                            editorChooser={ editorChooser }
                                            profileExists={ profileExists }
                                            setEditProfile={ setEditProfile }
                                            profilePhoto={ profilePhoto }
                                            setProfile={ setProfile } />
                                    }
                                    { editProfile == 2 && 
                                        <EditPhoto
                                            editorChooser={ editorChooser }
                                            profilePhoto={ profilePhoto }
                                            setPhoto={ setPhoto } />
                                    }
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-7 sm:order-1 mb-20">
                        <PostHistory />
                        {userPosts.map((userPost, idx)=>
                            <Posts  post={userPost} id={userPost.id} key={idx} />)}
                    </div>

                </div>
            </div>
        </>
    )
}
