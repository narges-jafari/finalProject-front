import { gql } from '@apollo/client'

const flightMutations = {
  CREATEFLIGHT: gql`
  mutation createFlight(
    $originName:String! ,
    $destinationName: String!
    $capacity: Int!,
    $creator:String!
    
    
  ){
    createFlight(
  flightInput:{
    originName:$originName,
    destinationName:  $destinationName,
    creator:$creator,
    capacity: $capacity
    
  }
  )
{


  
    creator{
      fullName
  }
  capacity
  _id
}
}
    
  `

}

export default flightMutations
