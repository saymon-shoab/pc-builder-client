// src/components/CategoryCard.js
import Link from "next/link";
import React from "react";

const CategoryCard = ({ category, image, onClick, url }) => {
  return (
    <div className="p-4 w-full border rounded-lg shadow-lg flex justify-between items-center">
      <img src={image} alt={category} className="mb-4 w-24 h-24 rounded-full" />
      <h3 className="text-xl font-bold">{category}</h3>
      <button
        className="mt-4 px-6 py-2 font-bold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        onClick={onClick}
      >
        <Link href={url}>Choose</Link>
      </button>
    </div>
  );
};

export default CategoryCard;
