import React, { useState, useEffect, useLayoutEffect } from 'react'
import LanguageDropdown from './LanguageDropdown'
import LanguageInput from './LanguageInput'
import LanguageOutput from './LanguageOutput'
import LanguageButton from './LanguageButton'
import * as translateAPI from "../../utilities/translate-api"

export default function LanguageComp() {
    const [promptRequest, setPromptRequest] = useState("")
    const [promptLanguage, setPromptLanguage] = useState({code:"", language:""})
    const [promptReturn, setPromptReturn] = useState("")
    const [waiting, setWaiting] = useState(false)
    const [error, setError] = useState('');
    const [change, setChange] = useState(1)
    const [hide, setHide] = useState(false)

    // useEffect(()=>{

    // }, [waiting, promptReturn, change])

    useEffect(() => {
        function handleResize() {
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          const isSmallScreen = windowWidth < 450 && windowHeight < 900 || windowWidth / windowHeight < 0.76 && windowHeight < 950;
          setHide(isSmallScreen);
        }
    
        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [waiting, promptReturn, change]);


    async function translate(content){
        const translation = await translateAPI.translate(content)
            .then((response)=>{
                if (response.message === "success"){
                    setWaiting(false)
                    setPromptReturn(response.text)  
                } else {
                    setError("There was an error")
                    throw new Error("There was an error")
                }
                return response.text
            }).catch((error) => {
                console.log(error)
                setError("There was an error")
                setWaiting(false)
            })
        setPromptReturn(translation)
    }

    function submitTranslation(){
        setError("")
        if (!promptRequest){
            setError("There was an error")
        } else {
            const translationPrompt = {
                prompt: promptRequest,
                language: promptLanguage.code
            }
            setWaiting(true)
            translate(translationPrompt)
        }
        setChange(-change)
    }

    function setShowHide(){
        setHide(!hide)
    }

    return (
        <>
            <div >
                <div
                    className="flex flex-col items-start text-lg">
                    OpenAI-powered Translator Tool
                </div>
                <div className="flex flex-col items-end">
                    <button
                        onClick={setShowHide}
                        className="text-gray-400"
                        >
                        {hide ? "Show translator" : "Hide translator" }
                    </button>
                </div>
                {hide ? 
                <></>
                :
                <div
                    className="gap-5">
                        <div className="py-2">
                            <LanguageInput setPromptRequest={ setPromptRequest }/>
                        </div>
                        <div className="pb-4 grid grid-cols-2 gap-2">
                            <LanguageDropdown setPromptLanguage={ setPromptLanguage }/>
                            <LanguageButton submitTranslation={ submitTranslation }/>
                        </div>
                        <div>
                            {waiting && "loading"
                            }
                            {error === "There was an error" && 
                                "There was an error"
                            }
                        </div>
                        <div 
                            className="pb-2 ">
                            <LanguageOutput promptReturn={ promptReturn } change={ change } />
                        </div>
                </div>
                }

            </div>
        </>
    )
}
