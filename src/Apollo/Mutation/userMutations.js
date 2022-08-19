import { gql } from '@apollo/client'

const userMutations = {
  CREATEUSER: gql`
  mutation createUser(
    $username: String!,
     $password: String!,
     $ email: String!, 
     $fullName:  String! ,
     $birthdate:String!,
     $ nationalcode:  String!
  ){
  createUser(
  userInput:{
    username:  $username ,
    email: $ email ,
    password:  $password ,
    fullName:  $fullName ,
    birthdate:  $birthdate ,
    nationalcode:  $ nationalcode 
  }
  )
  
  {
 
    nationalcode
 
  }
}
    
  `

}

export default userMutations
