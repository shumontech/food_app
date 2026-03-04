import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import CartProvider from "@/context/CartProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: {
    default: "Tasty Bites",
    template: "%s | Tasty Bites"
  },
  description: "Discover delicious recipes and food reviews on Tasty Bites. Explore a world of flavors, share your culinary creations, and connect with fellow food enthusiasts. Join us on a gastronomic journey today!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="py-5 px-3 items-center flex justify-between gap-5 bg-stone-800">
           
                      <Link href={'/foods'}>
                       <Image
                        className="dark:invert"
                        src="/logo.png"
                        alt="Vercel logomark"
                        width={50}
                        height={40}
                      /></Link>
                     

                      <div className="space-x-4 ">
                       <Link href="/food" className="btn">Foods</Link>
                       <Link href="/review" className="btn">Reviews</Link>
                      </div>
         </header>

         <CartProvider>
           {children}
         </CartProvider>
         
           
         
        
      </body>
    </html>
  );
}
