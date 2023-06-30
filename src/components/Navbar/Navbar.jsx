import { useContext, useEffect, useState } from 'react'
import { AuthContext } from "../../Pages/App"
import * as userService from "../../utilities/users-service"
import logoSm from '../../assets/fourbeinglogo-sm.svg'
import logo from '../../assets/fourbeinglogo.svg'

export default function Navbar() {
    const { user, setUser } = useContext(AuthContext)
    const isSmallScreen = window.innerWidth < 450
    const [windowSize, setWindowSize] = useState([0, 0])

    useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

    function logOut(){
        userService.logOut()
        setUser(null)
    }

    return (
        <>
            <div className="nav shadow-xl w-full fixed top-0 left-0  ">
                <div className="flex items-center justify-between py-2 px-10 bg-gradient-to-r from-sky-900 via-sky-800 to-sky-800 border-b-2 border-b-slate-400" >
                    
                    <div className="font-bold text-2xl cursor-pointer flex items-end ">
                        <a href="/" >
                            <img src={logo}></img>
                        </a>
                    </div>
                    <div className="items-end">
                        <div>
                            <ul className="flex justify-end gap-5 content-center">
                                <li className="md:ml-8 py-0 text-xl">
                                    <a className="text-white hover:text-gray-400 duration-300" 
                                        href='/'>Home</a>
                                </li>
                                { user ?

                                    <li className="md:ml-8 py-0  text-xl">
                                        <a className="text-white hover:text-gray-400 duration-300" 
                                            href='/'
                                            onClick={ logOut }
                                            >Logout</a>
                                    </li>
                                    :
                                    <li className="md:ml-8  py-0  text-xl">
                                    <a className="text-white hover:text-gray-400 duration-300" 
                                        href='/login'>Login</a>
                                    </li>
                                }
                            </ul>
                        </div>
                        <div className=" flex justify-items-end">
                            { user &&
                            <div className="md:ml-8 text-xl">
                                <a className="text-white hover:text-gray-400 text-sm duration-300" 
                                    href='/profile'>hello, {user}</a>
                            </div>
                            }   
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
