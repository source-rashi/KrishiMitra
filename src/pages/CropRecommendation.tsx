// import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Modal } from './Modal'; // Assuming you will create a Modal component

// Define a TypeScript interface for crop objects
interface Crop {
  name: string;
  description: string;
  image: string;
}

const cropRecommendations: Crop[] = [
  {
    name: 'Wheat',
    description: 'Wheat is a staple food crop that is easy to grow and has a high yield.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop'
  },
  {
    name: 'Rice',
    description: 'Rice can be grown in different environments, depending upon water availability.',
    image: 'https://www.isayorganic.com/cdn/shop/files/iso__0005_WhiteRice1_720x.jpg?v=1736270108'
  },
  {
    name: 'Cotton',
    description: 'Cotton is a cash crop that requires warm weather and well-drained soil.',
    image: 'https://us.timacagro.com/app/uploads/sites/32/2024/06/Cotton_062024.png.webp'
  }
];

export default function CropRecommendation() {
  const [selectedCrop, setSelectedCrop] = useState<Crop | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCropClick = (crop: Crop) => {
    setSelectedCrop(crop);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCrop(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto space-y-8 p-4"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Crop Recommendations
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here are some recommended crops based on your preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cropRecommendations.map((crop) => (
          <motion.div
            key={crop.name}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-200 hover:scale-105"
            onClick={() => handleCropClick(crop)}
          >
            <img src={crop.image} alt={crop.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {crop.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {crop.description}
              </p>
              <button className="mt-4 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors duration-200">
                Save to Favorites
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {isModalOpen && selectedCrop && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-2xl font-bold mb-4">{selectedCrop.name}</h2>
          <img src={selectedCrop.image} alt={selectedCrop.name} className="w-full h-48 object-cover mb-4" />
          <p>{selectedCrop.description}</p>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200" onClick={closeModal}>
            Close
          </button>
        </Modal>
      )}
    </motion.div>
  );
}
