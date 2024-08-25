import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const { bag, removeItem, clear, sumProducts } = useContext(CartContext);

    return (
<>
        <section className="cart-title">
            <h1>Checkout</h1>
        </section>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            {bag.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.image} alt={item.name} width={150}/></td>
                                    <td className="align-middle text-center">{item.name}</td>
                                    <td className="align-middle text-center">${item.price} X {item.quantity}</td>
                                    <td className="align-middle text-center">${item.price * item.quantity}</td>
                                    <td className="align-middle"><img className="trash-can" src="../src/assets/delete.png" alt="trash-delete" onClick={ () => {removeItem(item.id)}} /></td>
                                </tr>
                            ))}
                            <tr>
                                <td className="align-middle" colSpan={4}>Total por Pagar</td>
                                <td className="align-middle text-center">${sumProducts()}</td>
                                <td className="align-middle">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );


}

export default Cart;
