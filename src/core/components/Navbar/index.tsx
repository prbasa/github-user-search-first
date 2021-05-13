import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <>
        <nav className="main-nav">
            <Link to="/">
                <div className="text-nav">Bootcamp DevSuperior </div>
            </Link>
        </nav>
    </>
);

export default Navbar;