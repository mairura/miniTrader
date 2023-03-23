import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV == "development"
      ? "http://localhost:5000"
      : "https://api.minitrader.ai",

  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      {/* <ToastContainer /> */}
      <Toaster />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
