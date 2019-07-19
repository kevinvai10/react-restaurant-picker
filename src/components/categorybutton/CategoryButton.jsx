import React from 'react'

const CategoryButton = ({ category, onHandleCats}) => {
    return(
        <button value={category} onClick={onHandleCats}>{category}</button>
    )
}

export default CategoryButton;