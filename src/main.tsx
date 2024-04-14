import ReactDOM from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev';
import { client } from './utils/apollo';
import App from './App';
import './theme.css';
import './index.css';

if (process.env.NODE_ENV === 'development') {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
