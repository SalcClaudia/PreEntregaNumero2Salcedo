import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-outline-light">+</button>
                            <button type="button" className="btn btn-outline-light">{count}</button>
                            <button type="button" className="btn btn-outline-light">-</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    <button type="button" className="btn btn-outline-light">Agregar</button>
                </div>
            </div>
        </>
    )

}

export default Counter;