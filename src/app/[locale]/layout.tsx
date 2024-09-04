import { NextIntlClientProvider, useTranslations } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from './components/Header';
import "./globals.css";
import { Footer } from './components/Footer';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from 'next';

export const metadata: Metadata = {


  viewport: "width=device-width, initial-scale=1.0",
  title: "Waveseg® - Piscinas de Ondas Sustentáveis e Inovadoras",
  description: "A Waveseg® oferece tecnologia de ponta em piscinas de ondas para surf, combinando inovação, sustentabilidade e personalização para transformar seu empreendimento em um ícone de sucesso.",
  keywords: 'Piscinas de Ondas, Tecnologia de Surf, Inovação em Piscinas, Sustentabilidade, Entretenimento Aquático, Tecnologia Modular, Soluções Sustentáveis, Surf Indoor, Waveseg, Tecnologia Brasileira',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    url: "https://waveseg.com.br",
    title: "Waveseg® - Piscinas de Ondas Sustentáveis e Inovadoras",
    description: "A Waveseg® se destaca na criação de piscinas de ondas sustentáveis e inovadoras, oferecendo soluções personalizadas e tecnologicamente avançadas para transformar empreendimentos e promover o surf em qualquer local.",
    siteName: "Waveseg®",
    images: [{
      url: "/images/unnamed.jpg",
      alt: "Piscina de Ondas Waveseg®"
    }],
    locale: "pt_BR"
  },
  twitter: {
    card: "summary_large_image",
    site: "@waveseg",
    creator: "@waveseg",
    title: "Waveseg® - Piscinas de Ondas Sustentáveis e Inovadoras",
    description: "Descubra como a Waveseg® está revolucionando o mercado de piscinas de ondas com tecnologia sustentável e personalizável, proporcionando experiências de surf únicas e inovadoras.",
    images: [{
      url: "/images/unnamed.jpg",
      alt: "Piscina de Ondas Waveseg®"
    }]
  }
};


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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='icon' href="/favicon.ico" />
        {/*<meta name="google-site-verification" content="0o2UdGHKMas5T31hyhg1W6i_mzoKLRoLRnFM_ZrbHw8" />*/}
      </head>
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
