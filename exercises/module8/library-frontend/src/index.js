import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000',
  }),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)