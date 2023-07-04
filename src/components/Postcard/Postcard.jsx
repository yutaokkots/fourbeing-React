import React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../Pages/App'
import { Link } from 'react-router-dom'
import LovePost from './LovePost'
import { relativeDate } from '../../utilities/helpers'

export default function Postcard({ singlePost, refresh }) {
    const { user } = useContext(AuthContext)

    return (
        <>
            <div className="bg-white shadow-md mb-1  md:mt-10 p-3 pt-4 border-zinc-400 text-regal  rounded-md">
                {
                    singlePost.photo &&
                <div>
                    <div>
                        <img className="rounded-md" src={singlePost.photo}/>
                    </div>
                </div>
                }
                <div className="grid grid-cols-12 mt-3">
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
                            <div className="flex gap-1 justify-end">
                                <div className="flex justify-end text-sm text-end ">
                                    Posted by &nbsp;
                                    <a className="underline" href={`/profile/${singlePost.profile}`}>
                                    {singlePost.username}
                                    </a>
                                </div>
                                <div>|</div>
                                <div className="flex justify-end text-sm text-end ">
                                    {relativeDate(singlePost.created)} ago
                                </div>
                            </div>

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
