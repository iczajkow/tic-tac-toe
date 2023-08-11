import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faO } from '@fortawesome/free-solid-svg-icons'

import './Field.css';

const Field = ({value, onClick}) => {
    if(!value) {
        return <button className='field-button' onClick={onClick}></button>
    }
    const iconName = value === 1 ? faX : faO;
    return <FontAwesomeIcon icon={iconName}>o</FontAwesomeIcon>
}

export default Field;