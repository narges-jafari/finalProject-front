import { InMemoryCache, ApolloClient } from '@apollo/client'
import { setContext } from 'apollo-link-context'
import { createUploadLink } from 'apollo-upload-client'

import { AUTH_TOKEN, USER_ID } from '../constants/auth'
// import { onError } from "apollo-link-error";

// Log any GraphQL errors or network error that occurred

const httpLink = new createUploadLink({ // eslint-disable-line
  uri: 'http://localhost:4000/graphql'

})

const authLink = setContext((_, { headers }) => {
  const token = window.localStorage.getItem(AUTH_TOKEN)
  const creator = window.localStorage.getItem(USER_ID)
  return {
    headers: {
      ...headers,
      token: token || '',
      creator: creator || ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),

  onError: (e) => {
    console.log(e)
  }
})

export default client
