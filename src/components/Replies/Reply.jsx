import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
import { AuthContext } from '../../Pages/App'
import CreateReplyComp from './CreateReplyComp'

export default function Reply({ reply }) {
    const { user } = useContext(AuthContext)
    const postId = useParams()
    const [toggle, setToggle] = useState(false)

    function handleEdit(){
        
    }

    function handleDelete(){

    }

    function toggleButton(){
        setToggle(!toggle)
        console.log(toggle)
    }

    return (
    <>
            <div className="border-2 ml-1 mr-1 border-zinc-400 regal p-1 rounded-md hover:text-afterhour hover:border-afterhour mt-3">
                <div className="grid grid-cols-12">
                    
                    <div className="col-span-1 flex items-center">
                        <div>Likes {reply.love}</div>
                    </div>
                    <div className="col-span-11 pr-2">
                        <div className="">
                            <div className="grid grid-flow-rows auto-rows-max">
                                <div className="text-lg">{reply.comment}</div>

                                <div className="flex justify-end ">
                                    
                                    <div>by {reply.username}</div>
                                </div>  
                                <div className="">
                                    {user && 
                                    <button
                                        onSubmit={toggleButton}
                                        >Add a comment</button>
                                    }
                                    {user && toggle &&
                                    <CreateReplyComp />
                                    }
                                </div>
                            </div>
                        </div>

                            {
                            reply.username === user &&
                            <>
                                <div className="flex justify-end gap-3">
                                    <div className="">
                                        <button
                                            onSubmit=""
                                            to={`/fourbeing/${postId.postid}/edit`} 
                                            >Edit 
                                        </button>
                                    </div>
                                    <div className="">
                                        <button
                                            onSubmit=""
                                            to={`/fourbeing/${postId.postid}/edit`} 
                                            >Delete
                                        </button>
                                    </div>
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
    id: PropTypes.array
}
