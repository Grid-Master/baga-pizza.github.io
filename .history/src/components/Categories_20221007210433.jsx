import React, { useState } from 'react';

function Categories() {
  const [activeCategory, setActiveCategory] = useState(1);

  const onClickCategory = () => {
    setActiveCategory(3);
  };

  return (
    <div className="categories">
      <ul>
        <li onClick={() => onClickCategory()} className={activeCategory === 0 ? 'active' : ''}>
          Все
        </li>
        <li className={activeCategory === 1 ? 'active' : ''}>Мясные</li>
        <li className={activeCategory === 2 ? 'active' : ''}>Вегетарианская</li>
        <li className={activeCategory === 3 ? 'active' : ''}>Гриль</li>
        <li className={activeCategory === 4 ? 'active' : ''}>Острые</li>
        <li className={activeCategory === 5 ? 'active' : ''}>Закрытые</li>
      </ul>
    </div>
  );
}

export default Categories;
