import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CommunityResources from '../../components/Community/CommunityResources'
import CreatePostComp from '../../components/Postcard/CreatePostComp'
import PropTypes from 'prop-types'

export default function CreatePost() {
  return (
    <>
    <Navbar />
        <div  className="bg-afterhour v-screen h-screen">
            <div className="mt-10 grid grid-cols-12 gap-4 px-5">
                <div className="col-span-7">
                    <div>Post Here</div>
                    <CreatePostComp />
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


CreatePost.propTypes = {
  user: PropTypes.object

}