import { gql } from '@apollo/client'

const roomQueries = {
  // LOGIN: gql``,
  SEARCHROOMBYHOTELID: gql`
    query searchRoomByHotelId(
        $hotel: String!

      ) {
        searchRoomByHotelId(
          hotel:  $hotel

          ) {
            _id
              floor
              name
              roomNumber
              numberBed
              information
              price
              isDelete
            
        
      }
    }
  `,
  SEARCHROOMBYID: gql`
  query searchRoomById(
 
    $id:ID!
    ) {
      searchRoomById(
 
      id:$id
      ) {
        _id
        floor
        name
        roomNumber
        numberBed
        information
        price
        isDelete
      
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

export default roomQueries
