
import Header from "@/components/Header";
import TopBar from "@/components/Home/TopBar";
import "./globals.css";
import Footer from "@/components/Footer";



export const metadata = {
  title: "IIA GURAGON",
  description: "AERONAUTICS ENGINEERING COLLEGE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="">
           <TopBar/>
          <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
