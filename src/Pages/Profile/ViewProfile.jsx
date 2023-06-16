import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../App'
import Photo from '../../components/ProfilePhoto/Photo'


export default function ViewProfile({ editorChooser, profileExists, profile, profilePhoto }) {
    const { user, setUser } = useContext(AuthContext)

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="rounded-full"></div>
                {
                    user &&
                    <>
                        {profilePhoto != "" && 
                        <Photo profilePhoto={profilePhoto} />
                        }
                        <div className="ml-auto">username: {user}</div>

                        <div>{ profile.title }</div>
                        <div>{ profile.bio }</div>
                        <div>{ profile.location }</div>
                        <div><a href={ 'https://' + profile.website }>{ profile.website }</a></div>
                    </>
                }
                
            </div>
            <div 
                className="flex justify-end">
                <div>
                    <button
                            className="ml-auto"
                            type="button"
                            onClick={() => editorChooser(1)}
                            >
                            {
                            profileExists ?
                            "Edit"
                            :    
                            "Create Profile"
                            }
                                
                    </button>
                </div>
                <div>
                    <span>&nbsp; | &nbsp;</span>
                </div>
                <div>
                    <button
                            className="ml-auto"
                            type="button"
                            onClick={() => editorChooser(2)}
                            >
                            {
                            profilePhoto ?
                            "Edit Photo"
                            :    
                            "Add Photo"
                            }    
                    </button>
                </div>
            </div>
        </>
    )
}

ViewProfile.propTypes = {
    profile: PropTypes.object,
    editorChooser: PropTypes.func,
    profileExists: PropTypes.bool,
    profilePhoto: PropTypes.string,
  }
  