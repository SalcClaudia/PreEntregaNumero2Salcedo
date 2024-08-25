import { getDoc, getFirestore, doc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "./Counter";
import { CartContext } from "./CartContext";

const ItemDetails = ({item}) => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const productDoc = doc(db, "inventory", id);

        getDoc(productDoc).then((doc) => {
            if (doc.exists()) {
                setProduct({ id: doc.id, ...doc.data() });
            } else {
                console.error("No existe tal documento!");
            }

        });

    }, [id])

    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(product, quantity);
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.image} alt={product.name} className="product-image img-fluid"></img>
                    </div>
                    <div className="col-md-6 border border-2 border-black rounded-1 custome-container">
                        <div className="border-bottom">
                        <h2 className="pt-5">{product.name}</h2>
                        </div>
                        <div className="container-des">
                        <p className="product-description text-justify">{product.details}</p>
                        <div className="container-price">
                        <p className="product-price">${product.price}</p>
                        </div>
                        </div>
                        <div className="mt-4 costume-counter">
                            <Counter products={20} onAdd={onAdd}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ItemDetails;