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
            <div className="shadow-md m-1 border-zinc-400 text-regal p-1 rounded-md hover:text-afterhour hover:border-aftehour mt-3">        
                <div className="flex justify-end pt-1 pr-2">
                    {user && 
                        <button
                            className=""
                            onClick={addCommentToggler}
                            >Add a comment</button>
                    }
                </div>
                <div>
                    {showAddReply && 
                        <CreateReplyComp addCommentToggler={ addCommentToggler} refresh={ refresh }/>
                    }
                </div>
            </div>
            <div className="shadow-md m-1 border-zinc-400 text-regal p-1 rounded-md hover:text-afterhour hover:border-aftehour mt-3">
        
                {
                    replies.length === 0 ?
                        <div className="flex flex-col py-5 justify-center items-center ">
                            <h1>No comments yet</h1>
                        </div>
                    :
                    <>
                        <div>{replies.map((reply, idx) => 
                            <Reply key={idx} reply={reply} refresh={ refresh }/> )
                            }
                        </div>
                    </>
                }
            </div>    
        </>
    )
    }

RepliesAll.propTypes = {
    id: PropTypes.array,
    refresh: PropTypes.func
}

