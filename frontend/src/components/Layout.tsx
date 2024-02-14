// import Head from 'next/head';
import Footer from './Footer';
import { Header } from './Header';

interface Props {
  children: React.ReactNode;
  className: string;
}

export default function Layout({ children, className }: Props) {
  return (
    <div className={`site-container ${className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
