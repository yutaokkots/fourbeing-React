import React, { useState, useEffect } from 'react'
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


    // async function translate(content){
    //     try {
    //         const response = await translateAPI.translate(content);
    //         if (response.message === "success") {
    //             setWaiting(false);
    //             setPromptReturn(response.text);
    //             console.log(response.text);
    //             return "success";
    //         }
    //     } catch (error) {
    //         console.log(error);
    //         setError("There was an error");
    //         setWaiting(false);
    //     }
    // }

    // useEffect(() => {
    //     if (promptReturn !== "") {
    //         setChange(-change);
    //         console.log(promptReturn);
    //     }
    // }, [promptReturn]);

    // function submitTranslation(){
    //     setError("");
    //     if (!promptRequest) {
    //         setError("There was an error");
    //     } else {
    //         const translationPrompt = {
    //             prompt: promptRequest,
    //             language: promptLanguage.code
    //         }
    //         setWaiting(true);
    //         translate(translationPrompt);
    //         console.log(promptReturn);
    //     }
    // }

    useEffect(()=>{

    }, [waiting, promptReturn, change])

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
        console.log(translation)
        console.log(promptReturn)


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
            console.log(promptReturn)

        }
        setChange(-change)
    }

    return (
        <>
            <div >
                <div
                    className="gap-5">
                        <div className="py-2">
                            <LanguageInput setPromptRequest={ setPromptRequest }/>
                        </div>
                        <div className="pb-4 grid grid-cols-2">
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

            </div>
        </>
    )
}
