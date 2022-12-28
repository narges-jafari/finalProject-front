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
`

}

export default flightQueries
