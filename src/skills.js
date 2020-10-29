import React from 'react';
import GetString from './language';
import Star from './star';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Skills = ({ lang }) => {
    return (
        <section className="main-section" id="skills">
            <h1>{ GetString(lang, 'skills') }</h1>
            <p>{ GetString(lang, 'skills_desc') }</p>
            <p>{ GetString(lang, 'skills_indication') }</p>
            <h3 className="mt-4">Front-end</h3>
            <ListGroup variant="flush">
                <ListGroupItem><strong>HTML5</strong><Star r={3} /> WebWorkers, WebGL, WebSockets, WebRTC, requestAnimationFrame, etc.</ListGroupItem>
                <ListGroupItem><strong>CSS3</strong><Star r={3} /> Flex box, grid layout, transitions, pseudo elements, attribute selectors, etc.</ListGroupItem>
                <ListGroupItem><strong>JavaScript</strong><Star r={3} /> I feel very confident with vanilla JavaScript. Event loop, Promises, async-await, JSON, and a long etc.</ListGroupItem>
                <ListGroupItem><strong>Bootstrap</strong><Star r={3} /> Responsive web development.</ListGroupItem>
                <ListGroupItem><strong>JQuery</strong><Star r={3} /> Easy DOM manipulation and event handling.</ListGroupItem>
                <ListGroupItem><strong>React</strong><Star r={3} /> With Redux and Redux-Saga. Also familiar with React hooks.</ListGroupItem>
                <ListGroupItem><strong>GraphQL</strong><Star r={2} /> Flexible query language for API.</ListGroupItem>
                <ListGroupItem><strong>Sass</strong><Star r={1} /> CSS extension.</ListGroupItem>
            </ListGroup>
            <h3 className="mt-4">Back-end</h3>
            <ListGroup variant="flush">
                <ListGroupItem><strong>NodeJS</strong><Star r={3} /> As I said, I like JS. I normally use <strong>npm</strong> as packet manager.</ListGroupItem>
                <ListGroupItem><strong>Express</strong><Star r={3} /> Easy and flexible framework for creating APIs.</ListGroupItem>
                <ListGroupItem><strong>PassportJS</strong><Star r={3} /> Simple authentication middleware.</ListGroupItem>
                <ListGroupItem><strong>PHP</strong><Star r={2} /> I started with PHP more than 10 years ago. The language changed but I keep myself updated.</ListGroupItem>
                <ListGroupItem><strong>CodeIgniter</strong><Star r={2} /> Recently worked on a project that use CodeIgniter 3.</ListGroupItem>
                <ListGroupItem><strong>GraphQL</strong><Star r={1} /> Basic setup for a GraphQL API.</ListGroupItem>
            </ListGroup>
            <h3 className="mt-4">Databases</h3>
            <ListGroup variant="flush">
                <ListGroupItem><strong>MySQL</strong><Star r={3} /> Relational database that use SQL syntax.</ListGroupItem>
                <ListGroupItem><strong>MariaDB</strong><Star r={3} /> Derived from MySQL.</ListGroupItem>
                <ListGroupItem><strong>MongoDB</strong><Star r={3} /> NoSQL database oriented to documents.</ListGroupItem>
            </ListGroup>
            <h3 className="mt-4">Desktop Applications</h3>
            <ListGroup variant="flush">
                <ListGroupItem><strong>.NET</strong><Star r={3} /> Multiplatform development with C# and Visual Basic.</ListGroupItem>
                <ListGroupItem><strong>Microsoft VBA</strong><Star r={3} /> A lot of experience in legacy code with VB6.</ListGroupItem>
                <ListGroupItem><strong>C/C++</strong><Star r={2} /> Pointers, memory management, standard library, classes, GUI, networking, etc.</ListGroupItem>
                <ListGroupItem><strong>Java</strong><Star r={2} /> Design patterns, unit testing, Java API.</ListGroupItem>
            </ListGroup>
            <h3 className="mt-4">Others</h3>
            <ListGroup variant="flush">
                <ListGroupItem><strong>Git</strong><Star r={3} /> Version control system.</ListGroupItem>
                <ListGroupItem><strong>GNU/Linux</strong><Star r={2} /> Knowledge of operating systems and bash scripting.</ListGroupItem>
                <ListGroupItem><strong>Amazon S3</strong><Star r={2} /> Objects storage service. I used it to save users' images.</ListGroupItem>
                <ListGroupItem><strong>Heroku</strong><Star r={2} /> API deployment. Github integration.</ListGroupItem>
                <ListGroupItem><strong>OpenGL</strong><Star r={2} /> Basic setup, shaders, 3D rendering, models.</ListGroupItem>
                <ListGroupItem><strong>Python</strong><Star r={1} /> Simple scripts for handling and operating over text files and binary data.</ListGroupItem>
                <ListGroupItem><strong>Unit tests / integration tests</strong><Star r={2} /></ListGroupItem>
            </ListGroup>
        </section>
    );
};

export default Skills;