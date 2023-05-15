import React, { useState, useContext } from 'react'
import * as postsAPI from '../../utilities/posts_api'
import { AuthContext } from '../../Pages/App'
import PropTypes from 'prop-types'
// reply, refresh

export default function LovePost({ post, refresh }) {
    const { user } = useContext(AuthContext)
    const [addLove, setAddLove] = useState(0)


    async function addLoveRequest(request, postId){
        await postsAPI.addLove(request, postId)
    }

    function handleClick(){
        setAddLove(+1)
        const requestObject = {
            post: post.id,
            love: addLove
        }
        addLoveRequest(requestObject, post.id)
        refresh()
    }
    return (
        <button
            className={post.username === "[deleted]" ? "opacity-20 disabled" : "font-bold"}
            type="button"
            name="love"
            onClick={handleClick}
            >{post.love === 0 ? "🤍" : "🤍"} {post.user}</button>
    )
}

LovePost.propTypes = {
    post: PropTypes.object,
    refresh: PropTypes.func
}