// next
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
// styles and components
import MainContainer from './_components/MainContainer';
import './globals.css'
import { ThemeProvider } from './theme';

export const metadata: Metadata = {
  title: 'Mauro Sosa',
  description: 'Mauro Sosa website / portfolio',
}

const spaceGrotesk = Space_Grotesk({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
       <ThemeProvider>
        <MainContainer>
         <div className="main-content">{children}</div>
        </MainContainer>
       </ThemeProvider>
      </body>
    </html>
  )
}
