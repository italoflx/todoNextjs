import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jhon ToDoList',
  description: 'From Italo to Buzzvel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-200 ${inter.className}`} >{children}</body>
    </html>
  )
}
