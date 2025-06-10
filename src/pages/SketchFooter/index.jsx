import React from "react"

// styles
import './m-sketchFooter.css'
import './d-sketchFooter.css'

const SketchFooter = () => {
    return (
        <section className="sketchFooter">
            <div className="separator">
                <span className="separator_line separator_line1"></span>
                <span className="separator_line separator_line2"></span>
            </div>
            <p className="sketchFooter__slogan">Nous mettons notre expertise au service de votre succès.</p>
            <span className="sketchFooter__slogan-underline"></span>
        </section>
    )
}

export default SketchFooter