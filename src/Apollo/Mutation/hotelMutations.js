import { gql } from '@apollo/client'

const hotelMutations = {
  CREATEHOTEL: gql`
  mutation createHotel(
    $city:String!
    $star: Int!
    $startDate:String!
    $endDate:String!
    $name:String!
    $capacity:Int!
    $address: String!
    $price: Float!
  $creator:String!
    
  ){
    createHotel(
    hotelInput:{
    city:$city
    star: $star
     startDate:$startDate
     endDate:$endDate
     name:$name
     price:$price
     capacity:$capacity
    address: $address
  creator :$creator
    
  }
  )
{
    _id
    city
    star
     startDate
     endDate
     name
     capacity
    address
  price

}
}
    
  `,
  BUYHOTEL: gql`
  mutation hotelBuy(
    $room:ID!
  $hotel:ID!
    $user:ID!
  $name:[String!]
    $date:[String!]
    $gen:[String!]
    $nationalcode:[String!]
    $price:Float!
){
  hotelBuy(
      hotelId:$hotel
  roomId:$room
      userId:$user
    hotelBuyInput:{
      fullName:$name,
      nationalCode:$nationalcode
      birthDate:$date
      gendere:$gen
      price:$price
    }

    
  )
  {
  
    
    user{
      _id
      username
      password
      email
    }
    room{
      _id
      roomNumber1
      roomNumber2
      floor
      name1
      name2
      capacity
      information
      isDelete
      price
    }
    hotel{
      _id
      city
      star
       startDate
       endDate
       name
       capacity
      address
    price
    }
    isDelete
    fullName
    birthDate
    nationalCode
    gendere
    _id
    price
  }

}
    
  `,
  TICKET: gql`
  mutation makeHotelTicket(
    $hotelBuy:ID!
 $date:String!
    $serialId:Int!
  $codeId:Int!
  $search:String!
){
  makeHotelTicket(
      hotelBuy:$hotelBuy

    hotelTicketInput:{
      date:$date
    serialId:$serialId
  codeId:$codeId
  searchId:$search
    }

    
  )
  {
  
    
  _id
  date
    serialId
    codeId
    hotelBuy{
     
      _id
      fullName
      user{
        _id
        email
      }
      room{
        name1
        floor
      }
      hotel{
        name
        address
      }
    }
    
  }

}
  `,
  UPDATEHOTELCAPACITY: gql`
  mutation updateHotelCapacity($id:ID!,$capacity:Int!){
    updateHotelCapacity(id:$id,capacity:$capacity){


     capacity
      
    }
  }
  `

}

export default hotelMutations
