import Layout from '../../components/layout';
import { useSession } from 'next-auth/react'; // Correct import

export default function Home() {
  const { data: session } = useSession(); // Corrected typo in "data"

  return (
    <Layout>
      <div className='text-blue-900'>
        Hello, {session?.user?.name} {/* Assuming name is the property you want to access */}
        <img src={session?.user?.image} alt='' />
      </div>
    </Layout>
  );
}
