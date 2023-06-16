
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'

import { useState, createContext, useEffect } from 'react'
import AuthPage from './AuthPage/AuthPage'
import Profile from './Profile/Profile'
import Post from '../Pages/Post/Post'
import CreatePost from '../Pages/CreatePost/CreatePost'
import EditPost from './EditPost/EditPost'
import UserProfile from './Profile/UserProfile'
import './App.css'
import * as usersAPI from '../utilities/users-service'

export const AuthContext = createContext()


export default function App() {
    const [user, setUser] = useState(usersAPI.getUser)

    const navigate = useNavigate()

    useEffect(()=>{
        setUser(usersAPI.getUser)
    }, [])
    function updateUser(userState){
        setUser(userState)
      }


    return (
        <>
            <AuthContext.Provider value={{user, setUser}}>
                <Routes>
                    <Route path='/' element={<Dashboard user={ user }/>} />
                    <Route path='/login' element={<AuthPage user={ user } setUser={ setUser}/>} />  
                    <Route path='/fourbeing/:postid' element={<Post />} />
                    
                    <Route 
                        path='/fourbeing/:postid/edit' 
                        element={user ? <EditPost /> : <Navigate to="/" />}  />
                    <Route 
                        path='/createpost' 
                        element={user ? <CreatePost user={ user } setUser={ setUser}/> : <Navigate to="/" />} />
                    <Route 
                        path='/profile/:userid' 
                        element={user ? <Profile user={ user } setUser={ setUser}/> : <Navigate to="/" />} />
                    <Route 
                        path='/profile' 
                        element={user ? <Profile user={ user } setUser={ setUser}/> : <Navigate to="/" />} /> 

                </Routes>
            </AuthContext.Provider>
        </>
    )
}
