import './globals.css';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Exam Quiz App',
  description: 'A full-stack quiz app built with Next.js and Tailwind CSS to prepare for web development exams',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
