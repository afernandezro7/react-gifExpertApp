import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({title,url}) => {
    return (    
        <div className="card animate__animated animate__rollIn animate__delay-2s">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
           
        </div>  
    )
}

GifGridItem.propType = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
