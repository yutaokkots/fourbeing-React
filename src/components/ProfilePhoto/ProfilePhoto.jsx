import React from 'react'
import Photo from './Photo'

export default function ProfilePhoto() {
    return (
        <>
            <div className="shadow-md w-60 sm:w-60 md:w-80 lg:w-96 mb-1 p-3 pt-4 border-zinc-400 text-regal  rounded-md">
                <Photo />
                <button>
                    Edit Photo
                </button>
            </div>
        </>
    )
}
