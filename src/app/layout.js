
import "./globals.scss";
import 'swiper/css';
import CommonLayout from "@/components/CommonLayout";
import { Plus_Jakarta_Sans } from 'next/font/google'
 
const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})
 

export const metadata = {
  title: "Archway",
  description: "Archway",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plus_Jakarta_Sans.className} antialiased`}
      >
        <CommonLayout>
          {children}
        </CommonLayout>
      </body>
    </html>
  );
}
