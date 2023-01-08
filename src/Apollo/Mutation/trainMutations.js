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
      _id
  }
  capacity
  _id
  date
}
}
    
  `,
  TRAINBUY: gql`
  mutation trainBuy(
    $trainId:ID!
    $user:ID!
  $name:[String!]
    $date:[String!]
    $gen:[String!]
    $nationalcode:[String!]
    $price:Float!
){
  trainBuy(
    trainId:$trainId
      userId:$user
      trainBuyingInput:{
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
    isDelete
    fullName
    birthDate
    nationalCode
    gendere
    _id
  }

}
    
    
  `,
  TRAINTICKET: gql`
  mutation makeTrainTicket(
    $trainBuy:ID!
  $date:String!
     $serialId:Int!
   $codeId:Int!
   $seatnumber:[Int!]
   $hallDegree:[String!]
   $hallNumber:[String!]
   $trainCompartment:[Int!]
     $searchId:String!
 
 ){
   makeTrainTicket(
     trainTicketInput:{
         date:$date
     serialId:$serialId
   codeId:$codeId
       seatnumber:$seatnumber
     searchId:$searchId
     trainCompartment:$trainCompartment
     hallNumber:$hallNumber
     hallDegree: $hallDegree
     
   },trainBuy:$trainBuy    
   ){
     _id
   }
  
   }
   
   
   
 
 
     
    
    
  `,
  UPDATETRAINCAPACITY: gql`
  mutation updateTrainCapacity($id:ID!,$capacity:Int!){
    updateTrainCapacity(id:$id,capacity:$capacity){
    _id
    }
  }
    
  `

}

export default trainMutations
