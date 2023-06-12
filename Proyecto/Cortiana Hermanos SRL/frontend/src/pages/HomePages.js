const HomePage = (props) => {

    return (
        <main>
            <div className="presentacion">
                <div>
                    
                    
                <video src="camion.mp4" autoplay="true" loop="true" muted="true" style={{paddingTop: 40 + 'px'}}></video>
                    
                </div>
                <div>
                    <p>
                        En Cortiana Hermanos S.R.L. nos dedicamos a llevar la fruta más fresca del campo
                        hasta tu mesa, orgullosos de nuestras raíces como empresa familiar a través de generaciones seguimos
                        creciendo gracias a nuestros clientes fieles, quienes buscan lo mejor y saben que la marca ‘CH srl’
                        es sinónimo de calidad.
                    </p>
                    <p>
                        Nuestros productos están cultivados de forma natural, por lo que mantienen todo su sabor. Es por eso
                        que además de ser los favoritos de muchas familias argentinas, también lo somos de prestigiosos
                        cocineros, que utilizan nuestras frutas para elaborar sus mejores platos.
                    </p>

                </div>


            </div>
            <div className="cuerpo">
                <div className="mision">
                    <h1>Nuestra Mision</h1>
                    <img src="images 7.jpg" alt="" />

                    <p>
                        Comercializar, procesar y distribuir frutas de alta calidad a nivel nacional e internacional, de
                        acuerdo a los requerimientos de nuestros clientes, brindando un alto servicio de calidad utilizando
                        procesos y tecnología de vanguardia, enfocados siempre en estimular la superación constante en cada
                        uno de nuestros colaboradores, generando un ambiente de trabajo adecuado.
                    </p>
                </div>

                <div className="vision">
                    <h1>Nuestra Vision</h1>
                    <img src="images.jpg" alt="" />

                    <p>
                        Ser una empresa 100% integrada verticalmente desde el campo hasta el consumidor, creando excelencia
                        a nivel de calidad, con mejora continua y manteniendo una ética social en la que accionistas,
                        trabajadores y consumidores se vean representados.
                    </p>
                </div>
                <div className="politica">
                    <h1>Politica de Calidad</h1>
                    <img src="images 1.jpg" alt="" />
                    <p>
                        Cortiana Hermanos S.R.L., siendo una empresa dedicada a la comercializacion de citricos, se
                        compromete con sus clientes ofreciendo productos y servicios de alta calidad, satisfaciendo sus
                        requerimientos y necesidades, buscando siempre la mejora continua a través de sus procesos ya
                        establecidos.
                    </p>
                </div>
            </div>
            <div className="ubicacion">
                <div>
                    
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46123.66395649683!2d-57.93085565532442!3d-30.770037038674616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ad0fab658d834f%3A0x2607e21b4d7eb074!2sCortiana%20Hnos%20SRL!5e0!3m2!1ses!2sar!4v1683541096568!5m2!1ses!2sar"
                        width="600" height="450"  allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" style={{border: 0 }}></iframe>
                </div>
                <div className="informacion">
                    <h2>informacion:</h2>
                    <p> 9 de Julio & calle Nro. 17</p>
                    <p> Villa del Rosario, Entre Rios, Argentina</p>
                    <p>CP: 3229</p>
                    <p>Telefono: 234-46822347</p>
                    <p>info@cortianahns.com.ar </p>
                    <p>Lunes – Viernes de 8:00 a 18:00 h. </p>
                </div>
            </div>
        </main>
    );

}

export default HomePage;