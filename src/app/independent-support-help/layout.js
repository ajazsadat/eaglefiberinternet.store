import { Poppins, Montserrat } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-ish-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-ish-montserrat',
  display: 'swap',
});

export default function IndependentSupportHelpLayout({ children }) {
  return <div className={`${poppins.variable} ${montserrat.variable}`}>{children}</div>;
}
