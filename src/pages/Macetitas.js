import './macetitas.scss'
import { useState } from 'react';

import TopBar from '../components/TopBar';
import Carousel from '../components/Carousel';
import TellUsYourIdea from '../components/TellUsYourIdea';
import UploadPhoto from '../components/uploadPhoto';

import data from '../data/macetitas.json';
import arrow from '../assets/global/arrow-down.svg';



const Macetitas = ({ products, addProduct }) => {

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
      var element = {"product" : "Macetita", "color" : selectedColor, "description" : description, "images": images }
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
    <div className="page-container macetitas-container">
      <TopBar products={products}></TopBar>

      <div className="macetitas-inner">
        <div className="slider-container">
          <Carousel photos={data.carousel}></Carousel>
        </div>

        <div className="options-container">

          <h1>Macetitas</h1>

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
            <UploadPhoto images = {images} setImages = {setImages}></UploadPhoto>
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
                <p>- La medida estándar de las macetas es de 6cm. Para esta medida el precio es de 6.000 colones.</p>
                <p>- Si querés un modelo distinto, el precio podría variar según la complejidad y dimensiones.</p>
                <p>- Cada macetita viene acompañada de una bolsita de tierra y otra de piedritas de colores para que plantés la matita que deseás. No incluye la plantita.</p>
                <p>- Tomá en cuenta que elaboramos el pedido a partir de tus instrucciones y con las posibilidades de impresión.</p>
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
                <p>- La garantía es por un mes:</p>
                <p>1- No cubre que la macetita se parta o quiebre, ya que por el tipo de material, esto sólo puede ocurrir por mala manipulación.</p>
                <p>2- No cubre pérdida de paquetes en Correos de Costa Rica cuando hayás anotado mal los datos de tu dirección.</p>
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
              </div>
            </div>

          </div>
        </div>
      </div>

      <TellUsYourIdea></TellUsYourIdea>

      <div className={alert ? ('alert show') : ('alert')}>

        <div className='alert-box'>
          <h2>¡Oh no!</h2>

          <p>Asegurate de haber seleccionado uno de los colores disponibles y darnos una descripción de la macetita que quieres.</p>

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

export default Macetitas;