const Footer = () => {
    return (
      <footer className="footer bg-dark text-light">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <h5>Acerca de Nosotros</h5>
              <p>Somos una joyería comprometida con ofrecer piezas únicas y de alta calidad, hechas con los mejores materiales.</p>
            </div>
            <div className="col-md-4">
              <h5>Contacto</h5>
              <ul className="list-unstyled">
                <li>Email: contacto@emerald.com</li>
                <li>Teléfono: +1 234 567 890</li>
                <li>Dirección: Calle Maine 123, NYC</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Síguenos</h5>
              <ul className="list-unstyled">
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col text-center">
              <p>&copy; {new Date().getFullYear()} Emerald Jewelry. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;