import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

// Can be imported from a shared config
export const locales = ['en', 'zh'] as const;
export const defaultLocale = 'en' as const;

export const routing = {
  locales,
  defaultLocale,
  localeDetection: false
} as const;

export default getRequestConfig(async ({locale}) => {
  // Handle undefined or invalid locale with fallback
  const validLocale = locale && locales.includes(locale as any) ? locale : defaultLocale;

  // If the requested locale is completely invalid, return 404
  if (locale && !locales.includes(locale as any)) {
    notFound();
  }

  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default
  };
});