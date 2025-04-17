"use client"

import "./globals.css";
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { usePathname } from 'next/navigation';



// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {

  const pathname = usePathname();
  
  // Define routes where Navbar and Footer should not appear
  const noLayoutRoutes = ['/login', '/register', '/signup'];
  const showLayout = !noLayoutRoutes.includes(pathname);
  
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
       {showLayout && <Navbar />}
       <main> {children}</main>
        {showLayout && <Footer />}
      </body>
    </html>
  );
}
