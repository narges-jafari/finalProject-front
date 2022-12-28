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
  creator{
    fullName
  }
}
}
    
  `

}

export default hotelMutations
