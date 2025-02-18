import React from 'react';
import { motion } from 'framer-motion';
import { Search, Star, MapPin, Phone, Mail, Filter } from 'lucide-react';

export default function VendorMarketplace() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const vendors = [
    {
      id: 1,
      name: 'Green Fields Supply Co.',
      category: 'seeds',
      rating: 4.5,
      location: 'Mumbai, Maharashtra',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop',
      products: ['Wheat Seeds', 'Rice Seeds', 'Cotton Seeds'],
      contact: {
        phone: '+91 98765 43210',
        email: 'info@greenfields.com'
      }
    },
    {
      id: 2,
      name: 'Farm Tech Solutions',
      category: 'equipment',
      rating: 4.8,
      location: 'Delhi, NCR',
      image: 'https://static.wixstatic.com/media/ba57c3_8c33a77b4b0b403bb7754d0489ba616d~mv2.jpg/v1/fill/w_1110,h_740,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ba57c3_8c33a77b4b0b403bb7754d0489ba616d~mv2.jpg',
      products: ['Tractors', 'Harvesters', 'Irrigation Systems'],
      contact: {
        phone: '+91 98765 43211',
        email: 'sales@farmtech.com'
      }
    },
    {
      id: 3,
      name: 'Organic Fertilizers Ltd',
      category: 'fertilizers',
      rating: 4.3,
      location: 'Bangalore, Karnataka',
      image: 'https://theplaidzebra.com/wp-content/uploads/2015/08/1_urban-farm-offices.jpg',
      products: ['Organic Compost', 'Bio Fertilizers', 'Soil Supplements'],
      contact: {
        phone: '+91 98765 43212',
        email: 'support@organicfert.com'
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'seeds', name: 'Seeds' },
    { id: 'equipment', name: 'Equipment' },
    { id: 'fertilizers', name: 'Fertilizers' }
  ];

  const filteredVendors = vendors.filter((vendor) => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vendor.products.some(product => product.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || vendor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-6xl mx-auto space-y-8 p-4"
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Vendor Marketplace
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Connect with trusted vendors for all your farming needs - from seeds and
          fertilizers to modern farming equipment.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search vendors or products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
        </div>
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none w-full md:w-48 px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <Filter className="absolute right-4 top-3.5 text-gray-400 w-5 h-5 pointer-events-none" />
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVendors.map((vendor) => (
          <motion.div
            key={vendor.id}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={vendor.image}
              alt={vendor.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {vendor.name}
                </h3>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600 dark:text-gray-400">
                    {vendor.rating}
                  </span>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{vendor.location}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>{vendor.contact.phone}</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>{vendor.contact.email}</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Products:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {vendor.products.map((product) => (
                    <span
                      key={product}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}