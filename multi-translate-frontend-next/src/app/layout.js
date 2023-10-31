import './globals.css';
import { Roboto } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/styles/GlobalStyles';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
});

export const metadata = {
  title:
    'Multi-language translation app - powered by Google Translate API',
  description:
    'Translate any query into multiple languages and view the results simultaneously. App built with Next.js 13',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/images/favicon.ico"
          sizes="any"
        />
      </head>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
