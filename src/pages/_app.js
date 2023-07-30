import "@/styles/globals.css";
import Navber from "@/components/Layout/Navber";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navber />
      <Component {...pageProps} />
    </>
  );
}
