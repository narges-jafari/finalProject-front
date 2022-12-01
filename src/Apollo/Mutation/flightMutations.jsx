import { gql } from '@apollo/client'

const flightMutations = {
  CREATEFLIGHT: gql`
  mutation createFlight(
    $originName:String! ,
    $destinationName: String!
    $price: Float!,
    $creator:String!
    
    
  ){
    createFlight(
  flightInput:{
    originName:$originName,
    destinationName:  $destinationName,
    price:   $price,
    creator:$creator
    
  }
  )
{


  
    creator{
      fullName
  }
  price
}
}
    
  `

}

export default flightMutations