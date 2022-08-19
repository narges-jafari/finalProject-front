import { gql } from '@apollo/client'

const userQueries = {
  // LOGIN: gql``,
  LOGIN: gql`
    query login($email: String!, $password:String!) {
      login(password: $password ,email:$email) {
        userId
      }
    }
  `
}

export default userQueries
