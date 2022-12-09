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
    
  `

}

export default seatNumberMutations
