import { useEffect, useState } from "react";
import Counter from "./Counter"
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore"

const ItemListContainer = () => {

    const [cards, setCards] = useState([])
    const { id } = useParams();

    //useEffect(() => {
    //  setCards(id ? jewelery.filter (cards => cards.category == id) : jewelery)

    // }, [id])

    useEffect(() => {
        const db = getFirestore();
        const database = collection(db, "inventory");
        getDocs(database).then(inventoryCollection => {
            if(inventoryCollection.docs.length > 0){
                setCards(inventoryCollection.docs.map(products => ({id:products.id, ...products.data()})));
                console.log(cards)
            }else{
                console.error("Error");
            }
            
        })
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    {cards.map(card => (
                       <div key={card.id} className="col">
                       <div className="card">
                           <div className="deal-container shadow p-3">
                               <img className="card-img-top" src={card.image} alt="" />
                           </div>
                           <div className="card-body">
                               <h5 className="card-title text-light">{card.name}</h5>
                               <p className="card-title text-light">{card.description}</p>
                               <p className="card-text text-light">${card.price}</p>

                           </div>
                           <Counter products={20} />
                       </div>
                   </div> 
                    ))}
                </div>
            </div>
        </>
    )
};

export default ItemListContainer;