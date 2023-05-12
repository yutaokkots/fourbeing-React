
import Comments from './Comments'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default function Posts({ post, id }) {

  return (
    <>
        <div className="border-2 m-1 border-zinc-400 text-moonlight p-1 rounded-md hover:text-moonlight hover:border-moonlight mt-3">
                <Link to={`/fourbeing/${id}`}>
                <div className="grid grid-col-2">
                    <div className="col-span-2">
                        Here
                    </div>
                    <div className="col-span-10">
                        <div className="text-xl text-left">
                            <h1>{ post.title }</h1>
                            <h1>{ post.id }</h1>
                        </div>
                        <div className=" text-left">
                            <h1>{ post.description }</h1>
                        </div>
                    </div>
                </div>
                </Link>
            <Comments />
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