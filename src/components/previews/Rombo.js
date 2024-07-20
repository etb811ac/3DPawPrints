import './rombo.scss'

const Rombo = ({ bgColor, textColor, name, phone }) => {

    return (
        <div className="rombo-container">
            <svg viewBox="0 0 235.901 260.76984" width="100%">
                <g
                    id="Rombo"
                    transform="translate(-768.495,-1122.6401)">
                    <path
                        d="m 886.445,1377.66 -112.2,-62.32 v -124.63 l 112.2,-62.32 112.201,62.32 v 124.63 z"
                        fill={bgColor}
                        fillOpacity="1"
                        fillRule="nonzero"
                        opacity="1"
                        stroke={textColor}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="10" />

                </g>
                <text x="50%" y="120" className="nombre" textAnchor="middle" style={{ fill: textColor }}>{name}</text>
                <text x="50%" y="175" className="telefono" textAnchor="middle" style={{ fill: textColor }}>{phone}</text>
            </svg>
        </div>
    )
};

export default Rombo;

