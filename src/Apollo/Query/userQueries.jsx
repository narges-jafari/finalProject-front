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
  SEARCHUSERBYID: gql`
  query searchUserById($id:ID!){
    searchUserById(id:$id){
    
       
   username
      _id
      password
      email
      }
    }
  
`,

}

export default userQueries
