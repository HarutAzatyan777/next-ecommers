import { useRouter } from 'next/router';
import Layout from '../../../../components/layout';

export default function EditProductPage() {
  const router = useRouter();
  const { editproduct } = router.query;

  return (
    <Layout>
      <div>
        <h1>Edit Product: {editproduct}</h1>
        {/* Add your edit product form or other content here */}
      </div>
    </Layout>
  );
}
