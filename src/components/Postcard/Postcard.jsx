import React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../Pages/App'
import { Link } from 'react-router-dom'

export default function Postcard({ singlePost }) {
    const { user } = useContext(AuthContext)
    return (
        <>
            <div className="shadow-md mb-1 p-1 border-zinc-400 text-regal  rounded-md">
                <div className="grid grid-cols-12">
                    <div className="col-span-1 flex items-center">
                        <div>likes here?</div>
                    </div>
                    <div className="col-span-11">
                        <div className="text-xl text-left">
                            <div className="text-2xl">{ singlePost.title }</div>
                            <div>{ singlePost.description }</div>
                            <div className="text-sm flex justify-end">Posted by { singlePost.username }</div>
                        </div>
                        <div className="flex justify-end">
                        {
                        singlePost.username === user &&
                        <Link 
                            to={`/fourbeing/${singlePost.id}/edit`} 
                            id={singlePost.id}
                            >Edit 
                        </Link>
                        }
                        </div>
                        <div className=" text-left">

                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}

Postcard.propTypes = {
    singlePost: PropTypes.object
}
