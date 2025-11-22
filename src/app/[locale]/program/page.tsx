import {getTranslations} from 'next-intl/server';

export default async function Program() {
  const t = await getTranslations('program');

  const scheduleItems = [
    { time: '8:30 - 18:00', activity: 'full_day_schedule' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Light Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="light-pattern"></div>
        <div className="floating-elements"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            December 1-2, 2025 • Beijing, China
          </p>

          {/* Talk Format Info */}
          <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm max-w-md mx-auto">
            <div className="flex items-center justify-center mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{t('talk_format')}</h3>
            </div>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Day 1 */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg font-bold">1</span>
                </div>
                {t('day1')}
              </h2>
              <p className="text-blue-100 mt-2">Kavli Institute for Astronomy and Astrophysics (KIAA)</p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {scheduleItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-blue-50 border border-blue-100 hover:border-blue-300 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                        {item.time}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{t(item.activity)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-lg font-bold">2</span>
                </div>
                {t('day2')}
              </h2>
              <p className="text-slate-100 mt-2">Department of Astronomy, Tsinghua University (DoA)</p>
            </div>

            <div className="p-6">
              <div className="space-y-4">
                {scheduleItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="bg-slate-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                        {item.time}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-medium">{t(item.activity)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* Session Types */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Research Talks</h3>
            </div>
            <p className="text-gray-600">20-minute presentations followed by 5 minutes of questions, given by postdocs on their current research.</p>
          </div>

          {/* Poster Sessions */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Poster Sessions</h3>
            </div>
            <p className="text-gray-600">Interactive poster presentations open to both postdocs and PhD students, fostering collaborative discussions.</p>
          </div>

          {/* Discussion Sessions */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Discussion Sessions</h3>
            </div>
            <p className="text-gray-600">Informal, postdoc-led discussion sessions encouraging open, interdisciplinary dialogue and networking.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-slate-100 rounded-xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('cta_title')}</h3>
            <p className="text-gray-600 mb-6">{t('cta_subtitle')}</p>
            <button
              disabled
              className="inline-block bg-gray-400 text-white px-8 py-4 rounded-lg text-lg font-semibold cursor-not-allowed opacity-60 shadow-lg"
            >
              {t('register_closed')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}