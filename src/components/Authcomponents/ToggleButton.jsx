import React from 'react'
import PropTypes from 'prop-types'

export default function ToggleButton({toggler, toggleState}) {


    function handleClick(evt){
        evt.preventDefault()
        toggler()
      }
    return (
    
    <>
        <div className=''>
            <div className="flex flex-col items-center text-sm">
                {toggleState < 0 ? 'Already registered?' : 'New User?'}<span> </span>
            </div>
            <div className="flex flex-col items-center ">
                <button
                    className="text-land"
                    onClick={handleClick}
                >{toggleState < 0 ? '⬅ Log in ' : 'Sign up ➡'}</button>
            </div>
        </div>
    </>

  )
}


ToggleButton.propTypes = {
    toggler: PropTypes.func,
    toggleState: PropTypes.number
}
