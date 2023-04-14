import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, SubscribeProvider } from '@/context';

const httpLink = new HttpLink({
  uri:
    process.env.NODE_ENV == 'development'
      ? 'http://localhost:5000'
      : 'https://api.minitrader.ai',
});

const authLink = new ApolloLink((operation, forward) => {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <SubscribeProvider>
          <Toaster />
          <Component {...pageProps} />
        </SubscribeProvider>
      </ApolloProvider>
    </AuthProvider>
  );
}
