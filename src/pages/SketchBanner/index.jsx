import React from "react"
import { useEffect } from 'react'

// styles
import './m-sketchBanner.css'
import './d-sketchBanner.css'

const SketchBanner = () => {

    useEffect(() => {
            window.scrollTo(0, 0)
        }, [])

    return (
        <section className="sketch">
            <div className="sketch__container">
                <span className="sketch__container__triangle sketchBanner__container__triangle triangle1Banner"></span>
                <span className="sketch__container__triangle sketchBanner__container__triangle triangle2Banner"></span>
                <span className="sketch__container__triangle sketchBanner__container__triangle triangle3Banner"></span>
            </div>
            <picture>
                <source srcSet={`${process.env.PUBLIC_URL}/assets/logos/sketchview-logo-full.png`} type="image/png" loading="lazy" fetchpriority="low" />
                <img 
                    className="sketchBanner__picture sketchBanner-logo" 
                    src={`${process.env.PUBLIC_URL}/assets/logos/sketchview-logo-full.png`} 
                    width="636" 
                    height="250"  
                    loading="lazy"  
                    alt="sketchview logo"  
                    fetchpriority="low"
                    decoding="async"
                />
            </picture>
            <picture>
                <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} type="image/png" loading="lazy" fetchpriority="low" />
                <img 
                    className="sketchBanner__picture sketchBanner-plume" 
                    src={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} 
                    width="593" 
                    height="133"  
                    loading="lazy"  
                    alt="plume"  
                    fetchpriority="low"
                    decoding="async"
                />
            </picture>
        </section>
    )
}

export default SketchBanner