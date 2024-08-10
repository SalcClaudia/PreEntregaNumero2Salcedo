import { useEffect, useState } from "react";
import Counter from "./Counter"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { Link } from "react-router-dom";
import Loader from "./Loader"

const ItemListContainer = () => {

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const database = collection(db, "inventory");
        getDocs(database).then(inventoryCollection => {
            if (inventoryCollection.docs.length > 0) {
                setCards(inventoryCollection.docs.map(products => ({ id: products.id, ...products.data() })));
                console.log(cards)
            } 
        }).catch(error => {
            console.error("Error al obtener los datos:", error);
        }).finally(() => {
            setLoading(false);  
        });

    }, [])


    return (

        <>
        <section className="container-fluid bg-black">
            <div className="row">
                <div className="col">
                <h3 className="text-light m-4">No te pierdas nuestra colección</h3>
                </div>
            </div>
        </section>
            <div className="container">
                <div className="row">
                    {loading ? <Loader /> : cards.map(card => (
                        <div key={card.id} className="col d-flex align-items-stretch mb-5">
                            <div className="card">
                                <div className="deal-container shadow p-3">
                                    <Link to={'/ItemDetails/' + card.id}>
                                        <img className="card-img-top" src={card.image} alt="" />
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-light">{card.name}</h5>
                                    <p className="card-title text-light">{card.description}</p>
                                    <p className="card-text text-light">${card.price}</p>

                                </div>
                                <Counter products={20} />
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