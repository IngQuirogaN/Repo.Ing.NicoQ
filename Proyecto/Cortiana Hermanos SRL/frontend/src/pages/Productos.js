import '../styles/Producto.css';

const Producto = (props) => {

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
                    <img src="images 7.jpg" width="300px" height="300px" style={{paddingTop: 20+'px'}} alt=""/>
                        <div>
                            <h2>Naranja X</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione atque adipisci aliquam
                                distinctio
                                nemo quam architecto deleniti sapiente eos quod assumenda, officiis accusamus natus consectetur
                                omnis at soluta ducimus delectus.</p>
                        </div>
                </div>
            </div>
            <div className="productos_list">
                <div>
                    <img src="images 8..jpg" width="300px" height="300px" style={{paddingTop: 20+'px'}} alt=""/>
                        <div>
                            <h2>Naranja X2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione atque adipisci aliquam
                                distinctio
                                nemo quam architecto deleniti sapiente eos quod assumenda, officiis accusamus natus consectetur
                                omnis at soluta ducimus delectus.</p>
                        </div>
                </div>
            </div>
            <div className="productos_list">
                <div>
                    <img src="images 10.jpg" width="300px" height="300px" style={{paddingTop: 20+'px'}} alt=""/>
                        <div>
                            <h2>Mandarina</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione atque adipisci aliquam
                                distinctio
                                nemo quam architecto deleniti sapiente eos quod assumenda, officiis accusamus natus consectetur
                                omnis at soluta ducimus delectus.</p>
                        </div>
                </div>
            </div>
            <div className="productos_list">
                <div>
                    <img src="pomelo.jpg" width="300px" height="300px" style={{paddingTop: 20+'px'}} alt=""/>
                        <div>
                            <h2>Pomelo</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione atque adipisci aliquam
                                distinctio
                                nemo quam architecto deleniti sapiente eos quod assumenda, officiis accusamus natus consectetur
                                omnis at soluta ducimus delectus.</p>
                        </div>
                </div>
            </div>

        </main>


    );

}

export default Producto;