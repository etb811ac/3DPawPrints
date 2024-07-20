import './circulo.scss'

const Circulo = ({ bgColor, textColor, name, phone }) => {

    return (
        <div className="circulo-container">
            <svg viewBox="0 0 255.138 256.69" width="100%">
                <g
                    id="Círculo"

                    transform="translate(-757.152,-1654.2)">
                    <path
                        d="m 762.902,1782.55 c 0,-67.71 54.539,-122.6 121.817,-122.6 67.277,0 121.821,54.89 121.821,122.6 0,67.7 -54.544,122.59 -121.821,122.59 -67.278,0 -121.817,-54.89 -121.817,-122.59 z"
                        fill={bgColor}
                        fillOpacity="1"
                        fillRule="nonzero"
                        opacity="1"
                        stroke={textColor}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="10" />

                </g>

                <text x="50%" y="110" className="nombre" textAnchor="middle" style={{ fill: textColor }}>{name}</text>
                <text x="50%" y="160" className="telefono" textAnchor="middle" style={{ fill: textColor }}>{phone}</text>

            </svg>



        </div>
    )
};

export default Circulo;

