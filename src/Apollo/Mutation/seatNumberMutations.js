import { gql } from '@apollo/client'

const seatNumberMutations = {
  ADDSEATNUMBER: gql`
  mutation addSeatNumber(
    $number:Int!
    $flight:String! 
  ){
    addSeatNumber(
    seatnumberInput:{
      number:  $number
      flight:$flight 
    
  }
  )
{
number
isDelete
}
}
    
  `,
  ADDTRAINSEATNUMBER: gql`
  mutation addSeatNumberTrain(
    $number:Int!
    $train:String!
    $trainCompartment:Int!
   $hallDegree:String!
   $hallNumber:String!
  ){
    addSeatNumberTrain(
      seatnumberTrainInput:{
        number: $number,
        trainCompartment:$trainCompartment,
      hallDegree:$hallDegree,
      hallNumber:$hallNumber,
     train: $train
    
  }
  )
{
number
}
}
    
  `,
  RESERVEDSEATNUMBER: gql`
  mutation reservedFlightSeat($id:[String!],$isDelete:Boolean!){
    reservedFlightSeat(id:$id,isDelete:$isDelete){
      _id
      
    }
  }
    
  `

}

export default seatNumberMutations
