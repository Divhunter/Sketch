import React, { useState } from "react"
import { Link } from 'react-router-dom'

// styles
import './m-sketchHeader.css'
import './d-sketchHeader.css'

const SketchHeader = () => {
    const [isHovered1, setIsHovered1] = useState(false)
    const [isHovered2, setIsHovered2] = useState(false)
    const [isHovered3, setIsHovered3] = useState(false)

    const [showFlash1, setShowFlash1] = useState(false)
    const [showFlash2, setShowFlash2] = useState(false)
    const [showFlash3, setShowFlash3] = useState(false)

    const handleFlash = (setFlashState) => {
        setFlashState(true)
        setTimeout(() => setFlashState(false), 100)
    }

    return (
        <section className="sketchHeader">
            <nav className="sketchHeader__nav">
                <Link to="/">
                    <picture>
                        <source srcSet={`${process.env.PUBLIC_URL}/assets/logos/sketchview-logo.png`} type="image/png" loading="lazy" fetchpriority="low" />
                        <img 
                            className="sketch-logo" 
                            src={`${process.env.PUBLIC_URL}/assets/logos/sketchview-logo.png`} 
                            width="966" 
                            height="880" 
                            loading="lazy"  
                            alt="sketchview-logo"  
                            fetchpriority="low"
                            decoding="async"
                        />
                    </picture>
                </Link>

                <menu className="sketchHeader__nav__menu">

                    {/* INFO BUTTON */}
                    <Link to="/SketchInfo">
                        <picture>
                            <source
                                srcSet={
                                    showFlash1
                                        ? `${process.env.PUBLIC_URL}/assets/pictures/Home3.png`
                                        : isHovered1
                                        ? `${process.env.PUBLIC_URL}/assets/pictures/Home2.png`
                                        : `${process.env.PUBLIC_URL}/assets/pictures/Home1.png`
                                }
                                type="image/png"
                            />
                            <img
                                className={`sketchHeader__nav__menu__picture sketch-info-button ${showFlash1 ? 'flash' : ''}`}
                                onMouseEnter={() => setIsHovered1(true)}
                                onMouseLeave={() => setIsHovered1(false)}
                                onClick={() => handleFlash(setShowFlash1)}
                                src={
                                    showFlash1
                                        ? `${process.env.PUBLIC_URL}/assets/pictures/Home3.png`
                                        : isHovered1
                                        ? `${process.env.PUBLIC_URL}/assets/pictures/Home2.png`
                                        : `${process.env.PUBLIC_URL}/assets/pictures/Home1.png`
                                }
                                width="304"
                                height="384"
                                loading="lazy"
                                alt="Icône information"
                                decoding="async"
                            />
                        </picture>
                    </Link>

                    {/* PROJET BUTTON */}
                    <Link to="/SketchCrea">
                        <picture>
                            <source
                                srcSet={
                                    showFlash2
                                        ? `${process.env.PUBLIC_URL}/assets/pictures/projet3.png`
                                        : isHovered2
                                        ? `${process.env.PUBLIC_URL}/assets/pictures/projet2.png`
                                        : `${process.env.PUBLIC_URL}/assets/pictures/projet1.png`
                                }
                                type="image/png"
                            />
                            <img
                                className={`sketchHeader__nav__menu__picture sketch-crea-button ${showFlash2 ? 'flash' : ''}`}
                                onMouseEnter={() => setIsHovered2(true)}
                                onMouseLeave={() => setIsHovered2(false)}
                                onClick={() => handleFlash(setShowFlash2)}
                                src={
                                    showFlash2
                                        ? `${process.env.PUBLIC_URL}/assets/pictures/projet3.png`
                                        : isHovered2
                                        ? `${process.env.PUBLIC_URL}/assets/pictures/projet2.png`
                                        : `${process.env.PUBLIC_URL}/assets/pictures/projet1.png`
                                }
                                width="304"
                                height="384"
                                loading="lazy"
                                alt="Pointe de stylo"
                                decoding="async"
                            />
                        </picture>
                    </Link>

                    {/* CONTACT BUTTON */}
                    <Link to="/SketchTchat">
                        <picture>
                            <source
                                srcSet={
                                    showFlash3
                                        ? `${process.env.PUBLIC_URL}/assets/pictures/contact3.png`
                                        : isHovered3
                                        ? `${process.env.PUBLIC_URL}/assets/pictures/contact2.png`
                                        : `${process.env.PUBLIC_URL}/assets/pictures/contact1.png`
                                }
                                type="image/png"
                            />
                            <img
                                className={`sketchHeader__nav__menu__picture sketch-tchat-button ${showFlash3 ? 'flash' : ''}`}
                                onMouseEnter={() => setIsHovered3(true)}
                                onMouseLeave={() => setIsHovered3(false)}
                                onClick={() => handleFlash(setShowFlash3)}
                                src={
                                    showFlash3
                                        ? `${process.env.PUBLIC_URL}/assets/pictures/contact3.png`
                                        : isHovered3
                                        ? `${process.env.PUBLIC_URL}/assets/pictures/contact2.png`
                                        : `${process.env.PUBLIC_URL}/assets/pictures/contact1.png`
                                }
                                width="304"
                                height="384"
                                loading="lazy"
                                alt="Icône utilisateur"
                                decoding="async"
                            />
                        </picture>
                    </Link>

                </menu>
            </nav>
        </section>
    )
}

export default SketchHeader
