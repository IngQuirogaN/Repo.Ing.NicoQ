import '../styles/Nosotros.css';


const Nosotros = (props) => {

    return (
        <main>
            <div className="nosotros_main">
                <div className="historia">
                    <div>
                        <h2>HISTORIA:</h2>
                        <p>
                            Cortiana Hermanos S.R.L. es una empresa familiar que al iniciar fue creciendo en base a manos
                            humildes, pero muy trabajadoras, comenzando sus actividades en el año de xxxx donde se contaba
                            con
                            un camión en donde la naranja se distribuía en menudeo en ciudades . En xxxx con la
                            visión de trascender el comercio ambulante, se vio la necesidad de establecer un punto de venta
                            fijo
                            el mercado central de Buenos Aires, punto donde se trabajó durante xx años. Buscando
                            alternativas
                            para mejorar las ventas en xxx se busca otra ciudad para establecer un nuevo punto de venta,
                            estableciendo un puesto en el mercado de la ciudad de Rosario. Perseverando, con visión de
                            crecimiento y gracias a la preferencia de nuestros clientes de aquella época, se fue adquiriendo
                            maquinaria y elevadores para atender de mejor manera y de forma más eficaz a los clientes que
                            adquirían la fruta con nosotros.
                        </p>

                    </div>
                    <img src="images 11.jpg" style={{ borderRadius: 10 + '%', height: 400 + 'px', paddingTop: 50 + 'px' }} alt="" />
                </div>
            </div>
            <div className="nosotros_contenedor">
                <div className="fumigacion">
                    <img src="images 12.jpg" style={{ height: 400 + 'px', width: 400 + 'px' }} alt="" />
                    <div style={{ height: 300 + 'px', width: 300 + 'px', scale: 0.01 }}>
                        <h2>Fumigacion</h2>
                        <p>Contamos con un sofisticado procedimiento de deteccion de insectos y plagas, y equipamiento
                            necesario de ultima tecnologia para el combate de los mismos</p>
                    </div>

                </div>
                <div className="riego">
                    <img src="images 13.jpg" style={{ height: 400 + 'px', width: 400 + 'px' }} alt="" />
                    <div style={{ height: 300 + 'px', width: 300 + 'px', scale: 0.01 }}>
                        <h2>Riego</h2>
                        <p>Poseemos el mas reciente sistema de riego automatizado, ideal para combatir las temporadas de
                            sequia</p>
                    </div>

                </div>
                <div className="seleccion">
                    <img src="Seleccion manual.jpg" style={{ height: 400 + 'px', width: 400 + 'px' }} alt="" />
                    <div style={{ height: 300 + 'px', width: 300 + 'px', scale: 0.01 }}>
                        <h2>Seleccion manual</h2>
                        <p>La seleccion manual de nuestros productos nos permite poder llevar a todos los hageres las frutas
                            de mas alta calidad.</p>
                    </div>

                </div>
            </div>
            <div className="nosotros_video">
                <video src="Fumigacion.mp4" autoplay="true" loop="true" muted="true" width="400px" height="400px"
                    style={{ borderRadius: 30 + '%' }}></video>
                <div>
                    <h2>Equipos hidráulicos asistidos por aire:</h2>
                    <p>
                        Son los equipos que permiten el mayor grado de mecanización de la aplicación, pues únicamente
                        requieren
                        al conductor del tractor. Además, permiten reducir el consumo de agua y las pérdidas de producto por
                        escurrimiento. Por permitir el tratamiento en un corto espacio de tiempo, consiguen que éste se
                        pueda
                        realizar en el momento de máxima sensibilidad de la plaga.
                    </p>
                    <p>
                        Se denominan equipos de pulverización hidráulica asistidos por aire o de pulverización de
                        chorro transportado porque las gotas producidas en la boquilla se incorporan a una corriente de aire
                        que
                        asegura su transporte hasta el cultivo, al mismo tiempo que remueve el follaje. Además disponen
                        de un
                        circuito hidráulico y tienen un sistema de movimiento del aire
                        formado por un ventilador de flujo axial y deflectores. El ventilador genera el caudal de aire y los
                        deflectores lo conducen de la manera deseada, haciéndolo pasar alrededor de las boquillas y con la
                        turbulencia necesaria para mover las hojas de la copa.
                    </p>
                </div>
            </div>

        </main >


    );

}

export default Nosotros;