import React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../Pages/App'
import { Link } from 'react-router-dom'

export default function Postcard({ singlePost }) {
    const { user } = useContext(AuthContext)
    return (
        <>
            <div className="border-2 m-1 border-zinc-400 text-moonlight p-1 rounded-md hover:text-moonlight hover:border-moonlight mt-3">
                <div className="col-span-2">
                    Here
                </div>
                <div className="col-span-10">
                    <div className="text-xl text-left">
                        <h1>Posted by { singlePost.username }</h1>
                        <h1>{ singlePost.title }</h1>
                        <h1>{ singlePost.description }</h1>
                    </div>
                    {
                    singlePost.username === user &&
                    <Link 
                        to={`/fourbeing/${singlePost.id}/edit`} 
                        id={singlePost.id}
                        >Edit 
                    </Link>
                    }
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
