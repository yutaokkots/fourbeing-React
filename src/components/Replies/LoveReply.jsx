import React, { useState, useContext } from 'react'
import * as replyAPI from '../../utilities/reply_api'
import { AuthContext } from '../../Pages/App'
import PropTypes from 'prop-types'
// reply, refresh

export default function LoveReply({ reply, refresh }) {
    const { user } = useContext(AuthContext)
    const [addLove, setAddLove] = useState(0)

    async function addLoveRequest(request, replyPost, replyId){
        await replyAPI.addLove(request, replyPost, replyId)
    }

    function handleClick(){
        setAddLove(+1)
        const requestObject = {
            post: reply.post,
            id: reply.id,
            love: addLove
        }
        addLoveRequest(requestObject, reply.post, reply.id)
        refresh()
    }
    return (
        <button
            className={reply.username === "[deleted]" ? "opacity-20 disabled" : "font-bold"}
            type="button"
            name="love"
            onClick={handleClick}
            >{reply.love === 0 ? "🤍" : "🤍"} </button>
    )
}

LoveReply.propTypes = {
    reply: PropTypes.object,
    refresh: PropTypes.func
}
