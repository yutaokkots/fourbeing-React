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
            <div className="nav shadow-lg w-full fixed top-0 left-0">
                <div className="flex  items-center justify-between bg-white py-3 px-10 px-7">
                    
                    <div className="font-bold text-2xl cursor-pointer flex items-end ">
                        <a href="/" >
                            { windowSize[0] < 340 ?
                            <img src={logoSm}></img>
                            :
                            <img src={logo}></img>
                            }
                        </a>
                    </div>
                    <div className="items-end">
                        <div>
                            <ul className="flex justify-end gap-5 content-center">
                                <li className="md:ml-8 text-xl">
                                    <a className="text-gray-800 hover:text-gray-400 duration-300" 
                                        href='/'>Home</a>
                                </li>
                                { user ?

                                    <li className="md:ml-8 text-xl">
                                        <a className="text-gray-800 hover:text-gray-400 duration-300" 
                                            href='/'
                                            onClick={ logOut }
                                            >Logout</a>
                                    </li>
                                    :
                                    <li className="md:ml-8 text-xl">
                                    <a className="text-gray-800 hover:text-gray-400 duration-300" 
                                        href='/login'>Login</a>
                                    </li>
                                }
                            </ul>
                        </div>
                        <div className=" flex justify-items-end">
                            { user &&
                            <div className="md:ml-8 text-xl">
                                <a className="text-gray-800 hover:text-gray-400 text-sm duration-300" 
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
