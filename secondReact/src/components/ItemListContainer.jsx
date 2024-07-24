import { useEffect, useState } from "react";
import jewelery from "./jewelery.json"
import Counter from "./Counter"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {

    const [cards, setCards] = useState(jewelery)
    const { id } = useParams();

    useEffect(() => {
        setCards(id ? jewelery.filter (cards => cards.category == id) : jewelery)

    }, [id])

    return (
        <>
            <div className="container">
                <div className="row">
                    {cards.map(cards => (
                        <div key={cards.id} className="col">
                            <div className="card">
                                <div className="deal-container shadow p-3">
                                    <img className="card-img-top" src={cards.image} alt="" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-light">{cards.name}</h5>
                                    <p className="card-title text-light">{cards.description}</p>
                                    <p className="card-text text-light">${cards.price}</p>

                                </div>
                                <Counter products={20}/>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </>
    )
};

export default ItemListContainer;