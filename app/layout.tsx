import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Vivek Prajapati',
    description: 'Vivek Prajapati | MERN Stack Developer',
    icons: '/favicon.png',
    creator:"Vivek Prajapati",
    
    authors: [
        {
            name: 'Vivek Prajapati',
            url: 'https://github.com/Vivek-Prajapatii',
        },
    ],
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={`text-text bg-background dark`}>
                <Navbar />
                {children}
                <Footer />
                <Toaster />
            </body>
        </html>
    )
}
