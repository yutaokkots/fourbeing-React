import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CommunityResources from '../../components/Community/CommunityResources'
import CreatePostComp from '../../components/Postcard/CreatePostComp'
import PropTypes from 'prop-types'
import LanguageTranslator from '../../components/Language/LanguageTranslator'

export default function CreatePost() {
  return (
    <>
    <Navbar />
        <div  className="bg-white v-screen h-screen">
            <div className="mt-20 grid px-5 gap-4 grid-cols-12 md:mt-10 md:pt-10">
                <div className="col-span-12  sm:col-span-5 sm:order-2">
                    <div className="">
                        <CommunityResources />
                        <LanguageTranslator />
                    </div>
                </div>
                <div className="col-span-12  sm:col-span-7 sm:order-1">
                    <CreatePostComp />
                </div>

            </div>
        </div>
</>
  )
}
// <div className="mt-20 grid grid-cols-12 gap-4 md:mt-10 md:pt-10">
// <div className="col-span-12 px-2 sm:col-span-5 sm:order-2">

CreatePost.propTypes = {
  user: PropTypes.object

}