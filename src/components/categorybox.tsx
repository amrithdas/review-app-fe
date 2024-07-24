import React from 'react';
import { ReactNode } from 'react';
import '../App.css';


interface CategoryBoxProps {
    icon: ReactNode;
    title: string;
 
}

const CategoryBox: React.FC<CategoryBoxProps> = ({ icon, title }) => {
  return (
    <a href='/restaurant' className="border border-gray-300 rounded-lg p-8 shadow-sm cursor-pointer w-56 h-48 flex flex-col justify-center items-center hover-shadow">
      <div className='flex flex-col gap-2 justify-center items-center'>
      <h3 className="">{icon}</h3>
      <p className="text-sm font-medium	 text-gray-700 mt-2 text-center">{title}</p>
      </div>
    </a>
  );
};

export default CategoryBox;