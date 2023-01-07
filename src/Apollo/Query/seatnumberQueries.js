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
