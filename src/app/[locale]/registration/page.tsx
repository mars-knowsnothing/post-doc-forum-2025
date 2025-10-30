'use client';

import {useTranslations} from 'next-intl';

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

        {/* Registration Deadlines */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-red-50 rounded-xl p-6 border border-red-200 shadow-sm">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Talk/Poster Deadline</h3>
            </div>
            <p className="text-red-700">{t('deadline_talk')}</p>
          </div>

          <div className="bg-orange-50 rounded-xl p-6 border border-orange-200 shadow-sm">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">General Deadline</h3>
            </div>
            <p className="text-orange-700">{t('deadline_general')}</p>
            <p className="text-orange-600 text-sm mt-2">{t('note')}</p>
          </div>
        </div>

        {/* Registration QR Code */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-blue-600 to-slate-700 p-6">
            <h2 className="text-2xl font-bold text-white">{t('qr_section.title')}</h2>
            <p className="text-blue-100 mt-2">{t('qr_section.subtitle')}</p>
          </div>

          <div className="p-8 text-center">
            {/* QR Code Image */}
            <div className="flex justify-center mb-6">
              <div className="bg-white p-6 rounded-xl border-2 border-gray-200 shadow-lg">
                <img
                  src="/registration-qr-code.jpg"
                  alt={t('qr_section.alt_text')}
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            {/* Instructions */}
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('qr_section.instructions_title')}</h3>
              <div className="space-y-3 text-gray-700">
                <p className="text-lg">{t('qr_section.step1')}</p>
                <p className="text-lg">{t('qr_section.step2')}</p>
                <p className="text-lg">{t('qr_section.step3')}</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
              <div className="flex items-start justify-center">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-blue-800 text-sm">
                    <strong>{t('qr_section.contact_title')}</strong> {t('qr_section.contact_text')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}