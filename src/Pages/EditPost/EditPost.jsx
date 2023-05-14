import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CommunityResources from '../../components/Community/CommunityResources'
import CreatePostComp from '../../components/Postcard/CreatePostComp'
import PropTypes from 'prop-types'
import * as postsAPI from '../../utilities/posts_api'
import EditPostCard from '../../components/Postcard/EditPostCard'
const initialPost = {
    title : "test",
    description : "test",
    created : "date",
    username : "test"
}

export default function EditPost({id}) {
    const [singlePost, setSinglePost] = useState(initialPost)

    useEffect(() => {
        async function getPost(){
            let response = await postsAPI.getPost(id)
            setSinglePost(response.data)
        }
        getPost()
    }, [])


    return (
        <>
        <Navbar />
            <div  className="bg-white v-screen h-screen">
                <div className="mt-10 grid grid-cols-12 gap-4 px-5">
                    <div className="col-span-7">
                        <div>Post Here</div>
                        <EditPostCard singlePost={singlePost}/>
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


EditPost.propTypes = {
  id: PropTypes.number

}