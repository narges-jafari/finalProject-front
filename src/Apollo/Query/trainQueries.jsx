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
`

}

export default trainQueries
