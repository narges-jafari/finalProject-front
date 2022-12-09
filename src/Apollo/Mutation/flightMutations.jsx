import { gql } from '@apollo/client'

const flightMutations = {
  CREATEFLIGHT: gql`
  mutation createFlight(
    $originName:String! 
    $destinationName: String!
    $price: Float!
    $date:String!
    $flightClass:String!
    $departureTime:String!
    $arrivalTime:String!
    $flightNumber:Int!
    $capacity:Int! 
    $airportOrigin:String!
    $airportDestination:String!
    $information:[String!]
    $airplaneModel:String!
    $allowedLoggage:Int!
    $airplaneCompany:String!
    $creator:String!
    
  ){
    createFlight(
  flightInput:{
    originName:$originName,
    destinationName:$destinationName,
   price :$price,
   date :$date
    flightClass:$flightClass,
    departureTime,:$departureTime,
   arrivalTime :$arrivalTime,
    flightNumber:$flightNumber,
    capacity:$capacity,
    airportOrigin:$airportOrigin,
    airportDestination:$airportDestination,
   information :$information,
   airplaneModel :$airplaneModel,
    allowedLoggage:$allowedLoggage,
   airplaneCompany :$airplaneCompany,
   creator :$creator
    
  }
  )
{


  
    creator{
      fullName
  }
  capacity
  _id
  date
}
}
    
  `

}

export default flightMutations
