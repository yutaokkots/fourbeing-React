import React from 'react'
import AddPostButton from '../Postcard/AddPostButton'
import CommunityInfo from './CommunityInfo'
import { useLocation } from 'react-router-dom'

export default function CommunityResources() {
    // hide the Add Post Button when the user is on the 'createpost' page
    const location = useLocation()


    return (
        <>
            <div className=" shadow-lg border-zinc-400 bg-white text-regal p-5 mb-5 md:mt-10 rounded-md hover:text-afterhour hover:border-afterhour">
                  <CommunityInfo />
              <div className="flex justify-end">
                  {location.pathname !== '/createpost' && 
                      <AddPostButton />
                  }
              </div>
            </div>
        </>
    )
}
