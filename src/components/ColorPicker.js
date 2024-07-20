import { useEffect, useState } from 'react';
import './colorPicker.scss'

//shapes
import Rectangulo from './previews/Rectangulo';
import Hueso from './previews/Hueso';
import Rombo from './previews/Rombo';
import Pez from './previews/Pez';
import Circulo from './previews/Circulo';
import Estrella from './previews/Estrella';
import Corazon from './previews/Corazon';



const ColorPicker = ({ colors, name, phone, shape, bgColor, setBgColor, textColor, setTextColor }) => {

    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState (false)
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        if(bgColor === ''){
            setSelected(false)
        }
    }, [bgColor])

    const allReady = () => {
        if(name === "" || phone === "" || shape === ""){
            return false;
        }
        return true;
    }


    const openModal = () => {
        if(allReady()){
            if (bgColor === "" && textColor === "") {
                setBgColor(colors[1]);
                setTextColor(colors[0])
            }
            setShow(true)
        }else{
            setAlert(true)
        }
        
    }


    const bgColorList = colors.map((color) =>
        <div className={bgColor.id === color.id ? ("color-option bg-color selected") : ("color-option bg-color")} key={color.id} style={{ backgroundColor: color.hex }} onClick={() => setBgColor(color)}></div>
    );

    const textColorList = colors.map((color) =>
        <div className={textColor.id === color.id ? ("color-option text-color selected") : ("color-option text-color")} key={color.id} style={{ backgroundColor: color.hex }} onClick={() => setTextColor(color)}></div>
    );





    //render correct shape
    let selectedShape;
    if (shape === 'Rectangulo') {
        selectedShape = <Rectangulo bgColor={bgColor.hex} textColor={textColor.hex} name={name} phone={phone}></Rectangulo>
    }
    if (shape === 'Pez') {
        selectedShape = <Pez bgColor={bgColor.hex} textColor={textColor.hex} name={name} phone={phone}></Pez>
    }
    if (shape === 'Hueso') {
        selectedShape = <Hueso bgColor={bgColor.hex} textColor={textColor.hex} name={name} phone={phone}></Hueso>
    }
    if (shape === 'Rombo') {
        selectedShape = <Rombo bgColor={bgColor.hex} textColor={textColor.hex} name={name} phone={phone}></Rombo>
    }
    if (shape === 'Circulo') {
        selectedShape = <Circulo bgColor={bgColor.hex} textColor={textColor.hex} name={name} phone={phone}></Circulo>
    }
    if (shape === 'Estrella') {
        selectedShape = <Estrella bgColor={bgColor.hex} textColor={textColor.hex} name={name} phone={phone}></Estrella>
    }
    if (shape === 'Corazon') {
        selectedShape = <Corazon bgColor={bgColor.hex} textColor={textColor.hex} name={name} phone={phone}></Corazon>
    }


    return (
        <div className="colorPicker-container">
            {selected ? (
                <div className='selected-colors'>
                    <div className="colors">
                        <div className="color-cont">
                            <p>Fondo: </p>
                            <div className="color" style={{ backgroundColor: bgColor.hex }}></div>
                        </div>
                        <div className="color-cont">
                            <p>Letras: </p>
                            <div className="color" style={{ backgroundColor: textColor.hex }}></div>
                        </div>
                    </div>
                    <div className="change-btn">
                        <button onClick={openModal}>Cambiar</button>
                    </div>


                </div>
            ) : (
                <button onClick={openModal}>Selecciona los colores</button>
            )}

            <div className={alert ? ("alert show") : ("alert")}>
                <div className="alert-box">
                    <h2>¡Ya casi!</h2>

                    <p>Asegurate de haber seleccionado la forma de tu plaquita, ingresado el nombre de tu mascota y el numero telefonico de contacto que desees.</p>

                    <button onClick={() => setAlert(false)}>¡Entendido!</button>
                </div>
            </div>

            <div className={show ? ('color-picker-overlay show') : ('color-picker-overlay')}>
                <div className="color-picker-box">
                    <div className="preview">
                        {selectedShape}
                    </div>
                    <div className="colors">
                        <div className="background">
                            <h3>Selecciona el <strong>color de fondo</strong> que prefieras</h3>
                            <div className="color-container">
                                {bgColorList}
                            </div>

                        </div>

                        <div className="letters">
                            <h3>Selecciona el <strong>color de letras</strong> que prefieras</h3>
                            <div className="color-container">
                                {textColorList}
                            </div>
                        </div>

                        <button onClick={() => { setShow(false); setSelected(true); }}>Listo</button>
                    </div>

                </div>

            </div>
        </div >
    )
};

export default ColorPicker;