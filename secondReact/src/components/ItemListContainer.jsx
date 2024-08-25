import { useEffect, useState } from "react";
import Counter from "./Counter"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader"

const ItemListContainer = () => {

    const { id } = useParams();
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const database = collection(db, "inventory");
        const dataCategory = id ? query(database, where("category", "==", id)) : database;
        getDocs(dataCategory).then(inventoryCollection => {
            if (inventoryCollection.docs.length > 0) {
                setCards(inventoryCollection.docs.map(products => ({ id: products.id, ...products.data() })));
                console.log(cards)
            }
        }).catch(error => {
            console.error("Error al obtener los datos:", error);
        }).finally(() => {
            setLoading(false);
        });

    }, [id])


    return (

        <>
            <div className="container">
                <div className="row">
                    {loading ? <Loader /> : cards.map(cardProducts => (
                        <div key={cardProducts.id} className="col d-flex align-items-stretch mb-5">
                            <div className="card">
                                <div className="deal-container shadow p-3">
                                    <Link to={'/ItemDetails/' + cardProducts.id}>
                                        <img className="card-img-top" src={cardProducts.image} alt="" />
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-light">{cardProducts.name}</h5>
                                    <p className="card-title text-light">{cardProducts.description}</p>
                                    <p className="card-text text-light">${cardProducts.price}</p>

                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
};

export default ItemListContainer;