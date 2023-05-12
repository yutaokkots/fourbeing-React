import React from 'react'
import PropTypes from 'prop-types'

export default function Postcard({ singlePost }) {
  return (
    <>
        <div className="border-2 m-1 border-zinc-400 text-moonlight p-1 rounded-md hover:text-moonlight hover:border-moonlight mt-3">
            <div className="col-span-2">
                Here
            </div>
            <div className="col-span-10">
                <div className="text-xl text-left">
                    <h1>Posted by { singlePost.user }</h1>
                    <h1>{ singlePost.title }</h1>
                    <h1>{ singlePost.description }</h1>

                </div>
                <div className=" text-left">

                </div>
            </div>
        </div>    
    </>
  )
}

Postcard.propTypes = {
    singlePost: PropTypes.object
}
