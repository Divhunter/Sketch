import React from "react"
import { useEffect } from 'react'
import { Link as Video } from 'react-router-dom'

// styles
import './m-sketchCrea.css'
import './d-sketchCrea.css'

const SketchCrea = () => {

    useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

    return (
        <section className="sketch">
            <div className="sketch__container">
                <span className="sketch__container__triangle triangle1Crea"></span>
                <span className="sketch__container__triangle triangle2Crea"></span>
                <span className="sketch__container__triangle triangle3Crea"></span>
            </div>
            <h1 className="sketch__title">C<span>R&Eacute;A</span></h1>
            <picture>
                <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} type="image/png" loading="lazy" fetchpriority="low" />
                <img 
                    className="sketchCrea__picture sketch__title-plume" 
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
                <span className="sketch__span1">Sketch</span> <span className="sketch__span2">View</span> accompagne vos projet où que vous soyez.
                <br />
                Nous intervenons partout en <span className="sketch__span13">France</span> et à l'<span className="sketch__span13">international</span>.
                <br />
                <br />
                <span className="sketch__span6">#</span> <span className="sketch__span8">DISPONIBLE</span> <span className="sketch__span7">à tous les coins de rues</span>
            </p>
            <div className="separator">
                <span className="separator_line separator_line1"></span>
                <span className="separator_line separator_line2"></span>
            </div>
            <header>
                <span className="title">Nos services</span>
                <span className="title-underline"></span>
            </header>
            <p className="sketch__text sketch__text--start">
                <span className="sketch__span2">1 - </span><span className="sketch__span11">Création de visuels 3D sur mesure</span>
                <li className="sketch__text__listOne">
                    <i>
                        Modélisations réalistes pour vos projets techniques et architecturaux.
                        <br />
                        Représentations qui captivent vos clients et prtenaires.
                    </i>
                </li>
            </p>
            <div className="sketchCrea__containerImg img1" >
                <picture>
                    <source srcSet={`${process.env.PUBLIC_URL}/assets/banners/images.jpg`} type="image/jpg" loading="lazy" fetchpriority="low" />
                    <img 
                        className="sketchCrea__containerImg--img" 
                        src={`${process.env.PUBLIC_URL}/assets/banners/images.jpg`} 
                        width="1600" 
                        height="320"  
                        loading="lazy"  
                        alt="multiples images"  
                        fetchpriority="low"
                        decoding="async"
                    />
                </picture>
            </div>
            <p className="sketch__text sketch__text--start">
                <span className="sketch__span1">2 - </span><span className="sketch__span11">Plans d'installation de chantier</span>
                <li className="sketch__text__listOne">
                    <i>
                        Plans clairs et détaillés pour une compréhension optimale.
                        <br />
                        Supports adaptés aux appels d'offres et à la planification des travaux.
                    </i>
                </li>
            </p>
            <div className="sketchCrea__containerImg img2" >
                <picture>
                    <source srcSet={`${process.env.PUBLIC_URL}/assets/banners/PIC.jpg`} type="image/jpg" loading="lazy" fetchpriority="low" />
                    <img 
                        className="sketchCrea__containerImg--img" 
                        src={`${process.env.PUBLIC_URL}/assets/banners/PIC.jpg`} 
                        width="1600" 
                        height="320"   
                        loading="lazy"  
                        alt="multiples images"  
                        fetchpriority="low"
                        decoding="async"
                    />
                </picture>
            </div>
            <p className="sketch__text sketch__text--start">
                <span className="sketch__span2">3 - </span><span className="sketch__span11">Vidéos immersives et explicatives</span>
                <li className="sketch__text__listOne">
                    <i>
                        Animations 3D pour illustrer des processus ou des modes opératoires.
                        <br />
                        Présentations dynamiques et professionnelles pour mieux convaincre.
                    </i>
                </li>
            </p>
            <Video to="https://sketchfab.com/3d-models/pont-de-lay-2b5d8b9faf1247efb6e39194d8423e69">
                <div className="sketchCrea__containerImg img3" >
                    <picture>
                        <source srcSet={`${process.env.PUBLIC_URL}/assets/banners/Video.jpg`} type="image/jpg" loading="lazy" fetchpriority="low" />
                        <img 
                            className="sketchCrea__containerImg--img" 
                            src={`${process.env.PUBLIC_URL}/assets/banners/Video.jpg`} 
                            width="1600" 
                            height="320"   
                            loading="lazy"  
                            alt="dessin technique"  
                            fetchpriority="low"
                            decoding="async"
                        />
                    </picture>
                </div>
            </Video>
            <p className="sketch__text sketch__text--start">
                <span className="sketch__span1">4 - </span><span className="sketch__span11">Dessins style "BD"</span>
                <li className="sketch__text__listOne">
                    <i>
                        Créations originales sur tablette graphique pour apporter une touche unique.
                        <br />
                        Illustrations pédagogiques et ludiques adaptées à vos besoins.
                    </i>
                </li>
            </p>
            <div className="sketchCrea__containerImg img4" >
                <picture>
                    <source srcSet={`${process.env.PUBLIC_URL}/assets/banners/dessin.jpg`} type="image/jpg" loading="lazy" fetchpriority="low" />
                    <img 
                        className="sketchCrea__containerImg--img" 
                        src={`${process.env.PUBLIC_URL}/assets/banners/dessin.jpg`} 
                        width="1600" 
                        height="320"  
                        loading="lazy"  
                        alt="personnages dessinés"  
                        fetchpriority="low"
                        decoding="async"
                    />
                </picture>
            </div>
        </section>
    )
}

export default SketchCrea