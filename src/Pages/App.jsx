
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'

import { useReducer, useState, createContext, useEffect } from 'react'
import AuthPage from './AuthPage/AuthPage'
import Profile from './Profile/Profile'
import Post from '../Pages/Post/Post'
import CreatePost from '../Pages/CreatePost/CreatePost'
import EditPost from './EditPost/EditPost'
import UserProfile from './Profile/UserProfile'
import './App.css'
import * as usersAPI from '../utilities/users-service'

export const AuthContext = createContext()

const initialState = {
    isAuthenticated: false,
    user: null
}

const reducer = (state, action) => {
    // switches between the two states, login and logout
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
            };
        case "LOGOUT":
            return {
            ...state,
            isAuthenticated: false,
            user: null
            };
        default:
            return state;
    }
  };


export default function App() {
    const [userState, dispatch] = useReducer(reducer, initialState)
    const [user, setUser] = useState(usersAPI.getUser)

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
                    <Route path='/profile/:userid' element={<UserProfile user={ user } setUser={ setUser}/>} />
                    <Route path='/fourbeing/:postid' element={<Post />} />
                    
                    { user &&
                    <>
                    <Route path='/fourbeing/:postid/edit' element={<EditPost />} />
                    <Route path='/createpost' element={<CreatePost user={ user } setUser={ setUser}/>} />
                    <Route path='/profile' element={<Profile user={ user } setUser={ setUser}/>} />
                    </>
                    }
                </Routes>
            </AuthContext.Provider>
        </>
    )
}
