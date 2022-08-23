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
  USERS: gql`
  query user($userId: String) {
    user(userId: $userId) {
      username
      
    }
  }
`
}

export default userQueries
