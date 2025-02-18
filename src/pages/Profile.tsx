import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Edit, Camera } from 'lucide-react';

export default function Profile() {
  const [userProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, Maharashtra',
    avatar: '/default-avatar.png' // You'll need to add a default avatar image
  });

  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  useEffect(() => {
    // Get user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        // Here you can send the location to the backend for personalized recommendations
      },
      (error) => {
        console.error("Error getting location: ", error);
      }
    );
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto space-y-8 p-4"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Profile
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your personal information
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <img
              src={userProfile.avatar}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-primary-500"
            />
            <button className="absolute bottom-0 right-0 p-2 bg-primary-500 rounded-full text-white hover:bg-primary-600 transition-colors">
              <Camera className="w-5 h-5" />
            </button>
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4">
            {userProfile.name}
          </h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
            <User className="w-5 h-5 text-primary-500" />
            <div className="flex-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
              <p>{userProfile.name}</p>
            </div>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <Edit className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
            <Mail className="w-5 h-5 text-primary-500" />
            <div className="flex-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
              <p>{userProfile.email}</p>
            </div>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <Edit className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
            <Phone className="w-5 h-5 text-primary-500" />
            <div className="flex-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
              <p>{userProfile.phone}</p>
            </div>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <Edit className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
            <MapPin className="w-5 h-5 text-primary-500" />
            <div className="flex-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
              <p>{userLocation ? `Lat: ${userLocation.latitude}, Lon: ${userLocation.longitude}` : 'Fetching location...'}</p>
            </div>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
              <Edit className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
