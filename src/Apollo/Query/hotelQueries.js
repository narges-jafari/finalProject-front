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

    
  }
}
`,

SEARCHHOTELBUYBYID: gql`

query searchHotelBuyById($id:ID!){
  searchHotelBuyById(id:$id){
    fullName
    birthDate
    gendere
    nationalCode
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
        user{
      _id
      username
      password
      email
    }
  }
}
`,
SEARCHHOTELTICKET: gql`

query searchHotelTicket($id:ID!,$date:String!){
  searchHotelTicket(hotelBuy:$id,date:$date){
    serialId
    _id
    codeId
    date
    hotelBuy{
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
        user{
      _id
      username
      password
      email
    }
  }
  }
}
`,
SEARCHHOTELTICKETBYID: gql`

query searchHotelTicketById($id:ID!){
  searchHotelTicketById(id:$id){
    serialId
    _id
    codeId
    date
    hotelBuy{
      fullName
    birthDate
    gendere
    nationalCode
      
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
        user{
      _id
      username
      password
      email
    }
  }
  }
}
`,
SEARCHHOTELTICKETBYUSERID: gql`

query searchHotelTicketByUserId($id:String!){
  searchHotelTicketByUserId(userId:$id){
    serialId
    _id
    codeId
    searchId
    date
    hotelBuy{
      fullName
    birthDate
    gendere
    nationalCode
      
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

  }
  }
}
`,






}

export default hotelQueries