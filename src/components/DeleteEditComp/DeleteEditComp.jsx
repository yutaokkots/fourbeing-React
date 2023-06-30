import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../../Pages/App'
import { useNavigate } from 'react-router-dom'

export default function DeleteEditComp({ handleDelete, handleEdit, handleSubmit, post }) {
    // 'setEditedComment()'passed down to 'EditReply' component
    const [editedComment, setEditedComment] = useState("")
    // records state of user editing or deleting a comment
    const [beingEdited, setBeingEdited] = useState(false)
    const [beingDeleted, setBeingDeleted] = useState(false)
    const { user, userId } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleSubmitPost(evt){
        evt.preventDefault()
        handleSubmit()
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

    function handleDirect(){
        navigate(`/fourbeing/${post.id}`)
    }

    return (
        <div>   
            {
            post.username == user &&
            post.profile == userId &&
            <>
                <div
                    className="flex justify-between ">
                    <button
                        onClick={handleDirect}
                        >
                            ⬅ Go back
                    </button>
                    <div className="flex justify-end gap-10">
                        
                        {
                            !beingDeleted
                            ?
                            <div className="">
                                <button
                                    onClick={toggleDelete}
                                    type="submit"
                                    >Delete
                                </button>
                            </div>
                        :
                            <>
                                <div className="px-2 rounded-md border-zinc-100">
                                    <div className="text-red-600 inline-block">
                                        <button
                                            onClick={handleDelete}
                                            type="submit"
                                            >Delete
                                        </button>
                                    </div>
                                    <div className="inline-block"><span>&nbsp;&nbsp;↔&nbsp;&nbsp;</span></div>
                                    <div className="inline-block">
                                        <button
                                            onClick={toggleCancel}
                                            type="submit"
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
                                            type="submit"
                                            onClick={toggleCancel}
                                            >Cancel
                                        </button>
                                    </div>
                                    <div className="inline-block"><span>&nbsp;&nbsp;↔&nbsp;&nbsp;</span></div>
                                    <div className="inline-block">
                                        <button
                                            type="submit"
                                            onClick={handleEdit}
                                            
                                            >Submit 
                                        </button>
                                    </div>
                                </div>
                            </>
                            :
                            <div className="">
                                <button
                                    type="submit"
                                    onClick={toggleEdit}
                                    >Submit
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </>
            }
        </div>
    )
}


DeleteEditComp.propTypes = {
    handleDelete: PropTypes.func,
    handleEdit: PropTypes.func,
    handleSubmit: PropTypes.func,
    post: PropTypes.object,
}
