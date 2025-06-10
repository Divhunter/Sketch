import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// styles
import './m-contactForm.css'
import './d-contactForm.css'

const ContactForm = () => {
  const form = useRef()
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      form.current,
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setStatus('Message envoyé avec succès.')
      form.current.reset()
      setPhone('')
    })
    .catch((error) => {
      console.error(error)
      setStatus('Une erreur est survenue. Veuillez réessayer.')
    })
  }

  return (
    <div className="container mt-5">
      <form ref={form} onSubmit={sendEmail} style={{ maxWidth: '600px' }} className="custom-form">
        <div className="mb-3">
          <label className="form-label text-white">Nom/Prénom *</label>
          <input
            type="text"
            name="name"
            className="form-control custom-input"
            placeholder="Nom / Prénom *"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Entreprise *</label>
          <input
            type="text"
            name="company"
            className="form-control custom-input"
            placeholder="Entreprise *"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Téléphone *</label>
          <PhoneInput
            country={'fr'}
            value={phone}
            onChange={setPhone}
            inputProps={{
              name: 'phone',
              required: true,
              placeholder: 'Téléphone *',
            }}
            inputClass="custom-input w-100"
            containerClass="custom-phone-input w-100"
          />

        </div>

        <div className="mb-3">
          <label className="form-label text-white">E-mail *</label>
          <input
            type="email"
            name="email"
            className="form-control custom-input"
            placeholder="E-mail *"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Votre demande</label>
          <textarea
            name="message"
            className="form-control custom-textarea"
            rows="4"
            placeholder="Votre demande"
          />
        </div>

        <button type="submit" className="btn custom-submit-btn w-100">Envoyer</button>

        {status && <div className="alert alert-info mt-3">{status}</div>}
      </form>
    </div>
  )
}

export default ContactForm
