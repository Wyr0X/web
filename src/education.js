import React from 'react';

import GetString from './language';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Education = ({ lang }) => {
    return (
        <section className="main-section" id="education">
            <h1>{ GetString(lang, 'education') }</h1>
            <p>{ GetString(lang, 'education_desc') }</p>
            <ListGroup variant="flush">
                <ListGroupItem className="mt-4">
                    <h3>Tecnicatura en Análisis, Desarrollo y Programación de Aplicaciones</h3>
                    <p className="mb-0">Instituto Superior de Formación Docente y Técnica Nº 43</p>
                    <span className="text-primary">2020 - Presente</span>
                </ListGroupItem>
                <ListGroupItem className="mt-4">
                    <h3>Ingeniería en Computación <small>(Incompleto)</small></h3>
                    <p className="mb-0">Universidad Nacional de La Plata</p>
                    <span className="text-primary">2014 - 2017</span>
                </ListGroupItem>
            </ListGroup>
        </section>
    );
};

export default Education;