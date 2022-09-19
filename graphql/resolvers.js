import prisma from '../lib/prisma';
import {Countrydata} from '../Countrydata';
export const resolvers={
    Query:{
        dataset:()=>prisma.data.findMany()
    },
    Mutation:{
        createData:(parent,args)=>{
            console.log(args);
            const {Country,Year,Area_square_kilometres,Total_population}= args;
            return prisma.data.create({
                data:{
                Country:Country,
                Year:Year,
                Area_square_kilometres:Area_square_kilometres,
                Total_population:Total_population
                }
            })
            
        },
        deleteData:(parent,args)=>{
            console.log(args.id);
            prisma.data.deleteMany({where:{id:args.id}}).then(()=>{return("deleted")})
            
            //if(deleted!=""){return true;}
           
        },
        updateData:(parent,args)=>{
            prisma.data.update({
                where: { id:args.id },
                data: {
                  Country:args.Country,
                  Year:args.Year,
                  Area_square_kilometres:args.Area_square_kilometres,
                  Total_population:args.Total_population
                },
              }).then(()=>{return("updated")})
          //if(dataUpdated!=""){return true}
        }
    }

}