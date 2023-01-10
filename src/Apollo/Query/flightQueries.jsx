import { gql } from '@apollo/client'

const flightQueries = {
  // LOGIN: gql``,
  SEARCHFLIGHT: gql`
    query searchFlight(
      $originName:String!,
  $destinationName:String!,
  $flightClass:String!,
  $date:String!
      ) {
        searchFlight(
          originName:$originName,
          destinationName:$destinationName,
          flightClass:$flightClass,
          date:$date
          ) {
            _id
            originName
    destinationName
   price 
   date 
    flightClass
    departureTime
   arrivalTime 
    flightNumber
    capacity
    airportOrigin
    airportDestination
   information 
   airplaneModel 
    allowedLoggage
   airplaneCompany 
       
        
      }
    }
  `,
  SEARCH: gql`
  query searchFlightbyId(
 
    $id:ID!
    ) {
    searchFlightbyId(
 
      id:$id
      ) {
        information
        allowedLoggage
        price
      
    }
  }
`,
  SEARCHFLIGHTBYDATE: gql`
query searchFlightbyDate(

  $date:String!
  ) {
    searchFlightbyDate(

    date:$date
    ) {
      _id
      originName
destinationName
price 
date 
flightClass
departureTime
arrivalTime 
flightNumber
capacity
airportOrigin
airportDestination
information 
airplaneModel 
allowedLoggage
airplaneCompany 
    
  }
}
`,
  SEARCHFLIGHTBYNAME: gql`
query searchFlightbyName(

  $originName:String!
  ) {
    searchFlightbyName(

      originName:$originName
    ) {
      _id
      originName
destinationName
price 
date 
flightClass
departureTime
arrivalTime 
flightNumber
capacity
airportOrigin
airportDestination
information 
airplaneModel 
allowedLoggage
airplaneCompany 
    
  }
}
`,
  SEARCHFLIGHTTICKETBYID: gql`
query searchFlightTicketById($id:ID!){
  searchFlightTicketById(id:$id){
 
    flightBuy{
      flight{
        _id
        originName
  destinationName
  price 
  date 
  flightClass
  departureTime
  arrivalTime 
  flightNumber
  capacity
  airportOrigin
  airportDestination
  information 
  airplaneModel 
  allowedLoggage
  airplaneCompany 
      }
      user{
        username
        password
        email
        _id
      }
      fullName
      nationalCode
      birthDate
      gendere
      price
    }
    seatnumber
    serialId
    codeId
    searchId
    _id
    date
    
  }
}
`,
  GETLASTFLIGHTBUY: gql`
query getAllFlightBuy{
  getAllFlightBuy{
    _id
  }
}
`,
  GETALLFLIGHTTICKET: gql`
query getAllFlightTicket{
  getAllFlightTicket{
    flightBuy{
      flight{
        _id
        originName
  destinationName
  price 
  date 
  flightClass
  departureTime
  arrivalTime 
  flightNumber
  capacity
  airportOrigin
  airportDestination
  information 
  airplaneModel 
  allowedLoggage
  airplaneCompany 
      }
      user{
        username
        password
        email
        _id
      }
      fullName
      nationalCode
      birthDate
      gendere
      price
    }
    seatnumber
    serialId
    codeId
    searchId
    _id
    date
  

  }
}
`,
  SEARCHFLIGHTTICKETBYUSERID: gql`
query searchFlightTicketByUserId($userId:String!){
  searchFlightTicketByUserId(userId:$userId){
      flightBuy{
      flight{
        _id
        originName
  destinationName
  price 
  date 
  flightClass
  departureTime
  arrivalTime 
  flightNumber
  capacity
  airportOrigin
  airportDestination
  information 
  airplaneModel 
  allowedLoggage
  airplaneCompany 
      }
      user{
        username
        password
        email
        _id
      }
      fullName
      nationalCode
      birthDate
      gendere
      price
    }
    seatnumber
    serialId
    codeId
    searchId
    _id
    date
  }
}
`
}

export default flightQueries
