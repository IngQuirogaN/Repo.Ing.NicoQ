
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductoItem from '../components/productos/ProductoItem';
import '../styles/Producto.css';

const Productos = (props) => {
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/productos');
            setProductos(response.data);
            setLoading(false);
        };
        cargarProductos();

    }, []);

    return (
        <main>
            <div className="productos_intro">
                <video src="campo_aereo .mp4" autoplay="true" loop="true" muted="true" width="500px"></video>
                <div>
                    <p>
                        Nuestros productos se destacan por la frescura y calidad. Llevamos las frutas del campo a su mesa
                        con la frescura que el cliente requiere. Ademas, ofrecemos a nuestros clientes asesoramiento para el
                        desarrollo de nuevos productos o para mejorar la
                        calidad de los existentes, brindando una amplia y completa información sobre los productos y
                        servicios que ofrecemos; así como muestras para aplicaciones y desarrollos.


                    </p>
                </div>
            </div>
            <div className="productos_list">
                <div>
                    <div>
                        {loading ? (
                            <p>Cargando...</p>
                        ) : (
                            productos.map(item => <ProductoItem key={item.id}
                                tipo={item.tipo} clase={item.clase} cuerpo={item.cuerpo} imagen={item.imagen} />)

                        )}
                    </div>
                </div>
            </div>

        </main>



    )

};

export default Productos;