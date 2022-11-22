import { gql } from '@apollo/client'

const flightMutations = {
  CREATEFLIGHT: gql`
  mutation createFlight(
    $originName:String! ,
    $destinationName: String!
    $price: Float!
    
  ){
    createFlight(
  flightInput:{
    originName:$originName,
    destinationName:  $destinationName,
    price:   $price,
    
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