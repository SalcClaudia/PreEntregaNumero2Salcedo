import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="container">
                <div className="row my-3">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-outline-dark">+</button>
                            <span type="button" className="btn btn-outline-dark">{count}</span>
                            <button type="button" className="btn btn-outline-dark">-</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    <button type="button" className="btn btn-outline-dark mb-3">Agregar</button>
                </div>
            </div>
        </>
    )

}

export default Counter;