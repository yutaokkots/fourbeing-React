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
                onClick={handleSubmit}
                >Translate</button>
        </>
    )
}

LanguageButton.propTypes = {
    submitTranslation: PropTypes.func
}