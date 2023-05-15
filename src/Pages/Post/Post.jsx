import React, { useState, useEffect } from 'react'
import { useParams }  from 'react-router-dom'
import * as postsAPI from '../../utilities/posts_api'
import Navbar from '../../components/Navbar/Navbar'
import CommunityResources from '../../components/Community/CommunityResources'
import Postcard from '../../components/Postcard/Postcard'
import * as replyAPI from '../../utilities/reply_api'
import RepliesAll from '../../components/Replies/RepliesAll'
import LanguageTranslator from '../../components/Language/LanguageTranslator'

//import EditPostCard from '../../components/Postcard/EditPostCard'

const initialPost = {
    title : "",
    description : "",
    created : "",
    username : ""
}

const initialReply = [{
    username : "",
    comment: "",
    love: 0,
    profile: null,
    post: null,
    created : "",
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

    function sortByDate(commentArray){
        return [...commentArray].sort((a,b) => {  
            if (a.created > b.created) {
                return -1;
            } else if (b.created < a.created) {
                return 1;
            } else {
                return 0;
            }})
    }

    // retreives all of the posts and replies for a specific post
    useEffect(() => {
        async function getPost(){
            await postsAPI.getPost(postId.postid)
            .then((response)=>{
                console.log(response.data)
                setSinglePost(response.data)
            }).catch(error => {
                throw(error);
            })

            await replyAPI.getReply(postId.postid)
            .then((response) => {
                setReplies(response.data)
                return response
            }).then((response)=>{
                setReplies(sortByDate(response.data))

            }).catch(error => {
                throw(error);
            })
        }
        getPost()
    }, [updatePage])


    return (
        <>
            <Navbar />
                <div  className=" bg-slate-50 ">
                    <div className="mt-20 grid gap-5 grid-cols-12 px-5 md:mt-10 md:pt-10">
                        <div className="col-span-12 sm:col-span-5 sm:order-2">
                            <div className="">
                                <LanguageTranslator />
                            </div>
                        </div>
                        <div className="col-span-12  sm:col-span-7 sm:order-1 mb-20">
                            <div className="grid grid-col-2" >
                                <Postcard singlePost={singlePost} replies={replies} refresh={refresh}/>
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
