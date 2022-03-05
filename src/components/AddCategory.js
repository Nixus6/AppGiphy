import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setValue] = useState('');
    const handleInputchange = e => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // setCategories([...cayegorie,inputValue]);
        if (inputValue.trim().length > 2) {
            setCategories(call => [inputValue,...call]);//Usando el callback del useState
            setValue('');
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add</h2>
            <h2>{inputValue}</h2>
            <input id='newHeroe'
                type="text"
                value={inputValue}
                onChange={e => handleInputchange(e)}
            />
        </form>
    );
};
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}   
