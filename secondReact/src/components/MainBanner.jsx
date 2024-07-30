const MainBanner = ({ summerdeal }) => {
    return (
        <>
            <section className="wrapper-deal">
                <div className="container-img">
                    <h1 className="title-deal">{summerdeal}</h1>
                </div>
            </section>

            <section className="container-fluid mt-5 py-3 bg-black">
                <div className="row">
                    <div className="col">
                    <h3 className="text-light">No te pierdas nuestra colección</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainBanner;