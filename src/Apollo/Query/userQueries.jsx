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
  GETALLUSERS: gql`
  query users{
    users {
      _id
      username
      
    }
  }
`,
  SEARCHUSERBYID: gql`
  query searchUserById($id:ID!){
    searchUserById(id:$id){
    
       
   username
      _id
      password
      email
      role
      }
    }
  
`

}

export default userQueries
