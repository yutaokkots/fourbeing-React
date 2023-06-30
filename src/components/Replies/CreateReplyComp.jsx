import React, { useState, useContext } from 'react'
import { AuthContext } from '../../Pages/App'
import { useParams } from 'react-router-dom'
import * as replyAPI from '../../utilities/reply_api'
import * as userService from '../../utilities/users-service'
import PropType from 'prop-types'

const initialReply = {
    username : "",
    comment: "",
    profile: null,
    post: null,
}

export default function CreateReplyComp({ addCommentToggler, refresh }) {
    const [input, setInput] = useState(initialReply)
    const { user, userId } = useContext(AuthContext)
    const postId = useParams()
    const [error, setError] = useState('');

    function handleChange(evt){
        setInput(evt.target.value)
    }

    async function createReply(reply){
        try {
            return await replyAPI.postReply(reply, postId.postid)
        } catch(err){
            console.log(err)
            return false
        }
    }

    function handleSubmit(evt){
        evt.preventDefault()
        const user_id = userService.getUserId()
        const reply = {
            username : user,
            comment: input,
            profile: user_id,
            post: postId.postid,
            user: userId
        }
        createReply(reply).then((response) => {
            return response.id
        }).then((response) => {
            addCommentToggler()
            refresh()
        }).catch((error) => {
            console.log(error)
            setError("There was an error")
        })

    }
    return (
        <>
            <form
                onSubmit={handleSubmit}
                >
                <div className="px-2">
                    <textarea className="w-full resize-y h-auto py-1 px-2 border border-gray-300 rounded-sm"
                        type="text"
                        name="comment"
                        value={input.comment}
                        onChange={handleChange}
                        placeholder="leave a comment"
                        ></textarea>
                </div>
                <div className="flex justify-end px-5">
                    <button
                        className=""
                        >Add</button>
                </div>
            </form>
        </>
    )
}

CreateReplyComp.propTypes = {
    addCommentToggler: PropType.func,
    refresh: PropType.func
}