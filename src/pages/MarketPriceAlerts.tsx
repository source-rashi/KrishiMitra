import React from 'react';
import { motion } from 'framer-motion';
import { Bell, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import { Line } from 'react-chartjs-2';

export default function MarketPriceAlerts() {
  const [selectedCrop, setSelectedCrop] = React.useState('wheat');
  const [alertPrice, setAlertPrice] = React.useState('');

  const crops = [
    { id: 'wheat', name: 'Wheat' },
    { id: 'rice', name: 'Rice' },
    { id: 'cotton', name: 'Cotton' },
    { id: 'sugarcane', name: 'Sugarcane' }
  ];

  const priceData = {
    wheat: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Price per Quintal (₹)',
        data: [2100, 2300, 2200, 2400, 2600, 2500],
        borderColor: '#16a34a',
        tension: 0.4
      }]
    }
  };

  const alerts = [
    {
      id: 1,
      crop: 'Wheat',
      condition: 'above',
      price: 2500,
      status: 'active'
    },
    {
      id: 2,
      crop: 'Rice',
      condition: 'below',
      price: 3000,
      status: 'triggered'
    }
  ];

  const marketUpdates = [
    {
      id: 1,
      crop: 'Wheat',
      change: 'up',
      percentage: 5.2,
      price: 2500,
      time: '2 hours ago'
    },
    {
      id: 2,
      crop: 'Rice',
      change: 'down',
      percentage: 2.1,
      price: 3200,
      time: '4 hours ago'
    },
    {
      id: 3,
      crop: 'Cotton',
      change: 'up',
      percentage: 3.7,
      price: 5600,
      time: '6 hours ago'
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
          Market Price Alerts
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Stay updated with real-time market prices and set alerts for your crops.
        </p>
      </div>

      {/* Price Chart Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Price Trends
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Track price movements over time
            </p>
          </div>
          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
          >
            {crops.map((crop) => (
              <option key={crop.id} value={crop.id}>
                {crop.name}
              </option>
            ))}
          </select>
        </div>
        <div className="h-64">
          <Line
            data={priceData.wheat}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false
                }
              },
              scales: {
                y: {
                  beginAtZero: false,
                  grid: {
                    display: false
                  }
                },
                x: {
                  grid: {
                    display: false
                  }
                }
              }
            }}
          />
        </div>
      </div>

      {/* Price Alerts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Set Alert Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Set Price Alert
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Select Crop
              </label>
              <select
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
              >
                {crops.map((crop) => (
                  <option key={crop.id} value={crop.id}>
                    {crop.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Alert Price (₹)
              </label>
              <input
                type="number"
                value={alertPrice}
                onChange={(e) => setAlertPrice(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
                placeholder="Enter price"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Set Alert
            </button>
          </form>
        </div>

        {/* Active Alerts */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Active Alerts
          </h2>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`flex items-center justify-between p-4 rounded-lg ${
                  alert.status === 'triggered'
                    ? 'bg-red-100 dark:bg-red-900/20'
                    : 'bg-gray-100 dark:bg-gray-700/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Bell className={`w-5 h-5 ${
                    alert.status === 'triggered' ? 'text-red-500' : 'text-gray-500'
                  }`} />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {alert.crop}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Alert when price is {alert.condition} ₹{alert.price}
                    </p>
                  </div>
                </div>
                <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <AlertTriangle className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Updates */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Recent Market Updates
        </h2>
        <div className="space-y-4">
          {marketUpdates.map((update) => (
            <div
              key={update.id}
              className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 last:border-0"
            >
              <div className="flex items-center space-x-3">
                {update.change === 'up' ? (
                  <TrendingUp className="w-5 h-5 text-green-500" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-500" />
                )}
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    {update.crop}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ₹{update.price} per quintal
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-medium ${
                  update.change === 'up' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {update.change === 'up' ? '+' : '-'}{update.percentage}%
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {update.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}