import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../Pages/App'
import * as replyAPI from '../../utilities/reply_api'
import EditReply from './EditReply'
import LoveReply from './LoveReply'

const initialReply = {
    username : "",
    comment: "",
    post: null,
    id: null
}

export default function Reply({ reply, refresh }) {
    const { user } = useContext(AuthContext)
    const [replyObject, setReplyObject] = useState(initialReply)
    // 'setEditedComment()'passed down to 'EditReply' component
    const [editedComment, setEditedComment] = useState("")
    // records state of user editing or deleting a comment
    const [beingEdited, setBeingEdited] = useState(false)
    const [beingDeleted, setBeingDeleted] = useState(false)

    async function editReply(replyInfo, postId, replyId){
        await replyAPI.editReply(replyInfo, postId, replyId)
        .then((response) => {
            setReplyObject(response)
            toggleCancel()
        })
    }

    async function deleteReply(postId, replyId){
        await replyAPI.deleteReply(postId, replyId)
    }
    // hides or reveals the editing area
    function toggleEdit(){
        setBeingEdited(!beingEdited)
        setBeingDeleted(false)
    }

    function toggleCancel(){
        setBeingEdited(false)
        setBeingDeleted(false)
    }

    function toggleDelete(){
        setBeingDeleted(!beingDeleted)
        setBeingEdited(false)
    }

    function handleEdit(){
        const newReply = {
            username : user,
            comment: editedComment,
            id: reply.id,
            post: reply.post
        }
        editReply(newReply, reply.post, reply.id)
        refresh()
    }

    function handleDelete(){
        deleteReply(reply.post, reply.id)
        refresh()
    }


    return (
    <>
            <div className="shadow-inner ml-1 mr-1 border-zinc-400 regal p-1 rounded-md hover:text-afterhour hover:border-afterhour mt-3">
                <div className="grid grid-cols-12">
                    <div className="col-span-1 flex flex-col justify-center items-center ">
                        <div className="text-red-600 inline-block ">
                            <LoveReply reply={reply} refresh={ refresh }/>
                        </div>
                        <div>{reply.love}</div>
                    </div>
                    <div className="col-span-11 pr-2">
                        <div className="">
                            <div className="grid grid-flow-rows auto-rows-max">
                                {
                                    beingEdited ? 
                                        <EditReply reply={reply} setEditedComment={setEditedComment}/>
                                        : 
                                        <div className="text-lg">{reply.comment}</div>
                                }
                                <div className="flex justify-end text-sm">
                                    
                                    <div>by {reply.username}</div>
                                </div>  
                                <div className="">

                                </div>
                            </div>
                        </div>
                            {
                            reply.username === user &&
                            <>
                                <div className="flex justify-end gap-10">
                                    
                                    {
                                        !beingDeleted
                                        ?
                                        <div className="">
                                            <button
                                                onClick={toggleDelete}
                                                >Delete
                                            </button>
                                        </div>
                                    :
                                        <>
                                            <div className="px-2 rounded-md border-zinc-100">
                                                <div className="text-red-600 inline-block">
                                                    <button
                                                        onClick={handleDelete}
                                                        >Delete
                                                    </button>
                                                </div>
                                                <div className="inline-block"><span>&nbsp;&nbsp;↔&nbsp;&nbsp;</span></div>
                                                <div className="inline-block">
                                                    <button
                                                        onClick={toggleCancel}
                                                        >Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    }
                                    {
                                        beingEdited
                                        ?
                                        <>
                                            <div className="px-2 rounded-md border-zinc-100">
                                                <div className="inline-block">
                                                    <button
                                                        onClick={toggleCancel}
                                                        >Cancel
                                                    </button>
                                                </div>
                                                <div className="inline-block"><span>&nbsp;&nbsp;↔&nbsp;&nbsp;</span></div>
                                                <div className="inline-block">
                                                    <button
                                                        onClick={handleEdit}
                                                        
                                                        >Submit 
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <div className="">
                                            <button
                                                onClick={toggleEdit}
                                                >Edit 
                                            </button>
                                        </div>
                                    }
                                </div>
                            </>
                            }
                        <div className=" text-left">
                        </div>
                    </div>
                </div>
            </div>    
        </>
    )
}


Reply.propTypes = {
    reply: PropTypes.object,
    refresh: PropTypes.func
}


// {user && 
//     <button
//         onSubmit={toggleButton}
//         >Add a comment</button>
//     }
//     {user && toggle &&
//     <CreateReplyComp />
//     }