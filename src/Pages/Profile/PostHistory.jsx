import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Posts from '../../components/Postcard/Posts'

import Reply from '../../components/Replies/Reply'

export default function PostHistory({ userPosts, userReplies }) {
    const [menu, setMenu] = useState(0)

    function handleClick(evt){
        evt.preventDefault()
        setMenu(parseInt(evt.target.value))
    }
    
    return (
        <>
            <div
                className="drop-shadow-md">
                <div 
                    className="flex gap-1 ">
                    <button
                        onClick={handleClick}
                        value="0"
                        className={`rounded-t-lg px-4 pt-1 text-xl ${menu === 0 ? 'bg-slate-100' : 'bg-white'}`}>
                        Posts
                    </button>
                    <button
                        onClick={handleClick}
                        value="1"
                        className={`rounded-t-lg px-4 pt-1 text-xl ${menu === 1 ? 'bg-slate-100' : 'bg-white'}`}>
                        Replies
                    </button>
                </div>
                
                <div
                    className="bg-slate-100 rounded-b-lg rounded-tr-lg p-2">
                    {menu === 0 && 
                        userPosts.map((userPost, idx)=>
                            <Posts  post={userPost} id={userPost.id} key={idx} />)
                    }
                    {menu === 1 && 
                        userReplies.map((userReply, idx)=>
                            <Reply reply={userReply} id={userReply.id} key={idx} />)
                    }
                </div>
                
            </div>
        </>
    )
}


PostHistory.propTypes = {
    userPosts :PropTypes.array,
    userReplies :PropTypes.array
}
