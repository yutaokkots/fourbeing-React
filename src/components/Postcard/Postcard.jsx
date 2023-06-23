import React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../Pages/App'
import { Link } from 'react-router-dom'
import LovePost from './LovePost'

export default function Postcard({ singlePost, refresh }) {
    const { user } = useContext(AuthContext)
    return (
        <>
            <div className="bg-white shadow-md mb-1 p-3 pt-4 border-zinc-400 text-regal  rounded-md">
                {
                    singlePost.photo &&
                <div>
                    <div>
                        <img src={singlePost.photo}/>
                    </div>
                </div>
                }
                <div className="grid grid-cols-12">
                    <div className="col-span-1 flex items-center">
                        <div className="col-span-1 flex flex-col justify-center items-center ">
                                <LovePost post={singlePost} refresh={ refresh }/>
                                <div>{singlePost.love}</div>
                            </div>
                    </div>
                    <div className="col-span-11">
                        <div className="text-xl text-left">
                            <div className="text-2xl">{ singlePost.title }</div>
                            <hr className="border-t border-gray-100 py-1"></hr>
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
    singlePost: PropTypes.object,
    refresh: PropTypes.func
}
