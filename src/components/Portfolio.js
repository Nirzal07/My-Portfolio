import React, {useState} from 'react'
import Studio from '../img/studio.jpg'
import Port from '../img/portfolio.jpg'
import Imagegallery from '../img/imagegallery.jpg'
import Nirjan from '../img/nirjan.PNG'
import Idea from '../img/idea.PNG'

export const Portfolio = ({id}) => {


    return (
        <>
        <p className='section-title' id={id}>My Portfolio</p>

        <section className='portfolio'>
        <div className='portfolio-inner'>
        <a target="_blank" href='https://idea100studios.com/'> 
        <div className='each-portfolio'>
        <img src={Studio} className='portfolio-image'/>    
        <p className='portfolio-title'> Studio </p>
        </div>
        </a>
        <a target="_blank" href='https://nirjanmahat.com/'>
        <div className='each-portfolio'>
        <img src={Port}  className='portfolio-image'/>    
        <p className='portfolio-title'> Portfolio </p>
        </div>
        </a>
        <a>
        <div className='each-portfolio'>
        <img src={Imagegallery} className='portfolio-image'/>    
        <p className='portfolio-title'> Image Gallery </p>
        </div>
        </a>
        </div>
        </section>
        </>
    )
}
