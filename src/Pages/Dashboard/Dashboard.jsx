import { useState, useEffect, useContext } from 'react'
import * as postsAPI from '../../utilities/posts_api'
import Navbar from '../../components/Navbar/Navbar'
import Posts from '../../components/Postcard/Posts'
import { AuthContext } from '../App'
import CommunityResources from '../../components/Community/CommunityResources'

export default function Dashboard() {
    const [allPosts, setAllPosts] = useState([""])
    const { user, setUser } = useContext(AuthContext)

    useEffect(() => {
        async function getPosts(){
            try{
                postsAPI.getPostAll().then((response) => {
                    return response
                }).then((response)=>{
                    setAllPosts(response.data)
                }).catch(error => {
                    throw(error);
                })
            }
            catch(err){
                console.log('err', err)
            }}
        getPosts()
        let descendingSorted = [...allPosts].sort((a,b) => {  
            if (a.created > b.created) {
                return -1;
            } else if (b.created < a.created) {
                return 1;
            } else {
                return 0;
            }})
        setAllPosts(descendingSorted)
    }, [])

    return (
        <div >
            <Navbar />
            <div  className="v-screen h-screen">
                
                <div className="mt-20 px-5 grid gap-5  grid-cols-12 md:mt-10 md:pt-10">
                    <div className="col-span-12  sm:col-span-5 sm:order-2">
                        <div className="">
                            <CommunityResources />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-7 sm:order-1">
                        <div className="">
                            {allPosts.map((post, idx) => 
                                <Posts  post={post} id={post.id} key={idx}/>)
                            }
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}


// 'midnight': '#091123',
// 'afterhour':'#212A3E',
// 'moonlight':'#F1F6F9',
// 'regal': '#34172D',
// 'lining':'#d678a4',

