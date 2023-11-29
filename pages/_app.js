import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
  return (
    <div dir="rtl">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
