import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Counter = ({ products, onAdd }) => {
    const [count, setCount] = useState(0);
    const [stock, setStock] = useState(products);
    const [showing, setShowing] = useState(true);

    const AddUp = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const Subtract = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const AddCart = () => {
        if (count <= stock) {
            setStock(stock - count);
            onAdd(count)
            setCount(1)
            setShowing(false);
            console.log("Haz agregado " + count + " al carrito")
        }
    }

    useEffect(() => {
        setStock(products)
    }, [products])


    return (

        <>
            {showing ? 
            <div className="container">
                <div className="row my-3">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-outline-dark" onClick={Subtract}>-</button>
                            <span className="btn btn-outline-dark">{count}</span>
                            <button type="button" className="btn btn-outline-dark" onClick={AddUp}>+</button>
                        </div>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col">
                        <button type="button" className="btn btn-outline-dark mb-3" onClick={AddCart}>Agregar</button>
                    </div>
                </div>
            </div> : <Link to={"/Cart"} className="btn btn-outline-dark mb-3">Finalizar compra</Link>}
                
       
        </>

    )

}

export default Counter;