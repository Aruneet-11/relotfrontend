'use client'
import { usePathname } from 'next/navigation';
import Footer from "./components/Footer";
import Navbar from "./components/navbar"

export default function Home() {
  

  return (
    <main>
    
      <div className="container mx-auto p-4 mt-8">
        <h1 className="text-2xl font-bold">Welcome to RELOT</h1>
        <p className="mt-4">Your premium shopping destination</p>
      </div>

    </main>
  )
}