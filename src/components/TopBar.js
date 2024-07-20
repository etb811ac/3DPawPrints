import './topBar.scss'
import { useEffect , useState} from 'react';
import { Link } from "react-router-dom";

//assets
import logo from '../assets/navigation/logo.png'
import cart from '../assets/navigation/cart-logo.svg'


const TopBar = ({products}) => {
    const [productCount, setProductCount] = useState(0)

    useEffect(() => {
        setProductCount(products.length)
    },[products.length])

    return (
        <div id="Top-bar">
            <div className="top-bar-container">
                <Link to='/'>
                    <img className='logo' src={logo} alt="3d paw prints logo" />
                </Link>

                <Link to='/carrito'>
                    <img className='cart' src={cart} alt="carrito de compras" />
                    <div className={productCount > 0 ? ('product-count visible') : ('product-count')}>{productCount}</div>
                </Link>
            </div>
        </div>
    )
};

export default TopBar;