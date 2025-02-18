// import React from 'react';
import { motion } from 'framer-motion';

const cropRecommendations = [
  {
    name: 'Wheat',
    description: 'Wheat is a staple food crop that is easy to grow and has a high yield.',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop'
  },
  {
    name: 'Rice',
    description: 'Rice is a water-intensive crop that thrives in wet conditions.',
    image: 'https://www.isayorganic.com/cdn/shop/files/iso__0005_WhiteRice1_720x.jpg?v=1736270108'
  },
  {
    name: 'Cotton',
    description: 'Cotton is a cash crop that requires warm weather and well-drained soil.',
    image: 'https://images.unsplash.com/photo-1594897030264-ab7d87efc473?w=400&h=300&fit=crop'
  }
];

export default function CropRecommendation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto space-y-8 p-4"
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
          <div key={crop.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <img src={crop.image} alt={crop.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                {crop.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {crop.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}