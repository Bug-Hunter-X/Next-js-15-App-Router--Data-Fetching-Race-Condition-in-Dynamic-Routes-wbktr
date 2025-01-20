// bugSolution.js
import { Suspense } from 'react';
import { use } from 'react';

export default function ProductDetails({ params }) {
  const { data, isLoading, error } = use(()=>{
    return fetch(`/api/products/${params.id}`).then(res => res.json())
  }, [params.id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
}
