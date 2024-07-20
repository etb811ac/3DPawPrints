import './corazon.scss'

const Corazon = ({ bgColor, textColor, name, phone }) => {

    return (
        <div className="corazon-container">
            <svg viewBox="0 0 295.55999 276.33954" width="100%">

                <g
                    id="Corazon"
                    transform="translate(-731,-779.75)">
                    <path
                        d="m 879.688,785.5 c -17.141,0 -31.032,14.947 -31.032,33.406 0,3.312 0.615,6.428 1.469,9.438 -11.361,-7.556 -24.639,-12.125 -39,-12.125 -41.083,0 -74.375,35.636 -74.375,79.593 0,31.493 19.813,54.184 42.51,73.951 0,0 10.732,12.554 49.138,34.967 38.406,22.4 46.758,37.24 46.758,37.24 l 7.938,8.37 c 0,0 8.59,-20.54 56.638,-52.285 51.463,-34.67 59.833,-46.153 59.833,-46.153 17.465,-13.271 21.245,-39.143 21.245,-62.527 0,-40.069 -33.002,-72.531 -73.748,-72.531 -13.725,0 -26.423,3.903 -37.406,10.344 0.648,-2.657 1.094,-5.406 1.094,-8.282 0,-18.459 -13.922,-33.406 -31.062,-33.406 z"
                        fill={bgColor}
                        fillOpacity="1"
                        fillRule="nonzero"
                        opacity="1"
                        stroke={textColor}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="10" />

                </g>

                <text x="50%" y="130" className="nombre" textAnchor="middle" style={{ fill: textColor }}>{name}</text>
                <text x="50%" y="175" className="telefono" textAnchor="middle" style={{ fill: textColor }}>{phone}</text>

            </svg>


        </div>
    )
};

export default Corazon;

