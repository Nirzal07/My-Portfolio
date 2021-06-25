import React from 'react'
import uiux from '../img/uiux.png'
import backend from '../img/backend.png'
import seo from '../img/seo.png'

export const Skills = ({id}) => {
    return (
        <>
        <p className='section-title' id={id}>My Skills</p>

        <section className='skills'>
           <div className='skill'>
               <div className='skill-title'> <p>HTML</p> <p>90%</p> </div>
               <div className='html blue-line'></div>
               <div className='white-line'></div>
           </div>
           <div className='skill'>
               <div className='skill-title'> <p>CSS</p> <p>85%</p> </div>
               <div className='css blue-line'></div>
               <div className='white-line'></div>
           </div>
           <div className='skill'>
               <div className='skill-title'> <p>JAVASCRIPT</p> <p>85%</p> </div>
               <div className='javascript blue-line'></div>
               <div className='white-line'></div>
           </div>
           <div className='skill'>
               <div className='skill-title'> <p>REACT</p> <p>80%</p> </div>
               <div className='html blue-line'></div>
               <div className='white-line'></div>
           </div>
           <div className='skill'>
               <div className='skill-title'> <p>PYTHON</p> <p>100%</p> </div>
               <div className='python blue-line'></div>
               <div className='white-line'></div>
           </div>
           <div className='skill'>
               <div className='skill-title'> <p>DJANGO</p> <p>95%</p> </div>
               <div className='django blue-line'></div>
               <div className='white-line'></div>
           </div>
           <div className='skill'>
               <div className='skill-title'> <p>MYSQL</p> <p>85%</p> </div>
               <div className='mysql blue-line'></div>
               <div className='white-line'></div>
           </div>
        </section>
        </>
    )
}
