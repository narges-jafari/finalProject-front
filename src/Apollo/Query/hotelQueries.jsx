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

  GETALLHOTELTICKETBYDATE: gql`
query allHotelTicketbyDate($date:String!){
  allHotelTicketbyDate(date:$date){
    hotelBuy{
      hotel{
        _id
        city
  name
      }
      user{
        username
      }
    }
    serialId
    date
  

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

SEARCHALLHOTELTICKET: gql`
query searchAllHotelTicke{
  searchAllHotelTicke{
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

  SEARCHHOTELBUYBYID: gql`

query searchHotelBuyById($id:ID!){
  searchHotelBuyById(id:$id){
    fullName
    birthDate
    gendere
    nationalCode
    _id
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

ALLHOTEL: gql`

query hotels{
  hotels{
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
  ALLHOTELTICKET: gql`

query allHotelTicket{
  allHotelTicket{
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
    _id
      
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
`

}

export default hotelQueries
