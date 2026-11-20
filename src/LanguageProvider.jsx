import React, { useEffect, useMemo, useState } from 'react';
import { amharicTranslations, LanguageContext } from './LanguageContext';

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t: (text) => (language === 'am' ? amharicTranslations[text] || text : text)
  }), [language]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
