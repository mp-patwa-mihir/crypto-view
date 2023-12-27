import { Inter } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crypto View',
  description: 'Crypto view is one of the finest website where you can access all of crypto coins details.',
}

const Header = dynamic(() => import('./components/Header'), {
  ssr: false
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='header'><Header /></div>
        {children}
        </body>
    </html>
  )
}
