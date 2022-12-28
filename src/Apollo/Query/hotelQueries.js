import { gql } from '@apollo/client'

const hotelQueries = {
  // LOGIN: gql``,
  SEARCHHOTEL: gql`
    query searchHotel(
        $city: String!
        $startDate: String!
        $endDate: String!
      ) {
        searchHotel(
          city:  $city
            startDate: $startDate
            endDate: $endDate
          ) {
            _id
            city
            star
             startDate
             price
             endDate
             name
             capacity
            address
            capacity
      }
    }
  `,
  SEARCHHOTELBYID: gql`
  query searchHotelById(
 
    $id:ID!
    ) {
      searchHotelById(
 
      id:$id
      ) {
        _id
        city
        star
         startDate
         price
         endDate
         name
         capacity
        address
        capacity
     
      
    }
  }
`,
  SEARCHHOTELBYDATE: gql`
query searchHotelbyDate(

  $startDate:String!
  ) {
    searchHotelbyDate(

      startDate:$startDate
    ) {
      _id
      city
      star
       startDate
       price
       endDate
       name
       capacity
      address
      capacity
 
    
  }
}
`,
  SEARCHHOTELBYNAME: gql`
query searchHotelbyName(

  $city:String!
  ) {
    searchHotelbyName(

      city:$city
    ) {
      _id
      city
      star
       startDate
       price
       endDate
       name
       capacity
      address
      capacity

    
  }
}
`

}

export default hotelQueries
