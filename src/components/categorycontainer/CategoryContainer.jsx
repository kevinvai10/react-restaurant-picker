import React from 'react'
import CategoryButton from '../categorybutton/CategoryButton';
import './CategoryContainer.style.css'
const CategoryContainer = ({filteredCategories, onHandleCats}) => {
    return(
        <div className="category-container">
            {
                filteredCategories.map((category, index) => (<CategoryButton key={index} category={category} onHandleCats={onHandleCats} />)  ) 
            }
            
            <button value={''} onClick={onHandleCats}>All categories</button>
        </div>
    )
}

export default CategoryContainer;