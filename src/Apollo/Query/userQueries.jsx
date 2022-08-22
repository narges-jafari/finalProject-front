import { gql } from '@apollo/client'

const userQueries = {
  // LOGIN: gql``,
  LOGIN: gql`
    query login($username: String!, $password:String!) {
      login(password: $password ,username:$username) {
        userId
        token
      }
    }
  `
  ,
  USERS: gql`
  query users($userId: String!) {
    users(userId: $userId) {
      username
      
    }
  }
`
}

export default userQueries
