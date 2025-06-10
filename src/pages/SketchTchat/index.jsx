import React from "react"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

// components
import ContactForm from "../../components/ContactForm"

// styles
import './m-sketchTchat.css'
import './d-sketchTchat.css'

const SketchTchat = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [isHovered1, setIsHovered1] = useState(false)
    const [isHovered2, setIsHovered2] = useState(false)

    const [showFlash1, setShowFlash1] = useState(false)
    const [showFlash2, setShowFlash2] = useState(false)

    const handleFlash = (setFlashState) => {
        setFlashState(true)
        setTimeout(() => setFlashState(false), 100)
    }

    const phoneNumber = '+33648558331'

    return (
        <section className="sketch">
            <div className="sketch__container">
                <span className="sketch__container__triangle triangle1Tchat"></span>
                <span className="sketch__container__triangle triangle2Tchat"></span>
                <span className="sketch__container__triangle triangle3Tchat"></span>
            </div>
            <h1 className="sketch__title">T<span>CHAT</span></h1>
            <picture>
                <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} type="image/png" loading="lazy" fetchpriority="low" />
                <img 
                    className="sketchTchat__picture sketch__title-plume" 
                    src={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} 
                    width="593" 
                    height="133"  
                    loading="lazy"  
                    alt="plume"  
                    fetchpriority="low"
                    decoding="async"
                />
            </picture>
            <p className="sketch__text sketch__text--center">
                <span className="sketch__span1">Sketch</span> <span className="sketch__span2">View</span> est à votre écoute pour répondre à vos besoins.
                <br />
                Notre mission est de rendre vos propositions <span className="sketch__span4">claires</span>, <span className="sketch__span3">attrayantes</span> et <span className="sketch__span5">convaicantes</span>.
                <br />
                <br />
                <span className="sketch__span6">#</span> <i><span className="sketch__span2">Faites-nous</span> <span className="sketch__span1">CONFIANCE</span></i>
            </p>
            <div className="separator">
                <span className="separator_line separator_line1"></span>
                <span className="separator_line separator_line2"></span>
            </div>
            <header>
                <span className="title">Votre satisfaction est notre priorité !</span>
                <span className="title-underline"></span>
            </header>
            <div className="sketch__contact__buttons">
                {/* TEL BUTTON */}
                <a href={`tel:${phoneNumber}`}>
                    <picture>
                        <source
                            srcSet={
                                showFlash1
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/appel3.png`
                                    : isHovered1
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/appel2.png`
                                    : `${process.env.PUBLIC_URL}/assets/pictures/appel1.png`
                            }
                            type="image/png"
                        />
                        <img
                            className={`sketch__contact__buttons__pic sketch-appel-button ${showFlash1 ? 'flash' : ''}`}
                            onMouseEnter={() => setIsHovered1(true)}
                            onMouseLeave={() => setIsHovered1(false)}
                            onClick={() => handleFlash(setShowFlash1)}
                            src={
                                showFlash1
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/appel3.png`
                                    : isHovered1
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/appel2.png`
                                    : `${process.env.PUBLIC_URL}/assets/pictures/appel1.png`
                            }
                            width="1247" 
                            height="450"  
                            loading="lazy"  
                            alt="Téléphone"  
                            fetchpriority="low"
                            decoding="async"
                        />
                    </picture>
                </a>

                {/* TEL MAIL */}
                <a href="mailto:sketchview.creation@gmail.com">
                    <picture>
                        <source
                            srcSet={
                                showFlash2
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/mail3.png`
                                    : isHovered2
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/mail2.png`
                                    : `${process.env.PUBLIC_URL}/assets/pictures/mail1.png`
                            }
                            type="image/png"
                        />
                        <img
                            className={`sketch__contact__buttons__pic sketch-mail-button ${showFlash2 ? 'flash' : ''}`}
                            onMouseEnter={() => setIsHovered2(true)}
                            onMouseLeave={() => setIsHovered2(false)}
                            onClick={() => handleFlash(setShowFlash2)}
                            src={
                                showFlash2
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/mail3.png`
                                    : isHovered2
                                    ? `${process.env.PUBLIC_URL}/assets/pictures/mail2.png`
                                    : `${process.env.PUBLIC_URL}/assets/pictures/mail1.png`
                            }
                            width="1247" 
                            height="450"  
                            loading="lazy"  
                            alt="Mail"  
                            fetchpriority="low"
                            decoding="async"
                        />
                    </picture>
                </a>
            </div>
            <div className="sketchT__Form">
                <ContactForm />
            </div>
        </section>
    )
}

export default SketchTchat