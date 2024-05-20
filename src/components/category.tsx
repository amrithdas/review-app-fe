// src/components/RecentActivity.tsx
import React from 'react';
import CategoryBox from './categorybox';
import { IoRestaurantSharp } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
import { MdNightlife } from "react-icons/md";
import { GiArcheryTarget } from "react-icons/gi";
import { FaSpa } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";







const category = [
    { title: "Restaurant", icon:<IoRestaurantSharp style={{fontSize:28}}/>  },
    { title: "Shopping", icon:<FaShopify style={{fontSize:28}}/>  },
    { title: "Nightlife", icon:  <MdNightlife style={{fontSize:28}}/>},
    { title: "Active Life", icon: <GiArcheryTarget style={{fontSize:28}} /> },
    { title: "Beauty & Spa", icon:<FaSpa style={{fontSize:28}} />},
    { title: "Automotive", icon:<FaCarAlt style={{fontSize:28}} /> },
    { title: "Home Service", icon: <IoHome style={{fontSize:28}}/> },
    { title: "More", icon: <BsThreeDots style={{fontSize:28}}/>  },
  ];

const Category: React.FC = () => {
  return (
    <div className="pb-4">
      <h2 className="text-3xl font-bold mb-10 my-10 text-center">Categories</h2>
      <div className="flex justify-center">
      <div className=" grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-12">
        {category.map((item, index) => (
          <CategoryBox  
            key={index}
           icon={item.icon}
            title={item.title}
           
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Category;
