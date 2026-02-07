import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ne' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 
                 bg-white/90 backdrop-blur-sm border border-gray-200 
                 rounded-full shadow-lg hover:shadow-xl transition-all
                 hover:scale-105 active:scale-95"
    >
      <Globe className="w-4 h-4 text-gray-600" />
      <span className="text-sm font-medium text-gray-700">
        {i18n.language === 'en' ? 'नेपाली' : 'English'}
      </span>
    </button>
  );
}