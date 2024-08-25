import '../App.css'
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from 'react';

const CartWidget = () => {
    const { totalProducts } = useContext(CartContext);
    if (totalProducts() > 0) {

        return (

            <div className='me-4'>
                <Link to={'/Cart/'}>
                    <img className='cart' src="../src/assets/shopping-bag.png" alt="" />
                </Link>
                <span>{totalProducts()}</span>
            </div>

        )
    }

}

export default CartWidget;