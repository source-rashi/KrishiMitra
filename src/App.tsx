// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CropEducation from './pages/CropEducation';
import VendorMarketplace from './pages/VendorMarketplace';
import MarketPriceAlerts from './pages/MarketPriceAlerts';
import Profile from './pages/Profile';
import CommunityForum from './pages/CommunityForum';
import CropRecommendation from './pages/CropRecommendation';
import Settings from './pages/Settings';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
            <Navbar />
            <main className="container mx-auto px-4 py-8">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/crop-education" element={<CropEducation />} />
                  <Route path="/marketplace" element={<VendorMarketplace />} />
                  <Route path="/market-prices" element={<MarketPriceAlerts />} />
                  <Route path="/community" element={<CommunityForum />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/crop-recommendation" element={<CropRecommendation/>}/>
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;