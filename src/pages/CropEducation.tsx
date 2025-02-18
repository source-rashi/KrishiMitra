import React from 'react';
import { motion } from 'framer-motion';
import { Play, BookOpen, Download } from 'lucide-react';

export default function CropEducation() {
  const crops = [
    {
      name: 'Wheat',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      description: 'Learn about wheat cultivation techniques and best practices.',
      season: 'Winter',
      difficulty: 'Medium'
    },
    {
      name: 'Rice',
      image: 'https://images.unsplash.com/photo-1536617621572-1d5f1e6269a0?w=400&h=300&fit=crop',
      description: 'Discover modern rice farming methods and water management.',
      season: 'Monsoon',
      difficulty: 'Hard'
    },
    {
      name: 'Cotton',
      image: 'https://images.unsplash.com/photo-1594897030264-ab7d87efc473?w=400&h=300&fit=crop',
      description: 'Expert tips for cotton farming and pest control.',
      season: 'Summer',
      difficulty: 'Medium'
    }
  ];

  const tutorials = [
    {
      title: 'Modern Irrigation Techniques',
      duration: '15:30',
      thumbnail: 'https://images.unsplash.com/photo-1591982394906-5fc11a3b3f76?w=400&h=300&fit=crop'
    },
    {
      title: 'Organic Farming Basics',
      duration: '12:45',
      thumbnail: 'https://images.unsplash.com/photo-1592982573555-c10f4cd29a46?w=400&h=300&fit=crop'
    },
    {
      title: 'Pest Management',
      duration: '18:20',
      thumbnail: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=400&h=300&fit=crop'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Crop Education Center
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Learn modern farming techniques, crop management, and sustainable practices
          through our comprehensive guides and video tutorials.
        </p>
      </div>

      {/* Featured Crops Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Featured Crops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {crops.map((crop) => (
            <motion.div
              key={crop.name}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={crop.image}
                alt={crop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {crop.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {crop.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary-600 dark:text-primary-400">
                    Season: {crop.season}
                  </span>
                  <span className="text-sm text-secondary-600 dark:text-secondary-400">
                    Difficulty: {crop.difficulty}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Video Tutorials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <motion.div
              key={tutorial.title}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={tutorial.thumbnail}
                  alt={tutorial.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {tutorial.duration}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {tutorial.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
          Additional Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-4"
          >
            <BookOpen className="w-8 h-8 text-primary-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Farming Guides
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Download comprehensive PDF guides for various crops
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-4"
          >
            <Download className="w-8 h-8 text-primary-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Resource Library
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Access our collection of farming tools and templates
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}