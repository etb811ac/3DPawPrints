import './carrito.scss';
import TopBar from '../components/TopBar';
import { useState, useEffect } from 'react';


//shapes
import Rectangulo from '../components/previews/Rectangulo'
import Hueso from '../components/previews/Hueso';
import Rombo from '../components/previews/Rombo';
import Pez from '../components/previews/Pez';
import Circulo from '../components/previews/Circulo';
import Estrella from '../components/previews/Estrella';
import Corazon from '../components/previews/Corazon';



const Carrito = ({ products, setProducts, removeProduct }) => {

    //variables
    const [nameFocused, setNameFocused] = useState(false)
    const [phoneFocused, setPhoneFocused] = useState(false)
    const [emailFocused, setEmailFocused] = useState(false)
    const [notesFocused, setNotesFocused] = useState(false)

    const [showTerms, setShowTerms] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [showSent, setShowSent] = useState(false)
    const [showLoader, setShowLoader] = useState(false)

    let productlistEmail = ""
    let emailImages = [];


    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [notes, setNotes] = useState("")
    const [terms, setTerms] = useState(false)

    useEffect(() => {
        const name = window.localStorage.getItem('3D_PAW_NAME');
        const phone = window.localStorage.getItem('3D_PAW_PHONE');
        const email = window.localStorage.getItem('3D_PAW_EMAIL');
        const notes = window.localStorage.getItem('3D_PAW_NOTES');

        if (name) { setName(name); setNameFocused(true) };
        if (phone) { setPhone(phone); setPhoneFocused(true) };
        if (email) { setEmail(email); setEmailFocused(true) };
        if (notes) { setNotes(notes); setNotesFocused(true) };
    }, [])


    useEffect(() => {
        window.localStorage.setItem('3D_PAW_NAME', name);
        window.localStorage.setItem('3D_PAW_PHONE', phone);
        window.localStorage.setItem('3D_PAW_EMAIL', email);
        window.localStorage.setItem('3D_PAW_NOTES', notes);
    }, [name, phone, email, notes, terms])


    const selectedShape = (product) => {
        switch (product.shape) {
            case 'Rectangulo':
                return (<Rectangulo bgColor={product.bgColor.hex} textColor={product.textColor.hex} name={product.name} phone={product.phone}></Rectangulo>)
            case 'Hueso':
                return (<Hueso bgColor={product.bgColor.hex} textColor={product.textColor.hex} name={product.name} phone={product.phone}></Hueso>)
            case 'Rombo':
                return (<Rombo bgColor={product.bgColor.hex} textColor={product.textColor.hex} name={product.name} phone={product.phone}></Rombo>)
            case 'Pez':
                return (<Pez bgColor={product.bgColor.hex} textColor={product.textColor.hex} name={product.name} phone={product.phone}></Pez>)
            case 'Circulo':
                return (<Circulo bgColor={product.bgColor.hex} textColor={product.textColor.hex} name={product.name} phone={product.phone}></Circulo>)
            case 'Estrella':
                return (<Estrella bgColor={product.bgColor.hex} textColor={product.textColor.hex} name={product.name} phone={product.phone}></Estrella>)
            case 'Corazon':
                return (<Corazon bgColor={product.bgColor.hex} textColor={product.textColor.hex} name={product.name} phone={product.phone}></Corazon>)
            default:
                return ('')

        }
    }



    const productList = products.map((product, index) => {
        switch (product.product) {
            case 'Plaquita':
                productlistEmail += '<table style="border-style:solid; border-width:1px; border-color:#e2e2e2;"><tr><td style="padding:30px"><strong>Producto: </strong>' + product.product + '</td><td style="padding:20px"><p><strong>Nombre de mascota:</strong>' + product.name + '</p></td><td style="padding:20px"><p><strong>Telefono:</strong>' + product.phone + '</p></td><td style="padding:20px"><p><strong>Forma:</strong>' + product.shape + '</p></td><td style="padding:20px"><p><strong>Color de Fondo:</strong> hex: ' + product.bgColor.hex + ' id: ' + product.bgColor.id + '</p></td><td style="padding:20px"><p><strong>Color de Letra:</strong>hex: ' + product.textColor.hex + ' id: ' + product.textColor.id + '</p></td></tr></table>';
                return (<div className='item plaquita' key={index}>
                    <div className="product-type">
                        <h4>{product.product}</h4>
                    </div>
                    <div className="image">
                        {selectedShape(product)}
                    </div>
                    <div className='description'>

                        <p><strong>Nombre: </strong> {product.name}</p>
                        <p><strong>Teléfono: </strong> {product.phone}</p>
                        <p><strong>Forma:</strong> {product.shape}</p>
                        <div className='color-cont'><strong>Color de Fondo:</strong> <div className="color" style={{ backgroundColor: product.bgColor.hex }}></div></div>
                        <div className='color-cont'><strong>Color de Letras:</strong> <div className="color" style={{ backgroundColor: product.textColor.hex }}></div></div>
                    </div>

                    <div className="remove" onClick={() => removeProduct(product)}>Eliminar</div>
                </div>)
            case 'Figurita':
            case 'Flip':
            case 'Macetita':
                let images = ' '
                product.images.map(image => {
                    images += ' <img src="cid:' + image.id + '" style="max-width:200px"/> '
                    emailImages.push(image);
                    return '';
                })
                productlistEmail += '<table style="border-style:solid; border-width:1px; border-color:#e2e2e2;"><tr><td style="padding:30px"><strong>Producto: </strong>' + product.product + '</td><td style="padding:20px"><p><strong>Descripcion:</strong>' + product.description + '</p></td><td style="padding:20px"><p><strong>Color:</strong>' + product.color.id + '</p></td><td style="padding:20px">' + images + '</td></tr></table>';



                return (<div className='item macetita' key={index}>
                    <div className="product-type">
                        <h4>{product.product}</h4>
                    </div>
                    <div className="image-container">
                        <p><strong>Imagenes Adjuntas</strong></p>
                        <div className="image">
                            {product.images.map(((img, index) => {
                                return <img key={index} src={URL.createObjectURL(img.file)} alt=''></img>
                            }))}
                        </div>

                    </div>
                    <div className='description'>
                        <p><strong>Descripción: </strong> <br></br>{product.description}</p>
                    </div>
                    <div className="color">
                        <p className='color-cont'><strong>Color: </strong> <img src={require(`../${product.color.gif}`)} alt="" /></p>
                    </div>
                    <div className="remove" onClick={() => removeProduct(product)}>Eliminar</div>

                </div>)
            default:
                return ('')
        }

    });



    const allGood = () => {
        if (name === '' || email === '' || phone === '' || products.length === 0 || !terms) {
            return false
        } else {
            return true
        }
    }


    const sendMail = () => {
        setShowLoader(true)
        fetch('https://3dpawprints.com/send-email.php', {
            method: 'POST',
            body: JSON.stringify({
                "name": name,
                "email": email,
                "phone": phone,
                "notes": notes,
                "products": productlistEmail,
                "images": emailImages
            })
        }).then(() => {
            setName('')
            setPhone('')
            setEmail('')
            setNotes('')
            setTerms(false)
            setProducts([])
            window.localStorage.setItem('3D_PAW_PRODUCTS', JSON.stringify(products));
            setShowLoader(false)
            setShowSent(true)
        });
    }

    const sendIt = () => {
        if (allGood()) {
            sendMail()
        } else {
            setShowAlert(true)
        }
    }


    return (
        <div className="page-container carrito-container">

            <TopBar products={products}></TopBar>

            <h1>Carrito</h1>
            <p>Acá podrás ver un resumen de todos tus pedidos. Llená el formulario con tu información, dale <strong>Enviar Cotización</strong> y pronto te contactaremos para confirmar la orden y el precio final.</p>

            <div className="wrapper">
                <div id='list' className={products.length === 0 ? ("item-list empty") : ("item-list")}>
                    {products.length === 0 ?
                        (
                            <div className="empty">
                                <h2>El carrito está vacio.</h2>
                            </div>
                        ) : (
                            productList
                        )}

                </div>

                <div className="form-container">

                    <div className="field">

                        <input autoComplete='off' type="text" value={name} onChange={(e) => setName(e.target.value)} onFocus={() => setNameFocused(true)} onBlur={(e) => { if (e.target.value === '') { setNameFocused(false) } }} />
                        <label htmlFor="name" className={nameFocused ? ('expanded') : ('')}>Nombre</label>
                    </div>

                    <div className="field">

                        <input autoComplete='off' type="phone" value={phone} maxLength="8" onChange={(e) => setPhone(e.target.value)} onFocus={() => setPhoneFocused(true)} onBlur={(e) => { if (e.target.value === '') { setPhoneFocused(false) } }} />
                        <label htmlFor="phone" className={phoneFocused ? ('expanded') : ('')}>Teléfono</label>
                    </div>

                    <div className="field">

                        <input autoComplete='off' type="email" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => setEmailFocused(true)} onBlur={(e) => { if (e.target.value === '') { setEmailFocused(false) } }} />
                        <label htmlFor="email" className={emailFocused ? ('expanded') : ('')}>Correo Electrónico</label>
                    </div>

                    <div className="field textarea">

                        <textarea autoComplete='off' type="notes" value={notes} onChange={(e) => setNotes(e.target.value)} onFocus={() => setNotesFocused(true)} onBlur={(e) => { if (e.target.value === '') { setNotesFocused(false) } }} />
                        <label htmlFor="notes" className={notesFocused ? ('expanded') : ('')}>Notas</label>
                    </div>

                    <div className="field checkbox">
                        <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} name="terms" id="" />
                        <div>He leído y estoy de acuerdo con los <span onClick={() => setShowTerms(true)}>Términos y Condiciones</span>.</div>

                    </div>
                    <button onClick={sendIt}>Enviar Cotización</button>
                </div>
            </div>

            <div className={showTerms ? ("pop-up terms-popup show") : ("pop-up terms-popup")}>
                <div className="popup-container terms-container">
                    <h2>Términos y Condiciones</h2>
                    <h3>Cambios y garantías:</h3>

                    <h4>Generales:</h4>
                    <p>- Una vez enviés el pedido nos pondremos en contacto con vos para confirmar el pedido y los detalles del producto.</p>
                    <p>- Los productos no se cambian una vez realizado el primer depósito.</p>
                    <p>- La garantía es por un mes. No cubre que el producto se quiebre o se parta, ya que, por el tipo de material, esto sólo puede ocurrir por mala manipulación.</p>
                    <p>- No cubre pérdida de paquetes en Correos de Costa Rica porque hayás anotado mal los datos de la plaquita o tu dirección.</p>
                    <p>Además, <strong>en plaquitas:</strong> la garantía cubre caídas de letras o del borde superior. </p>
                    <p><strong>En llaveros:</strong> La garantía cubre caídas de letras o detalles cuando la pieza tiene dos colores. </p>
                    <p><strong>En figuritas:</strong> La garantía cubre el desprendimiento de la figura de la base de madera.</p>
                    <h4>Entrega y retiro</h4>
                    <p>- A partir de la confirmación del pedido y de tu depósito del 50% del producto, tendremos 10 días para el envío del pedido.</p>
                    <p>- Una vez el pedido esté listo, te enviaremos una foto y deberás cancelar el 50% restante más el envío de correos de costa rica.</p>
                    <p>Hacemos entregas presenciales sin costo alguno en: San Ramón, Palmares, Naranjo, Grecia y en la UCR San Pedro Montes de Oca. (En la UCR únicamente los días lunes hábiles)</p>
                    <p><strong>Según sea la figura no hacemos envíos por Correos de Costa Rica debido a no podemos asegurar una buena manipulación de la pieza.</strong></p>
                    <button onClick={() => setShowTerms(false)}>Entendido</button>
                </div>
            </div>

            <div className={showAlert ? ("pop-up alert-popup show") : ("pop-up alert-popup")}>
                <div className="popup-container alert-container">
                    <h2>¡Ya casi!</h2>

                    <p>Asegurate de haber completado todos los espacios con tu información y haber leído y aceptado nuetros Terminos y Condiciones.</p>

                    <button onClick={() => setShowAlert(false)}>Entendido</button>
                </div>
            </div>

            <div className={showLoader ? ("pop-up loader-popup show") : ("pop-up loader-popup")}>
                <div className="spinner"></div>
            </div>

            <div className={showSent ? ("pop-up sent-popup show") : ("pop-up sent-popup")}>
                <div className="popup-container sent-container">
                    <h2>¡Todo listo por acá!</h2>

                    <p>Hemos recibido tu correo con éxito, pronto nos comunicaremos con vos para confirmar el pedido.</p>

                    <button onClick={() => setShowSent(false)}>Entendido</button>
                </div>
            </div>
        </div>
    )
};

export default Carrito;