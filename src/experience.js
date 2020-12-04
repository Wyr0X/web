import React from 'react';

import GetString from './language';
import { Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faPhp, faBootstrap, faAws, faReact, faNodeJs, faSass } from '@fortawesome/free-brands-svg-icons';

import TooEzzi from './images/tooezzi.gif';
import CodeIgniter from './images/codeigniter.svg';
import GraphQL from './images/graphql.svg';
import VentusWeb from './images/ventusweb.gif';
import Argentum20 from './images/argentum20.png';
import AoLibre from './images/aolibre.png';
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
            <h3 className="mt-5 pt-5 border-top">Argentum20 <small>(Septiembre 2020 - Presente)</small></h3>
            <Row>
                <Col xs="auto">
                    <Image src={Argentum20} alt="Argentum20" width="410" style={{ paddingTop: "52px", paddingBottom: "52px" }} rounded thumbnail />
                </Col>
                <Col>
                    <p>Proyecto que realizo junto con los creadores del mítico juego MMORPG&nbsp;
                        <a href="https://www.google.com/search?q=argentum+online" target="_BLANK" className="text-info">Argentum Online</a>, 
                        muy popular en Argentina. Es una continuación del juego original, lanzada por el veinteavo aniversario.</p>
                    <p>Yo soy parte del equipo de programación a cargo del código, que está escrito en Visual Basic 6.</p>
                    <p><a href="https://argentum20.com/" target="_BLANK" className="text-info">www.argentum20.com</a></p>
                    <p className="mb-2"><small>Tecnologías usadas:</small></p>
                    <Row>
                        <Col className="d-flex flex-wrap align-items-center">
                            <span className="brand-text">VB6</span>
                            <span className="brand-text ml-4">MySQL</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <h3 className="mt-5 pt-5 border-top">VentusWeb <small>(Noviembre 2018 - Presente)</small></h3>
            <Row>
                <Col xs="auto">
                    <Image src={VentusWeb} alt="VentusWeb" rounded thumbnail />
                </Col>
                <Col>
                    <p>Proyecto personal que realizo junto con un amigo. Está basado en Argentum Online, pero para el navegador.</p>
                    <p>Yo estoy a cargo del back-end, del motor de juego y de enlazarlo con las vistas.</p>
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
            <h3 className="mt-5 pt-5 border-top">Aportes al repositorio de Argentum Online Libre</h3>
            <Row>
                <Col xs="auto">
                    <Image src={AoLibre} alt="AoLibre" width="410" style={{ padding: "50px 100px" }} rounded thumbnail />
                </Col>
                <Col>
                    <p>AO Libre es un proyecto colaborativo que lleva el open-source como bandera desde el año 2018.</p>
                    <p><a href="http://argentumonline.org/" target="_BLANK" className="text-info">www.argentumonline.org</a></p>
                    <p>Repositorio: <a href="https://github.com/ao-libre" target="_BLANK" className="text-info">https://github.com/ao-libre</a></p>
                    <p className="mb-2"><small>Tecnologías usadas:</small></p>
                    <Row>
                        <Col className="d-flex flex-wrap align-items-center">
                            <span className="brand-text">VB6</span>
                            <span className="brand-text ml-4">MySQL</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <h3 className="mt-5 pt-5 border-top">Esta página</h3>
            <Row>
                <Col xs="auto">
                    <div
                        className="img-thumbnail rounded brand-icon"
                        style={{ width: "410px", fontSize: "10rem", padding: "50px 100px" }}
                    >
                        <FontAwesomeIcon icon={faCode} title="Esta web" />
                    </div>
                </Col>
                <Col>
                    <p>El código usado en esta página está disponible para cualquiera que quiera verlo, bajo licencia MIT.</p>
                    <p><a href="https://github.com/Wyr0X/web" target="_BLANK" className="text-info">https://github.com/Wyr0X/web</a></p>
                    <p className="mb-2"><small>Tecnologías usadas:</small></p>
                    <Row>
                        <Col className="d-flex flex-wrap align-items-center">
                            <FontAwesomeIcon icon={faReact} className="brand-icon" title="React" />
                            <FontAwesomeIcon icon={faBootstrap} className="brand-icon ml-4" title="Bootstrap" />
                            <FontAwesomeIcon icon={faSass} className="brand-icon ml-4" title="Sass" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    );
};

export default Experience;