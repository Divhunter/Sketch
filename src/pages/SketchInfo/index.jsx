import React from "react"
import { useEffect } from 'react'

// styles
import './m-sketchInfo.css'
import './d-sketchInfo.css'

const SketchInfo = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="sketch">
            <div className="sketch__container">
                <span className="sketch__container__triangle triangle1Info"></span>
                <span className="sketch__container__triangle triangle2Info"></span>
                <span className="sketch__container__triangle triangle3Info"></span>
            </div>
            <h1 className="sketch__title">I<span>NFO</span></h1>
            <picture>
                <source srcSet={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} type="image/png" loading="lazy" fetchpriority="low" />
                <img 
                    className="sketchInfo__picture sketch__title-plume" 
                    src={`${process.env.PUBLIC_URL}/assets/pictures/plume.png`} 
                    width="4961" 
                    height="6373"  
                    loading="lazy"  
                    alt="plume"  
                    fetchpriority="low"
                    decoding="async"
                />
            </picture>
            <p className="sketch__text sketch__text--center">
                <span className="sketch__span1">Sketch</span> <span className="sketch__span2">View</span> est spécialisé dans la <span className="sketch__span3">création</span> de contenus <span className="sketch__span4">innovants</span>.
                <br />
                Nous <span className="sketch__span4">VALORISONS</span> vos dossiers de réponse aux appels d'offres grâce à des <span className="sketch__span5">visuels percutants</span>.
                <br />
                <br />
                <span className="sketch__span6">#</span> <span className="sketch__span7">Donnons</span> <span className="sketch__span8">VIE</span> <span className="sketch__span7">à vos projets</span>
            </p>
            <div className="separator">
                <span className="separator_line separator_line1"></span>
                <span className="separator_line separator_line2"></span>
            </div>
            <header>
                <span className="title">Qui sommes nous ?</span>
                <span className="title-underline"></span>
            </header>
            <p className="sketch__text sketch__text--start">
                <span className="sketch__span1">Sketch</span> <span className="sketch__span2">View</span> est une société de dessin 3D et de création graphique qui <span className="sketch__span4">accompagne</span> les antreprises dans leurs <span className="sketch__span5">projets techniques</span> et <span className="sketch__span3">créatifs</span>.
            </p>
            <p className="sketch__text sketch__text--start">
                Grâce à une expertise pointue et des outils performants, nous offrons des solutions visuelles adaptées pour :
            </p> 
            <ul className="sketch__text sketch__text--ulMargin">
                <li>
                    <span className="sketch__span4">RENFORCER</span> vos dossier de réponse aux appels d'offres.
                </li>
                <li>
                    <span className="sketch__span4">EXPLIQUER</span> clairement vos plans d'installation de chantier et vos modes opératoires.
                </li>
                <li>
                    <span className="sketch__span4">ILLUSTRER</span> vos idées de manière innovante et percutante.
                </li>
            </ul>
            <p className="sketch__text sketch__text--start">
                Nous travaillons en étroite <span className="sketch__span4">collaboration</span> avec nos clients pour transformer des concepts complexes en visuels <span className="sketch__span9">accessibles</span> et <span className="sketch__span10">engageants</span>
            </p>
            <header>
                <span className="title">Pourquoi nous choisir ?</span>
                <span className="title-underline"></span>
            </header>
            <p className="sketch__text sketch__text--start">
                <span className="sketch__span11">POLYVALENCE CR&Eacute;ATIVE :</span>
                <li className="sketch__text__listOne">
                    Une large gamme de <span className="sketch__span2">supports</span>, du <span className="sketch__span12">3D</span> au <span className="sketch__span12">dessin manuel</span>.
                </li>
            </p>
            <p className="sketch__text sketch__text--start">
                <span className="sketch__span11">IMPACT VISUEL GARANTI :</span>
                <li className="sketch__text__listOne">
                    Des <span className="sketch__span9">rendus</span> <span className="sketch__span4">professionnels</span> qui mettent en valeur vos projets.
                </li>
            </p>
            <p className="sketch__text sketch__text--start">
                <span className="sketch__span11">CLART&Eacute; ET PR&Eacute;CISION :</span>
                <li className="sketch__text__listOne">
                    Des <span className="sketch__span13">visuels</span> conçus pour <span className="sketch__span14">simplifier la compréhension</span> de concepts complexes.
                </li>
            </p>
            <p className="sketch__text sketch__text--start">
                <span className="sketch__span11">SERVICE SUR-MESURE :</span>
                <li className="sketch__text__listOne">
                    Une <span className="sketch__span12">approche</span> <span className="sketch__span1">personnalisée</span> pour répondre à vos attentes spécifiques.
                </li>
            </p>
        </section>
    )
}

export default SketchInfo