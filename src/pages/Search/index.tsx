import React from 'react';
import { Link } from 'react-router-dom';
import ButtonSearch from '../../core/components/ButtonSearch';
import './styles.scss';

const Search = () => (
    <>
        <div className="search-container">
            <div className="search-text-title">
                Encontre um perfil Github
            </div>
            <div className="search-input-name">
                <div className="search-input-name-text">
                    Usuário Github
                </div>
            </div>

            <Link to="/search" className="search-button">
                <ButtonSearch text="Encontrar" />
            </Link>
        </div>
    </>
)

export default Search;