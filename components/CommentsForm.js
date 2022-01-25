import React, { useState, useEffect, useRef } from 'react'
import { submitComment } from '../services'

 

const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false)
    const [localStorage, setLocalStorage] = useState(null)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const commentEl = useRef()
    const nameEl = useRef()
    const emailEl = useRef()
    const storeDataEl = useRef()

    useEffect(() => {
        nameEl.current.value = window.localStorage.getItem('name')
        emailEl.current.value = window.localStorage.getItem('email') 
    }, [])

    const handleCommentSubmission = () => {
        setError(false)

        const { value: comment } = commentEl.current
        const { value: name } = nameEl.current
        const { value: email } = emailEl.current
        const { checked: storeData } = storeDataEl.current

        if(!comment || !name || !email) {
            setError(true)
            return
        }

        const commentObj = {
            name, email, comment, slug
        }

        if(storeData) {
            window.localStorage.setItem('name', name)
            window.localStorage.setItem('email', email)
        } else {
            window.localStorage.removeItem('name', name)
            window.localStorage.removeItem('email', email)
        }

        submitComment(commentObj)
            .then((res) => {
                setShowSuccessMessage(true)
                setTimeout(() => {
                    setShowSuccessMessage(false)
                }, 3000)
            })
    }

    return (
        <div className='bg-gray-700 bg-opacity-30 rounded-lg p-8 pb-12 mb-8'>
            <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Post a Comment</h3>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <textarea 
                    className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-300 bg-opacity-30'
                    ref={commentEl}
                    placeholder='Comment'
                    name='comment'
                />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                <input 
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-300 bg-opacity-30'
                    ref={nameEl}
                    type='text'
                    placeholder='Name'
                    name='name'
                />
                <input 
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-300 bg-opacity-30'
                    ref={emailEl}
                    type='text'
                    placeholder='Email'
                    name='email'
                />
            </div>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <div>
                    <input ref={storeDataEl} type='checkbox' id='storeData' name='storeData' value='true'/>
                    <label className='text-gray-300 cursor-pointer ml-4' htmlFor="storeData">Save my e-mail and name for the next time I comment.</label>
                </div>
            </div>
            {error && <p className='text-sm text-red-500 mb-2'>All fields are required</p>}
            <div>
                <button 
                    type='button' 
                    onClick={handleCommentSubmission}
                    className='px-8 py-3 transition duration-500 ease hover:bg-pink-800 hover:ring-2 hover:ring-gray-200 inline-block bg-pink-600 text-lg rounded-full text-white'    
                >
                    Post Comment
                </button>
                {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for review</span>}
            </div>
        </div>
    )
}

export default CommentsForm
