import Comments from './Comments'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import LovePost from './LovePost'

export default function Posts({ post, id, refresh}) {
    return (
        <>
            <div className="bg-white shadow-md mb-2   px-3 border-zinc-400 text-regal p-1 rounded-md hover:text-afterhour ">
                    <a href={`/fourbeing/${id}`}>
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-1 md:col-span-1 flex flex-col justify-center items-center ">
                                <div>🤍</div>
                                <div>{post.love}</div>
                            </div>
                            { post.photo 
                            ?
                            
                            <div className="col-span-11">
                                <div className="grid-rows-2 gap-2">
                                    <div className="grid grid-cols-12 gap-3">
                                        <div className="col-span-8 md:col-span-9 ">
                                            <div className="pl-2 pt-2">
                                                <div className="text-lg text-left">
                                                    { post.title }
                                                </div>
                                                <hr className="border-t border-gray-100 py-1"></hr>

                                                <div className=" text-left ">
                                                    { post.description.substring(0, 115) } . . .
                                                </div>

                                            </div>
                                        </div>
                                        <div className=" col-span-4 md:col-span-3 ">
                                            <div className="flex flex-col content-around">
                                                <div className="pt-4 pb-1 w-full">
                                                    <img className="rounded-md object-contain w-full" src={post.photo} />
                                                </div>
       
                                            </div>
                                        </div>
                                    </div>
                                        <div className="flex gap-3 justify-end">
                                                    <div className="flex justify-end text-sm text-end ">
                                                        Posted by { post.username }
                                                    </div>
                                                    <div>|</div>
                                                    <div className="flex text-sm justify-end">
                                                        {post.comments} comment{post.comments !== 1 ? "s" : ""}
                                                    </div>
                                        </div>
                                </div>
                            </div>
                            
                            :
                            <div className="col-span-11">
                                <div className="pl-2 pt-2">
                                    <div className="text-lg text-left">
                                        { post.title }
                                    </div>
                                    <hr className="border-t border-gray-100 py-1"></hr>

                                    <div className=" text-left ">
                                        { post.description }
                                    </div>
                                    <div className="flex justify-end text-sm">
                                        Posted by { post.username }
                                    </div>
                                    <div className="flex justify-end">
                                        {post.comments} comment{post.comments !== 1 ? "s" : ""}
                                    </div>
                                </div>
                            </div>
                            }
                        </div>
                    </a>
                
            </div>
        </>
    )
}

Posts.propTypes = {
    id: PropTypes.number,
    post: PropTypes.object,
    refresh: PropTypes.func
}
