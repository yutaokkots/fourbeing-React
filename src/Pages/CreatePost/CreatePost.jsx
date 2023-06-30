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
          <div  className="bg-gradient-to-b h-screen from-slate-400 via-slate-50 to-transparent">
              <div className="pt-20 grid px-5 gap-4 grid-cols-12 md:pt-10">
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
