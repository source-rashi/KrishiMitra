import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Edit, Camera, Leaf, Home, Check } from 'lucide-react';

type UserProfile = {
  name: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  farmName: string;
  cropsGrown: string;
};

type EditingState = {
  [key in keyof UserProfile]?: boolean;
};

export default function Profile() {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    location: 'Mumbai, Maharashtra',
    avatar: 'https://img.freepik.com/free-vector/man-profile-account-picture_24908-81754.jpg',
    farmName: 'Doe Farms',
    cropsGrown: 'Wheat, Rice, Corn'
  });

  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [realLocation, setRealLocation] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState<EditingState>({});

  useEffect(() => {
    // Get user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        fetchLocation(position.coords.latitude, position.coords.longitude);
      },
      (error) => {
        console.error("Error getting location: ", error);
      }
    );
  }, []);

  const fetchLocation = async (latitude: number, longitude: number) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
      const data = await response.json();
      setRealLocation(data.display_name);
    } catch (error) {
      console.error("Error fetching location: ", error);
    }
  };

  const handleEdit = (field: keyof UserProfile) => {
    setIsEditing({ ...isEditing, [field]: true });
  };

  const handleSave = (field: keyof UserProfile, value: string) => {
    setUserProfile({ ...userProfile, [field]: value });
    setIsEditing({ ...isEditing, [field]: false });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserProfile({ ...userProfile, avatar: event.target?.result as string });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const renderField = (field: keyof UserProfile, label: string, icon: JSX.Element) => (
    <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
      {icon}
      <div className="flex-1">
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        {isEditing[field] ? (
          <input
            type="text"
            defaultValue={userProfile[field]}
            onBlur={(e) => handleSave(field, e.target.value)}
            className="w-full p-2 border rounded"
          />
        ) : (
          <p>{userProfile[field]}</p>
        )}
      </div>
      <button
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        onClick={() => handleEdit(field)}
      >
        {isEditing[field] ? <Check className="w-5 h-5 text-gray-500" /> : <Edit className="w-5 h-5 text-gray-500" />}
      </button>
    </div>
  );

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
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="absolute bottom-0 right-0 opacity-0 w-full h-full cursor-pointer"
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
          {renderField('name', 'Full Name', <User className="w-5 h-5 text-primary-500" />)}
          {renderField('email', 'Email', <Mail className="w-5 h-5 text-primary-500" />)}
          {renderField('phone', 'Phone', <Phone className="w-5 h-5 text-primary-500" />)}
          <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
            <MapPin className="w-5 h-5 text-primary-500" />
            <div className="flex-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
              <p>{realLocation ? realLocation : userLocation ? `Lat: ${userLocation.latitude}, Lon: ${userLocation.longitude}` : 'Fetching location...'}</p>
            </div>
          </div>
          {renderField('farmName', 'Farm Name', <Home className="w-5 h-5 text-primary-500" />)}
          {renderField('cropsGrown', 'Crops Grown', <Leaf className="w-5 h-5 text-primary-500" />)}
        </div>
      </div>
    </motion.div>
  );
}
