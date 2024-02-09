import Link from 'next/link';
import Layout from '../../components/layout';

export default function Products(){
    return(
        <Layout>
            <div>
             <Link href="/products/new" className='bg-blue-800 rounded-md py-1 px-2'>
               <span className='text-white'>
               Add new products
                </span> 
            </Link>
            </div>
        </Layout>
    )
}