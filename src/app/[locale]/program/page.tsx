import {getTranslations} from 'next-intl/server';

interface ScheduleItem {
  time: string;
  type: string;
  speaker: string;
  title: string;
}

export default async function Program() {
  const t = await getTranslations('program');

  // Get the schedule data from translation files
  const day1Schedule: ScheduleItem[] = [
    {"time": "9:00-9:15", "type": "opening", "speaker": "", "title": t('schedule.day1.0.title')},
    {"time": "9:15-9:40", "type": "talk", "speaker": t('schedule.day1.1.speaker'), "title": t('schedule.day1.1.title')},
    {"time": "9:40-10:05", "type": "talk", "speaker": t('schedule.day1.2.speaker'), "title": t('schedule.day1.2.title')},
    {"time": "10:05-10:15", "type": "poster", "speaker": "", "title": t('schedule.day1.3.title')},
    {"time": "10:15-11:15", "type": "coffee", "speaker": "", "title": t('schedule.day1.4.title')},
    {"time": "11:15-11:40", "type": "talk", "speaker": t('schedule.day1.5.speaker'), "title": t('schedule.day1.5.title')},
    {"time": "11:40-12:05", "type": "talk", "speaker": t('schedule.day1.6.speaker'), "title": t('schedule.day1.6.title')},
    {"time": "12:05-12:30", "type": "talk", "speaker": t('schedule.day1.7.speaker'), "title": t('schedule.day1.7.title')},
    {"time": "12:30-14:00", "type": "lunch", "speaker": "", "title": t('schedule.day1.8.title')},
    {"time": "14:00-14:25", "type": "talk", "speaker": t('schedule.day1.9.speaker'), "title": t('schedule.day1.9.title')},
    {"time": "14:25-14:50", "type": "talk", "speaker": t('schedule.day1.10.speaker'), "title": t('schedule.day1.10.title')},
    {"time": "14:50-15:15", "type": "talk", "speaker": t('schedule.day1.11.speaker'), "title": t('schedule.day1.11.title')},
    {"time": "15:15-15:25", "type": "poster", "speaker": "", "title": t('schedule.day1.12.title')},
    {"time": "15:25-16:30", "type": "coffee", "speaker": "", "title": t('schedule.day1.13.title')},
    {"time": "16:30-16:55", "type": "talk", "speaker": t('schedule.day1.14.speaker'), "title": t('schedule.day1.14.title')},
    {"time": "16:55-17:20", "type": "talk", "speaker": t('schedule.day1.15.speaker'), "title": t('schedule.day1.15.title')},
    {"time": "17:20-18:00", "type": "discussion", "speaker": "", "title": t('schedule.day1.16.title')},
    {"time": "18:00-20:00", "type": "dinner", "speaker": "", "title": t('schedule.day1.17.title')},
  ];

  const day2Schedule: ScheduleItem[] = [
    {"time": "9:00-9:15", "type": "opening", "speaker": "", "title": t('schedule.day2.0.title')},
    {"time": "9:15-9:40", "type": "talk", "speaker": t('schedule.day2.1.speaker'), "title": t('schedule.day2.1.title')},
    {"time": "9:40-10:05", "type": "talk", "speaker": t('schedule.day2.2.speaker'), "title": t('schedule.day2.2.title')},
    {"time": "10:05-10:15", "type": "poster", "speaker": "", "title": t('schedule.day2.3.title')},
    {"time": "10:15-11:15", "type": "coffee", "speaker": "", "title": t('schedule.day2.4.title')},
    {"time": "11:15-11:40", "type": "talk", "speaker": t('schedule.day2.5.speaker'), "title": t('schedule.day2.5.title')},
    {"time": "11:40-12:05", "type": "talk", "speaker": t('schedule.day2.6.speaker'), "title": t('schedule.day2.6.title')},
    {"time": "12:05-12:30", "type": "talk", "speaker": t('schedule.day2.7.speaker'), "title": t('schedule.day2.7.title')},
    {"time": "12:30-14:00", "type": "lunch", "speaker": "", "title": t('schedule.day2.8.title')},
    {"time": "14:00-14:25", "type": "talk", "speaker": t('schedule.day2.9.speaker'), "title": t('schedule.day2.9.title')},
    {"time": "14:25-14:50", "type": "talk", "speaker": t('schedule.day2.10.speaker'), "title": t('schedule.day2.10.title')},
    {"time": "14:50-15:15", "type": "talk", "speaker": t('schedule.day2.11.speaker'), "title": t('schedule.day2.11.title')},
    {"time": "15:15-15:25", "type": "poster", "speaker": "", "title": t('schedule.day2.12.title')},
    {"time": "15:25-16:30", "type": "coffee", "speaker": "", "title": t('schedule.day2.13.title')},
    {"time": "16:30-16:55", "type": "talk", "speaker": t('schedule.day2.14.speaker'), "title": t('schedule.day2.14.title')},
    {"time": "16:55-17:20", "type": "talk", "speaker": t('schedule.day2.15.speaker'), "title": t('schedule.day2.15.title')},
    {"time": "17:20-18:00", "type": "discussion", "speaker": "", "title": t('schedule.day2.16.title')},
  ];

  const getItemColor = (type: string) => {
    switch(type) {
      case 'talk': return 'bg-blue-50 border-blue-200 hover:border-blue-400';
      case 'poster': return 'bg-purple-50 border-purple-200 hover:border-purple-400';
      case 'coffee': return 'bg-amber-50 border-amber-200 hover:border-amber-400';
      case 'lunch': return 'bg-green-50 border-green-200 hover:border-green-400';
      case 'dinner': return 'bg-orange-50 border-orange-200 hover:border-orange-400';
      case 'discussion': return 'bg-indigo-50 border-indigo-200 hover:border-indigo-400';
      case 'opening': return 'bg-rose-50 border-rose-200 hover:border-rose-400';
      default: return 'bg-gray-50 border-gray-200 hover:border-gray-400';
    }
  };

  const getTimeColor = (type: string) => {
    switch(type) {
      case 'talk': return 'bg-blue-600';
      case 'poster': return 'bg-purple-600';
      case 'coffee': return 'bg-amber-600';
      case 'lunch': return 'bg-green-600';
      case 'dinner': return 'bg-orange-600';
      case 'discussion': return 'bg-indigo-600';
      case 'opening': return 'bg-rose-600';
      default: return 'bg-gray-600';
    }
  };

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
              <div className="space-y-3">
                {day1Schedule.map((item, index) => (
                  <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg border transition-colors h-[120px] ${getItemColor(item.type)}`}>
                    <div className="flex-shrink-0 w-[100px]">
                      <div className={`${getTimeColor(item.type)} text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap text-center`}>
                        {item.time}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      {item.speaker && (
                        <p className="text-gray-900 font-semibold text-sm mb-1">{item.speaker}</p>
                      )}
                      <p className="text-gray-700 text-sm leading-snug line-clamp-4">{item.title}</p>
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
              <div className="space-y-3">
                {day2Schedule.map((item, index) => (
                  <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg border transition-colors h-[120px] ${getItemColor(item.type)}`}>
                    <div className="flex-shrink-0 w-[100px]">
                      <div className={`${getTimeColor(item.type)} text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap text-center`}>
                        {item.time}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      {item.speaker && (
                        <p className="text-gray-900 font-semibold text-sm mb-1">{item.speaker}</p>
                      )}
                      <p className="text-gray-700 text-sm leading-snug line-clamp-4">{item.title}</p>
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