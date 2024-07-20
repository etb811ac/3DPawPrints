import './tellUsYourIdea.scss'
import { useState } from 'react';

import UploadPhoto from './uploadPhoto';

const TellUsYourIdea = () => {
    //variables
    const [nameFocused, setNameFocused] = useState(false)
    const [phoneFocused, setPhoneFocused] = useState(false)
    const [emailFocused, setEmailFocused] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [notes, setNotes] = useState("")
    const [images, setImages] = useState([])

    const [showAlert, setShowAlert] = useState(false)
    const [showSent, setShowSent] = useState(false)
    const [showLoader, setShowLoader] = useState(false)


    //textField focus/focus out
    const textFieldFocused = (event) => {
        if (event.target.name === 'nombre') {
            setNameFocused(true)
        }
        if (event.target.name === 'phone') {
            setPhoneFocused(true)
        }
        if (event.target.name === 'email') {
            setEmailFocused(true)
        }
    }
    const textFieldLostFocus = (event) => {
        if (event.target.name === 'nombre' && event.target.value === '') {
            setNameFocused(false)
        }
        if (event.target.name === 'phone' && event.target.value === '') {
            setPhoneFocused(false)
        }
        if (event.target.name === 'email' && event.target.value === '') {
            setEmailFocused(false)
        }
    }

    //text field change
    const textFieldChange = (event) => {
        if (event.target.name === 'nombre') {
            setName(event.target.value)
        }
        if (event.target.name === 'phone') {
            setPhone(event.target.value)
        }
        if (event.target.name === 'email') {
            setEmail(event.target.value)
        }
    }

    

    const allGood = () => {
        if (name === '' || email === '' || phone === '' || notes === '') {
            return false
        } else {
            return true
        }
    }

    const sendMail = () => {
        setShowLoader(true)
        fetch('https://3dpawprints.com/send-email-idea.php', {
            method: 'POST',
            body: JSON.stringify({
                "name": name,
                "email": email,
                "phone": phone,
                "notes": notes,
                "images": images
            })
        }).then(() => {
            setName('')
            setPhone('')
            setEmail('')
            setNotes('')
            setImages([])
            
            setShowLoader(false)
            setShowSent(true)
        });
    }

    const sendIt = () => {
        allGood() ? (sendMail()) : (setShowAlert(true))
    }

    return (
        <div className="tell-us-container">
            <h2>¿Tenés la idea de un producto diferente? Contanos aquí.</h2>

            <div className="form">
                <div className="form-item form-nombre">
                    <input type="text" autoComplete="off" name="nombre" value={name} onFocus={textFieldFocused} onBlur={textFieldLostFocus} onChange={textFieldChange} />
                    <label className={nameFocused ? ('expanded') : ('')} htmlFor="nombre">Nombre</label>
                </div>

                <div className="form-item form-phone">
                    <input type="text" autoComplete="off" name="phone" value={phone} onFocus={textFieldFocused} onBlur={textFieldLostFocus} onChange={textFieldChange} />
                    <label className={phoneFocused ? ('expanded') : ('')} htmlFor="phone">Teléfono</label>
                </div>

                <div className="form-item form-email">
                    <input type="email" autoComplete="off" name="email" value={email} onFocus={textFieldFocused} onBlur={textFieldLostFocus} onChange={textFieldChange} />
                    <label className={emailFocused ? ('expanded') : ('')} htmlFor="email">Correo Electrónico</label>
                </div>

                <div className=" form-description">
                    <label htmlFor="idea">Contanos tu idea acá</label>
                    <textarea name="idea" id="" cols="30" rows="10" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
                </div>


                <div className="form-images">
                    <label htmlFor="images">Podés adjuntar imagenes que nos ayuden a entender tu idea aquí:</label>
                    <UploadPhoto images={images} setImages={setImages}></UploadPhoto>
                </div>

                <button className="send-tell-us" onClick={() => sendIt()}>Enviar</button>

            </div>

            <div className={showAlert ? ("pop-up alert-popup show") : ("pop-up alert-popup")}>
                <div className="popup-container alert-container">
                    <h2>¡Ya casi!</h2>

                    <p>Asegurate de haber completado todos los espacios con tu información y darnos una descripción de la impresión que deseas realizar.</p>

                    <button onClick={() => setShowAlert(false)}>Entendido</button>
                </div>
            </div>

            <div className={showLoader ? ("pop-up loader-popup show") : ("pop-up loader-popup")}>
                <div className="spinner"></div>
            </div>

            <div className={showSent ? ("pop-up sent-popup show") : ("pop-up sent-popup")}>
                <div className="popup-container sent-container">
                    <h2>¡Todo listo por acá!</h2>

                    <p>Hemos recibido tu correo con éxito, pronto nos comunicaremos con vos para hablar de tu idea.</p>

                    <button onClick={() => setShowSent(false)}>Entendido</button>
                </div>
            </div>

        </div>
    )
};

export default TellUsYourIdea;