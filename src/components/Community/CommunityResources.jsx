import React from 'react'
import AddPostButton from '../Postcard/AddPostButton'
import CommunityInfo from './CommunityInfo'
import { useLocation } from 'react-router-dom'

export default function CommunityResources() {
    const location = useLocation()

    return (
        <>
            <div className="border-2 border-zinc-400 bg-white text-regal p-5 mb-5 rounded-md hover:text-afterhour hover:border-afterhour">
              <div>CommunityResources</div>
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
