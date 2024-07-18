import { useEffect, useState } from "react";
import MainBanner from "./MainBanner";
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
            <MainBanner summerdeal={"Ultimos lanzamientos de verano"} deal={"https://imgs.search.brave.com/9-MG0a60mH_KbNES3Lpa6h6_dqZGMko3ioa7LH0X6Uk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZWNhc3Rlci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDMvaW1hZ2VfMjU0/NGRjLnBuZz93PTgw/MCZoPTgwMCZjcm9w/PTE"} />
            <div className="container">
                <div className="row">
                    {cards.map(cards => (
                        <div className="col">
                            <div key={cards.id} className="card">
                                <div className="deal-container">
                                    <img className="card-img-top" src={cards.image} alt={cards.name} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-light">{cards.name}</h5>
                                    <p className="card-text text-light">${cards.price}</p>

                                </div>
                                <Counter/>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </>
    )
};

export default ItemListContainer;