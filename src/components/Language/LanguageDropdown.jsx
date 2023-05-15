import React, { useState } from 'react'
import PropTypes from 'prop-types'
const languages = [
    {code:"en",
     language:"English"
    }, 
    {code:"es",
    language:"Spanish"
    }, 
    {code:"hi",
    language:"Hindi"
    }, 
    {code:"zh",
     language:"Mandarin Chinese"
    }, 
    {code:"ko",
     language:"Korean"
    }, 
    {code:"ja",
     language:"Japanese"
    }, 
    {code:"vi",
    language:"Vietnamese"
    }, 
    {code:"th",
     language:"Thai"
    }, 
    {code:"uk",
    language:"Ukranian"
    },
    {code:"pt",
     language:"Portuguese"
    }, 
    {code:"ru",
     language:"Russian"
    }, 
    {code:"fr",
     language:"French"
    }, 
    {code:"it",
     language:"Italian"
    }, 
    {code:"ar",
    language:"Standard Arabic"
    }, 
    {code:"de",
        language:"German"
    }
]

export default function LanguageDropdown({setPromptLanguage}) {
    const [openDropdown, setOpenDropdown] = useState({code:"", language:""})
    
    function handleDropdown(evt){
        const result = evt.target.value.split(':')
        const selectedLanguage = {
            code: result[0],
            language: result[1]
        }
        setOpenDropdown(selectedLanguage)
        setPromptLanguage(selectedLanguage)
    }
    return (
        <>  
            <select
                onChange={handleDropdown}
                className="w-full border border-gray-300 rounded-md px-2 y-2"
                >
                <option>Select</option>
                {
                    languages.map((language, idx) =>                 
                            <option                 
                                name={language.code}
                                value={`${language.code}: ${language.language}`}
                                key={idx}
                                >{language.language}</option>
                    )
                }
                </select>
        </>
    )
}

LanguageDropdown.propTypes = {
    setPromptLanguage:PropTypes.func
}