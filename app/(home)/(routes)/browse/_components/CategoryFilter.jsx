'use client';
import React, { useState } from 'react';

function CategoryFilter({ selectedCategory }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const filterOptions = [
    {
      id: 1,
      name: 'All',
      value: 'all',
    },
    {
      id: 2,
      name: 'React js',
      value: 'reactjs',
    },
    {
      id: 3,
      name: 'Next js',
      value: 'nextjs',
    },
    {
      id: 4,
      name: 'Tailwind CSS',
      value: 'tailwindcss',
    },
    {
      id: 5,
      name: 'Firebase',
      value: 'firebase',
    },
  ];
  return (
    <div className="flex gap-5">
      {filterOptions.map((item, index) => (
        <button
          key={index}
          onClick={() => {
            setActiveIndex(index);
            selectedCategory(item.value)
          }}
          className={`border p-2 px-4 text-sm rounded-sm
        hover:border-blue-900 font-semibold
        hover:bg-gray-50
        ${activeIndex === index
              ? 'border-green-900 bg-blue-50 text-blue-800'
              : null
            }`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;