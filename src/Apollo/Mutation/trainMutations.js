import { gql } from '@apollo/client'

const trainMutations = {
  CREATETRAIN: gql`
  mutation createTrain(
  
    $originName:String! 
    $destinationName: String!
    $price: Float!
    $date:String!
    $departureTime:String!
    $arrivalTime:String!
  $hallType:String!
    $capacity:Int! 
    $trainNumber:Int!
    $information:[String!]
    $railwayOrigin:String!
    $railwayDestination:String!
    $railCompany:String!
    $allowedLoggage:Int!  
    $creator:String!    
  ){
    createTrain(
        trainInput:{
            originName:$originName,
            destinationName:$destinationName,
           price :$price,
           date :$date
            departureTime,:$departureTime,
           arrivalTime :$arrivalTime,
            railCompany:$railCompany,
            capacity:$capacity,
           information :$information,
           trainNumber :$trainNumber,
              railwayOrigin:$railwayOrigin,
            railwayDestination:$railwayDestination,
            allowedLoggage:$allowedLoggage,
           creator :$creator,
            hallType:$hallType
    
  }
  )
{


  
    creator{
      fullName
  }
  capacity
  _id
  date
}
}
    
  `

}

export default trainMutations
