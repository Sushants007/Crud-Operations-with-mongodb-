import styles from '../styles/Home.module.css'
import client from '../apollo-client';
import { gql } from 'apollo-server-micro';
import {PrismaClient} from '@prisma/client'
import Read from './Read';
import Create from './Create';
import Delete from './Delete';
import Update from './Update';
import Link from 'next/link';

export default function Home({dataall}) {
    
  return (
    <div className='bg-gradient-to-r from-gray-700'>
      <div className=' bg-gray-400 fixed text-center md:text-center shadow-md shadow-gray-900/50 h-40 w-screen font-medium leading-tight text-3xl mt-0 mb-2 text-neutral-900 font-mono'><br/><br/>Navigate to any of the options directly from here...!</div>
          <div className='h-40'></div>
      <div className='flex justify-center'>
          <div className="flex-col justify-center border-solid h-screen" >
                <a href="./Create" className='bg-transparent hover:bg-green-700 text-black font-semibold hover:text-black py-2 px-4 border border-gray-900 hover:border-transparent rounded h-max'>Create</a>       
                <a href="./Read" className='bg-transparent hover:bg-gray-100 text-white font-semibold hover:text-black py-2 px-4 border border-gray-100 hover:border-transparent rounded'>Read</a>
                <a href="./Update" className='bg-transparent hover:bg-gray-900 text-black font-semibold hover:text-white py-2 px-4 border border-gray-900 hover:border-transparent rounded'>Update</a>
               <a href="./Delete" className='bg-transparent hover:bg-red-100 text-white font-semibold hover:text-black py-2 px-4 border border-gray-100 hover:border-transparent rounded'>Delete</a>
          </div>
          </div>
          
    </div>

    
  )
}


/*
{<div className='border-inherit'><Create/></div>
          <div className="border-inherit" ><Delete dataall={dataall}/></div>
          <div className='border-inherit'><Update/></div>}
          
export async function getStaticProps() {
  const { data } = await client.query({
    query:
    gql(`query Query {
      dataset {
        Total_population
        Country
        Year
        Area_square_kilometres
      }
    }`)
  });

  return {
    props: {
      dataall: data.dataset,
    },
 };
}
*/
