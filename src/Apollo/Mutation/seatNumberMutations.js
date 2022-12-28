import { gql } from '@apollo/client'

const seatNumberMutations = {
  ADDSEATNUMBER: gql`
  mutation addSeatNumber(
    $number:Int 
    $state: Int
    $trainCompartment: Int
    $flight:String  
  ){
    addSeatNumber(
    seatnumberInput:{
      number:  $number
      state: $state
      trainCompartment:$trainCompartment
      flight:$flight 
    
  }
  )
{
number
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
    
  `

}

export default seatNumberMutations
