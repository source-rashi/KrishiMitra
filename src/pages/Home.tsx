import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sun, Cloud, Droplets, Wind, TrendingUp, Bell, ArrowRight } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const weatherData = {
    temperature: 28,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12
  };

  const cropTrendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Wheat Prices',
        data: [2100, 2300, 2200, 2400, 2600, 2500],
        borderColor: '#16a34a',
        tension: 0.4
      }
    ]
  };

  const announcements = [
    {
      id: 1,
      title: 'New Government Subsidy',
      description: 'Farmers can now apply for the new irrigation system subsidy program.',
      date: '2025-03-15'
    },
    {
      id: 2,
      title: 'Weather Alert',
      description: 'Expected heavy rainfall in the northern regions next week.',
      date: '2025-03-14'
    },
    {
      id: 3,
      title: 'Market Update',
      description: 'Wheat prices expected to rise due to international demand.',
      date: '2025-03-13'
    }
  ];

  const quickLinks = [
    {
      title: 'Seasonal Crops',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
      link: '/crop-education'
    },
    {
      title: 'Find Vendors',
      image: 'https://friscofreshmarket.com/wp-content/uploads/2024/07/Successful-Farmers-Market-Vendor.jpg',
      link: '/marketplace'
    },
    {
      title: 'Community Help',
      image: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=400&h=300&fit=crop',
      link: '/community'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto space-y-8 p-4"
    >
      {/* Search Section */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search for crops, vendors, or information..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 pl-12 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
      </div>

      {/* Motivational Phrase */}
      <div className="text-center text-xl font-semibold text-gray-800 dark:text-gray-200">
        Sow with Knowledge, Reap with Success! 🌱
      </div>

      {/* Weather Card */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Today's Weather</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-3">
            <Sun className="w-8 h-8 text-yellow-500" />
            <div>
              <p className="text-2xl font-bold">{weatherData.temperature}°C</p>
              <p className="text-gray-600 dark:text-gray-400">{weatherData.condition}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Cloud className="w-8 h-8 text-gray-400" />
            <div>
              <p className="text-lg">Cloudy</p>
              <p className="text-gray-600 dark:text-gray-400">60%</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Droplets className="w-8 h-8 text-blue-500" />
            <div>
              <p className="text-lg">Humidity</p>
              <p className="text-gray-600 dark:text-gray-400">{weatherData.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Wind className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-lg">Wind</p>
              <p className="text-gray-600 dark:text-gray-400">{weatherData.windSpeed} km/h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Crop Trends */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Crop Price Trends</h2>
          <TrendingUp className="w-6 h-6 text-primary-500" />
        </div>
        <div className="h-64">
          <Line
            data={cropTrendData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'top' as const,
                }
              }
            }}
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickLinks.map((link, index) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <a href={link.link}>
            <img
              src={link.image}
              alt={link.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 p-4 w-full">
                <h3 className="text-white text-xl font-semibold mb-2">{link.title}</h3>
                <a
                  href={link.link}
                  className="inline-flex items-center text-white hover:underline"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
            </a>
          </motion.div>
        ))}
       
      </div>

      {/* Announcements */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Latest Announcements</h2>
          <Bell className="w-6 h-6 text-primary-500" />
        </div>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <motion.div
              key={announcement.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{announcement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{announcement.description}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(announcement.date).toLocaleDateString()}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}