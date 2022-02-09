import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi'

import api from '../../services/api';

import logoImg from "../../assets/logo.svg"

import './styles.css';

export default function Profile(){
    const [incidents, setIncidents] = useState([]);

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    

    useEffect(() => {
        api.get('profile',{
         headers: {
            Authorization: ongId,
         }
        }).then(response => {
            setIncidents(response.data);
        }) 

    }, [ongId]);



    
    function handleLogout(){
        localStorage.clear();

        history.push('./');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem Vinda, {ongName} </span>

                <Link className="button" to="/incidents/new">Cadastrar</Link>
                <button onClick= {handleLogout} type="button">
                    <FiPower size={18} color="#E02841"/>

                </button>  
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key= {incident.id} >
                        <strong>CASO:</strong>
                        <p> {incident.title } </p>

                        <strong>DESCRIÇÃO:</strong>
                        <p> {incident.description } </p>


                        <strong>VALOR:</strong>
                        <p> {Intl.NumberFormat('pt-BR', { style: 'currency', currency:'BRL' }).format(incident.value)} </p>

                        <button onClick= {() => handleDeleteIncident(incident.id)} type="submit">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>

                    </li>
                ))}
            </ul>

        </div>
    );
}
