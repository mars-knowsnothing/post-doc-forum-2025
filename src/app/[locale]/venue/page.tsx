import {getTranslations} from 'next-intl/server';

export default async function Venue() {
  const t = await getTranslations('venue');

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
            {t('location')}
          </p>
        </div>

        {/* Venue Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Day 1 - KIAA */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">December 1st</h2>
                  <p className="text-blue-100">Monday</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Kavli Institute for Astronomy and Astrophysics (KIAA)
              </h3>
              <p className="text-gray-600 mb-6">
                Peking University, Beijing, China
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Address</p>
                    <p className="text-gray-600 text-sm">No. 5 Yiheyuan Road, Haidian District, Beijing 100871, China</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Website</p>
                    <a
                      href="https://kiaa.pku.edu.cn/index.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                    >
                      {t('kiaa_link')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-700">{t('map_placeholder')}</p>
                <p className="text-gray-600 text-sm mt-2">Interactive campus map and directions</p>
              </div>
            </div>
          </div>

          {/* Day 2 - DoA */}
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">December 2nd</h2>
                  <p className="text-slate-100">Tuesday</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Department of Astronomy (DoA)
              </h3>
              <p className="text-gray-600 mb-6">
                Tsinghua University, Beijing, China
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Address</p>
                    <p className="text-gray-600 text-sm">No. 30 Shuangqing Road, Haidian District, Beijing 100084, China</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Website</p>
                    <a
                      href="https://astro.tsinghua.edu.cn/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-700 text-sm transition-colors"
                    >
                      {t('doa_link')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-slate-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-700">{t('map_placeholder')}</p>
                <p className="text-gray-600 text-sm mt-2">Interactive campus map and directions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Transportation & Getting There */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Transportation */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-slate-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Transportation</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Airport</h4>
                <p className="text-gray-600 text-sm">Beijing Capital International Airport (PEK)</p>
                <p className="text-gray-600 text-sm">Beijing Daxing International Airport (PKX)</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Metro</h4>
                <p className="text-gray-600 text-sm">Line 4: Peking University East Gate Station (KIAA)</p>
                <p className="text-gray-600 text-sm">Line 13: Wudaokou Station (Tsinghua)</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Bus</h4>
                <p className="text-gray-600 text-sm">Multiple bus routes serve both university areas</p>
              </div>
            </div>
          </div>

          {/* Accommodation */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 15v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Accommodation</h3>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Near PKU</h4>
                <p className="text-gray-600 text-sm">Various hotels and guesthouses available in Haidian District</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Near Tsinghua</h4>
                <p className="text-gray-600 text-sm">Hotels in Wudaokou area offer convenient access</p>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Recommendation</h4>
                <p className="text-gray-600 text-sm">Stay in Zhongguancun area for easy access to both venues</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Information</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• The forum will be held across both campuses on different days</li>
                <li>• Participants are expected to attend both days</li>
                <li>• Detailed venue directions will be provided to registered participants</li>
                <li>• Campus maps and specific room information will be shared before the event</li>
                <li>• Both venues are accessible by public transportation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}