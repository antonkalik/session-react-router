import { useParams } from 'react-router';

export const PostView = () => {
  const params = useParams();

  return <div>Post: {params.uuid} View</div>;
};
