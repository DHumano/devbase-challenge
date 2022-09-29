import Layout from '../../components/Layout';
import Message from '../../components/assets/Message';
import ImageComponent from '../../components/assets/Image';

const Users = ({ data }) => {
  return (
    <>
      <Layout backButton />
      <ImageComponent
        src={data.avatar_url}
        alt={data.bio}
        width={30}
        height={30}
        layout={'responsive'} />
      {data.name}
      {data.location}
    </>
  );
}

export default Users;

Users.getInitialProps = ({ query }) => {
  const { id } = query;
  return fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/users/${id}`,
    {
      method: 'GET'
    })
    .then(res => res.json())
    .then(response => {
      return { data: response };
    })
}