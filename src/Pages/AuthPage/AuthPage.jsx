import React, { useState } from 'react'
import LoginForm from '../../components/Authcomponents/LoginForm'
import SignupForm from '../../components/Authcomponents/SignupForm'
import ToggleButton from '../../components/Authcomponents/ToggleButton'
import Navbar from '../../components/Navbar/Navbar'


export default function AuthPage( { user, setUser } ) {
    const [toggle, setToggle] = useState(1)

    // sets what is displayed on this page using unary, 
    // 1 for login, -1 for signup
    function handleToggle(){
        setToggle(-toggle)
    }

  return (
    <><div className="bg-gradient-to-b h-screen from-pink-100 via-slate-50 to-transparent">
    <Navbar />
        <div className="pt-20 gap-5 flex flex-col items-center ">
            {
                toggle > 0 ? (
                    <>
                        <LoginForm user={ user } setUser={ setUser}/>
                    </>
                )
                    :
                    (
                    <>
                        <SignupForm user={ user } setUser={ setUser}/>
                    </>
                    )
            }
            <ToggleButton toggler={ handleToggle } toggleState={ toggle } />
            
        </div>
        </div>
    </>
  )
}
