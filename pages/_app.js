import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
  return (
    <div dir="rtl" className="container-fluid container-xxl">
      <Navbar />
      <div className="containerMain"></div>
      <Component {...pageProps} />
    </div>
  );
}
