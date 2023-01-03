import React from 'react';
import { Pencil, Trash } from 'react-bootstrap-icons';
import './cardmember.css';

const CardMember = ({ member,index,deleteMember }) => {
    return (
        <div className='card-member'>
            <p>{ member }</p>
            <Trash className='card-member-icons' onClick={() => deleteMember(index)}/>
        </div>
    );
}

export default CardMember;
