import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Navber from "@/components/Layout/Navber";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Navber />
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
