import React from 'react'
import PropTypes from 'prop-types'
export default function LanguageButton({ submitTranslation }) {
    function handleSubmit(evt){
        evt.preventDefault()
        submitTranslation()
    }
    return (
        <>
            <button
                className='bg-slate-50 rounded-md hover:bg-slate-800 hover:text-white'
                onClick={handleSubmit}
                >Translate</button>
        </>
    )
}

LanguageButton.propTypes = {
    submitTranslation: PropTypes.func
}