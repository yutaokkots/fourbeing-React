import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../App'

export default function ViewProfile({ profileEditor, profileExists, profile }) {
    const { user, setUser } = useContext(AuthContext)

    return (
        <>
            <div
                className="flex flex-col items-center">

            <div className="rounded-full"></div>
            {user &&
                <>
                    <div>{ profile.username }</div>
                    <div>{ profile.title }</div>
                    <div>{ profile.bio }</div>
                    <div>{ profile.location }</div>
                    <div>{ profile.website }</div>
                </>
            }

            </div>
        </>
    )
}

ViewProfile.propTypes = {
    profile: PropTypes.object,
    profileEditor: PropTypes.func,
    profileExists: PropTypes.bool
  }
  