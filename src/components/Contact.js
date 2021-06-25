import React from 'react'

export const Contact = ({id}) => {
    return (
        <>
        <p className='section-title' id= {id}>Contact Me</p>
        <section className='contact'>
        <div className='inner-contact'>
            <p className='top'>You've got a project?</p>
            <p className='mid'>Let's work together</p>
            <button> <a href='tel:+9779860735798'> Hire Me </a></button>
        </div>
        </section>
        </>
    )
}
