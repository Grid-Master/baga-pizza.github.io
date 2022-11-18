import { useWhyDidYouUpdate } from 'ahooks';
import React, { useState } from 'react';

type CategoriesProps = {
  value: number;
  onClickCategory: (index: number) => void;
}

const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
  useWhyDidYouUpdate('Categories',{ value, onClickCategory })

  const categories: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index) }
            className={value === index ? 'active' : ''}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
