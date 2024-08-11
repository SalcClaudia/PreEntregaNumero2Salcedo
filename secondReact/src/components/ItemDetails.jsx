import { getDoc, getFirestore, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Counter from "./Counter";

const ItemDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const productDoc = doc(db, "inventory", id);

        getDoc(productDoc).then((doc) => {
            if (doc.exists()) {
                setProduct({ id: doc.id, ...doc.data() });
            } else {
                console.log(id);
                console.error("No existe tal documento!");
            }

        }, [id]);

    })

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
                            <Counter products={20}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ItemDetails;