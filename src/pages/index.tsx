import Layout from '../../components/layout';
import { useSession } from 'next-auth/react'; // Correct import

export default function Home() {
  const { data: session } = useSession(); // Corrected typo in "data"

  return (
    <Layout>
      <div className='text-blue-900 flex justify-between'>
       <h2>        Hello, <b>{session?.user?.name} </b>
</h2>   
       <div className='flex bg-gray-300 grap-1 overflow-hidden'>
       <img src={session?.user?.image ??  ''} alt='' className='w-7 h-7 rounded-md  ' /> 
     <span className='font-thin text-xs text-black ml-1 py-1.5 '>
     {session?.user?.name}
      </span>
       </div>
      </div>
    </Layout>
  );
}
