import React, { useState, useEffect } from 'react';

interface PopupProps {
  categories: string[];
  selectedCategories: string[];
  onClose: () => void;
  onSave: (selectedCategories: string[]) => void;
}

const Popup: React.FC<PopupProps> = ({ categories, selectedCategories, onClose, onSave }) => {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    setSelected(selectedCategories);
  }, [selectedCategories]);

  const handleCheckboxChange = (category: string) => {
    setSelected(prev => 
      prev.includes(category) ? prev.filter(item => item !== category) : [...prev, category]
    );
  };

  const handleSave = () => {
    onSave(selected);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-1/2 h-3/4 max-h-3/4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-center">All Categories</h2>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={selected.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
        <div className="text-center mt-4">
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleSave}
          >
            Filter
          </button>
          <button 
            className="bg-gray-500 text-white py-2 px-4 rounded ml-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
