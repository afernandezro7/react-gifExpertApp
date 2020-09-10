import React, { useState } from 'react';
import PropTypes from 'prop-types';



export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('Introduce un Elemento')

    const handleInputChange= (e)=>{
        setinputValue(e.target.value);
    }

    const handleKeyEnter= (e)=>{
        e.preventDefault();

        if( inputValue.trim().length > 2){
            
            setCategories(cats=>[inputValue,...cats])
            setinputValue('Introduce un Elemento')
            document.getElementById('Myform').reset()
        }
    }

    return (
        
        <form id="Myform" onSubmit= { handleKeyEnter }>
            <input
                type="text"               
                placeholder={inputValue}
                
                onChange={ handleInputChange }
            />
        </form>
        
    )
}

AddCategory.propTypes= {
    setCategories: PropTypes.func.isRequired
}

