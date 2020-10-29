import React from 'react';

import GetString from './language';
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faPhp, faBootstrap, faAws, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

import TooEzzi from './images/tooezzi.gif';
import CodeIgniter from './images/codeigniter.svg';
import GraphQL from './images/graphql.svg';
import VentusWeb from './images/ventusweb.gif';
import MongoDB from './images/mongodb.svg';

const Experience = ({ lang }) => {
    return (
        <section className="main-section" id="experience">
            <h1>{ GetString(lang, 'experience') }</h1>
            <h3 className="mt-4">TooEzzi <small>(Octubre 2020 - Presente)</small></h3>
            <Row>
                <Col xs="auto">
                    <Image src={TooEzzi} alt="TooEzzi" rounded thumbnail />
                </Col>
                <Col>
                    <p>Trabajo que hago como freelancer. Realizo tareas como: ajustar las vistas según lo pedido en las maquetas,
                        validar formularios, actualizar la base de datos, almacenar archivos en Amazon S3, entre otras cosas.
                    </p>
                    <p className="mb-2"><small>Tecnologías usadas:</small></p>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faPhp} className="brand-icon" title="PHP" />
                            <Image src={CodeIgniter} alt="CodeIgniter" className="brand-icon ml-4" title="CodeIgniter" width="50px" />
                            <FontAwesomeIcon icon={faBootstrap} className="brand-icon ml-4" title="Bootstrap" />
                            <FontAwesomeIcon icon={faAws} className="brand-icon ml-4" title="Amazon S3" />
                            <Image src={GraphQL} alt="GraphQL" className="brand-icon ml-4" title="GraphQL" width="50px" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <h3 className="mt-5">VentusWeb <small>(Noviembre 2018 - Presente)</small></h3>
            <Row>
                <Col xs="auto">
                    <Image src={VentusWeb} alt="VentusWeb" rounded thumbnail />
                </Col>
                <Col>
                    <p>Proyecto personal que realizo junto con un amigo. Está basado en el mítico MMORPG&nbsp;
                        <a href="https://www.google.com/search?q=argentum+online" target="_BLANK" className="text-info">Argentum Online</a>, 
                        muy popular en Argentina.</p>
                    <p>Yo estoy a cargo del back-end, del motor de juego y de conectarlo con las vistas.</p>
                    <p className="mb-2"><small>Tecnologías usadas:</small></p>
                    <Row>
                        <Col className="d-flex flex-wrap align-items-center">
                            <FontAwesomeIcon icon={faReact} className="brand-icon" title="React" />
                            <FontAwesomeIcon icon={faNodeJs} className="brand-icon ml-4" title="NodeJS" />
                            <Image src={MongoDB} alt="MongoDB" className="brand-icon" title="MongoDB" width="75px" />
                            <span className="brand-text">WebGL</span>
                            <span className="brand-text ml-4">WebSockets</span>
                            <span className="brand-text ml-4">WebRTC</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
};

export default Experience;