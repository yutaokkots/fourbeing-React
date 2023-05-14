
import Comments from './Comments'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default function Posts({ post, id }) {
    console.log(post)
  return (
    <>
        <div className="border-2 mb-2 px-3 border-zinc-400 text-regal p-1 rounded-md hover:text-afterhour ">
                <Link to={`/fourbeing/${id}`}>
                <div className="grid grid-cols-12 gap-3">

                        <div className="col-span-1 flex justify-center items-center">
                            Here
                        </div>
                        <div className="col-span-11">
                            <div className="text-xl text-left">
                                { post.title }
                            </div>
                            <div className=" text-left ">
                                { post.description }
                            </div>
                            <div className="flex justify-end text-sm">
                                Posted by { post.username }
                            </div>
                            <div className="flex justify-end">
                                <Comments />
                            </div>
                        </div>

                </div>
                </Link>
            
        </div>
    </>
  )
}

Posts.propTypes = {
    id: PropTypes.number,
  post: PropTypes.object
}

// 'midnight': '#091123',
// 'afterhour':'#212A3E',
// 'moonlight':'#F1F6F9',
// 'regal': '#34172D',
// 'lining':'#d678a4',