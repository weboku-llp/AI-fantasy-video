import '../styles/globals.css';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const metadata = {
  title: 'AI Fantasy Video',
  description:
    'A fictional synthetic AI fantasy video platform. 30-second previews for everyone. Full episodes for premium subscribers.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
