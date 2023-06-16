import React from 'react'
import PropTypes from 'prop-types'

export default function Photo({ profilePhoto }) {
    return (
        <div>
            <img 
              className="rounded-lg"
              src={profilePhoto}/> 
        </div>
    )
}

Photo.propTypes = {
    profilePhoto: PropTypes.string
}
