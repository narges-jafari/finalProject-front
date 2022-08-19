import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import './index.css'
// import * as serviceWorker from './helpers/serviceWorker'
// import './helpers/i18n'
import client from './Apollo/apollo.config'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

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

// serviceWorker.unregister()
