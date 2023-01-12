import { gql } from '@apollo/client'

const seatnumberQueries = {
  // LOGIN: gql``,
  GETFLIGHTSEATNUMBER: gql`
  query getFlightSeatnumber($flight:String!,$isDelete:Boolean!){
    getFlightSeatnumber(flight:$flight,isDelete:$isDelete){
      number
      _id
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
    }
  }
  `,

  GETBUSSEATNUMBER: gql`
  query getBusSeatnumber($bus:String!,$isDelete:Boolean!){
    getBusSeatnumber(bus:$bus,isDelete:$isDelete){
      number
      _id
      bus{
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
  }
  `,
  GETTRAINSEATNUMBER: gql`
  query getTrainSeatnumber($train:String!,$isDelete:Boolean!){
    getTrainSeatnumber(train:$train,isDelete:$isDelete){
      number
      _id
      trainCompartment
      hallDegree
      hallNumber
      train{
        _id
        railCompany
  originName
        destinationName
        railwayOrigin
        railwayDestination
        arrivalTime
        departureTime
        trainNumber
        date
        price
        capacity
        information
        hallType
        allowedLoggage
      }
    }
  }
  `,
  SEARCHUSERBYID: gql`
  query searchUserById($id:ID!){
    searchUserById(id:$id){
    
       
   username
      _id
      password
      email
      role
      }
    }
  
`

}

export default seatnumberQueries
