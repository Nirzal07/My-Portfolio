import React from 'react'
import uiux from '../img/uiux.png'
import backend from '../img/backend.png'
import seo from '../img/seo.png'

export const Services = ({id}) => {
    return (
        <>
        <p className='section-title service-main-title' id={id}>Services I Offer</p>
        <section className='services'>
        <div className='services-inner'>
            <article className= 'ui-ux'>
                <div className='services-text'>
                    <p className='service-title'> UI/UX Design </p>
                    <p className='inner-text'> I design well crafted and visually appaling Interface 
                    for your website/app that will take your customers on an 
                    amazing journey from the very first second of using your product.</p>
                </div>
                <div>
                    <img src={uiux} className='services-image' />
                </div>
            </article>

            <article className= 'backend'>
                <div className='services-text'>
                    <p className='service-title long'> Backend Development </p>
                    <p className='inner-text'> With my backend programming and security skills I make 
                    client-focused, customer-centric website solutions that deliver  
                    tangible results on time and within budget.</p>
                </div>
                <div>
                    <img src={backend} className='services-image' />
                </div>
            </article>

            <article className= 'seo'>
                <div className='services-text'>
                    <p className='service-title'> SEO Services </p>
                    <p className='inner-text'> I maximize the results of your website,
                    as well as improve your digital marketing strategy, by ensuring your website
                    follows best practices for search engine optimization (SEO). </p>
                </div>
                <div>
                    <img src={seo} alt='section2' className='services-image' />
                </div>
            </article>
            </div>
        </section>

        </>
    )
}
