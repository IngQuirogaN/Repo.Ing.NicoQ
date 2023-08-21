
import React, { useState } from 'react';
import axios from 'axios';

import '../styles/Contacto.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'


const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        apellido: '',
        empresa: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post(`${process.env.REACT_APP_API_URL}/api/contacto`, formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="main_contacto">
            <div className="formulario_contacto">
                <div>
                    <h2>Complete el siguiente formulario:</h2>
                    <form action="" method="" className="formulario" onSubmit={handleSubmit}>
                        <div>
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                        </div>

                        <div>
                            <label for="apellido">Apellido</label>
                            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
                        </div>
                        <div>
                            <label for="empresa">Empresa</label>
                            <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} />
                        </div>
                        <div>
                            <label for="mail">Mail</label>
                            <input type="text" name="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label for="telefono">Telefono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                        </div>
                        <div class="text_area">
                            <label for="mensaje">Mensaje</label>
                            <textarea name="mensaje" id="" cols="30" rows="10" value={formData.mensaje} onChange={handleChange}></textarea>
                        </div>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                        <div class="boton">
                            <input type="submit" value="Enviar" />
                        </div>
                    </form>
                </div>
                <div className="redes">
                    <h2>Nuestras Redes Sociales</h2>
                    <ul>
                        <li><a href="https://www.facebook.com/cortianahnossrl"><FontAwesomeIcon icon={faFacebook} style={{ width: 40 + "px", scale: 200 + "%" }} /></a></li>
                        <li><a href="https://www.instagram.com/cortianahnossrl/"><FontAwesomeIcon icon={faInstagram} style={{ width: 40 + "px", scale: 200 + "%" }} /></a></li>
                        <li><a href="https://wa.me/541153773877"><FontAwesomeIcon icon={faWhatsapp} style={{ width: 40 + "px", scale: 200 + "%" }} /></a></li>

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