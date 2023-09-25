import { ClerkProvider, UserButton } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Threads',
  description: 'Threads clone',
};

const font = Inter({ subsets: ['latin'] });

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${font.className} bg-dark-1`}>
          <UserButton />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default AuthLayout;
