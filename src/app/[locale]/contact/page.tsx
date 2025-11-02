import {getTranslations} from 'next-intl/server';

export default async function Contact() {
  const t = await getTranslations('contact');

  const advisoryCommittee = [
    {
      name: 'Gregory J. Herczeg',
      affiliation: 'KIAA',
      email: 'gherczeg1@gmail.com',
    },
    {
      name: 'Feng Long',
      affiliation: 'KIAA',
      email: 'long.feng@pku.edu.cn',
    },
    {
      name: 'Dandan Xu',
      affiliation: 'DoA',
      email: 'dandanxu@tsinghua.edu.cn',
    }
  ];

  const organizingCommittee = {
    kiaa: [
      {
        name: 'Verónica Vázquez Aceves',
        affiliation: 'KIAA',
        email: 'veronica@pku.edu.cn',
      },
      {
        name: 'Haonan Zheng',
        affiliation: 'KIAA',
        email: 'hnzheng@pku.edu.cn',
      },
      {
        name: 'Boris S. Kalita',
        affiliation: 'KIAA',
        email: 'boris.kalita@pku.edu.cn',
      },
    ],
    doa: [
      {
        name: 'Elizabeth Moreno Hilario',
        affiliation: 'DoA',
        email: 'elimorh@mail.tsinghua.edu.cn',
      },
      {
        name: 'Alvaro Segovia Otero',
        affiliation: 'DoA',
        email: 'asegoviao@mail.tsinghua.edu.cn',
      },
      {
        name: 'David Robinson',
        affiliation: 'DoA',
        email: 'drobinson@mail.tsinghua.edu.cn',
      },
    ],
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
          <p className="text-xl text-gray-600">
            Get in touch with the organizing team
          </p>
        </div>

        {/* Advisory Committee */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('advisory_committee')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisoryCommittee.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-400 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-gray-600">{member.affiliation}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Organizing Committee */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('organizing_committee')}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* KIAA Members */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                <h3 className="text-2xl font-bold text-white">{t('kiaa_members')}</h3>
                <p className="text-blue-100">Kavli Institute for Astronomy and Astrophysics</p>
              </div>

              <div className="p-6 space-y-6">
                {organizingCommittee.kiaa.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-lg bg-blue-50 border border-blue-100 hover:border-blue-300 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                      <div className="flex items-center mt-1">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-blue-600 hover:text-blue-700 transition-colors text-sm"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DoA Members */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-6">
                <h3 className="text-2xl font-bold text-white">{t('doa_members')}</h3>
                <p className="text-slate-100">Department of Astronomy, Tsinghua University</p>
              </div>

              <div className="p-6 space-y-6">
                {organizingCommittee.doa.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors"
                  >
                    <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-lg font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                      <div className="flex items-center mt-1">
                        <svg className="w-4 h-4 text-slate-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a
                          href={`mailto:${member.email}`}
                          className="text-slate-600 hover:text-slate-700 transition-colors text-sm"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* General Information */}
        <div className="bg-gradient-to-r from-blue-50 to-slate-100 rounded-xl p-8 border border-blue-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For any questions about registration, program, or logistics, please don't hesitate to contact any member of our organizing committee. We're here to help make your participation smooth and enjoyable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white rounded-lg px-6 py-3 border border-gray-200 shadow-sm">
                <p className="text-gray-600 text-sm">
                  <strong className="text-gray-900">General Inquiries:</strong> Contact any organizing committee member
                </p>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 border border-gray-200 shadow-sm">
                <p className="text-gray-600 text-sm">
                  <strong className="text-gray-900">Registration Issues:</strong> Contact your preferred institution representative
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}