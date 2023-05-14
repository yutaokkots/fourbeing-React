import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function EditReply({ reply, setEditedComment }) {
    const [textInput, setTextInput] = useState(reply.comment)

    function handleChange(evt){
        setTextInput(evt.target.value)
        setEditedComment(evt.target.value)
    }
    return (
        <>
            <textarea
                className="w-full resize-y h-auto border px-2 y-2 border-gray-300 rounded-md"
                type="text"
                value={textInput}
                onChange={handleChange}
                >
            </textarea>
        </>
    )
}

EditReply.propTypes = {
  reply: PropTypes.object,
  setEditedComment: PropTypes.func
}

