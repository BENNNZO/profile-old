// require('dotenv').config()
import React, { useRef, useState } from 'react';
import axios from 'axios'
import '../assets/styles/contact-me.scss'

export default function ContactMe() {
    const [sent, setSent] = useState(false)
    const [sending, setSending] = useState(false)

    let firstRef = useRef()
    let lastRef = useRef()
    let textRef = useRef()
    let emailRef= useRef()
    let phoneRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        setSending(true)
        console.log('submitting data')
        axios.post('/email', {
            subject: '⚠️ PROFILE CONTACT',
            first: firstRef.current.value,
            last: lastRef.current.value,
            text: textRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
        })
        .then(() => {
            setSending(false)
            setSent(true)
        })
        .catch(err => {
            console.log(err)
            setSending(false)
        })
    }

    return (
        <section className='wrapper-contact-me' id='contact-me'>
            <h2>CONTACT ME</h2>
            {sent ? <h1 className='sent'>SENT!</h1> : (sending ? <h1 className='sending'>SENDING...</h1> : (
                <>
                    <div className="form-positioning">
                        <form onSubmit={handleSubmit}>
                            <div className="full-name">                        
                                <p>Full Name</p>
                                <div>
                                    <input type="text" ref={firstRef} placeholder='First name' required={false}/>
                                    <input type="text" ref={lastRef} placeholder='Last name' required={false}/>
                                </div>
                            </div>
                            <div className="email">
                                <p>Email</p>
                                <input type="email" ref={emailRef} placeholder='Email' required={false}/>
                            </div>
                            <div className="phone-number">
                                <p>Phone Number</p>
                                <input type="tel" ref={phoneRef} placeholder='Phone' pattern="[0-9]*" required={false}/>
                            </div>
                            <div className="email-body">
                                <p>Email Body</p>
                                <textarea ref={textRef} placeholder='Message' required={false}/>
                            </div>
                            <button>SEND EMAIL</button>
                        </form>
                    </div>
                </>
                )
            )}
        </section>
    )
}