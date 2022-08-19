import { gql } from '@apollo/client'

const flightMutations = {
  CREATEFLIGHT: gql`
  mutation createFlight(
    $originName:String! ,
    $destinationName: String!
    $price: Float!
    $flightClass:String!
    $departureTime:String!
    $arrivalTime:String!
    $capacity:Int!
    $flightNumber:Int!
    $airportOrigin:String!
    $airportDestination:String!
    $information:String!
    $date:String!
    $airline:String!
    $airplaneModel:String!
    $allowedLoggage:Int!
  ){
    createFlight(
  flightInput:{
    originName:$originName,
    destinationName:  $destinationName,
    price:   $price,
    flightClass: $flightClass,
    departureTime: $departureTime,
    capacity:$capacity,
    flightNumber: $flightNumber,
    airportOrigin: $airportOrigin,
    airportDestination: $airportDestination,
    information: $information,
    date:  $date,
    airline:$airline,
    airplaneModel:  $airplaneModel,
    allowedLoggage:   $allowedLoggage,
    arrivalTime:$arrivalTime
    
  }
  )
  
  {
 
    airplaneModel
  }
}
    
  `

}

export default flightMutations
