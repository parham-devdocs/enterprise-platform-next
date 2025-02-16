import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react";
const BebasNeue = localFont({
  src: [
    {  path: './fonts/BebasNeue-Regular.ttf', weight: '400',  style:'noram'},
  ],
  variable: '--font-BebasNeue'
})
const imbPlexSans = localFont({
  src: [
    {  path: './fonts/IBMPlexSans-Bold.ttf', weight: '400', style:'noram' },
    {  path: './fonts/IBMPlexSans.SemiBold.ttf', weight: '500', style:'noram' },
    {  path: './fonts/IBMPlexSans-Medium.ttf',  weight: '600', style:'noram'},
    {  path: './fonts/IBMPlexSans-Regular.ttf',  weight: '700',  style:'noram'},
  ],
  variable: '--font-IBMPlexSand'
})

export const metadata: Metadata = {
  title: "BookWise",
  description: "A Book Review Website",
};

const  RootLayout=({children}:{children:ReactNode})=> {
  return (
    <html lang="en">
      <body
        className={`${BebasNeue.variable} ${imbPlexSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout