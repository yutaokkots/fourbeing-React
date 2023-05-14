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

    function handleChange(evt) {
        setForm({ ...form, [evt.target.name]: evt.target.value });
        }

    async function createPost(info){
        info.username = user
        try {
            return await postsAPI.createPost(info)
        } catch(err){
            console.log(err)
            return false
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        // let response = createPost(form)
        createPost(form).then((response) => {
            console.log(response)
            return response.data.id
        }).then((response) => {
            navigate(`/fourbeing/${response}`)
        }).catch((error) => {
            console.log(error)
            setError("There was an error")
        })
    }

    return (
        <>
            <div className="border-2 border-zinc-400 rounded-md p-2 bg-white text-lining">
                <form
                    onSubmit={handleSubmit}>
                    <div className='relative flex-row justify-between mt-2 mb-2'>
                        <label>Title: </label>
                        <input 
                            type="text" 
                            className="w-full border border-gray-300 rounded-md"
                            name="title"
                            placeholder="Title" 
                            value={form.title}
                            onChange={handleChange}
                            required></input>
                        </div>
                    <div className='relative flex-row justify-between mt-2 mb-2'>
                        <label>Post: </label>
                        <textarea 
                            className="w-full resize-y h-auto border border-gray-300 rounded-md"
                            type="text" 
                            name="description" 
                            placeholder="Description"
                            onChange={handleChange}
                            value={form.description}
                            required></textarea>
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
