import './rectangulo.scss'

const Rectangulo = ({ bgColor, textColor, name, phone }) => {

    return (
        <div className="rectangulo-container">


            <svg viewBox="0 0 429.963 286.99701" width="100%">

                <g
                    id="Rectángulo"
                    transform="translate(-211.513,-110.97)">
                    <path
                        d="m 273.052,207.091 h 306.885 c 30.811,0 55.789,24.977 55.789,55.789 v 73.548 c 0,30.812 -24.978,55.789 -55.789,55.789 H 273.052 c -30.811,0 -55.789,-24.977 -55.789,-55.789 V 262.88 c 0,-30.812 24.978,-55.789 55.789,-55.789 z"
                        fill={bgColor}
                        fillOpacity="1"
                        fillRule="nonzero"
                        opacity="1"
                        stroke={textColor}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeWidth="10"
                        id="path44"
                    />
                    <path
                        d="m 328.467,204.52 59.138,-39.211"
                        fill="none"
                        opacity="1"
                        stroke={textColor}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeWidth="10"
                        id="path46"
                    />
                    <path
                        d="m 469.24,159.524 55.924,44.353"
                        fill="none"
                        opacity="1"
                        stroke={textColor}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeWidth="10"
                        id="path48"
                    />
                    <path
                        d="m 390.061,154.324 c 0,-20.768 17.411,-37.604 38.889,-37.604 21.478,0 38.89,16.836 38.89,37.604 0,20.768 -17.412,37.603 -38.89,37.603 -21.478,0 -38.889,-16.835 -38.889,-37.603 z"
                        fill={bgColor}
                        fillOpacity="1"
                        fillRule="nonzero"
                        opacity="1"
                        stroke={textColor}
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeWidth="10"
                        id="path50"
                    />
                </g>

                <text x="50%" y="170" className="nombre" textAnchor="middle" style={{ fill: textColor }}>{name}</text>
                <text x="50%" y="235" className="telefono" textAnchor="middle" style={{ fill: textColor }}>{phone}</text>
            </svg>



        </div>
    )
};

export default Rectangulo;