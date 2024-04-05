import Header from "@/components/header";
import './globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Atique | Personal Portfolio',
  description: 'Atique is a Data Scientist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={'${inter.className} bg-gray-50 text-gray-950 h-[5000px] pt-28 sm:pt-'}>
        <div className='bg-[#eeb7b7] absolute top-[-6rem] right-[-11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#b8b8ed] absolute top-[-1rem] -z-10 left-[-11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:-left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        
        <header />
        {children}</body>
    </html>
  )
}
