import { useState } from "react";

const Counter = ({ products }) => {
    const [count, setCount] = useState(0);

    const [stock, setStock] = useState(products);

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

    const OnAdd = () => {
        if (count <= stock) {
            setStock(stock - count);
            console.log("Haz agregado " + count + " al carrito")
        }
    }

    return (
        <>
            <div className="container">
                <div className="row my-3">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-outline-dark" onClick={Subtract}>-</button>
                            <span type="button" className="btn btn-outline-dark">{count}</span>
                            <button type="button" className="btn btn-outline-dark" onClick={AddUp}>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    <button type="button" className="btn btn-outline-dark mb-3" onClick={OnAdd}>Agregar</button>
                </div>
            </div>
        </>
    )

}

export default Counter;