
import Comments from './Comments'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import LovePost from './LovePost'

export default function Posts({ post, id, refresh}) {
    console.log(post)
    return (
        <>
            <div className="shadow-md mb-2 px-3 border-zinc-400 text-regal p-1 rounded-md hover:text-afterhour ">
                    <a href={`/fourbeing/${id}`}>
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-1 flex flex-col justify-center items-center ">
                                <div>🤍</div>
                                <div>{post.love}</div>
                            </div>
                        <div className="col-span-11">
                            <div className="pl-2 pt-2">
                                <div className="text-lg text-left">
                                    { post.title }
                                </div>
                                <div className=" text-left ">
                                    { post.description }
                                </div>
                                <div className="flex justify-end text-sm">
                                    Posted by { post.username }
                                </div>
                                <div className="flex justify-end">
                                    {post.comments} comments
                                </div>
                            </div>
                        </div>

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
