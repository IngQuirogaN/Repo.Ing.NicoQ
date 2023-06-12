import {Link} from "react-router-dom";
import '../../styles/Nav.css';


const Nav = (props) => {

    return (

            <nav>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Nosotros">Nosotros</Link></li>
                        <li><Link to="/Productos">Productos</Link></li>
                        <li><Link to="/Galeria">Galeria</Link></li>
                        <li><Link to="/Contacto">Contacto</Link></li>

                    </ul>
                </div>

            </nav>
    );


}

export default Nav;