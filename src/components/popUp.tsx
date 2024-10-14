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

  const handleClearAll = () => {
    setSelected([]);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 h-full sm:h-3/4 max-h-full sm:max-h-3/4 overflow-hidden">
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-center">All Categories</h2>
        <div className="overflow-y-auto h-[60%] sm:h-[70%] p-2 rounded-lg border">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selected.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
                />
                <span className="text-sm">{category}</span>
              </label>
            ))}
          </div>
        </div>
  
        <div className="flex flex-col sm:flex-row justify-center items-center mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
          <button 
            className="bg-blue-500 text-white py-2 px-4 rounded w-full sm:w-auto"
            onClick={handleSave}
          >
            Filter
          </button>
          <button 
            className="bg-red-400 text-white py-2 px-4 rounded w-full sm:w-auto"
            onClick={handleClearAll}
          >
            Clear All
          </button>
          <button 
            className="bg-gray-500 text-white py-2 px-4 rounded w-full sm:w-auto"
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
