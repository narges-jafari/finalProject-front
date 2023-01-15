import { gql } from '@apollo/client'

const trainQueries = {
  // LOGIN: gql``,
  SEARCHTRAIN: gql`
    query searchTrain(
        $originName: String!
        $destinationName: String!
        $hallType: String!
        $date: String!
      ) {
        searchTrain(
            originName:  $originName
            destinationName: $destinationName
            hallType: $hallType
            date: $date
          ) {
            _id
            originName
    destinationName
   price 
   date 
   arrivalTime
   departureTime
   railCompany 
   hallType
    capacity
    trainNumber
    railwayOrigin
    railwayDestination 
    information 
    allowedLoggage         
      }
    }
  `,
  SEARCHTRAINBYID: gql`
  query searchTrainbyId(
 
    $id:ID!
    ) {
        searchTrainbyId(
 
      id:$id
      ) {
        information
        allowedLoggage
        price
      
    }
  }
`,

GETALLTRAINTICKETBYDATE: gql`
query allTrainTicketbyDate($date:String!){
  allTrainTicketbyDate(date:$date){
    trainBuy{
      train{
        _id
        originName
  destinationName
      }
      user{
        username
      }
    }
    serialId
    date
  

  }
}
`,
GETLASTTRAINBUY: gql`
query getAllTrainBuy{
  getAllTrainBuy{
    _id
  }
}
`,

GETALLTRAINTICKET: gql`
query getAllTrainTicket{
  getAllTrainTicket{
    trainBuy{
      train{
        _id
        originName
  destinationName
  price 
  date 
  departureTime
  arrivalTime 
  railCompany
  trainNumber
  railwayOrigin
  railwayDestination
  hallType
  capacity
  information  
  allowedLoggage
   
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
    hallDegree
    hallNumber
    trainCompartment
    
  }
}
`,
  SEARCHTRAINBYDATE: gql`
query searchTrainbyDate(

  $date:String!
  ) {
    searchTrainbyDate(

    date:$date
    ) {
        _id
        originName
destinationName
price 
date 
arrivalTime
departureTime
railCompany 
hallType
capacity
trainNumber
railwayOrigin
railwayDestination 
information 
allowedLoggage    
    
  }
}
`,
  SEARCHTRAINBYNAME: gql`
query searchTrainbyName(

  $originName:String!
  ) {
    searchTrainbyName(

      originName:$originName
    ) {
        _id
        originName
destinationName
price 
date 
arrivalTime
departureTime
railCompany 
hallType
capacity
trainNumber
railwayOrigin
railwayDestination 
information 
allowedLoggage  
    
  }
}
`,
  SEARCHTRAINICKETBYID: gql`
query searchTrainTicketById($id:ID!){
  searchTrainTicketById(id:$id){
 
    trainBuy{
      train{
        _id
        originName
  destinationName
  price 
  date 
  departureTime
  arrivalTime 
  railCompany
  trainNumber
  railwayOrigin
  railwayDestination
  hallType
  capacity
  information  
  allowedLoggage
   
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
    hallDegree
    hallNumber
    trainCompartment
    
  }
}
`,
  SEARCHTRAINTICKETBYUSERID: gql`
query searchTrainTicketByUserId($userId:String!){
  searchTrainTicketByUserId(userId:$userId){
    trainBuy{
      train{
        _id
        originName
  destinationName
  price 
  date 
  departureTime
  arrivalTime 
  railCompany
  trainNumber
  railwayOrigin
  railwayDestination
  hallType
  capacity
  information  
  allowedLoggage
   
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
    hallDegree
    hallNumber
    trainCompartment
    
  }
}
`

}

export default trainQueries
