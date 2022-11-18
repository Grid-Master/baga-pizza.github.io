import React, { useState } from 'react';

function Categories() {
  const [activeCategory, setActiveCategory] = useState(3);

  return (
    <div className="categories">
      <ul>
        <li className="">Все</li>
        <li>Мясные</li>
        <li className={activeCategory === 3 ? 'active' : null}>Вегетарианская</li>
        <li>Гриль</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul>
    </div>
  );
}

export default Categories;
