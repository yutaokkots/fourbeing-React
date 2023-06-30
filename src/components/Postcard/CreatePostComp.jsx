import React, { useState, useContext} from 'react'
import { AuthContext } from '../../Pages/App';
import * as postsAPI from '../../utilities/posts_api'
import { useNavigate } from "react-router-dom"


const initialForm = {
    title: "",
    description: "",
    username: ""
}

export default function CreatePostComp() {
    const navigate = useNavigate()
    const [form, setForm ] = useState(initialForm)
    const { user } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [file, setFile] = useState("")
    const [enabled, setEnabled] = useState(false)

    function handleChange(evt) {
        setForm({ ...form, [evt.target.name]: evt.target.value });
        }

    async function createPost(info){
        info.username = user
        if (file){
            console.log(file)
            const formData = new FormData()
            formData.append('imgfile', file, `${file.name}`)
            formData.append('postdata', JSON.stringify(info))
            try {
                return postsAPI.createPostPhoto(formData)
            } catch(err){
                console.log(err)
            }
        } else if (!file){
            try {
                return await postsAPI.createPost(info)
            } catch(err){
                console.log(err)
            }
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        // let response = createPost(form)
        createPost(form).then((response) => {
            return response.data.id
        }).then((response) => {
            navigate(`/fourbeing/${response}`)
        }).catch((error) => {
            console.log(error)
            setError("There was an error")
        })
    }

    function handleFileChange(evt){
        if (evt.target.files){
            setFile(evt.target.files[0])
            setEnabled(true)
        }
    }

    return (
        <>
            <div className="shadow-md border-zinc-400 rounded-md p-2 bg-white text-lining">
                <form
                    onSubmit={handleSubmit}>
                    <div className='relative flex-row justify-between mt-2 mb-2'>
                        <label>Title: </label>
                        <input 
                            type="text" 
                            className="w-full border border-gray-300 rounded-md px-2 y-2"
                            name="title"
                            placeholder="Title" 
                            value={form.title}
                            onChange={handleChange}
                            required></input>
                        </div>
                    <div className='relative flex-row justify-between mt-2 mb-2'>
                        <label>Post: </label>
                        <textarea 
                            className="w-full resize-y h-auto border border-gray-300 rounded-md px-2 y-2"
                            type="text" 
                            name="description" 
                            placeholder="Description"
                            onChange={handleChange}
                            value={form.description}
                            required></textarea>
                    </div>
                    
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

                    </div>


                    <div>
                        {
                            error &&
                                <h1>{error}</h1>
                        }
                        <div className='flex justify-end'>
                            Post as { user }
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="bg-regallight hover:bg-regal text-white font-bold py-1 px-4 rounded-full"
                            >Submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}
