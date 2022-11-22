import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import './index.css'
import * as serviceWorker from './Helper/serviceWorker'
import client from './Apollo/apollo.config'
import App from './App'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

ReactDOM.createRoot(document.getElementById('root'))
  .render(
    <ApolloProvider client={client}>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </ApolloProvider>

  )

serviceWorker.unregister()
