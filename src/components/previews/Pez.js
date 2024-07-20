import './pez.scss'

const Pez = ({ bgColor, textColor, name, phone}) => {

    return (
        <div className="pez-container">
            <svg viewBox="0 0 288.74999 188.72" width="100%">
                <g
                    id="Pez"
                    transform="translate(-759.5,-1428.56)">
                    <path
                        d="m 889.625,1434.31 c -68.686,0 -124.375,39.36 -124.375,87.91 0,48.55 55.69,87.9 124.375,87.9 29.096,0 55.784,-7.1 76.969,-18.93 6.289,12.03 18.672,20.34 33.125,20.34 20.761,0 37.591,-16.94 37.591,-37.81 0,-16.59 -10.68,-30.54 -25.47,-35.63 1.34,-5.15 2.13,-10.44 2.13,-15.87 0,-0.09 -0.03,-0.17 -0.03,-0.25 16.38,-4.04 28.56,-18.35 28.56,-35.56 0,-20.34 -16.93,-36.82 -37.81,-36.82 -10.443,0 -19.91,4.12 -26.752,10.79 -22.538,-16.08 -53.764,-26.07 -88.313,-26.07 z"
                        fill={bgColor}
                        fillOpacity="1"
                        fillRule="nonzero"
                        opacity="1"
                        stroke={textColor}
                        strokeWidth="10"
                        id="path24" />

                </g>
                    <text x="50%" y="80" className="nombre" textAnchor="middle" style={{fill: textColor}}>{name}</text>
                    <text x="50%" y="135" className="telefono"textAnchor="middle"  style={{fill: textColor}}>{phone}</text>
                
            </svg>

         

        </div>
    )
};

export default Pez;