import '../App.css'
import { Link } from "react-router-dom";
const CartWidget = () =>{
return(

    <div className='me-4'>
        <Link to={'/Cart/'}>
        <img className='cart' src="../src/assets/shopping-bag.png" alt="" />
        </Link>
        <span>0</span>
    </div>

)
} 

export default CartWidget;