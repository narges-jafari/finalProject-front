import { gql } from '@apollo/client'

const userMutations = {
  CREATEUSER: gql`
  mutation createUser(
    $username: String!,
     $password: String!,
     $ email: String!, 

  ){
  createUser(
  userInput:{
    username:  $username ,
    email: $ email ,
    password:  $password ,
 
  }
  )
  
  {
 
    password
 
  }
}
    
  `

}

export default userMutations
