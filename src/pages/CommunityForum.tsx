import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, Share2, Search, Filter, Users } from 'lucide-react';

export default function CommunityForum() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const discussions = [
    {
      id: 1,
      title: 'Best practices for organic wheat farming',
      author: 'Rajesh Kumar',
      category: 'Organic Farming',
      content: 'I\'ve been practicing organic wheat farming for 3 years now. Here are some tips...',
      likes: 45,
      replies: 23,
      timestamp: '2 hours ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop'
    },
    {
      id: 2,
      title: 'Dealing with pest infestation in cotton crops',
      author: 'Priya Singh',
      category: 'Pest Control',
      content: 'Recently noticed some pests in my cotton field. Looking for eco-friendly solutions...',
      likes: 32,
      replies: 15,
      timestamp: '4 hours ago',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop'
    },
    {
      id: 3,
      title: 'Modern irrigation techniques for water conservation',
      author: 'Amit Patel',
      category: 'Irrigation',
      content: 'Let\'s discuss the latest irrigation technologies that help save water...',
      likes: 56,
      replies: 28,
      timestamp: '6 hours ago',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'organic', name: 'Organic Farming' },
    { id: 'pests', name: 'Pest Control' },
    { id: 'irrigation', name: 'Irrigation' },
    { id: 'market', name: 'Market Trends' }
  ];

  const topContributors = [
    {
      name: 'Rajesh Kumar',
      posts: 156,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop'
    },
    {
      name: 'Priya Singh',
      posts: 143,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop'
    },
    {
      name: 'Amit Patel',
      posts: 128,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop'
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
          Community Forum
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Connect with fellow farmers, share experiences, and learn from the community.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search discussions..."
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

          {/* New Discussion Button */}
          <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
            Start New Discussion
          </button>

          {/* Discussions List */}
          <div className="space-y-4">
            {discussions.map((discussion) => (
              <motion.div
                key={discussion.id}
                whileHover={{ y: -2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={discussion.avatar}
                    alt={discussion.author}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      {discussion.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {discussion.content}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <span className="mr-4">{discussion.author}</span>
                      <span className="mr-4">{discussion.timestamp}</span>
                      <span className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 px-2 py-1 rounded-full text-xs">
                        {discussion.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-6 mt-4">
                      <button className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        <ThumbsUp className="w-5 h-5 mr-1" />
                        <span>{discussion.likes}</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        <MessageSquare className="w-5 h-5 mr-1" />
                        <span>{discussion.replies}</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        <Share2 className="w-5 h-5 mr-1" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Categories */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Categories
            </h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Top Contributors */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-primary-500" />
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Top Contributors
              </h2>
            </div>
            <div className="space-y-4">
              {topContributors.map((contributor) => (
                <div
                  key={contributor.name}
                  className="flex items-center space-x-3"
                >
                  <img
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {contributor.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {contributor.posts} posts
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}