const Cart = () =>{
    return (
        <div className="cart-item row mb-3 align-items-center">
            <div className="col-md-4">
                <img src={product.image} alt={product.name} className="img-fluid" />
            </div>
            <div className="col-md-4">
                <h5>{product.name}</h5>
                <p>${product.price}</p>
            </div>
        </div>
    );
    
    
}

export default Cart;
