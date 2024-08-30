import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from './components/Header';
import "./globals.css";
import { Footer } from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Carregar as mensagens com base no locale
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <SpeedInsights/>
      <body className='overflow-x-hidden'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
