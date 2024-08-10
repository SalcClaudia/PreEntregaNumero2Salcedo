import { getDoc, getFirestore, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetails = () => {

const { id } = useParams();
const [product, setProduct] = useState([]);

useEffect (() =>{
const db = getFirestore();
const productDoc = doc(db, "inventory", id);

getDoc(productDoc).then((doc) =>{
if (doc.exists()){
    setProduct({ id: doc.id, ...doc.data()});
} else {
    console.log(id);
    console.error("No existe tal documento!");
}

},[id]);

})

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="deal-container shadow p-3">
                                <img className="card-img-top" src={product.image} alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-light">{product.name}</h5>
                                <p className="card-title text-light">{product.details}</p>
                                <p className="card-text text-light">${product.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ItemDetails;