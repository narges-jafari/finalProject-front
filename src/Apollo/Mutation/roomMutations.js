import { gql } from '@apollo/client'

const roomMutations = {
  ADDROOM: gql`
  mutation addRoomInfo(
    $floor:Int!
    $name:String!
    $roomNumber:Int!
    $numberBed:Int!
    $information:[String!]
    $price:Float!
    $hotel:String!
  ){
    addRoomInfo(
        roomInput:{
            floor:$floor
            name:$name
            roomNumber:$roomNumber
            numberBed:$numberBed
            information:$information
            price:$price
            hotel:$hotel
    
  }
  )
{
    _id
    roomNumber
    floor
    name
    numberBed
    information
    isDelete
    price
    hotel{
        _id
    }


}
}
    
  `

}

export default roomMutations
