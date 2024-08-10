const Loader = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="spinner-border text-secondary m-3" role="status">
                            <span className="visually-hidden">Cargando...</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Loader;