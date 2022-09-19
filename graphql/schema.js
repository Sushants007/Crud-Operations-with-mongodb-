const {gql}= require('apollo-server-micro')

export const typeDefs=gql(
    `type Query{
        dataset:[data]
    }
    type data{
        id:String,
        Country:String,
        Year:String,
        Area_square_kilometres:Int,
        Total_population:Int
    }
    type Mutation{
        createData(Country:String, Year:String, Area_square_kilometres:Int, Total_population:Int): data,
        deleteData(id:String):String,
        updateData(id:String, Country:String, Year:String, Area_square_kilometres:Int, Total_population:Int):Boolean
    }
    `
)
