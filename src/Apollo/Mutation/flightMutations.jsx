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


  capacity
  _id
  date
}
}
    
  `,

  FLIGHTBUY: gql`
  mutation airplaneBuy(
    $flightId:ID!
    $user:ID!
  $name:[String!]
    $date:[String!]
    $gen:[String!]
    $nationalcode:[String!]
    $price:Float!
){
  airplaneBuy(
      flightId:$flightId
      userId:$user
    airplaneBuyInput:{
      fullName:$name,
      nationalCode:$nationalcode
      birthDate:$date
      gendere:$gen
      price: $price
    }

    
  )
  {
  
    
    user{
      _id
      username
      password
      email
    }
   
    flight{
      _id
flightClass
originName
      destinationName
      airportOrigin
      airportDestination
      arrivalTime
      departureTime
      flightNumber
      date
      price
      capacity
      information
      airplaneModel
      allowedLoggage
      airplaneCompany
      
    }
    isDelete
    fullName
    birthDate
    nationalCode
    gendere
    _id
  }

}
    
    
  `,
  FLIGHTTICKET: gql`
  mutation makeFlightTicket(
    $flightBuy:ID!
 $date:String!
    $serialId:Int!
  $codeId:Int!
  $seatnumber:[Int!]
  $searchId:String!
){
  makeFlightTicket(
    flightTicketInput:{
      date:$date
    serialId:$serialId
  codeId:$codeId
      seatnumber:$seatnumber
    searchId:$searchId
    
  },flightBuy:$flightBuy    
  )
  {
  
    flightBuy{
      
   
    user{
      _id
      username
      password
      email
    }
   
    flight{
      _id
flightClass
originName
      destinationName
      airportOrigin
      airportDestination
      arrivalTime
      departureTime
      flightNumber
      date
      price
      capacity
      information
      airplaneModel
      allowedLoggage
      airplaneCompany
      
    }}
    _id
    serialId
    codeId
    searchId
    date
    seatnumber
  }

}
    
    
  `,
  UPDATEFLIGHTCAPACITY: gql`
  mutation updateFlightCapacity($id:ID!,$capacity:Int!){
    updateFlightCapacity(id:$id,capacity:$capacity){
    _id
    }
  }
    
  `

}

export default flightMutations
