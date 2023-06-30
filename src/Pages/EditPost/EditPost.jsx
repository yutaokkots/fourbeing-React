import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CommunityResources from '../../components/Community/CommunityResources'
import CreatePostComp from '../../components/Postcard/CreatePostComp'
import PropTypes from 'prop-types'
import * as postsAPI from '../../utilities/posts_api'
import EditPostCard from '../../components/Postcard/EditPostCard'
import LanguageTranslator from '../../components/Language/LanguageTranslator'

// const initialPost = {
//     title : "test",
//     description : "test",
//     created : "date",
//     username : "test"
// }

export default function EditPost({id}) {
    // const [singlePost, setSinglePost] = useState(initialPost)

    // useEffect(() => {
    //     async function getPost(){
    //         let response = await postsAPI.getPost(id)
    //         setSinglePost(response.data)
    //     }
    //     getPost()
    // }, [])


    return (
        <>
        <Navbar />
            <div  className="bg-gradient-to-b h-screen from-slate-400 via-slate-50 to-transparent">
              <div className="pt-20 grid px-5 gap-4 grid-cols-12 md:pt-10">
                  <div className="col-span-12  sm:col-span-5 sm:order-2">
                      <div className="">
                          <CommunityResources />
                          <LanguageTranslator />
                      </div>
                  </div>
                  <div className="col-span-12  sm:col-span-7 sm:order-1">
                      <EditPostCard />
                  </div>

              </div>
          </div>
        </>
  )
}


EditPost.propTypes = {
  id: PropTypes.number

}