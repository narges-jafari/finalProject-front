import { gql } from '@apollo/client'

const userQueries = {
  // LOGIN: gql``,
  LOGIN: gql`
    query login($username: String!, $password:String!) {
      login(password: $password ,username:$username) {
        token
        userId
        
      }
    }
  `,

}

export default userQueries
