import './styles.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import ButtonHome from '../../core/components/ButtonHome';

const Home = () => (
    <>
    <div className="home-container">
        <div className="text-title">
            Desafio do Capítulo 3, <br /> Bootcamp DevSuperior
        </div>
        <div className="text-subtitle">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br />
            <br />
                Favor observar as instruções passadas no capítulo sobre a <br />
                elaboração deste projeto.<br />
            <br />
                Este design foi adaptado a partir de Ant Design System for Figma, de <br />
                Mateusz Wierzbicki: <a href="mailto:antforfigma@gmail.com">antforfigma@gmail.com</a>
        </div>
        <Link to="/search">
            <ButtonHome text="Começar" />
        </Link>
    </div>
    </>
);


export default Home;