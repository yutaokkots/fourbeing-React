import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function LanguageInput({ setPromptRequest }) {
    const [text, setText] = useState("")
    
    function handleChange(evt){
        setText(evt.target.value)
        setPromptRequest(evt.target.value)
    }

    return (
        <>
            <textarea 
                className="w-full resize-y h-auto border border-gray-300 rounded-md px-2 y-2 "
                type="text" 
                name="description" 
                value={text}
                placeholder="Description"
                onChange={handleChange}
                // value={form.description}
                required></textarea>

        </>
    )
}

LanguageInput.propTypes = {
    setPromptRequest: PropTypes.func
}