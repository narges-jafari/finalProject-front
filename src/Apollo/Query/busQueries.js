import { gql } from '@apollo/client'

const busQueries = {
  // LOGIN: gql``,
  SEARCHBUS: gql`
    query searchBus(
      $originName:String!,
  $destinationName:String!,
  $date:String!
      ) {
        searchBus(
          originName:$originName,
          destinationName:$destinationName,
          date:$date
          ) {
            _id
            originName
    destinationName
   price 
   date 
   busCompany
    departureTime
   arrivalTime 
   busNumber
    capacity
    originTerminal
    destinationTerminal
   information 
       
        
      }
    }
  `,
  SEARCH: gql`
  query searchBusbyId(
 
    $id:ID!
    ) {
      searchBusbyId(
 
      id:$id
      ) {
        information
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
  SEARCHBUSBYNAME: gql`
query searchBusbyName(

  $originName:String!
  ) {
    searchBusbyName(

      originName:$originName
    ) {
      _id
      _id
      originName
destinationName
price 
date 
busCompany
departureTime
arrivalTime 
busNumber
capacity
originTerminal
destinationTerminal
information 
    
  }
}
`,
  SEARCHBUSTICKETBYID: gql`
query searchBusTicketById($id:ID!){
  searchBusTicketById(id:$id){
 
    busBuy{
      bus{
        _id
        originName
  destinationName
  price 
  date 
  busCompany
  departureTime
  arrivalTime 
  busNumber
  capacity
  originTerminal
  destinationTerminal
  information 
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

  GETALLBUSTICKET: gql`
query getAllBusTicket{
  getAllBusTicket{
    busBuy{
      bus{
        _id
        originName
destinationName
price 
date 
busCompany
departureTime
arrivalTime 
busNumber
capacity
originTerminal
destinationTerminal
information 
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
  SEARCHBUSICKETBYUSERID: gql`
query searchBusTicketByUserId($userId:String!){
  searchBusTicketByUserId(userId:$userId){
    busBuy{
      bus{
        _id
        originName
destinationName
price 
date 
busCompany
departureTime
arrivalTime 
busNumber
capacity
originTerminal
destinationTerminal
information 
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

export default busQueries
