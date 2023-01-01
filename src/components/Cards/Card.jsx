import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ title,description,button,route }) => {
    return (
        <div className='card'>
            <h1 className='card-title'>{ title }</h1>
            <p className='card-description'>{ description }</p>
            <Link
                className='card-button'
                to={ route }
            >
                { button }
            </Link>
        </div>
    );
}

export default Card;
