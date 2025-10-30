'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import {useRouter, usePathname} from 'next/navigation';
import {useState, useEffect} from 'react';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 从路径中提取当前语言，作为备用方案
  const currentLocale = pathname.startsWith('/zh') ? 'zh' : pathname.startsWith('/en') ? 'en' : locale;

  // 调试信息
  useEffect(() => {
    console.log('Navigation Debug:', {
      locale,
      pathname,
      currentLocale
    });
  }, [locale, pathname, currentLocale]);

  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'zh' : 'en';
    console.log('Switching from', currentLocale, 'to', newLocale);
    router.push(`/${newLocale}`);
  };

  const navItems = [
    { key: 'home', href: `/${currentLocale}` },
    { key: 'program', href: `/${currentLocale}/program` },
    { key: 'registration', href: `/${currentLocale}/registration` },
    { key: 'venue', href: `/${currentLocale}/venue` },
    { key: 'contact', href: `/${currentLocale}/contact` },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex-shrink-0">
              <span className="text-xl font-bold text-blue-600">
                Postdoc Forum 2025
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {currentLocale === 'en' ? '中文' : 'English'}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(item.key)}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {currentLocale === 'en' ? '中文' : 'English'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}