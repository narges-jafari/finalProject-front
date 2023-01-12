import { gql } from '@apollo/client'

const busMutations = {
  CREATEBUS: gql`
  mutation createBus(
    $originName:String! 
    $destinationName: String!
    $price: Float!
    $date:String!
    $capacity:Int! 
    $departureTime:String!
    $arrivalTime:String!
    $busNumber:Int!
    $busCompany:String!
    $originTerminal:String!
    $destinationTerminal:String!
    $information:[String!]
    $creator:String!
    
  ){
    createBus(
        busInput:{
    originName:$originName,
    destinationName:$destinationName,
   price :$price,
   date :$date
   busCompany:$busCompany,
    departureTime,:$departureTime,
   arrivalTime :$arrivalTime,
   busNumber:$busNumber,
    capacity:$capacity,
    originTerminal:$originTerminal,
    destinationTerminal:$destinationTerminal,
   information :$information,
   creator :$creator
    
  }
  )
{


  capacity
  _id
  date
}
}
    
  `,

  BUSBUY: gql`
  mutation busBuy(
    $busId:ID!
    $user:ID!
  $name:[String!]
    $date:[String!]
    $gen:[String!]
    $nationalcode:[String!]
    $price:Float!
){
  busBuy(
    busId:$busId
      userId:$user
      busBuyInput:{
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
    isDelete
    fullName
    birthDate
    nationalCode
    gendere
    _id
  }

}
    
    
  `,


  BUSTICKET: gql`
  mutation makeBusTicket(
    $busBuy:ID!
 $date:String!
    $serialId:Int!
  $codeId:Int!
  $seatnumber:[Int!]
  $searchId:String!
){
  makeBusTicket(
    busTicketInput:{
      date:$date
    serialId:$serialId
  codeId:$codeId
      seatnumber:$seatnumber
    searchId:$searchId
    
  },busBuy:$busBuy    
  )
  {
  
    busBuy{
      
   
    user{
      _id
      username
      password
      email
    }
   
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
      
      
    }}
    _id
    serialId
    codeId
    searchId
    date
    seatnumber
  }

}
    
    
  `,
  UPDATEBUSCAPACITY: gql`
  mutation updateBusCapacity($id:ID!,$capacity:Int!){
    updateBusCapacity(id:$id,capacity:$capacity){
    _id
    }
  }
    
  `

}

export default busMutations
