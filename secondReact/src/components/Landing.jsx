import MainBanner from "./MainBanner";
import ItemListContainer from "./ItemListContainer";


const Landing = () => {
    return (
        <>
            <section className="container-fluid bg-black">
                <div className="row">
                    <div className="col">
                        <h3 className="text-light m-4">¡No te pierdas nuestra colección!</h3>
                    </div>
                </div>
            </section>
            <MainBanner summerdeal={"Últimos lanzamientos de verano"} deal={"https://imgs.search.brave.com/9-MG0a60mH_KbNES3Lpa6h6_dqZGMko3ioa7LH0X6Uk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZWNhc3Rlci5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDMvaW1hZ2VfMjU0/NGRjLnBuZz93PTgw/MCZoPTgwMCZjcm9w/PTE"} />
            <ItemListContainer />
        </>
    )

}

export default Landing;
