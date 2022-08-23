import { InMemoryCache, ApolloClient } from '@apollo/client'
import { setContext } from 'apollo-link-context'
// import { HttpLink, createHttpLink } from 'apollo-link-http'
import { createUploadLink } from 'apollo-upload-client'
import { offsetLimitPagination } from '@apollo/client/utilities'

import { AUTH_TOKEN } from '../constants/auth'

const httpLink = new createUploadLink({ // eslint-disable-line
  uri: 'http://localhost:4000/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem(AUTH_TOKEN)

  return {
    headers: {
      ...headers,
      token: token || ''
      // authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          findSignals: offsetLimitPagination()
        }
      }
    }
  }),
  onError: (e) => {
    console.log(e)
  }
})

export default client
