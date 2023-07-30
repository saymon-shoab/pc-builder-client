import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Navber from "@/components/Layout/Navber";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <>
        <Navber />

        <Component {...pageProps} />
      </>
    </SessionProvider>
  );
}
