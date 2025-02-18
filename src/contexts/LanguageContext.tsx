import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi' | 'mr' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    cropEducation: 'Crop Education',
    marketplace: 'Marketplace',
    marketPrices: 'Market Prices',
    cropRecommendation: 'Crop Recommendation',
    community: 'Community',
    settings: 'Settings',
    // Add more translations as needed
  },
  hi: {
    home: 'होम',
    cropEducation: 'फसल शिक्षा',
    marketplace: 'बाज़ार',
    marketPrices: 'बाज़ार भाव',
    cropRecommendation: 'फसल सुझाव',
    community: 'समुदाय',
    settings: 'सेटिंग्स',
  },
  mr: {
    home: 'मुख्यपृष्ठ',
    cropEducation: 'पीक शिक्षण',
    marketplace: 'बाजारपेठ',
    marketPrices: 'बाजार भाव',
    cropRecommendation: 'पीक शिफारस',
    community: 'समुदाय',
    settings: 'सेटिंग्ज',
  },
  ta: {
    home: 'முகப்பு',
    cropEducation: 'பயிர் கல்வி',
    marketplace: 'சந்தை',
    marketPrices: 'சந்தை விலைகள்',
    cropRecommendation: 'பயிர் பரிந்துரை',
    community: 'சமூகம்',
    settings: 'அமைப்புகள்',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}