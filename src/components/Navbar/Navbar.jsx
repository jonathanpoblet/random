import React from 'react';
import { PersonFillAdd,Infinity } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {
    return (
        <div className='layout'>
            <div className='layout-container-logo'>
                <Link 
                    to='/random/'
                    className='logo'
                >
                    RANDOM
                </Link>
            </div>
            
            <div className='layout-container-options'> 
                <Link 
                    to='/random/randomnumber'
                    className='layout-container-options-number'
                    >
                        <Infinity className='layout-container-options-number-logo'/>
                        <p className='layout-container-options-number-title'>Number</p>
                </Link>
                <Link 
                    to='/random/randomteam'
                    className='layout-container-options-team'
                    >
                        <PersonFillAdd className='layout-container-options-team-logo'/>
                        <p className='layout-container-options-team-title'>Team</p>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
