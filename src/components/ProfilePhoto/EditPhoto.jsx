import React, { useState } from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import * as profileAPI from '../../utilities/profile-api'


export default function EditPhoto({ editorChooser, profilePhoto, setPhoto }) {
    const [file, setFile] = useState("")
    const [enabled, setEnabled] = useState(false)
    const [error, setError] = useState('')

    function handleFileChange(evt){
        if (evt.target.files){
            setFile(evt.target.files[0])
            setEnabled(true)
        }
    }

    async function uploadPhoto(file){
        const formData = new FormData()
        formData.append('imgfile', file, `${file.name}`)
        await profileAPI.addProfilePhoto(formData)
        .then((data)=>{
            let photoUrl = data.photo.url
            setPhoto(photoUrl)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    async function editPhoto(file){
        const formData = new FormData()
        formData.append('imgfile', file, `${file.name}`)
        await profileAPI.editProfilePhoto(formData)
        .then((data)=>{
            let photoUrl = data.photo.url
            setPhoto(photoUrl)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    function handleUploadClick(evt){
        evt.preventDefault()
        if (!file){
            return
        }
        if (!profilePhoto){
            uploadPhoto(file)
        } else if (profilePhoto) {
            editPhoto(file)
        }
    }

    function handleClick(){
        editorChooser()
    }


    return (
        <>
            { profilePhoto && 
                <Photo profilePhoto={profilePhoto} />
            }
            
            <div>
                <form
                    onSubmit={ handleUploadClick }
                    >
                    <div
                        className="flex relative flex-row justify-between my-2 items-center "
                        >
                        <div>
                            <input 
                                type="file" 
                                name="imgfile"
                                accept="image/*"
                                encType="multipart/form-data"
                                onChange={handleFileChange} />
                                
                            <div>{file && `${file.name} - ${file.type}`}</div>
                        </div>
                        <div>
                            <button 
                                disabled={!enabled}
                                className="bg-regallight hover:bg-regal text-white font-bold py-1 px-3 rounded-full disabled:bg-gray-400"
                                type='submit'
                                >Upload</button>
                        </div>
                    </div>

                    <div
                        className="pt-4 flex flex-col items-center">
                        <button
                            className=""
                            onClick={handleClick}>
                            ⬅ Go back
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

EditPhoto.propTypes = {
    editorChooser: PropTypes.func,
    profilePhoto: PropTypes.string
  }
  