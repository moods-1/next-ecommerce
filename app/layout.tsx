import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'CeeCommerce',
	description: 'Moder ECommerce Website',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='min-h-screen flex flex-col'>
					<Header />
					{children}
				</div>
				<footer className='footer footer-center p-4 bg-base-400 text-white'>
					<p>Copyright &copy; 2023 - All rights reserved by CeeCommerce</p>
				</footer>
			</body>
		</html>
	);
}
