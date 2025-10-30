import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return [
    {locale: 'en'},
    {locale: 'zh'}
  ];
}

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  // Ensure we have a valid locale, fallback to 'en' if undefined
  const validLocale = locale || 'en';
  const messages = await getMessages({locale: validLocale});

  return (
    <NextIntlClientProvider messages={messages}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
