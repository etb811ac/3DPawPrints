import './estrella.scss'

const Estrella = ({ bgColor, textColor, name, phone }) => {

    return (
        <div className="estrella-container">
            <svg viewBox="0 0 333.88598 319.01502" width="100%">

                <g
                    id="Estrella"
                    transform="translate(-741.49597,-1963.0601)">

                    <path
                        d="m 804.327,2242.52 2.501,-37.05 c 1.418,-21.01 -8.361,-51.21 -21.842,-67.47 l -23.775,-28.67 c -13.481,-16.25 -7.746,-33.6 12.81,-38.74 l 36.253,-9.08 c 20.555,-5.14 46.456,-23.7 57.851,-41.45 l 20.098,-31.31 c 11.395,-17.75 29.782,-17.69 41.068,0.14 l 19.904,31.44 c 11.286,17.83 37.073,36.56 57.595,41.85 l 36.2,9.32 c 20.52,5.28 26.15,22.67 12.57,38.83 l -23.95,28.51 c -13.58,16.16 -23.55,46.3 -22.26,67.31 l 2.28,37.07 c 1.28,21.02 -13.624,31.7 -33.303,23.86 l -34.708,-13.82 c -19.679,-7.84 -51.623,-7.95 -71.35,-0.24 l -34.791,13.58 c -19.727,7.71 -34.569,-3.07 -33.151,-24.08 z"
                        fill={bgColor}
                        fillOpacity="1"
                        fillRule="nonzero"
                        opacity="0.999224"
                        stroke={textColor}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="10" />
                </g>

                <text x="50%" y="160" className="nombre" textAnchor="middle" style={{ fill: textColor }}>{name}</text>
                <text x="50%" y="215" className="telefono" textAnchor="middle" style={{ fill: textColor }}>{phone}</text>

            </svg>

        </div>
    )
};

export default Estrella;

