
import Header from "@/components/Header";
import TopBar from "@/components/Home/TopBar";
import "./globals.css";
import Footer from "@/components/Footer";
import Head from "next/head";



export const metadata = {
  img:"/5.png",
  title: "IIA GURAGON",
  description: "AERONAUTICS ENGINEERING COLLEGE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="/5.png" />
  <title>IIA GURGAON</title>
  <script src="https://coolors.co/palette-widget/widget.js"></script>
  <script data-id="008817269207344369">new CoolorsPaletteWidget("008817269207344369", ["F04861","F36F58","DEE4E2","303380","FFFFFF"]); </script>
</head>
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
