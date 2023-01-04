import { gql } from '@apollo/client'

const userMutations = {
  CREATEUSER: gql`
  mutation createUser(
    $username: String!,
     $password: String!,
     $ email: String!, 
     $role:String!

  ){
  createUser(
  userInput:{
    username:  $username ,
    email: $ email ,
    password:  $password ,
    role: $role
 
  }
  )
  
  {
 
    password
 
  }
}
    
  `

}

export default userMutations
