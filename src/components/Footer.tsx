import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-blue-600 mb-4">
              Postdoc Forum 2025
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('hosted_by')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="https://kiaa.pku.edu.cn/index.htm" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-blue-600 text-sm transition-colors">
                KIAA Website
              </a>
              <a href="https://astro.tsinghua.edu.cn/en/" target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-purple-600 text-sm transition-colors">
                DoA Website
              </a>
            </div>
          </div>

          {/* Event Details */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Event Details</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">
                <span className="text-gray-900 font-medium">Date:</span> December 1-2, 2025
              </p>
              <p className="text-gray-600">
                <span className="text-gray-900 font-medium">Location:</span> Beijing, China
              </p>
              <p className="text-gray-600">
                <span className="text-gray-900 font-medium">Participants:</span> Limited to 40
              </p>
              <p className="text-gray-600">
                <span className="text-gray-900 font-medium">Fee:</span> Free
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}