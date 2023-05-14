import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AuthContext } from '../../Pages/App' 
import * as postsAPI from '../../utilities/posts_api'

const initialPost = {
    title : "test",
    description : "test",
    created : "date",
    username : ""
}


export default function EditPostCard() {
    const postId = useParams()
    const navigate = useNavigate()
    const [form, setForm ] = useState(initialPost)
    const { user } = useContext(AuthContext)
    const [error, setError] = useState('');
    //const [singlePost, setSinglePost] = useState(initialPost)

    useEffect(() => {
        async function getPost(){
            await postsAPI.getPost(postId.postid).then((response) => {
                setForm(response.data)
            }).catch((error)=>{console.log(error)})
            
        }
        getPost()
    }, [])

    function handleChange(evt) {
        setForm({ ...form, [evt.target.name]: evt.target.value });
        }

    async function createPost(info){
        info.username = user
        try {
            return await postsAPI.updatePost(info, postId.postid)
        } catch(err){
            console.log(err)
            return false
        }
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        createPost(form).then((response) => {
            console.log(response)
            return response.id
        }).then((response) => {
            navigate(`/fourbeing/${response}`)
        }).catch((error) => {
            console.log(error)
            setError("There was an error")
        })
    }

    return (
        <>
            <div className="border-2 bg-white border-zinc-400 text-regal p-1 rounded-md hover:text-afterhour hover:border-afterhour">
                <div className="col-span-2">
                    {form.title}
                </div>
                <div className="col-span-10">
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
                    <div className="flex justify-end">
                        {
                            error &&
                                <h1>{error}</h1>
                        }
                        <h1>Post as { user }</h1>
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="bg-regallight hover:bg-regal text-white font-bold mt-2 py-1 px-4 rounded-full"
                            >Submit</button>
                    </div>

                </form>
                    <div className=" text-left">

                    </div>
                </div>
            </div>    
        </>
    )
}

EditPostCard.propTypes = {
    id: PropTypes.number
}

