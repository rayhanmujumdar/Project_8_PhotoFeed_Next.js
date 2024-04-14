import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Photofeed',
    description: 'My photofeed gallery',
};

export default function RootLayout({ children, modal }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <div className="container my-4 lg:my-8">{children}</div>
                <div>{modal}</div>
            </body>
        </html>
    );
}
