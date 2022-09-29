import Layout from '../components/Layout'
import { useRouter } from 'next/router';
import ButtonUserList from '../components/assets/ButtonUserList';

export default function Home() {
  const usernames = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"]
  const router = useRouter();

  const handleClick = (username) => {
    router.push({
      pathname: `/users/${username}`,
    });
  }

  return (
    <>
      <Layout backButton={false} />
      Top 5 GitHub Users
      Tap the username to see more information
      <ButtonUserList usernames={usernames} fetchUsers={handleClick} />
    </>
  )
}