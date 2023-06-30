import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AuthContext } from '../../Pages/App' 
import * as postsAPI from '../../utilities/posts_api'
import DeleteEditComp from '../DeleteEditComp/DeleteEditComp'

const initialPost = {
    title : "",
    description : "",
    created : "",
    username : ""
}

export default function EditPostCard() {
    const postId = useParams()
    const navigate = useNavigate()
    const [form, setForm ] = useState(initialPost)
    const [post, setPost] = useState(initialPost)
    const { user, userId } = useContext(AuthContext)
    const [error, setError] = useState('')

    // retrieves form information based on url parameter information:
    // '/fourbeing/:postid/edit'
    useEffect(() => {
        async function getPost(){
            await postsAPI.getPost(postId.postid).then((response) => {
                setForm(response.data)
                setPost(response.data)
            }).catch((error)=>{console.log(error)})
        }
        getPost()
    }, [])

    function handleChange(evt) {
        setForm({ ...form, [evt.target.name]: evt.target.value });
        }

    async function updatePost(info){
        info.username = user
        try {
            return await postsAPI.updatePost(info, postId.postid)
        } catch(err){
            console.log(err)
            return false
        }
    }

    async function deletePost(userId, postId){
        return await postsAPI.deletePost(userId, postId)
    }

    function handleSubmit(evt) {
        evt.preventDefault(userId, postId)
        updatePost(form).then((response) => {
            return response.id
        }).then((response) => {
            navigate(`/fourbeing/${response}`)
        }).catch((error) => {
            console.log(error)
            setError("There was an error")
        })
    }


    function handleDelete(evt){
        evt.preventDefault()
        deletePost(post.profile, post.id)
        .then((response) => {
            if (response.message == "deleted"){
                navigate("/")
            }
        }).catch((error) => {
            console.log(error)
            setError("There was an error")
        })
   
    }

    return (
        <>
            <div className="shadow-md bg-white p-2 border-zinc-400 text-regal  md:mt-10 rounded-md hover:text-afterhour hover:border-afterhour">
                <div className="col-span-2">
                    Editing: {form.title}
                </div>
                <div className="col-span-10">
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
                        <div className="flex justify-end">
                            {
                                error &&
                                    <h1 className="text-red-600">{error} &nbsp;</h1>
                            }
                            <h1>Post as { user }</h1>
                        </div>
                        <DeleteEditComp 
                            handleDelete={handleDelete}
                            handleSubmit={handleSubmit}
                            post={post}/>
                        <div className="flex justify-end">

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
    id: PropTypes.number,

}

