import React, { useState, useEffect } from 'react'
import { useParams }  from 'react-router-dom'
import * as postsAPI from '../../utilities/posts_api'
import Navbar from '../../components/Navbar/Navbar'
import CommunityResources from '../../components/Community/CommunityResources'
import Postcard from '../../components/Postcard/Postcard'
//import EditPostCard from '../../components/Postcard/EditPostCard'

const initialPost = {
    title : "test",
    description : "test",
    created : "date",
    username : "test"
}

export default function Post() {
    const postId = useParams()
    const [singlePost, setSinglePost] = useState(initialPost)

    useEffect(() => {
        async function getPost(){
            let response = await postsAPI.getPost(postId.postid)
            setSinglePost(response.data)
        }
        getPost()
    }, [])

    return (
        <>
            <Navbar />
                <div  className="bg-afterhour v-screen h-screen">
                    <div className="mt-10 grid grid-cols-12 gap-4 px-5">
                        <div className="col-span-7">
                            <div className="grid grid-col-2">
                                <Postcard singlePost={singlePost}/>
                            </div>
                        </div>
                        <div className="col-span-5">
                            <div className="">
                                <h1> second column </h1>
                            </div>
                        <CommunityResources />
                    </div>
                    </div>
            </div>
        </>
    )
}
