'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function Registration() {
  const t = useTranslations('registration');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Light Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="light-pattern"></div>
        <div className="floating-elements"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h1>
        </div>

        {/* Registration Closed Notice */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-6">
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white">{t('closed_notice.title')}</h2>
            </div>
          </div>

          <div className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-700 mb-8">
                {t('closed_notice.message')}
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <p className="text-gray-800">
                  {t('closed_notice.thank_you')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="./program"
                  className="bg-gradient-to-r from-blue-600 to-slate-700 hover:from-blue-700 hover:to-slate-800 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {t('closed_notice.view_program')}
                </Link>
                <Link
                  href="./contact"
                  className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-300 hover:border-gray-400 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg"
                >
                  {t('closed_notice.contact_us')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
