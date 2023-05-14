import React, { useState, useEffect } from 'react'
import { useParams }  from 'react-router-dom'
import * as postsAPI from '../../utilities/posts_api'
import Navbar from '../../components/Navbar/Navbar'
import CommunityResources from '../../components/Community/CommunityResources'
import Postcard from '../../components/Postcard/Postcard'
import * as replyAPI from '../../utilities/reply_api'
import RepliesAll from '../../components/Replies/RepliesAll'
//import EditPostCard from '../../components/Postcard/EditPostCard'

const initialPost = {
    title : "test",
    description : "test",
    created : "date",
    username : "test"
}

const initialReply = [{
    username : "test",
    comment: "test",
    love: 0,
    profile: null,
    post: null,
    created : "date",
}]


export default function Post() {
    const postId = useParams()
    const [singlePost, setSinglePost] = useState(initialPost)
    const [replies, setReplies] = useState(initialReply)
    const [updatePage, setUpdatePage] = useState(1)

    // when 'refresh()' is triggered, the page is re-rendered
    function refresh(){
        setUpdatePage(-updatePage)
    }

    // retreives all of the posts and replies for a specific post
    useEffect(() => {
        async function getPost(){
            await postsAPI.getPost(postId.postid).then((response)=>{
                setSinglePost(response.data)
            }) 
            await replyAPI.getReply(postId.postid).then((response) => {
                setReplies(response.data)
            })
        }
        getPost()
    }, [updatePage])

    return (
        <>
            <Navbar />
                <div  className=" v-screen">
                    <div className="mt-20 grid gap-5 grid-cols-12 px-5 md:mt-10 md:pt-10">
                        <div className="col-span-12 sm:col-span-5 sm:order-2">
                            <div className="">
                                <CommunityResources />
                            </div>
                        </div>
                        <div className="col-span-12  sm:col-span-7 sm:order-1">
                            <div className="grid grid-col-2" >
                                <Postcard singlePost={singlePost}/>
                                <div className="pl-5 md:pl-10"> 
                                    <RepliesAll replies={replies} refresh={refresh}/>
                                </div>
                            </div>
                            <div className="grid grid-col-2">
                                
                            </div>
                        </div>

                    </div>
            </div>
        </>
    )
}
