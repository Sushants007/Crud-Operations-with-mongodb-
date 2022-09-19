import { useForm } from 'react-hook-form';
import { ApolloProvider, gql, useMutation } from '@apollo/client';
import toast, { Toaster } from 'react-hot-toast';
import client from '../apollo-client';


const deleteMutation=gql(`
mutation DeleteData($deleteDataId: String) {
  deleteData(id: $deleteDataId)
}`)

const Delete_Container = () => {
  const [deleteQuery, { data, loading, error }] =
    useMutation(deleteMutation);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //console.log(handleSubmit)

  const onSubmit = async (data) => {
    console.log(data);
    //const variables={Country,Year,Area,Population};

  
    //console.log(variables)
    try {
      toast.promise(deleteQuery({variables:{deleteDataId:data.id}}), {
        loading: 'Deleting..',
        success: 'Deleted!🎉',
        error: `Something went wrong 😥 Please try again -  ${error}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bg-gradient-to-r from-gray-700 h-screen'>
    <div className=' bg-gray-400 fixed text-center shadow-md shadow-gray-900/50 h-20 w-screen font-medium leading-tight text-4xl mt-0 mb-2 text-neutral-900 font-mono'><div className='h-5'></div>Delete</div>
    <div className='h-20'></div>
    <div className="container mx-auto max-w-md py-12">
      <Toaster />
      <form
        className="grid grid-cols-1 gap-y-6 shadow-lg shadow-gray-400  p-8 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="block">
          <span className="text-gray-900 ">Element Id</span>
          <input
            placeholder="1177e21-429b-b9cb-9f2fb00e0b23"
            name="Id"
            type="text"
            {...register('id', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>
        
        
        

        <button
          disabled={loading}
          type="submit"
          className="my-4 capitalize bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="w-6 h-6 animate-spin mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
              Deleting...
            </span>
          ) : (
            <span>Delete data with this Id</span>
          )}
        </button>
      </form>
      <div className="flex justify-evenly bg-gray-50 hover:bg-gray-200 checked:b--500 shadow-md rounded px-8 pt-6 pb-8 mb-4 border-inherit">
                  {<a href='./Read'>Go back to read</a>}
                </div>
                <div className="flex justify-evenly bg-gray-50 hover:bg-gray-200 checked:bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 border-inherit">
                  {<a href='./'>Go back to main</a>}
                </div>
    </div>
    </div>
  );
};

export default function Delete(){
    return(
        <ApolloProvider client={client}>
            <Delete_Container/>
        </ApolloProvider>
    )
}