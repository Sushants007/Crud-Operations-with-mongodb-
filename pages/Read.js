import {PrismaClient} from '@prisma/client'
export default function Read({dataall}){
   
    return(
      
        <div className='bg-gradient-to-r from-gray-700 flex-col justify-evenly align-middle relative'>
          <div className=' bg-gray-400 fixed text-center shadow-md shadow-gray-900/50 h-20 w-screen font-medium leading-tight text-4xl mt-0 mb-2 text-neutral-900 font-mono'>Read
            <div className='flex justify-end'>
                <div></div>
                <a href="./Create" className=' justify-end bg-transparent hover:bg-black text-white text-sm hover:text-gray-500 py-2 border border-black hover:border-transparent rounded w-1/8 px-5'>Create</a>
            </div>
            </div>
          <div className='h-20'></div>
          <div className='flex-col w-max'>
          <table className='table-auto border-collapse border border-slate-400 shadow-md w-screen h-screen'>
            <thead>
              <tr className='h-20 align-top'>
                  <th className="border-collapse border shadow-md antialiased font-mono">S.No</th>
                  <th className="border-collapse border shadow-md antialiased font-mono">id</th>
                  <th className="border-collapse border shadow-md antialiased font-mono">Year</th>
                  <th className='border-collapse border shadow-md antialiased font-mono'>Country</th>
                  <th className='border-collapse border shadow-md antialiased font-mono '>Total_population</th>
                  <th className='border-collapse border shadow-md antialiased font-mono '>Area_square_kilometres</th>
                  <th className='border-collapse border shadow-md antialiased font-mono '>Actions</th>
              </tr>
            </thead>
            
            {dataall.map((country,i) => (
  
              <tbody key={i}>
                <tr className='hover:bg-blue-50'>
                  <td className='border-collapse border shadow-md'>{i}</td>
                  <td className='border-collapse border shadow-md'>{country.id}</td>
                  <td className='border-collapse border shadow-md'>{country.Year}</td>
                  <td className='border-collapse border  shadow-md'>{country.Country}</td>
                  <td className='border-collapse border  shadow-md'>{country.Total_population}</td>
                  <td className='border-collapse border  shadow-md'>{country.Area_square_kilometres}</td>
                  <td className='border-collapse border  shadow-md'>{<div className='flex justify-evenly'><a href="./Update" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Edit</a><a href='./Delete' className='bg-transparent hover:bg-red-500 text-Red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'>Delete</a></div>}</td>
                </tr>
              </tbody>

              
          ))}
          
            </table>
            </div>
          </div>
    )
}
export async function getStaticProps() {
  const prisma = new PrismaClient()
  const dataall = await prisma.data.findMany()
  return {
    props : { dataall }
  }
}






/*
 const onClickhandle=(e)=> {
        const value= e.target.value;
        console.log(value)
        // Use `value` ...
    }
<div>
                    <button onClick={(e)=>onClickhandle(e)}class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                            Update
                                            </button>
<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Delete
</button>
              </div>*/