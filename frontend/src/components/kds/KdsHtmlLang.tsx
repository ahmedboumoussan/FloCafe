'use client';

import { useEffect } from 'react';
import { usePosSettingsStore } from '@/store/pos-settings';

export function KdsHtmlLang() {
  const language = usePosSettingsStore((s) => s.language);
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'fr' ? 'fr' : 'en';
    }
  }, [language]);
  return null;
}
