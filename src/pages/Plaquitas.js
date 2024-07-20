import './plaquitas.scss'
import { useState } from 'react';

import TopBar from '../components/TopBar';
import Carousel from '../components/Carousel';
import TellUsYourIdea from '../components/TellUsYourIdea';
import ColorPicker from '../components/ColorPicker';

import data from '../data/plaquitas.json';
import arrow from '../assets/global/arrow-down.svg';



const Plaquitas = ({ products, addProduct }) => {

  //variables
  const [activeShape, setActiveShape] = useState("")
  const [nameFocused, setNameFocused] = useState(false)
  const [phoneFocused, setPhoneFocused] = useState(false)
  const [alert, setAlert] = useState(false)
  const [added, setAdded] = useState(false)

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [bgColor, setBgColor] = useState("");
  const [textColor, setTextColor] = useState("");

  const [acordion, setAcordion] = useState("description")

  //event handlers
  //setActive shape
  const shapeClicked = (event) => {
    setActiveShape(event.target.id)
  }

  //textField focus/focus out
  const textFieldFocused = (event) => {
    if (event.target.name === 'nombre') {
      setNameFocused(true)
    }
    if (event.target.name === 'telefono') {
      setPhoneFocused(true)
    }
  }
  const textFieldLostFocus = (event) => {
    if (event.target.name === 'nombre' && event.target.value === '') {
      setNameFocused(false)
    }
    if (event.target.name === 'telefono' && event.target.value === '') {
      setPhoneFocused(false)
    }
  }

  const allReady = () => {
    if (activeShape === "" || name === "" || phone === "" || bgColor === "" || textColor === "") {
      return false
    }
    return true
  }

  const addCartClicked = () => {
    if (allReady()) {
      var element = {
        "product": "Plaquita", "name": name, "phone": phone, "shape": activeShape, "bgColor": bgColor, "textColor": textColor
      }
      addProduct(element);
      setName('')
      setPhone('')
      setActiveShape('')
      setBgColor('')
      setTextColor('')
      setNameFocused(false)
      setAdded(true)
    } else {
      setAlert('true')
    }

  }

  const accordionClicked = (event) => {
    let id = event.target.id
    if (id === acordion) {
      setAcordion('')
    } else {
      setAcordion(event.target.id)
    }


  }

  //text field change
  const textFieldChange = (event) => {
    if (event.target.name === 'nombre') {
      setName(event.target.value)
    }
    if (event.target.name === 'telefono') {
      if (/^\d*\.?\d*$/.test(event.target.value)) {
        setPhone(event.target.value)
      } else {
        setPhone('')
      }

    }
  }

  //set list of shapes
  const shapeList = data.shapes.map(shape =>
    <div className={activeShape === shape.id ? ('shape active') : ('shape')}
      key={shape.id}
      id={shape.id}
      onClick={shapeClicked}>

      <img
        key={shape.id}
        id={shape.id}
        src={require(`../${shape.src}`)} alt="" />

    </div>
  );






  return (
    <div className="page-container plaquitas-container">
      <TopBar products={products}></TopBar>

      <div className="plaquitas-inner">
        <div className="slider-container">
          <Carousel photos={data.carousel}></Carousel>
        </div>

        <div className="options-container">

          <h1>Plaquitas</h1>

          <p>Acá podés crear la plaquita de tu mascota, selecioná la forma, escribí sus datos y escogé los colores que más te gusten.</p>

          <div className="option shape-options">
            {shapeList}
          </div>

          <div className="option text-field name">
            <input type="text" autoComplete="off" name="nombre" value={name} onFocus={textFieldFocused} onBlur={textFieldLostFocus} onChange={textFieldChange} />
            <label className={nameFocused ? ('expanded') : ('')} htmlFor="nombre">Nombre de la mascota</label>
          </div>

          <div className="option text-field phone">
            <input type="text" autoComplete="off" value={phone} maxLength="8" name="telefono" onFocus={textFieldFocused} onBlur={textFieldLostFocus} onChange={textFieldChange} />
            <label className={phoneFocused ? ('expanded') : ('')} htmlFor="telefono">Telefono</label>
          </div>

          <div className="option border-color-options">
            <ColorPicker colors={data.colors} name={name} phone={phone} shape={activeShape} bgColor={bgColor} setBgColor={setBgColor} textColor={textColor} setTextColor={setTextColor}></ColorPicker>
          </div>

          <div className="option add-btn">
            <button onClick={addCartClicked}>Agregar al Carrito</button>
          </div>

          <div className="accordion-container">

            <div className={acordion === 'description' ? ("accordion-item active") : ("accordion-item")}>
              <div className="toggle-box" id="description" onClick={accordionClicked}>
                <div className="title" id="description">Descripción del producto</div>
                <img src={arrow} id="description" alt="" />
              </div>
              <div className="body">
                <p>- Cada plaquita lleva el nombre de la mascota y un número de teléfono.</p>
                <p>- Si el nombre es muy largo y tu mascota es pequeña, te recomendamos usar un diminutivo.</p>
                <p>- Puedes escoger uno o dos colores.</p>
              </div>
            </div>

            <div className={acordion === 'waranty' ? ("accordion-item active") : ("accordion-item")}>
              <div className="toggle-box" id="waranty" onClick={accordionClicked}>
                <div className="title" id="waranty">Cambios y garantías</div>
                <img src={arrow} alt="" id="waranty" />
              </div>

              <div className="body">
                <p>- Una vez enviés el pedido, nos pondremos en contacto con vos, en los próximos 3 días vía whastapp para confirmar el pedido y los detalles del producto.</p>
                <p>- Los productos no se cambian una vez realizado el primer depósito.</p>
                <p>- La garantía es por un mes y cubre caídas de letras o del borde superior.</p>
                <p>- No cubre que la plaquita se parta o quiebre, ya que por el tipo de material, esto sólo puede ocurrir por mala manipulación.</p>
                <p>- No cubre pérdida de paquetes en Correos de Costa Rica porque hayás anotado mal los datos de tu dirección.</p>
                <p>- No se cambia el producto porque hayás anotado mal los datos de la plaquita.</p>
              </div>
            </div>

            <div className={acordion === 'shipment' ? ("accordion-item active") : ("accordion-item")}>
              <div className="toggle-box" id="shipment" onClick={accordionClicked}>
                <div className="title" id="shipment">Entrega y retiro</div>
                <img src={arrow} alt="" id="shipment" />
              </div>
              <div className="body">
                <p>- A partir de la confirmación del pedido y de tu depósito del 50% del producto, tendremos 10 días para el envío del pedido.</p>
                <p>- Una vez el pedido esté listo, te enviaremos una foto y deberás cancelar el 50% restante, más el envío de Correos de Costa Rica.</p>
                <p>- Hacemos entregas presenciales sin costo alguno en: San Ramón, Palmares, Naranjo, Grecia y en la UCR San Pedro Montes de Oca. (En la UCR únicamente los días lunes hábiles)</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <TellUsYourIdea></TellUsYourIdea>

      <div className={alert ? ('alert show') : ('alert')}>

        <div className='alert-box'>
          <h2>¡Oh no!</h2>

          <p>Asegurate de haber seleccionado la forma de tu plaquita, ingresado el nombre de tu mascota y el numero telefonico de contacto que desees, así como haber escogido los colores de tu preferencia.</p>

          <button onClick={() => setAlert(false)}>¡Entendido!</button>
        </div>
      </div>

      <div className={added ? ('alert show') : ('alert')}>

        <div className='alert-box'>
          <h2>¡Listo!</h2>

          <p>Producto agregado con exito al carrito.</p>

          <button onClick={() => setAdded(false)}>¡Entendido!</button>
        </div>
      </div>

    </div>
  )
};

export default Plaquitas;