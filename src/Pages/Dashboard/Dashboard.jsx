import { useState, useEffect, useContext } from 'react'
import * as postsAPI from '../../utilities/posts_api'
import Navbar from '../../components/Navbar/Navbar'
import Posts from '../../components/Postcard/Posts'
import { AuthContext } from '../App'
import CommunityResources from '../../components/Community/CommunityResources'
import LanguageTranslator from '../../components/Language/LanguageTranslator'

export default function Dashboard() {
    const [allPosts, setAllPosts] = useState([""])
    const { user, setUser } = useContext(AuthContext)
    const [updatePage, setUpdatePage] = useState(1)

    function sortByDate(postArray){
        return [...postArray].sort((a,b) => {  
            if (a.created > b.created) {
                return -1;
            } else if (b.created < a.created) {
                return 1;
            } else {
                return 0;
            }})
    }

    function refresh(){
        setUpdatePage(-updatePage)
    }

    useEffect(() => {

        async function getPosts(){
            try{
                postsAPI.getPostAll().then((response) => {
                    return response
                }).then((response)=>{
                    setAllPosts(response.data)
                    return response.data
                }).then((response)=>{
                    setAllPosts(sortByDate(response))
                    console.log(response)
                }).catch(error => {
                    throw(error);
                })
            }
            catch(err){
                console.log('err', err)
            }}
        getPosts()

        console.log(allPosts)
        //setAllPosts(descendingSorted)
    }, [])

    return (
        <div >
            <Navbar />
            <div  className="v-screen h-screen">
                
                <div className="mt-20 px-5 grid gap-5 grid-cols-12 md:mt-10 md:pt-10">
                    <div className="col-span-12  sm:col-span-5 sm:order-2">
                        <div className="">
                            <CommunityResources />
                            <LanguageTranslator />
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-7 sm:order-1">
                        <div className="">
                            {allPosts.map((post, idx) => 
                                <Posts  post={post} id={post.id} key={idx} refresh={ refresh }/>)
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

