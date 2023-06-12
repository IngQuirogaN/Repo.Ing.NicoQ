const Contacto = (props) => {

    return(
        <main className="main_contacto">
        <div className="formulario_contacto">
            <div>
                <h2>Complete el siguiente formulario:</h2>
                <form action="" method="" class="formulario">
                    <div>
                        <label for="nombre">Nombre</label>
                        <input type="text" name=""/>
                    </div>
                    <div>
                        <label for="apellido">Apellido</label>
                        <input type="text" name=""/>
                    </div>
                    <div>
                        <label for="empresa">Empresa</label>
                        <input type="text" name=""/>
                    </div>
                    <div>
                        <label for="mail">Mail</label>
                        <input type="text" name=""/>
                    </div>
                    <div>
                        <label for="telefono">Telefono</label>
                        <input type="text" name=""/>
                    </div>
                    <div class="text_area">
                        <label for="mensaje">Mensaje</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div class="boton">
                        <input type="submit" value="Enviar"/>
                    </div>
                </form>
            </div>
            <div className="redes">
                <h2>Nuestras Redes Sociales</h2>
                <ul>
                    <li><a href="https://www.facebook.com/cortianahnossrl"><i className="fa-brands fa-facebook"
                                style={{color: 'black'}}></i></a></li>
                    <li><a href="https://www.instagram.com/cortianahnossrl/"><i className="fa-brands fa-instagram"
                                style={{color: 'black'}}></i></a></li>
                    <li><a href="https://wa.me/541153773877"><i className="fa-brands fa-whatsapp"
                                style={{color: 'black'}}></i></a></li>

                </ul>
                <h2>Direccion</h2>
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

export default Contacto;