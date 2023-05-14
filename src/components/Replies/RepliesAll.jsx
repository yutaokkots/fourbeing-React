import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
import { AuthContext } from '../../Pages/App'
import Reply from './Reply'
import CreateReplyComp from './CreateReplyComp'



export default function RepliesAll({ replies, refresh }) {
    const { user } = useContext(AuthContext)
    const postId = useParams()
    const [showAddReply, setShowAddReply] = useState(false)

    // hides or reveals the comment add area
    function addCommentToggler(){
        setShowAddReply(!showAddReply)
        console.log(showAddReply)
    }

    return (
        <>
            <div className="border-2 m-1 border-zinc-400 text-regal p-1 rounded-md hover:text-afterhour hover:border-aftehour mt-3">
                <div>
                    <div className="flex justify-end pt-1 pr-2">
                        {user && 
                            <button
                                className=""
                                onClick={addCommentToggler}
                                >Add a comment</button>
                        }</div>
                        {showAddReply && 
                            <CreateReplyComp addCommentToggler={ addCommentToggler} refresh={ refresh }/>
                        }
                    </div>
                <div>{replies.map((reply, idx) => 
                    <Reply key={idx} reply={reply} refresh={ refresh }/> )}
                </div>
            </div>    
        </>
    )
    }

RepliesAll.propTypes = {
    id: PropTypes.array,
    refresh: PropTypes.func
}

