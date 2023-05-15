import React, { useState, useEffect }  from 'react'
import PropTypes from 'prop-types'

export default function LanguageOutput({ promptReturn, change }) {
    const [text, setText] = useState(promptReturn)
    useEffect(()=>{
        setText(promptReturn)}
    ,[change, promptReturn])

    function handleChange(evt){
        setText(evt.target.value)
    }
    return (
        <>
            <textarea 
                className="w-full resize-y h-auto border border-gray-300 rounded-md px-2 y-2 "
                type="text" 
                name="description" 
                onChange={handleChange}
                value={text}
                // value={form.description}
                >{text}</textarea>
        </>
    )
}

LanguageOutput.propTypes = {
    promptReturn: PropTypes.string,
    change: PropTypes.number
}
