import './figuritas.scss'
import { useState } from 'react';

import TopBar from '../components/TopBar';
import Carousel from '../components/Carousel';
import TellUsYourIdea from '../components/TellUsYourIdea';
import UploadPhoto from '../components/uploadPhoto';

import data from '../data/figuritas.json';
import arrow from '../assets/global/arrow-down.svg';



const Figuritas = ({ products, addProduct }) => {

  //variables
  const [alert, setAlert] = useState(false)
  const [added, setAdded] = useState(false)
  const [selectedColor, setSelectedColor] = useState('')
  const [description, setDescription] = useState('')
  const [images, setImages] = useState([])

  const [acordion, setAcordion] = useState("description")

  //event handlers

  //textField focus/focus out



  const allReady = () => {
    if (selectedColor === '' || description === '') {
      return false
    }
    return true
  }

  const addCartClicked = () => {
    if (allReady()) {
      var element = { "product": "Figurita", "color": selectedColor, "description": description, "images": images }
      addProduct(element);
      setSelectedColor('')
      setDescription('')
      setImages([])
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

  const colorList = data.colors.map(color =>
    <div key={color.id}>
      <img className={color.id === selectedColor.id ? ('active') : ('')} src={require(`../${color.static}`)}
        onMouseOver={e => (e.currentTarget.src = require(`../${color.gif}`))}
        onMouseLeave={e => (e.currentTarget.src = require(`../${color.static}`))} alt=''
        onClick={() => setSelectedColor(color)} />
    </div>
  )

  return (
    <div className="page-container figuritas-container">
      <TopBar products={products}></TopBar>

      <div className="figuritas-inner">
        <div className="slider-container">
          <Carousel photos={data.carousel}></Carousel>
        </div>

        <div className="options-container">

          <h1>Figuritas</h1>

          <p>Podés elegir entre los modelos del carrousel o contarnos tu idea.</p>

          <p>Seleccioná uno de los colores disponibles y dejanos una descripción de lo que deseás. </p>

          <div className="option color-picker">
            <label htmlFor="">Colores:</label>

            <div className="colors-container">
              {colorList}
            </div>
          </div>

          <div className="option text-field description">
            <label htmlFor="descripcion">Descripción: </label>
            <textarea name="descripcion" id="" cols="30" rows="10" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>

          <div className="option text-field images">
            <label htmlFor="images">Podés adjuntar imagenes que nos ayuden a entender tu idea aquí:</label>
            <UploadPhoto images={images} setImages={setImages}></UploadPhoto>
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
                <p>- El precio se brinda una vez nos contés el modelo que querés.</p>
                <p>- Los modelos están sobre una base de madera Cedro Amargo, detallado con aceite de linaza.</p>

                <p>- Podés elegir entre: </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;1- Figura</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;2- Modelo doble: figura más nombre.</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;3- Otras impresiones.</p>

                <p>- Tomá en cuenta que elaboramos el pedido con tus instrucciones y con las posibilidades de impresión.</p>
              </div>
            </div>

            <div className={acordion === 'waranty' ? ("accordion-item active") : ("accordion-item")}>
              <div className="toggle-box" id="waranty" onClick={accordionClicked}>
                <div className="title" id="waranty">Cambios y garantías</div>
                <img src={arrow} alt="" id="waranty" />
              </div>

              <div className="body">
                <p>- Una vez enviés el pedido nos pondremos en contacto con vos para confirmar el pedido y los detalles del producto.</p>
                <p>- Los productos no se cambian una vez realizado el primer depósito.</p>
                <p>- La garantía es por un mes y cubre el desprendimiento de la figura de la base de madera.</p>
                <p>- No cubre que la figura se parta o quiebre, ya que por el tipo de material, esto sólo puede ocurrir por mala manipulación.</p>
                <p>- No cubre pérdida de paquetes en Correos de Costa Rica cuando hayás anotado mal los datos de tu dirección.</p>
              </div>
            </div>

            <div className={acordion === 'shipment' ? ("accordion-item active") : ("accordion-item")}>
              <div className="toggle-box" id="shipment" onClick={accordionClicked}>
                <div className="title" id="shipment">Entrega y retiro</div>
                <img src={arrow} alt="" id="shipment" />
              </div>
              <div className="body">
                <p>- A partir de la confirmación del pedido y de tu depósito del 50% del producto, tendremos 10 días para el envío del pedido.</p>
                <p>- Una vez el pedido esté listo, te enviaremo una foto y deberás cancelar el 50% restante, más el envío de Correos de Costa Rica.</p>
                <p>- Hacemos entregas presenciales sin costo alguno en: San Ramón, Palmares, Naranjo, Grecia y en la UCR San Pedro Montes de Oca. (En la UCR únicamente los días lunes hábiles)</p>
                <p><strong>Según la figura no hacemos envíos por Correos de Costa Rica debido a no podemos aseguras una buena manipulación de la pieza.</strong></p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <TellUsYourIdea></TellUsYourIdea>

      <div className={alert ? ('alert show') : ('alert')}>

        <div className='alert-box'>
          <h2>¡Oh no!</h2>

          <p>Asegurate de haber seleccionado uno de los colores disponibles y darnos una descripción de la figura que quieres.</p>

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

export default Figuritas;