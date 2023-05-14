import React, { useState } from 'react'
import * as replyAPI from '../../utilities/reply_api'

const initialReply = {
    username : "test",
    comment: "test",
    post: null,
    id: null
}



export default function Love() {
    const [addLove, setAddLove] = useState(0)


    async function addLove(){
        await replyAPI.addLove()
        .then(()=>{

        })
    }
    function handleClick(){
        setAddLove(+1)
        

        
    }
    return (
        <button
            type="button"
            name="love"
            onClick={handleClick}
            ></button>
    )
}
