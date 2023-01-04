import { gql } from '@apollo/client'

const roomMutations = {
  ADDROOM: gql`
  mutation addRoomInfo(
    $floor:Int!
    $name1:String!
      $name2:String
    $roomNumber1:Int!
      $roomNumber2:Int
    $capacity:Int!
    $information:[String!]
    $price:Float!
    $hotel:String!
  ){
    addRoomInfo(
        roomInput:{
          floor:$floor
          name1:$name1
          name2:$name2
          roomNumber1:$roomNumber1
          roomNumber2:$roomNumber2
          capacity:$capacity
          information:$information
          price:$price
          hotel:$hotel
    
  }
  )
{
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
    hotel{
        _id
    }


}
}
    
  `,
  UPDATEROOMCAPACITY: gql`
  mutation updateRoomCapacity($id:ID!,$capacity:Int!){
    updateRoomCapacity(id:$id,capacity:$capacity){
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
  }
  `,
  RESERVEDROOM: gql`
  mutation reservedRoom($id:ID!,$isDelete:Boolean!){
    reservedRoom(id:$id,isDelete:$isDelete){
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
  }
  `

}

export default roomMutations
